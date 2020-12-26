import axios from 'axios';

let baseURL = "http://5c92dbfae7b1a00014078e61.mockapi.io/";
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
	// 获取宠物信息
	getPets() {
		return axios.get('owners');
	}
}
