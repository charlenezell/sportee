//app.js

App({
  onLaunch: function () {
    let g = wx.getSystemInfoSync();
    // console.log(g);
  },
  globalData: {},
  backtolastpage() {
    wx.navigateBack();
  },
  getUserInfo(cb) {
    if (this.globalData.userInfo) {
      cb(this.globalData.userInfo);
      return false;
    }
    wx.getUserInfo({
      success: ({
        userInfo
      }) => {
        this.globalData.userInfo = userInfo;
        cb(userInfo);
      }
    })
  },
  globalData: {
    gameTypeRegistry: [{
        name: "Basketball",
        nav: "/pages/basketball/index",
        icon: "/pages/basketball/resource/icon.png"
      }/* ,
      {
        name: "Table Tennis",
        nav: "/pages/tabletennis/index",
        icon: "/pages/tabletennis/resource/icon.png"
      } */
    ]
  }
})