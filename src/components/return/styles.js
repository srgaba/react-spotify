import styled from 'styled-components';
import px2vw from '../../util/px2vw';

export const Button = styled.button`
    position: absolute;
    margin-left: ${px2vw(1000)};
    margin-top: ${px2vw(300)};

    height: ${px2vw(55)};
    width: ${px2vw(55)};
    background-color: #DF0101;
`;