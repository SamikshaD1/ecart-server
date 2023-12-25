const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.header("content-type", "application/json");
    res.sendFile(path.resolve('data.json'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server listening on ${PORT}`));