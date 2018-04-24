const express = require("express")
const app = express()
const graphqlHTTP = require("express-graphql")
const schema = require("./graphql")
require('dotenv').config()

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL)

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.get("/", (req, res, next) => {
    res.send("server working")
})

app.listen(process.env.PORT, () => {
    console.log(" Server is running");    
})
