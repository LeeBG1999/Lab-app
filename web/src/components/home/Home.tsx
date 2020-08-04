import React from 'react';
import { Route } from 'routes';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from 'routes/RouteWithSubRoute';

interface HomeProps {
    routes?: Route[];
}
export const Home: React.FC<HomeProps> = ({ routes }) => {
    return (
        <>
            {routes ? (
                <Switch>
                    {routes.map((route, index) => (
                        <RouteWithSubRoutes route={route} key={index} />
                    ))}
                </Switch>
            ) : null}
        </>
    );
};
