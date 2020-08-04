import { DrawerArea } from 'shared/Drawer';
import DrawerComponent from '../components/drawer';
import { Header } from 'shared/ui/header';
import { HeaderLogo } from 'shared/Logo';
import { Route } from '../../../../../routes';
import Menu from '../components/menu';
import React from 'react';
import { device } from 'theme';
import styled from 'styled-components/macro';
import { UserMenuView, UserMenuData, UserMenuEvent } from '../UserMenuView';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

interface HeaderViewProps extends UserMenuEvent {
    routes: Route[];
    data: {
        user: null | UserMenuData;
    };
    onLogoClick: () => void;
}

const HeaderView: React.FC<HeaderViewProps> = ({
    routes,
    data: { user },
    onLogoutClick,
    onLogoClick,
}) => {
    return (
        <Header>
            <DrawerArea>
                <DrawerComponent />
            </DrawerArea>
            <HeaderLogo onClick={onLogoClick} />
            <MainMenu>
                <Menu routes={routes} />
            </MainMenu>
            {!user && (
                <Button>
                    <Link to="/auth/login">Đăng nhập</Link>
                </Button>
            )}
            {user && <UserMenuView {...user} onLogoutClick={onLogoutClick} />}
        </Header>
    );
};

export default HeaderView;

const MainMenu = styled.nav`
    flex: 5;
    display: none;
    @media ${device.laptop} {
        display: block;
    }
`;
