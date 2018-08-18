// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<<<<<<< HEAD
import Vue from "vue";
import App from "./App";
import router from "./router";
import DataTable from "vue-materialize-datatable";
Vue.config.productionTip = false;
Vue.use(DataTable);

=======
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import velocity      from 'velocity-animate'

Vue.config.productionTip = false
Vue.use(Notifications, { velocity })
>>>>>>> cde17ce90ea7181616de555b1afe8d34cd6ddbbf
/* eslint-disable no-new */
new Vue(
  {
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  },
  {
    components: {
      DataTable
    }
  }
);
