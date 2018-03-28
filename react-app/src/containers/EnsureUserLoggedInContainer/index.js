import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {ActionCreators} from "../../actions/index";
import {connect} from "react-redux";

class EnsureLoggedInContainer extends React.Component {
    componentDidMount() {
        if(!!this.props.session) {
            const isLoggedIn = this.props.session.accessToken !== '' && this.props.session.username !== '' && this.props.session.email !== '';
        } else {

        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

EnsureLoggedInContainer.propTypes = {
    session: PropTypes.object,
    common: PropTypes.object,
    children: PropTypes.array
};


function mapStateToProps(state, ownProps) {
    return {
        session: state.session.isRequired,
        common: state.common.isRequired,
        children: ownProps.children.props.children.props.children
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        ActionCreators,
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedInContainer);