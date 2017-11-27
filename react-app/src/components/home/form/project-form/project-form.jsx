import React from 'react';

import './project-form.scss';

export default class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			name: this.refs.name.value,
			description: this.refs.description.value,
			project_key: this.refs.project_key.value,
			status: this.refs.status.value,
			owner: this.props.user.id,
			cooperator: this.props.user.id,
			owner_name: this.props.user.username,
		};

		this.props.addProject(data, this.props.user['access_token']);
		let modal = document.querySelector('#myModal');
		modal.style.display = "none";
	}

	render() {
		return (
			<div>
				<div className="header">
					<h3>Create new project</h3>
				</div>
				<div className="body">
					<form ref="projectForm" className="project-form" onSubmit={this.handleSubmit}>
						<label>Name:</label>
						<input id="name" ref="name" placeholder="Name"/>

						<label>Description:</label>
						<textarea id="description" ref="description" placeholder="Description">

						</textarea>
						<div className="row-form">
							<div className="col-half-1-form">
								<label>Project Key:</label>
								<input id="project_key" ref="project_key" placeholder="Project Key"/>
							</div>
							<div className="col-half-2-form">
								<label>Status:</label>
								<select ref='status' placeholder="Status">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
						</div>


						<input type='submit' className="submit-button"/>
					</form>
				</div>
			</div>
		);
	}
}
