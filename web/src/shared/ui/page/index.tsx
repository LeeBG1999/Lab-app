import React from 'react';
import * as Styled from './styled';
import { useSelector } from 'react-redux';
import { AppState } from 'state';
import { Result, Button } from 'antd';

export const Page: React.FC<Styled.PageProps & {
    footer?: React.ReactNode;
}> = props => {
    const { children, header, sideBar, footer } = props;
    const isServerConnected = useSelector<AppState>(
        state => state.serverConnected,
    );

    const refreshPage = (): void => {
        window.location.reload();
    };
    return (
        <Styled.Page {...props}>
            {header && <Styled.Header {...props}>{header}</Styled.Header>}
            <Styled.Main {...props}>
                {sideBar && (
                    <Styled.SideBar {...props}>{sideBar}</Styled.SideBar>
                )}
                <Styled.Content sideBar={sideBar} {...props}>
                    {isServerConnected ? (
                        children
                    ) : (
                        <Result
                            status="error"
                            title="Server is not connected"
                            extra={[
                                <Button
                                    type="primary"
                                    key="console"
                                    onClick={refreshPage}
                                >
                                    Thử lại
                                </Button>,
                            ]}
                        />
                    )}
                </Styled.Content>
            </Styled.Main>
            {footer && <Styled.Footer>{footer}</Styled.Footer>}
        </Styled.Page>
    );
};
