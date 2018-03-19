import { combineReducers } from 'redux';
import { commonReducer } from './Common';

const appReducers = combineReducers({
    common: commonReducer
});

export default appReducers;