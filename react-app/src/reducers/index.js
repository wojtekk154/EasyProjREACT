import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { commonReducer } from './Common';
import { authReducer } from './Auth';

const appReducers = combineReducers({
    common: commonReducer,
    session: authReducer,
    form: formReducer
});

export default appReducers;