import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import AboutView from "../components/AboutView";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/onas',
            name: 'about',
            component: AboutView
        }
    ],
    mode: 'history'
})