import {
	request
} from './request'
// (首页)获取教师金额总资产
export function getTotalMoney(data) {
	return request({
		url: '/teacherhomepage/TeacherMoneyInfo',
		method: 'get',
		headers: {
			'token': sessionStorage.getItem('token')
		},
		params: data
	})
}

// 登录成功-获取用户信息
export function getUserInfo(data) {
	return request({
		url: '/teacherinfo/TeacherToken',
		method: 'get',
		data
	})
}
