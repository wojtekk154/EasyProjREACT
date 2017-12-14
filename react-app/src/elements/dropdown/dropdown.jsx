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
			display: ''
		};
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
		document.querySelector('.DropDown-container-display').focus();
	}

	hide() {
		this.setState({listVisible: false});
		document.removeEventListener("click", this.hide.bind(this), true);
	}


	renderListItem() {

	}

	render() {
		return (
			<div className={"DropDown"}>
				<div className={"DropDown-container" + (this.state.listVisible ? " show" : "")}>
					<div className='InputElement'>
						<button
							name={this.props.fieldlName}
							id={this.props.fieldlName}
							onClick={this.show.bind(this)}
							// onBlur={(e) => this.validateField.call(this, e)}
							required={this.props.required}
						> {this.props.value || "sadasdsa"}
							<FontAwesome name={'angle-down'} className="caret"/></button>
						<span className="InputElement-highlight"></span>
						<span className="InputElement-bar"></span>
						<label>{this.props.labelName}</label>
						<small>{this.state.hasError ? this.state.errorMessage : null}</small>
					</div>
					<div className={'dropdown-list'}>
						<div>
							dsadasdasdsa
						</div>
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
