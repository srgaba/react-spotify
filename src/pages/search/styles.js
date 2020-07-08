import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Body = styled.div`
    position: absolute;

    margin-top: ${px2vw(57)};
    margin-left: ${px2vw(200)};
    width: ${px2vw(962)};
    height: ${px2vw(680)};

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1C1C1C;
    
    div{
        width: ${px2vw(380)};
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;

        img{
            width: ${px2vw(95)};
            height: ${px2vw(95)};
            object: fill;
            margin-bottom: ${px2vw(10)};
        }

        h1{
            margin-bottom: ${px2vw(30)};
            font-size: ${px2vw(36)};
            color: #ffff;
        }
    
        p{
            font-size: ${px2vw(16)};
            color: #ffff;
        }
    } 
`;

export const Flex = styled.div`
    display: flex;
`;

export const PlaylistsContainer = styled.div`
    position: absolute;

    margin-top: ${px2vw(57)};
    margin-left: ${px2vw(200)};
    width: ${px2vw(962)};
    height: ${px2vw(1580)};

    display: flex;
    flex-direction: column;

    background-color: #1C1C1C;
`;

export const PlaylistsBody = styled.div`
    margin: ${px2vw(50)};
    display: flex;
    flex-direction: column;
`;

export const PlaylistsTitle = styled.h1`
    font-size: ${px2vw(25)};
    font-family: sans-serif;
    color: #ffff;
`;

export const Playlists = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${px2vw(15)};
    margin-top: ${px2vw(20)};
    list-style: none;
`;

export const Playlist = styled.li`
     display: flex;
    flex-direction: column;
    width: ${px2vw(165)};
    word-wrap: break-word;

    img{
        width: ${px2vw(165)};
        height: ${px2vw(165)};
        object: fill;
    }

    
    div{
        position: absolute;
        width: ${px2vw(165)};
        height: ${px2vw(165)};
        background-color: #000000;
        opacity: 0;

        &:hover{
            opacity: 0.55;
        }
    }

    object{
        display: none;
    }

    button{
        display: none;
    }
        
    &:hover{
        button{
            width: ${px2vw(50)};
            height: ${px2vw(50)};
            margin: ${px2vw(55)};
            position: absolute;
            display: inline;
            background: none;
            border: none;

            img{
                object: fill;
                width: ${px2vw(50)};
                height: ${px2vw(50)};  
            }
        }

        object{
            cursor: pointer;
            margin-left: ${px2vw(140)};
            display: inline;
            position: absolute;
            color: #fff;

            img{
                object: fill;
                width: ${px2vw(20)};
                height: ${px2vw(20)};  
            }
        }
    }

    h1{
        margin-top: ${px2vw(7)};
        margin-bottom: ${px2vw(7)};
        font-size: ${px2vw(17)};
        font-family: 'Champagne', sans-serif;
        color: #ffff;
    };

    h2{
        font-family: 'Champagne', sans-serif;  
        font-size: ${px2vw(14)};
        color: #6E6E6E;
    }

    h3{
        margin-top: ${px2vw(7)};
        font-family: 'Champagne', sans-serif;  
        font-size: ${px2vw(14)};
        color: #6E6E6E;
    }
`;



export const PlaylistImg = styled.img`
    height: ${px2vw(50)};
    width: ${px2vw(50)};
    object: fill;
`;