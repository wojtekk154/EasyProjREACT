import React from 'react';
import InputElement from '../../../elements/input/input-element';
import TextAreaElement from '../../../elements/input/textarea-element';
import SelectElement from '../../../elements/select/select-element';

export default class SprintForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	};

		this.submitSprint = this.submitSprint.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	componentDidMount(){
		this.setState({
			project_id: this.props.projectId
		});
	}

	submitSprint(e) {
		e.preventDefault();

	}

	handleChangeValue(e) {
		console.log(this.state)
		this.setState({ [e.target['name']]: e.target.value });
	}

	render () {
		return (
			<div>
 				<form className="sprint-form" onSubmit={this.submitSprint}>
					<div className="full-width-row">
						<div className="full-width-col">
							<InputElement labelName={"Project's Name"} fieldlName={'name'} value={this.state.name}
										  inputType={'text'}
										  onChangeValue={this.handleChangeValue} />
						</div>
					</div>

					<div className="full-width-row">
						<div className="full-width-col">
							<TextAreaElement
								labelName={"Description"}
								fieldName={'description'}
								value={this.state.description}
								onChangeValue={this.handleChangeValue}
							/>
						</div>
					</div>

					<div className="row-form">
						<div className="col-half-1-form">
							<InputElement
								labelName={"Project's Key"}
								fieldlName={'project_key'}
								value={this.state['project_key']}
								inputType={'text'}
								onChangeValue={this.handleChangeValue}/>
						</div>
						<div className="col-half-2-form">

							<SelectElement
								labelName={'Status'}
								fieldName={'status'}
								value={this.state.status}
								answers={[1, 2, 3]}
								onChangeValue={this.handleChangeValue}
							/>
						</div>
					</div>
					<input type='submit' className="submit-button"/>
				</form>
			</div>
		)
	}
}
