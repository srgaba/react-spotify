import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`
    position: absolute;

    margin-left: ${px2vw(200)};
    margin-top: ${px2vw(65)};

    width: ${px2vw(962)};
`;

export const Header = styled.header`
    width: 100%;
    height: ${px2vw(270)};
    display: flex;

    background-image: linear-gradient(#2E2E2E, #151515);
    padding-top: ${px2vw(35)};
    padding-left: ${px2vw(35)};

`;

export const HeaderImg = styled.img`
    height: ${px2vw(195)};
    width: ${px2vw(195)};
    border-radius: ${px2vw(15)};

    object: fill;
`;

export const HeaderBody = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: ${px2vw(5)};
    margin-left: ${px2vw(20)};
`;

export const HeaderText = styled.div`
    width: ${px2vw(450)};
    display: flex;
    flex-direction: column;
    word-wrap: break-word;

    h2{
        font-size: ${px2vw(13)};
        font-family: 'Champagne', sans-serif;
        color: #D8D8D8;
    }

    h1{
        font-size: ${px2vw(36)};
        font-family: 'Cocogoose', sans-serif;
        color: #ffff;
    }

    p{
        margin-top: ${px2vw(12)};
        color: #A4A4A4;
        font-family: 'Cocogoose', sans-serif;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;


`;

export const HeaderPlayButton = styled.button`
    margin-top: ${px2vw(25)};
    border: none;
    width: ${px2vw(105)};
    height: ${px2vw(30)};
    background-color: #04B431;
    color: #FFFFFF;
    border-radius: ${px2vw(20)};
`

export const HeaderFollowers = styled.div`
    font-family: 'Champagne', sans-serif;
    color: #424242;
    margin-top: ${px2vw(165)};
    margin-left: ${px2vw(145)};

    h1{
        font-size: ${px2vw(15)};
    }

    h2{
        font-size: ${px2vw(15)};
    }
`;

export const Body = styled.div`
    padding-bottom: ${px2vw(60)};
    height: ${px2vw(400)};
    background-color: #151515;
`;

export const HeaderTitle = styled.li`
    display: flex;
    width: 100%;
    padding: ${px2vw(10)};
    border-bottom: 0.5px solid #6E6E6E;
`;

export const Title = styled.h2`
    margin-left: ${px2vw(100)};
    width: ${px2vw(270)};
    font-size: ${px2vw(12)};
    font-family: 'Champagne', sans-serif;
    color: #6E6E6E;
`;

export const Artist = styled.h2`
    width: ${px2vw(210)};
    font-size: ${px2vw(12)};
    font-family: 'Champagne', sans-serif;
    color: #6E6E6E;
`;


export const Date = styled.img`
    object: fill;
    width: ${px2vw(20)};
    height: ${px2vw(20)};
`;

export const BodyMusics = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;

    li{
        display: flex;
        align-items: center;
        color: #D8D8D8;
        padding: ${px2vw(15)};
        font-family: 'Champagne', sans-serif;

        h2{
            margin-left: ${px2vw(50)};
            width: ${px2vw(268)};
            font-size: ${px2vw(12)};
        }

        h3{
            width: ${px2vw(212)};
            font-size: ${px2vw(12)};
        }

        h4{
            width: ${px2vw(100)};
            font-size: ${px2vw(12)};
        }

        & + li {
            border-top: 0.5px solid #6E6E6E;
        }
    }
`;

export const ButtonPlayMusic = styled.button`
    margin-left: ${px2vw(20)};
    width: ${px2vw(25)};
    height: ${px2vw(25)};
    background: none;
    border: none;

    img{
        object: fill;
        width: ${px2vw(25)};
        height: ${px2vw(25)};
    }
`;

export const ButtonOptions = styled.button`
    width: ${px2vw(9)};
    height: ${px2vw(17)};
    border: none;
    background: none;

    img{
        object: fill;
        width: ${px2vw(9)};
        height: ${px2vw(17)};
    }
`;

export const Options = styled.div`  
    width: ${px2vw(180)};
    margin-left: ${px2vw(702)}; 
    margin-top: ${px2vw(25)}; 
    position: absolute;

    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);

    button{
        width: ${px2vw(180)};
        height: ${px2vw(35)};
        border: none;
        background-color: #1C1C1C;
        color: #BDBDBD;

        &:hover{
            background-color: #424242;
            color: #fff;  
        }
    }
`;

export const AddPlaylist = styled.div`
    width: ${px2vw(180)};
    margin-left: ${px2vw(882)}; 
    margin-top: ${px2vw(112)}; 
    position: absolute;

    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.75);

    button{
        width: ${px2vw(180)};
        height: ${px2vw(35)};
        border: none;
        background-color: #1C1C1C;
        color: #BDBDBD;

        &:hover{
            background-color: #424242;
            color: #fff;  
        }
    }
`;
 


