import data from './test';
Page({
  data: {
    prodInCart: [],
    topbar__title: "订餐",
    catList: data.list.map((v, k) => {
      return {
        name: v.name,
        id: k
      }
    }),
    itemList: data.list.map(v => v.foods).reduce((a, b) => {
      return a.concat(b)
    })
  },
  onLoad() {

  }
})