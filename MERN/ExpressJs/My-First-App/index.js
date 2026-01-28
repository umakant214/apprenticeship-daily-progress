import express from "express";
const app=express();
const PORT=8000;
app.get("/user",(req,res)=>{
res.send("get go raha hai")
})


//////////////////////

app.use(express.json());
app.post("/create",(req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const age=req.body.age;
    res.send({name,age})
})

/////////////////////////////////
app.put("/update",(req,res)=>{
    res.send("Put chal raha hai")
})

const createController=(req,res)=>{
    const result=[{
        name:"Umakant",
        method:"delete",
        code:200
    }]
    res.status(200).send(result)
}

app.delete("/delete",createController)



app.listen(PORT,()=>{ 
    console.log("server sdkfjwl ksa.fka running ............");
    
})