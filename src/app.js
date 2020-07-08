import React from 'react';

import { ToastContainer } from 'react-toastify';
import './config/reactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';


import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import history from './util/history';

import { BrowserRouter } from 'react-router-dom'

//Pages
import Routes from './global_routes';

//Styles
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
              <Router history={history}>
                <GlobalStyle />
                <Routes />
                <ToastContainer autoClose={3000}/>
              </Router>
          </BrowserRouter>
      </PersistGate>
    </Provider>    
  );
}

export default App;
