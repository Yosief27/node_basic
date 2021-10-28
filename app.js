const express=require('express');

const app=express();
//register view engine
app.set('view engine','ejs');
//if you need to set for other location beside the use views folder ,we can specifiy with 
//app.set('views','myviews');

app.listen(3000,()=>{
    console.log('severing it listening............')
});
/*
app.get(('/main'),(req,res)=>{
    res.send('<p>this is the home page </p>');


});
app.get('/about',(req,res)=>{
    res.send('<p>this is about page!</p>')
})*/
app.get(('/'),(req,res)=>{
    const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    res.render('index',{title:'Home',blogs});


});
app.get('about/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'about'});
});
app.get('/about_us',(req,res)=>{
    res.redirect('/about');
});
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})