import React from 'react';
import {
    TimeWorkPlanOverviewFragment,
    TimeInterval,
} from 'generated/apollo-react-hook.generated';
import { UserCard } from 'shared/ui/user-card';
import { Empty, Collapse, Checkbox } from 'antd';

interface UserTimeWorkViewProps {
    timeWorkPlan: TimeWorkPlanOverviewFragment | null;
    timeInterval: TimeInterval;
    /**
     * Event đăng kí trực Lab
     */
    onPlan: (timeIntervalId: number) => any;
}

export const UserTimeWorkView: React.FC<UserTimeWorkViewProps> = ({
    timeInterval: { id, name, startTime, endTime },
    timeWorkPlan,
    onPlan,
    ...props
}) => {
    const genExtra = (timeIntervalId: number) => (
        <Checkbox
            onChange={event => {
                if (event.target.checked) {
                    onPlan(timeIntervalId);
                }
            }}
            defaultChecked={timeWorkPlan ? timeWorkPlan.hasMe : false}
            onClick={event => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation();
            }}
        >
            Đăng kí
        </Checkbox>
    );
    console.log('timeWorkPlan :', timeWorkPlan);
    return (
        <>
            <Collapse.Panel
                {...props}
                header={`${name}: ${startTime} - ${endTime}`}
                key={id.toString()}
                extra={genExtra(id)}
            >
                {(!timeWorkPlan || !timeWorkPlan.users.length) && (
                    <Empty description="Chưa có người đăng kí" />
                )}
                {timeWorkPlan &&
                    timeWorkPlan.users.map(user => (
                        <UserCard key={user.id} data={user} />
                    ))}
            </Collapse.Panel>
        </>
    );
};
