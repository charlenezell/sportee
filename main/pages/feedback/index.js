var appInstance = getApp();
Page({
  data: {
    typeIndex: 0,
    maxLength: 200,
    type: ['新需求', 'bug', '优化建议'],
    userInfo: appInstance.userInfo || {},
    words:""
  },
  onLoad() {
    appInstance.getUserInfo(data => {
      this.setData({
        userInfo: data
      });
    })
  },
  backtolastpage(){
    appInstance.backtolastpage();
  },
  inputTextarea(e) {
    this.setData({
      words:e.detail.value
    })
  },
  formSubmit(e) {
    console.log({
      words:this.data.words,
      type:typeIndex
    });
  },
  bindPickerChange(e) {
    this.setData({
      typeIndex: e.detail.value
    })
  }
})