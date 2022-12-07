const Router=require("express") ;
const route = Router();
route.get('/admin/profile',(req,res)=>{
    res.render('admin/profile');
})
module.exports=route;