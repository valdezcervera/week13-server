'use strict';

const Router = require('koa-router');
const router = new Router();

// const conf = require('./config.js');
const userController = require('../controllers/user');
const userAuth = require('../controllers/basic.auth')

// USER 
router.get('/api/auth', userAuth.checkUser);

router.post('/api/profile', userController.createProfile);
router.get('/api/user', userController.list);
router.get('/api/user/full', userController.listFull);
// router.put('/api/user/:id', userController.update);
// router.delete('/api/user/:id', userController.removeUser);

module.exports = router;
