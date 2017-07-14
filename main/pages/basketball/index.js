Page({
  data: {
    // animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation
    this.rotateAndScaleThenTranslate();
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(90).scale(2, 8).step()
    this.animation.translate(400, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})