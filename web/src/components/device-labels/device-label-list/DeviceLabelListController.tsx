import React from 'react';
import DeviceLabelListView from './DeviceLabelListView';
import { useDeviceLabelsQuery } from 'generated/apollo-react-hook.generated';

const DeviceLabelListController: React.FC = () => {
    const { loading, data } = useDeviceLabelsQuery();
    return (
        <DeviceLabelListView
            loading={loading}
            data={data ? data.deviceLabels : undefined}
        />
    );
};

export default DeviceLabelListController;
