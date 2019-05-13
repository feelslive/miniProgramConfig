const app = getApp();
module.exports = (url, data = {}, method = "GET", header = {}) => {
	if (wx.getStorageSync("token")) {
        data.token = wx.getStorageSync("token");
    }
	wx.showLoading({
		title: "玩命加载中..."
	});

	return new Promise((resolve, reject) => {
		wx.request({
			url: app.globalData.config.requestHost + url,
			data,
			header,
			method: method,
			dataType: "json",
			success: (res => {
				wx.hideLoading()
				switch (res.statusCode) {
					case 200:
						resolve(res)
						break;
					case 403:
						app.login();
						break;
					case 500:
						wx.showToast({
							title: "服务异常 500",
							icon: "none",
							duration: 2000
						})
						break;
					default:
						wx.showToast({
							title: res.data.result,
							icon: "none",
							duration: 2000
						})
						break;

				}
			}),
			fail: (err => {
				wx.getNetworkType({
					success: res => {
						wx.hideLoading()
						if (res.networkType == "none") {
							wx.showModal({
								title: "提示",
								showCancel: false,
								content: "当前网络不可用,请检查网络设置",
								success(res) {
									if (res.confirm) {
										wx.navigateBack({
											delta: 0
										})
									}
								}
							})
						} else {
							wx.showToast({
								title: "网络异常，请稍后重试",
								icon: "none",
								duration: 2000
							})
						}
					}
				})
			}),
			// complete: wx.hideLoading()
		});
	});
};