import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Index from '@/views/index/Index'
import Introduction from '@/views/introduction/Introduction'
import Member from '@/views/member/Member'
import Direction from '@/views/direction/Direction'
import Project from '@/views/project/Project'
import Contact from '@/views/contact/Contact'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', name: 'Index', component: Index },
      { path: '/introduction', name: 'Introduction', component: Introduction },
      { path: '/member', name: 'Member', component: Member },
      { path: '/direction', name: 'Direction', component: Direction },
      { path: '/project', name: 'Project', component: Project },
      { path: '/contact', name: 'Contact', component: Contact }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
