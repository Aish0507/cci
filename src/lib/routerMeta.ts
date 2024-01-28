// eslint-disable-next-line import/no-unused-modules
export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
  isCommon?: boolean;
  isAuth?: boolean;
  icon?: string;
}

// eslint-disable-next-line import/no-unused-modules
export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  LandingPage: {
    name: 'Landing Page',
    path: '/',
    isShow: true,
    isAuth: false,
    icon: 'ion-compose',
  },
  CasesDashboard: {
    name: 'Cases Dashboard',
    path: '/cases-dashboard',
    isShow: true,
    isAuth: false,
    icon: 'ion-compose',
  },
  NotFoundPage: {
    path: '/*',
    isShow: false,
  },
};

// eslint-disable-next-line import/no-unused-modules
export default routerMeta;
