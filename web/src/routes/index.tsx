import React from 'react';
import { Personal } from 'components/personal';
import { Dashboard } from 'components/dashboard';
import { TrucLab } from 'components/dashboard/components/truc-lab/TrucLab';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { DangKiTrucLabController } from 'components/personal/components/dang-ki-truc-lab/DangKiTrucLabController';
import { TrucLabTodayController } from 'components/dashboard/components/truc-lab/components/truc-lab-today/TrucLabTodayController';
import { ThemLichTrucController } from 'components/dashboard/components/truc-lab/components/them-lich-truc/ThemLichTrucController';

export interface Route {
    id?: string | number;
    name?: string;
    exact?: boolean;
    icon?: IconProp;
    isPrivateRoute?: boolean;
    default?: boolean;
    path: string;
    subRoutes?: Route[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.FC<any>;
}

export const HOME_PATH = `/`;
export const ADMIN_URI = `/admin`;
export const AUTH_PATH = `/auth`;

export const AUTH_LOGIN_PATH = `${AUTH_PATH}/signin`;
export const AUTH_SIGNUP_PATH = `${AUTH_PATH}/signup`;

export const PERSONAL_PATH = `/p`;

const routes: Route[] = [
    {
        path: PERSONAL_PATH,
        isPrivateRoute: true,
        component: Personal,
        exact: true,
        subRoutes: [
            {
                name: 'Đăng kí trực Lab',
                path: '/p/dang-ki-truc-lab',
                component: DangKiTrucLabController,
            },
        ],
    },
    {
        path: '/dashboard',
        exact: false,
        name: 'Dashboard',
        component: Dashboard,
        isPrivateRoute: true,
        subRoutes: [
            {
                path: '/dashboard/duty/truc-lab',
                name: 'Trực Lab',
                component: TrucLab,
                subRoutes: [
                    {
                        path: '/dashboard/duty/truc-lab/hom-nay',
                        name: 'Hôm nay',
                        default: true,
                        component: TrucLabTodayController,
                    },
                    {
                        path: '/dashboard/duty/truc-lab/them-lich-truc',
                        name: 'Thêm lịch trực',
                        component: ThemLichTrucController,
                    },
                ],
            },
        ],
    },
];

export default routes;
