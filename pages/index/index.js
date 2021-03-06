const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://wx.youthol.cn/static/images/wx_bg_temp@750x160.png',
      'https://wx.youthol.cn/static/images/wx_bg_temp@750x160.png'
    ],
    indicatorDots: false,
    autoplay: false,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const isBind = wx.getStorageSync('isBind');
    if (!isBind) {
      wx.switchTab({
        url: '/pages/user/index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const isBind = wx.getStorageSync('isBind');
    if (isBind) {
      let userInfo = wx.getStorageSync('userInfo');
      this.setData({ userInfo, isBind });
    } else {
      app.showToast('授权使用更多功能');
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    setTimeout(() => {
      app.showToast('刷新成功', 'success', 1000)
      wx.stopPullDownRefresh()
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '山东理工大学',
      path: '/pages/index/index'
    }
  }
})