import React, {Component} from 'react';

import * as conf from '../../../config';

import TaskItem from './taskItem/task-item';

import Moment from 'moment';
// style
import './tasks-list.scss';

var FontAwesome = require('react-fontawesome');


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

export default class TasksList extends Component {
	constructor(props) {
		super(props);
	}

	allowDrop(e) {
		e.preventDefault();
		e.target.parentNode.insertBefore(placeholder, e.target);
	}

	render() {
		const {name, sprint, listTasks} = this.props;
		console.log(this.props);
		return (
			<div>
				<section className='backlog'>
					<h3>{name}</h3>
					<strong>{Moment(sprint['start_date']).format('d MMM')} - {Moment(sprint['end_date']).format('LL')}</strong>

					<ul id={`sprint-${sprint._id}`} className="tasks-list" onDragOver={this.allowDrop.bind(this)}>
						{listTasks ? listTasks.map((task, i) => <TaskItem key={i} task={task} index={i} sprint={sprint} {...this.props} />) : ''}
					</ul>
				</section>
			</div>
		);
	}
}
