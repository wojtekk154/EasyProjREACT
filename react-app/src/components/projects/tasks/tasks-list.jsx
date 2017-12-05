import React, {Component} from 'react';
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc';
// components
// style
import './tasks-list.scss';


// add
import * as conf from '../../../config';
var FontAwesome = require('react-fontawesome');
var placeholder = document.createElement("li");
placeholder.className = "placeholder";


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
		<ul className="tasks-list">
			{items.map((value, index) => (
				<SortableItem key={`item-${index}`} index={index} value={value}/>
			))}
		</ul>
	);
});


export default class TasksList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: props.listTasks ? props.listTasks : []
		}
	}

	componentDidMount() {
		this.setState({
			list: this.props.listTasks ? this.props.listTasks : []
		});
	}

	onSortEnd({oldIndex, newIndex}) {
		this.setState({
			list: arrayMove(this.state.list, oldIndex, newIndex),
		});
		this.props.onDropTask({list: this.state.list, listname: this.props.listname })
	};

	render() {
		const { name } = this.props;
		return (
			<div>
				<section className='backlog'>
					<h3>{name}</h3>

					<SortableList items={this.state.list} onSortEnd={this.onSortEnd.bind(this)}/>

				</section>
			</div>
		);
	}
}
