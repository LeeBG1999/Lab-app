import { RouteComponentProps, withRouter } from 'react-router-dom';

import { CustomMenu } from 'shared/Menu';
import { Route } from '../../../../../../../routes';
import { Menu } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';

const { Item } = Menu;

interface HeaderPresentations extends RouteComponentProps {
    routes: Route[];
}
const MenuStartPresentations: React.FC<HeaderPresentations> = ({
    routes,
    history,
    location,
}) => {
    return (
        <CustomMenu mode="horizontal" defaultSelectedKeys={[location.pathname]}>
            {routes.map(route => (
                <Item
                    key={route.path}
                    onClick={() => {
                        history.push(route.path);
                    }}
                >
                    {route.name}
                </Item>
            ))}
        </CustomMenu>
    );
};
export default withRouter(MenuStartPresentations);

export const MenuStart = styled.div`
    ul {
        height: 4em;
        justify-content: flex-end;
        text-align: center;
        align-items: center;
        position: relative;
        box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.15);
        border-radius: 0.5em;
    }
    li {
        padding: 15px 20px;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
        &:hover {
            color: #d35400;
            cursor: pointer;
        }
    }

    li:first-child {
        display: flex;
        border-radius: 0.5em 0 0 0.5em;
        height: 4em;
        width: 4em;
        margin-right: auto;
        background: linear-gradient(
            45deg,
            #f1c40f 0,
            #f39c12 50%,
            #e67e22 100%
        );
        justify-content: center;
        align-items: center;
        color: white;
        &:hover {
            background: linear-gradient(
                45deg,
                #f39c12 0,
                #d35400 50%,
                #e74c3c 100%
            );
            cursor: pointer;
        }
    }
`;
