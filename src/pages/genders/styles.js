import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`
    position: absolute;

    margin-top: ${px2vw(57)};
    margin-left: ${px2vw(200)};
    width: ${px2vw(962)};

    padding: ${px2vw(40)} ${px2vw(40)} ${px2vw(200)} ${px2vw(40)};
    background-color: #1C1C1C;

    h1{
        margin-top: ${px2vw(40)};
        margin-bottom: ${px2vw(80)};
        font-family: sans-serif;
        font-size: ${px2vw(40)};
        color: #fff;
    }
`;

export const Playlists = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${px2vw(30)};
`;

export const Playlist = styled.li`
    width: ${px2vw(180)};
    height: ${px2vw(180)};

    cursor: pointer;

    img{
        position: absolute;
        width: ${px2vw(180)};
        height: ${px2vw(180)};
        object: fill;
    };
`;