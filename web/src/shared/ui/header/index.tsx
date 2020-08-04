import React from 'react';
import * as Styled from './header.styled';
import { UserMenuProps, UserMenu } from '../menu';

export interface HeaderProps {
    userMenu?: UserMenuProps;
    logo?: string;
}

export const Header: React.FC<HeaderProps> = ({ userMenu, logo }) => {
    return (
        <Styled.Header>
            {logo ? <Styled.Logo logo={logo} /> : null}
            {userMenu ? <UserMenu {...userMenu} /> : null}
        </Styled.Header>
    );
};
