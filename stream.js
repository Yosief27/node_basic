//working with streams
const fs=require('fs');
const readStream=fs.createReadStream('./doc/blog.txt',{encoding:'utf-8'});

const writeStream=fs.createWriteStream('./doc/blog_copy.txt');
readStream.on('data',(chunk)=>{
    console.log('************chunk*********')
    console.log(chunk);
    writeStream.write('\nNew Line\n');

    writeStream.write(chunk);

})