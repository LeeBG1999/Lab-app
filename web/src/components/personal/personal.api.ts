import { gql } from '@apollo/client';

gql`
    query UserForPersonalHeader {
        currentUser {
            id
            name
        }
    }
`;
