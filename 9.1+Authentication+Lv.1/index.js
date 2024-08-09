import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "bhatti",
  port: 5432,
})
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
const email = req.body.username
const password = req.body.password
 db.query("INSERT INTO users (email, password)  VALUES ($1, $2);",[email,password]);
 res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1",[req.body.username]);
  const users = result.rows[0];
  // console.log(result);
  console.log(users);
  
  const storedPassword = req.body.password
  if (storedPassword === users.password) {
    res.render("secrets.ejs");
  }else{
    res.redirect("/login");
  }
 });
 
 


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
