const { Role, User } = require('../models');

listRoles = async ctx => {
    try {
        const listed = Role.findAll()
        ctx.status = 201;
        ctx.body = listed;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    };
};

addRole = async ctx => {
    const data = ctx.request.body.role_name
    try {
        Role.create({
            role_name: data,
        })
        ctx.status = 201;
        ctx.body = data;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    };
};

getById = async ctx => {
    try{
        const roleById = Role.findById(ctx.params.id, {
            include: [{
                model: User,
                as: 'users'
            }],
        })
        ctx.status = 201;
        ctx.body = roleById;
    }catch (error) {
        ctx.status = 500;
        ctx.body = error + 'Role Not Found';
    }
}

  addUser = ctx => {
    return Role
      .findById(ctx.request.body.role_id, {
        include: [{
          model: User,
          as: 'users'
        }],
      })
      .then((role) => {
        if (!role) {
          return ctx.status(404).send({
            message: 'Role Not Found',
          });
        }
        User.findById(ctx.request.body.role_id).then((course) => {
          if (!course) {
            return ctx.status(404).send({
              message: 'User Not Found',
            });
          }
          role.addUser(course);
          return ctx.status(200).send(role);
        })
      })
      .catch((error) => ctx.status(400).send(error));
  };
// addUser = ctx => {
//     try {
//         const foundUser = Role.findById(ctx.body.role_id, {
//             include: [{
//               model: User,
//               as: 'users'
//             }],
//           })
//           ctx.status(201).send({message: 'Role Not Found',});
//           ctx.body = foundUser;
//     } catch (error) {}
// }


//   update(req, res) {
//     return Role
//       .findById(req.params.id, {
//         include: [{
//           model: User,
//           as: 'users'
//         }],
//       })
//       .then(role => {
//         if (!role) {
//           return res.status(404).send({
//             message: 'Role Not Found',
//           });
//         }
//         return role
//           .update({
//             role_name: req.body.role_name || classroom.role_name,
//           })
//           .then(() => res.status(200).send(role))
//           .catch((error) => res.status(400).send(error));
//       })
//       .catch((error) => res.status(400).send(error));
//   },

//   delete(req, res) {
//     return Role
//       .findById(req.params.id)
//       .then(role => {
//         if (!role) {
//           return res.status(400).send({
//             message: 'Role Not Found',
//           });
//         }
//         return role
//           .destroy()
//           .then(() => res.status(204).send())
//           .catch((error) => res.status(400).send(error));
//       })
//       .catch((error) => res.status(400).send(error));
//   },
// };

module.exports = {
    addRole,
    listRoles,
    getById,
    addUser
};