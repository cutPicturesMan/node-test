// const url = require('url');
// const url1 = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
// const url2 = new url.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
//
// console.log(delete url2.hash);
//
// console.log(url1);
// console.log(url2);

/*******************************/
// const { URL } = require('url');
// const myURL = new URL('/foo', 'https://example.org/');
// console.log(myURL);

// const { URL } = require('url');
// const myURL = new URL({ toString: () => 'https://example.org/' });
// console.log(myURL);

// const { URL } = require('url');
// const myURL = new URL('https://你好你好');
// console.log(myURL);

/*******************************/
const { URL } = require('url');
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);

myURL.hash = 'baz';
console.log(myURL.href);

/*******************************/

