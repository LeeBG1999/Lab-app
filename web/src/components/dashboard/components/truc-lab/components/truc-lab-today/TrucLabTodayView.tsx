import React from 'react';
import { Divider, PageHeader, Descriptions, Empty, Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';

export const TrucLabTodayView: React.FC = () => {
    return (
        <>
            <PageHeader title="Lịch trực Lab hôm nay" ghost={false}>
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Created">
                        Lili Qu
                    </Descriptions.Item>
                    <Descriptions.Item label="Association">
                        421421
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">
                        2017-01-10
                    </Descriptions.Item>
                    <Descriptions.Item label="Effective Time">
                        2017-10-10
                    </Descriptions.Item>
                    <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            <Divider />
            {/* <Empty description="Không"/> */}
            <Collapse defaultActiveKey={['1']}>
                <CollapsePanel
                    header={
                        <PageHeader
                            title="Kíp 1"
                            subTitle="7h30 - 9h30"
                            ghost={false}
                        ></PageHeader>
                    }
                    key="1"
                >
                    {console.log('panel 1')}
                    <Empty description="Chưa có thành viên trực" />
                    {/* <p>{text}</p> */}
                </CollapsePanel>
                <CollapsePanel
                    header={
                        <PageHeader
                            title="Kíp 2"
                            subTitle="9h30 - 11h30"
                            ghost={false}
                        ></PageHeader>
                    }
                    key="2"
                >
                    {/* <p>{text}</p> */}
                    {console.log('panel 2')}
                </CollapsePanel>
                <CollapsePanel
                    header={
                        <PageHeader
                            title="Kíp 3"
                            subTitle="13h30 - 15h30"
                            ghost={false}
                        ></PageHeader>
                    }
                    key="3"
                    disabled
                >
                    {/* <p>{text}</p> */}
                    {console.log('panel 3')}
                </CollapsePanel>
                <CollapsePanel
                    header={
                        <PageHeader
                            title="Kíp 4"
                            subTitle="15h30 - 17h30"
                            ghost={false}
                        ></PageHeader>
                    }
                    key="4"
                    disabled
                >
                    {/* <p>{text}</p> */}
                    {console.log('panel 4')}
                </CollapsePanel>
            </Collapse>
        </>
    );
};
