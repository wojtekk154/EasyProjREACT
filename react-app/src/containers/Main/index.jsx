import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from '../Home';
import NotFound from '../../components/NotFound';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {ActionCreators} from "../../actions/index";

import './style.css';

class Main extends React.Component {
    render(){
        return (
            <div>
                {/* ===================== Header ==================================*/}
                <Header brand="TestApp"/>
                {/* ========================= Content ================================ */}
                <Switch>
                        <div className="container">
                            <Route exact path="/" component={Home}/>


                            {/* ============================= unknown url ================================ */}
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect to="/not-found"/>
                        </div>
                </Switch>
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