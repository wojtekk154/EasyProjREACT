import React from 'react';
import './index.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {ActionCreators} from "../../actions";

class Home extends React.Component {
    render() {
        return (
          <div>
              DDDDDDDDDD
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        ActionCreators,
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);