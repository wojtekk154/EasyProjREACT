import React from 'react';
// STYLES
import './input-element.scss';

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
	render() {
		return (
			<div className='input-group'>
				<textarea
					name={this.props.fieldName}
					onChange={this.handleValue}
					value={this.props.value || ""}
					required={true}
				>
				</textarea>
				<span className="highlight">
				</span>
				<span className="bar">
				</span>
				<label>{this.props.labelName}</label>
			</div>
		);
	}

	handleValue(e) {
		this.props.onChangeValue(e);
	}
}
