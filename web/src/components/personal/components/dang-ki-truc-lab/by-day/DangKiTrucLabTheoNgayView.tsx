import React from 'react';
import { Collapse } from 'antd';
import { TimePlan } from 'generated/apollo-react-hook.generated';
import { UserTimeWorkController } from './users/UserTimeWorkController';

function callback(key: string | string[]): void {
    console.log(key);
}

interface DangKiTrucLabTheoNgayViewProps {
    timeIntervals: any[];
    timePlan: TimePlan;
}

export const DangKiTrucLabTheoNgayView: React.FC<DangKiTrucLabTheoNgayViewProps> = ({
    timeIntervals,
    timePlan,
}) => {
    return (
        <>
            <Collapse
                defaultActiveKey={timeIntervals.map(d => d.id.toString())}
                onChange={callback}
            >
                {timeIntervals.map(timeInterval => {
                    return (
                        <UserTimeWorkController
                            timeInterval={timeInterval}
                            timePlan={timePlan}
                            key={timeInterval.id}
                        />
                    );
                })}
            </Collapse>
        </>
    );
};
