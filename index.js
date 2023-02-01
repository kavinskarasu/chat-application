const path =require('path');
const express=require('express');

const app=express();
const port =process.env.PORT||8080

const publicDirPath=path.join(__dirname,'./public');
app.use(express.static(publicDirPath))

app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
})