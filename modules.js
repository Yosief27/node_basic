const os=require('os');
console.log(os.homedir(),os.platform());
//file system modules
const fs=require('fs');
//reading file /async function and does not block our line of codes 
fs.readFile('./doc/blog.txt',(err,data)=>{
    setTimeout(()=>{
        if(err){
        console.log(err)
    }
    console.log(data.toString());
    

    },3000)
        
})
console.log('Not blocking the code!')

//writing file
fs.writeFile('./doc/write.txt','this is writing example',(err)=>{
    if(err){
        console.log('Can not create or write to the file.')
    }
    console.log('Create a file and write on to it !');
})
//directories
//before creating a directory we need to check if it exists ,and there is a function inside the require.('fs') module which is sync function
if(!fs.existsSync('./images')){
    fs.mkdir('./images',(err)=>{
    if(err){
        console.log(err);

    }
    console.log('Image directory created.')
})

    
}else{
    fs.rmdir('./images',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Directory Deleted!')
    })
}
//deleting files
if(fs.existsSync('./doc/write.txt')){
    
    fs.unlink('./doc/write.txt',(err)=>{
        if(err){
            
        console.log(err)
        }
        
    console.log('File deleted successfully!')
    })
}