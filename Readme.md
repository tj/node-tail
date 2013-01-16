
# tail

  sync file tail (for logging)

## Installation

    $ npm install visionmedia/node-tail

## Example

```js
var tail = require('tail');

console.dir(tail('Readme.md').toString());
console.dir(tail('Readme.md', 100).toString());
console.dir(tail('Readme.md', 50).toString());
console.dir(tail('Readme.md', 20).toString());
console.dir(tail('Readme.md', 10).toString());
console.dir(tail('Readme.md', 4).toString());
```

## License

  MIT
