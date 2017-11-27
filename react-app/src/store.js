import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import history from './utils/history';
import persistState from 'redux-localstorage'

const reduxRouterMiddleware = routerMiddleware(history);

const enchancers = compose(
	applyMiddleware(thunk, reduxRouterMiddleware),
	persistState(['user', 'routing'], {key: 'redux'}),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaultState = {};
const store = createStore(rootReducer, defaultState, enchancers);

export default store;



