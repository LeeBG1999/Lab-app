import { FormWrapper, Logo } from '../../shared';
import { Button, Divider } from 'antd';
import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';

interface LoginViewProps {
    // onLogin: (credentials: LoginInput) => void;
    onGoogleLogin: () => void;
    loading: boolean;
    // failErrors?: Fail;
}

export const LoginView: React.FC<LoginViewProps> = ({
    loading,
    onGoogleLogin,
    // onLogin,
    // failErrors,
}) => {
    // const [emailError, setEmailError] = useState<boolean | undefined>();
    // const [passwordError, setPasswordError] = useState<boolean | undefined>();

    // useEffect(() => {
    //     setEmailError(failErrors && failErrors.reason === FailReason.Email);
    //     setPasswordError(
    //         failErrors && failErrors.reason === FailReason.Password,
    //     );
    // }, [failErrors]);

    // const errorMessage = failErrors ? failErrors.message : null;

    // const onFinish = values => {
    //     onLogin(values);
    // };
    // const emailError =
    return (
        <FormWrapper data-testid="login-view">
            <Logo />
            {/* <Title>Đăng nhập</Title>
            <Form hideRequiredMark onFinish={onFinish} layout="vertical">
                <FormItem
                    label="Địa chỉ Email"
                    name="email"
                    validateStatus={emailError ? 'error' : undefined}
                    help={emailError ? <div>{errorMessage}</div> : undefined}
                >
                    <Input type="email" autoFocus data-testid="email-input" />
                </FormItem>
                <FormItem
                    label="Mật khẩu"
                    name="password"
                    validateStatus={passwordError ? 'error' : undefined}
                    help={passwordError ? <div>{errorMessage}</div> : undefined}
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không được để trống',
                        },
                        {
                            min: 6,
                            message: 'Mật khẩu phải có tối thiểu 6 kí tự',
                        },
                    ]}
                >
                    <Input.Password
                        allowClear
                        onFocus={() => setPasswordError(false)}
                        autoComplete="new-password"
                        data-testid="password-input"
                    />
                </FormItem>
                <FormItem>
                    <AuthButton
                        htmlType="submit"
                        type="primary"
                        block
                        loading={loading}
                        data-testid="login-button"
                    >
                        Đăng nhập
                    </AuthButton>
                </FormItem>
            </Form> */}
            <Divider>Đăng nhập bằng tài khoản</Divider>
            {/* <Button
                block
                icon={<FacebookOutlined />}
                type="primary"
                onClick={onFacebookLogin}
            >
                Facebook
            </Button>
            <hr /> */}
            <Button
                loading={loading}
                block
                type="primary"
                icon={<GoogleOutlined />}
                onClick={onGoogleLogin}
            >
                Google
            </Button>
            {/* <AuthRedirect>
                <Link to={AUTH_SIGNUP_PATH}>Chưa có tài khoản? Đăng kí</Link>
            </AuthRedirect> */}
        </FormWrapper>
    );
};
