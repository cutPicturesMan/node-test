/**
 * Created by zhangzhen11 on 2018/6/25.
 */
/**********************/
// const fs = require('fs');
//
// process.on('uncaughtException', (err) => {
// 	a
// 	fs.writeSync(1, `捕获到异常：${err}\n`);
// });
//
// setTimeout(() => {
// 	console.log('这里仍然会运行。');
// }, 500);
//
// // 故意调用一个不存在的函数，应用会抛出未捕获的异常。
// nonexistentFunc();
// console.log('这里不会运行。');

/**********************/
// process.on('rejectionHandled', (p) => {
// 	console.log(123);
// })
//
// process.on('unhandledRejection', (reason, p) => {
// 	p.catch(()=>{});
//
// 	console.log('未处理的 rejection：', p, '原因：', reason);
// 	// 记录日志、抛出错误、或其他逻辑。
// });
//
// new Promise((resolve, reject) => {
// 	resolve(1);
// }).then((res) => {
// 	return reportToUser(JSON.pasre(res)); // 故意输错 `pasre`。
// }); // 没有 `.catch` 或 `.then`

/**********************/
// function SomeResource() {
// 	// 将 loaded 的状态设置为一个 rejected promise。
// 	this.loaded = Promise.reject(new Error('错误信息'));
// }
//
// const resource = new SomeResource();
// // resource.loaded 上没有 .catch 或 .then。

/**********************/
// // node --no-warnings process/process.js
// const events = require('events');
//
// process.on('warning', (warning) => {
// 	console.warn('DO not do that');   // 打印堆栈信息
// });
//
// events.defaultMaxListeners = 1;
//
// process.on('foo', () => {});
// process.on('foo', () => {});

/**********************/
// // Begin reading from stdin so the process does not exit.
// process.stdin.resume();
//
// process.on('SIGINT', () => {
// 	console.log('Received SIGINT.  Press Control-D to exit.');
// });

/**********************/
// console.log(process.argv);
// console.log(process.argv0);

/**********************/
// console.log(`Starting directory: ${process.cwd()}`);
//
// try{
// 	process.chdir('./tmp');
// 	console.log(`Now directory: ${process.cwd()}`);
// } catch(err){
// 	console.log(`chdir: ${err}`);
// }

/**********************/
// const startUsage = process.cpuUsage();
//
// const now = Date.now();
// while(Date.now() - now < 500);
//
// console.log(process.cpuUsage(startUsage));

/**********************/
// process.env.test = true;
// console.log(process.env);
//
// process.env.TEST = 1;
// console.log(process.env);
//
// process.env.test = undefined;
// console.log(process.env);

/**********************/
// // node --harmony script.js --version
// console.log(process.argv);
// console.log(process.execArgv);

/**********************/
console.log(process.execPath);













