const { User_model, User_profile_model, Location_model, Batch_model, Friend_relations_model } = require('../models');
const merge = require('lodash.merge');

addBatch = async ctx => {
    const userInfo = ctx.request.body;
    const newUserData = {
    batch_number: ctx.request.body.batch_number,
    graduation_year: ctx.request.body.graduation_year,
    graduation_month: ctx.request.body.graduation_month,
    }
    try {
        const newUser = await Batch_model.create(newUserData)
        // newUser.setLocation_model(10)
        // await newUser.save()
        ctx.status = 201
        ctx.body = newUser
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

updateUserBatch = async ctx => {
    const userInfo = ctx.request.body;
    const uid = ctx.params.uid;
    try {
    const user = await User_model.update(
        { user_batch_id: userInfo.user_batch_id },
        { where: { id: uid } }
      )
        ctx.status = 201
        ctx.body = user
    } catch (error) {
        ctx.status = 500;
        ctx.body = error;
    }
}

// listAll = async ctx => {
//     try {
//     const batch = await Batch_model.findAll({
//         // include: [{ model:User_model }],
//     })
//     const user = await User_model.findAll()
//     const newObject = batch.map((batch) => user.map((user) => merge(user, batch)));
//         ctx.status = 201;
//         ctx.body = newObject;
//     } catch (error) {
//         ctx.status = 500;
//         ctx.body = error;
//     }
// }

module.exports = {
    addBatch,
    updateUserBatch,
    listAll,
};