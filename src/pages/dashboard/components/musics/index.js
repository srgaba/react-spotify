import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/pt-br';

import api from '../../../../util/api';

import {
    Flex,
    Container,
    Form,
    FInputName,
    FInputTime,
    FInputArtist,

    ContainerMusics,
    MusicSearch,
    MusicList,
    MusicScroll,
    Music,
    MusicText,
    MusicButtons,
    MButtonsEdit,
    MButtonsDel,

    ContainerPlaylists,
    PlaylistSearch,
    PlaylistList,
    PlaylistScroll,
    Playlist,
    PlaylistText,
    PButtonAdd,
    
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

export default function()
{
    const [title, setTitle] = useState("");
    const [int, setInt] = useState("");
    const [artist, setArtist] = useState("");
    const [music, setMusic] = useState({
        id: 0,
        name: "",
        exists: false
    });

    const [playlists, setPlaylists] = useState([]);
    const [musics, setMusics] = useState([]);

    const [playlistSelected, setPlaylistSelected] = useState({
        id: 0,
        selected: false
    });

    const [musicSelected, setMusicSelected] = useState({
        id: 0,
        selected: false
    });

    useEffect(() => {
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

        async function loadMusics()
        {
            const answear = await api.get('/admin/music/get_all');

            const musicsFormatted = answear.data.map(index => {
                let object = {
                    ...index,
                    dateFormatted: moment(index.createdAt).startOf('day').fromNow()
                };

                return object;
            });

            setMusics(musicsFormatted);
        }

        loadPlaylists();
        loadMusics();
    }, [])

    const handleTitleChange = data => {
        setTitle(data.target.value);
    };

    const handleIntChange = data => {
        setInt(data.target.value);
    };

    const handleArtistChange = data => {
        setArtist(data.target.value);
    };

    const handleMusicSelected = async id => {
        try{
            const answear = await api.get(`/admin/music/get_especify/${id}`);

            const { title: musicTitle, artist: musicArtist, music_time, music_id, File: { url, name }, Playlist: { id: playlist_id } } = answear.data;

            setTitle(musicTitle);
            setArtist(musicArtist);
            setInt(music_time);
            setMusic({
               id: music_id,
               name,
               exists: true
            });
            setPlaylistSelected({
                id: playlist_id,
                selected: true
            });
            setMusicSelected({
                id,
                selected: true
            });

            toast.success("Música selecionada com sucesso!");
        }catch(err)
        {
            toast.success("Não foi possível selecionar a música");
        }
    }

    const handleMusicFileChange = async data => {
        const form = new FormData();
        form.append('file', data.target.files[0]);

        const { name }  = data.target.files[0];

        try{
            const answear = await api.post('/admin/file/music/create', form);

            const { id } = answear.data;

            setMusic({
                id,
                name,
                exists: true
            });

            toast.success("Música carregada com sucesso!");
        }catch(err)
        {
            toast.error("Não foi possível carregar a música!");
        }
    };

    const handleSetPlaylistSelected = id => {
        setPlaylistSelected({
            id,
            selected: true
        });
    };

    const checkPlaylistIsSelected = id => {
        if(id === playlistSelected.id && playlistSelected.selected)
        {
            return true;
        } else {
            return false;
        }
    };

    const checkMusicIsSelected = id => {
        if(id === musicSelected.id && musicSelected.selected)
        {
            return true;
        } else {
            return false;
        }
    };

    const handleRegister =  async () => {
        try{
            if(musicSelected.selected)
            {
                toast.error("Por favor, atualize a música atual");
                return; 
            };
            if(!playlistSelected.selected)
            {
                toast.error("Você precisa selecionar uma playlist");
                return;
            };

            if(!music.exists)
            {
                toast.error("Você precisa carregar uma música");
                return;
            };

            const { id: playlist_id } = playlistSelected;
            const { id: music_id } = music;

            await api.post('/admin/music/create', {
                playlist_id,
                title, 
                artist,
                music_time: int,
                music_id
            });

            setTitle("");
            setInt("");
            setArtist("");
            setMusic({
                id: 0,
                name: "",
                exists: false
            });
            setPlaylistSelected({
                id: 0,
                selected: false
            })

            toast.success("Música cadastrada com sucesso!");
        }catch(err)
        {
            toast.error("Erro ao cadastrar nova música")
        }
    };

    const handleUpdate = async () => {
        try{
            if(!musicSelected.selected)
            {
                toast.error("Você precisa selecionar uma música");
                return; 
            };

            if(!playlistSelected.selected)
            {
                toast.error("Você precisa selecionar uma playlist");
                return; 
            };

            const { id } = musicSelected;
            const { id: playlist_id } = playlistSelected;
            const { id: music_id } = music;

            const answear = await api.put(`/admin/music/update/${id}`, {
                playlist_id,
                title,
                artist,
                music_time: int,
                music_id
            });

            setTitle("");
            setInt("");
            setArtist("");
            setMusic({
                id: 0,
                name: "",
                exists: false
            });
            setPlaylistSelected({
                id: 0,
                selected: false
            })

            toast.success("Playlist atualizada com sucesos!");
        }catch(err)
        {
            toast.error("Não foi possível atualizar a playlist");
        }
    }

    return(
        <Container>
            <Form>
                <Flex>
                    <FInputName>
                        <p>Título</p>
                        <input onChange={handleTitleChange} value={title}/>
                    </FInputName>
                    <FInputTime>
                        <p>Int</p>
                        <input onChange={handleIntChange} value={int} />
                    </FInputTime>
                </Flex>
                <FInputArtist>
                    <p>Artista</p>
                    <input onChange={handleArtistChange} value={artist} />
                </FInputArtist>
            </Form>

            <ContainerMusics>
                <MusicSearch>
                    <img src={SearchSVG} />
                    <input placeholder="Buscar por músicas"/>
                </MusicSearch>

                <MusicList>
                    <MusicScroll>
                        {musics.map(index => (
                            <Music>
                                <MusicText selected={checkMusicIsSelected(index.id)}>
                                    <p>{index.title}</p>
                                    <small>{index.artist}</small>
                                </MusicText>
                                <MusicButtons>
                                    <MButtonsEdit
                                        onClick={() => handleMusicSelected(index.id)}
                                    >
                                        <img src={EditSVG} />
                                    </MButtonsEdit>
                                    <MButtonsDel>
                                        <img src={DelSVG} />
                                    </MButtonsDel>
                                </MusicButtons>
                            </Music>
                        ))}
                    </MusicScroll>
                </MusicList>
            </ContainerMusics>

            <ChooseFile>
                <input 
                    type="file"
                    accept="music/*"
                    onChange={handleMusicFileChange}
                />
                <img src={MusicPNG} />
                <p>{music.exists ? music.name : "Escolha uma música"}</p>
            </ChooseFile>

            <ContainerPlaylists>
                <PlaylistSearch>
                    <img src={SearchSVG} />
                    <input placeholder="Buscar por playlists"/>
                </PlaylistSearch>
                <PlaylistList>
                    <PlaylistScroll>
                        {playlists.map(index =>  (
                                <Playlist>
                                    <PlaylistText selected={checkPlaylistIsSelected(index.id)}>
                                        <p>{index.name}</p>
                                        <small>{index.dateFormatted}</small>
                                    </PlaylistText>
                                    <PButtonAdd
                                        onClick={() => handleSetPlaylistSelected(index.id)}
                                    > <img src={AddSVG} /> </PButtonAdd>
                                </Playlist>
                        ))}
                    </PlaylistScroll>
                </PlaylistList>
            </ContainerPlaylists>

            <ContainerSubmits>
                <SubmitRegister
                    onClick={handleRegister}
                >Cadastrar</SubmitRegister>
                <SubmitUpdate
                    onClick={handleUpdate}
                >Atualizar</SubmitUpdate>
            </ContainerSubmits>
        </Container>
    );
}