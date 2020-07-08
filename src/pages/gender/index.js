import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { navigate } from '../../redux/modules/routes/actions';
import { playMusicPlaylist } from '../../redux/modules/player/actions';

import api from '../../util/api';

import { 
    Flex,
    Container,
    Playlists,
    Playlist
 } from './styles';

import BackgroundPNG from '../../assets/images/background.png';
import PlayButtonPNG from '../../assets/images/play.png';
import GoSVG from '../../assets/images/va.svg';

export default function()
{
    const dispatch = useDispatch();
    const gender = useSelector(state => state.routes[2].body.genderSelected);

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function loadPlaylists()
        {
            const answear = await api.get(`playlist/get_playlist_gender_especify/${gender}`);

            setPlaylists(answear.data);

            console.log(answear);
        }

        loadPlaylists();
    }, []);

    const handleSubmitPlayer = playlistID => {
        dispatch(playMusicPlaylist('Home', { playlistID }));
    }

    const handleNavPlaylist = playlistID => {
        dispatch(navigate("Playlist", playlistID))
    }

    const getRandomNumer = () => {
        const randomNumber = parseInt(Math.random() * 1000000);
        return randomNumber;
    };

    return(
        <Container>
                <h1>{gender}</h1>
                <Playlists>
                    {playlists.map(playlist => (
                        <Playlist>
                           <img src={playlist.File.url}/>
                           <div />

                            <object 
                                onClick={() => handleNavPlaylist(playlist.id)}
                                type="submit" 
                            >
                            <img src={GoSVG} alt="0"/>
                            </object>
                            <button 
                                onClick={() => handleSubmitPlayer(playlist.id)}
                                    type="submit"
                            >
                            <img src={PlayButtonPNG} />
                            </button>

                            <h1>{playlist.name}</h1>
                            <h2>{playlist.description}</h2>
                            <h3>{getRandomNumer()} followers</h3>
                        </Playlist>
                    ))}
                </Playlists>
        </Container>
    );
}