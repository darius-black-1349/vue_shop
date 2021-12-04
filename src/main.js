import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "./assets/App.scss";
import "./assets/App"

import {auth} from "./firebase"

let app = "";

auth.onAuthStateChanged((user) => {

    if(!app) {


        createApp(App).use(router).mount("#app");

    }

})

