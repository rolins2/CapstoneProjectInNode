import express from "express";
import bodyParser from "body-parser";


const app = express();
const ttls =["Cattao"];
const blgs =["Leandro torsad was a substitution that changed liverpools game"];



app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.get("/",(req,res)=>{
  res.render("index.ejs",{ttls,blgs});
})



app.listen(port, () => {
  console.log(`Running on ${port}`);
});

app.use(express.static("public"));

app.get("/newBlog.ejs",(req,res)=>{
  res.render("newBlog.ejs");
})

app.post("/submit",(req,res)=>{
     ttls.push(req.body.blogsName);
     blgs.push(req.body.blogsContent);




     res.render("index.ejs",{ttls,blgs});
})


app.post("/blogsDel",(req,res)=>{
  console.log("delete blog are you sure ?");
  console.log(req.body);
  console.log(req.body.deleteBtns);
})
