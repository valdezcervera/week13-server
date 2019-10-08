const { User, UserRole, Profile, Role } = require('../models');

list = async ctx => {
    try {
        const listed = await User.findAll({
            include: [{
                model: Profile,
                as: 'profile'
            },
            {
                model: Role,
                as: 'roles'
            }],
        })
        ctx.status = 201;
        ctx.body = listed;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

getById = ctx => {
    try {
        const userById = User.findById(ctx.request.params.id, {
            include: [{
                model: Profile,
                as: 'profile'
            },
            {
                model: Role,
                as: 'roles'
            }],
        })
        ctx.status = 201
        ctx.body = userById
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    };
}

add = ctx => {
    console.log(User.create)
    try {
        const userAdd = ctx.request.body;
        User.create({
            name: userAdd.name,
            password: userAdd.password
        })
        ctx.status = 201
        ctx.body = userAdd
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
        console.log(error)
    }
}

removeUser = ctx => {
    try {
        const userToDelete = User.findById(ctx.request.params.id)
        userToDelete.destroy()
        ctx.status = 201
        ctx.body = userToDelete + 'has been destroyed!'
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

update = ctx => {
    try {
        const UpdateUser = User.findById(ctx.request.params.id, {
            include: [{
                model: Profile,
                as: 'profile'
            },
            {
                model: Role,
                as: 'roles'
            }],
        })
        UpdateUser.update({
            username: ctx.request.body.username || user.username,
            password: ctx.request.body.password || user.password,
        })
        ctx.status = 201
        ctx.body = UpdateUser + 'has been updated'

    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

module.exports = {
    list,
    getById,
    add,
    removeUser,
    update
};