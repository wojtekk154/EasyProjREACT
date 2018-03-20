import * as types from '../../utils/actions';

export function loadingAction(value) {
    return {
        type: types.LOADING_ACTION,
        payload: value
    };
}
