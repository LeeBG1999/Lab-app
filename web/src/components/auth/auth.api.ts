import { gql } from '@apollo/client';
gql`
    mutation CreateAccount {
        createAccount {
            __typename
            ...fail
            ... on FirebaseAccount {
                id
            }
        }
    }
    fragment fail on Fail {
        reason
        message
    }
`;
