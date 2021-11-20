const User = require('../../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    Mutations: {
        async register(_, { RegisterInput: { username, password, confirmPassword, email } }, context, info) {
            // todo validate
            // to make user dosnt already exist
            // hash password
        }
    }
}