import React from 'react';
import * as Styled from './styled';

export const ActionBar: React.FC = ({ children }) => {
    return (
        <Styled.ActionBar>
            {/* {actions.map((action, index) => {})} */}
            {children}
        </Styled.ActionBar>
    );
};
