import {createRouter,createWebHashHistory} from 'vue-router'

export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            name:'orders',
            path: '/orders',
            component:()=>import ('../components/orders/MyOrders.vue'),
        },
        {
            name:'invalidOrders',
            path:'/invalid-orders',
            component: ()=>import ('../components/invalid-orders/InvalidOrders.vue'),
        },
        {
            name:'trash',
            path:'/trash',
            component: ()=>import ('../components/trash/MyTrash.vue'),
        }

    ]
})