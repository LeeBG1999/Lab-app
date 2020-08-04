import React from 'react';
import { Table, Tag, Typography } from 'antd';
import {
    FailResponseFragment,
    DeviceLabelResults,
} from 'generated/apollo-react-hook.generated';

interface DevcieLabelListViewProps {
    loading?: boolean;
    data?: DeviceLabelResults | FailResponseFragment;
}

const { Title, Text } = Typography;

const DeviceLabelListView: React.FC<DevcieLabelListViewProps> = ({
    loading,
    data,
}) => {
    return (
        <>
            <Table
                title={(): React.ReactElement => (
                    <Title level={4}>Danh sách nhãn thiết bị</Title>
                )}
                rowKey="id"
                loading={loading}
                columns={[
                    {
                        title: 'Tên nhãn',
                        dataIndex: 'name',
                        render: function DeviceLabelItem(
                            value,
                            record,
                        ): React.ReactElement {
                            return (
                                <Tag
                                    color={
                                        record.color ? record.color : 'default'
                                    }
                                >
                                    <Text strong>{value}</Text>
                                </Tag>
                            );
                        },
                    },
                    {
                        title: 'Mô tả',
                        dataIndex: 'description',
                    },
                ]}
                dataSource={
                    data && data.__typename === 'DeviceLabelResults'
                        ? data.results
                        : []
                }
            />
        </>
    );
};

export default DeviceLabelListView;
