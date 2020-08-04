import React from 'react';
import UpdateNominalRoleView from './UpdateNominalRoleView';
import {
    useNominalRoleLazyQuery,
    useUpdateNominalRoleMutation,
    NominalRoleUpdateInput,
    NominalRoleListItemFragment,
    FailResponseFragment,
} from 'generated/apollo-react-hook.generated';

interface UpdateNominalRoleControllerProps {
    nominalId?: number;
}

const UpdateNominalRoleController: React.FC<UpdateNominalRoleControllerProps> = ({
    nominalId,
}) => {
    const [
        loadNominalRole,
        { loading: queryLoading, data },
    ] = useNominalRoleLazyQuery();
    const [updateNominalRole, { loading }] = useUpdateNominalRoleMutation();

    const handleUpdateFormOpen = (): void => {
        if (nominalId) {
            loadNominalRole({ variables: { id: nominalId } });
        }
    };

    const handleUpdateNominalRole = (
        input: NominalRoleUpdateInput,
    ): Promise<NominalRoleListItemFragment | FailResponseFragment> => {
        return new Promise((resolve, reject) => {
            if (nominalId) {
                return updateNominalRole({
                    variables: { id: nominalId, input },
                })
                    .then(({ data }) => {
                        if (data) {
                            resolve(data.updateNominalRole);
                        } else reject();
                    })
                    .catch(() => reject());
            } else {
                reject();
            }
        });
    };

    return (
        <UpdateNominalRoleView
            queryLoading={queryLoading}
            loading={loading}
            data={data ? data.nominalRole : undefined}
            onUpdateFormOpen={handleUpdateFormOpen}
            onSubmit={handleUpdateNominalRole}
        />
    );
};

export default UpdateNominalRoleController;
