import React from 'react';
// styles scss
import './side-panel.scss';
import Header from "../header/header";
import logo from '../../assets/img/logo.png';

var FontAwesome = require('react-fontawesome');

const items = [
	{url: '#', name: 'url1', icon: 'tachometer'},
	{url: '#', name: 'url2', icon: 'user-circle'},
	{url: '#', name: 'url3', icon: 'cube'},
	{url: '#', name: 'url4', icon: 'google-wallet'},
	{url: '#', name: 'url6', icon: 'eye'},
	{url: '#', name: 'url8', icon: 'inbox'},
];


export default class SidePanel extends React.Component {

	constructor(props) {
		super(props);
	}

	setLayout(layout) {
		switch (true) {
			case layout.sidebarOpened: return 'sidebarOpened';
			case layout.sidebarIcons: return 'sidebarIcons';
			case layout.sidebarClosed: return 'sidebarClosed';
			default: return "sidebarOpened";
		}
	}

	renderName(name){
		return (
			<span className="menu-text">
				{name}
			</span>
		)
	}

	renderItem(item, i) {
		return (
				<li key={i}>
					<a href={item.url}>
						<FontAwesome name={item.icon} size='2x' />
						{this.setLayout(this.props.layout) !==  "sidebarIcons" ? this.renderName(item.name) : ''}
					</a>
				</li>
		)
	}

	icoHeader() {
		return (
			<header className="header">
				<img src={logo} alt="Logo"/>
			</header>
		)
	}


	titleHeader() {
		return (
			<header className="header">
				Easy<span>Proj</span><sup>beta</sup>
			</header>
		)
	}

	render() {

		const sitePanelClass = `site-panel-menu ${this.setLayout(this.props.layout)}`;
		return (
			<div className="panel-container">
				{this.props.layout.sidebarOpened ? this.titleHeader() : this.icoHeader()}

				<section className="side-panel-nav">
					<ul className={sitePanelClass}>
						{items.map((item, i) => this.renderItem(item, i))}
					</ul>
				</section>
			</div>
		)
	}
}
