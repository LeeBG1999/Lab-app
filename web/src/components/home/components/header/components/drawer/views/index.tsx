import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { ADMIN_URI } from 'routes';
import { CustomMenu } from 'shared/Menu';
import { Route } from 'routes';
import styled from 'styled-components/macro';
// import { useIsLoginQuery } from 'generated/apollo-react-hook.generated';

const { Item, Divider } = Menu;

interface Drawer extends RouteComponentProps {
    routes: Route[];
    onLogOutClick: () => void;
    onLoginClick: () => void;
}
const DrawerPresentational: React.FC<Drawer> = ({
    routes,
    onLogOutClick,
    onLoginClick,
    history,
    location,
}) => {
    const [visible, setVisible] = useState(false);
    // const { data } = useIsLoginQuery();

    const handleLogout = () => {
        setVisible(false);
        onLogOutClick();
    };

    const handleMenuItemClick = (url: string) => {
        history.push(url);
        setVisible(false);
    };

    return (
        <>
            <Button
                icon="menu"
                onClick={() => {
                    setVisible(true);
                }}
            />
            <CustomDrawer
                visible={visible}
                placement="left"
                onClose={() => setVisible(false)}
            >
                <CustomMenu defaultSelectedKeys={[location.pathname]}>
                    {/* {data!!.isLogin ? (
						<UserComponent />
					) : null} */}
                    <Item onClick={() => history.push(ADMIN_URI)}>
                        Trang quản trị
                    </Item>
                    <Divider />

                    {routes.map(route => (
                        <Item
                            onClick={() => handleMenuItemClick(route.path)}
                            key={route.path}
                        >
                            {route.name}
                        </Item>
                    ))}
                    <Divider />
                    <Item></Item>
                </CustomMenu>
            </CustomDrawer>
        </>
    );
};

export default withRouter(DrawerPresentational);

const CustomDrawer = styled(Drawer)`
    .ant-drawer-body {
        padding-left: 0;
        padding-right: 0;
        padding-top: 56px;
    }
`;
