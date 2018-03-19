import * as types from '../../utils/actions';

export function loadingAction(value) {
   return {
       types: types.LOADING_ACTION,
       payload: value
   }
}