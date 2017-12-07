import React from 'react';


// Elements
import InputElement from '../../../../elements/input/input-element';
import TextAreaElement from '../../../../elements/input/textarea-element';
import SelectElement from '../../../../elements/select/select-element';
// Style
import './task-form.scss';

export default class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.submitTask = this.submitTask.bind(this);
		this.handleValue = this.handleValue.bind(this);
	}

	submitTask(e) {
		e.preventDefault();

		this.setState({
			project: this.props.project.project._id
		});

		console.log(this.state);
	}

	handleValue(e) {
		this.setState({ [e.target['name']]: e.target.value })
	}

	render(){
		return(
			<div>
				<form className={'TaskForm'} onSubmit={this.submitTask}>
					<div className="row-full-width">
						<div className="column-full-width">
							<InputElement
								labelName={"Task's Name"}
								fieldlName={'name'}
								value={this.state.name}
								inputType={'text'}
								onChangeValue={this.handleValue}
								required={true}
							/>
						</div>
					</div>

					<div className="row-full-width">
						<div className="column-full-width">
							<TextAreaElement
								labelName={"Description"}
								fieldName={'description'}
								value={this.state.description}
								onChangeValue={this.handleValue}
								required={true}
							/>
						</div>
					</div>

					<div className={'row-double-columns'}>
						<div className={'column-first'}>
							<SelectElement
								labelName={'Priority'}
								fieldName={'priority'}
								value={this.state.priority}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleValue}
								required={true}
							/>
						</div>
						<div className={'column-second'}>
							<SelectElement
								labelName={'Kind'}
								fieldName={'kind'}
								value={this.state.kind}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleValue}
								required={true}
							/>
						</div>
					</div>

					<div className={'row-double-columns'}>
						<div className={'column-first'}>
							<SelectElement
								labelName={'Assigned to'}
								fieldName={'assigned'}
								value={this.state.assigned}
								answers={['a', 'b']}
								onChangeValue={this.handleValue}
								required={false}
							/>
						</div>
						<div className={'column-second'}>
							<SelectElement
								labelName={'Status'}
								fieldName={'status'}
								value={this.state.status}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleValue}
								required={true}
							/>
						</div>
					</div>

					<div className={'row-double-columns'}>
						<div className={'column-first'}>
							<InputElement
								labelName={"Estimation"}
								fieldlName={'estimate'}
								value={this.state.estimate}
								inputType={'text'}
								onChangeValue={this.handleValue}
								required={false}
							/>
						</div>
						<div className={'column-second'}>
							<InputElement
								labelName={"Worked Time"}
								fieldlName={'worked'}
								value={this.state.worked}
								inputType={'text'}
								onChangeValue={this.handleValue}
								required={false}
							/>
						</div>
					</div>

					<div className={'row-double-columns'}>
						<div className={'column-first'}>
							 <input type={'submit'} value={'Create Task'} className={'TaskForm-submit'}/>
						</div>
						<div className={'column-second'}>

						</div>
					</div>
				</form>
			</div>
		)
	}
}




/*

name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
        index: req.body.index ? req.body.index : null,
        project: req.body.project ? req.body.project : null,
        sprint: req.body.sprint ? req.body.sprint : null,
        assigned: req.body.assigned ? req.body.assigned : null,
        status: req.body.status ? req.body.status : null,
        estimate: req.body.estimate ? req.body.estimate : null,
        worked: req.body.worked ? req.body.worked : null,
        kind: req.body.kind ? req.body.kind : null


 */
