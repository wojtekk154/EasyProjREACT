import * as action from './action.types';
import * as conf from '../config';

export const loadingProjects = (isLoading) => {
	return {
		type: action.PROJECTS_LOADING,
		isLoading
	};
};

export const revicedProjects = (projects) => {
	return {
		type: action.PROJECTS_RECEIVED,
		projects
	};
};


export const errorProject = (hasError) => {
	return {
		type: action.PROJECTS_ERROR,
		hasError
	};
};

export const projectUpdated = (selectedProject) => {
	return {
		type: action.PROJECTS_CHANGED,
		selectedProject
	};
};

export const projectRemoved = (removedProject) => {
	return {
		type: action.PROJECTS_DELETED,
		removedProject
	};
};

export const projectCreated = (createdProject) => {
	return {
		type: action.PROJECTS_CREATED,
		createdProject
	};
};

export const currentProject = (currentProject) => {
	return {
		type: action.CURRENT_PROJECT,
		currentProject
	};
}

export const getProjects = (user, token) => {
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		dispatch(loadingProjects(true));

		try {
			fetch(`${conf.apiBaseUrl}/projects?user=${user}`, {
				method: 'GET',
				headers: tokenHeaders
			})
				.then((response) => {
					return response.json();
				})
				.then(response => {
					return response
				})
				.then(projects => {
					dispatch(loadingProjects(false));
					dispatch(revicedProjects(projects));
				});
		} catch (e) {
			dispatch(errorProject(true));
		}
	};
};

export const getCurrentProject = (id, token) => {
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		try {
			fetch(`${conf.apiBaseUrl}/projects/${id}`, {
				method: 'GET',
				headers: tokenHeaders
			})
				.then(response => {
					return response.json();
				})
				.then(response => {
					return response
				})
				.then(response => {
					dispatch(currentProject(response));
				});
		} catch (e) {
			dispatch(errorProject(true));
		}
	}
}

export const addProject = (data, token) => {
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		try {
			fetch(`${conf.apiBaseUrl}/projects`, {
				method: 'POST',
				headers: tokenHeaders,
				body: JSON.stringify(data)
			})
				.then(response => {
					return response.json();
				})
				.then(response => {
					return response
				})
				.then(response => {
					dispatch(projectCreated(response));
				});
		} catch (e) {
			dispatch(errorProject(true));
		}
	}
};
