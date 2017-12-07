import React, {Component} from 'react';
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';

// components
import Modal from '../../modal/modal';
import TaskForm from './task-form/task-form';

// style
import './tasks-list.scss';

// add
import * as conf from '../../../config';
var FontAwesome = require('react-fontawesome');
var placeholder = document.createElement("li");
placeholder.className = "placeholder";



export default class TasksList extends Component {
	constructor(props) {
		super(props);
		this.props.fetchTasks(this.props.id, this.props.user['access_token']);

		this.state = {
			list: this.props.tasks.tasks[this.props.listname] ? this.props.tasks.tasks[this.props.listname] : []
		}
	}

	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				list: this.props.tasks.tasks[this.props.listname] ? this.props.tasks.tasks[this.props.listname] : []
			});
		}, 500)

	}


	onSortEnd({oldIndex, newIndex}) {
		this.setState({
			list: arrayMove(this.state.list, oldIndex, newIndex),
		});
		this.state.list.map((item, index) => {
			item.index = index;
			this.props.fetchTasksUpdate(item, this.props.user.access_token);
		});
		this.props.onDropTask({ list: this.state.list, listname: this.props.listname });
	};



	render() {
		const { name } = this.props;

		return (
			<div>
				<section className='TasksList'>
					<div className="TasksList-header">
						{name}

						<Modal
							className="TasksList-header-modal"
							children={TaskForm}
							title={"Create new task"}
							actionType={'create'}
							buttonName={'Add Task'}
							{...this.props}
						/>
					</div>

					<SortableList items={this.state.list} onSortEnd={this.onSortEnd.bind(this)}/>
				</section>
			</div>
		);
	}
}

// sort components
const SortableItem = SortableElement(({value}) =>
	<li>
		<span className={conf.kindClassName[value.kind]}>
			<FontAwesome name={conf.kindIco[value.kind]}/>
		</span>
		<span className={conf.priorityClassName[value.priority]}>
			<FontAwesome name={conf.priorityIco[value.priority]} />
		</span>
		<span className="title">{value.name}</span>
		<span className="estimation">
			estimated: <span className="badge">{value.estimate}</span>
		</span>
	</li>
);

const SortableList = SortableContainer(({items}) => {
	return (
		<ul className="TasksList-list">
			{items.map((value, index) => (
				<SortableItem key={`item-${index}`} index={index} value={value}/>
			))}
		</ul>
	);
});
