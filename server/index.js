const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

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

server.listen({ port: 5000 })
    .then(res => {
        console.log(`server running at ${res.port}`)
    })