const express = require("express")
const app = express()
const port = process.env.PORT || 8080

app.post("/", (req, res) => {
    return res.status(200).json({success: true})
})

//hello

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})