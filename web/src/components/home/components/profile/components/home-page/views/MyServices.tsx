import React from 'react';
import {
    TitleMyServices,
    Services,
    Service,
    Image,
    NameOfService,
    Detail,
} from './styled';

interface MyOwnsProps {
    services: any;
}

const MyServices: React.FC<MyOwnsProps> = ({ services }) => {
    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <TitleMyServices></TitleMyServices>
            <Services>
                {services.map((x, index) => (
                    <Service key={index}>
                        <Image src={x.image} />
                        <NameOfService>{x.name}</NameOfService>
                        <Detail>{x.detail}</Detail>
                    </Service>
                ))}
            </Services>
        </div>
    );
};

export default MyServices;
