import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { waitForDomChange } from '@testing-library/dom';
import { LoginView } from './LoginView';
import { BrowserRouter } from 'react-router-dom';
import { config } from 'TestUtils';

beforeAll(config);

const renderLoginView: () => RenderResult = () => {
    return {
        ...render(
            <BrowserRouter>
                <LoginView loading onLogin={jest.fn} />
            </BrowserRouter>,
        ),
    };
};

test('render LoginView without crash', () => {
    const { getByTestId } = renderLoginView();
    getByTestId('login-view');
});

test('render require element', () => {
    const { getByTestId } = renderLoginView();
    getByTestId('login-button');
    getByTestId('email-input');
    getByTestId('password-input');
});

// test('render error message when email and password input is empty', async () => {
//     const { getByTestId, getByText } = renderLoginView();
//     const loginButton = getByTestId('login-button');
//     fireEvent.click(loginButton);
//     await waitForDomChange(() => {
//         getByText('Email không được để trống');
//         getByText('Mật khẩu không được để trống');
//     });
// });
