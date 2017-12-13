import React from 'react';

import * as conf from '../../config';
// STYLES
import './input-element.scss';

export default class InputElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: '',
			type: '',
			hasError: false,
			errorMessage: ''
		};

		this.handleValue = this.handleValue.bind(this);
	}

	componentDidMount() {
		this.setState({
			label: this.props.labelName,
			field: this.props.fieldlName,
			type: this.props.inputType
		});
	}

	setErrorState(message) {
		this.setState({
			hasError: true,
			errorMessage: message
		});
	}

	clearError() {
		this.setState({
			hasError: false,
			errorMessage: ''
		});
	}

	validateField(e) {
		e.preventDefault();

		if (this.props.inputPattern && !e.nativeEvent.target.value.match(this.props.inputPattern)) {
			this.setErrorState.call(this, conf.errorMessages.notValidExpression);
		} else if (this.props.required && e.nativeEvent.target.value.length === 0) {
			this.setErrorState.call(this, `${conf.errorMessages.required} ${this.props.fieldName}!`);
		} else if (this.props.min && e.nativeEvent.target.value.length < this.props.min) {
			this.setErrorState.call(this, `${conf.errorMessages.min(this.props.min)}`);
		} else if (this.props.max && e.nativeEvent.target.value.length > this.props.max) {
			this.setErrorState.call(this, `${conf.errorMessages.max(this.props.max)}`);
		} else {
			this.clearError.call(this);
		}

		console.log(document.querySelector(`input#${this.props.fieldlName}`).validity);
	}

	handleValue(e) {
		this.props.onChangeValue(e);
	}

	render() {
		return (
			<div className='InputElement'>
				<input
					type={this.props.inputType}
					name={this.props.fieldlName}
					id={this.props.fieldlName}
					value={this.props.value || ""}
					onChange={this.handleValue}
					onBlur={(e) => this.validateField.call(this, e)}
					required={this.props.required}
				/>
				<span className="InputElement-highlight"></span>
				<span className="InputElement-bar"></span>
				<label>{this.props.labelName}</label>
				<small>{this.state.hasError ? this.state.errorMessage : null}</small>
			</div>
		);
	}
}
