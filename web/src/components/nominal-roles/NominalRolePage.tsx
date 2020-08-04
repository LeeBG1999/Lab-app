import React, { useState } from 'react';
import NominalRolesController from './NominalRolesController';
import { Button, Row, Col } from 'antd';
import CreateNominalRole from './create-nominal-role';

export const NominalRolePage: React.FC = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const toggleOpenCreateForm = (): void => {
        setOpenCreateForm(!openCreateForm);
    };
    const handleCloseCreateForm = (): void => {
        setOpenCreateForm(false);
    };
    return (
        <Row justify="center">
            <Col span={23}>
                <Row justify="end" gutter={[16, 16]}>
                    <Button type="primary" onClick={toggleOpenCreateForm}>
                        Chức vụ mới
                    </Button>
                </Row>
                {openCreateForm && (
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <CreateNominalRole
                                onClose={handleCloseCreateForm}
                            />
                        </Col>
                    </Row>
                )}
                <Row>
                    <Col span={24}>
                        <NominalRolesController />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
