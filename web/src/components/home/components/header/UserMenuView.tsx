import React from 'react';
import { Avatar } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';

export interface UserMenuData {
    fullName: string;
}

export interface UserMenuEvent {
    onLogoutClick: () => void;
}

export interface UserMenuViewProps extends UserMenuEvent, UserMenuData {}

export const UserMenuView: React.FC<UserMenuViewProps> = ({
    fullName,
    onLogoutClick,
}) => {
    return (
        <>
            <Avatar icon="user" />
            <Dropdown
                overlay={
                    <Menu>
                        {/* <Menu.Item
							key="0"
							onClick={() => {
								alert("0");
							}}
						>
							<a href="#">1st menu item</a>
						</Menu.Item>
						<Menu.Item key="1">
							<a href="http://www.taobao.com/">2nd menu item</a>
						</Menu.Item>
						<Menu.Divider /> */}
                        <Menu.Item key="3" onClick={onLogoutClick}>
                            Đăng xuất
                        </Menu.Item>
                    </Menu>
                }
                trigger={['click', 'hover']}
            >
                <a className="ant-dropdown-link" href="#">
                    {fullName} <DownCircleOutlined />
                </a>
            </Dropdown>
        </>
    );
};
