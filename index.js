import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.get("/",(req,res)=>{
  res.render("index.ejs")
})

app.listen(port, () => {
  console.log(`Running on ${port}`);
});

app.use(express.static("public"));

app.get("/newBlog.ejs",(req,res)=>{
  res.render("newBlog.ejs");
})

app.post("/submit",(req,res)=>{
     console.log(req.body);
})