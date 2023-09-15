const express = require("express")

const PORT = process.env.PORT || 8080

const app = express()

app.get("/", (req, res) => {
  res.send("Hello Node JS + PostgreSQL!!!")
})

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`))
