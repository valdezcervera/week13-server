const { User_model, User_profile_model, Location_model, Batch_model, Friend_relations_model } = require('../models');
const bcrypt = require('bcrypt')
const saltRound = 10;

createProfile =  ctx => {
    const userInfo = ctx.request.body;
    bcrypt.hash(userInfo.password, saltRound).then((hashedPassword) => {
        return User_profile_model.create({
            birthdate: userInfo.birthdate,
            gender: userInfo.birthdate,
            picture_url: userInfo.picture_url,
            picture_big_url: userInfo.picture_big_url,
            picture_small_url: userInfo.picture_small_url,
            github: userInfo.github,
            linkedin: userInfo.linkedin,
            email: userInfo.email
        }, {
            include: [{
                model: User_model,
            }]
        }).then(user => {
            user.createUser_model({
                google_id: userInfo.google_id,
                user_name: userInfo.user_name,
                last_name: userInfo.last_name,
                first_name: userInfo.first_name,
                is_admin: userInfo.is_admin,
                password: hashedPassword
            }, {
                include: [{
                    model: Location_model,
                }]
            }).then(location => {
                location.createLocation_model({
                    country: userInfo.country,
                    province: userInfo.province,
                    city: userInfo.city
                })
            })
        })
            .then(() => {
                ctx.status = 201
                ctx.body = 'Profile has been created succesfully!'
            })
            .catch((error) => ctx.status(400).send(error));
    })
}


list = async ctx => {
    try {
        const listed = await User_profile_model.findAll({
            include: [{
                model: User_model,
                attributes: { exclude: ['password'] }
            }],
        })
        ctx.status = 201;
        ctx.body = listed;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}


listFull = async ctx => {
    try {
        const listed = await User_profile_model.findAll({
            include: [{
                model: User_model,
                include: [{ model: Location_model }]
            }]
        })
        ctx.status = 201;
        ctx.body = listed;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}


module.exports = {
    list,
    createProfile,
    listFull
};