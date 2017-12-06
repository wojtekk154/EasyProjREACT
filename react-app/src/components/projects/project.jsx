import React, {Component} from 'react';

import SprintList from './sprint-list/sprint-list';


import TasksList from './tasks/tasks-list';
// style
import './project.scss';

var FontAwesome = require('react-fontawesome');


export default class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {...this.props};
		this.props.getCurrentProject(this.props.id, this.props.user['access_token']);
		this.props.fetchSprints(this.props.id, this.props.user['access_token']);
	}

	render() {
		return (
			<div className="Project">
				<div className="row-full-width">
					<div className="column-full-width Project-container-shadow">
							<SprintList sprints={this.props.sprints.sprints} projectId={this.props.id}/>

					</div>
				</div>
				<div className="row-full-width">
					<div className="column-full-width Project-container-shadow">
						<TasksList
							{...this.props}
							key={'last'}
							name={'Backlog'}
							sprint={{}}
							listname={'backlog'}
						/>
					</div>
				</div>
			</div>
		)
	}
}
