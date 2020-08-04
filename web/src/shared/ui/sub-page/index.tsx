import React from 'react';
import { ApolloError } from '@apollo/client';

interface SubPageProps {
    error?: ApolloError | undefined;
    loading?: boolean;
}

export const SubPage: React.FC<SubPageProps> = ({
    error,
    loading,
    children,
}) => {
    if (loading) return <div>Loading FROM SUBPAGE ...</div>;
    if (error) return <div>some thing went wrong</div>;
    return <>{children}</>;
};
