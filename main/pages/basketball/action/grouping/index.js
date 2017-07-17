var appInstance = getApp();
const defTotal = 6;

function randomArray(array, pergroupNumber) {
  let b=[];
  for (let a=0;a<array.length*pergroupNumber;a++){
    b.push(a+1);
  }
  b.sort((a,b)=>{
    return Math.random()>0.5?1:-1
  });
  let g = array.map(function (v) {
    return b.splice(0,pergroupNumber).sort((a,b)=>{
      return a>b?1:-1
    });
  })
  return g;
}

function getGroup(t) {
  let a = []
  for (let g = 1; g <= t; g++) {
    if (t % g == 0) {
      a.push(g);
    }
  }
  return a;
}
let initGroup = getGroup(defTotal)
Page({
  data: {
    totalPeople: defTotal,
    groupTo: initGroup,
    groupIndex: initGroup[0],
    calPerGroup: defTotal / initGroup[0],
    previewData: randomArray(new Array(initGroup[0]).fill(0), defTotal / initGroup[0])
  },
  onLoad() {

  },
  bindPickerChange(e) {
    let g = getGroup(this.data.totalPeople)
    this.setData({
      groupTo: g,
      groupIndex: g[e.detail.value],
      calPerGroup: this.data.totalPeople / g[e.detail.value],
      previewData: randomArray(new Array(g[e.detail.value]).fill(0), this.data.totalPeople / g[e.detail.value])
    })

  },
  totalPeopleChange(e) {
    let g = getGroup(e.detail.value)
    this.setData({
      totalPeople: e.detail.value,
      groupTo: g,
      groupIndex: g[0],
      calPerGroup: e.detail.value / g[0],
      previewData: randomArray(new Array(g[0]).fill(0), e.detail.value / g[0])
    })
  }
})