import React from 'react';
import ProjectModal from './form/modal/modal';
import ProjectForm from './form/project-form/project-form';
// style
import './home.scss';
import Link from "react-router-dom/es/Link";

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.props.getProjects(this.props.user.id, this.props.user['access_token']);
		this.projectItem = this.projectItem.bind(this);
	}

	projectItem(item, index) {
		return (
			<li key={index}>
				<Link className="link"
							to={{pathname: `/project/${item._id}`, params: {id: item._id}}}>[{item.project_key}] {item.name}</Link>
				<small><strong>Leader: </strong> <Link className="link" to={`/user/${item.owner}`}> {item.owner_name}</Link>
				</small>
			</li>
		)
	}

	render() {
		return (<div>
			{this.props.children}
			</div>
			)
	}
}



