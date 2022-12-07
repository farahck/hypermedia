const Router=require("express") ;
const route = Router();


route.get('/admin/pages',(req,res)=>{
    res.render('admin/pages');
})
route.get('/admin/pages/add',(req,res)=>{
    res.render('admin/addpages');
})


module.exports=route;