import React from 'react';
import { Page } from 'shared/ui/page';
import { Header } from 'shared/ui/header';
import * as firebase from 'firebase/app';
import { SideBar } from 'shared/ui/side-bar';
import { useSelector } from 'react-redux';
import { AppState } from 'state';
import { CurrentUser } from 'state/reducer';
import { Route, Switch } from 'react-router-dom';
import { DangKiTrucLabController } from './components/dang-ki-truc-lab/DangKiTrucLabController';
import { Devices } from 'components/devices';

export const Personal: React.FC = () => {
    const currentUser = useSelector<AppState, CurrentUser | undefined>(
        state => state.currentUser,
    );

    const handleLogout = (): void => {
        firebase.auth().signOut();
    };

    return (
        <Page
            headerFixed
            header={
                <Header
                    userMenu={{
                        displayName: currentUser ? currentUser.displayName : '',
                        photoUrl: currentUser ? currentUser.photo : undefined,
                        menus: [
                            {
                                name: 'Dashboard',
                                path: '/dashboard',
                                roleRequired: ['root', 'admin'],
                            },
                            {
                                name: 'Đăng xuất',
                                function: handleLogout,
                            },
                        ],
                    }}
                />
            }
            sideBar={
                <SideBar
                    routes={[
                        {
                            name: 'Đăng kí trực Lab',
                            path: '/p/dang-ki-truc-lab',
                        },
                        {
                            name: 'Danh sách thiết bị',
                            path: '/p/danh-sach-thiet-bi',
                        },
                    ]}
                />
            }
        >
            <Switch>
                <Route path="/p/dang-ki-truc-lab">
                    <DangKiTrucLabController />
                </Route>
                <Route path="/p/danh-sach-thiet-bi">
                    <Devices />
                </Route>
            </Switch>
        </Page>
    );
};
