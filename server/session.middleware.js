const uuid = require('uuidv4').default;

const sessions = {};
const session = async (ctx, next) => {
  const sid = ctx.cookies.get('sid');
  ctx.session = sid && sessions[sid];
  // eslint-disable-next-line
  ctx.session && console.log('session loaded', ctx.session);
  await next();
  if (ctx.session && !ctx.session.id) {
    ctx.session.id = uuid();
    ctx.cookies.set('sid', ctx.session.id);
    sessions[ctx.session.id] = ctx.session;
  }
};

module.exports = session;
