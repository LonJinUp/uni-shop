/**
 * 提示方法
 * @param {String} title 提示文字
 * @param {String}  icon icon图片
 * @param {Number}  duration 提示时间 
 */
export function toast(title, icon = 'none', duration){
	uni.showToast({
	    title,
		icon,
	    duration: 1500
	})
}

/**
 * 页面跳转
 * @param {String} url  转跳路径
 * @param {String} type 转跳方式
**/
export function navGoto(url, type = 'navigateTo') {
	if(type != 'navigateBack'){
		uni[type]({
			url,
			fail: error => {console.log(error)}
		})
	}else{
		uni.navigateBack({
			delta: url,
			fail: error => {console.log(error)}
		})
	}
}