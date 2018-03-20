import {applyMiddleware, compose, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducers from '../reducers';

const configureStore = (initialState) => {
    const enhancer = composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

    return createStore(appReducers, initialState, enhancer);
};

export const store = configureStore({});