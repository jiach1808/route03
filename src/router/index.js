import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import b from '@/components/B'
import b1 from '@/components/b1'
import b2 from '@/components/b2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/B',
      name: 'B',
      component: b,
      children:[
      { path:'/',name:'B',component:b},
      { path:'b1',name:'b1',component:b1},
      { path:'b2',name:'b2',component:b2}
      ]
     

    }
  ]
})
