import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Personal } from 'components/personal';
import { Result, Button } from 'antd';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Dashboard } from 'components/dashboard';
import { Auth } from 'components/auth/Auth';
import { SelectUser } from 'components/select-user';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth">
                    <Auth />
                </Route>
                <Route path="/p">
                    <PrivateRoute>
                        <Personal />
                    </PrivateRoute>
                </Route>
                <Route exact path="/">
                    <Redirect to="/p" />
                </Route>
                <Route path="/dashboard">
                    <PrivateRoute roles={['root', 'admin']}>
                        <Dashboard />
                    </PrivateRoute>
                </Route>
                <Route path="/preview/select-user">
                    <SelectUser />
                </Route>
                <Route>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Không tìm thấy trang bạn yêu cầu"
                        extra={
                            <Link to="/">
                                <Button type="primary">Trang chủ</Button>
                            </Link>
                        }
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
