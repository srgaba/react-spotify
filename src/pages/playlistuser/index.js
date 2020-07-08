import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { navigate } from '../../redux/modules/routes/actions';
import { playMusicPlaylist } from '../../redux/modules/player/actions';

import {
    Container,
    Header,
    HeaderImg,
    HeaderBody,
    HeaderText,
    HeaderButtons,
    HeaderPlayButton,
    HeaderFollowers,

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
import api from '../../util/api';

import DatePNG from '../../assets/images/data.png';
import PlayButtonPNG from '../../assets/images/play.png';
import PointsSVG from '../../assets/images/pontos.svg';

export default function()
{
    const dispatch = useDispatch();
    const playlistID = useSelector(state => state.routes[7].body.playlistSelected);

    const [playlistList, setPlaylistList] = useState([]);
    
    const [likeds, setLikeds] = useState([{}]);

    const [playlist, setPlaylist] = useState({
        playlist: {
            File: {}
        },
        allMusics: []
    });

    const [musicActualSelected, setMusicActualSelected] = useState({
        musicID: 0,
        selected: false,
    });

    const [addPlaylistSelected, setAddPlaylistSelected] = useState({
        musicID: 0,
        selected: false,
    });


    useEffect(() => {
        async function loadPlaylist()
        {
            const answear = await api.get(`/users/playlist/getespecify/${playlistID}`);

            setPlaylist(answear.data);
        }

        async function loadMusicsLiked()
        {
            const answear = await api.get('musics/get_all_liked');

            setLikeds(answear.data);
        };

        async function loadPlaylistList()
        {
            const answear = await api.get('/users/playlist/get_all');
            setPlaylistList(answear.data);
        }

        loadPlaylistList();
        loadMusicsLiked();
        loadPlaylist();
    }, [useSelector(state => state.routes[7].body.playlistSelected)]);

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

    const handleSubmitPlayMusic = musicID => {
        dispatch(playMusicPlaylist('Playlist user', { playlistID, musicID }));
    }

    

    const handleLikeOrDeslikeMusic = async musicID => {
        async function updateLikeds() {  
            const answear = await api.get('musics/get_all_liked');

            setLikeds(answear.data);
        }

        try{           
            const found = likeds.find(index => index.id == musicID);

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
    };

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

    const handleNavPlaylist = musicID => {
        const music = playlist.allMusics.find(index => index.Music.id === musicID);

        if(music)
        {
            dispatch(navigate('Playlist', music.Music.playlist_id));
        }
    };

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

    const renderOptions = musicID => {
        var musicIsLiked;

        try{
            const found = likeds.find(index => index.id == musicID);

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
                        >   {musicIsLiked ? 'Descurtir' : 'Curtir' }
                        </button>

                        <button
                            onClick={() => handleOptionAddPlaylist(musicID)}
                        >   Adicionar á Playlist
                        </button>

                        <button
                            onClick={() => handleNavPlaylist(musicID)}
                        >
                            Ir para playlist
                        </button>
                    </Options>
        }
    }

    return(
        <Container> 

            <Header>
                <HeaderImg src={playlist.playlist.File.url} />
                <HeaderBody>
                    <HeaderText>
                        <h2>Playlist</h2>
                        <h1>{playlist.playlist.name}</h1>
                        <p>{playlist.playlist.description}</p>
                        <p style={ { color: '#585858' } }>Created by SrGaba! 60 songs</p>
                    </HeaderText>

                    <HeaderButtons>
                        <HeaderPlayButton type="submit">PLAY</HeaderPlayButton>
                    </HeaderButtons>
                </HeaderBody>

                <HeaderFollowers>
                    <h1>Followers</h1>
                    <h2>712314</h2>
                </HeaderFollowers>
            </Header>

            <Body>
                <HeaderTitle>
                    <Title>TÍTULO</Title>
                    <Artist>ARTISTA</Artist>
                    <Date src={DatePNG}/>
                </HeaderTitle>
                
                <BodyMusics>
                    {playlist.allMusics.map(music => (
                        <li>
                            <ButtonPlayMusic onClick={() => handleSubmitPlayMusic(music.Music.id)}>
                                <img src={PlayButtonPNG} />
                            </ButtonPlayMusic>
                            <h2>{music.Music.title}</h2>
                            <h3>{music.Music.artist}</h3>
                            <h4>há 7 dias</h4>
                            <ButtonOptions  onClick={() => handleSubmitOptions(music.Music.id)}>
                                <img src={PointsSVG} />
                            </ButtonOptions>

                            {likeds && renderOptions(music.Music.id)}
                            {addPlaylistSelected && renderAddPlaylist(music.Music.id)}
                        </li>
                    ))}
                </BodyMusics>
            </Body>

        </Container>
    );
}