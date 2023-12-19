import express from "express";
const app = express();

const port = 3000;
app.get("/",(req,res)=>{
  res.render("index.ejs")
})

app.listen(port, () => {
  console.log(`Running on ${port}`);
});

app.use(express.static("public"));
