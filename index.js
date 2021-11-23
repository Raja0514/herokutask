const express=require('express')

const app =express();

app.get("/",(req,res)=>{

    res.send("working........")
})

app.listen(process.env.PORT||3002,()=>{

    console.log("server running at port 3002")
    
})

