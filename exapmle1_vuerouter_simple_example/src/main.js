
var App = require('./App');
/* eslint-disable no-new */
var Vue = require('vue');
var VueRouter = require('vue-router');
var routerMap = require('./router');



Vue.use(VueRouter);
var router = new VueRouter({hashbang:false,history: true}); //去掉了#！

router.map(routerMap);
router.start(App, 'app');