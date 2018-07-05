import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import {AppContainer} from 'react-hot-loader';
import store from 'store';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>
    , rootEl
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require
        ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <NextApp />
            </Provider>
        </AppContainer>,
        rootEl
    );
    });
}