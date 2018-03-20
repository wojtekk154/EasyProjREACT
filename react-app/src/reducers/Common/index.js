import * as types from '../../utils/actions';

const initialState = {
    loading: false
};

export function commonReducer(state = initialState, action) {
    switch (action.payload) {
        case types.LOADING_ACTION:
            return {...state, loading: action.value};
        default:
            return state;
    }
}