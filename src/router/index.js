import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../home/HomePage'
import Creator from '../creator/Creator'
import Viewer from '../viewer/Viewer'
import About from '../about/About'
import Analyse from '../analyse/Analyse'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/creator',
      name: 'Creator',
      component: Creator
    },
    {
      path: '/viewer',
      name: 'Viewer',
      component: Viewer
    },
    {
      path: '/analyse',
      name: 'Analyse',
      component: Analyse
    }

  ]
})
