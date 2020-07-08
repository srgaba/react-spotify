import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { signInRequest } from '../../redux/modules/auth/actions';

import { 
    Container,
    BoxEffect,
    Box,
    Logo,
    InputLogin,
    InputPassword,
    Button,
    Create
} from './styles';

import SpotifyPNG from '../../assets/images/Spotify.png'

export default function ()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(signInRequest(email, password));
    };

    return(
        <Container>
            <Box>
                    <Logo src={SpotifyPNG} alt="0101" />
                    <InputLogin placeholder="Email" type="email" onChange={handleEmailChange} />
                    <InputPassword placeholder="Senha" type="password" onChange={handlePasswordChange} />
                    <Button
                        type="submit" 
                        onClick={() => handleSubmit()}
                    >Entrar</Button>

                    <Create                 >
                        <p>Criar conta</p>
                    </Create>
            </Box>
        </Container>
    );
}