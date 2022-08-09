import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-fv2yc4es.us.auth0.com --- domain

// rTNDoBdpvpO6gDJWia8YwlwlzJms5Ot0 --- cliendId 

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain= {`${process.env.REACT_APP_AUTH0_ACCESS_DOMAN}`}
    clientId={`${process.env.REACT_APP_AUTH0_ACCESS_CLENTID}`}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <GithubProvider>
    <App />
    </GithubProvider>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
