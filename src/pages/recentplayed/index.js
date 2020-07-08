import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { playMusicPlaylist } from '../../redux/modules/player/actions';
import { navigate } from '../../redux/modules/routes/actions';

import api from '../../util/api';

import {
    Container,
    Playlists,
    Playlist
} from './styles';

import PlayButtonPNG from '../../assets/images/play.png';
import GoSVG from '../../assets/images/va.svg';

export default function()
{
    const dispatch = useDispatch();

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function loadPlaylists()
        {
            const answear = await api.get('playlist/get_all_played');

            if(answear.data.length > 0)
            {
                setPlaylists(answear.data);
            }
        }

        loadPlaylists();
    }, []);

    const handleSubmitPlayer = playlistID => {
        dispatch(playMusicPlaylist('Home', { playlistID }));
    };

    const handleNavPlaylist = playlistID => {
        dispatch(navigate("Playlist", playlistID))
    }

    return(
            <Container>
                <h1>Recém tocadas</h1>
                <Playlists>
                    {playlists.map(playlist => (
                        <Playlist>
                            <img src={playlist.Playlist.File.url} />
                            <div />

                            <object 
                                onClick={() => handleNavPlaylist(playlist.Playlist.id)}>
                                <img src={GoSVG} alt="0"/>
                            </object>

                            <button
                                onClick={() => handleSubmitPlayer(playlist.Playlist.id)}
                            >
                                <img src={PlayButtonPNG} />
                            </button>    

                            <h1>{playlist.Playlist.name}</h1>
                            <h2>{playlist.Playlist.description}</h2>
                            <h3>3401213 followers</h3>
                                         
                        </Playlist>
                    ))}
                </Playlists>
            </Container>
    );
}