import styled from 'styled-components';
import px2vw from '../../util/px2vw';

import BackgroundJPG from '../../assets/images/BackgroundDJpreto.jpg';

export const Container = styled.div`   
    position: absolute;
    width: ${px2vw(1375)};
    height: 100%;

    background: url(${BackgroundJPG});
    background-repeat: no-repeat;
    background-size: ${px2vw(1375)} 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div` 
    position: absolute;
    width: ${px2vw(400)};
    height: ${px2vw(450)};
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #101010;
    border-radius: ${px2vw(20)};
    
    box-shadow: rgb(255, 255, 255) 0px 0px 16px -5px;
    padding: ${px2vw(20)};  
    
    -webkit-animation: swing-in-top-fwd 1.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    animation: swing-in-top-fwd 1.2s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;

    @-webkit-keyframes swing-in-top-fwd {
        0% {
          -webkit-transform: rotateX(-100deg);
                  transform: rotateX(-100deg);
          -webkit-transform-origin: top;
                  transform-origin: top;
          opacity: 0;
        }
        100% {
          -webkit-transform: rotateX(0deg);
                  transform: rotateX(0deg);
          -webkit-transform-origin: top;
                  transform-origin: top;
          opacity: 1;
        }
      }
      @keyframes swing-in-top-fwd {
        0% {
          -webkit-transform: rotateX(-100deg);
                  transform: rotateX(-100deg);
          -webkit-transform-origin: top;
                  transform-origin: top;
          opacity: 0;
        }
        100% {
          -webkit-transform: rotateX(0deg);
                  transform: rotateX(0deg);
          -webkit-transform-origin: top;
                  transform-origin: top;
          opacity: 1;
        }
      }
      

`;

export const Logo = styled.img`
    width: ${px2vw(230)};
    height: ${px2vw(70)};
    margin-top: ${px2vw(27)};
    object: fill;

`

export const InputLogin = styled.input`
    width: ${px2vw(300)};
    height: ${px2vw(40)};
    margin-top: ${px2vw(35)};
    background: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 2px solid #D8D8D8;
    transition: border-bottom 0.5s;
    color: #ffff;

    &:hover{
        border-bottom: 2px solid #01DF74;
    }
`;

export const InputPassword = styled.input`
    width: ${px2vw(300)};
    height: ${px2vw(40)};
    margin-top: ${px2vw(40)};
    background: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 2px solid #D8D8D8;
    color: #ffff;

    &:hover{
        border-bottom: 2px solid #01DF74;
    }
`;

export const Button = styled.button`
    width: ${px2vw(135)};
    height: ${px2vw(45)};
    margin-top: ${px2vw(45)};
    background-color: #04B431;
    border: none;
    border-radius: ${px2vw(35)};
    color: #ffff;
    transition: background-color 0.5s;
    transition: color 0.5s;
    
    
    &:hover{
        background-color: #ffff; 
        color: #1C1C1C; 
    };
`;

export const Create = styled.button`
    margin-top:  ${px2vw(15)};
    background: none;
    border: none;
    color: #a6a6a6;

    p{
        
    }
`;
