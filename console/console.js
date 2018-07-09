// console.log('hello');
// console.log('hello %s', 'world');
// console.log('hello %d', '123');
// console.error(new Error('错误信息'));

/**********************************/
// console.assert(true, 'does nothing');
// // OK
// console.assert(false, 'Whoops %s work', 'didn\'t', 'a', 'b');

// console.dir({
// 	data: {
// 		list: [{
// 			id: 1,
// 			name: 'first'
// 		}, {
// 			id: 2,
// 			name: 'second'
// 		}]
// 	}
// }, {
// 	depth: null,
// 	colors: true
// });

// const code = 5;
// console.error('error #%d', code);
// console.error('error', code);

// console.table([{name: '小明', age: 26}, {name: '小红', age: 27}]);
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

/**********************************/
// const { Console } = console;
// const fs = require('fs');
//
// const output = fs.WriteStream(`${__dirname}/stdout.log`);
// const errorOutput = fs.WriteStream(`${__dirname}/stderr.log`);
//
// const logger = new Console(output, errorOutput);
// const count = 5;
// logger.log('count: %d', count);

/**********************************/
console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');