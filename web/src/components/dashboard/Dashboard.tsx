import React from 'react';
// import { Role, useCurrentUserQuery } from 'generated/apollo-react-hook.generated';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page } from 'shared/ui/page';
import { Header } from 'shared/ui/header';
import * as firebase from 'firebase/app';
import logo from 'assets/logo.png';
import { SideBar } from 'shared/ui/side-bar';
import { Users } from 'components/users';
import { Devices } from 'components/devices';
import { AddDevice } from 'components/add-devices';
import DeviceLabels from 'components/device-labels';
import ExternalSponsors from 'components/external-sponsors';
import NominalRolePage from 'components/nominal-roles';
// import Can from "components/Can";
// import { HOME_URI } from "routes";
// import { Redirect } from "react-router";

export const Dashboard: React.FC = () => {
    const handleLogout = (): void => {
        firebase.auth().signOut();
    };

    // const { data } = useCurrentUserQuery();
    // const [roles, setRoles] = useState<Role>();

    // useEffect(() => {
    // 	if (data && data.currentUser) {
    // 		setRoles(data.currentUser.user!!.role);
    // 	}
    // }, [data]);
    return (
        <Page
            headerFixed
            header={
                <Header
                    logo={logo}
                    userMenu={{
                        displayName: 'abc',
                        menus: [
                            {
                                name: 'Trang cá nhân',
                                path: '/p',
                            },
                            { name: 'Đăng xuất', function: handleLogout },
                        ],
                    }}
                />
            }
            sideBar={
                <SideBar
                    routes={[
                        {
                            name: 'Danh sách người dùng',
                            path: '/dashboard/users',
                        },
                        {
                            name: 'Danh sách thiết bị',
                            path: '/dashboard/devices',
                        },
                        {
                            name: 'Thêm thiết bị',
                            path: '/dashboard/add-device',
                        },
                        {
                            name: 'Nhãn thiết bị',
                            path: '/dashboard/device-labels',
                        },
                        {
                            name: 'Nhà tài trợ ngoài',
                            path: '/dashboard/external-sponsors',
                        },
                        {
                            name: 'Chức vụ',
                            path: '/dashboard/nominal-roles',
                        },
                    ]}
                />
            }
        >
            {/* <Can
				role="admin"
				perform="dashboard-page:visit"
				yes={() => (
					<AdminPresentational />
				)}
				no={() => (
					<Redirect
						to={
							HOME_URI
						}
					/>
				)}
			/> */}

            <br />
            <Switch>
                <Route path="/dashboard/users">
                    <Users />
                </Route>
                <Route path="/dashboard/devices">
                    <Devices />
                </Route>
                <Route path="/dashboard/add-device">
                    <AddDevice />
                </Route>
                <Route path="/dashboard/device-labels">
                    <DeviceLabels />
                </Route>
                <Route path="/dashboard/external-sponsors">
                    <ExternalSponsors />
                </Route>
                <Route path="/dashboard/nominal-roles">
                    <NominalRolePage />
                </Route>
                <Redirect to="/dashboard/users" />
            </Switch>
        </Page>
    );
};
