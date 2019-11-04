const Router = require('koa-router');
const router = new Router();
const { getUser } = require('../controllers/user');

router.get('/',getUser);

module.exports = router;