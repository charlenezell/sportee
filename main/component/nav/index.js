let method={
    nav_handlerClick:function(){
        console.log("hehe");
    }
};
function Nav(page,data={},method={}){
    // console.log("hehe")
    page.setData({data4nav:data});
    Object.assign(page,method,extMethod)
}
export default Nav;