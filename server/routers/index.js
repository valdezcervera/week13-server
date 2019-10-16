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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg')
  }
})

const upload = multer({ storage: storage, limits: limits, fileFilter: filterFileType })

// REQUIRE CONTROLLERS
const userController = require('../controllers/user');
const userAuth = require('../controllers/basic.auth');
const batchController = require('../controllers/batch');
const locationController = require('../controllers/location')

// USER 
//authenticate user
router.get('/auth', userAuth.checkUser);
// user profile - create profile
router.post('/profile', userController.createProfile);
//user profile upload picture
router.post('/profile/photo/:uid', upload.single('photo'), userController.uploadPhoto);
// get a list with all profiles
router.get('/profiles/all', userController.listAll);
// get basic user info by uid
router.get('/user/:uid', userController.listUser);
// remove user by id
router.get('/remove/user/:id', userController.removeUserID);

// BATCH
// add batch
router.post('/addBatch', batchController.addBatch);
// update batch
router.post('/addBatchUser/:uid', batchController.updateUserBatch);

// LOCATION
// add Location
router.post('/addLocation', locationController.addLocation);
// update user Location
router.post('/updateLocation/:uid', locationController.updateUserLocation);
// change git & linked
router.post('/updateGitLink/:uid', locationController.gitHubLlinkedIn);
module.exports = router;
