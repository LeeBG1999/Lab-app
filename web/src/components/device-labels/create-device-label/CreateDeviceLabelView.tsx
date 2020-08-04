import React, { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

interface CreateDeviceLabelViewProps {
    onClose?: () => void;
}

const generateRandomColor = (): string => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
};

const CreateDeviceLabelView: React.FC<CreateDeviceLabelViewProps> = ({
    onClose = (): void => {
        return;
    },
}) => {
    const [color, setColor] = useState(generateRandomColor());
    const handleChangeColor = (): void => {
        setColor(generateRandomColor());
    };
    const handleColorInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = event.target.value;
        setColor(value);
    };
    return (
        <>
            <Form
                layout="vertical"
                // eslint-disable-next-line
                validateMessages={{ required: '${label} không được để trống!' }}
            >
                <Row
                    style={{ width: '100%' }}
                    gutter={8}
                    align="middle"
                    justify="space-between"
                >
                    <Col span={6}>
                        <Form.Item
                            label="Tên nhãn"
                            rules={[{ required: true }]}
                        >
                            <Input name="name" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Mô tả">
                            <Input name="description" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label="Màu" initialValue={{ color }}>
                            <Row style={{ width: '100%' }} align="middle">
                                <Col style={{ marginRight: '4px' }}>
                                    <Button
                                        onClick={handleChangeColor}
                                        style={{ backgroundColor: color }}
                                        icon={
                                            <RedoOutlined
                                                style={{ color: 'white' }}
                                            />
                                        }
                                    />
                                </Col>

                                <Col>
                                    <Input
                                        name="color"
                                        value={color}
                                        onChange={handleColorInputChange}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label="" style={{ marginBottom: '-4px' }}>
                            <Row align="bottom" gutter={4}>
                                <Col onClick={onClose}>
                                    <Button>Hủy</Button>
                                </Col>
                                <Col>
                                    <Button>Tạo nhãn</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default CreateDeviceLabelView;
