import Nav from "../../component/nav/index";
Page({
  data:{
    zComponent:{
      data4nav:{}
    }
  },
  onLoad:function (){
    new Nav(this,{
      navItems:[{
        name:'1'
      },{
        name:'2'
      },{
        name:'3'
      }]
    });
  }
})