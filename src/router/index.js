import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Form from "@/components/Form";
import AdminUser from "@/components/AdminUser";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    },
    {
      path: "/adminuser",
      name: "AdminUser",
      component: AdminUser
    }
  ]
});
