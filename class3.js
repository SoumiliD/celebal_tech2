const express = require("express");
const app = express();

let data = [];

app.get("/api/data", (req, res) => {
    res.status(200).json(data);
})

app.post("/api/data", (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).send("Data created");
})

app.put("/api/data/:id", (req, res) =>{
    const id = req.params.id;
    const updated = req.body;
    const index = data.findIndex((item) => item.id === id);
    if(index!==1)
    {
        data[index]=updated;
        res.status(200).send("Data updated");
    }
    else{
        res.status(404).send("Data not found")
    }
})

app.delete("/api/data/:id", (req, res) =>{
    const id = req.params.id;
    const index = data.findIndex((item) => item.id === id);
    if(index !== -1)
    {
        data.splice(index,1);
        res.status(200).send("Data deleted");
    }
    else{
        res.status(404).send("Data not found");
    }
})

const port = 3000;
app.listen(port,()=>{
    console.log("Server running");
})