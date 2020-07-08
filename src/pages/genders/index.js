import React from 'react';
import { useDispatch } from 'react-redux';

import { navigate } from '../../redux/modules/routes/actions';

import {
    Container,
    Playlists,
    Playlist
} from './styles';

import BackcountryPNG from '../../assets/images/cards/sertanejo.png';
import EletronicPNG from '../../assets/images/cards/eletronica.png';
import FunkPNG from '../../assets/images/cards/funk.png';
import JazzPNG from '../../assets/images/cards/jazz.png';
import PopPNG from '../../assets/images/cards/pop.png';
import ReaggePNG from '../../assets/images/cards/reagge.png';
import RockPNG from '../../assets/images/cards/rock.png';
import SambaPNG from '../../assets/images/cards/samba.png';

export default function()
{
    const dispatch = useDispatch();

    const handleNavGender = gender => {
        dispatch(navigate("Gender", gender))
    }

    return(
            <Container>
               <h1>Navegar</h1> 
               <Playlists>
                   <Playlist type="submit" onClick={() => handleNavGender("Sertanejo")}>
                       <img src={BackcountryPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Eletronica")}>
                       <img src={EletronicPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Funk")}>
                       <img src={FunkPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Jazz")}>
                       <img src={JazzPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Pop")}>
                       <img src={PopPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Reggae")}>
                       <img src={ReaggePNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Rock")}>
                       <img src={RockPNG} />
                   </Playlist>
                   <Playlist type="submit" onClick={() => handleNavGender("Samba")}>
                       <img src={SambaPNG} />
                   </Playlist>
               </Playlists>
            </Container>

    );
}