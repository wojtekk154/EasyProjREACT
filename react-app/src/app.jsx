import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {ActionCreators} from './actions/index';
import Main from './main';

function mapStateToProps(state) {
	return {
		user: state.user,
		projects: state.projects,
		sprints: state.sprints,
		tasks: state.tasks,
		project: state.project,
		layout: state.layout,
		routing: state.routing
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
