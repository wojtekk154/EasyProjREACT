import * as actionProject from '../actions/action.types';

const initialState = {
	projects: [],
	isLoading: false,
	hasError: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionProject.PROJECTS_LOADING:
			return {...state, isLoading: action.isLoading};
		case actionProject.PROJECTS_RECEIVED:
			return {...state, projects: action.projects};
		case actionProject.PROJECTS_ERROR:
			return {...state, hasError: action.hasError};
		case actionProject.PROJECTS_CREATED:
			return {...state, projects: [...state.projects, action.createdProject]};
		case actionProject.PROJECTS_CHANGED:
			return {
				...state, projects: state.projects.filter(project => {
					return project._id === action.selectedProject._id ? action.selectedProject : project
				})
			};
		case actionProject.PROJECTS_DELETED:
			return {...state};
		default:
			return state;
	}
}
