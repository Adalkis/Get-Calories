import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store/index.js'
Vue.use(VueRouter)

const routes= [
   
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{requiresAuth:false}
    
    
   
   
    
    
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{requiresAuth:false}
  
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{requiresAuth:true}
   
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
  
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !store.state.isLogged){
    console.log('entre en este if')
    next('/login')
  }
  else if(!to.meta.requiresAuth && store.state.isLogged){
    next('/')
  }
  else{
    console.log(to)
    next();
  }


})



export default router
