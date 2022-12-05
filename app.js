const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/views/Home.html"))
})

app.get("/babbage",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Charles_Babbage.html"))
})

app.get("/berners-lee",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Berners_Lee.html"))
})

app.get("/clarke",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Arthur_C_Clarke.html"))
})

app.get("/hamilton",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Margaret_Hamilton.html"))
})

app.get("/hopper",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Grace_Murray_Hopper.html"))
})

app.get("/lovelace",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Ada_Lovelace.html"))
})

app.get("/turing",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/Alan_Turing.html"))
})


app.listen(3030, () => {
    console.log("servidor levantado")
})