import { takeLatest, put, call, all, select } from 'redux-saga/effects';

import api from '../../../util/api';

import { navigateReducer } from './actions';
import { setHistory } from '../history/actions';
import Reactotron from 'reactotron-react-js';

export function* implementHistory({ payload })
{
    const { path, prop } = payload;

    const routes = yield select(state => state.routes);

    var historyPath = "";
    
    routes.forEach(index => {
        if(index.current === true)
        {
            historyPath = index.path;
        };
    });

    if(historyPath == "Playlist")
    {
        const playlistID = yield select(state => state.routes[3].body.playlistSelected);
        yield put(setHistory(historyPath, playlistID));
    } else {
        yield put(setHistory(historyPath));
    }

    yield put(navigateReducer(path, prop));
};

export default all([
    takeLatest('@route/NAVIGATE_MIDDLEWARE', implementHistory),
]);