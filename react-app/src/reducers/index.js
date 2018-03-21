import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { commonReducer } from './Common';

const appReducers = combineReducers({
    common: commonReducer,
    form: formReducer
});

export default appReducers;