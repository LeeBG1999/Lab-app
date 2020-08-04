import { gql } from '@apollo/client';

gql`
    query UserForHeader {
        currentUser {
            id
            name
        }
    }
`;
