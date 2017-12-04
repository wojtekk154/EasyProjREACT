import React from 'react';


import './header.scss';

var FontAwesome = require('react-fontawesome');
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.switchLayout = this.switchLayout.bind(this);
		this.getCurrentLayout = this.getCurrentLayout.bind(this);
		this.logOut = this.logOut.bind(this);
	}

	logOut() {
		// e.preventDefault();
		this.props.logoutCurrentUser();
	}

	getCurrentLayout() {
		switch (true) {
			case this.props.layout.sidebarOpened:
				return 'sidebarOpened';
			case this.props.layout.sidebarIcons:
				return 'sidebarIcons';
			case this.props.layout.sidebarClosed:
				return 'sidebarClosed';
			default:
				return 'sidebarOpened';
		}
	}

	switchLayout(e) {
		e.preventDefault();
		if (this.getCurrentLayout() === 'sidebarOpened') {
			this.props.iconsSideBar(true);
		} else {
			this.props.openSideBar(true);
		}
	}

	render() {
		return (
			<div>
				<header className="Header">
					<div className="Header-logo" onClick={($event) => this.switchLayout($event)}>
						<FontAwesome name='bars'/>
					</div>
					<ul>
						<li>
							<a onClick={($event) => this.logOut($event)}>LogOut</a>
						</li>
					</ul>
				</header>
			</div>
		);
	}
}
