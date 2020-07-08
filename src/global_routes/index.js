import React from 'react';
import { Switch } from 'react-router-dom';

import { UserSession, AdminSession } from './route';

import login from '../pages/login';
import render from '../pages/[render]';
import dashboard from '../pages/dashboard';

export default function()
{
    return(
        <Switch>
            <UserSession path="/home" exact component={render} isPrivate={true}/>
            <UserSession path="/" exact component={login} />
            <AdminSession path="/dashboard" exact component={dashboard} />
        </Switch>
    );
}