// src/routes.ts

// pages

import { IRoute } from './interfaces'

import PageOne from './pages/PageOne/PageOne'
import PageTwo from './pages/PageTwo/PageTwo'

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
]
