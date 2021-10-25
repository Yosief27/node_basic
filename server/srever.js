const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //using the req properties like url and method to find out the url content and the way of communiction.i.e get post ...
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text\html');
    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            break;
        case '/about':
            path+='about.html';
            break;
        default :
            path+='404.html';
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
 