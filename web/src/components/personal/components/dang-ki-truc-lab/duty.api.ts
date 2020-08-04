import { gql } from '@apollo/client';
gql`
    query TrucLabDuties($where: DutyWhereInput) {
        duties(where: $where) {
            id
            date
            dayOfWeek
            startTime
            endTime
        }
    }
    query TimePlans {
        timePlans {
            id
            dayOfWeek
        }
    }
`;
