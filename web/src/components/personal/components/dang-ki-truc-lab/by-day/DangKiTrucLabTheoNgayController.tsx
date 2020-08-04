import React from 'react';
import { DangKiTrucLabTheoNgayView } from './DangKiTrucLabTheoNgayView';
import {
    TimePlan,
    useTimeIntervalsQuery,
} from 'generated/apollo-react-hook.generated';
interface DangKiTrucLabTheoNgayControllerProps {
    timePlan: TimePlan;
}

export const DangKiTrucLabTheoNgayController: React.FC<DangKiTrucLabTheoNgayControllerProps> = ({
    timePlan,
}) => {
    const { loading, error, data } = useTimeIntervalsQuery();

    if (loading || error || !data) return null;

    return (
        <DangKiTrucLabTheoNgayView
            timeIntervals={data.timeIntervals}
            timePlan={timePlan}
        />
    );
};
