import React from 'react';
import DeleteNominalRoleView from './DeleteNominalRoleView';
import {
    NominalRolesDocument,
    useDeleteNominalRoleMutation,
    NominalRolesQuery,
} from 'generated/apollo-react-hook.generated';

interface DeleteNominalRoleControllerProps {
    nominalRoleId?: number;
}

const DeleteNominalRoleController: React.FC<DeleteNominalRoleControllerProps> = ({
    nominalRoleId,
}) => {
    const [deleteNominalRole, { loading }] = useDeleteNominalRoleMutation({
        update: (proxy, { data }) => {
            const cachedData = proxy.readQuery<NominalRolesQuery>({
                query: NominalRolesDocument,
            });
            if (
                data &&
                data.deleteNominalRole &&
                data.deleteNominalRole.__typename === 'DeleteResult' &&
                cachedData &&
                cachedData.nominalRoles.__typename === 'NominalRoleResults'
            ) {
                const deletedId = data.deleteNominalRole.id;
                proxy.writeQuery<NominalRolesQuery>({
                    query: NominalRolesDocument,
                    data: {
                        nominalRoles: {
                            __typename: 'NominalRoleResults',
                            results: cachedData.nominalRoles.results.filter(
                                nominalRole => nominalRole.id !== deletedId,
                            ),
                        },
                    },
                });
            }
        },
    });
    const handleDeleteNominalRole = (): void => {
        if (nominalRoleId) {
            deleteNominalRole({ variables: { id: nominalRoleId } });
        }
    };

    return (
        <DeleteNominalRoleView
            loading={loading}
            onDelete={handleDeleteNominalRole}
        />
    );
};

export default DeleteNominalRoleController;
