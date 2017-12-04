import React from 'react';
import Link from "react-router-dom/es/Link";


import * as conf from '../../../config';
// style
import './project-item.scss';

export default class ProjectItem extends React.Component {
	constructor(props) {
		super(props);

	}

	projectName(item) {
		return (<span>[{item.project_key}] {this.presentationTitle(item.name)}</span>);
	}

	presentationTitle(str) {
		return str.slice(0, 12);
	}

	presentationDescription(str) {
		return str.slice(0, 30);
	}

	render() {
		const {item} = this.props;
		const liStyle = {
			backgroundColor: item.status ? conf.ProjectColors[item.status] : '#fff'
		};
		return (
			<div className='ProjectItem' style={liStyle}>
				<Link className="ProjectItem-link" to={{pathname: `/projects/${item._id}`}}>
					{this.projectName(item)}
				</Link>

				<p>{this.presentationDescription(item.description)}...</p>

				<small>
					<strong>Leader: </strong>

					<Link className="link" to={`/user/${item.owner}`}>
						{item.owner_name}
					</Link>

					<span className={`status-badge status-badge-${item.status}`}>
						{conf.WorkStatusNames[item.status]}
					</span>
				</small>
			</div>
		)
	}
}
