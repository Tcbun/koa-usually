class User {
    async getUser(ctx){
        ctx.body = 'User'
    }
}

module.exports = new User();