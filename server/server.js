const http=require('http');
const fs=require('fs');
const  _=require('lodash');
const num=_.random(0,20);
console.log(num)
const server=http.createServer((req,res)=>{
    //using the req properties like url and method to find out the url content and the way of communiction.i.e get post ...
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text\html');
    //creating a basic routing for each page you create and statuscode,meaning telling the client the well known error codes like 200 for success or 404 for unsuccessful error.
    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';

           console.log(path);
            res.statusCode=200;
            break;

        case '/aboutyou':
            res.statusCode=302;
            res.setHeader('Location','/about');
            
            res.end();
            break;
        default :
            path+='404.html';
           console.log(path);
            res.statusCode=404
            break;
    }
        fs.readFile(path,(err,data)=>{
       if (err){
           console.log('file unable to read!');
           res.end();
       }else{
                           res.write(data);
           res.end();
           }
          //instead we can use res.end(data),rather that call the write method in the 'res'.
       }
    
   );

});
server.listen(3000,'localhost',()=>{
    console.log('the server is up and listening....');
});


//function 
 