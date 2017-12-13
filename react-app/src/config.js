import React from 'react';
export const apiBaseUrl = 'http://localhost:1337/api';

export const kindClass = {
	1: 'improvement',
	2: 'task',
	3: 'new-feature',
	4: 'epic',
	5: 'bug'
};

export const kindName = {
	1: 'Improvement',
	2: 'Task',
	3: 'New Feature',
	4: 'Epic',
	5: 'Bug'
};
export const kindIcon = {
	1: 'arrow-up',
	2: 'check-square',
	3: 'plus-square',
	4: 'warning',
	5: 'flash'
};

export const kindColor = {
	1: '#4CAF50',
	2: '#1E88E5',
	3: '#00897B',
	4: '#AB47BC',
	5: '#C62828'
};

export const priorityColor  = {
	1: '#f44336',
	2: '#4CAF50',
	3: '#BDBDBD',
	4: '#FF5722',
	5: '#c62828'
};
export const priorityName  = {
	1: 'Major',
	2: 'Minor',
	3: 'Trivial',
	4: 'Critical',
	5: 'Blocker'
};
export const priorityClass  = {
	1: 'major',
	2: 'minor',
	3: 'trivial',
	4: 'critical',
	5: 'blocker'
};
export const priorityIcon = {
	1: 'angle-double-up',
	2: 'angle-double-down',
	3: 'unsorted',
	4: 'exclamation',
	5: 'minus-circle'
};

export const statusProject = {
	1: 'Ready',
	2: 'InProgress',
	3: 'Closed'
};

export const statusTask = {
	1: 'Ready',
	2: 'InProgress',
	3: 'Ready for Test',
	4: 'In tests',
	5: 'Done'
};

export const statusNumberTask = {
	'Ready': 1,
	'InProgress': 2,
	'Ready for Test': 3,
	'In tests': 4,
	'Done': 5
};

export const statusNumberProject = {
	'Ready': 1,
	'InProgress': 2,
	'Closed': 3
};

export const ProjectColors = {
	1: '#E0E0E0',
	2: '#BBDEFB',
	3: '#C8E6C9'
};

export const kindIconUnicode = (i) => {
	switch (i) {
		case 1:
			return (<span style="color: #4CAF50;">&#xf062;</span>);
		case 2:
			return (<span style="color: #1E88E5;">&#xf14a;</span>);
		case 3:
			return (<span style="color: #00897B;">&#xf0fe;</span>);
		case 4:
			return (<span style="color: #AB47BC;">&#xf0e7;</span>);
		case 5:
			return (<span style="color: #C62828;">&#xf06a;</span>);
		default:
			return (<span style="color: #4CAF50;">&#xf0e7;</span>);
	}
};

export const priorityIconUnicode = (i) => {
	switch (i) {
		case 1:
			return (<span style={{color: '#f44336'}}>&#xf102;</span>);
		case 2:
			return (<span style="color: #4CAF50;">&#xf103;</span>);
		case 3:
			return (<span style="color: #BDBDBD;">&#xf0dc;</span>);
		case 4:
			return (<span style="color: #FF5722;">&#xf071;</span>);
		case 5:
			return (<span style="color: #c62828;">&#xf056;</span>);
		default:
			return (<span style="color: #f44336;">&#xf102;</span>);
	}
};

export const errorMessages = {
	notValidExpression: 'Invalid value! Please correct it!',
	required: 'Field required! Please enter',
	min: (num) => { return `Text is to short! It should have ${num} or more signs!`; },
	max: (num) => { return `Text is to short! It should have less than ${num} signs!`; },
};
