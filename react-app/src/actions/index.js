import * as LayoutActions from './layout';
import * as AuthActions from './auth';
import * as ProjectActions from './projects';
import * as TaskActions from './task';
import * as SprintActions from './sprint';

export const ActionCreators = Object.assign({},
	ProjectActions,
	AuthActions,
	LayoutActions,
	SprintActions,
	TaskActions
);
