import React from 'react';
import {Redirect, Route} from "react-router-dom";

export const PublicRoutes = (props) => {
    return props.isAuth ? <Route path={props.path} component={props.component}/> : <Redirect to="/"/>;
};
