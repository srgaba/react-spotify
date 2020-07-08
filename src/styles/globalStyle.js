import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';


import Cocogoose from '../assets/fonts/Cocogoose Pro-trial.ttf';
import Champagne from '../assets/fonts/Champagne & Limousines.ttf';
import Simplicity from '../assets/fonts/simplicity.ttf'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    @import url(${Cocogoose});
    @import url(${Champagne});
    @import url(${Simplicity});

    #root{
        margin: 0 auto;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
`;