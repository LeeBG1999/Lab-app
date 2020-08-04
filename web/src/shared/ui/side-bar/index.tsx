import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
    routes: { name: string; path: string }[];
}

export const SideBar: React.FC<SideBarProps> = ({ routes }) => {
    const location = useLocation();

    return (
        <Menu defaultSelectedKeys={[location.pathname]}>
            {routes.map(({ name, path }) => {
                return (
                    <Menu.Item key={path}>
                        <Link to={path}>{name}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};
