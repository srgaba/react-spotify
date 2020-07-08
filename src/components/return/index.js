import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../redux/modules/routes/actions';

import {
    Button
} from './styles';

export default function({ height })
{
    const dispatch = useDispatch();

    const historyPath = useSelector(state => state.history.history);
    const historyBody = useSelector(state => state.history.body);

    const handleNavigate = () => {
        if(historyBody)
        {
            dispatch(navigate(historyPath, historyBody));
        }else{
            dispatch(navigate(historyPath));
        }
    }

    return(
        <Button type="submit" onClick={() => handleNavigate()}>Voltar</Button>
    );
}