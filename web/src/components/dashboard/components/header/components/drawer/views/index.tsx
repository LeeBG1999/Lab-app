import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { CustomMenu } from 'shared/Menu';
import { HOME_PATH } from 'routes';
import styled from 'styled-components/macro';

type IDrawer = RouteComponentProps;
const DrawerPresentational: React.FC<IDrawer> = ({ history, location }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button icon="menu" onClick={(): void => setVisible(true)} />
            <Drawer
                visible={visible}
                placement="left"
                onClose={(): void => setVisible(false)}
                bodyStyle={{ padding: 0 }}
                closable={false}
                title="Trang quản trị"
            >
                <CustomMenu
                    defaultSelectedKeys={[location.pathname]}
                ></CustomMenu>

                <DrawerFooter>
                    <Button
                        onClick={(): void => history.push(HOME_PATH)}
                        type="link"
                        icon="arrow-left"
                        style={{
                            width: '100%',
                        }}
                    >
                        Trang chủ
                    </Button>
                </DrawerFooter>
            </Drawer>
        </>
    );
};

export default withRouter(DrawerPresentational);

const DrawerFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    left: 0;
    background: #fff;
    border-radius: 0 0 4px 4px;
`;
