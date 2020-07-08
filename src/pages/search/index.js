import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playMusicPlaylist } from '../../redux/modules/player/actions';

import api from '../../util/api';

import { navigate } from '../../redux/modules/routes/actions';


import { 
    PlaylistsContainer,
    PlaylistsBody,
    PlaylistsTitle,
    Playlists,
    Playlist,
    PlaylistImg,

    Container,
    Body
} from './styles';

import SearchPNG from '../../assets/images/busca.png';
import PlayButtonPNG from '../../assets/images/play.png';
import GoSVG from '../../assets/images/va.svg';

export default function()
{
    const dispatch = useDispatch();

    const [allPlaylists, setAllPlaylist] = useState([
    ]);
    const [render, setRender] = useState([]);
    const [renderIsEmpty, setRenderIsEmpty] = useState(true);

    const { length, content } = useSelector(state => state.search);

    useEffect(() => {
        async function loadPlaylists()
        {
            const answear = await api.get('playlist/get_all');

            setAllPlaylist(answear.data);
        }

        loadPlaylists();
    }, []);

    useEffect(() => {
        const arrayFormatted = allPlaylists.filter(item => item.name.toLowerCase().indexOf(content.toLowerCase()) > -1);
        if(arrayFormatted.length > 0)
        {
            setRender(arrayFormatted);
            setRenderIsEmpty(false);
        } else {
            setRender([]);
            setRenderIsEmpty(true);
        }
    }, [useSelector(state => state.search.length)]);

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
        <>
            {length > 0 ? 
                <PlaylistsContainer>
                        <PlaylistsBody>
                            <PlaylistsTitle>{renderIsEmpty ? 
                                "Nenhum resultado encontrado" 
                                : 
                                "Melhores resultados"}
                            </PlaylistsTitle>

                            <Playlists>
                                {render.map(playlist => (
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
                            
                        </PlaylistsBody>
                </PlaylistsContainer>
            : 
                <Body>
                    <div>
                        <img src={SearchPNG} />
                        <h1>Buscar no spotify</h1>
                        <p>Encontre suas músicas, playlists, artistas, álbuns, podcasts, vídeo favoritos e seus amigos</p>
                    </div>
                </Body>
            }
        </>
    );
}