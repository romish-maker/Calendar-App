import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router/routers';
import {AppRootStateType} from '../store/store';

export const AppRouter: FC = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.authMe.isAuth);
    return (
        isAuth ?
        <Switch>
        {privateRoutes.map(route => 
            <Route 
                path={route.path} 
                exact={route.exact} 
                component={route.component}
                key={route.path}
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
