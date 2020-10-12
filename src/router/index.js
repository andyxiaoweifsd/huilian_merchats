import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeOpen from '../views/homeopen/HomeOpen.vue'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Summarizing from '../views/home/Summarizing.vue'
import Record from '../views/home/Record.vue'
import CollectionRecord  from'../views/CollectionRecord.vue'
import PaymentDetails from '../views/PaymentDetails.vue'
import Sets from '../views/set/Sets.vue'
import SetPassword from '../views/set/SetPassword.vue'
import Collection from '../views/gathering/Collection.vue'
import CollectionCode from '../views/gathering/CollectionCode.vue'
import SuccessfulCollection from '../views/gathering/SuccessfulCollection.vue'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      name:'HomeOpen',
      component:HomeOpen
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Summarizing',
      name:'Summarizing',
      component:Summarizing
    },
    {
      path:'/Record',
      name:'Record',
      component:Record
    },
    {
      path:'/CollectionRecord',
      name:'CollectionRecord',
      component:CollectionRecord
    },
    {
      path:'/PaymentDetails',
      name:'PaymentDetails',
      component:PaymentDetails
    },
    {
      path:'/Sets',
      name:'Sets',
      component:Sets
    }, 
    {
      path:'/SetPassword',
      name:'SetPassword',
      component:SetPassword
    },
    {
      path:'/Collection',
      name:'Collection',
      component:Collection
    },
    {
      path:'/CollectionCode',
      name:'CollectionCode',
      component:CollectionCode
    },
    {
      path:'/SuccessfulCollection',
      name:'SuccessfulCollection',
      component:SuccessfulCollection
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
