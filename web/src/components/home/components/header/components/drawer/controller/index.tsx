import { RouteComponentProps, withRouter } from 'react-router';

import DrawerPresentational from '../views';
import React from 'react';
// import { useLogOutMutation } from 'generated/apollo-react-hook.generated';

type IDrawer = RouteComponentProps;
const DrawerController: React.FC<IDrawer> = ({ history }) => {
    // const [logOut] = useLogOutMutation();
    return (
        <DrawerPresentational
            onLoginClick={() => history.push('/login')}
            routes={[]}
            onLogOutClick={() => null}
        />
    );
};

export default withRouter(DrawerController);
