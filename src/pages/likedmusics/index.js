import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { navigate } from '../../redux/modules/routes/actions';
import { playMusicPlaylist } from '../../redux/modules/player/actions';

import api from '../../util/api';

import {
    Container,
    Header,

    Body,

    HeaderTitle,
    Title,
    Artist,
    Date,

    BodyMusics,
    ButtonPlayMusic,
    ButtonOptions,

    Options,
    LikeOption,
    AddPlaylist
} from './styles';

import PlayButtonPNG from '../../assets/images/play.png';
import DatePNG from '../../assets/images/data.png';
import PointsSVG from '../../assets/images/pontos.svg'

export default function()
{
    const dispatch = useDispatch();

    const [likedmusics, setLikeds] = useState([]);

    const [playlistList, setPlaylistList] = useState([]);

    const [musicActualSelected, setMusicActualSelected] = useState({
        musicID: 0,
        selected: false,
    });

    const [addPlaylistSelected, setAddPlaylistSelected] = useState({
        musicID: 0,
        selected: false,
    });

    useEffect(() => {
        async function loadLikedMusics()
        {
            const answear = await api.get('musics/get_all_liked');

            setLikeds(answear.data);
        }

        
        async function loadPlaylistList()
        {
            const answear = await api.get('/users/playlist/get_all');
            setPlaylistList(answear.data);
        }

        loadPlaylistList();
        loadLikedMusics();
    }, []);

    const handleSubmitPlayMusic = async musicID => {
        const indexMusic = likedmusics.findIndex(music => music.id == musicID);

        const firstMusic = likedmusics[indexMusic];
        const allMusics = likedmusics;
        const { url: playlistImgUrl} = likedmusics[indexMusic].Playlist.File;

        dispatch(playMusicPlaylist('Liked sons', { firstMusic, allMusics, playlistImgUrl }));
    }

    const handleSubmitMusicToPlaylist = async (musicID, playlistID) => {
        try {
            await api.post('/users/music/create', {
                music_id: musicID,
                playlist_id: playlistID
            });

            handleSubmitOptions(musicID);
            toast.dark('Música adiconada á playlist com sucesso!');
        } catch (err)
        {
            console.log(err);
        }
    }

    const handleOptionAddPlaylist = musicID => {
        const { musicID: id, selected } = addPlaylistSelected;

        const newState = {
            musicID: musicID,
            selected: null,
        };

        if(id === musicID)
        {
            newState.selected = !selected;
        } else {
            newState.selected = true;
        };

        setAddPlaylistSelected(newState);
    };

    const renderAddPlaylist = musicID => {
        const { musicID: id, selected } = addPlaylistSelected;

        if(id === musicID && selected === true)
        {
            return <AddPlaylist>
                        {playlistList.map(index => (
                            <button
                                onClick={() => handleSubmitMusicToPlaylist(musicID, index.id)}
                            >{index.name}</button>
                        ))}
                    </AddPlaylist>
        }
    }

    const handleSubmitOptions = musicID => {
        const newStateOptions = {
            musicID: musicID,
            selected: null,
        };

        const { selected } = addPlaylistSelected;
        const newStatePlaylist = {
            musicID,
            selected: null
        };

        if(musicID !== musicActualSelected.musicID)
        { 
            newStateOptions.selected = true
            newStatePlaylist.selected = false;
        } else {
            newStateOptions.selected = !musicActualSelected.selected;
        }
        
        setMusicActualSelected(newStateOptions);
        setAddPlaylistSelected(newStatePlaylist);
    }

    const handleLikeOrDeslikeMusic = async musicID => {
        async function updateLikeds() {  
            const answear = await api.get('musics/get_all_liked');

            setLikeds(answear.data);
        }

        try{           
            const found = likedmusics.find(index => index.id == musicID);

            if(found)
            {
                await api.delete(`musics/delete/${musicID}`);
                toast.dark("Música descurtida com sucesso!");
                updateLikeds();
            } else {
                await api.post(`musics/like/${musicID}`);
                toast.dark("Música curtida com sucesso!");
                updateLikeds();
            }
        }catch(err)
        {
            await api.post(`musics/like/${musicID}`);
            updateLikeds();
        }  
    }

    const handleNavPlaylist = musicID => {
          const music = likedmusics.find(music => music.id === musicID);

          if(music)
          {
              dispatch(navigate('Playlist', music.playlist_id));
          }
    };

    const renderOptions = musicID => {
        var musicIsLiked;

        try{
            const found = likedmusics.find(index => index.id == musicID);

            if(found)
            {
                musicIsLiked = true;
            } else {
                musicIsLiked = false;
            }
        }catch(err){
            musicIsLiked = false;
        }

        if(musicID === musicActualSelected.musicID && musicActualSelected.selected === true)
        {
            return <Options>
                        <button 
                            onClick={() => handleLikeOrDeslikeMusic(musicID)}
                        >
                            {musicIsLiked ? 'Descurtir' : 'Curtir' }
                        </button>
                        <button
                            onClick={() => handleOptionAddPlaylist(musicID)}
                        >
                            Adicionar á playlist
                        </button>
                        <button
                            onClick={() => handleNavPlaylist(musicID)}
                        >   Ir para playlist</button>
                    </Options>
        }
    }

    return(
            <Container>
                <Header>
                    <h1>Músicas curtidas</h1>
                    <button>Play</button>
                </Header>

                <Body>
                    <HeaderTitle>
                        <Title>TÍTULO</Title>
                        <Artist>ARTISTA</Artist>
                        <Date src={DatePNG} alt="0"/>
                    </HeaderTitle>
                    
                    <BodyMusics>
                        {likedmusics.map(music => (
                            <li>
                                <ButtonPlayMusic onClick={() => handleSubmitPlayMusic(music.id)}>
                                    <img src={PlayButtonPNG} />
                                </ButtonPlayMusic>
                                <h2>{music.title}</h2>
                                <h3>{music.artist}</h3>
                                <h4>há 7 dias</h4>
                                <ButtonOptions  onClick={() => handleSubmitOptions(music.id)}>
                                    <img src={PointsSVG} />
                                </ButtonOptions>

                                {likedmusics && renderOptions(music.id)}
                                {addPlaylistSelected && renderAddPlaylist(music.id)}
                            </li>
                        ))}
                    </BodyMusics>
                </Body>
            </Container>
    )
}