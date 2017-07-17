let method={
    nav_handlerClick:function(){
        console.log("hehe");
    }
};
function Nav(page,data={},method={}){
    page.setData({"zComponent.data4nav":data});
    let extMethod={};
    Object.assign(page,method,extMethod);
}
export default Nav;