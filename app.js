
const express = require("express");
const ejs = require("ejs");
const path = require("path");

const routeslogin = require ('./Routes/website/login.js');

const routesadmin = require ('./Routes/admin/admin.js');
const routescategories = require ('./Routes/admin/categories.js');
const routespages = require ('./Routes/admin/pages.js');
const routesservices = require ('./Routes/admin/services.js');
const routesgalery = require ('./Routes/admin/galery.js');
const routesnavbar = require ('./Routes/admin/navbar.js');
const routesprofile = require ('./Routes/admin/profile.js');

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));



app.get('/',(req,res)=>{
    res.render('website/index');
    });
    app.use(routeslogin);
    app.use(routesadmin);
    app.use(routescategories);
    app.use(routespages);
    app.use(routesservices);
    app.use(routesgalery);
    app.use(routesnavbar);
    app.use(routesprofile);



/*app.get('/login', (req,res)=>{
    res.render('defaults/login');

})






app.get('/admin/profile',(req,res)=>{
    res.render('admin/profile');
})*/



app.listen(3000,()=>{
console.log('server listening on port 3000');
});