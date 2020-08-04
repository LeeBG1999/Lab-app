import React from 'react';
import { DangKiTrucLabView } from './DangKiTrucLabView';
import { useTimePlansQuery } from 'generated/apollo-react-hook.generated';
// import { format, startOfWeek, endOfWeek } from 'date-fns';

// const weekStart = format(
//     startOfWeek(new Date(), { weekStartsOn: 1 }),
//     'yyyy-MM-dd',
// );
// const weekEnd = format(
//     endOfWeek(new Date(), { weekStartsOn: 1 }),
//     'yyyy-MM-dd',
// );

export const DangKiTrucLabController: React.FC = () => {
    const { loading, error, data } = useTimePlansQuery();
    if (loading || error || !data) return null;

    return <DangKiTrucLabView data={data.timePlans} />;
};
