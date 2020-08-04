import React, { useState } from 'react';
import DeviceLabelList from './device-label-list';
import { Row, Col, Button } from 'antd';
import CreateDeviceLabel from './create-device-label';

export const DeviceLabelPage: React.FC = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const toggleOpenCreateForm = (): void => {
        setOpenCreateForm(!openCreateForm);
    };
    const handleCloseCreateForm = (): void => {
        setOpenCreateForm(false);
    };
    return (
        <>
            <Row justify="center">
                <Col span={23}>
                    <Row justify="end" gutter={[8, 16]}>
                        <Button type="primary" onClick={toggleOpenCreateForm}>
                            Thêm nhãn mới
                        </Button>
                    </Row>
                    {openCreateForm && (
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <CreateDeviceLabel
                                    onClose={handleCloseCreateForm}
                                />
                            </Col>
                        </Row>
                    )}
                    <DeviceLabelList />
                </Col>
            </Row>
        </>
    );
};
