import '../config/ReactotronConfig';
import '../config/DevtoolsConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const app = () => (
    <Provider store={store}>
        <StatusBar hidden/>
        <App />
    </Provider>
);

export default app;