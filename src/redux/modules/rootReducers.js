import { combineReducers } from 'redux'; 

import auth from './auth/reducer';
import user from './user/reducer';
import player from './player/reducer';
import routes from './routes/reducer';
import search from './search/reducer';
import history from './history/reducer';

export default combineReducers({
    auth,
    user,
    player,
    routes,
    history,
    search,
});