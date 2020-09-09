import Vue from 'vue'
import VueRouter from 'vue-router'
import zhuye from "@/components/zhuye"
import opo from "@/components/opo"
import aka from "@/components/aka"
import jingpinke from "@/components/jingpinke"
import tab21 from "@/components/tab21"
import tab22 from "@/components/tab22"
import tab23 from "@/components/tab23"
import tab24 from "@/components/tab24"
import tab25 from "@/components/tab25"
import tab26 from "@/components/tab26"
import tab31 from "@/components/tab31"
import tab32 from "@/components/tab32"
import tab33 from "@/components/tab33"
import tab4 from "@/components/tab4"
import tab5 from "@/components/tab5"
import chakan from "@/components/chakan"
import tianjia from "@/components/tianjia"
import xiugai from "@/components/xiugai"
import duoren from "@/components/duoren"
import juju from "@/components/juju"
import jiji from "@/components/jiji"
import bibi from "@/components/bibi"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'zhuye',
    component: zhuye
  },

  {
    path: '/opo',
    name: 'opo',
    component: opo,
    children:[
      {
        path: 'aka',
        name:"aka",
        component: aka,
      },






























      
      {
        path: 'jingpinke',
        component: jingpinke,
      },
      {
        path: 'tab21',
        component: tab21,
      },
      {
        path: 'tab22',
        component: tab22,
      },
      {
        path: 'tab23',
        component: tab23,
      },
      {
        path: 'tab24',
        component: tab24,
      },
      {
        path: 'tab25',
        component: tab25,
      },
      {
        path: 'tab26',
        component: tab26,
      },
      {
        path: 'tab31',
        component: tab31,
      },
      {
        path: 'tab32',
        component: tab32,
      },
      {
        path: 'tab33',
        component: tab33,
      },
      {
        path: 'tab4',
        component: tab4,
      },
      {
        path: 'tab5',
        component: tab5,
      },
      {
        path: 'chakan',
        component: chakan,
      },
      {
        path: 'tianjia',
        name: 'tianjia',
        component: tianjia,
      },
      {
        path: 'xiugai',
        name: 'xiugai',
        component: xiugai,
      },
      {
        path: 'duoren',
        name: 'duoren',
        component: duoren,
      },
      {
        path: 'juju',
        name: 'juju',
        component: juju,
      },
      {
        path: '/jiji',
        name: 'jiji',
        component: jiji,
      },
      {
        path: '/bibi',
        name: 'bibi',
        component: bibi,
      },
      {
        path:'/opo',
        redirect:'/opo/aka'
      }
      
    ]
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
