const Router=require("express") ;
const route = Router();
route.get('/admin/services',(req,res)=>{
    res.render('admin/services');
})
module.exports=route;