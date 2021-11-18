const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose')
const { MONGGO_DB } = require('./config')

const Post = require('./models/Post');
const User = require('./models/User');

const typeDefs = gql`
    type Post{
        id : ID!
        body : String!
        createdAt : String!
        username : String!
    }
    type Query {
        getPosts : [Post]
    }
`;

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find()
                return posts
            } catch (error) {
                throw new Error(error)
            }
        }
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
