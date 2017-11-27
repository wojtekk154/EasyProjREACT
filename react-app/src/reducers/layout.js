import * as actionType from '../actions/action.types';

const initial_state = {
	sidebarOpened: true,
	sidebarIcons: false,
	sidebarClosed: false
};

const resetState = {
	sidebarOpened: false,
	sidebarIcons: false,
	sidebarClosed: false
};

export default (state = initial_state, action) => {
	switch (action.type) {
		case actionType.LAYOUT_SIDEBAR_OPEN:
			return {...resetState, sidebarOpened: action.opened};
		case actionType.LAYOUT_SIDEBAR_ICONS:
			return {...resetState, sidebarIcons: action.icons};
		case actionType.LAYOUT_SIDEBAR_CLOSED:
			return {...resetState, sidebarClosed: action.closed};
		default:
			return state;
	}
}
