import React from 'react';


// Elements
import InputElement from '../../../../elements/input/input-element';
import TextAreaElement from '../../../../elements/input/textarea-element';
import SelectElement from '../../../../elements/select/select-element';
import DropDown from '../../../../elements/dropdown/dropdown';

// Style
import './task-form.scss';


export default class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formErrors: {}
		};
		this.submitTask = this.submitTask.bind(this);
		this.handleValue = this.handleValue.bind(this);
		this.handleDropDown = this.handleDropDown.bind(this);
	}

	componentDidMount() {
		this.setState({
			project: this.props.id,
			index: '0'
		});
	}



	submitTask(e) {
		e.preventDefault();
		this.props.fetchTaskCreate(this.state, this.props.user.access_token);
		console.log(this.state);
	}

	handleValue(e) {
		this.setState({ [e.target['name']]: e.target.value });
	}

	handleDropDown(item) {
		this.setState({ [item.name]: item.value });
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
								min={5}
								max={30}
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
							<DropDown
								labelName={'Priority'}
								fieldName={'priority'}
								value={this.state.priority}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleDropDown}
								searchInput={false}
								required={true}
							/>
						</div>
						<div className={'column-second'}>
							<DropDown
								labelName={'Kind'}
								fieldName={'kind'}
								value={this.state.kind}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleDropDown}
								searchInput={false}
								required={true}
							/>
						</div>
					</div>

					<div className={'row-double-columns'}>
						<div className={'column-first'}>
							<DropDown
								labelName={'Assigned to'}
								fieldName={'assigned'}
								value={this.state.assigned}
								answers={['a', 'b']}
								onChangeValue={this.handleDropDown}
								searchInput={true}
								required={false}
							/>
						</div>
						<div className={'column-second'}>
		 					<DropDown
								labelName={'Status'}
								fieldName={'status'}
								value={this.state.status}
								answers={[1, 2, 3, 4, 5]}
								onChangeValue={this.handleDropDown}
								searchInput={false}
								required={false}
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
								min={2}
								max={10}
								inputPattern={/^[0-9]{0,3}[h]{0,1}$|^[0-9]{0,2}[m]{0,1}$|^[0-9]{0,3}[h]{0,1}\s?[0-9]{0,2}[m]{0,1}$/i}
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
								min={2}
								max={10}
								inputPattern={/^[0-9]{0,3}[h]{0,1}$|^[0-9]{0,2}[m]{0,1}$|^[0-9]{0,3}[h]{0,1}\s?[0-9]{0,2}[m]{0,1}$/i}
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
