const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')
const { MONGGO_DB } = require('./config')

const typeDefs = gql`
    type Query {
        sayHi : String!
    }
`
const resolvers = {
    Query: {
        sayHi: () => 'hello World'
    }
}

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
