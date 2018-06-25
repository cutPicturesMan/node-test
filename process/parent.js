/*********** 1 ***********/
const { spawn } = require('child_process');
const child = spawn('node', [`${__dirname}/child.js`]);

child.kill('SIGTERM');

/*********** 2 ***********/
// const { spawn } = require('child_process');
// const child = spawn('node', [`${__dirname}/child.js`], {
//   stdio: [0, 1, 2, 'ipc']
// });
//
// child.on('message', (msg) => {
//   console.log(msg);
// });
//
// child.send({ hello: 'world' });