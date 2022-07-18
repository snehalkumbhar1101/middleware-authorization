const express = require("express");
const app = express();
const {authPage,authCourse} = require("./middleware");

app.use(express.json());



app.get("/home",(req,res)=>{
    res.json("HOME PAGE")

})

app.get("/coures/grades",authPage(["teacher","admin"]),(req,res)=>{
    res.json({
        python :100,
        java: 80,
        angular:60,
        nodejs: 53,
    });
});


app.get("/coures/:number",authCourse,(req,res)=>{
    const courseNumber = req.params.number;
    res.json(`You Have Permission To see Course ${courseNumber}`)
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

