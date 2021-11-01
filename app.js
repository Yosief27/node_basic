const express=require('express');


const app=express();
//register view engine
app.set('view engine','ejs');
//if you need to set for other location beside the use views folder ,we can specifiy with 
//app.set('views','myviews');

app.listen(3000,()=>{
    console.log('severing it listening............')
});

app.use(express.static('source'));
/*
app.get(('/main'),(req,res)=>{
    res.send('<p>this is the home page </p>');


});
app.get('/about',(req,res)=>{
    res.send('<p>this is about page!</p>')
})*/
//uses to get the basic authontication function and simplar 
app.use((req,res,next)=>{
    console.log('host',req.hostname);
console.log('path',req.url);
    console.log('method',req.method)
    next();
});

app.get(('/'),(req,res)=>{
        const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    res.render('index',{title:'Home',blogs});


});
app.get('about/create',(req,res)=>{
    
    console.log('path',req.url);
    console.log('method',req.method)
    res.render('create',{title:'Create a new blog'});
})
app.get('/about',(req,res)=>{

    console.log('path',req.url);
    console.log('method',req.method)
    res.render('about',{title:'about'});
});
app.get('/about_us',(req,res)=>{
    res.redirect('/about');
});
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})