import styled from 'styled-components/macro';

interface UserCardProps {
    isMe: boolean;
}

export const UserCard = styled.div<UserCardProps>`
    display: flex;
    align-items: center;
    border: ${props => (props.isMe ? '1px solid red' : 'inherit')};
    border-radius: 10px;
    padding: 10px;
`;

export const Body = styled.div`
    margin-left: 8px;
`;
