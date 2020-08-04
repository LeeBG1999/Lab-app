import { gql } from '@apollo/client';

gql`
    query UserTimeWorkPlans($where: UserTimeWorkPlanWhereInput) {
        userTimeWorkPlans(where: $where) {
            id
            user {
                ...UserOverview
            }
        }
    }
    query TimeWorkPlan($where: TimeWorkWhereUniqueInput) {
        timeWorkPlan(where: $where) {
            ...TimeWorkPlanOverview
        }
    }
    mutation UserPlanWork($data: UserPlanWorkInput!) {
        userPlanWork(data: $data) {
            id
            user {
                ...UserOverview
            }
        }
    }

    fragment TimeWorkPlanOverview on TimeWorkPlan {
        hasMe
        users {
            ...UserOverview
        }
    }
    fragment UserOverview on User {
        id
        name
    }
`;
