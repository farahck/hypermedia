const Router=require("express") ;
const route = Router();
route.get('/',(req,res)=>{
    res.render('website/index');
})
module.exports=route;