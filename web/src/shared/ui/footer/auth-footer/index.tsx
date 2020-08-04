import React from 'react';
import * as Styled from './styled';
import { getYear } from 'date-fns';

export const AuthFooter = () => {
    return (
        <Styled.AuthFooter>
            &copy; Mandevices/Team IOT - {getYear(new Date())}
        </Styled.AuthFooter>
    );
};
