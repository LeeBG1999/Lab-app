import React from 'react';
import { Avatar } from 'antd';
import { UserOverviewFragment } from 'generated/apollo-react-hook.generated';
import * as Styled from './styled';

interface UserCardProps {
    data: UserOverviewFragment;
}

export const UserCard: React.FC<UserCardProps> = ({ data: { name } }) => {
    return (
        <Styled.UserCard isMe={false}>
            <Avatar icon="user" />
            <Styled.Body>
                <div>{name}</div>
            </Styled.Body>
        </Styled.UserCard>
    );
};
