import Vue from 'vue'
import Router from 'vue-router'
import selectPayment from '@/components/selectPayment'
import listData from '@/components/listData'
import store from '@/components/store'
import credit from '@/components/credit'
import webatm from '@/components/webatm'
import orderdone from '@/components/orderdone'
import linepay from '@/components/linepay'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'selectPayment',
            component: selectPayment
        },
        {
            path: '/listData',
            name: 'listData',
            component: listData,
            // redirect: '/listData/store',
            children: [
                {
                    path: 'store',
                    name: 'store',
                    component: store
                },
                {
                    path: 'credit',
                    name: 'credit',
                    component: credit
                },
                {
                    path: 'webatm',
                    name: 'webatm',
                    component: webatm
                },
                {
                    path: 'linepay',
                    name: 'linepay',
                    component: linepay
                }
            ]
        },
        {
            path: '/orderdone',
            name: 'orderdone',
            component: orderdone,
            meta: { fromName: '' }
        }
    ]
})
