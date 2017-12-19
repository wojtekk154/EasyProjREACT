import React from 'react';
export const apiBaseUrl = 'http://localhost:1337/api';

export const kind = {
	class: {
		1: 'improvement',
		2: 'task',
		3: 'new-feature',
		4: 'epic',
		5: 'bug'
	},
	name: {
		1: 'Improvement',
		2: 'Task',
		3: 'New Feature',
		4: 'Epic',
		5: 'Bug'
	},
	icon:  {
		1: 'arrow-up',
		2: 'check-square',
		3: 'plus-square',
		4: 'warning',
		5: 'flash'
	},
	color: {
		1: '#4CAF50',
		2: '#1E88E5',
		3: '#00897B',
		4: '#AB47BC',
		5: '#C62828'
	}
};


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

export const priority = {
	class: {
		1: 'major',
		2: 'minor',
		3: 'trivial',
		4: 'critical',
		5: 'blocker'
	},
	color: {
		1: '#f44336',
		2: '#4CAF50',
		3: '#BDBDBD',
		4: '#FF5722',
		5: '#c62828'
	},
	name: {
		1: 'Major',
		2: 'Minor',
		3: 'Trivial',
		4: 'Critical',
		5: 'Blocker'
	},
	icon: {
		1: 'angle-double-up',
		2: 'angle-double-down',
		3: 'unsorted',
		4: 'exclamation',
		5: 'minus-circle'
	}
}


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

export const statusTask = {

	color: {
		1: '#f44336',
		2: '#4CAF50',
		3: '#BDBDBD',
		4: '#FF5722',
		5: '#c62828'
	},
	name: {
		1: 'Ready',
		2: 'InProgress',
		3: 'Ready for Test',
		4: 'In tests',
		5: 'Done'
	}

}

export const statusProject = {
	color: {
		1: '#f44336',
		2: '#4CAF50',
		3: '#BDBDBD',
		4: '#FF5722',
		5: '#c62828'
	},
	name: {
		1: 'Ready',
		2: 'InProgress',
		3: 'Done'
	}
}



export const statusTask1 = {
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

export const errorMessages = {
	notValidExpression: 'Invalid value! Please correct it!',
	required: 'Field required! Please enter',
	min: (num) => { return `Text is to short! It should have ${num} or more signs!`; },
	max: (num) => { return `Text is to short! It should have less than ${num} signs!`; },
};
