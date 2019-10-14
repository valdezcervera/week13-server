const Koa = require('koa');
const bodyParser = require('koa-body');
const { KoaReqLogger } = require('koa-req-logger');
const cors = require('koa-cors');
const sessionMdware = require('./session.middleware');
const db = require ('./models/index')
const router = require('./routers');

// Instantiate app & logger. Set port to listen  
const app = new Koa();
const logger = new KoaReqLogger();
const PORT = process.env.PORT || 5000;

// middlewares

// app.use(logger.getMiddleware());
app.use(cors());
app.use(bodyParser());
app.use(sessionMdware);
app.use(router.routes());

(async ()=>{
    //call sequelize.sync an let it do its magic ;) 
    await db.sequelize.sync()
    .then(() => {
        console.log('DB connection successfull!.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      }); 
    //eslint-disable-next-line no-console
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}✫*ﾟ･ﾟ｡.☆🛰*｡･ﾟ✫*️`);
    });
  })();



module.exports = app;
