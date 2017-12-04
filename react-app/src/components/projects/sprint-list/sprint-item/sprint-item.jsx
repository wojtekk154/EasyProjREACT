import React from 'react';
import Link from "react-router-dom/es/Link";
import Moment from 'moment';


import * as conf from '../../../../config';
// import style
import './sprint-item.scss';

export default class SprintItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {sprintItem, projectId} = this.props;
		const liStyle = {
			backgroundColor: sprintItem.status ? conf.ProjectColors[sprintItem.status] : '#fff'
		};

		return (
			<div className={'SprintItem'}>
				<div className="SprintItem-element" style={liStyle}>
					<div className={'SprintItem-element-header'}>
						<Link to={`/projects/${projectId}/sprint/${sprintItem._id}`}>{sprintItem.name}</Link>
					</div>
					<div className={'SprintItem-element-activity-period'}>
						<span>
							{Moment(sprintItem.start_date).format('MMM Do YY')}
							- {Moment(sprintItem.end_date).format('MMM Do YY')}
						</span>
					</div>
						<div className={`SprintItem-element-badge SprintItem-element-badge-${sprintItem.status}`}>
							{conf.WorkStatusNames[sprintItem.status]}
						</div>
				</div>
			</div>

		);
	}
}
