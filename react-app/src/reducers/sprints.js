import * as act from '../actions/action.types';

const initialState = {
	sprints: [],
	isLoading: false,
	hasError: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case act.SPRINT_LOADING:
			return {...state, isLoading: action.isLoading};
		case act.SPRINT_RECEIVED:
			return {...state, sprints: action.recivedSprints};
		case act.SPRINT_ERROR:
			return {...state, hasError: action.hasError};
		case act.SPRINT_CREATED:
			return {...state, sprints: [...state.sprints, action.created]};
		case act.SPRINT_CHANGED:
			return {...state, sprints: state.sprints.filter(sprint => {
				return sprint._id === action.updated._id ? action.updated : sprint
			})};
		case act.SPRINT_DELETED:
			return {...state};
		default:
			return state;
	}
};
