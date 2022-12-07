
const Router=require("express") ;
const route = Router();
route.get('/admin',(req,res)=>{
    res.render('admin/pages');
})
module.exports=route;

