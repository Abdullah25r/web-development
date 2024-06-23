import express from "express";
const port = 3000;
const app = express();
app.listen(port, (req,res)=>{
    console.log(`Server is listen on the port ${port}.`);
});
app.post("/register", (req,res)=>{
    res.sendStatus(201);
})
app.put("/user/abdullah", (req,res)=>{
    res.sendStatus(200);
})
app.patch("/user/abdullah", (req,res)=>{
    res.sendStatus(200);
})
app.delete("/user/abdullah", (req,res)=>{
    res.sendStatus(200);
})
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to my API</h1>");
})