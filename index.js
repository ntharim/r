/**
 * Expose `r`.
 */

exports = module.exports = r;

/**
 * Retrieve the specific path provided
 * the path `name`.
 *
 * @param {String} name
 * @return {String}
 * @api public
 */

function r(name) {
  var path = r[name];
  if (arguments.length < 1) return path;

  var params = [].slice.call(arguments, 1, arguments.length);
  for (var i = 0; i < params.length; i++) {
    var param = params[i];
    path = path.replace(/(\/:\w+)/, '/' + param);
  }

  return path;
}