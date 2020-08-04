import React, { useState } from 'react';
import { FormItem } from 'shared/ui/form/styled';
import { Input } from 'antd';
import { Fail } from 'generated/apollo-react-hook.generated';

interface FormInput {
    error?: Fail;
    name: string;
    label: string;
    type: string;
    allowClear?: boolean;
}

export const FormInput: React.FC<FormInput> = ({
    label,
    name,
    error,
    type,
    allowClear = true,
}) => {
    const [errorMessage, setErrorMessage] = useState<
        string | undefined | null
    >();
    if (
        error &&
        name.toLowerCase().trim() === error.reason.toLowerCase().trim()
    ) {
        setErrorMessage(error.message);
    }
    const removeErrorMessage = (): void => {
        setErrorMessage(null);
    };
    return (
        <FormItem
            label={label}
            name={name}
            validateStatus={errorMessage ? 'error' : undefined}
            help={errorMessage ? <div>{errorMessage}</div> : undefined}
            rules={[
                {
                    required: true,
                    message: 'Email không được để trống',
                },
            ]}
        >
            <Input
                allowClear={allowClear}
                onFocus={removeErrorMessage}
                type={type}
                autoFocus
                data-testid="email-input"
            />
        </FormItem>
    );
};
