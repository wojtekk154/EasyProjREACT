import React from 'react';
// components
import Modal from '../modal/modal';
import ProjectForm from "../project-form/project-form";
import ProjectItem from './project-item/project-item';
// style
import './projects-list.scss';

export default class ProjectsList extends React.Component {
	constructor(props) {
		super(props);
		this.props.getProjects(this.props.user.id, this.props.user['access_token']);
	}

	render() {
		return (
			<div className={'ProjectList'}>
				<div className="row-full-width">
					<div className="column-full-width Project-container-shadow">
						<div className='ProjectList-header'>
							Project's List
							<Modal
								children={ProjectForm}
								title={"Create new project"}
								actionType={'create'}
								buttonName={'Add project'}
								className={'projectForm'}
								{...this.props}
							/>
						</div>
						<div className="ProjectList-list">
							{this.props.projects.projects.map((project, index) => <ProjectItem key={index}
																							   item={project}/>)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
