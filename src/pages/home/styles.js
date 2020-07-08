import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const ContainerBody = styled.div`
    position: absolute;
    
    width: ${px2vw(962)};
    margin-left: ${px2vw(200)};
    padding-top: ${px2vw(100)};
    padding-bottom: ${px2vw(100)};

    display: flex;
    flex-direction: column;
    background-color: #1C1C1C;
`;

export const Announcement = styled.img`
    width: ${px2vw(962)};
    height: ${px2vw(230)};
    object-fit: fill;
`;

export const ContainerGroups = styled.ul`
    display: flex;
    flex-direction: column;
    padding: ${px2vw(35)};
`;

export const BodyGroup = styled.li`
    display: flex;
    flex-direction: column;
    & + li {
        margin-top: ${px2vw(35)};
    }
`;  

export const TitleGroup = styled.h1`
    color: #ffff;
    font-size: ${px2vw(20)};
    font-family: 'Champagne', sans-serif;
`;

export const LineGroup = styled.div`
    margin-top: ${px2vw(10)};
    margin-bottom: ${px2vw(10)};
    width: ${px2vw(850)};
    height: 2px;
    background-color: #424242;
`;

export const PlaylistList = styled.ul`
    width: ${px2vw(800)};
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

