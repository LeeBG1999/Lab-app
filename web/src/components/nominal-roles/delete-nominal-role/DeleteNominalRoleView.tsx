import React from 'react';
import { Button, Popconfirm, notification } from 'antd';
import { FailResponseFragment } from 'generated/apollo-react-hook.generated';

interface DeleteNominalRoleViewProps {
    onDelete?: () => void;
    loading?: boolean;
    failResponse?: FailResponseFragment;
}

const DeleteNominalRoleView: React.FC<DeleteNominalRoleViewProps> = ({
    onDelete = (): void => {
        return;
    },
    loading,
    failResponse,
}) => {
    if (failResponse) {
        notification.error({ message: failResponse.message });
    }
    return (
        <Popconfirm
            title="Bạn có chắc chắn muốn xóa chức vụ này"
            onConfirm={onDelete}
            okText="Đồng ý"
            cancelText="Không"
        >
            <Button loading={loading} danger>
                Xóa
            </Button>
        </Popconfirm>
    );
};

export default DeleteNominalRoleView;
