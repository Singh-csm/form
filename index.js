const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    fs.readFile("form.html", "utf8", (err, data)=>{
        if(err){ console.log(err)
        res.status(500).send("Error reading index")}
        else {
            res.send(data)
        }
    })
})


app.listen(port, ()=> console.log(`Listening on ${port}`))