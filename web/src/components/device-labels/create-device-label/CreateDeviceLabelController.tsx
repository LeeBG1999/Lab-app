import React from 'react';
import CreateDeviceLabelView from './CreateDeviceLabelView';
import { useCreateDeviceLabelMutation } from 'generated/apollo-react-hook.generated';

interface CreateDeviceLabelControllerProps {
    onClose?: () => void;
}

const CreateDeviceLabelController: React.FC<CreateDeviceLabelControllerProps> = ({
    onClose,
}) => {
    const [createDeviceLabel, { loading }] = useCreateDeviceLabelMutation();
    return <CreateDeviceLabelView onClose={onClose} />;
};

export default CreateDeviceLabelController;
