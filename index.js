const express=require('express')

const app =express();

app.get("/",(req,res)=>{

    res.send("my first server running....")
})

app.listen(process.env.PORT||3002,()=>{

    console.log("server running at port 3002")
    
})

