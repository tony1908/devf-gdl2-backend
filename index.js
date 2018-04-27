const express = require("express")
const app = express()
const graphqlHTTP = require("express-graphql")
const schema = require("./graphql")
const bcrypt = require("bcrypt") 
require('dotenv').config()
const cors = require('cors');

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL)

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
