import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Main',
		component: () => import('../views/Main.vue'),
		redirect: '/home',
		children: [
			{path: 'home',component: () => import('../views/home/Home.vue')},
			{path: 'my',component: () => import('../views/my/My.vue')}
		]
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
