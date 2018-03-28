import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../containers/Home';
import SignUp from '../../containers/Auth/SignUp';
import SignIn from '../../containers/Auth/SignIn';
import EnsureLoggedInContainer from '../../containers/EnsureUserLoggedInContainer';

import NotFound from '../NotFound/';

export const Routes = () => (
    <main>
        <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <EnsureLoggedInContainer>
                <main>
                    <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/test" component={SignUp}/>
                    </Switch>
                </main>
            </EnsureLoggedInContainer>
            {/* ============================= unknown url ================================ */}
            <Route component={NotFound}/>
        </Switch>
    </main>
);