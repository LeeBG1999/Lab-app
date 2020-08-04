import React from 'react';
import { App } from './App';
import { render } from '@testing-library/react';
import { store } from './state';
import { Provider } from 'react-redux';

export function renderWithRedux(ui) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    };
}

// it("renders without crashing", () => {
//   const { getByTestId } = renderWithRedux(<App />);
//   getByTestId("cmp-app");
// });

export const config = (): void => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
};
