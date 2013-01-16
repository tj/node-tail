
/**
 * Module dependencies.
 */

var fs = require('fs')
  , stat = fs.statSync
  , open = fs.openSync
  , read = fs.readSync;

/**
 * Tail `len` of file `path`,
 * defaulting to 250 bytes.
 *
 * @param {String} path
 * @param {Number} len
 * @return {Buffer}
 * @api public
 */

module.exports = function(path, len){
  len = len || 250;
  var s = stat(path);
  var fd = open(path, 'r');
  len = Math.min(s.size, len);
  var off = Math.max(0, s.size - len);
  var buf = new Buffer(len);
  var n = read(fd, buf, 0, len, off);
  return buf;
};
