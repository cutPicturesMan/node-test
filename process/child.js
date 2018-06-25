/*********** 1 ***********/
console.log(process);

process.on('SIGTERM', (data)=>{
	console.log(1);
	setTimeout(()=>{
		console.log(process.kill(0));
	}, 0)

	process.exit(0);
});

/*********** 2 ***********/
// process.on('message', (msg) => {
// 	process.exit(1);
// 	msg.hello = msg.hello.toUpperCase();
//   process.send(msg);
// });
//
// process.on('beforeExit', (data)=>{
// 	console.log(`子进程即将退出：${data}`);
// 	setTimeout(()=>{
// 		console.log('退出前写入新事件');
// 	}, 0);
// });
//
// process.on('exit', (data)=>{
// 	console.log(`子进程退出：${data}`);
// 	setTimeout(()=>{
// 		console.log('该函数不会被执行');
// 	}, 0);
// });
