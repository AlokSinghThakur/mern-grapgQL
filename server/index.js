const express = require('express')
require('dotenv').config()
const port = process.env.port || 3000
const { graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const app = express()

app.use('/graphql', graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development'
}))


// app.use('/*', graphqlHTTP(
//     console.log("object")))
    

app.listen(port, console.log(`server is running on port ${port}`))