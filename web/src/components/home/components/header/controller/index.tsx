import { RouteComponentProps, withRouter } from 'react-router';
import React from 'react';
import { useUserForHeaderQuery } from 'generated/apollo-react-hook.generated';

type IHeader = RouteComponentProps;

const HeaderController: React.FC<IHeader> = ({ history }) => {
    const { loading, error, data } = useUserForHeaderQuery({
        fetchPolicy: 'network-only',
    });

    if (loading || error || !data) return null;

    return null;
    // <HeaderPresentation
    // 	data={{ user: data.currentUser }}
    // 	onLogoutClick={handleLogout}
    // 	routes={routes}
    // 	onLogoClick={() => history.push(HOME_URI)}
    // ></HeaderPresentation>
};
export default withRouter(HeaderController);
