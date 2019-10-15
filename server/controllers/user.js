const { User_model, User_profile_model, Location_model, Batch_model, Friend_relations_model } = require('../models');
const bcrypt = require('bcrypt')
const saltRound = 10;

createProfile = async ctx => {
    const userInfo = ctx.request.body;
    const hashedPassword = await bcrypt.hash(userInfo.password, saltRound);
    const newProfile = {
        birthdate: userInfo.birthdate,
        gender: userInfo.birthdate,
        picture_url: userInfo.picture_url,
        picture_big_url: userInfo.picture_big_url,
        picture_small_url: userInfo.picture_small_url,
        github: userInfo.github,
        linkedin: userInfo.linkedin,
        email: userInfo.email,
        User_model: {
            user_name: userInfo.user_name,
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            is_admin: userInfo.is_admin,
            password: hashedPassword,
            Location_model: {
                country: userInfo.country,
                province: userInfo.province,
                city: userInfo.city,
            },
            Batch_model: {
                batch_number: userInfo.batch_number,
                graduation_year: userInfo.graduation_year,
                graduation_month: userInfo.graduation_month,
            },
        },
    }
    try {
        const newUser = await User_profile_model.create(newProfile, { include: [{
            model: User_model,
            include: [ Location_model, Batch_model ] }] })
        ctx.status = 201
        ctx.body = newUser
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }

}

listUser = async ctx => {
    const uid = ctx.params.uid;
    try {
        const user = await User_model.findOne(
            { where: { id: uid } ,
              include: [ Batch_model, Location_model ],
              attributes: { exclude: ['password'] } } 
        )
        ctx.status = 201;
        ctx.body = user;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

listAll = async ctx => {
    try {
        const listed = await User_profile_model.findAll({
            include: [{
                model: User_model,
                include: [ Location_model, Batch_model ],
                attributes: { exclude: ['password'] }
            }]
        })
        ctx.status = 201;
        ctx.body = listed;
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

uploadPhoto = async ctx => {
    const uid = ctx.params.uid;
    const path = ctx.file.path;
    try {
        const user = await User_profile_model.update(
            { picture_url: path },
            { where: { id: uid } }
          )
        ctx.status = 201;
        ctx.body = 'Photo uploaded succesfully';
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    };
}

module.exports = {
    listUser,
    createProfile,
    listAll,
    uploadPhoto
};


