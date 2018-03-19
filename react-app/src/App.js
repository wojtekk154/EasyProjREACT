import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {store} from './store/configureStore';
import AppMain from './containers/Main';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppMain/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
