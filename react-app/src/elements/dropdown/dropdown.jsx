import React from 'react';
// style
import './dropdown.scss';
import '../input/input-element.scss';

var FontAwesome = require('react-fontawesome');

export default class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listVisible: false,
			display: '',
			focus: false
		};
		console.log(this.props);
	}

	componentDidMount() {
		// if (!this.props.searchInput) {
		// 	document.querySelector(`#myInput-${this.props.fieldName}`).style.display = 'none';
		// }
	}

	select(item) {
		this.props.selectedItem = item;
	}

	show() {
		this.setState({listVisible: true});
		document.addEventListener("click", this.hide.bind(this), true);
		document.querySelector('.DropDown-container-display .clicked').focus();
	}

	hide() {
		this.setState({listVisible: false});
		document.removeEventListener("click", this.hide.bind(this), true);
	}


	renderListItem(item, index) {
		return (
			<li key={index} onClick={e => console.log(e)}>
				<span>Test {item}</span>
			</li>
		);
	}

	render() {
		return (
			<div className={"DropDown"}>
				<div className={"DropDown-container" + (this.state.listVisible ? " show" : "")}>
					<div className={"DropDown-container-display" + (this.state.listVisible ? " clicked" : "")}
						 onClick={this.show.bind(this)} onBlur={(e) => console.log('dddddd dddd')}>
						{this.state.focus ? "none" : "dupa"}

					</div>
					<div className={'dropdown-list'}>
						<ul>
							{this.props.answers.map((item, index) => this.renderListItem.call(this, item, index))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

//
//
//
//
// filterFunction(e) {
// 	e.preventDefault();
// }
//
//
//
//
// clearError() {
// 	console.log("FUPAAA");
// 	this.setState({
// 		hasError: false,
// 		errorMessage: ''
// 	});
// }
//
// validateField(e) {
// 	e.preventDefault();
//
// 	if (this.props.required && e.nativeEvent.target.value.length === 0) {
// 		this.setErrorState.call(this, `${conf.errorMessages.required} ${this.props.fieldName}!`);
// 	} else {
// 		this.clearError.call(this);
// 	}
// }
