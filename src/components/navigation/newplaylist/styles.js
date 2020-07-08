import styled from 'styled-components';

export const NewPContainer = styled.div`
    position: absolute;
    width: 1375px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.6);
`;

export const NewPBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 600px;
    height: 350px;
    background-color: #333232;
    border-radius: 30px;
    padding: 10px;

    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
    
    @-webkit-keyframes bounce-in-top {
        0% {
          -webkit-transform: translateY(-500px);
                  transform: translateY(-500px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 0;
        }
        38% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
          opacity: 1;
        }
        55% {
          -webkit-transform: translateY(-65px);
                  transform: translateY(-65px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        72% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        81% {
          -webkit-transform: translateY(-28px);
                  transform: translateY(-28px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        90% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        95% {
          -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
      }
      @keyframes bounce-in-top {
        0% {
          -webkit-transform: translateY(-500px);
                  transform: translateY(-500px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 0;
        }
        38% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
          opacity: 1;
        }
        55% {
          -webkit-transform: translateY(-65px);
                  transform: translateY(-65px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        72% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        81% {
          -webkit-transform: translateY(-28px);
                  transform: translateY(-28px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        90% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        95% {
          -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
      }
      
`;

export const NewPBoxHeader = styled.div`
    display: flex;
    margin-left: 220px;
    padding: 5px;
`;

export const NewPBoxTitle = styled.h1`
    font-family: 'Champagne', sans-serif;
    font-size: 18px;    
    color: #ffff;
`;

export const NewPBoxClose = styled.div`
    margin-left: 210px;

    button{
        background: none;
        border: none;
        color: #ffff;
        font-size: 18px;
        font-family: 'Simplicity', sans-serif; 

        &:hover{
            color: #00000;
        }
    }
`;

export const NewPBoxBodyImg = styled.div`
    display: flex;
    margin-left: 5%;
    margin-right: 5%;

    img{
        height: 200px;
        width: 200px;
        border-radius: 10px;
        object-fit: fill;
    }
`;

export const InputImage = styled.input`
    opacity: 0;
    position: absolute;
    height: 200px;
    width: 200px;
`;

export const NewPBoxBodyForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 8%;
`;

export const NewPBoxBodyFormName = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-family: 'Champagne', sans-serif;
        font-size: 14px;
        color: #cccccc;

        margin-bottom: 10px;
    }

    input{
        width: 285px;
        height: 25px
    }
`;

export const NewPBoxBodyFormDescription = styled.div`
    display: flex;
    flex-direction: column;

    h1{
        font-family: 'Champagne', sans-serif;
        font-size: 14px;
        color: #cccccc;

        margin-bottom: 10px;
    }

    input{
        width: 285px;
        height: 85px
    }
`;

export const NewPBoxBodyFormButton = styled.button`
    height: 35px;
    width: 115px;
    margin-left: 
    border-radius: 30px;
    border: none;
    background-color: #23cf58;
    color: #ffff;
    
    margin-left: 220px;
`;


