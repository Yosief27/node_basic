const Blog=require('../models/blog');
//creating a separate control to make the project more cleaner

const blog_index=(req,res)=>{
  Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'home',blogs:result});
    }).catch((err)=>{
        console.log(err)
    })

};

const blog_create_get=(req,res)=>{
    
    res.render('create',{title:'Create a new blog',data:''});
};
const blog_create_pop=(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=>{
        console.log(result);
    res.render('create',{title:'Update project' ,data:result})})
    .catch((err)=>{console.log(err)})
    
};
const blog_create_post=(req,res)=>{
    
    const blog=new Blog(req.body);
    blog.save().then((result)=>{
        res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
};


const blog_detail=(req,res)=>{
    const id=req.params.id;

    Blog.findById(id)
    .then((result)=>{
     res.render('detail', {title:'project detail',blog:result});
    }).catch((err)=>{
        console.log(err)
    })
};

const blog_delete=(req,res)=> {
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
}
//unfinished blog_update
const blog_update=(req,res)=> {
    const id=req.params.id;
    const blog_update=new Blog(req.body)
    Blog.findByIdAndUpdate(id,blog_update)
    .then(result => {
      res.render( 'detail', {title:'updated project',blog: result});
    })
    .catch(err => {
      console.log(err);
    });
}




module.exports={
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_create_pop,
    blog_update
}