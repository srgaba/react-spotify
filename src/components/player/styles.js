import styled from 'styled-components';

import px2vw from '../../util/px2vw';

export const Container = styled.ul`
    position: fixed;
    width: 100%;
    margin-top: ${px2vw(650)};
    height: ${px2vw(114)};
    display: flex;
    align-items: center;
    list-style: none;

    background-color: #2E2E2E;
`;

export const Left = styled.li`
    position: absolute;
    margin-left: ${px2vw(15)};
    display: flex;
    align-items: center;

    img{
        display: ${props => props.isEmpty ? 'none' : 'inline'};
        height: ${px2vw(60)};
        width:  ${px2vw(60)};
        object: fill;
    };


`;

export const LeftText = styled.div`
    margin-left: ${px2vw(10)};

    h1{
        font-size: ${px2vw(16)};
        font-family: 'Champagne', sans-serif;
        color: #D8D8D8;
    }

    p{
        margin-top: ${px2vw(5)};
        font-size: ${px2vw(12)};
        color: #BDBDBD;
        font-family: 'Cocogoose', sans-serif;
    }
`;

export const Center = styled.li`
    display: flex;
    flex-direction: column;
    width: ${px2vw(400)};
`;

export const CenterButtons = styled.div`
    display: flex;
    margin-left: ${px2vw(616)};
    margin-bottom: ${px2vw(20)};

    
    button{
        background: none;
        border: none;
        margin-left: ${px2vw(22)};
    }

    img{
        width: ${px2vw(10)};
        height: ${px2vw(10)};
        object: fill;
    }
`;


export const CenterRange = styled.div`
    margin-left: ${px2vw(500)};
    width: ${px2vw(400)};
    cursor: pointer;

    div{
        position: absolute;
        margin-top: ${px2vw(8)};
        width: ${props => `${px2vw(props.width)}`};
        height: ${px2vw(4)};

        border-radius: 20px;
        border-radius: 20px;
        background-color: #ffff;
    }

    &:hover{
        div{
            position: absolute;
            margin-top: ${px2vw(8)};
            width: ${props => `${px2vw(props.width)}`};
            height: ${px2vw(4)};
    
            border-radius: 20px;
            border-radius: 20px;
            background-color: #01DF3A;
        }
    }

    input{
        -webkit-appearance: none;
        border: 1px solid #000000;
        height: 5px;
        vertical-align: middle;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
                border-radius: 20px;
        background-color: #848484;
        outline: none;
        width: ${px2vw(400)};
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 4px;
        height: 4px;
        border: 4px solid  #ffff;
        -webkit-border-radius: 4px;
                border-radius: 4px;
        opacity: 0;

    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${px2vw(750)};

    button{
        margin-left: ${px2vw(20)};
        background: none;
        border: none;
    }

    img{
        width: ${px2vw(19)};
        height: ${px2vw(19)};
        object: fill;
    }
`;

export const RightBodyRange = styled.div`
    display: flex; 
    margin-left: ${px2vw(15)};

    div{
        position: absolute;
        width: ${props => `${px2vw(props.width)}`};
        height: ${px2vw(4)};

        border-radius: 20px;
        border-radius: 20px;
        background-color: #ffff;
    };

    &:hover{
        div{
            position: absolute;
            width: ${props => `${px2vw(props.width)}`};
            height: ${px2vw(4)};
    
            border-radius: 20px;
            border-radius: 20px;
            background-color: #01DF3A;
        }
    }

    input{
        -webkit-appearance: none;
        border: 1px solid #000000;
        height: 5px;
        vertical-align: middle;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
                border-radius: 20px;
        background-color: #848484;
        outline: none;
        width: ${px2vw(72)};
    };

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 4px;
        height: 4px;
        border: 4px solid  #ffff;
        -webkit-border-radius: 4px;
                border-radius: 4px;
        opacity: 0;
    };
`;