import { Avatar, Card } from 'antd';

import React from 'react';

const { Meta } = Card;

interface Members {
    users?: { id: string; fullName: string }[];
    loading?: boolean;
}

const MembersPresentational: React.FC<Members> = ({ users, loading }) => {
    return (
        <>
            {users &&
                users.map(user => (
                    <Card key={user.id} loading={loading}>
                        <Meta title={user.fullName} avatar={<Avatar />} />
                    </Card>
                ))}
        </>
    );
};

export default MembersPresentational;
