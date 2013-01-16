
var tail = require('./');

console.dir(tail('Readme.md').toString());
console.dir(tail('Readme.md', 100).toString());
console.dir(tail('Readme.md', 50).toString());
console.dir(tail('Readme.md', 20).toString());
console.dir(tail('Readme.md', 10).toString());
console.dir(tail('Readme.md', 4).toString());
