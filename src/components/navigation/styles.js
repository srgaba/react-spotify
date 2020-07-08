import styled from 'styled-components';
import { Link } from 'react-router-dom';
import px2vw from '../../util/px2vw';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${px2vw(200)};
    height: ${px2vw(750)};
    background-color: #151515;

    position: fixed;
`;

export const Header = styled.ul`
    display: flex;
    flex-direction: column;

    button{
        background: none;
        border: none;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    & + li {
       margin-top:  ${px2vw(10)};
    }

    h1{
        font-size: ${px2vw(16)};
        margin-left: ${px2vw(12)};
        font-family: 'Cocogoose', sans-serif;
        color: ${props => props.selected ? '#ffff' : '#A4A4A4'};

    }
`;

export const HeaderLine = styled.div`
    display: ${props => props.selected ? 'inline' : 'none'};
    position: absolute; 
    height: ${px2vw(30)};
    width: ${px2vw(5)};
    background-color: #2EFE2E;
`;

export const Image = styled.img`
    width: ${px2vw(32)};
    height: ${px2vw(32)};
    margin-left: ${px2vw(25)};
    object: fill;
`;

export const Librarys = styled.div`
    display: flex;
    flex-direction: column;

    button{
        background: none;
        border: none;
    }
`;

export const LibraryTitle = styled.h2`
    margin-top: ${px2vw(55)};
    margin-bottom: ${px2vw(10)};
    margin-left: ${px2vw(26)};
    
    font-family: 'Champagne', sans-serif;
    font-size: ${px2vw(13)};
    color: #A4A4A4;
`;

export const LibraryNav = styled(Link)`
    display: flex;
    margin-top: ${px2vw(10)};
    text-decoration: none;

    h2{
        margin-left: ${px2vw(26)};
        font-size: ${px2vw(14)};
        font-family: 'Cocogoose', sans-serif;
        color: ${props => props.selected ? '#ffff' : '#A4A4A4'};
    }
`;

export const LibraryLine = styled.div`
    display: ${props => props.selected ? 'inline' : 'none'};
    position: absolute; 
    height: ${px2vw(20)};
    width: ${px2vw(5)};
    background-color: #2EFE2E;
`;

export const Playlists = styled.div`
    display: flex;
    flex-direction: column;

    button{
        background: none;
        border: none;
    }
`;

export const PlaylistsTitle = styled.h1`
    margin-top: ${px2vw(55)};
    margin-bottom: ${px2vw(10)};
    margin-left: ${px2vw(26)};

    font-family: 'Champagne', sans-serif;
    font-size: ${px2vw(13)};
    color: #A4A4A4;
`;

export const PlaylistsNav = styled.div`
    margin-top: ${px2vw(5)};
    display: flex;

    h2{
        margin-left: ${px2vw(26)};
        font-size: ${px2vw(14)};
        font-family: 'Cocogoose', sans-serif;
        color: ${props => props.selected ? '#ffff' : '#A4A4A4'};
    }  
`;

export const PlaylistLine = styled.div`
    display: ${props => props.selected ? 'inline' : 'none'};
    position: absolute; 
    height: ${px2vw(15)};
    width: ${px2vw(5)};
    background-color: #2EFE2E;
`;

export const NewPlaylistButtonContainer = styled.div`
    position: absolteu; 
    display: flex;
    flex-wrap: wrap;
    margin-top: ${px2vw(90)};
`;

export const NewPlaylistLine = styled.div`
    margin-bottom: ${px2vw(10)};
    width: 100%;
    height: 1px;
    background-color: #424242;
`;

export const NewPlaylistBody = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-size: ${px2vw(16)};
        margin-left: ${px2vw(12)};
        font-family: 'Cocogoose', sans-serif;
        color: #A4A4A4;
    };
`;

export const NewPlaylistImage = styled.img`
    margin-left: ${px2vw(20)};
    width: ${px2vw(30)};
    height: ${px2vw(30)};

    object: fill;
`;