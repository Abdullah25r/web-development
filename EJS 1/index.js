import express from "express"
const app = express();
const port = 3000;

let today = new Date();
    let weekday = today.getDay();
    let info1 = "It is a week day"
    let info2 = "It's time to hard work"
    if (weekday == 0 || weekday == 6) {
        info1 = "it is weekend"
        info2 = "It's time to relax"
      }



app.get("/",(req,res)=>{
    
    res.render("index.ejs", {
        dayType: info1,
        message: info2
    })
})

















app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})