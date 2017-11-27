import React, {Component} from 'react';
import * as conf from '../../config';

import TasksList from './tasks/tasks-list';


var FontAwesome = require('react-fontawesome');

// style
import './project.scss';

export default class Project extends Component {
	constructor(props) {
		super(props);
		this.props.getCurrentProject(this.props.computedMatch.params.id, this.props.user['access_token']);
		this.props.fetchSprints(this.props.computedMatch.params.id, this.props.user['access_token']);
		this.props.fetchTasks(this.props.computedMatch.params.id, this.props.user['access_token']);
		this.state = {...props};
		this.render = this.render.bind(this);
	}

	render() {
		return (
			<div>
				<h1>[{this.props.project.project.project_key}] {this.props.project.project.name}</h1>
				{this.props.sprints.sprints.map((sprint, i) => <TasksList {...this.props} key={i} name={sprint.name} sprint={sprint} listTasks={this.props.tasks.tasks[sprint._id]} /> ) }

				<TasksList {...this.props} key={'last'} name={'Backlog'} sprint={{}} listTasks={this.props.tasks.tasks['backlog']} />
			</div>
		)
	}
}
