import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/forgetPwd",
    name: "ForgetPwd",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ForgetPwd.vue")
  },
  {
    path: "/resetPwd",
    name: "ResetPwd",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResetPwd.vue")
  },
  {
    path: "/step",
    name: "Step",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Step.vue")
  },
  {
    path: "/demo",
    name: "Demo",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Demo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
