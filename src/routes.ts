import { IRoute } from './interfaces'

import PageOne from './pages/PageOne/PageOne'
import PageTwo from './pages/PageTwo/PageTwo'
import PageThree from './pages/PageThree/PageThree'
import PageFour from './pages/PageFour/PageFour'
import PageFive from './pages/PageFive/PageFive'

export const routes: Array<IRoute> = [
    {
        key: 'page-1-route',
        title: 'Page1',
        path: '/page/1',
        enabled: true,
        component: PageOne,
    },
    {
        key: 'page-2-route',
        title: 'Page2',
        path: '/page/2',
        enabled: true,
        component: PageTwo,
    },
    {
        key: 'page-3-route',
        title: 'Page3',
        path: '/page/3',
        enabled: true,
        component: PageThree,
    },
    {
        key: 'page-4-route',
        title: 'Page4',
        path: '/page/4',
        enabled: true,
        component: PageFour,
    },
    {
        key: 'page-5-route',
        title: 'Page5',
        path: '/page/5',
        enabled: true,
        component: PageFive,
    },
]
