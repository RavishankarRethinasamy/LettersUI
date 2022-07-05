import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/List.vue"
import Read from "../views/Read.vue"
import Write from "../components/Write.vue"
import UserList from "../components/UserList.vue"
import Team from "../components/Team.vue"
import Details from "../components/Details.vue"
import Privacy from "../components/Privacy.vue"
import Terms from "../components/Terms.vue"

const routes = [
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
        },
    {
        path: '/terms',
        name: 'Terms',
        component: Terms
            },
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/p/:page',
    name: 'PagedList',
    component: List
  },
  {
    path: '/s/:searchValue',
    name: 'SearchedList',
    component: List
  },
  {
    path: '/ml',
    name: 'MyList',
    component: UserList
  },
  {
    path: '/mlp/:page',
    name: 'PagedMyList',
    component: UserList
  },
  {
    path: '/mls/:searchValue',
    name: 'SearchedMyList',
    component: UserList
  },
  {
    path: '/:id',
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
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router