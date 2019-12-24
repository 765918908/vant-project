import {request} from './request'
export function login(data){
	return request({
		url:'/teacher/TeacherLogin',
		method:'post',
		data
	})
}