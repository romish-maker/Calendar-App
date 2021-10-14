import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router/routers';

export const AppRouter: FC = () => {
    const isAuth = false;
    return (
        isAuth ?
        <Switch>
        {privateRoutes.map(route => 
            <Route 
                path={route.path} 
                exact={route.exact} 
                component={route.component}
            />
        )}
        <Redirect to={RouteNames.EVENT} />

        </Switch>
        :
        <Switch>
        {publicRoutes.map(route => 
            <Route 
                path={route.path} 
                exact={route.exact} 
                component={route.component}
                key={route.path}
            />
        )}
        <Redirect to={RouteNames.LOGIN} />
        </Switch>
    );
}
