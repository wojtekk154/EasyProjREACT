import React from 'react';

import * as conf from '../../config';
// style
import './dropdown.scss';
import '../input/input-element.scss';

var FontAwesome = require('react-fontawesome');

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.openDialog = this.openDialog.bind(this);
	}

	componentDidMount() {
		if (!this.props.searchInput) {
			document.querySelector(`#myInput-${this.props.fieldName}`).style.display = 'none';
		}
	}

	openDialog(e) {
		if(document.querySelector('.show'))
			document.querySelector('.show').classList.toggle("show");

		document.querySelector(`#myDropDown-${this.props.fieldName}`).classList.toggle("show");
	}

	handleSelect(e, param) {
		e.preventDefault();
		this.props.onChangeValue({name: this.props.fieldName, value: param});
		document.querySelector(`#myDropDown-${this.props.fieldName}`).classList.toggle("show");
		this.clearError.call(this)
	}

	filterFunction(e) {
		e.preventDefault();
	}

	renderAnswers(fieldName) {
		switch (fieldName) {
			case 'status':
				return this.props.answers.length === 5 ? this.props.answers.map((item, index) => this.renderAnswersStatusTask(item, index)) :
					this.props.answers.map((item, index) => this.renderAnswersStatusProject(item, index));
			case 'priority':
				return this.props.answers.map((item, index) => this.renderAnswersPriority(item, index));
			case 'kind':
				return this.props.answers.map((item, index) => this.renderAnswersKind(item, index));
			default:
				return this.props.answers.map((item, index) => this.renderAnswersStatusTask(item, index));
		}
	}

	renderChoosenAnswer(fieldName, item) {
		switch (fieldName) {
			case 'status':
				return this.props.answers.length === 5 ? conf.statusTask[item] : conf.statusProject[item];
			case 'priority':
				return conf.priorityClass[item];
			case 'kind': return conf.kindName[item];
		}
	}

	renderAnswersStatusTask(item, index) {
		return (
			<span key={`status-${index}`} onClick={(e) => this.handleSelect.call(this, e, item)}>
				{conf.statusTask[item]}
			</span>
		);
	}

	renderAnswersStatusProject(item, index) {
		return (
			<span key={`status-${index}`} onClick={(e) => this.handleSelect.call(this, e, item)}>
				{conf.statusProject[item]}
			</span>
		);
	}

	renderAnswersPriority(item, index) {
		const styleFont = {
			display: 'inline',
			color: conf.priorityColor[item]
		};
		return (
			<span key={`priority-${index}`} onClick={(e) => this.handleSelect.call(this, e, item)}>
				<FontAwesome name={conf.priorityIcon[item]} style={styleFont}/>
				{conf.priorityName[item]}
			</span>
		);
	}

	setErrorState(message) {
		this.setState({
			hasError: true,
			errorMessage: message
		});
	}

	clearError() {
		console.log("FUPAAA");
		this.setState({
			hasError: false,
			errorMessage: ''
		});
	}

	validateField(e) {
		e.preventDefault();

		if (this.props.required && e.nativeEvent.target.value.length === 0) {
			this.setErrorState.call(this, `${conf.errorMessages.required} ${this.props.fieldName}!`);
		} else {
			this.clearError.call(this);
		}
	}

	renderAnswersKind(item, index) {
		const styleFont = {
			display: 'inline',
			color: conf.kindColor[item]
		};
		return (
			<span key={`kind-${index}`} onClick={(e) => { this.handleSelect.call(this, e, item) }}>
				<FontAwesome name={conf.kindIcon[item]} style={styleFont}/>
				{conf.kindName[item]}
			</span>
		);
	}

	render() {
		return (
			<div className={'DropDown'}>
				<div className='input-group'>
					<input
						type={'button'}
						name={this.props.fieldName}
						value={this.renderChoosenAnswer(this.props.fieldName, this.props.value) || ""}
						onClick={this.openDialog.bind(this)}
						onBlur={(e) => this.validateField.call(this, e)}
						required={this.props.required}
					/>
					<FontAwesome name={'caret-down'} className={'DropDown-carret'}/>
					<span className="highlight"></span>
					<span className="bar"></span>
					<label>{this.props.labelName}</label>
					<small>{this.state.hasError ? this.state.errorMessage : null}</small>
				</div>

				<div id={`myDropDown-${this.props.fieldName}`} className="DropDown-content">
					<input
						type="text"
						placeholder="Search.."
						className={'DropDown-content-myInput'}
						id={`myInput-${this.props.fieldName}`}
						onKeyUp={this.filterFunction.bind(this)}
					/>
					{this.renderAnswers(this.props.fieldName)}
				</div>
			</div>
		)
	}
}
