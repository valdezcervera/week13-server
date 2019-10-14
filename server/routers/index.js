'use strict';

const Router = require('koa-router');
const router = new Router();
const multer = require('@koa/multer');
//multer options
const limits = 1024 * 1024 * 5; //5 Mb
const filterFileType = (ctx, file, cb) => {
    if (file.mimetype !== 'image/jpeg') {
        cb(new Error('Only jpeg files are accepted'), false)
    } else {
        cb(null, true)
    }
}
const upload = multer({ dest: 'uploads/', limits: limits, fileFilter: filterFileType })

// REQUIRE CONTROLLERS
const userController = require('../controllers/user');
const userAuth = require('../controllers/basic.auth')

// USER 
//authenticate user
router.get('/auth', userAuth.checkUser);
// user profile - create profile
router.post('/profile', userController.createProfile);
//user profile upload picture
router.post('/profile/photo/:uid', upload.single('photo'), userController.uploadPhoto)
// get a list with all profiles
router.get('/profiles/all', userController.listFull);
// get basic user info by uid
router.get('/user/:uid', userController.listUser);
// 
router.post('/api/addBatch', userController.addBatch)

module.exports = router;
