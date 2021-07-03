const http=require('http');
//http k import kore nilam

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
       res.statusCode=200;
       return res.end('<h1> Hello Anik </h1>');
    }else{
        res.statusCode=404;
        return res.end('<h1>Page not found</h1>');
    }
    /*
      Eikhane amra check korlam jdi Root Route('/') hoia talhe
      tahole return korbe "Hello World" Otherwise return korbe 
      "Page not found"
    */

});
/*
   http.createServer() ekta server return korbe jeta const server
   akera deya hoice. http.createServer() Argument akera ekta 
   function nibe jeta (req,res)=>{}
*/

server.listen(4000, ()=>{
    console.log('Server is running on port 4000');
});
/*
   server listen korbo jekono ekta port e. Jamon eikhane 4000 
   port e server listen korchi.
*/