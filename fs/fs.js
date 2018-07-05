const fs = require('fs');

fs.open('./fs/a.json', 'r', (err, fd)=>{
	console.log(fd);
});