import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs"
  )
});
let i =0
app.post("/submit", (req, res) => {
  let fName = req.body["fName"].length;
  let lName = req.body["lName"].length;
  let total = fName + lName
  
  res.render("index.ejs", {
    count: total
  })

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
