import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {ActionCreators} from '../../actions/index';
import Loading from '../../components/Loading';

import {Routes} from '../../components/Routing';
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
    }

    renderPage = () => {
        return this.props.common.loading ? this.renderLoadingPage() : this.renderLoadedPage();
    }

    renderLoadingPage = () => {
        return (
            <React.Fragment>
                <Loading/>
            </React.Fragment>
        );
    }

    renderLoadedPage = () => {
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






