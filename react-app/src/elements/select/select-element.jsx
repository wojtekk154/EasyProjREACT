import React from 'react';
import * as conf from '../../config';
// STYLES
import './select-element.scss';

export default class SelectElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			label: ''
		};
		this.handleValue = this.handleValue.bind(this);
	}

	componentDidMount(){
		this.setState({
			label: this.props.labelName,
			field: this.props.fieldlName
		});
	}

	renderAnswers(item, index){
		return (
			 <option key={index+1} value={item}>{conf.WorkStatusNames[item]}</option>
		);
	}

	render() {
		return (
			<div className='input-group'>
				<select
					name={this.props.fieldName}
					value={this.props.value}
					onChange={this.handleValue}
					required={true}
				>
					<option key={0}>Choose </option>
					{this.props.answers.map((item, index) => this.renderAnswers(item, index)) }
				</select>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>{this.props.labelName}</label>
			</div>
		);
	}

	handleValue(e) {
		console.log(this.props)
		console.log(e.target)
		this.props.onChangeValue(e);
	}
}
