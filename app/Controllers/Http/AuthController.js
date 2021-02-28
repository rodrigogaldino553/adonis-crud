'use strict'


const User = use('App/Models/User')

class AuthController {
    async register({ request, response }){
        console.log('It is on register controller')
        const data = request.only(['username', 'email', 'password'])
        const user = await User.create(data)

        return response.send(user)
    }

    async authenticate({ request, auth }){
        const { email, password } = await request.all()

        const token = await auth.attempt(email, password)
        return token
    }

}

module.exports = AuthController
