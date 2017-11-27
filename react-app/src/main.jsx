import React, {Component} from 'react';

import {Switch, Route, Redirect, Router} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import Reset from './components/auth/resetPasswrord/reset';
import history from './utils/history';
import SidePanel from './components/sidepanel/side-panel';
import Header from './components/header/header';
// styles scss
import 'styles/index.scss';

// import components
import Home from './components/home/home';

import Project from './components/projects/project';

const PrivateRoute = ({component: Component, authed, path, ...rest}) => {
	return (
		<Route {...rest} path={path} render={(props) => authed ? <Component {...rest} /> :
			<Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
		/>
	)
};

const PublicRoutes = ({component: Component, authed, ...rest}) => {
	return (
		<Route {...rest} render={(props) => authed ? <Component {...rest} /> :
			<Redirect to={{pathname: '/projects', state: {from: props.location}}}/>}
		/>
	)
};

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...props};
		this.requireAuth = this.requireAuth.bind(this);
	}

	renderHeader() {
		return (
			<span>
				<Header {...this.props} />
			</span>
		)
	}

	setLayout(layout) {
		switch (true) {
			case layout.sidebarOpened:
				return "sidebarOpened";
			case layout.sidebarIcons:
				return "sidebarIcons";
			case layout.sidebarClosed:
				return "sidebarClosed";
			default:
				return "sidebarOpened";
		}
	}

	requireAuth(nextState, replace, next) {
		if (!this.props.user.auth.isLoggedIn) {
			replace({
				pathname: '/login',
				state: {nextPathname: nextState.location.pathname}
			})
		}
		next();
	}

	render() {
		return (
			<div>
				<ConnectedRouter history={history}>
					<div id="wrapper">
						<div
							className={`side-panel ${this.props.layout.sidebarOpened ? 'sidebarOpened' : (this.props.layout.sidebarIcons ? "sidebarIcons" : "sidebarClosed" )}`}>
							<SidePanel {...this.props} />
						</div>
						<div
							className={`content-container ${this.props.layout.sidebarOpened ? 'sidebarOpened' : (this.props.layout.sidebarIcons ? "sidebarIcons" : "sidebarClosed" )}`}>
							{this.props.user.isLoggedIn ? this.renderHeader() : ''}
							<div className='container'>
								<Switch>
									<PublicRoutes authed={(!this.props.user.isLoggedIn)} path="/login"
																component={Login} {...this.props} />
									<PublicRoutes authed={(!this.props.user.isLoggedIn)} path="/register"
																component={Register} {...this.props} />

									<Route exact path="/projects" render={() => <Home {...this.props} onEnter={this.requireAuth} />}>
										<Route exact path="projects/:id" render={() => <Project {...this.props} />}/>

									</Route>
									{/*<PrivateRoute authed={this.props.user.isLoggedIn} path="/projects" component={Home} {...this.props} />*/}
									{/*<PrivateRoute authed={this.props.user.isLoggedIn} path="/project/:id" component={Project} {...this.props} />*/}
									{/*<PrivateRoute authed={this.props.user.isLoggedIn} path="/project/:sprint_id/sprint/:id" component={Project} {...this.props} />*/}
									{/*<PrivateRoute authed={this.props.user.isLoggedIn} path="/project/:id" component={Project} {...this.props} />*/}
									{/*<PrivateRoute authed={this.props.user.isLoggedIn} path="/project/:id" component={Project} {...this.props} />*/}
								</Switch>
							</div>
						</div>
					</div>
				</ConnectedRouter>
			</div>
		)
	}
}



