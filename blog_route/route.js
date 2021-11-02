const express=require('express');
const routeBlog=express.Router();
const Blog=require('../models/blog');


routeBlog.get('',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'home',blogs:result});
    }).catch((err)=>{
        console.log(err)
    })
})

routeBlog.get('/create',(req,res)=>{
    
    res.render('create',{title:'Create a new blog'});
})
routeBlog.post('/add',(req,res)=>{
    
    const blog=new Blog(req.body);
    console.log(req.body);
    blog.save().then((result)=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
})
routeBlog.get('/:id',(req,res)=>{
    const id=req.params.id;

    Blog.findById(id)
    .then((result)=>{
     res.render('detail', {title:'blog detail',blog:result});
    }).catch((err)=>{
        console.log(err)
    })
})
routeBlog.delete('/:id',(req,res)=> {
    
    const id=req.params.id;
    console.log(id)
    Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
})
module.exports=routeBlog;