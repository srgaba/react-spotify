import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.header`
    position: fixed;
    
    margin-left: ${px2vw(200)};
    width: ${px2vw(962)};
    height: ${px2vw(65)};   
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${px2vw(15)};
    background-color: #1C1C1C;
`;

export const Search = styled.input`
    width: ${px2vw(150)};
    height: ${px2vw(35)};
    border-radius: ${px2vw(15)};
    border: none;
    padding: ${px2vw(10)};
`;

export const RightElements = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonUpgrade = styled.button`
    width: ${px2vw(120)};
    height: ${px2vw(35)};
    background: none;
    border-radius: ${px2vw(20)};
    color: #ffff;
    font-weight: bold;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    color: #ffff;

    img{
        width: ${px2vw(40)};
        height: ${px2vw(40)};
        margin-left: ${px2vw(20)};
        object-fit: fill;
    }

    h1{
        font-size: ${px2vw(15)};
        margin-left: ${px2vw(5)};
        font-family: 'Champagne', sans-serif;
    }
`;

