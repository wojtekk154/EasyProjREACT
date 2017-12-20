import React from 'react';
import InputElement from '../../../elements/input/input-element';
import TextAreaElement from '../../../elements/input/textarea-element';
import DropDown from '../../../elements/dropdown/dropdown';
import './spirnt-form.scss';

import * as conf from '../../../config';
let statusAnswers = [];

export default class SprintForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		statusAnswers = [];
		for(let i = 1; i <= 3; i++) {
			statusAnswers.push({name: conf.statusProject.name[i], color: conf.statusProject.color[i], value: i });
		}
		this.submitSprint = this.submitSprint.bind(this);
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	componentDidMount() {
		this.setState({
			project: this.props.projectId
		});
	}

	submitSprint(e) {
		e.preventDefault();
		console.log(this.state);
		this.props.create(this.state, this.props.token);
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
								onChangeValue={(e)=>{
									const date = new Date(e.target.value);
									this.setState({[e.target['name']]: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`});
								}}
							/>
						</div>
						<div className="column-second">
							<InputElement
								labelName={"Sprint's End Date"}
								fieldlName={'end_date'}
								value={this.state['end_date']}
								inputType={'date'}
								onChangeValue={(e)=>{
									const date = new Date(e.target.value);
									this.setState({[e.target['name']]: `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`});
								}}
							/>
						</div>
					</div>
					<div className="row-double-columns">
						<div className="column-first">
							<DropDown
								labelName={'Status'}
								fieldName={'status'}
								value={this.state.status}
								answers={statusAnswers}
								choosenAnswer={(item) => {
									this.setState({status: item.value})
								}}
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
