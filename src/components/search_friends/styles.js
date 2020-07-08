import styled from 'styled-components';

import px2vw from '../../util/px2vw';

export const Image = styled.img`
    margin-left: ${px2vw(1160)};

    object: fill;
    height: ${px2vw(650)};
    width: ${px2vw(220)};

    position: fixed;
`;