import React from 'react';
import InputElement from '../../../elements/input/input-element';
import TextAreaElement from '../../../elements/input/textarea-element';
import SelectElement from '../../../elements/select/select-element';

import './spirnt-form.scss';

export default class SprintForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.submitSprint = this.submitSprint.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	componentDidMount() {
		this.setState({
			project_id: this.props.projectId
		});
	}

	submitSprint(e) {
		e.preventDefault();
		this.props.createSprint(this.state, this.props.token);
	}

	handleChangeValue(e) {
		this.setState({[e.target['name']]: e.target.value});
	}

	render() {
		return (
			<div>
				<form className="SprintForm" onSubmit={this.submitSprint}>
					<div className="row-full-width">
						<div className="column-full-width">
							<InputElement
								labelName={"Project's Name"}
								fieldlName={'name'}
								value={this.state.name}
								inputType={'text'}
								onChangeValue={this.handleChangeValue}
							/>
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
								labelName={"Sprint's Start Date"}
								fieldlName={'start_date'}
								value={this.state['start_date']}
								inputType={'date'}
								onChangeValue={this.handleChangeValue}
							/>
						</div>
						<div className="column-second">
							<InputElement
								labelName={"Sprint's End Date"}
								fieldlName={'end_date'}
								value={this.state['end_date']}
								inputType={'date'}
								onChangeValue={this.handleChangeValue}
							/>
						</div>
					</div>
					<div className="row-double-columns">
						<div className="column-first">
							<SelectElement
								labelName={'Status'}
								fieldName={'status'}
								value={this.state.status}
								answers={[1, 2, 3]}
								onChangeValue={this.handleChangeValue}
							/>
						</div>
						<div className="column-second">
						</div>
					</div>
					<div className="row-double-columns">
						<div className="column-first">
							<input type='submit' className="SprintForm-submit"/>
						</div>
						<div className="column-second">
						</div>
					</div>

				</form>
			</div>
		)
	}
}
