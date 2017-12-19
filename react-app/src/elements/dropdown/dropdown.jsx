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
			display: '',
			value: null
		};
	}

	componentDidMount() {
		// if (!this.props.searchInput) {
		// 	document.querySelector(`#myInput-${this.props.fieldName}`).style.display = 'none';
		// }
	}

	filterInput(e) {
		e.preventDefault();
		console.log(e)
	}

	select(item) {
		this.props.selectedItem = item;
	}

	show() {
		this.setState({listVisible: true});
		document.addEventListener("click", this.hide.bind(this), true);
	}

	hide() {
		this.setState({listVisible: false});
		document.removeEventListener("click", this.hide.bind(this), true);
	}

	returnIcon(item, color) {
		const style = {
			color: color,
			padding: '0 1em'
		};
		return <FontAwesome name={item} style={style}/>;
	}

	returnImage(image) {
		return <img src={image} width="40px" height="40px"/>
	}

	chooseAnswer(item) {
		this.setState({ value: item });
		this.props.choosenAnswer(item);
	}

	renderListItem(item, index) {
		return (
			<li key={index} onClick={ e => this.chooseAnswer.call(this, item)}>
				{item.icon ? this.returnIcon(item.icon, item.color) : (item.image ? this.returnImage(image): null) }
				{item.name}
			</li>
		);
	}

	ret


	render() {
		const searchStyle =  {
			display: this.props.searchInput ? 'block' : 'none'
		};

		return (
			<div className={"DropDown"}>
				<div className={"DropDown-container" + (this.state.listVisible ? " show" : "")}>
					<div className={"DropDown-container-display" + (this.state.listVisible ? " clicked" : "")}
						 onClick={this.show.bind(this)}>
						{
							this.state.value ?
								(this.state.value.icon ?
									this.returnIcon(this.state.value.icon, this.state.value.color) :
									(this.state.value.image ?
										this.returnImage(this.state.value.image):
										null)) :
							null
						}
						{this.state.value ? this.state.value.name : this.props.labelName}
					</div>
					<div className={'dropdown-list'}>
						<ul>
							<li style={searchStyle}>
								<input type="text"
									   onKeyUp={this.filterInput.bind(this)}
									   onClick={this.show.bind(this)}
									   placeholder="Search"
								/>
							</li>
							{this.props.answers.map((item, index) => this.renderListItem.call(this, item, index))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

// this.setState({ value: item })
