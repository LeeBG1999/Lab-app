import React from 'react';
import { Table, Tag, Typography, Row, Col } from 'antd';
import { NominalRoleListItemFragment } from 'generated/apollo-react-hook.generated';
import DeleteNominalRole from './delete-nominal-role';
import UpdateNominalRole from './update-nominal-role';

interface NominalRolesProps {
    data: NominalRoleListItemFragment[];
    loading?: boolean;
}

const { Title } = Typography;

const columns = [
    {
        title: 'Tên chức vụ',
        dataIndex: 'name',
    },
    {
        title: 'Trạng thái public',
        dataIndex: 'public',
        render: function PublicStatusTag(value): React.ReactElement {
            return value ? (
                <Tag color="success">Công khai</Tag>
            ) : (
                <Tag color="warning">Giới hạn</Tag>
            );
        },
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        render: function Description(value): React.ReactElement {
            return <Typography>{value}</Typography>;
        },
        width: '400px',
    },
    {
        title: 'Hành động',
        dataIndex: 'id',
        render: function _DeleteNominalRole(value): React.ReactElement {
            return (
                <Row gutter={8}>
                    <Col>
                        <DeleteNominalRole nominalRoleId={value} />
                    </Col>
                    <Col>
                        <UpdateNominalRole nominalId={value} />
                    </Col>
                </Row>
            );
        },
    },
];

const NominalRolesView: React.FC<NominalRolesProps> = ({ data, loading }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            loading={loading}
            title={(): React.ReactElement => (
                <Title level={4}>
                    Danh sách chức vụ danh định trong hệ thống
                </Title>
            )}
        />
    );
};

export default NominalRolesView;
