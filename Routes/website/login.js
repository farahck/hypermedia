const Router=require("express") ;
const route = Router();
route.get('/login',(req,res)=>{
    res.render('website/login');
})
module.exports=route;