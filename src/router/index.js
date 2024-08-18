import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import RegisterUserView from '../views/RegisterUserView.vue';
import MainAppView from '../views/MainAppView.vue';
import TimeTrackingView from '../views/TimeTrackingView.vue';
import WorkerView from '../views/WorkerView.vue';
import ListView from '../views/ListView.vue';



const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/registerUser', component: RegisterUserView },
  { path: '/app', component: MainAppView },
  { path: '/worker', component: WorkerView },
  { path: '/list', component: ListView },
  { path: '/time', component: TimeTrackingView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
