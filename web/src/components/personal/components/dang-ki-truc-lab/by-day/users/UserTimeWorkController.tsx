import React from 'react';
import { UserTimeWorkView } from './UserTimeWorkView';
import {
    useTimeWorkPlanQuery,
    TimePlan,
    TimeInterval,
    useUserPlanWorkMutation,
} from 'generated/apollo-react-hook.generated';

interface UserTimeWorkControllerProps {
    timePlan: TimePlan;
    timeInterval: TimeInterval;
}

export const UserTimeWorkController: React.FC<UserTimeWorkControllerProps> = ({
    timePlan,
    timeInterval,
    ...props
}) => {
    const { loading, error, data } = useTimeWorkPlanQuery({
        variables: {
            where: { timePlanId: timePlan.id, timeIntervalId: timeInterval.id },
        },
    });
    const [plan] = useUserPlanWorkMutation({
        update: (proxy, { data }) => {
            console.log('TCL: data', data);
        },
    });
    if (loading || error || !data) return null;
    console.log('data :', data);

    return (
        <UserTimeWorkView
            {...props}
            timeWorkPlan={data.timeWorkPlan}
            timeInterval={timeInterval}
            onPlan={timeIntervalId =>
                plan({
                    variables: {
                        data: { timeIntervalId, timePlanId: timePlan.id },
                    },
                })
            }
        />
    );
};
