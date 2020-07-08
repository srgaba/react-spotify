import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import px2vw from '../../../../util/px2vw';

export const Flex = styled.div`
    display: flex;
`;

export const Container = styled.div`
    width: ${px2vw(1100)};
    height: ${px2vw(568)};
    margin-left: ${px2vw(120)};
    margin-top: ${px2vw(100)};
    display: grid;
    grid-template-areas:
		"left right"
		"left right"
	;
    grid-column-gap: ${px2vw(40)};
    padding: ${px2vw(70)} 0px 0px ${px2vw(40)};

    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            
            @-webkit-keyframes fade-in {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              @keyframes fade-in {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }    
`;


export const Form = styled.div`
    width: ${px2vw(500)};
    height: ${px2vw(185)};
    grid-area: left;
    border-radius: ${px2vw(30)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(40)};

    display: flex;
    flex-direction: column;

    input{
        width: 100%;
        height: ${px2vw(50)};
        margin-bottom: ${px2vw(20)};
        border-radius: ${px2vw(10)};
        border: 1px solid #e6e6e6;
        padding-left: ${px2vw(15)};

        color: #868787;
        font-family: sans-serif;
        font-size: ${px2vw(22)};
    }
`;

export const Buttons = styled.div`
    display: flex;
`;

export const FormButtonUpdate = styled.button`
    width: ${px2vw(190)};
    height: ${px2vw(35)};
    background: #065FC4;
    border-radius: ${px2vw(7)};
    border: none;
    color: #FEFEFE;
`;

export const FormButtonRegister = styled.button`
    width: ${px2vw(190)};
    height: ${px2vw(35)};
    margin-left: ${px2vw(40)};
    background: #0BDB5E;
    border-radius: ${px2vw(7)};
    border: none;
    color: #FEFEFE;
`;

export const Status = styled.div`
    width: ${px2vw(500)};
    height: ${px2vw(195)};
    margin-top: ${px2vw(230)};
    grid-area: left;
    background: #036BE3;
    border-radius: ${px2vw(10)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(20)};

    display: flex;
    flex-direction: column;

    h1{
        color: #FEFEFE;
        font-size: ${px2vw(17)};
        font-family: sans-serif;
    }
`;

export const StatusBox = styled.div`
    height: ${px2vw(85)};
    width: 100%;
    margin-top: ${px2vw(25)};

    display: flex;
    justify-content: space-between;

    background: #065FC4;
    border-radius: ${px2vw(5)};
    padding: ${px2vw(15)} ${px2vw(10)} ${px2vw(10)} ${px2vw(10)};
`;

export const StatusBoxContent = styled.div`
    display: flex;
    color: #FEFEFE;
    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    align-items: center;

    h2{
        font-size: ${px2vw(35)};
    }
    p{
        margin-left: ${px2vw(10)};
        font-size: ${px2vw(15)};
        height: ${px2vw(35)};
    }
`;

export const ContainerGroups = styled.div`
    width: ${px2vw(600)};
    height: ${px2vw(425)};
    grid-area: right;
    border-radius: ${px2vw(30)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(20)};
`

export const GroupSearch = styled.div`
    img{
        position: absolute;
        object: fill;
        width: ${px2vw(40)};
    }

    input{
        width: 100%;
        height: ${px2vw(50)};
        margin-bottom: ${px2vw(20)};
        border-top: none;
        border-left: none;
        border-right: none;
        padding-left: ${px2vw(55)};

        color: #868787;
        font-family: sans-serif;
        font-size: ${px2vw(22)};

        ::placeholder{
            color: #E0E1E0;
        }
    }
`;

export const GroupList = styled.ul`
    list-style: none;
    width: 100%;
`;

export const Scroll = styled(PerfectScrollbar)`
    max-height: ${px2vw(290)};
`;

export const Group = styled.li`
    & + li{
        margin-top: ${px2vw(13)};

        border-top: 1px solid;
        border-top-color: #E0E1E0;
        padding-top: ${px2vw(13)};
    }

    width: 100%;
    display: flex;
    justify-content: space-between;

    border-radius: ${px2vw(5)};
    padding: ${px2vw(10)};
`;

export const GroupText = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    color: ${props => props.selected ? '#08DB27' : '#BDBFC1'};

    p{
        font-size: ${px2vw(20)};
    }

    small{
        
    }
`;

export const GroupButtons = styled.div`
    display: flex;
`;

export const GButtonsEdit = styled.button`
    width: ${px2vw(40)};
    height: ${px2vw(40)};
    background: none;
    border: none;

    img{
        object: fill;
        width: 100%;
        height: 100%;
    }
`;

export const GButtonsDel = styled.button`
    width: ${px2vw(40)};
    height: ${px2vw(40)};
    margin-left: ${px2vw(10)};
    background: none;
    border: none;

    img{
        object: fill;
        width: 100%;
        height: 100%;
    }
`;