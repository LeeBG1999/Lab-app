import React from 'react';
import CreateNominalRoleView, {
    CreateNominalRoleViewProps,
} from './CreateNominalRoleView';
import {
    useCreateNominalRoleMutation,
    NominalRoleCreateInput,
    NominalRolesDocument,
    NominalRolesQuery,
} from 'generated/apollo-react-hook.generated';

const CreateNominalRoleController: React.FC<CreateNominalRoleViewProps> = ({
    onClose = (): void => {
        return;
    },
}) => {
    const [createNominalRole, { loading, data }] = useCreateNominalRoleMutation(
        {
            onCompleted: data => {
                if (data.createNominalRole.__typename === 'NominalRole') {
                    onClose();
                }
            },
            update: (proxy, { data }) => {
                const cachedData = proxy.readQuery<NominalRolesQuery>({
                    query: NominalRolesDocument,
                });
                if (
                    data &&
                    data.createNominalRole &&
                    data.createNominalRole.__typename === 'NominalRole' &&
                    cachedData &&
                    cachedData.nominalRoles.__typename === 'NominalRoleResults'
                ) {
                    proxy.writeQuery<NominalRolesQuery>({
                        query: NominalRolesDocument,
                        data: {
                            nominalRoles: {
                                __typename: 'NominalRoleResults',
                                results: [
                                    data.createNominalRole,
                                    ...cachedData.nominalRoles.results,
                                ],
                            },
                        },
                    });
                }
            },
        },
    );
    const handleCreateNominalRole = (input: NominalRoleCreateInput): void => {
        createNominalRole({
            variables: { input },
        });
    };
    if (data && data.createNominalRole.__typename === 'Fail') {
        return (
            <CreateNominalRoleView
                onClose={onClose}
                onCreate={handleCreateNominalRole}
                loading={loading}
                failResponse={data.createNominalRole}
            />
        );
    }
    return (
        <CreateNominalRoleView
            onClose={onClose}
            onCreate={handleCreateNominalRole}
            loading={loading}
        />
    );
};

export default CreateNominalRoleController;
