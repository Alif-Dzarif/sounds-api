const { User } = require('../models')
const { sequelize } = require('../models')


class UserController {
  static async signup(req, res, next) {
    try {
      const { username, password } = req.body
      
      if(!username || !password) throw {name: 'USER_ISSUE'}
      else {
        let data = User.create()

      }
    } catch (error) {
      next(err)
    }
  }
}

module.exports = UserController;