import { Reducer } from 'redux';
import { Action as A } from './actions';
import { Route } from 'routes';

export type CurrentUser = {
    id: string;
    roles: {
        [key: string]: any;
    };
    token: string;
    displayName: string;
    photo?: string | null;
};

type State = {
    breadCrumbs: Route[];
    serverConnected: boolean;
    currentUser?: CurrentUser;
};

const initialState: State = {
    breadCrumbs: [],
    serverConnected: true,
};

export const reducer: Reducer<State> = (state = initialState, action) => {
    switch (action.type) {
        case A.UPDATE_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload,
            };
        }
        case A.PUSH_BREAD_CRUMB: {
            return {
                ...state,
                breadCrumbs: [...state.breadCrumbs, action.payload],
            };
        }
        case A.POP_BREAD_CRUMB: {
            return {
                ...state,
                breadCrumbs: state.breadCrumbs.filter(
                    brc => brc.name !== action.payload.name,
                ),
            };
        }
        case A.UPDATE_SERVER_CONNECTION_STATE: {
            return {
                ...state,
                serverConnected: action.payload,
            };
        }
        default:
            return state;
    }
};
