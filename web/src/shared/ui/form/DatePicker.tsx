import React from 'react';
import * as Styled from './styled';
import { DatePickerProps } from 'antd/lib/date-picker';

export const DatePicker: React.FC<DatePickerProps> = props => {
    return <Styled.DatePicker format="DD/MM/YYYY \lúc H:mm" {...props} />;
};
