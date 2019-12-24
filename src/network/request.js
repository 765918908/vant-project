import axios from 'axios'
import store from '../store'
export function request	(config){
	const instance = axios.create({
		baseURL:'http://139.224.26.252',
		timeout:5000
	})
	
	instance.interceptors.request.use(config => {
		// 1.config中的一些信息不符合服务器请求
		let url = config.url
		console.log(store)
		if(url=="/teacher/TeacherLogin"){
			return config
		}else{
			// 是否有token
			// Vue.$store
			
		}
		// 2.每次发送请求显示请求图标
		//3.没有带token
		console.log('拦截了一波')
		console.log(config)
		return config
	},err => {
		console.log(err)
	})
	return instance(config)
}