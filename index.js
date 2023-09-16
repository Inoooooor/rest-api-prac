const express = require("express")

const userRouter = require("./routes/user.routes")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", userRouter)

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`))
