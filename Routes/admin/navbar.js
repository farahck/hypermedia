const Router=require("express") ;
const route = Router();
route.get('/admin/navbar',(req,res)=>{
    res.render('admin/navbar');
})
module.exports=route;