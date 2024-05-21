import HomePage  from './SiteMap/HomePage.vue';
import DekothermPage from './SiteMap/DekothermPage.vue';
import ProdusePage from './SiteMap/ProdusePage.vue';
import ContactePage from './SiteMap/ContactePage.vue';
import AdminPage from './Admin/AdminPage.vue';
import TencuieliPage from './Pages/TencuieliPage.vue';
import GrunduriPage from './Pages/GrunduriPage.vue';
import AdeziviPage from './Pages/AdeziviPage.vue';
import HidroizolatiiPage from './Pages/HidroizolatiiPage.vue';
import UpdateProduct from './Admin/UpdateProduct.vue';
import UpdateGrund from './Admin/UpdateGrund.vue';
import UpdateAdeziv from './Admin/UpdateAdeziv.vue';
import UpdateHidro from './Admin/UpdateHidro.vue';
import LoginPage from './SiteMap/LoginPage.vue';

import SignupPage from './SiteMap/SignupPage.vue';
import { createRouter, createWebHistory} from 'vue-router';


const routes = [
   {
      name: "HomePage",
      component: HomePage,
      path: '/'
   },
   {
      name: "DekothermPage",
      component: DekothermPage,
      path: '/deko-therm'
   },
   {
      name: "ProdusePage",
      component: ProdusePage,
      path: '/produse'
   },
   {
      name: "ContactePage",
      component: ContactePage,
      path: '/contacte'
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
   {
      name: "LoginPage",
      component: LoginPage,
      path: '/login',
      props: true 
   },
   {
      name: "SignupPage",
      component: SignupPage,
      path: '/signup',
      props: true 
   }
]

const router = createRouter ({
   history: createWebHistory(),
   routes
})

export default router