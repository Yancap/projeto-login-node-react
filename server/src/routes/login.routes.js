const { Router } = require('express')
const loginRoutes = Router()

const LoginController = require('../controller/LoginController')
const loginController = new LoginController()

const validationRequestLogin = require('../middlewares/ValidationRequestLogin')

loginRoutes.post('/', validationRequestLogin, loginController.show)
loginRoutes.put('/user', loginController.update)


module.exports = loginRoutes