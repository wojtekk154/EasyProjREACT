import * as actionProject from '../actions/action.types';

const initialState = {
	project: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionProject.CURRENT_PROJECT:
			return {...state, project: action.currentProject };
		default: return state;
	}
}
