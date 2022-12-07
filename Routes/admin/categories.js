
const Router=require("express") ;
const route = Router();

route.get('/admin/categories',(req,res)=>{
    res.render('admin/categories');
})
module.exports=route;