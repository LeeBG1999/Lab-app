import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { AppState } from 'state';
import { CurrentUser } from 'state/reducer';

interface MenuLink {
    path: string;
    name: string;
    roleRequired?: string[];
}

interface MenuAction {
    function: () => any;
    name: string;
    roleRequired?: string[];
}

export interface UserMenuProps {
    displayName: string;
    photoUrl?: string | null;
    menus: (MenuLink | MenuAction)[];
}
function isMenuLink(menu: MenuLink | MenuAction): menu is MenuLink {
    return (menu as MenuLink).path !== undefined;
}

export const UserMenu: React.FC<UserMenuProps> = ({
    displayName,
    menus,
    photoUrl,
}) => {
    const currentUser = useSelector<AppState, CurrentUser | undefined>(
        state => state.currentUser,
    );
    const showMenu = (menu: MenuLink | MenuAction): React.ReactElement => {
        if (isMenuLink(menu))
            return (
                <MenuItem key={menu.name}>
                    <Link to={menu.path}>{menu.name}</Link>
                </MenuItem>
            );
        else {
            return (
                <MenuItem key={menu.name} onClick={menu.function}>
                    {menu.name}
                </MenuItem>
            );
        }
    };
    return (
        <>
            {photoUrl ? (
                <Avatar src={photoUrl} />
            ) : (
                <Avatar icon={<UserOutlined />} />
            )}
            <span> </span>
            <Dropdown
                overlay={
                    <Menu>
                        {menus.map(menu => {
                            return menu.roleRequired
                                ? menu.roleRequired.map(role => {
                                      if (
                                          currentUser &&
                                          currentUser.roles[role]
                                      ) {
                                          return showMenu(menu);
                                      }
                                      return null;
                                  })
                                : showMenu(menu);
                        })}
                    </Menu>
                }
                trigger={['click', 'hover']}
            >
                <div className="ant-dropdown-link">
                    {displayName} <DownOutlined />
                </div>
            </Dropdown>
        </>
    );
};
