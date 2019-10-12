const bcrypt = require('bcrypt');
const { User_model, User_profile_model, Location_model } = require('../models');
const db_controllers = require('../controllers/user')

const checkUser = async (ctx) => {
    const basic = ctx.headers.authorization.split(' ');
    if (basic.length < 2 && basic[0] !== 'Basic') {
      throw new Error('Missing basic authentication header');
    }
    // decode base64
    const [username, password] = Buffer.from(basic[1], 'base64').toString('utf-8').split(':');
    const user = await User_model.findOne({
        where: {user_name: username},
    })
    const discover = await User_profile_model.findAll({
      include: [{
          model: User_model,
          include: [{ model: Location_model }]
      }]
  })
    // const discover = db_controllers.listFull()
    console.log(discover)
    // check if user exists and if password correct
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        ctx.status = 200;
        ctx.body = JSON.stringify(discover);
        console.log(user.user_name)

        // Add session cookie
        ctx.session = { user };
      } else {
        ctx.status = 401;
        ctx.body = {
          fail: 'password',
        };
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        fail: 'username',
      };
    }
  };

  module.exports ={
    checkUser
  }
