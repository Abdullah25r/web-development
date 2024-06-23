
import express from "express"
const app = express()
const port = 3000

let fruits = ["Apple", "Mango", "Banana", "Peach"]

app.get("/", (req,res)=>{
    res.render("index.ejs", {
        fruits: fruits
    })
})

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})