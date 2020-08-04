import React from 'react';
import NominalRolesView from './NominalRolesView';
import { useNominalRolesQuery } from 'generated/apollo-react-hook.generated';
import { Result } from 'antd';

const NominalRolesController: React.FC = () => {
    const { loading, error, data } = useNominalRolesQuery();
    if (error) {
        return <Result status="error" title={error.message} />;
    }
    if (data) {
        if (data.nominalRoles.__typename === 'Fail') {
            return <Result status="error" title={data.nominalRoles.message} />;
        }
        if (data.nominalRoles.__typename === 'NominalRoleResults') {
            return <NominalRolesView data={data.nominalRoles.results} />;
        }
    }
    return <NominalRolesView loading={loading} data={[]} />;
};

export default NominalRolesController;
