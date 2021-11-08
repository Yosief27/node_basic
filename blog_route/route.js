const express=require('express');
const routeBlog=express.Router();
const controller=require('../controllers/blogController');

routeBlog.get('/', controller.blog_index );

routeBlog.get('/create',controller.blog_create_get);    
routeBlog.post('/add',controller.blog_create_post)
routeBlog.get('/:id',controller.blog_detail);
routeBlog.delete('/:id',controller.blog_delete);  
routeBlog.get('/update/:id',controller.blog_create_pop); 

routeBlog.put('/update',controller.blog_update);
module.exports=routeBlog;