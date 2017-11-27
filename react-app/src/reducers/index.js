import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import LayoutReducer from './layout';
import AuthReducer from './auth';
import ProjectsReducer from './projects';
import CurrentProjectReducer from './project';
import SprintReducer from './sprints';
import TaskReducer from './tasks';


const rootReducer = combineReducers({
	user: AuthReducer,
	projects: ProjectsReducer,
	sprints: SprintReducer,
	tasks: TaskReducer,
	project: CurrentProjectReducer,
	layout: LayoutReducer,
	routing: routerReducer
});

export default rootReducer;
