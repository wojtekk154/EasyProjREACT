import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from '../Home';
import NotFound from '../../components/NotFound';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUp from '../Auth/SignUp';
import SignIn from '../Auth/SignIn';
import {ActionCreators} from "../../actions/index";

import './style.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        };
        this.switchSidebarMenu = this.switchSidebarMenu.bind(this);
    }

    switchSidebarMenu() {
        this.setState({sidebar: !this.state.sidebar});
        console.log(this.props);
    }

    renderPage() {
        return this.props.common.loading ? this.renderLoadingPage() : this.renderLoadedPage();
    }

    renderLoadingPage() {
        return (
            <div className="loading">
                Loading
            </div>
        );
    }

    renderLoadedPage() {
        return (
            <div>
                {/* ===================== Header ==================================*/}
                <Header brand="TestApp"/>
                {/* ========================= Content ================================ */}

                <div className="container">
                    <aside className={"sidebar-menu " + (this.state.sidebar && "visible")}>
                        <button type="button" onClick={this.switchSidebarMenu}>xD</button>
                    </aside>
                    <section className="main-container">
                        <Routes authentication={this.props.session.accessToken !== ''}/>
                    </section>
                </div>
                {/* ============================================== Footer =================================*/}
                <Footer/>
            </div>
        )
    }

    render() {
        return this.renderPage();
    }
}


const mapStateToProps = (state) => {
    return {
        common: state.common,
        session: state.session
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
};

const AppMain = connect(mapStateToProps, mapDispatchToProps)(Main);
export default AppMain;


const Routes = ({authentication}) => (
    <main>
        <Switch>
            <PrivateRoutes path="/" isAuth={authentication} component={Home}/>
            <PrivateRoutes path="/" isAuth={authentication} component={Home}/>
            <PrivateRoutes path="/" isAuth={authentication} component={Home}/>
            <PublicRoutes path="/signup" isAuth={!authentication} component={SignUp}/>
            <PublicRoutes path="/signin" isAuth={!authentication} component={SignIn}/>
            {/* ============================= unknown url ================================ */}
            <Route component={NotFound}/>
        </Switch>
    </main>
);

const PublicRoutes = (props) => {
    return props.isAuth ? <Route path={props.path} component={props.component}/> : <Redirect to="/"/>;
};

const PrivateRoutes = props => {
    return props.isAuth ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/signin" />;
}