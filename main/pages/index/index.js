//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  parseGridViewData:function(){
    let left=app.globalData.gameTypeRegistry.length%3;
    let r=app.globalData.gameTypeRegistry.concat([]);
    if(left!=0){
      for (let a=0 ;a<3-left;a++){
        r.push({
          name:"期待你的建议",
          icon:"./resource/empty.png",
          nav:"/page/contactme/index"
        });
      }
      return r;
    }else{
      return r;
    }
  },
  onLoad: function () {
      wx.navigateTo({
        url: "/pages/basketball/index"
      })
      // wx.navigateTo({
      //   url:"/pages/test/index"
      // })
    // app.getUserInfo((userInfo)=>{
      //更新数据
      this.setData({
        // userInfo:userInfo,
        gameList:this.parseGridViewData()
      });
    // })
  }
})
