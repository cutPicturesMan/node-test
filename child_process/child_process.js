/*********************************/
// const child_process = require('child_process');
// const util = require('util');

// // 开启子进程，将source文件夹的内容复制到target文件夹
// function copy(source, target, callback){
//   child_process.exec(
//     util.format('cp -r %s/* %s', source, target),
//     callback
//   )
// }
//
// copy('test', 'test2', function(err, stdout, stderr){
//   console.log(err, stdout, stderr);
// });

/*********************************/
// const { exec } = require('child_process');
// exec('cat *.js bad_file | wc -l', (err, stdout, stderr) => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
//
// 	console.log(`stdout: ${stdout}`);
// 	console.log(`stderr: ${stderr}`);
// })

/*********************************/
// const cp = require('child_process');
// const util = require('util');
// const exec = util.promisify(cp.exec);
//
// async function lsExample(){
// 	let { stdout, stderr } = await exec('ls');
//
// 	console.log(`stdout: ${stdout}`);
// 	console.log(`stderr: ${stderr}`);
// }
//
// lsExample();

/*********************************/
// const { execFile } = require('child_process');
// execFile('node', ['--version'], (err, stdout, stderr) => {
// 	if(err){
// 		console.log(err);
// 		return;
// 	}
//
// 	console.log(stdout);
// })

/*********************************/
// const cp = require('child_process');
// const util = require('util');
// const execFile = util.promisify(cp.execFile);
//
// async function ef(){
// 	let { stdout, stderr } = await execFile('node', ['--version']);
//
// 	console.log(`stdout: ${stdout}`);
// 	console.log(`stderr: ${stderr}`);
// }
//
// ef();

/*********************************/
// const { spawn } = require('child_process');
// const util = require('util');
// const node = spawn('node', ['test/a.js']);
//
// node.stdout.on('data', (data)=>{
//   console.log(`stdout: ${data}`);
// });
//
// node.stderr.on('data', (data)=>{
//   console.log(`stderr: ${data}`);
// });
//
// node.on('close', (code)=>{
//   console.log(`子进程退出码: ${code}`);
// });

/*********************************/
// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);
//
// ls.stdout.on('data', (data)=>{
//   console.log(`stdout: ${data}`);
// });
//
// ls.stderr.on('data', (data)=>{
//   console.log(`stderr: ${data}`);
// });
//
// ls.on('close', (code)=>{
//   console.log(`子进程退出码: ${code}`);
// });

/*********************************/
// const { spawn } = require('child_process');
// const grep = spawn('grep', ['ssh']);
// const ps = spawn('ps', ['ax']);
//
// ps.stdout.on('data', (data)=>{
//   // console.log(`ps stdout: ${data}`);
//   console.log(`ps stdout:`);
// });
//
// ps.stderr.on('data', (data)=>{
//   console.log(`ps stderr: ${data}`);
// });
//
// ps.on('close', (code)=>{
//   if(code != 0){
//     console.log(`ps 子进程退出码: ${code}`);
//   }
//   grep.stdin.end();
// });
//
// grep.stdout.on('data', (data)=>{
//   console.log(`grep stdout: ${data}`);
// });
//
// grep.stderr.on('data', (data)=>{
//   console.log(`grep stderr: ${data}`);
// });
//
// grep.on('close', (code)=>{
//   console.log(`grep 子进程退出码: ${code}`);
// });

/*********************************/
// const { spawn } = require('child_process');
// const subprocess = spawn('bad_command');
//
// subprocess.on('error', (err)=>{
//   console.log(`启动子进程失败: ${err}`);
// });

