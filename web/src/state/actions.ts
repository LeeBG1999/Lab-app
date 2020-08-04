import { Route } from 'routes';
import { CurrentUser } from './reducer';

export enum Action {
    PUSH_BREAD_CRUMB,
    POP_BREAD_CRUMB,
    UPDATE_SERVER_CONNECTION_STATE,
    UPDATE_CURRENT_USER,
}

type ActionCreator = {
    type: Action;
    payload: any;
};

export const updateServerConnectionState = (state: boolean): ActionCreator => {
    return {
        type: Action.UPDATE_SERVER_CONNECTION_STATE,
        payload: state,
    };
};

export const updateCurrentUser = (info: CurrentUser): ActionCreator => {
    return {
        type: Action.UPDATE_CURRENT_USER,
        payload: info,
    };
};

export const pushBreadCrumb = (route: Route): ActionCreator => {
    return {
        type: Action.PUSH_BREAD_CRUMB,
        payload: route,
    };
};

export const popBreadCrumb = (route: Route): ActionCreator => {
    return {
        type: Action.POP_BREAD_CRUMB,
        payload: route,
    };
};
