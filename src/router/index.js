import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import wean from '@/components/TestComponent'
import Soal from '@/components/SoalComponent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tai', // ini url nya
      name: 'TestComponent', //bakalan kerasa di versi 3 soalnya versi 2 tidak berlaku:( , kalo di v3 itu bisa buat routing name ky laravel
      component: wean // nama file
    },
    {
      path: '/bikin-soal',
      name: 'Soal',
      component: Soal
    },
  ]
})
