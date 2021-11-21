const postResolver = require('./posts')
const userResolver = require('./users')
const commentsResolvers = require('./comments')

module.exports = {
    Query: {
        ...postResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
        ...postResolver.Mutation,
        ...commentsResolvers.Mutation
    }
}