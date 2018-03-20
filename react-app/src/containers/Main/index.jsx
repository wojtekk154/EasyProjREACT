import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';
import NotFound from '../../components/NotFound';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUp from '../SignUp';
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
        console.log(this.props); //this.props.switchSideBar();
    }

    render() {
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
                        <Routes/>
                    </section>
                </div>
                {/* ============================================== Footer =================================*/}
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        common: {
            loading: state.common.loading
        }
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


const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignUp} />

            {/* ============================= unknown url ================================ */}
            <Route component={NotFound}/>
        </Switch>
    </main>
);