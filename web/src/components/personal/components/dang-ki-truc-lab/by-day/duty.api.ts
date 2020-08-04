import { gql } from '@apollo/client';
gql`
    query TimeIntervals {
        timeIntervals {
            id
            name
            startTime
            endTime
        }
    }
`;
