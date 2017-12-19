import React from 'react';
import * as conf from '../../config';
// STYLES
import './select-element.scss';

var FontAwesome = require('react-fontawesome');

export default class SelectElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			label: ''
		};
		this.handleValue = this.handleValue.bind(this);
		this.renderAnswers = this.renderAnswers.bind(this);
	}

	componentDidMount() {
		this.setState({
			label: this.props.labelName,
			field: this.props.fieldlName
		});
	}

	renderAnswers(item, index, fieldlName) {
		if (fieldlName === "status" && this.props.answers.length === 3) {
			return (
				<option key={index + 1} value={item}>{conf.statusProject[item]}</option>
			);
		} else if (fieldlName === "status" && this.props.answers.length === 5) {
			return (
				<option key={index + 1} value={item}>{conf.statusTask[item]}</option>
			);
		} else if (fieldlName === "priority") {
			return (
				<option key={index + 1} value={item}>{conf.statusProject[item]}</option>
			);
		} else if (fieldlName === "kind") {
			return (
				<option key={index + 1} value={item}>
					<span className={conf.kindClass[item]}>
						 {kindIcoUnicode(item)} {conf.kindName[item]}
					</span>
				</option>
			);
		} else if (fieldlName === "assigned") {
			return (
				<option key={index + 1} value={item}> {item}</option>
			);
		}
	}

	render() {
		const selection = {
			fontFamily: 'FontAwesome, Arial'
		};

		return (
			<div className='input-group'>
				<select
					style={selection}
					name={this.props.fieldName}
					value={this.props.value}
					onChange={this.handleValue}
					required={this.props.required}
				>
					<option key={0}> Choose</option>
					{this.props.answers.map((item, index) => this.renderAnswers(item, index, this.props.fieldName))}
				</select>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>{this.props.labelName}</label>
			</div>
		);
	}

	handleValue(e) {
		this.props.onChangeValue(e);
	}
}

