import * as action from './action.types';
import * as conf from '../config';

export const loadingTasks = (isLoading) => {
	return {
		type: action.TASK_LOADING,
		isLoading
	}
};
export const errorTask = (hasError) => {
	return {
		type: action.TASK_ERROR,
		hasError
	}
};
export const recivedTasks = (recivedTasks) => {
	console.log(recivedTasks)
	return {
		type: action.TASK_RECEIVED,
		recivedTasks
	}
};
export const createTask = (created) => {
	return {
		type: action.TASK_CREATED,
		created
	}
};
export const updatedTask = (updated) => {
	return {
		type: action.TASK_CHANGED,
		updated
	}
};
export const removedTask = (removed) => {
	return {
		type: action.TASK_DELETED,
		removed
	}
};


export const fetchTasks = (params, token) => {
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		dispatch(loadingTasks(true));
		try {
			fetch(`${conf.apiBaseUrl}/tasks?project=${params}`, {
				method: 'GET',
				headers: tokenHeaders
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					return response;
				})
				.then(tasks => {
					let sortedTasks = {};
					tasks.map(task=> {
						(sortedTasks[task.sprint ? task.sprint : 'backlog'] = sortedTasks[task.sprint ? task.sprint : 'backlog'] || [] ).push(task);
					});
					console.log(sortedTasks);
					dispatch(loadingTasks(false));
					dispatch(recivedTasks(sortedTasks));
				});
		} catch (e) {
			dispatch(errorTask(true));
		}
	}
};
export const fetchTaskCreate = (params, token) =>{
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		try {
			fetch(`${conf.apiBaseUrl}/tasks`, {
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
					dispatch(createTask(response));
				});
		} catch (e) {
			dispatch(errorTask(true));
		}
	}
};
export const fetchTasksUpdate = (params, token) =>{
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {
		dispatch(errorTask(true));
	}
};
export const fetchTasksRemove = (params, token) =>{
	const tokenHeaders = {'Content-Type': 'application/json', 'access-token': `${token}`};
	return (dispatch) => {

	}
};
