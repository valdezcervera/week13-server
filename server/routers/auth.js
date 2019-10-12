// 'use strict';

// const Router = require('koa-router');
// const router = new Router();
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('../config/keys')
// const User = require('../models/user_model')

// passport.use(
//     new GoogleStrategy({
//         // options for the google strat
//         callbackURL: 'http://localhost:3000/auth/google/redirect',
//         clientID: keys.google.clientID,
//         clientSecret: keys.google.clientSecret
//     }, (accessToken, refreshToken, profile, cb) => {
//         //passport callback function
//         User.findOrCreate({ where: {google_id: profile.id}, 
//         defaults: {user_name: profile.user_name, password: profile.password} })
//         .then( cb(null, user))
//     })
// )

// router.get('/auth/google', passport.authenticate('google',{
//     scope:['profile']
// }));
// module.exports = router;
