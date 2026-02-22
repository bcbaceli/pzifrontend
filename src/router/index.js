import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import OwnerView from "../views/OwnerView.vue";
import OwnerHome from "../components/OwnerHome.vue";
import GuestsView from "../components/GuestsView.vue";
import ApartmentList from "../components/ApartmentList.vue";
import AddApartment from "../components/AddApartment.vue";
import OwnerProfile from "../components/OwnerProfile.vue";
import UpdateApartment from "../components/UpdateApartment.vue";

const routes=[
    {
        path:'/',
        name:'HomeView',
        component:HomeView
    },
    {
        path:'/register',
        name:'RegisterView',
        component:RegisterView,
        meta: { onlyUnregistered: true }
    },
    {
        path:'/login',
        name:'LoginView',
        component:LoginView,
        meta: { onlyUnregistered: true }
    },
    {
        path:'/owner',
        component:OwnerView,
        meta: { requiresRole: 'owner' },
        children:[
            {
                path:'reservations',
                name:'OwnerHome',
                component:OwnerHome
            },
            {
                path:'guests',
                name:'GuestsView',
                component:GuestsView
            },
            {
                path:'apartments',
                name:'ApartmentList',
                component:ApartmentList
            },
            {
                path:'add-apartment',
                name:'AddApartment',
                component:AddApartment
            },
            {
                path:'/owner/profile',
                name:'OwnerProfile',
                component:OwnerProfile
            },
            {
                path:'/owner/update-apartment',
                name:'UpdateApartment',
                component:UpdateApartment   
            }
        ]
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const user=JSON.parse(localStorage.getItem('user'));

    if(to.meta.requiresRole === 'owner'){
        if(!user) return next('/login');
        if(user.role !== 'owner') return next('/');
    }

    if(to.meta.onlyUnregistered && user){
        return next(user.role === 'owner' ? '/owner' : '/');
    }

    next();
})

export default router