import * as action from './action.types';
import * as conf from '../config';

export const loadingSprints = (isLoading) => {
	return {
		type: action.SPRINT_LOADING,
		isLoading
	}
};
export const errorSprint = (hasError) => {
	return {
		type: action.SPRINT_ERROR,
		hasError
	}
};


export const recivedSprints = (recivedSprints) => {
	return {
		type: action.SPRINT_RECEIVED,
		recivedSprints
	}
};
export const createSprint = (created) => {
	return {
		type: action.SPRINT_CREATED,
		created
	}
};
export const updatedSprint = (updated) => {
	return {
		type: action.SPRINT_CHANGED,
		updated
	}
};
export const removedSprint = (removed) => {
	return {
		type: action.SPRINT_DELETED,
		removed
	}
};


export const fetchSprints = (params, token) => {
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		dispatch(loadingSprints(true));
		try {
			fetch(`${conf.apiBaseUrl}/sprints?project=${params}`, {
				method: 'GET',
				headers: tokenHeaders
			})
				.then((response) => {
					return response.json();
				})
				.then(response => {
					return response
				})
				.then(sprints => {
					dispatch(loadingSprints(false));
					dispatch(recivedSprints(sprints));
				});
		} catch (e) {
			dispatch(errorSprint(true));
		}
	}
};
export const fetchSprintCreate = (params, token) =>{
	console.log(params);
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		try {
			fetch(`${conf.apiBaseUrl}/sprints`, {
				method: 'POST',
				headers: tokenHeaders,
				body: JSON.stringify(params)
			})
				.then(response => {
					return response.json();
				})
				.then(response => {
					return response
				})
				.then(response => {
					dispatch(createSprint(response));
				});
		} catch (e) {
			dispatch(errorSprint(true));
		}
	}
};
export const fetchSprintsUpdate = (params) => {
	return (dispatch) => {
		dispatch(errorSprint(true));
	}
};
export const fetchSprintsRemove = (params) => {
	return (dispatch) => {

	}
};
