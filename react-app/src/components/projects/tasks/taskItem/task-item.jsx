import React, {Component} from 'react';

import * as conf from '../../../../config';

import Moment from 'moment';

// style
import './task-item.scss';

var FontAwesome = require('react-fontawesome');


export default class TaskItem extends Component {
	constructor(props) {
		super(props);
		this.state = {...props};
		Moment.locale('en');
		this.onDragStart = this.onDragStart.bind(this);
		this.onDragEnter = this.onDragEnter.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.onDragLeave = this.onDragLeave.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);

	}

	onDragStart(e) {
		 this.props.dragStartTask({index:  e.target.tabIndex});
	}

	onDragEnter(e) {
		e.preventDefault();
	}

	onDragOver(e) {
		e.preventDefault();
	}

	onDragLeave(e) {
		e.preventDefault();
	}

	onDrop(e) {
		e.preventDefault();
		let newTasks = Object.assign({}, this.props.tasks);
	}

	onDragEnd(e) {
		e.preventDefault();
		document.querySelector('.placeholder').parentNode.removeChild(document.querySelector('.placeholder'))
	}

	render() {
		const {taskItem, index} = this.props;

		return (
			<li draggable={true}
					onDragStart={this.onDragStart}
					onDragEnter={this.onDragEnter}
					onDragOver={this.onDragOver}
					onDragLeave={this.onDragLeave}
					onDrop={this.onDrop}
					onDragEnd={this.onDragEnd}
					id={`task-${taskItem._id}`}
					tabIndex={index}>
							</li>
		);
	}
}
