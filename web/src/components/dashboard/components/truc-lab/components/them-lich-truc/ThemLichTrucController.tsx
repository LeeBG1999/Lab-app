import React from 'react';
import { ThemLichTrucView } from './ThemLichTrucView';
import {
    useCreateDutyMutation,
    DutyCreateInput,
} from 'generated/apollo-react-hook.generated';

export const ThemLichTrucController: React.FC = () => {
    const [createDuty] = useCreateDutyMutation();
    return (
        <ThemLichTrucView
            onSubmit={(data: DutyCreateInput): void => {
                createDuty({ variables: { data } });
            }}
        />
    );
};
