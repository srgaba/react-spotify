import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`
    position: absolute;
    
    margin-left: ${px2vw(200)};
    width: ${px2vw(962)};
    height: ${px2vw(680)};

    display: flex;
    flex-direction: column;

    padding: ${px2vw(40)};
    background-color: #1C1C1C;

    h1{
        margin-top: ${px2vw(90)};
        margin-bottom: ${px2vw(30)};
        font-family: 'Champagne', sans-serif;  
        font-size: ${px2vw(30)};
        color: #ffff;
    }

`;

export const Playlists = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

