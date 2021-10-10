const express = require("express")

const app = express()

app.use(express.json())

const books = [
    {title: "Java Programming", id: 1},
    {title: "C# Programming", id: 2},
    {title: "NodeJs Programming", id: 3},
    {title: "Python Programming", id: 4}
]

app.get("/", (req, resp) => {
    resp.send("Welcome to study REST API with node JS")
})

app.listen(8085)
