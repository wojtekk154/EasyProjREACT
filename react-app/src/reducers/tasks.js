import * as act from '../actions/action.types';

const initialState = {
	tasks: {},
	isLoading: false,
	hasError: false
};

export default (state = initialState, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case act.TASK_LOADING:
			return {...state, isLoading: action.isLoading};
		case act.TASK_RECEIVED:
			return {...state, tasks: action.recivedTasks};
		case act.TASK_ERROR:
			return {...state, hasError: action.hasError};
		case act.TASK_CREATED:
			return {...state, sprints: [...state.sprints, action.created]};
		case act.TASK_CHANGED:
			return {...state, sprints: state.sprints.filter(sprint => {
				return sprint._id === action.updated._id ? action.updated : sprint
			})};
		case act.TASK_DELETED:
			return {...state};

		case act.TASK_DROP:
			newState.tasks[action.object.listname] = [
				...action.object.list
			];
			return state;
		default:
			return state;
	}
};
