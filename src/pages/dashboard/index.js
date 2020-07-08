import React, { useState } from 'react';

import px2vw from '../../util/px2vw';

import Arquives from './components/arquives';
import Groups from './components/groups';
import Musics from './components/musics';
import Playlists from './components/playlists';

import { 
    Container,
    Navigation,
    NavigationLogo,
    NavigationBody,
    NavigationItem,
    Navigationline,
    Nav,
    Body
} from './styles';

import SpotifyPNG from '../../assets/images/SpotifyCut.png';
import GroupsSVG from '../../assets/images/grupos.png';
import PlaylistsPNG from '../../assets/images/playlists.png';
import MusicsPNG from '../../assets/images/musica.png';
import UploadPNG from '../../assets/images/upload.png';

export default function()
{
    const [navSelected, setNavSelected] = useState([
        {
            name: 'Groups',
            selected: true,
        },
        {
            name: 'Playlists',
            selected: false
        },
        {
            name: 'Musics',
            selected: false
        },
        {
            name: 'Arquives',
            selected: false
        }
    ]);

    const findIndexNav = navName => {
        const index = navSelected.findIndex(draft => draft.name === navName)
        
        return index;
    };

    const setSelected = element => {
        const newState = navSelected.map(nav => {
            if(nav.name === element)
            {
                nav.selected = true;
            }else{
                nav.selected = false;
            }

            return nav;
        });

        setNavSelected(newState);
    };

    const renderBody = () => {
        const navActual = navSelected.find(index => index.selected)

        if(navActual.name === "Groups")
        {
            return <Groups />
        } 
        else if(navActual.name === "Playlists")
        {
            return <Playlists />
        } 
        else if(navActual.name === "Musics")
        {
            return <Musics />
        } 
        else if(navActual.name === "Arquives")
        {
            return <Arquives />
        }
        
    }

    return(
        <Container>
            <Navigation>
                <NavigationLogo src={SpotifyPNG} />

                <NavigationBody>
                    <button onClick={() => setSelected('Groups')}>
                        <NavigationItem selected={navSelected[findIndexNav('Groups')].selected}>
                            <Navigationline selected={navSelected[findIndexNav('Groups')].selected} />
                            <Nav>
                                <img style={{ height: px2vw(20), marginTop: px2vw(13) }} src={GroupsSVG} />
                                <h2>Grupos</h2>
                            </Nav>
                        </NavigationItem>
                    </button>

                    <button onClick={() => setSelected('Playlists')}>
                        <NavigationItem selected={navSelected[findIndexNav('Playlists')].selected}>
                            <Navigationline selected={navSelected[findIndexNav('Playlists')].selected}/>
                            <Nav>
                                <img src={PlaylistsPNG } />
                                <h2>Playlists</h2>
                            </Nav>
                        </NavigationItem>
                    </button>

                    <button onClick={() => setSelected('Musics')}>
                        <NavigationItem selected={navSelected[findIndexNav('Musics')].selected}>
                            <Navigationline selected={navSelected[findIndexNav('Musics')].selected}/>
                            <Nav>
                                <img src={MusicsPNG} />
                                <h2>Músicas</h2>
                            </Nav>
                        </NavigationItem>
                    </button>

                    <button onClick={() => setSelected('Arquives')}>
                        <NavigationItem selected={navSelected[findIndexNav('Arquives')].selected}>
                            <Navigationline selected={navSelected[findIndexNav('Arquives')].selected}/>
                            <Nav>
                                <img src={UploadPNG} />
                                <h2>Arquivos</h2>
                            </Nav>
                        </NavigationItem>
                    </button>
                </NavigationBody>
            </Navigation>

            <Body>
                {renderBody()}
            </Body>
        </Container>
    );
}