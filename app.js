const express=require('express');
const mongoose=require('mongoose');
const Blog=require('./models/blog');



const app=express();

//url to connect to mongo db
const user_url='mongodb+srv://Yosief:yosief2127@Cluster0.ekh5p.mongodb.net/Node_db?retryWrites=true&w=majority'
mongoose.connect(user_url,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    app.listen(3000,()=>{
        console.log('severing it listening............')
    });
}).catch((err)=>{
    console.log('error no connection.')
});
//register view engine
app.set('view engine','ejs');
//if you need to set for other location beside the use views folder ,we can specifiy with 
//app.set('views','myviews');


/*
app.get(('/main'),(req,res)=>{
    res.send('<p>this is the home page </p>');


});
app.get('/about',(req,res)=>{
    res.send('<p>this is about page!</p>')
})*/
//basic middle ware to access public folder
app.use(express.static('./public'));
//basic middle ware logged in request
app.use((req,res,next)=>{
    console.log('new request is made');
    console.log('host',req.hostname);
    console.log('path',req.path);
    console.log('method',req.method);
    //function which will help us to move on once we get the  request details.
    next();
})
app.get(('/add_blog'),(req,res)=>{
    const add_blog=new Blog({
        title:'node js1',
        
        snippet:'node js1',
        body:'node js1',
    })
    add_blog.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    })
})
app.get(('/'),(req,res)=>{
    const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    res.render('index',{title:'Home',blogs});


});
app.get('/about/create',(req,res)=>{
    
    res.render('create',{title:'Create a new blog'});
})
app.get('/users',(req,res)=>{
    console.log(req.url);
    const data=['josi','yoni','dawit'];
    res.render('users',{title:'Create a new blog',data});
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