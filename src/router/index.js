import { createRouter, createWebHistory } from 'vue-router'
import FormAddAccount from '../components/FormAddAccount.vue';
import Login from '../components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/tambahAkun',
      name:'Tambah Akun',
      component:FormAddAccount
    },
  ]
})
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('access_token');
  const role = localStorage.getItem('role');
  console.log(!token)
  if(!token && to.name!='Login'){
      next({name:'Login'})
  }else if(token && to.name=='Login'){
    next({name:'Home'})
  }else{
    next()
  }
})

export default router
