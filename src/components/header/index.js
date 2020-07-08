import React from 'react';
import { useDispatch } from 'react-redux';

import { navigate } from '../../redux/modules/routes/actions';
import { setContent } from '../../redux/modules/search/actions';

import {
    Container,
    Search,
    RightElements,
    ButtonUpgrade,
    Profile
} from './styles';

import ProfilePNG from '../../assets/images/profile.png';
// import SearchPNG from '../../assets/images/busca.png';

export default function()
{
    const dispatch = useDispatch();

    const handleNavigate = path => {
        dispatch(navigate(path));
    };

    const handleInputChange = e => {
        dispatch(setContent(e.target.value))
    };

    return(
        <Container>
            <div type="submit" onClick={() => handleNavigate("Search")}>
                <Search 
                    placeholder='Busca'
                    type='text'
                    onChange={handleInputChange}
                    >
                </Search>
            </div>

            <RightElements>
                <ButtonUpgrade>Upgrade</ButtonUpgrade>
                <Profile>
                    <img src={ProfilePNG} alt='0'/>
                    <h1>Gabadev</h1>
                </Profile>
            </RightElements>
        </Container>
    );
};