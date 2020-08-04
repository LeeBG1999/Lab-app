import React, { useState } from 'react';

import UserPresentational from '../views';
// import { useCurrentUserQuery } from 'generated/apollo-react-hook.generated';

const UserController: React.FC = () => {
    const [user] = useState();

    /**
     * Vì truy vấn đã có trong cache, nên phải thay đổi fetchPolicy
     */
    // const { data } = useCurrentUserQuery({
    // 	fetchPolicy: 'network-only'
    // });

    // useEffect(() => {
    // 	if (data && data.currentUser) {
    // 		const {
    // 			email,
    // 			fullName
    // 		} = data.currentUser.user!!;
    // 		setUser({ email, fullName });
    // 	}
    // }, [data]);
    return <UserPresentational user={user} />;
};

export default UserController;
