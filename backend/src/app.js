const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');

const chats = require('./controllers/chats');
const greeting = require('./controllers/greeting');
const sensors = require('./controllers/sensors');

const app = module.exports = new Koa();

app.use(logger());

app.use(cors({ credentials: true }));
app.use(bodyParser());

const publicRouter = new Router({ prefix: '/api' });

publicRouter.post('/chats', chats.create);
publicRouter.get('/chats', chats.list);

publicRouter.post('/sensors', sensors.create);
publicRouter.get('/sensors', sensors.list);

publicRouter.get('/greeting', greeting.greet);

app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());
