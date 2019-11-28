// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import First from './components/First.vue'
import Playvideo from './components/Playvideo'
import Login from './components/Login'
import Denglu from './components/loginRegistered/Denglu'
import Registered from './components/loginRegistered/Registered'

import Sousuo from './components/Sousuo.vue'
    import Searchdefault from './components/search/Searchdefault'
    import Searchresult from './components/search/Searchresult'
import Shouye from './components/Shouye.vue'
import Donghua from './components/Donghua.vue'
    import PublicContent from './components/public/PublicContent'
import Fanju from './components/Fanju.vue'
import Guochuang from './components/Guochuang.vue'
import Keji from './components/Keji.vue'
import Music from './components/Music.vue'
import Wudao from './components/Wudao.vue'
import Guichu from './components/Guichu.vue'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource)

const router=new Router({
  routes:[
    {path:'/',component:First,
        redirect:'shouye',
        children:[
        {path:'shouye',component:Shouye},

        {path:'donghua',component:Donghua,
          children:[
            {path:'tuijian',component:PublicContent},
            {path:'amv',component:PublicContent},
            {path:'3d',component:PublicContent},
            {path:'duanpian',component:PublicContent},
            {path:'shoushu',component:PublicContent},
            {path:'peiyin',component:PublicContent},
            {path:'zonghe',component:PublicContent},
          ]},

        {path:'fanju',component:Fanju,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'lianzai',component:PublicContent},
              {path:'wanjie',component:PublicContent},
              {path:'zixun',component:PublicContent},
              {path:'yansheng',component:PublicContent},
            ]
          },
        {path:'guochuang',component:Guochuang,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'guochuangdonghua',component:PublicContent},
              {path:'guochanyuanchuang',component:PublicContent},
              {path:'zixun',component:PublicContent},
              {path:'budaixi',component:PublicContent},
            ]
        },
        {path:'keji',component:Keji,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'renwen',component:PublicContent},
              {path:'xinghai',component:PublicContent},
              {path:'jixie',component:PublicContent},
              {path:'qiche',component:PublicContent},
            ]
        },
        {path:'music',component:Music,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'yuanchuang',component:PublicContent},
              {path:'fanchang',component:PublicContent},
              {path:'mv',component:PublicContent},
              {path:'dianyin',component:PublicContent},
              {path:'xianchang',component:PublicContent}
            ]
        },
        {path:'wudao',component:Wudao,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'zhaiwu',component:PublicContent},
              {path:'jiewu',component:PublicContent},
              {path:'gufengwu',component:PublicContent},
              {path:'wudaojiaocheng',component:PublicContent}
            ]
        },
        {path:'guichu',component:Guichu,
            children:[
              {path:'tuijian',component:PublicContent},
              {path:'guichutiaojiao',component:PublicContent},
              {path:'yinmad',component:PublicContent},
              {path:'jiaochengyanshi',component:PublicContent}
            ]
        }
  ]},
  {path:'/search',component:Sousuo,
      redirect:'/search/default',
      children:[
          {path:'default',component:Searchdefault},
          {path:'result',component:Searchresult}
      ]
  },
  {path:'/play',component:Playvideo},

  {path:'/login',component:Login},
  {path:'/registered',component:Registered},
  {path:'/denglu',component:Denglu},

  ],
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
