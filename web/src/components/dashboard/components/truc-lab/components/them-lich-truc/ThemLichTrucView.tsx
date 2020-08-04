import React from 'react';
import { PageHeader, Form, Input, Row, Col, Button } from 'antd';
import * as Styled from './styled';
import { PlusCircleOutlined } from '@ant-design/icons';
import {
    DutyCreateInput,
    DutyType,
} from 'generated/apollo-react-hook.generated';

interface ThemLichTrucViewProps {
    onSubmit: (data: DutyCreateInput) => void;
}
// const id = 1;
export const ThemLichTrucView: React.FC<ThemLichTrucViewProps> = ({
    onSubmit,
}) => {
    // const formItemLayout = {
    //     labelCol: {
    //         xs: { span: 24 },
    //         sm: { span: 4 },
    //     },
    //     wrapperCol: {
    //         xs: { span: 24 },
    //         sm: { span: 20 },
    //     },
    // };
    // const formItemLayoutWithOutLabel = {
    //     wrapperCol: {
    //         xs: { span: 24, offset: 0 },
    //         sm: { span: 20, offset: 4 },
    //     },
    // };

    const handleSubmit = (values): void => {
        const { startTime, endTime } = values;
        console.log('Received values of form: ', values);
        onSubmit({
            startTime: startTime.format('YYYY-MM-DD HH:mm'),
            endTime: endTime.format('YYYY-MM-DD HH:mm'),
            type: DutyType.TrucLab,
        });
    };
    return (
        <>
            <PageHeader title="Thêm lịch trực">
                <Form onFinish={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Item label="Tiêu đề" name="name">
                                <Input placeholder="Tiêu đề" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col span={12}>
							<Form.Item label="Bắt đầu">
								<DatePicker />
								<TimePicker format="HH:mm" />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Kết thúc">
								<DatePicker />
								<TimePicker format="HH:mm" />
							</Form.Item>
						</Col> */}

                        <Col span={24}>
                            <Styled.Button type="dashed">
                                <PlusCircleOutlined /> Thêm khoảng thời gian mới
                            </Styled.Button>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Thêm
                        </Button>
                    </Form.Item>
                </Form>
            </PageHeader>
        </>
    );
};
