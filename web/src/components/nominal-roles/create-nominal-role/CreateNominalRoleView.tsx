import React from 'react';
import { Form, Input, Select, Row, Col, Button, Result } from 'antd';
import './create-nominal-style.css';
import {
    FailResponseFragment,
    NominalRoleCreateInput,
} from 'generated/apollo-react-hook.generated';
import { Store } from 'antd/lib/form/interface';

export interface CreateNominalRoleViewProps {
    onClose?: () => void;
    onCreate?: (input: NominalRoleCreateInput) => void;
    loading?: boolean;
    failResponse?: FailResponseFragment;
}

const CreateNominalRoleView: React.FC<CreateNominalRoleViewProps> = ({
    onClose = (): void => {
        return;
    },
    onCreate = (): void => {
        return;
    },
    loading = false,
    failResponse,
}) => {
    const handleSubmit = (values: Store): void => {
        const { name, description, public: isPublic } = values;
        onCreate({
            name,
            description,
            public: isPublic === 'true' ? true : false,
        });
    };
    return (
        <Row style={{ width: '100%' }}>
            {failResponse && (
                <Col span={24}>
                    <Result status="error" title={failResponse.message} />
                </Col>
            )}
            <Form
                layout="inline"
                style={{ width: '100%' }}
                onFinish={handleSubmit}
            >
                <Row gutter={[16, 8]} style={{ width: '100%' }} justify="end">
                    <Col span={8}>
                        <Form.Item
                            label="Tên chức vụ"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Trạng thái public"
                            name="public"
                            initialValue="true"
                        >
                            <Select>
                                <Select.Option value="true">
                                    Công khai
                                </Select.Option>
                                <Select.Option value="false">
                                    Giới hạn
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    max: 255,
                                    message:
                                        'Độ dài tối đa cho phép là 255 ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Button danger onClick={onClose}>
                            Hủy
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            htmlType="submit"
                            type="primary"
                            loading={loading}
                        >
                            Thêm
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Row>
    );
};

export default CreateNominalRoleView;
