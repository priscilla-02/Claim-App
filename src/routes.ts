// src/routes.ts

// pages

import { IRoute } from './interfaces'
import About from './pages/About'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

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
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About,
    },
]
