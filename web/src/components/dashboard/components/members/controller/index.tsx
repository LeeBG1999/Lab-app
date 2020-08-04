import React from 'react';

import MembersPresentational from '../views';
// import { useUsersQuery } from 'generated/apollo-react-hook.generated';

const MembersController: React.FC = () => {
    // const [users, setUsers] = useState<{ id: string; fullName: string }[]>();
    // const { loading, data } = useUsersQuery();

    // useEffect(() => {
    // 	if (data && data.users) {
    // 		setUsers(data.users);
    // 	}
    // }, [data]);

    return <MembersPresentational users={[]} loading={false} />;
};

export default MembersController;
