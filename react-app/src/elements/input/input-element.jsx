import React from 'react';
// STYLES
import './input-element.scss';

export default class InputElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			label: '',
			type: ''
		};

		this.handleValue = this.handleValue.bind(this);
	}

	componentDidMount(){
		this.setState({
			label: this.props.labelName,
			field: this.props.fieldlName,
			type: this.props.inputType
		});
	}

	handleValue(e) {
		console.log(e.target.value);
		this.props.onChangeValue(e);
	}

	render() {
		console.log(this.props.value);
		return (
			<div className='input-group'>
				<input
					type={this.props.inputType}
					name={this.props.fieldlName}
					value={this.props.value || ""}
					onChange={this.handleValue}
					required={true}
				/>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>{this.props.labelName}</label>
			</div>
		);
	}
}
