
let app=require('./express-config');

let port=process.env.BOOKSWEB_PORT||80;
app.listen(port, error=>{
    if(error)
        console.log(`error starting server on port ${port}: error.message`);
        else
    console.log(`server started on port ${port}`);
})