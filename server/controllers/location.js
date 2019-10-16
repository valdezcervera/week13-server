const { User_model, User_profile_model, Location_model, Batch_model, Friend_relations_model } = require('../models');

addLocation = async ctx => {
  const locationInfo = ctx.request.body;
  const LocationData = {
    country: locationInfo.country,
    province: locationInfo.province,
    city: locationInfo.city
  }
  try {
    const newLocation = await Location_model.create(LocationData);
    ctx.status = 201;
    ctx.body = newLocation;
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  };
};

updateUserLocation = async ctx => {
  const userInfo = ctx.request.body;
  const uid = ctx.params.uid;
  try {
    const user = await User_model.update(
      { user_location_id: userInfo.user_location_id },
      { where: { id: uid } }
    )
    ctx.status = 201
    ctx.body = user
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  };
}

gitHubLlinkedIn = async ctx => {
  const details = ctx.request.body;
  const uid = ctx.params.uid;
  try {
    const newDetails = await User_profile_model.update(
      {
        github: details.github,
        linkedin: details.linkedin
      },
      { where: { id: uid } }
    )
    ctx.status = 201
    ctx.body = newDetails
  } catch (error) {
    ctx.status = 500;
    ctx.body = error;
  };
}
// TODO: test instanceMethods approach
// const newUser = await Batch_model.create(newUserData)
// newUser.setLocation_model(10)
// await newUser.save()


module.exports = {
  addLocation,
  updateUserLocation,
  gitHubLlinkedIn
};