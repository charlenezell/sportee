var appInstance = getApp();
import {
  getPos
} from '../../utils/circleposition';
const actions = [{
  name: "Grouping",
  nav: "/pages/basketball/action/grouping/index"
}/* , {
  name: "MatchTime",
  nav: "/pages/basketball/action/matchtime/index"
} */, {
  name: "others",
  nav: "/pages/feedback/index"
},{
  name: "others",
  nav: "/pages/feedback/index"
},{
  name: "others",
  nav: "/pages/feedback/index"
},{
  name: "others",
  nav: "/pages/feedback/index"
},{
  name: "others",
  nav: "/pages/feedback/index"
},{
  name: "others",
  nav: "/pages/feedback/index"
}];
let p = 0;
Page({
  data: {
    actions: actions,
    rotateDeg: 0
  },
  backUrl: function () {
    appInstance.backtolastpage();
  },
  onLoad: function () {
    // wx.navigateTo({
    //     url: "/pages/basketball/action/grouping/index"
    // })
    setTimeout(() => {
      actions.forEach((v, k) => {
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease',
        });
        let [x, y] = getPos(actions.length, p);
        p++;
        animation.translate(x, -y).opacity(1).step();
        this.setData({
          ["animationData." + k]: animation.export()
        });
      })
    }, 100);
  }
})