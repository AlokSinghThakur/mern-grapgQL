const express = require('express')
const colors = require('colors')
require('dotenv').config()
const port = process.env.port || 3000
const { graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development'
}))


// app.use('/*', graphqlHTTP(
//     console.log("object")))
    

app.listen(port, console.log(`server is running on port ${port}`))