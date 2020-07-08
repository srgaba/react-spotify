import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import routes from './routes/sagas';
import player from './player/sagas';

export default function* rootSaga()
{
    return yield all([auth, routes, player]);
};