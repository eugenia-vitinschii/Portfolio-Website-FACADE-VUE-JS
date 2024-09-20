
import AdminPage from '../components/Admin/AdminPage.vue';
import TencuieliPage from '../components/Pages/TencuieliPage.vue';
import GrunduriPage from '../components/Pages/GrunduriPage.vue';
import AdeziviPage from '../components/Pages/AdeziviPage.vue';
import HidroizolatiiPage from '../components/Pages/HidroizolatiiPage.vue';
import UpdateProduct from '../components/Admin/UpdateProduct.vue';
import UpdateGrund from '../components/Admin/UpdateGrund.vue';
import UpdateAdeziv from '../components/Admin/UpdateAdeziv.vue';
import UpdateHidro from '../components/Admin/UpdateHidro.vue';

import { createRouter, createWebHistory} from 'vue-router';


const routes = [
   {
      name: "HomeView",
      component: () => import('../views/HomeView.vue'),
      path: '/'
   },
   {
      name: "DekothermView",
      component: () => import('../views/DekothermView.vue'),
      path: '/deko-therm'
   },
   {
      name: "ProduseView",
      component: () => import('../views/ProduseView.vue'),
      path: '/produse'
   },
   {
      name: "ContacteView",
      component: () => import('../views/ContacteView.vue'),
      path: '/contacte'
   },
   {
      name: "LoginView",
      component: () => import('../views/LoginView.vue'),
      path: '/login',
      props: true 
   },
   {
      name: "SignupView",
      component: () => import('../views/SignupView.vue'),
      path: '/signup',
      props: true 
   },
   {
      name: "AdminPage",
      component: AdminPage,
      path: '/admin'
   },
   {
      name: "TencuieliPage",
      component: TencuieliPage,
      path: '/tencuiala/:id',
      props: true 
   },
   {
      name: "GrunduriPage",
      component: GrunduriPage,
      path: '/grund/:id',
      props: true 
   },
   {
      name: "AdeziviPage",
      component: AdeziviPage,
      path: '/adezivi/:id',
      props: true 
   },
   {
      name: "HidroizolatiiPage",
      component: HidroizolatiiPage,
      path: '/hidroizolatie/:id',
      props: true 
   },
   {
      name: "UpdateProduct",
      component: UpdateProduct,
      path: '/update/:id',
      props: true 
   },
   {
      name: "UpdateGrund",
      component: UpdateGrund,
      path: '/update-grund/:id',
      props: true 
   },
   {
      name: "UpdateAdeziv",
      component: UpdateAdeziv,
      path: '/update-adeziv/:id',
      props: true 
   },
   {
      name: "UpdateHidro",
      component: UpdateHidro,
      path: '/update-hidro/:id',
      props: true 
   },
]

const router = createRouter ({
   history: createWebHistory(),
   routes
})

export default router