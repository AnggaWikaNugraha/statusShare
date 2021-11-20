const postResolver = require('./posts')

module.exports = {
    Query: {
        ...postResolver.Query
    }
}