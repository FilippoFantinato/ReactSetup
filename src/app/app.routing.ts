import { Route } from './types/system/config.types';

import HomePage from './pages/home/home.page';

const routes: Route[] = [
	{ path: '/home', component: HomePage },
	{ redirect: '/home' },
];

export default routes;
