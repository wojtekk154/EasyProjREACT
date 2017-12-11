import React from 'react';
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

	validateField(e) {
		console.log(this.props.pattern);
		if (this.props.required && e.nativeEvent.target.value.length === 0) {
			console.log('requred');
		} else if (this.props.inputType === 'password' > e.nativeEvent.target.value.length === 6) {
			console.log('password');
		} else if (this.props.inputType === 'email') {

		} else if (this.props.inputType === 'text') {

		} else if (this.props.pattern.toString().length > 0) {
			console.log('a');
			console.log(e.nativeEvent.target.value.match(this.props.pattern));
		} else if (this.props.min && e.nativeEvent.target.value.length >= this.props.min) {
			console.log('min');
		} else if (this.props.max && e.nativeEvent.target.value.length <= this.props.max) {
			console.log('max');
		} else {

		}
		console.log(document.querySelector(`input#${this.props.fieldlName}`).validity.valid);
	}

	handleValue(e) {
		this.props.onChangeValue(e);
	}

	render() {
		return (
			<div className='input-group'>
				<input
					type={this.props.inputType}
					name={this.props.fieldlName}
					id={this.props.fieldlName}
					value={this.props.value || ""}
					pattern={this.props.inputPattern || /[\s\S]*?/}
					onChange={this.handleValue}
					onBlur={(e) => this.validateField.call(this, e)}
					required={this.props.required}
				/>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>{this.props.labelName}</label>
			</div>
		);
	}
}



// maxLength={this.props.max || 3}
// minLength={this.props.min || 15}
