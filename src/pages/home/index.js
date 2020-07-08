import React,  { useEffect, useState } from 'react';

import api from '../../util/api';

import { useDispatch } from 'react-redux';
import { playMusicPlaylist } from '../../redux/modules/player/actions';
import { navigate } from '../../redux/modules/routes/actions';

import ButtonReturn from '../../components/return';

import {
    ContainerBody,
    Announcement,

    ContainerGroups,
    BodyGroup,
    TitleGroup,
    LineGroup,

    PlaylistList,
    Playlist,
} from './styles';

import BackgroundPNG from '../../assets/images/background.png';
import PlayButtonPNG from '../../assets/images/play.png';
import GoSVG from '../../assets/images/va.svg';

export default function()
{
    const [groups, setGroups] = useState([]);

    const dispatch = useDispatch();

    async function loadGroups() {
        const answear = await api.get('playlist/get_all_group_with_playlists');
        
        setGroups(answear.data);
    };

    useEffect(() => {
        loadGroups();
    }, []);


    const handleSubmiitPlayer = playlistID => {
        dispatch(playMusicPlaylist('Home', { playlistID }));
    };


    const getRandomNumer = () => {
        const randomNumber = parseInt(Math.random() * 1000000);
        return randomNumber;
    };

    const handleNavPlaylist = playlistID => {
        dispatch(navigate("Playlist", playlistID))
    }

    return(
        <>
            
                <ContainerBody>
                    <Announcement src={BackgroundPNG}/>

                    <ContainerGroups>

                        {groups.map(index => (
                            <BodyGroup>
                                <TitleGroup>{index.group.name}</TitleGroup>
                                <LineGroup />

                                <PlaylistList>
                                    {index.playlists.map(playlist => (
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
                                                onClick={() => handleSubmiitPlayer(playlist.id)}
                                                type="submit"
                                            >
                                                <img src={PlayButtonPNG} />
                                            </button>

                                            <h1>{playlist.name}</h1>
                                            <h2>{playlist.description}</h2>
                                            <h3>{getRandomNumer()} followers</h3>
                                            
                                        </Playlist>
                                    ))}
                                </PlaylistList>
                            </BodyGroup>
                        ))}
                    </ContainerGroups>
                </ContainerBody>
            
        </>
    );
}