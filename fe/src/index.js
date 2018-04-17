import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import {AppContainer} from 'react-hot-loader';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>
    , rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./containers/App').default; // eslint-disable-line global-require
        ReactDOM.render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        rootEl
    );
    });
}