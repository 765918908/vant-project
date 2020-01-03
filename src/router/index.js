import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Main',
		component: () => import('../views/Main.vue'),
		redirect: '/home',
		children: [{
				path: 'home',
				component: () => import('../views/home/Home.vue')
			},
			{
				path: 'my',
				component: () => import('../views/my/My.vue')
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/realName',
		name: 'RealName',
		component: () => import('../views/realName.vue')
	},
	
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	if (to.path == '/login') {
		sessionStorage.removeItem('token')
	}
	let token = sessionStorage.getItem('token');
	console.log('tokenä¸=')
	console.log(token)
	if (token == null && to.path != '/login') {
		next({
			path: '/login'
		})
	} else {
		next()
	}

})

export default router
