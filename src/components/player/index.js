import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import api from '../../util/api';
import { useSelector, useDispatch } from 'react-redux';
import { playPausePlayer, nextPlayer } from '../../redux/modules/player/actions';

import {
    Container,
    Left,
    LeftText,
    Center,
    CenterButtons,
    CenterRange,
    Right,
    RightBodyRange
} from './styles';

import animationSound from '../../assets/animations/6855-music-note.json';

import LeftPNG from '../../assets/images/left.png';
import RightPNG from '../../assets/images/right.png';
import PlayPNG from '../../assets/images/play.png';
import SoungPNG from '../../assets/images/sound.png';

export default function()
{
    const dispatch = useDispatch();

    const [audio, setAudio] = useState(() => {
        const song = new Audio();
        song.type = 'audio/mpeg';

        song.addEventListener('timeupdate',function() {
            const curtime = parseInt(song.currentTime,10);
            document.getElementById('seek').max = song.duration;
            document.getElementById('seek').value = curtime;
            handleAudioChange(curtime, song.duration);
    });

        return song;
    });

    const [lenghtRange, setLenghtRange] = useState(0); 
    const [lenghtRangeVolume, setLenghtRangeVolume] = useState(40);

    const { play, similar, empty } = useSelector(state => state.player.state);
    const { playing, imgUrl, playlistID } = useSelector(state => state.player);

    
    useEffect(() => {
        async function setRecent()
        {
            await api.post(`playlist/set_played/${playlistID}`);
        }
        
        if(play == true && !(similar))
        {
            audio.src = playing.music_url;
            audio.play();

            setRecent();
        } 
        else if(play == true && similar)
        {
            audio.play();
        }
        else if(play == false && similar)
        {
            audio.pause();
        }
    }, [useSelector(state => state.player)]);

    const handlePlayPauseChange = () => {
        dispatch(playPausePlayer());

        if(play)
        {
            audio.pause();
        }
        else 
        {
            audio.play();
        }
    };

    const handleAudioChange = (actual, max) => {
        const calculatorLarge = (actual / max) * 400;
        setLenghtRange(calculatorLarge);

        const calculatorPercentual = (actual / max) * 100;
        if(calculatorPercentual > 99)
        {
            nextAudio();
        }
    };

    const nextAudio = async () => {
        dispatch(nextPlayer());
    };

    const handleInputChange = e => {
        audio.currentTime = e.target.value;
    };

    const handleVolumeChange = e => {
        const calculatorPercentual = e.target.value / 100;
        audio.volume = calculatorPercentual;

        const calculatorLarge = calculatorPercentual * 72;
        setLenghtRangeVolume(calculatorLarge);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationSound,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return(
        <Container>
            {!empty && 
                <Left>
                    <img src={imgUrl} />
                    <LeftText>
                        <h1>{playing.title}</h1>
                        <p>{playing.artist}</p>
                    </LeftText>
                </Left>
            }
            {
                play && 
                    <div style={{ marginLeft: '250px', position: 'absolute' }} >
                        <Lottie height={50} width={50} options={defaultOptions}/>
                    </div>
            }
            

            <Center>
                <CenterButtons>
                    <button
                        type="submit"
                    > <img src={LeftPNG} /> </button>

                    <button
                        type="submit"
                        onClick={handlePlayPauseChange}
                    > <img src={PlayPNG} style={{ width: '30px', height: '30px' }} /> </button>

                    <button
                        type="submit"
                        onClick={nextAudio}
                    > <img src={RightPNG} /> </button>

                </CenterButtons>
                <CenterRange width={lenghtRange}>
                    <div />
                    <input type="range" onInput={handleInputChange} id="seek" value="" max="" />
                </CenterRange>
            </Center>

            <Right>
                <div id="debugando"/>
                <button/>
                <button/>
                <button> <img src={SoungPNG} /> </button>

                <RightBodyRange width={lenghtRangeVolume} >
                    <div />
                    <input type="range" onInput={handleVolumeChange} id="seek" value="" max="" />
                </RightBodyRange>
            </Right>
            
        </Container>
    );
}