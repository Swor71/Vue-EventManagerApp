import Vue from 'vue';
import VueRouter from 'vue-router';
import { firebaseApp } from './firebase'

import store from './store';

import App from './components/App';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: SignIn }
]   
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})