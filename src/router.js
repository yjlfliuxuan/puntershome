import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [{
        path: '',
        redirect: '/homepage'
      },
      {
        path: 'homepage',
        name: 'homepage',
        component: () => import('./components/Homepage/index.vue')
      },
      {
        path: 'forum',
        name: 'forum',
        component: () => import('./components/Forum/index.vue')
      },
      {
        path: 'datatransfer',
        name: 'datatransfer',
        component: () => import('./components/Datatransfer/index.vue')
      },
      {
        path: 'mystery',
        name: 'mystery',
        component: () => import('./components/Mystery/index.vue')
      },
      {
        path: 'formula',
        name: 'formula',
        component: () => import('./components/Formula/index.vue')
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('./components/Gallery/index.vue')
      },
      {
        path: 'humor',
        name: 'humor',
        component: () => import('./components/Humor/index.vue')
      },
      {
        path: 'rundog',
        name: 'rundog',
        component: () => import('./components/Rundog/index.vue')
      },
      {
        path: 'fourunlike',
        name: 'fourunlike',
        component: () => import('./components/Fourunlike/index.vue')
      },
      {
        path: 'stuff',
        name: 'stuff',
        component: () => import('./components/Stuff/index.vue')
      },
      {
        path: 'hotwebmanger',
        name: 'hotwebmanger',
        component: () => import('./components/Hotwebmanger/index.vue')
      },
      {
        path: 'liuhelotteryrecord',
        name: 'liuhelotteryrecord',
        component: () => import('./components/Liuhelotteryrecord/index.vue')
      },
      {
        path: 'liuhecondition',
        name: 'liuhecondition',
        component: () => import('./components/Liuhecondition/index.vue')
      },
      {
        path: 'liuhecommonsense',
        name: 'liuhecommonsense',
        component: () => import('./components/Liuhecommonsense/index.vue')
      },
      {
        path: 'liuhelotterydate',
        name: 'liuhelotterydate',
        component: () => import('./components/Liuhelotterydate/index.vue')
      },
      {
        path: 'liuhelongestnotopen',
        name: 'liuhelongestnotopen',
        component: () => import('./components/Liuhelongestnotopen/index.vue')
      },
      {
        path: 'applydisclaimers',
        name: 'applydisclaimers',
        component: () => import('./components/Applydisclaimers/index.vue')
      },
      {
        path: 'contactus',
        name: 'contactus',
        component: () => import('./components/Contactus/index.vue')
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('./components/Faq/index.vue')
      }
      ]
    },
    {
      // 默认配置
      path: '*',
      redirect: '/homepage'
    }
  ]
})
