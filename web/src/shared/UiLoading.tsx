import React from 'react';
import { Row, Spin } from 'antd';

export const UiLoading: React.FC = () => {
    return (
        <Row justify="center" align="middle" style={{ height: '100%' }}>
            <Spin size="large" />
        </Row>
    );
};
