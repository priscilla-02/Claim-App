import { IRoute } from './interfaces'

import PageOne from './pages/PageOne/PageOne'
import PageTwo from './pages/PageTwo/PageTwo'
import PageThree from './pages/PageThree/PageThree'
import PageFour from './pages/PageFour/PageFour'
import PageFive from './pages/PageFive/PageFive'
import PageSix from './pages/PageSix/PageSix'
import PageSeven from './pages/PageSeven/PageSeven'
import PageEight from './pages/PageEight/PageEight'
import PageComplete from './pages/PageComplete/PageComplete'
import PageSorry from './pages/PageSorry/PageSorry'

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
    {
        key: 'page-6-route',
        title: 'Page6',
        path: '/page/6',
        enabled: true,
        component: PageSix,
    },
    {
        key: 'page-7-route',
        title: 'Page7',
        path: '/page/7',
        enabled: true,
        component: PageSeven,
    },
    {
        key: 'page-8-route',
        title: 'Page8',
        path: '/page/8',
        enabled: true,
        component: PageEight,
    },
    {
        key: 'page-complete-route',
        title: 'PageComplete',
        path: '/page/complete',
        enabled: true,
        component: PageComplete,
    },
    {
        key: 'page-sorry-route',
        title: 'PageSorry',
        path: '/page/sorry',
        enabled: true,
        component: PageSorry,
    },
]
