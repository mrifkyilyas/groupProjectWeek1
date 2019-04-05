const {
    OAuth2Client
} = require('google-auth-library')
const CLIENT_ID = "387378214052-oep07jo3d10p0nplnogtj7rovho5qlgb.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID)
const {
    User
} = require('../models/index')
const jwt = require('jsonwebtoken')


class Controller {
    static getIndex(req, res) {
        res.json('ini index')
    }

    static googleLogin(req, res) {
        console.log('masuk')
        let payload = null
        client
            .verifyIdToken({
                idToken: req.body.token,
                audience: CLIENT_ID
            })
            .then(ticket => {
                let payload = ticket.getPayload()
                // console.log('masuk')
                // console.log(User)
                // console.log('masuk == ticket')

                return Promise.all([User
                    .findOne({
                        email: payload.email
                    }), payload
                ])
            })
            .then(([user, payload]) => {
                // console.log('masuk===')
                if (!user) {
                    // console.log('akun baru')
                    // console.log(payload,'ini payload')
                    return User
                        .create({
                            name: payload.name,
                            email: payload.email,
                            password: `lalala`,
                            role: 'user'
                        })

                } else {
                    // console.log('udah ada')
                    return user
                }
            })
            .then(user => {
                // console.log('masuk,sini')
                // console.log(user._id, 'ini user untuk jwt')


                const token = jwt.sign({
                    id: user._id,
                    email:user.email
                },process.env.JWT_SECRET)
                console.log(token)
                // console.log('masuk == ')

                res.status(200).json({
                    // name: payload.name,
                    // email: payload.email,
                    // role: payload.role,
                    token: token
                })
                // console.log('masuk == ')
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = Controller