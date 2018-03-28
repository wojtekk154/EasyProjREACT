import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PrivateRoutes = props => {
    return props.isAuth ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/signin" />;
};
