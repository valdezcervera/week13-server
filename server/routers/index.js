'use strict';

const Router = require('koa-router');
const router = new Router();

// const conf = require('./config.js');
const roleController = require('../controllers/role');
const userController = require('../controllers/user');

router.post('/api/role', roleController.addRole);
router.get('/api/role', roleController.listRoles);
router.get('/api/role:id', roleController.getById);
router.post('/api/role/add_user', roleController.addUser);

// USER 
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.removeUser);
router.post('/api/profile', userController.addUsserWithProfileAndRoles);

module.exports = router;
