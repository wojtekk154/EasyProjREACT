import * as action from './action.types';

export function openSideBar(opened) {
	return {
		type: action.LAYOUT_SIDEBAR_OPEN,
		opened
	}
}

export function iconsSideBar(icons) {
	return {
		type: action.LAYOUT_SIDEBAR_ICONS,
		icons
	}
}


export function closedSideBar(closed) {
	return {
		type: action.LAYOUT_SIDEBAR_CLOSED,
		closed
	}
}
