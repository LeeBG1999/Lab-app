import styled from 'styled-components/macro';

export interface PageProps {
    center?: boolean;
    headerFixed?: boolean;
    header?: React.ReactNode;
    sideBar?: React.ReactNode;
    bgColor?: string;
}

export const Header = styled.div``;
export const Main = styled.main`
    display: flex;
`;
export const Content = styled.section`
    width: 100%;
`;
export const SideBar = styled.section`
    position: fixed;
    width: 280px;
    height: 100vh;
    background: white;
    margin-top: -56px;
    padding-top: 56px;
`;
export const Footer = styled.footer``;

export const Page = styled.div<PageProps>`
    height: 100%;
    display: flex;
    background-color: ${props => (props.bgColor ? props.bgColor : '#f6f8fa')};
    flex-direction: column;
    justify-content: ${props => (props.center ? 'center' : 'unset')};
    align-items: ${props => (props.center ? 'center' : 'unset')};

    ${Header} {
        position: ${props => (props.headerFixed ? 'fixed' : 'inherit')};
        top: ${props => (props.headerFixed ? '0' : 'inherit')};
        z-index: ${props => (props.headerFixed ? '10' : 'inherit')};
        width: ${props => (props.headerFixed ? '100%' : 'inherit')};
    }
    ${Main} {
        flex-grow: 1;
        padding-top: ${props =>
            props.headerFixed ? props.theme.dimension.appBar : 'inherit'};
    }
    ${Content} {
        padding-left: ${props =>
            props.sideBar !== undefined ? '280px' : 'inherit'};
    }
    ${Footer} {
    }
`;
