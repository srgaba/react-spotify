import { persistStore } from 'redux-persist';
import persistReducers from './persistorReducers';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducers from './modules/rootReducers';
import rootSagas from './modules/rootSagas';

const sagaMonitor = process.env.NODE_ENV == 'development' 
    ? console.tron.createSagaMonitor()
    : null; 

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store , persistor };

