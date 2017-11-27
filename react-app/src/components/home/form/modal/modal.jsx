import React from 'react';
import ProjectForm from '../project-form/project-form';

import './modal.scss';

export default class ProjectModal extends React.Component {
	constructor(props) {
		super(props);

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleClickOpen = () => {
		let modal = document.querySelector('#myModal');
		modal.style.display = "block";
	};

	handleRequestClose = () => {
		let modal = document.querySelector('#myModal');
		modal.style.display = "none";
	};

	render() {
		return (
			<div>
				<button className="open-modal-button" onClick={ () => { this.handleClickOpen() }}> Add Project </button>

				<div id="myModal" className="modal">
					<div className="modal-content">
						{React.createElement(this.props.children, this.props)}
								{/*<div className="modal-header">*/}
							{/*<h3>Add new project:</h3>*/}
						{/*</div>*/}
						{/*<div className="modal-body">*/}
							{/*sadasdas*/}
						{/*</div>*/}
						{/*<div className="modal-footer">*/}
							{/*<span onClick={ () => { this.handleRequestClose() }}>&times;</span>*/}
						{/*</div>*/}
						{/*<ProjectForm {...this.props} />*/}
					</div>
				</div>
			</div>
		);
	}
}
