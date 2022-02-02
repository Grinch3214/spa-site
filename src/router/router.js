import Vue from 'vue'
import VueRouter from 'vue-router'
import { i18n } from '../plugins/i18n'

import Applicant from '../components/view/Applicant.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: `/${i18n.locale}`
        },
        {
            path: '/:lang',
            component: {
                render (c) { return c('router-view') } 
            },
            children: [
                {
                    path: '/',
                    name: 'Applicant',
                    component: Applicant,
                },
                {
                    path: 'employer',
                    name: 'Employer',
                    component: () => import('../components/view/Employer.vue')
                },
                {
                    path: 'registration',
                    name: 'Registration',
                    component: () => import('../components/view/Registration.vue')
                }
            ]
        },
        {
            path: '*',
            name: 'Error',
            component: () => import('../components/view/error/Error.vue')
        }
    ]
})

export default router