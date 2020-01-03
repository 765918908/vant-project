import axios from 'axios'
import router from '../router'
import qs from 'qs'
import {
	Toast
} from 'vant';
export function request(config) {
	const instance = axios.create({
		baseURL: 'http://139.224.26.252',
		// baseURL: 'http://192.168.0.156/',
		timeout: 5000,
		headers:{
			'Content-Type':'application/x-www-form-urlencoded'
		}
	})

	instance.interceptors.request.use(config => {
		  config.data = qs.stringify(config.data)
		Toast.loading({
			message: '加载中...',
			forbidClick: true,
			loadingType: 'spinner'
		});
		let url = config.url
		if (url == "/teacher/TeacherLogin") {
			return config
		} else {

			if (sessionStorage.getItem('token') == null) {
				router.push('/login')
			} else {
				return config
			}
		}
	}, err => {
		console.log(err)
		Toast.clear()
		return err
	})

	instance.interceptors.response.use(response => {
		Toast.clear()
		let status = response.data.status
		let msg = response.data.msg
		if (status == 1) {
			Toast.success(msg);
		} else if (status == 0) {
			Toast.fail(msg);
			if(response.data.code==488){
				router.push('/realName')
			}
		}
		return response.data
	}, err => {
		Toast.clear()
		return err
	})


	return instance(config)
}
