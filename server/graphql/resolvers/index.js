const postResolver = require('./posts')
const userResolver = require('./users')
const commentsResolvers = require('./comments')

module.exports = {
    // panggil type post
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
        ...postResolver.Mutation,
        ...commentsResolvers.Mutation
    }
}