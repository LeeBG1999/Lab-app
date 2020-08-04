import styled from 'styled-components/macro';

export const Header = styled.header`
    background-color: white;
    padding: 0 30px;
    position: relative;
    max-width: 100%;
    display: flex;
    align-items: center;
    min-height: ${props => props.theme.dimension.appBar};
    box-shadow: 0 2px 8px #f0f1f2;
`;
export const Logo = styled.div<{ logo: string }>`
    background-image: url(${props => props.logo});
    background-size: contain;
    background-repeat: no-repeat;
    flex: 1;
    align-self: stretch;
    padding: 5px 20px;
    background-origin: content-box;
    background-position: center;
`;
