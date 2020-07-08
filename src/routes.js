import React from 'react';
import { Switch, Route } from 'react-router-dom';

import login from './pages/login';
import render from './pages/[render]';

export default function()
{
    return(
        <Switch>
            <Route path="/home" exact component={render} />
            <Route path="/" exact component={login} />
        </Switch>
    );
}