const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')
const { MONGGO_DB } = require('./config')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`mongo connected`)
    return server.listen({ port: 5000 })
}).then((res) => {
    console.log(`server running at ${res.port}`)
})
