import React from 'react';
import { Button } from 'antd';
import { ActionBar } from 'shared/ui/action-bar';
import { Route } from 'routes';
import { Switch, Redirect, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from 'routes/RouteWithSubRoute';

interface TrucLabProps {
    routes?: Route[];
}

export const TrucLab: React.FC<TrucLabProps> = ({ routes }) => {
    console.log('TrucLab');
    if (!routes) return null;
    const defaultRoute = routes.find(route => route.default);
    console.log('defaultRoute :', defaultRoute);
    return (
        <>
            <ActionBar>
                <Button icon="plus" type="link">
                    <Link to="/dashboard/duty/truc-lab/them-lich-truc">
                        Thêm lịch trực
                    </Link>
                </Button>
            </ActionBar>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} route={route} />
                ))}
                {defaultRoute && <Redirect to={defaultRoute.path} />}
            </Switch>
        </>
    );
};
