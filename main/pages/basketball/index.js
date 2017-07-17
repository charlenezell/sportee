const actions = ["Grouping", "MatchTime", "others"];
let p = 0;

function getPos() {
  let s = actions.length;
  let startDeg = 90;
  let deg = ( Math.PI/180) * ((360 / s * p) + startDeg);
  console.log(((360 / s * p) + startDeg))
  let c = [Math.cos(deg) *50,
    Math.sin(deg) *50
  ];
  p++;
  return c;
}
Page({
  data: {
    actions: actions
  },
  onLoad: function () {
    actions.forEach((v,k) => {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      });
      let [x, y] = getPos.call(this);
      animation.translate(x, -y).rotate(360).step();
      setTimeout(()=>{
        this.setData({
          ["animationData." + k]: animation.export()
        });
      })
    })
  }
})