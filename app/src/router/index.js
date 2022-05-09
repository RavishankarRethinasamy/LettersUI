import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/List.vue"
import Read from "../views/Read.vue"
import Write from "../components/Write.vue"
import UserList from "../components/UserList.vue"
import Team from "../components/Team.vue"

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/search/:searchValue',
    name: 'SearchedList',
    component: List
  },
  {
    path: '/page/:pageValue',
    name: 'PaginatedList',
    component: List
  },
  {
    path: '/mylist',
    name: 'MyList',
    component: UserList
  },
  {
    path: '/mylist/search/:searchValue',
    name: 'SearchedMyList',
    component: UserList
  },
  {
    path: '/mylist/page/:pageValue',
    name: 'PaginatedMyList',
    component: UserList
  },
  {
    path: '/view/:id',
    name: 'Read',
    component: Read
  },
  {
    path: '/write',
    name: 'Write',
    component: Write
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router