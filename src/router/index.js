import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import {auth} from '../firebase'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import("../components/home/Products.vue"),
  },


  //Admin Routes

  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiresAuth: true },
    
    children: [

      {

        path: "overview",
        name: "Overview",
        component: () => import("../components/admin/Index.vue")

      },

      {

        path: "products",
        name: "Admin_Products",
        component: () => import("../components/admin/Products.vue")

      },

      {

        path: "orders",
        name: "Orders",
        component: () => import("../components/admin/Orders.vue")

      }

    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  
  const requiresAuth = await to.matched.some(record => record.meta.requiresAuth)
  const currentUser = await auth.currentUser

  if(requiresAuth && !currentUser) {


    next('/')

  } else if (requiresAuth && currentUser) {

    next()

  } else {

    next()
  }

})

export default router;
