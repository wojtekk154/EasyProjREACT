import React, {Component} from 'react';

// Components
import Modal from '../../modal/modal';
import SprintItem from './sprint-item/sprint-item';

//style
import './sprint-list.scss';
import SprintForm from "../spint-form/sprint-form";

export default class SprintList extends Component {
	constructor(props) {
		super(props);
		this.state = {...props};

	}


	render() {
		const {projectId} = this.props;
		return (
			<div className="SprintList">
				<span className="SprintList-header">Project Sptints</span>
				<Modal
					className="SprintList-modal"
					children={SprintForm}
					title={"Create new sprint"}
					actionType={'create'}
					buttonName={'Add Sprint'}
					{...this.props}
				/>
				<strong className="SprintList-status"> - </strong>
				<div className="SprintList-list">
					{this.props.sprints.map((sprint, index) => <SprintItem className={'SprintList-list-item'} key={index}  sprintItem={sprint} projectId={projectId} />)}
				</div>
			</div>
		)
	}
}
