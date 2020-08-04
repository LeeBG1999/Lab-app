import { gql } from '@apollo/client';

gql`
    mutation CreateDuty($data: DutyCreateInput!) {
        createDuty(data: $data) {
            id
            type
            name
            startTime
            endTime
        }
    }
`;
