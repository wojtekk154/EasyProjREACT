import React from 'react';

import InputElement from '../../elements/input/input-element';
import TextAreaElement from '../../elements/input/textarea-element';
import SelectElement from '../../elements/select/select-element'

import './project-form.scss';

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
			cooperator: this.props.user.id,
			owner_name: this.props.user.username
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.addProject(this.state, this.props.user['access_token']);

		this.setState({
			name: '',
			description: '',
			project_key: '',
			status: ''
		});

		let modal = document.querySelector('#myModal');
		modal.style.display = "none";
	}


	handleChangeValue(e) {
		this.setState({ [e.target['name']]: e.target.value });
	}

	render() {
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

								<SelectElement
									labelName={'Status'}
									fieldName={'status'}
									value={this.state.status}
									answers={[1, 2, 3]}
									onChangeValue={this.handleChangeValue}
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
