import React from 'react';
import { Button } from 'antd';

interface Props {
    onBack: () => void;
}

export const NotMemberView: React.FC<Props> = ({ onBack }) => {
    return (
        <>
            <div>Bạn chưa được xác nhận là thành viên Mandevices</div>
            <Button onClick={onBack}>Thử lại</Button>
            <Button>Xác nhận thành viên</Button>
        </>
    );
};
