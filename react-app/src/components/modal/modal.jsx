import React from 'react';

import './modal.scss';


var FontAwesome = require('react-fontawesome');
export default class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleClickOpen = () => {
		let modal = document.querySelector(`#myModal-${this.props.className}`);
		modal.style.display = "block";
	};

	handleRequestClose = () => {
		let modal = document.querySelector(`#myModal-${this.props.className}`);
		modal.style.display = "none";
	};

	render() {
		return (
			<span>
				<button className="Modal-open-modal-button" onClick={ () => { this.handleClickOpen() }}>
					<FontAwesome name={'plus'} className="Modal-nextSize"/> {this.props.buttonName}
				</button>

				<div id={`myModal-${this.props.className}`} className="Modal-modal-window">
					<div className="modal-content">
						<div className="modal-header">
							{this.props.title}
							<button className="closeButtonTimes" onClick={()=>{this.handleRequestClose()}}>&times;</button>
						</div>
						<div className="modal-body">
							{React.createElement(this.props.children, this.props)}
						</div>
					</div>
				</div>
			</span>
		);
	}
}
