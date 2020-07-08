import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Container = styled.div`
    width: ${px2vw(1375)};
    height: ${px2vw(760)};
    display: flex;  
`;  

export const Navigation = styled.div`
    position: fixed;
    width: ${px2vw(120)};
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: ${px2vw(50)};
    background-color: #000000;
`;

export const NavigationLogo = styled.img`
    object: fill;
    height: ${px2vw(55)};
    width: ${px2vw(55)};
`;

export const NavigationBody = styled.ul`
    margin-top: ${px2vw(120)};

    button{
        background: none;
        border: none;
    }
`;

export const NavigationItem = styled.li`
    height: ${px2vw(85)};
    width: ${px2vw(120)};

    display: flex;
    background: ${props => props.selected ? '#1C1C1C' : 'none'};
`;

export const Navigationline = styled.div`
    display: ${props => props.selected ? 'inline' : 'none'};
    position: absolute; 
    height: ${px2vw(83)};
    width: ${px2vw(5)};
    background-color: #00FF7F;
`;

export const Nav = styled.div`
    margin-top: ${px2vw(16)};
    margin-left: ${px2vw(38)};
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        object: fill;
        height: ${px2vw(26)};
        margin-bottom: ${px2vw(3)};
    }
    h2{
        color: #e6e6e6;
        font-family: sans-serif;
        font-size: ${px2vw(10)};
    }

`

export const Body = styled.div`

    height: 100%;
`;