import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pushBreadCrumb, popBreadCrumb } from 'state/actions';
import { PrivateRoute } from './PrivateRoute';
import { Route as MyRoute } from '.';

const A: React.FC<{ route: MyRoute }> = ({ children, route }) => {
    const dispath = useDispatch();
    useEffect(() => {
        dispath(pushBreadCrumb(route));
        return (): void => {
            dispath(popBreadCrumb(route));
        };
    });

    return <>{children}</>;
};

interface RouteWithSubRoutes {
    route: MyRoute;
    defaultPath?: string;
}

export const RouteWithSubRoutes: React.FC<RouteWithSubRoutes> = ({
    route,
    ...otherProps
}) => {
    console.log('route.path', route.path);
    console.log('otherProps :', otherProps);
    return (
        <Route
            exact={route.exact}
            path={route.path}
            render={(props): JSX.Element => {
                return route.isPrivateRoute ? (
                    <PrivateRoute>
                        <A route={route}>
                            <route.component
                                {...props}
                                routes={route.subRoutes}
                            />
                        </A>
                    </PrivateRoute>
                ) : (
                    <A route={route}>
                        <route.component {...props} routes={route.subRoutes} />
                    </A>
                );
            }}
        />
    );
};
