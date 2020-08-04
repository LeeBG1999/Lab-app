import React, { useState } from 'react';
import { Button, Form, Modal, Input, Select, Skeleton } from 'antd';
import {
    NominalRoleListItemFragment,
    NominalRoleUpdateInput,
    FailResponseFragment,
} from 'generated/apollo-react-hook.generated';

interface UpdateNominalRoleViewProps {
    queryLoading?: boolean;
    loading?: boolean;
    onUpdateFormOpen?: () => void;
    onSubmit?: (
        input: NominalRoleUpdateInput,
    ) => Promise<NominalRoleListItemFragment | FailResponseFragment>;
    data?: NominalRoleListItemFragment | FailResponseFragment;
}

const UpdateNominalRoleView: React.FC<UpdateNominalRoleViewProps> = ({
    queryLoading,
    loading,
    data,
    onSubmit,
    onUpdateFormOpen = (): void => {
        return;
    },
}) => {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const handleCancel = (): void => {
        setVisible(false);
    };
    const handleOpen = (): void => {
        onUpdateFormOpen();
        setVisible(true);
    };
    return (
        <>
            <Button type="primary" onClick={handleOpen}>
                Sửa
            </Button>
            <Modal
                visible={visible}
                onCancel={handleCancel}
                cancelText="Hủy"
                okText="Cập nhật"
                okButtonProps={{ htmlType: 'submit', loading }}
                onOk={(): Promise<void> =>
                    form.validateFields().then(values => {
                        const { name, description, public: isPublic } = values;
                        if (onSubmit) {
                            onSubmit({
                                name,
                                description,
                                public: isPublic === 'true' ? true : false,
                            }).then(data => {
                                if (data.__typename === 'NominalRole') {
                                    setVisible(false);
                                }
                            });
                        }
                    })
                }
            >
                {queryLoading && <Skeleton loading={queryLoading} />}
                {!queryLoading && data && data.__typename === 'NominalRole' && (
                    <Form
                        title="Cập nhật chức vụ"
                        layout="vertical"
                        form={form}
                        initialValues={{
                            name: data.name,
                            public: `${data.public}`,
                            description: data.description,
                        }}
                    >
                        <Form.Item
                            label="Tên chức vụ"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Thông tin không được để trống',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Trạng thái public" name="public">
                            <Select>
                                <Select.Option value="true">
                                    Công khai
                                </Select.Option>
                                <Select.Option value="false">
                                    Giới hạn
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    max: 255,
                                    message:
                                        'Độ dài tối đa cho phép là 255 ký tự',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                )}
            </Modal>
        </>
    );
};

export default UpdateNominalRoleView;
