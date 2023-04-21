import request from '@/utils/request'

/**
 *  游客登录
 *  @param  {Number} phone 
 *  @param  {Number} password 
 *  @return {Array}
 */
export const login = params => {
	return request.get('/register/anonimous', params)
}
// 生成key
export const sckey = params => {
	return request.get('/login/qr/key', params)
}
// 生成二维码
export const scewm = params => {
	return request.get('/login/qr/create', params)
}
// 验证验证码
export const ewmyz = params => {
	return request.get('/login/qr/check', params)
}
// 验证验证码
export const login111 = params => {
	return request.post('/login/status', params)
}

/**
 *  获取登录状态
 */
export const getLoginStatus = params => {
	return request.get('/login/status', params)
}



/**
 *  喜欢音乐 或取消喜欢
 */
export const likeMusic = params => {
	return request.get('/like', params)
}

/**
 *  喜欢音乐列表
 */
export const likeData = params => {
	return request.get('/likelist', params)
}

/**
 *  获取用户喜欢的歌单
 */
export const getUserInfo = params => {
	return request.get('/user/playlist', params)
}

/**
 *  获取用户最近播放记录
 */
export const getUserHistory = params => {
	return request.get('/user/record', params)
}
