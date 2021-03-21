// @flow
import React, { Component } from 'react';
import Routes from './routes/Routes';

// setup fake backend
import { configureFakeBackend } from './helpers';

import './assets/scss/Saas-Dark.scss';

const url = process.env.REACT_APP_URL_API;
const urlLogin = url+"login"; 
configureFakeBackend(urlLogin);

type AppProps = {};

class App extends Component<AppProps> {
    render() {
        sessionStorage.setItem('@dataAtual', new Date());
        return <Routes></Routes>;
    }
}

export default App;
