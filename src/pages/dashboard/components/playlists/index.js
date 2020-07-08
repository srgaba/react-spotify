import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import api from '../../../../util/api';
import px2vw from '../../../../util/px2vw';

import {
    Flex,
    Container,
    Form,
    FInputName,
    FInputTag,
    FInputDescription,

    ContainerPlaylists,
    PlaylistSearch,
    PlaylistList,
    PlaylistScroll,
    Playlist,
    PlaylistText,
    PlaylistButtons,
    PButtonsEdit,
    PButtonsDel,

    ContainerGroups,
    GroupSearch,
    GroupList,
    GroupScroll,
    Group,
    GroupText,
    GButtonAdd,
    
    ChooseFile,

    ContainerSubmits,
    SubmitRegister,
    SubmitUpdate
} from './styles';

import SearchSVG from '../../../../assets/images/busca.svg';
import EditSVG from '../../../../assets/images/edição.svg';
import DelSVG from '../../../../assets/images/lixeira.svg';
import MusicPNG from '../../../../assets/images/musica.png';
import AddSVG from '../../../../assets/images/add.svg';
import { toast } from 'react-toastify';

export default function()
{
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [description, setDescription] = useState("");
    const [groups, setGroups] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [groupSelected, setGroupSelected] = useState({
        id: 0,
        selected: false
    });
    const [img, setImg] = useState({
        id: 0,
        url: "",
        exists: false
    });
    const [playlistSelected, setPlaylistSelected] = useState({
        id: 0,
        name: "",
        selected: false
    });

    const [udpateAll, setUpdateAll] = useState(0);


    useEffect(() => {
        async function loadGroups()
        {
            const answear = await api.get('/admin/group/get_all');

            const groupsFormatted = answear.data.map(index => {
                let object = {
                    ...index,
                    dateFormatted: moment(index.createdAt).startOf('day').fromNow()
                };

                return object;
            });

            setGroups(groupsFormatted);
        }

        async function loadPlaylists()
        {
            const answear = await api.get('/playlist/get_all');

            const playlistFormatted = answear.data.map(index => {
                let object = {
                    ...index,
                    dateFormatted: moment(index.createdAt).startOf('day').fromNow()
                };

                return object;
            });

            setPlaylists(playlistFormatted);
        }

        loadPlaylists();
        loadGroups();
    } , [udpateAll])

    const handleNameChange = data => {
        setName(data.target.value);
    };

    const handleTagChange = data => {
        setTag(data.target.value);
    };

    const handleDescriptionChange = data => {
        setDescription(data.target.value);
    };

    const handleSetGroupSelected = id => {
        setGroupSelected({
            id,
            selected: true
        });
    };

    const handlePlaylistSelected = async (id, name) => {
        try{
            const answear = await api.get(`/playlist/get_playlist_especify/${id}`);

            const { description, tag, File: { url, id: imgId } } = answear.data;

            setName(name);
            setDescription(description);
            setTag(tag);
            setImg({
                id: imgId,
                url,
                exists: true
            });


            setPlaylistSelected({
                id,
                name,
                selected: true
            });

            toast.success("Playlist selecionada com sucesso!");
        }catch(err)
        {

        }
    };

    const checkPlaylistIsSelected = id => {
        if(id === playlistSelected.id && playlistSelected.selected)
        {
            return true;
        } else {
            return false;
        }
    }

    const inputImageChange = async data => {
        const form = new FormData();
        form.append('file', data.target.files[0]);

        try{
            const answear = await api.post('/all/file/image/create', form);

            setImg({
                id: answear.data.id,
                url: answear.data.url,
                exists: true
            });
            toast.success('Imagem carregada com sucesso!');
        }catch(err)
        {
            toast.error('Erro ao carregar a imagem');
        }
    };

    const checkGroupisSelected = id => {
        if(id === groupSelected.id && groupSelected.selected)
        {
            return true;
        } else {
            return false;
        }
    };

    const handleSubmitPlaylist = async () => {
        if(playlistSelected.selected)
        {
            toast.error('Primeiro, atualize as informações da playlist atual!');
            return;
        }
        if(!img.exists)
        {
            toast.error('Você precisa carregar uma imagem');
            return;
        }

        if(!groupSelected.selected)
        {
            toast.error('Você precisa selecionar um grupo');
            return;
        }

        try{
            const { id: group_reference } = groupSelected;
            const { id: img_id } = img;

            await api.post('/admin/playlist/create', {
                name,
                description,
                tag,
                group_reference,
                img_id
            });

            setName("");
            setTag("");
            setDescription("");
            setGroupSelected({
                id: 0,
                selected: false
            });
            setImg({
                id: 0,
                url: "",
                exists: false
            });

            setUpdateAll(udpateAll + 1);
            toast.success('Playlist criada com sucesso!');
        }catch(err)
        {
            toast.error('Não foi possível criar a playlist')
        }
    };

    const handleUpdatePlaylist = async () => {
        if(!playlistSelected.selected)
        {
            toast.error("Você precisa selecionar uma playlist");
            return;
        };

        if(!groupSelected.selected)
        {
            toast.error("Você precisa selecionar um grupo");
            return;  
        }

        try{
            const { id: playlistId }  = playlistSelected;
            const { id: group_reference }  = groupSelected;
            const { id: img_id } = img;

            console.log(playlistId, name, description, tag, group_reference, img_id);

            await api.put(`/admin/playlist/update/${playlistId}`, {
                name,
                description,
                tag,
                group_reference,
                img_id
            });

            setName("");
            setTag("");
            setDescription("");
            setGroupSelected({
                id: 0,
                selected: false
            });
            setImg({
                id: 0,
                url: "",
                exists: false
            });
            setPlaylistSelected({
                id: 0,
                name: "",
                selected: false
            })

            setUpdateAll(udpateAll + 1);
            toast.success("Playlist atualizada com sucesso!");
        }catch(err)
        {
            toast.error("Ocorreu um erro ao atualizar a playlist");
        }
    };  

    return(
        <Container>
            <Form>
                <Flex>
                    <FInputName>
                        <p>Nome</p>
                        <input onChange={handleNameChange} value={name} />
                    </FInputName>
                    <FInputTag>
                        <p>Tag</p>
                        <input onChange={handleTagChange} value={tag} />
                    </FInputTag>
                </Flex>
                <FInputDescription>
                    <p>Descrição</p>
                    <input onChange={handleDescriptionChange} value={description} />
                </FInputDescription>
            </Form>

            <ContainerPlaylists>
                <PlaylistSearch>
                    <img src={SearchSVG} />
                    <input placeholder="Buscar por playlists" />
                </PlaylistSearch>

                <PlaylistList>
                    <PlaylistScroll>
                        {playlists.map(index => (
                        <Playlist>
                            <PlaylistText selected={checkPlaylistIsSelected(index.id)}>
                                <p>{index.name}</p>
                                <small>{index.tag}</small>
                            </PlaylistText>
                                <PlaylistButtons>
                                    <PButtonsEdit
                                        onClick={() => handlePlaylistSelected(index.id, index.name)}
                                    >
                                        <img src={EditSVG} />
                                    </PButtonsEdit>
                                    <PButtonsDel>
                                        <img src={DelSVG} />
                                    </PButtonsDel>
                                </PlaylistButtons>
                        </Playlist>
                        ))}
                    </PlaylistScroll>
                </PlaylistList>
            </ContainerPlaylists>

            <ChooseFile>
                <input 
                    type="file"
                    accept="image/*"
                    onChange={inputImageChange}
                />
                {img.exists ? 
                    <img src={img.url} style={{ object: 'fill', height: px2vw(390), width: px2vw(350), marginTop: px2vw(20) }}/>
                :
                    <div>
                        <img src={MusicPNG} />
                        <p>escolha uma imagem</p>
                    </div>
                }
            </ChooseFile>

            <ContainerGroups>
                <GroupSearch>
                    <img src={SearchSVG} />
                    <input placeholder="Selecione o grupo"/>
                </GroupSearch>

                <GroupList>
                    <GroupScroll>
                        {groups.map(index => (
                            <Group>
                                <GroupText selected={checkGroupisSelected(index.id)}>
                                    <p>{index.name}</p>
                                    <small>{index.dateFormatted}</small>
                                </GroupText>
                                <GButtonAdd
                                    onClick={() => handleSetGroupSelected(index.id)}
                                > <img src={AddSVG} /> </GButtonAdd>
                            </Group>
                        ))}
                    </GroupScroll>
                </GroupList>
            </ContainerGroups>

            <ContainerSubmits>
                <SubmitRegister
                    onClick={handleSubmitPlaylist}
                >Cadastrar</SubmitRegister>
                <SubmitUpdate
                    onClick={handleUpdatePlaylist}
                >Atualizar</SubmitUpdate>
            </ContainerSubmits>
        </Container>
    );
}