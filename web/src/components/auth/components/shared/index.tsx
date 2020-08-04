import { Button } from 'antd';
import { device } from 'theme';
import logo from 'assets/logo.png';
import styled from 'styled-components/macro';

export const FormWrapper = styled.div`
    width: 100%;
    @media ${device.mobileL} {
        width: 400px;
    }

    background-color: white;
    padding: 20px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: darkmagenta;
`;

export const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    width: 100%;
    height: 70px;
    background-origin: content-box;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const AuthButton = styled(Button)`
    width: 100%;
    margin-top: 15px;
`;

export const AuthRedirect = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
`;
