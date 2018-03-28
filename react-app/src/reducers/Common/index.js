import * as types from '../../utils/actions';

const initialState = {
    loading: false
};

export function commonReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOADING_ACTION:
            return {...state, loading: action.payload};
        default:
            return state;
    }
}