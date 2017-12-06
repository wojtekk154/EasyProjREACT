import React, {Component} from 'react';

import {Redirect, Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
// import components
import Project from './components/projects/project';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import history from './utils/history';
import SidePanel from './components/sidepanel/side-panel';
import Header from './components/header/header';
import Sprint from './components/sprint/sprint';
import NotFound from '../src/pages/NotFound/NotFound'
import ProjectsList from './components/projects-list/projects-list';
// styles scss
import 'styles/index.scss';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...props};
		this.requireAuth = this.requireAuth.bind(this);
		this.setLayout = this.setLayout.bind(this);
	}

	setLayout() {
		return this.props.layout.sidebarOpened ? 'sidebarOpened' : (this.props.layout.sidebarIcons ? 'sidebarIcons' : 'sidebarClosed' );
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

	renderHeader() {
		return (
			<span>
				<Header {...this.props} />
			</span>
		)
	}

	render() {
		return (
			<div>
				<ConnectedRouter history={history}>
					<div id="wrapper">
						<div className={`Main-side-panel ${this.setLayout()}`}>
							<SidePanel {...this.props} />
						</div>
						<div className={`Main-content-container ${this.setLayout()}`}>
							{this.props.user.isLoggedIn ? this.renderHeader() : ''}

							<div className='container'>
								<Switch>
									{/*Public Routes*/}
									<PublicRoutes exact={true} authed={(!this.props.user.isLoggedIn)} path="/login"
																component={Login} {...this.props} />

									<PublicRoutes exact={false} authed={(!this.props.user.isLoggedIn)} path="/register"
																component={Register} {...this.props} />

									{/*Private Routes */}
									<Route exact path="/" render={() => <ProjectsList {...this.props} />}/>
									<Route exact path="/projects/:projectId"
												 render={({match}) => <Project id={match.params.projectId} {...this.props} />}/>
									<Route path="/projects/:projectId/sprint/:sprintId"
												 render={({match}) => <Sprint projectId={match.params.projectId} sprintId={match.params.sprintId} {...this.props} />}/>
									<Route path="*"	render={() => <NotFound /> } />
								</Switch>
							</div>

						</div>
					</div>
				</ConnectedRouter>
			</div>
		)
	}
}

// Route guard functions
const PrivateRoute = ({component: Component, authed, path, ...rest}) => {
	return (
		<Route exact {...rest} path={path} render={(props) => authed ? <Component {...rest} /> :
			<Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
		/>
	)
};

const PublicRoutes = ({component: Component, authed, ...rest}) => {
	return (
		<Route {...rest} render={(props) => authed ? <Component {...rest} /> :
			<Redirect to={{pathname: '/', state: {from: props.location}}}/>}
		/>
	)
};
