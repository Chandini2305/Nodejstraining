let express=require('express');
//let ejs=require('ejs');

let app=express();

app.set('view engine', 'ejs'); //automatically and internally calls require('ejs')
app.set('views', './views');   //the base folder for dynamic view templates
app.use(express.static('public')); //the base folder for static contents like html/css/js/images 





let Author = require('./entities/author');
let authors=[
    new Author('vivek-dutta-mishra','Vivek Dutta Mishra','Author of the Amazon Best Seller The Accursed God','vivek.png','vivek@conceptarchitect.in'),
    new Author('jeffrey-archer','Jeffrey Archer','Contemporary best-seller fiction author','archer.png','jeffrey.archer@gmail.com'),
    new Author('ramdhari-singh-dinkar','Ramdhari Singh Dinkar','The National poet of India','dinker.png')

];

app.get('/authors',(request,response)=>{

    //response.send(authors);

    //use template file authors/list to display my authors using the default view-engine
    //template file extension will depend on the view engine that we are using
    response.render('authors/list',{authors:authors});

});






//export app after proper setup
module.exports=app;