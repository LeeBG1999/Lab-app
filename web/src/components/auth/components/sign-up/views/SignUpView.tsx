import {
    AuthButton,
    AuthRedirect,
    FormWrapper,
    Logo,
    Title,
} from '../../shared';
import React, { useEffect, useState } from 'react';
import { ApolloError } from '@apollo/client';
import { Form, Input, Tooltip } from 'antd';
import { Page } from 'shared/ui/page';
import { FormItem } from 'shared/ui/form/styled';
import { Link } from 'react-router-dom';
import { AUTH_LOGIN_PATH } from 'routes';
import { InfoCircleOutlined } from '@ant-design/icons';
// import { SignUpMutation } from 'generated/apollo-react-hook.generated';

type Credentials = {
    fullName: string;
    email: string;
    password: string;
};

export type OnRegister = (credentials: Credentials) => void;

export interface SignUpViewProps {
    courses: number[];
    onRegister: OnRegister;
    error: ApolloError | undefined;
    loading?: boolean;
    // result?: SignUpMutation;
    result?: any;
}

export const SignUpView: React.FC<SignUpViewProps> = ({
    onRegister,
    error,
    loading,
    result,
}) => {
    const [emailError, setEmailError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();
    const [fullNameError, setFullNameError] = useState<string>();
    const [form] = Form.useForm();
    useEffect(() => {
        if (result) {
            if (result.signUp.__typename === 'Fail') {
                const reason = result.signUp.reason;
                const message = result.signUp.message;
                switch (reason) {
                    case 'EMAIL':
                        setEmailError(message);
                        break;
                    case 'PASSWORD':
                        setPasswordError(message);
                        break;
                    default:
                        break;
                }
            }
        }
    }, [result]);

    const resetFullNameError = (): void => {
        console.log('reset error');
        setFullNameError(undefined);
    };
    const handleSubmit = value => {
        const { confirmPassword, ...credentials } = value;
        onRegister(credentials);
    };
    console.log('render');
    const handleFail = errorInfo => {
        errorInfo.errorFields.map(errorField => {
            const message = errorField.errors[0];
            console.log('errorField :', errorField);
            switch (errorField.name[0]) {
                case 'fullName':
                    setFullNameError(message);
                    break;

                default:
                    break;
            }
        });
    };

    return (
        <Page bgColor="darkmagenta">
            <FormWrapper>
                <Logo />
                <Title>Đăng kí</Title>
                <Form
                    scrollToFirstError
                    onFinishFailed={handleFail}
                    onFinish={handleSubmit}
                    layout="vertical"
                    hideRequiredMark
                    form={form}
                >
                    <FormItem
                        validateTrigger="onBlur"
                        label="Họ và tên"
                        name="fullName"
                        validateStatus={fullNameError ? 'error' : undefined}
                        help={
                            fullNameError && (
                                <div data-testid="fullNameError">
                                    {fullNameError}
                                </div>
                            )
                        }
                        rules={[
                            { required: true, message: 'Không được để trống' },
                        ]}
                    >
                        <Input
                            allowClear
                            autoFocus
                            onFocus={resetFullNameError}
                            suffix={
                                <Tooltip title="Cung cấp họ tên trong CMTND/CCCD để sử dụng đầy đủ chức năng của hệ thống">
                                    <InfoCircleOutlined
                                        style={{ color: 'rgba(0,0,0,.45)' }}
                                    />
                                </Tooltip>
                            }
                            data-testid="fullNameInput"
                        />
                    </FormItem>
                    <FormItem
                        label="Địa chỉ Email"
                        name="email"
                        validateStatus={emailError ? 'error' : undefined}
                        help={emailError}
                        rules={[
                            { required: true, message: 'Không được để trống' },
                        ]}
                    >
                        <Input
                            allowClear
                            type="email"
                            suffix={
                                <Tooltip title="Email cá nhân dùng để nhận mã xác thực tài khoản">
                                    <InfoCircleOutlined
                                        style={{ color: 'rgba(0,0,0,.45)' }}
                                    />
                                </Tooltip>
                            }
                            data-testid="emailInput"
                        />
                    </FormItem>
                    <FormItem
                        label="Mật khẩu"
                        name="password"
                        validateStatus={passwordError ? 'error' : undefined}
                        help={passwordError}
                        rules={[
                            { required: true, message: 'Không được để trống' },
                        ]}
                    >
                        <Input.Password
                            allowClear
                            autoComplete="new-password"
                            data-testid="passwordInput"
                        />
                    </FormItem>
                    <FormItem
                        label="Nhập lại mật khẩu"
                        name="confirmPassword"
                        rules={[
                            { required: true, message: 'Không được để trống' },
                        ]}
                    >
                        <Input.Password
                            allowClear
                            data-testid="confirmPasswordInput"
                        />
                    </FormItem>

                    <AuthButton
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                    >
                        Đăng kí
                    </AuthButton>
                    <AuthRedirect>
                        <Link to={AUTH_LOGIN_PATH}>
                            Đã có tài khoản, đăng nhập
                        </Link>
                    </AuthRedirect>
                </Form>
            </FormWrapper>
        </Page>
    );
};
