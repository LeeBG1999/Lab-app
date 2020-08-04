import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { SignUpController } from './SignUpController';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { config } from 'TestUtils';

beforeAll(config);

const renderSignUpController = (): RenderResult => {
    return {
        ...render(
            <BrowserRouter>
                <MockedProvider>
                    <SignUpController />
                </MockedProvider>
            </BrowserRouter>,
        ),
    };
};

it('should render without error', () => {
    renderSignUpController();
});
