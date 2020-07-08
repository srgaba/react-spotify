import React, { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-js';

import { navigate } from '../../redux/modules/routes/actions';

import api from '../../util/api';

import NewPlaylist from './newplaylist';

import { 
    Container,

    Header,
    Item,
    HeaderLine,
    Image,

    Librarys,
    LibraryTitle,
    LibraryLine,
    LibraryNav,

    Playlists,
    PlaylistsTitle,
    PlaylistsNav,
    PlaylistLine,

    NewPlaylistButtonContainer,
    NewPlaylistLine,
    NewPlaylistBody,
    NewPlaylistImage
} from './styles';

import HomeWhite from '../../assets/images/casa.png';
import BuscaWhite from '../../assets/images/busca.png';
import RadioWhite from '../../assets/images/radio.png';

import HomeGrey from '../../assets/images/casacinza.png';
import BuscaGrey from '../../assets/images/buscacinza.png';
import RadioGrey from '../../assets/images/radiocinza.png';

import PlaylistPNG from '../../assets/images/+ playlist.png';
import { reactotronRedux } from 'reactotron-redux';


export default function()
{
    const dispatch = useDispatch();

    const [navSelected, setNavSelected] = useState([
        {
            name: 'Home',
            selected: true
        },
        {
            name: 'Browser',
            selected: false
        },
        {
            name: 'Radio',
            selected: false
        },
        {
            name: 'Recent played',
            selected: false
        },
        {
            name: 'Liked sons',
            selected: false
        },
        {
            name: 'Recommended',
            selected: false
        }
    ]);

    const [userPlaylists, setUserPlaylists] = useState([]);

    const [visibleBox, setVisibleBox] = useState(false);
    const [refreshPlaylists, setRefreshPlaylists] = useState(true);


    useEffect(() => {
        async function loadUserPlaylists()
        {
            const answear = await api.get("users/playlist/get_all");

            const playlistsFormatted = answear.data.map(index => {
                const newObject = {
                    name: index.name,
                    selected: false
                };

                return newObject;
            });

            setNavSelected([...navSelected, ...playlistsFormatted]);
            setUserPlaylists(answear.data);
        };

        loadUserPlaylists();
    }, [refreshPlaylists])

    const findIndexNav = navName => {
        const index = navSelected.findIndex(draft => draft.name === navName)
        
        return index;
    }

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

    const setVisible = () => {
        const visible = !visibleBox;
        setVisibleBox(visible);
    };

    const handleNavigate = (element, prop = null) => {
        dispatch(navigate(element, prop));
    };

    const handleRefreshPlaylist = async () => {
        const answear = await api.get("users/playlist/get_all");

        const playlistsFormatted = answear.data.map(index => {
            const newObject = {
                name: index.name,
                selected: false
            };

            return newObject;
        });

        setNavSelected([...navSelected, ...playlistsFormatted]);
        setUserPlaylists(answear.data);
    }

    return(
        <>
            <Container>
                <Header>
                    <button 
                        onClick={() => handleNavigate('Home')}
                    >
                        <Item type="submit" onClick={() => setSelected('Home')} selected={navSelected[findIndexNav("Home")].selected} style={{ marginTop: '25%' }}>
                            <HeaderLine selected={navSelected[findIndexNav("Home")].selected}/>
                            <Image src={navSelected[findIndexNav("Home")].selected ? HomeWhite : HomeGrey}/>
                            <h1>Início</h1>
                        </Item> 
                    </button>

                    <button 
                        onClick={() => handleNavigate('Navigate[Genders]')}
                    >
                        <Item type="submit" onClick={() => setSelected('Browser')} selected={navSelected[findIndexNav("Browser")].selected} style={{ marginTop: '5%' }}>
                            <HeaderLine selected={navSelected[findIndexNav("Browser")].selected}/>
                            <Image src={navSelected[findIndexNav("Browser")].selected ? BuscaWhite : BuscaGrey}/>
                            <h1>Navegar</h1>
                        </Item>
                    </button>

                    <button
                        
                    >
                        <Item type="submit" onClick={() => setSelected('Radio')} selected={navSelected[findIndexNav("Radio")].selected} style={{ marginTop: '5%' }}>
                            <HeaderLine selected={navSelected[findIndexNav("Radio")].selected}/>
                            <Image src={navSelected[findIndexNav("Radio")].selected ? RadioWhite : RadioGrey}/>
                            <h1>Rádio</h1>
                        </Item>
                    </button>

                </Header>

                <Librarys>
                    <LibraryTitle>SUA BIBLIOTECA</LibraryTitle>
                    <button
                        onClick={() => handleNavigate('Recent Played')}
                    >
                        <LibraryNav 
                            selected={navSelected[findIndexNav("Recent played")].selected}
                            onClick={() => setSelected('Recent played')}
                        >
                            <LibraryLine  selected={navSelected[findIndexNav("Recent played")].selected}/>
                            <h2>Recém tocadas</h2>
                        </LibraryNav>
                    </button>
                    
                    <button
                        onClick={() => handleNavigate('Liked musics')}
                    >
                        <LibraryNav
                            selected={navSelected[findIndexNav("Liked sons")].selected}
                            onClick={() => setSelected('Liked sons')}
                        >
                            <LibraryLine selected={navSelected[findIndexNav("Liked sons")].selected}/>
                            <h2>Músicas cúrtidas</h2>
                        </LibraryNav>
                    </button>

                    <button
                        //navegar para sons recomendados
                    >
                        <LibraryNav
                            selected={navSelected[findIndexNav("Recommended")].selected}
                            onClick={() => setSelected('Recommended')}
                        >
                            <LibraryLine selected={navSelected[findIndexNav("Recommended")].selected} />
                            <h2>Recomendadas</h2>
                        </LibraryNav>
                    </button>
                </Librarys> 
            
                <Playlists>
                    <PlaylistsTitle>PLAYLISTS</PlaylistsTitle>
                    {userPlaylists.map(playlist => (
                        <button
                            onClick={() => handleNavigate('Playlist user', playlist.id)}
                        >
                            <PlaylistsNav type="submit" onClick={() => setSelected(playlist.name)} selected={navSelected[findIndexNav(playlist.name)].selected}>
                                <PlaylistLine selected={navSelected[findIndexNav(playlist.name)].selected}/>
                                <h2>{playlist.name}</h2>
                            </PlaylistsNav>
                        </button>
                    ))}
                </Playlists>
            
            <NewPlaylistButtonContainer>
                    <NewPlaylistLine />
                    <button 
                        type="submit"
                        onClick={() => setVisible()}
                        style={ { background: 'none', border: 'none' } }
                    >
                        <NewPlaylistBody>
                            <NewPlaylistImage src={PlaylistPNG} />
                            <h2>Nova playlist</h2>
                        </NewPlaylistBody>
                    </button>
            </NewPlaylistButtonContainer>
            
            </Container>

            {visibleBox && <NewPlaylist setVisible={setVisible} refresh={handleRefreshPlaylist}/>}
        </>
    );
}
