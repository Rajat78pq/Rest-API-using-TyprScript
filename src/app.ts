import express from 'express';

const app = express()
const PORT = 3000

app.listen(PORT, ()=>{
    console.log("🚀 Listen on port 3000");
})

app.get("/", (req, res)=>{
    res.send("Hello I am TypeScript😁")
})