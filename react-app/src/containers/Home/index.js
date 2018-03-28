import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {ActionCreators} from "../../actions";

import './index.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                Dupa
            </div>
        );
    }
}

Home.propTypes = {
    session: PropTypes.object
};

function mapStateToProps(state) {
    return {session: state.session};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        ActionCreators,
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);