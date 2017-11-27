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
		console.log(e);
		e.dataTransfer.effectAllowed = 'move';
		// e.dataTransfer.setData('text/html', this.props.title);
		// console.log('dragStart',e, e.target);
	}

	onDragEnter(e) {
		e.preventDefault();

		return true;
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
		console.log(this.props.sprint);

	//	.splice( index, 0, item );
	}

	onDragEnd(e) {
		e.preventDefault();
		document.querySelector('.placeholder').parentNode.removeChild(document.querySelector('.placeholder'))
	}

	render() {
		const {task, index} = this.props;

		return (
			<li draggable={true}
					onDragStart={this.onDragStart}
					onDragEnter={this.onDragEnter}
					onDragOver={this.onDragOver}
					onDragLeave={this.onDragLeave}
					onDrop={this.onDrop}
					onDragEnd={this.onDragEnd}
					id={`task-${task._id}`}
					tabIndex={index}>
				<span className={conf.kindClassName[task.kind]}><FontAwesome name={conf.kindIco[task.kind]}/></span>
				<span className={conf.priorityClassName[task.priority]}>
					<FontAwesome name={conf.priorityIco[task.priority]}/>
				</span>
				<span className="title">{task.name}</span>
				<span className="estimation">estimated: <span className="badge">{task.estimate}</span></span>
			</li>
		);
	}
}
