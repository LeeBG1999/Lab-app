import React from 'react';
// import EnterActiveOtpView from '../views';
// import { useActiveAccountMutation } from 'generated/apollo-react-hook.generated';

interface EnterActiveOtpControllerProps {
    email: string;
}

const EnterActiveOtpController: React.FC<EnterActiveOtpControllerProps> = ({
    email,
}) => {
    // const [activeAccount, { loading, data }] = useActiveAccountMutation();
    // const handleSubmit = (otp: string): void => {
    //     activeAccount({
    //         variables: { input: { email, otp } },
    //     });
    // };
    return (
        <div></div>
        // <EnterActiveOtpView
        //     onSubmit={handleSubmit}
        //     loading={loading}
        //     result={data}
        // />
    );
};

export default EnterActiveOtpController;
