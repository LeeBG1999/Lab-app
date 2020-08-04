import React, { useState, useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
// import { ActiveAccountMutation } from 'generated/apollo-react-hook.generated';

const { confirm } = Modal;

interface EnterActiveOtpViewProps {
    onSubmit: Function;
    result?: any;
    // result?: ActiveAccountMutation;
    loading: boolean;
}
const EnterActiveOtpView: React.FC<EnterActiveOtpViewProps> = ({
    onSubmit,
    loading,
    result,
}) => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(true);
    const [otpError, setOtpError] = useState<string>();

    const helpMessage = 'Ví dụ: 123456';

    useEffect(() => {
        if (result && result.activeAccount.__typename === 'Fail') {
            if (result.activeAccount.reason === 'OTP') {
                setOtpError(result.activeAccount.message);
            }
        }
    }, [result]);

    const showCloseModalConfirm = (): void => {
        confirm({
            title: 'Bạn có chắc không muốn nhập mã OTP?',
            icon: <ExclamationCircleOutlined />,
            content:
                'Để sử dụng các chức năng của hệ thống, tài khoản của bạn cần được kích hoạt. Bạn vẫn muốn tiếp tục thoát?',
            onOk() {
                setVisible(false);
            },
            // onCancel() {},
        });
    };

    return (
        <>
            <Modal
                confirmLoading={loading}
                visible={visible}
                title="Nhập mã OTP kích hoạt tài khoản"
                okText="Kích hoạt"
                cancelText="Gửi lại"
                onCancel={showCloseModalConfirm}
                onOk={() => {
                    form.validateFields()
                        .then(values => {
                            onSubmit(values.otp);
                            // onCreate(values);
                        })
                        .catch(info => {
                            const otpValidateError = form.getFieldError('otp');
                            console.log('otpValidateError :', otpValidateError);
                            setOtpError(otpValidateError[0]);
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <p>
                    Một mã OTP kích hoạt tài khoản gồm 6 chữ số, có hiệu lực
                    trong vòng 5 phút đã được gửi tới Email đăng kí của bạn.
                    <br />
                    Hãy nhập mã OTP đó xuống phía dưới để kích hoạt tài khoản
                    của bạn!
                </p>
                <Form
                    hideRequiredMark
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="otp"
                        label="Mã OTP"
                        validateStatus={otpError ? 'error' : undefined}
                        help={otpError ? otpError : helpMessage}
                        rules={[
                            {
                                required: true,
                                message: 'Mã OTP không được để trống',
                            },
                            { len: 6, message: 'Mã OTP chỉ bao gồm 6 số' },
                        ]}
                    >
                        <Input type="number" maxLength={6} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EnterActiveOtpView;
