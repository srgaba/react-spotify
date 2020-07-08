import React, { useState } from 'react';

import api from '../../../util/api';

import {
    NewPContainer,

    NewPBox,

    NewPBoxHeader,
    NewPBoxTitle,
    NewPBoxClose,

    NewPBoxBodyImg,
    InputImage,
    NewPBoxBodyForm,
    NewPBoxBodyFormName,
    NewPBoxBodyFormDescription,
    NewPBoxBodyFormButton
} from './styles';

import EscolhaPNG from '../../../assets/images/Escolha uma imagem.png';

export default function NewPlaylist({ setVisible, refresh })
{


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [fileExist, setFileExist] = useState(false);
    const [fileID, setFileID] = useState(0);
    const [filePreview, setFilePreview] = useState("");

    const handleSubmit = async () => {
        try {
            await api.post('users/playlist/create', {
                name,
                description,
                img_id: fileID
            })

            setVisible();
            refresh();
            //exibir mensagem e fechar o formulário
        } catch(err)
        {

        }
    }

    const handleImageChange = async e => {
        const data = new FormData();
        data.append('file', e.target.files[0]);

        try {   
            const answear = await api.post('all/file/image/create', data);
            const { id, url } = answear.data;

            setFileID(id);
            setFilePreview(url);
            setFileExist(true);
        } catch(err)
        {
            console.log(err);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    return(
        <NewPContainer>
            <NewPBox>
                <NewPBoxHeader>
                    <NewPBoxTitle>Criar playlist</NewPBoxTitle>
                    <NewPBoxClose>
                        <button type="submit" onClick={() => setVisible()}>X</button>
                    </NewPBoxClose>
                </NewPBoxHeader>

                <NewPBoxBodyImg>
                            <InputImage 
                                type="file"
                                id="img"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <img src={fileExist ? filePreview : EscolhaPNG} alt='0'/>

                        <NewPBoxBodyForm>
                            <NewPBoxBodyFormName>
                                <h1>Nome</h1>
                                <input type='text' placeHolder='Minha playlist' onChange={handleNameChange} />
                            </NewPBoxBodyFormName>
                            <NewPBoxBodyFormDescription style={ { marginTop: `30px` } }>
                                <h1>Descrição</h1>
                                <input type='text' onChange={handleDescriptionChange} />
                            </NewPBoxBodyFormDescription>
                        </NewPBoxBodyForm>

                </NewPBoxBodyImg> 

                <NewPBoxBodyFormButton
                    type="submit"
                    onClick={handleSubmit}
                >Criar</NewPBoxBodyFormButton>
            </NewPBox>

        </NewPContainer>
    );
};