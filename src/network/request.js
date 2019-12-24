import axios from 'axios'
import store from '../store'
import router from '../router'
export function request	(config){
	const instance = axios.create({
		baseURL:'http://139.224.26.252',
		timeout:5000
	})
	
	instance.interceptors.request.use(config => {
		// 1.config中的一些信息不符合服务器请求
		let url = config.url
		if(url=="/teacher/TeacherLogin"){
			return config
		}else{
			if(store.state.token==""){
				router.push('/login')
			}else{
				return config
			}
		}
		
		
		// 2.每次发送请求显示请求图标
		
		
		
		//3.没有带token
		
		
		
	},err => {
		console.log(err)
	})
	return instance(config)
}