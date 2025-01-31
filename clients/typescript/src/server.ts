import * as Koa from 'koa';
import * as Router from 'koa-router';
import bodyParser = require("koa-bodyparser");
import { sayHello } from './calc';

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = sayHello();
});

router.post('/feedback', async (ctx) => {
    console.log('Feedback received', ctx.request.body);
});

router.post('/order', async (ctx) => {
    // your code here
});

app.use(router.routes());

const port = process.env.PORT || '8080';
app.listen(port);

console.log(`Server running on port ${port}`);

