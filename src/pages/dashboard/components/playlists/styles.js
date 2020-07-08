import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import px2vw from '../../../../util/px2vw';

export const Flex = styled.div`
    display: flex;
`;

export const Container = styled.div`
    width: ${px2vw(1100)};
    margin-left: ${px2vw(120)};
    display: grid;
    grid-template-areas:
		"a1 a2"
		"b b"
        "c c"
	;
    grid-column-gap: ${px2vw(40)};
    grid-row-gap: ${px2vw(40)};
    padding: ${px2vw(70)} 0px ${px2vw(60)} ${px2vw(40)};

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
    height: ${px2vw(285)};
    grid-area: a1;
    border-radius: ${px2vw(30)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(40)};
`;

export const FInputName = styled.div`
    width: ${px2vw(225)};
    

    p{
        font-size: ${px2vw(20)};
        font-family: Arial, Helvetica, sans-serif;
        color: #606062;
    }

    input{
        width: 100%;
        height: ${px2vw(50)};
        margin-top: ${px2vw(5)};
        border: 1px solid;
        border-color: #D1D1D1;
        border-radius: ${px2vw(10)};
        padding: ${px2vw(10)};

        color: #868787;
        font-family: sans-serif;
        font-size: ${px2vw(20)};
    }
`;

export const FInputTag = styled.div`
    width: ${px2vw(175)};
    margin-left: ${px2vw(15)};

    p{
        font-size: ${px2vw(20)};
        font-family: Arial, Helvetica, sans-serif;
        color: #606062;
    }

    input{
        width: 100%;
        height: ${px2vw(50)};
        margin-top: ${px2vw(5)};
        border: 1px solid;
        border-color: #D1D1D1;
        border-radius: ${px2vw(10)};
        padding: ${px2vw(10)};

        color: #868787;
        font-family: sans-serif;
        font-size: ${px2vw(20)};
    }
`;


export const FInputDescription = styled.div`
    width: 100%;
    margin-top: ${px2vw(25)};
    
    p{
        font-size: ${px2vw(20)};
        font-family: Arial, Helvetica, sans-serif;
        color: #606062;
    }

    input{
        width: 100%;
        height: ${px2vw(50)};
        margin-top: ${px2vw(5)};
        border: 1px solid;
        border-color: #D1D1D1;
        border-radius: ${px2vw(10)};
        padding: ${px2vw(10)};

        color: #868787;
        font-family: sans-serif;
        font-size: ${px2vw(20)};
    }
`;

export const ContainerPlaylists = styled.div`
    width: ${px2vw(600)};
    height: ${px2vw(285)};
    grid-area: a2;
    border-radius: ${px2vw(30)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(20)};

    font-family: Arial, Helvetica, sans-serif;
`

export const PlaylistSearch = styled.div`
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

export const PlaylistList = styled.ul`
    list-style: none;
    width: 100%;
`;

export const PlaylistScroll = styled(PerfectScrollBar)`
    max-height: ${px2vw(185)};
`;

export const Playlist = styled.li`
    & + li{
        margin-top: ${px2vw(13)};

        border-top: 1px solid;
        border-top-color: #E0E1E0;
        padding-top: ${px2vw(13)};
    }

    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const PlaylistText = styled.div`
    display: flex;
    flex-direction: column;

    color: ${props => props.selected ? '#08DB27' : '#BDBFC1'};

    p{
        font-size: ${px2vw(20)};
    }

    small{
    }
`;

export const PlaylistButtons = styled.div`
    display: flex;
`;

export const PButtonsEdit = styled.button`
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

export const PButtonsDel = styled.button`
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

export const ChooseFile = styled.div`
    width: ${px2vw(350)};
    height: ${px2vw(390)};
    grid-area: b;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #065FC4;
    border-radius: ${px2vw(15)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;

    input{
        position: absolute;
        opacity: 0;
        height: ${px2vw(350)};
        width: ${px2vw(390)};
        background: none;
    }

    div{
        width: ${px2vw(220)};
        height: ${px2vw(290)};
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        background-color: #065FC4;
    }

    img{
        object: fill;
        width: ${px2vw(90)};
        height: ${px2vw(80)};
        margin-bottom: ${px2vw(10)};
    }

    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: ${px2vw(20)};
        color: #fff;
    }
`;


export const ContainerGroups = styled.div`
    width: ${px2vw(740)};
    height: ${px2vw(390)};
    margin-left: ${px2vw(400)};
    grid-area: b;
    border-radius: ${px2vw(30)};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 0px;
    padding: ${px2vw(20)};

    font-family: Arial, Helvetica, sans-serif;
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

export const GroupScroll = styled(PerfectScrollBar)`
    max-height: ${px2vw(250)};
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
`;

export const GroupText = styled.div`
    display: flex;
    flex-direction: column;

    color: ${props => props.selected ? '#08DB27' : '#868787'};

    p{
        font-size: ${px2vw(20)};
    }

    small{

    }
`;

export const GButtonAdd = styled.button`
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

export const ContainerSubmits = styled.div`
    grid-area: c;
    display: flex;
`;

export const SubmitRegister = styled.button`
    width: ${px2vw(530)};
    height: ${px2vw(35)};
    background-color: #0BDB5E;
    border: none;
    border-radius: ${px2vw(15)};

    color: #FEFEFE;
    font-size: ${px2vw(23)};
    font-family: Arial, Helvetica, sans-serif;
`;

export const SubmitUpdate = styled.button`
    width: ${px2vw(555)};
    height: ${px2vw(35)};
    margin-left: ${px2vw(45)};
    background-color: #E64F55;
    border: none;
    border-radius: ${px2vw(15)};

    color: #FEFEFE;
    font-size: ${px2vw(23)};
    font-family: Arial, Helvetica, sans-serif;
`;


