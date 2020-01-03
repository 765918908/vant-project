
import {getTotalMoney} from '../network/otherdata'
export default {
	getHomeData(state) {
		console.log('获取首页数据=')
		console.log(state.homeData)
	},
	initData(state){
		let token = sessionStorage.getItem('token')
		let data = {
			token:token
		}
		let datastr = JSON.stringify(data)
		getTotalMoney(datastr).then(res => {
			state.homeData = res
		})
	}
}
