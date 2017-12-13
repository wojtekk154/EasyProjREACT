import React from 'react';
// STYLES
import './input-element.scss';

import * as conf from '../../config';

export default class TextAreaElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			label: '',
			field: ''
		};

		this.handleValue = this.handleValue.bind(this);
	}

	componentDidMount(){
		this.setState({
			label: this.props.labelName,
			field: this.props.fieldlName,
			value: ''
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

		if (this.props.min && e.nativeEvent.target.value.length < 15) {
			this.setErrorState.call(this, `${conf.errorMessages.min(this.props.min)}`);
		} else if (this.props.max && e.nativeEvent.target.value.length > 300) {
			this.setErrorState.call(this, `${conf.errorMessages.max(this.props.max)}`);
		} else {
			this.clearError.call(this);
		}
	}

	render() {
		return (
			<div className='TextAreaElement'>
				<textarea
					name={this.props.fieldName}
					onChange={this.handleValue}
					value={this.props.value || ""}
					onBlur={(e) => this.validateField.call(this, e)}
					required={this.props.required}
				>
				</textarea>
				<span className="TextAreaElement-highlight">
				</span>
				<span className="TextAreaElement-bar">
				</span>
				<label>{this.props.labelName}</label>
				<small>{this.state.hasError ? this.state.errorMessage : null}</small>
			</div>
		);
	}

	handleValue(e) {
		this.props.onChangeValue(e);
	}
}
