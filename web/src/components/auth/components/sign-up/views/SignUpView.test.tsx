import React from 'react';
import { config } from 'TestUtils';
import { RenderResult, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignUpView, SignUpViewProps } from './SignUpView';

beforeAll(config);

function renderComponent({
    courses = [],
    onRegister = jest.fn(),
    error = undefined,
    ...other
}: Partial<SignUpViewProps>): RenderResult {
    return {
        ...render(
            <BrowserRouter>
                <SignUpView {...{ courses, onRegister, error }} {...other} />
            </BrowserRouter>,
        ),
    };
}

it('should render without error', () => {
    renderComponent({});
});

it('should render all nessasry input field', () => {
    const { getByTestId } = renderComponent({});
    getByTestId('fullNameInput');
    getByTestId('emailInput');
    getByTestId('passwordInput');
    getByTestId('confirmPasswordInput');
});
