import { DetectAdBlocks } from 'components/utils/DetectAdBlocks';
import GlobalStyled from './styled';
import { Route } from '../routes';
import React from 'react';

interface AppPresentations {
    routes: Route[];
}

const AppPresentations: React.FC<AppPresentations> = () => {
    return (
        <>
            <DetectAdBlocks>
                <GlobalStyled />
            </DetectAdBlocks>
        </>
    );
};

export default AppPresentations;
