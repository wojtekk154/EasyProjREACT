import React from 'react';

import InputElement from '../../elements/input/input-element';
import TextAreaElement from '../../elements/input/textarea-element';
import DropDown from '../../elements/dropdown/dropdown';

import * as conf from '../../config';

import './project-form.scss';

let statusAnswers = [];

export default class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	componentDidMount() {
		this.setState({
			owner: this.props.user.id,
			cooperator: {
				email: this.props.user.email,
				image: this.props.user.id,
				id:  this.props.user.id
			},
			owner_name: this.props.user.username
		});
		statusAnswers = [];
		for(let i = 1; i <= 3; i++) {
			statusAnswers.push({name: conf.statusProject.name[i], color: conf.statusProject.color[i], value: i });
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.addProject(this.state, this.props.user['access_token']);
		this.resetForm.bind(this);
		let modal = document.querySelector(`#myModal-${this.props.className}`);
		modal.style.display = "none";
	}

	resetForm() {
		this.setState({
			name: '',
			description: '',
			project_key: '',
			status: ''
		});
	}
	handleChangeValue(e) {
		this.setState({ [e.target['name']]: e.target.value });
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<div className="body">
					<form ref="projectForm" className="ProjectForm" onSubmit={this.handleSubmit}>
						<div className="row-full-width">
							<div className="column-full-width">
								<InputElement labelName={"Project's Name"} fieldlName={'name'} value={this.state.name}
											  inputType={'text'}
											  onChangeValue={this.handleChangeValue}/>
							</div>
						</div>

						<div className="row-full-width">
							<div className="column-full-width">
								<TextAreaElement
									labelName={"Description"}
									fieldName={'description'}
									value={this.state.description}
									onChangeValue={this.handleChangeValue}
								/>
							</div>
						</div>

						<div className="row-double-columns">
							<div className="column-first">
								<InputElement
									labelName={"Project's Key"}
									fieldlName={'project_key'}
									value={this.state['project_key']}
									inputType={'text'}
									onChangeValue={this.handleChangeValue}/>
							</div>
							<div className="column-second">
								<DropDown
									labelName={'Status'}
									fieldName={'status'}
									value={this.state.status}
									answers={statusAnswers}
									choosenAnswer={(item)=>{this.setState({ status: item.value })}}
									onChangeValue={this.handleDropDown}
									searchInput={false}
									required={false}
								/>

							</div>
						</div>
						<input type='submit' className="ProjectForm-submit-button"/>
					</form>
				</div>
			</div>
		);
	}
}
