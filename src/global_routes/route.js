import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../redux';

export function UserSession({
    component: Component,
    isPrivate = false,
    ...rest
})
    {
        const { signed } = store.getState().auth;

        if(!signed && isPrivate)
        {
            return <Redirect to="/" />
        }

        if(signed && !isPrivate)
        {
            return <Redirect to="/home" />
        };

        return (
            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />
        );
}

export function AdminSession({
    component: Component,
    ...rest
})
    {
        const { signed } = store.getState().auth;
        const { profile: { provider } } = store.getState().user;

        if(!signed)
        {
            return <Redirect to="/" />
        }

        if(signed && !provider)
        {
            return <Redirect to="/home" />
        }

        return (
            <Route
                {...rest}
                render={props => (
                    <>
                        <Component {...props}/>
                    </>
                )}
            />
        );
}

AdminSession.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

UserSession.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

UserSession.defaultProps = {
    isPrivate: false
}
