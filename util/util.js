/**
 * Created by zhangzhen11 on 2018/7/9.
 */
// const util = require('util');
//
// async function fn() {
// 	return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);
//
// callbackFunction((err, ret) => {
// 	if (err) throw err;
// 	console.log(ret);
// });

/**************************************/
// const util = require('util');
//
// function fn() {
// 	return Promise.reject(null);
// }
// const callbackFunction = util.callbackify(fn);
//
// callbackFunction((err, ret) => {
// 	// When the Promise was rejected with `null` it is wrapped with an Error and
// 	// the original value is stored in `reason`.
// 	console.log(err && err.hasOwnProperty('reason') && err.reason === null);  // true
// });

/**************************************/
// const util = require('util');
// const debuglog = util.debuglog('foo');
//
// debuglog('hello from foo [%d]', 123);

/**************************************/
// const util = require('util');
//
// let obsoleteFunction = exports.obsoleteFunction = util.deprecate(() => {
// 	// Do something here.
// }, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
// obsoleteFunction();

/**************************************/
// const util = require('util');
// const Time = new Date();
//
// console.log(util.format('当前时间是%d年%d月%d日 %d时%d分%d秒', Time.getFullYear(), Time.getMonth() + 1, Time.getDate(), Time.getHours(), Time.getMinutes(), Time.getSeconds()));
//
// console.log(util.format('%s: %s', 1, 'abc', {name: 'z'}));

/**************************************/
const util = require('util');
const obj = {
	name: 'zz',
	age: 27
}

console.log(util.inspect(obj, {colors: true}));
console.log(JSON.stringify(obj));





