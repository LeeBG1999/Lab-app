import React from 'react';
import { PageHeader, Empty, Tabs } from 'antd';
import { format } from 'date-fns';
import { DangKiTrucLabTheoNgayController } from './by-day/DangKiTrucLabTheoNgayController';
import { vi } from 'date-fns/locale';
import { TimePlan } from 'generated/apollo-react-hook.generated';
const { TabPane } = Tabs;

interface DangKiTrucLabViewProps {
    data?: TimePlan[];
}

export const DangKiTrucLabView: React.FC<DangKiTrucLabViewProps> = ({
    data,
}) => {
    if (!data || !data[0]) return <Empty />;

    return (
        <>
            <PageHeader
                title="Đăng kí trực Lab hàng tuần"
                ghost={false}
                footer={
                    <Tabs
                        defaultActiveKey={format(new Date(), 'eeee', {
                            locale: vi,
                        })}
                    >
                        {data.map(timePlan => {
                            return (
                                <TabPane
                                    tab={
                                        <>
                                            <div>{timePlan.dayOfWeek}</div>
                                            {/* <Styled.DateOnTab>{day[0].date}</Styled.DateOnTab> */}
                                        </>
                                    }
                                    key={timePlan.dayOfWeek}
                                >
                                    <DangKiTrucLabTheoNgayController
                                        timePlan={timePlan}
                                    />
                                </TabPane>
                            );
                        })}
                    </Tabs>
                }
            ></PageHeader>
        </>
    );
};
