import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/pt-br';

import api from '../../../../util/api';

import { 
    Container,
    Header,
    Form,
    Buttons,
    FormButtonRegister,
    FormButtonUpdate,
    Status,
    StatusBox,
    StatusBoxContent,

    Body,
    ContainerGroups,
    GroupSearch,
    GroupList,
    Scroll,
    Group,
    GroupText,
    GroupButtons,
    GButtonsEdit,
    GButtonsDel
} from './styles';

import SearchSVG from '../../../../assets/images/busca.svg';
import EditSVG from '../../../../assets/images/edição.svg';
import DelSVG from '../../../../assets/images/lixeira.svg';


export default function()
{
    const [name, setName] = useState("");
    const [groups, setGroups] = useState([]);
    const [groupSelected, setGroupSelected] = useState({
        id: 0,
        name: "",
        selected: false
    });
    const [updateGroup, setGroupUpdate] = useState(0);

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

        loadGroups();
    } , [updateGroup])

    const handleFormUpdate = async () => {
        if(groupSelected.selected)
        {
            try{
                const { id } = groupSelected;

                await api.put(`/admin/group/update/${id}`, {
                    name
                });
    
                toast.success('Grupo atualizado com sucesso!');
    
                setGroupSelected({
                    id: 0,
                    name: "",
                    selected: false
                });
                setGroupUpdate(updateGroup + 1);
                setName("");
            }catch(err)
            {
                toast.error('Não foi possível atualizar o grupo');
            }
        } else {
            toast.error('Não há nenhum grupo selecionado');
        }
    };

    const handleFormRegister = async () => {
        try{
            if(groupSelected.selected)
            {
                toast.error('Por favor, atualize as informações atuais antes de efetuar um novo cadastro');
                return 
            }

            await api.post('/admin/group/create', {
                name
            });

            toast.success('Grupo criado com sucesso!');

            setGroupUpdate(updateGroup + 1);
        }catch(err)
        {
            toast.error('Erro ao criar o grupo');
            console.log(err);
        }
    };

    const handleDeleteGroup = async id => {
        try{
            await api.delete(`/admin/group/delete/${id}`);

            toast.success('Grupo deletado com sucesso!');
            setGroupUpdate(updateGroup + 1);
        }catch(err)
        {
            toast.error('Não foi possível deletar o grupo');
            console.log(err);
        }
    };

    const handleSetGroupSelected = (name, id) => {
        setGroupSelected({
            id,
            name,
            selected: true
        });

        toast.info("Grupo selecionado som sucesso");
    }

    const handleNameChange = data => {
        setName(data.target.value);
    };

    const checkGroupisSelected = group => {
        if(group === groupSelected.name && groupSelected.selected)
        {
            return true;
        } else {
            return false;
        }
    }

    return(
        <Container>
                <Form>
                    <input onChange={handleNameChange} placeholder={groupSelected.selected ? groupSelected.name : "Informe o nome"} />
                    <Buttons>
                        <FormButtonUpdate
                            onClick={handleFormUpdate}
                        >Atualizar</FormButtonUpdate>
                        <FormButtonRegister
                            onClick={handleFormRegister}
                        >Cadastrar</FormButtonRegister>
                    </Buttons>
                </Form>

                <ContainerGroups>
                    <GroupSearch>
                        <img src={SearchSVG} />
                        <input placeHolder="Buscar por grupos"/>
                    </GroupSearch>

                    <GroupList>
                        <Scroll>
                            {groups.map(index => (
                                <Group>
                                    <GroupText selected={checkGroupisSelected(index.name)}>
                                        <p>{index.name}</p>                                        
                                        <small>{index.dateFormatted}</small>
                                    </GroupText>
                                    <GroupButtons>
                                        <GButtonsEdit onClick={() => handleSetGroupSelected(index.name, index.id)}>
                                            <img src={EditSVG} />
                                        </GButtonsEdit>
                                        <GButtonsDel onClick={() => handleDeleteGroup(index.id)}>
                                            <img src={DelSVG} />
                                        </GButtonsDel>
                                    </GroupButtons>
                                </Group>
                            ))}
                        </Scroll>
                    </GroupList>
                </ContainerGroups>

                <Status>
                    <h1>Histórico de atualizações </h1>
                    <StatusBox>
                        <StatusBoxContent>
                            <h2>11</h2>
                            <p>grupos no <br/> último dia</p>
                        </StatusBoxContent>
                        <StatusBoxContent>
                            <h2>102</h2>
                            <p>grupos no <br/> último mês</p>
                        </StatusBoxContent>
                    </StatusBox>
                </Status>

        </Container>
    );
}