import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Rating from './components/Rating.vue'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/start',
            name: 'Game',
            component: Game
        },
        {
            path:'/ratings',
            name: 'Rating',
            component: Rating
        }
    ]
})