const Router=require("express") ;
const route = Router();
route.get('/admin/galery',(req,res)=>{
    res.render('admin/galery');
})
module.exports=route;