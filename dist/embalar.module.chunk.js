webpackJsonp(["embalar.module"],{

/***/ "./node_modules/debug/src/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__("./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__("./node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),

/***/ "./node_modules/es5-ext/global.js":
/***/ (function(module, exports) {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Fallback to standard globalThis if available
	if (typeof globalThis === "object" && globalThis) return globalThis;

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of updates to Object.prototype being restricted
		// via preventExtensions, seal or freeze
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ works, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/querystringify/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/sockjs-client/lib/entry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var transportList = __webpack_require__("./node_modules/sockjs-client/lib/transport-list.js");

module.exports = __webpack_require__("./node_modules/sockjs-client/lib/main.js")(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/event/close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , Event = __webpack_require__("./node_modules/sockjs-client/lib/event/event.js")
  ;

function CloseEvent() {
  Event.call(this);
  this.initEvent('close', false, false);
  this.wasClean = false;
  this.code = 0;
  this.reason = '';
}

inherits(CloseEvent, Event);

module.exports = CloseEvent;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/event/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventTarget = __webpack_require__("./node_modules/sockjs-client/lib/event/eventtarget.js")
  ;

function EventEmitter() {
  EventTarget.call(this);
}

inherits(EventEmitter, EventTarget);

EventEmitter.prototype.removeAllListeners = function(type) {
  if (type) {
    delete this._listeners[type];
  } else {
    this._listeners = {};
  }
};

EventEmitter.prototype.once = function(type, listener) {
  var self = this
    , fired = false;

  function g() {
    self.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  this.on(type, g);
};

EventEmitter.prototype.emit = function() {
  var type = arguments[0];
  var listeners = this._listeners[type];
  if (!listeners) {
    return;
  }
  // equivalent of Array.prototype.slice.call(arguments, 1);
  var l = arguments.length;
  var args = new Array(l - 1);
  for (var ai = 1; ai < l; ai++) {
    args[ai - 1] = arguments[ai];
  }
  for (var i = 0; i < listeners.length; i++) {
    listeners[i].apply(this, args);
  }
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener = EventTarget.prototype.addEventListener;
EventEmitter.prototype.removeListener = EventTarget.prototype.removeEventListener;

module.exports.EventEmitter = EventEmitter;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/event/event.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Event(eventType) {
  this.type = eventType;
}

Event.prototype.initEvent = function(eventType, canBubble, cancelable) {
  this.type = eventType;
  this.bubbles = canBubble;
  this.cancelable = cancelable;
  this.timeStamp = +new Date();
  return this;
};

Event.prototype.stopPropagation = function() {};
Event.prototype.preventDefault = function() {};

Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

module.exports = Event;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/event/eventtarget.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Simplified implementation of DOM2 EventTarget.
 *   http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget
 */

function EventTarget() {
  this._listeners = {};
}

EventTarget.prototype.addEventListener = function(eventType, listener) {
  if (!(eventType in this._listeners)) {
    this._listeners[eventType] = [];
  }
  var arr = this._listeners[eventType];
  // #4
  if (arr.indexOf(listener) === -1) {
    // Make a copy so as not to interfere with a current dispatchEvent.
    arr = arr.concat([listener]);
  }
  this._listeners[eventType] = arr;
};

EventTarget.prototype.removeEventListener = function(eventType, listener) {
  var arr = this._listeners[eventType];
  if (!arr) {
    return;
  }
  var idx = arr.indexOf(listener);
  if (idx !== -1) {
    if (arr.length > 1) {
      // Make a copy so as not to interfere with a current dispatchEvent.
      this._listeners[eventType] = arr.slice(0, idx).concat(arr.slice(idx + 1));
    } else {
      delete this._listeners[eventType];
    }
    return;
  }
};

EventTarget.prototype.dispatchEvent = function() {
  var event = arguments[0];
  var t = event.type;
  // equivalent of Array.prototype.slice.call(arguments, 0);
  var args = arguments.length === 1 ? [event] : Array.apply(null, arguments);
  // TODO: This doesn't match the real behavior; per spec, onfoo get
  // their place in line from the /first/ time they're set from
  // non-null. Although WebKit bumps it to the end every time it's
  // set.
  if (this['on' + t]) {
    this['on' + t].apply(this, args);
  }
  if (t in this._listeners) {
    // Grab a reference to the listeners list. removeEventListener may alter the list.
    var listeners = this._listeners[t];
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(this, args);
    }
  }
};

module.exports = EventTarget;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/event/trans-message.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , Event = __webpack_require__("./node_modules/sockjs-client/lib/event/event.js")
  ;

function TransportMessageEvent(data) {
  Event.call(this);
  this.initEvent('message', false, false);
  this.data = data;
}

inherits(TransportMessageEvent, Event);

module.exports = TransportMessageEvent;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/facade.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iframeUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/iframe.js")
  ;

function FacadeJS(transport) {
  this._transport = transport;
  transport.on('message', this._transportMessage.bind(this));
  transport.on('close', this._transportClose.bind(this));
}

FacadeJS.prototype._transportClose = function(code, reason) {
  iframeUtils.postMessage('c', JSON.stringify([code, reason]));
};
FacadeJS.prototype._transportMessage = function(frame) {
  iframeUtils.postMessage('t', frame);
};
FacadeJS.prototype._send = function(data) {
  this._transport.send(data);
};
FacadeJS.prototype._close = function() {
  this._transport.close();
  this._transport.removeAllListeners();
};

module.exports = FacadeJS;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/iframe-bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , eventUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , FacadeJS = __webpack_require__("./node_modules/sockjs-client/lib/facade.js")
  , InfoIframeReceiver = __webpack_require__("./node_modules/sockjs-client/lib/info-iframe-receiver.js")
  , iframeUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/iframe.js")
  , loc = __webpack_require__("./node_modules/sockjs-client/lib/location.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:iframe-bootstrap');
}

module.exports = function(SockJS, availableTransports) {
  var transportMap = {};
  availableTransports.forEach(function(at) {
    if (at.facadeTransport) {
      transportMap[at.facadeTransport.transportName] = at.facadeTransport;
    }
  });

  // hard-coded for the info iframe
  // TODO see if we can make this more dynamic
  transportMap[InfoIframeReceiver.transportName] = InfoIframeReceiver;
  var parentOrigin;

  /* eslint-disable camelcase */
  SockJS.bootstrap_iframe = function() {
    /* eslint-enable camelcase */
    var facade;
    iframeUtils.currentWindowId = loc.hash.slice(1);
    var onMessage = function(e) {
      if (e.source !== parent) {
        return;
      }
      if (typeof parentOrigin === 'undefined') {
        parentOrigin = e.origin;
      }
      if (e.origin !== parentOrigin) {
        return;
      }

      var iframeMessage;
      try {
        iframeMessage = JSON.parse(e.data);
      } catch (ignored) {
        debug('bad json', e.data);
        return;
      }

      if (iframeMessage.windowId !== iframeUtils.currentWindowId) {
        return;
      }
      switch (iframeMessage.type) {
      case 's':
        var p;
        try {
          p = JSON.parse(iframeMessage.data);
        } catch (ignored) {
          debug('bad json', iframeMessage.data);
          break;
        }
        var version = p[0];
        var transport = p[1];
        var transUrl = p[2];
        var baseUrl = p[3];
        debug(version, transport, transUrl, baseUrl);
        // change this to semver logic
        if (version !== SockJS.version) {
          throw new Error('Incompatible SockJS! Main site uses:' +
                    ' "' + version + '", the iframe:' +
                    ' "' + SockJS.version + '".');
        }

        if (!urlUtils.isOriginEqual(transUrl, loc.href) ||
            !urlUtils.isOriginEqual(baseUrl, loc.href)) {
          throw new Error('Can\'t connect to different domain from within an ' +
                    'iframe. (' + loc.href + ', ' + transUrl + ', ' + baseUrl + ')');
        }
        facade = new FacadeJS(new transportMap[transport](transUrl, baseUrl));
        break;
      case 'm':
        facade._send(iframeMessage.data);
        break;
      case 'c':
        if (facade) {
          facade._close();
        }
        facade = null;
        break;
      }
    };

    eventUtils.attachEvent('message', onMessage);

    // Start
    iframeUtils.postMessage('s');
  };
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/info-ajax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , objectUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/object.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:info-ajax');
}

function InfoAjax(url, AjaxObject) {
  EventEmitter.call(this);

  var self = this;
  var t0 = +new Date();
  this.xo = new AjaxObject('GET', url);

  this.xo.once('finish', function(status, text) {
    var info, rtt;
    if (status === 200) {
      rtt = (+new Date()) - t0;
      if (text) {
        try {
          info = JSON.parse(text);
        } catch (e) {
          debug('bad json', text);
        }
      }

      if (!objectUtils.isObject(info)) {
        info = {};
      }
    }
    self.emit('finish', info, rtt);
    self.removeAllListeners();
  });
}

inherits(InfoAjax, EventEmitter);

InfoAjax.prototype.close = function() {
  this.removeAllListeners();
  this.xo.close();
};

module.exports = InfoAjax;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/info-iframe-receiver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , XHRLocalObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-local.js")
  , InfoAjax = __webpack_require__("./node_modules/sockjs-client/lib/info-ajax.js")
  ;

function InfoReceiverIframe(transUrl) {
  var self = this;
  EventEmitter.call(this);

  this.ir = new InfoAjax(transUrl, XHRLocalObject);
  this.ir.once('finish', function(info, rtt) {
    self.ir = null;
    self.emit('message', JSON.stringify([info, rtt]));
  });
}

inherits(InfoReceiverIframe, EventEmitter);

InfoReceiverIframe.transportName = 'iframe-info-receiver';

InfoReceiverIframe.prototype.close = function() {
  if (this.ir) {
    this.ir.close();
    this.ir = null;
  }
  this.removeAllListeners();
};

module.exports = InfoReceiverIframe;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/info-iframe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , utils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , IframeTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/iframe.js")
  , InfoReceiverIframe = __webpack_require__("./node_modules/sockjs-client/lib/info-iframe-receiver.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:info-iframe');
}

function InfoIframe(baseUrl, url) {
  var self = this;
  EventEmitter.call(this);

  var go = function() {
    var ifr = self.ifr = new IframeTransport(InfoReceiverIframe.transportName, url, baseUrl);

    ifr.once('message', function(msg) {
      if (msg) {
        var d;
        try {
          d = JSON.parse(msg);
        } catch (e) {
          debug('bad json', msg);
          self.emit('finish');
          self.close();
          return;
        }

        var info = d[0], rtt = d[1];
        self.emit('finish', info, rtt);
      }
      self.close();
    });

    ifr.once('close', function() {
      self.emit('finish');
      self.close();
    });
  };

  // TODO this seems the same as the 'needBody' from transports
  if (!global.document.body) {
    utils.attachEvent('load', go);
  } else {
    go();
  }
}

inherits(InfoIframe, EventEmitter);

InfoIframe.enabled = function() {
  return IframeTransport.enabled();
};

InfoIframe.prototype.close = function() {
  if (this.ifr) {
    this.ifr.close();
  }
  this.removeAllListeners();
  this.ifr = null;
};

module.exports = InfoIframe;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/info-receiver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , XDR = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xdr.js")
  , XHRCors = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js")
  , XHRLocal = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-local.js")
  , XHRFake = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js")
  , InfoIframe = __webpack_require__("./node_modules/sockjs-client/lib/info-iframe.js")
  , InfoAjax = __webpack_require__("./node_modules/sockjs-client/lib/info-ajax.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:info-receiver');
}

function InfoReceiver(baseUrl, urlInfo) {
  debug(baseUrl);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self.doXhr(baseUrl, urlInfo);
  }, 0);
}

inherits(InfoReceiver, EventEmitter);

// TODO this is currently ignoring the list of available transports and the whitelist

InfoReceiver._getReceiver = function(baseUrl, url, urlInfo) {
  // determine method of CORS support (if needed)
  if (urlInfo.sameOrigin) {
    return new InfoAjax(url, XHRLocal);
  }
  if (XHRCors.enabled) {
    return new InfoAjax(url, XHRCors);
  }
  if (XDR.enabled && urlInfo.sameScheme) {
    return new InfoAjax(url, XDR);
  }
  if (InfoIframe.enabled()) {
    return new InfoIframe(baseUrl, url);
  }
  return new InfoAjax(url, XHRFake);
};

InfoReceiver.prototype.doXhr = function(baseUrl, urlInfo) {
  var self = this
    , url = urlUtils.addPath(baseUrl, '/info')
    ;
  debug('doXhr', url);

  this.xo = InfoReceiver._getReceiver(baseUrl, url, urlInfo);

  this.timeoutRef = setTimeout(function() {
    debug('timeout');
    self._cleanup(false);
    self.emit('finish');
  }, InfoReceiver.timeout);

  this.xo.once('finish', function(info, rtt) {
    debug('finish', info, rtt);
    self._cleanup(true);
    self.emit('finish', info, rtt);
  });
};

InfoReceiver.prototype._cleanup = function(wasClean) {
  debug('_cleanup');
  clearTimeout(this.timeoutRef);
  this.timeoutRef = null;
  if (!wasClean && this.xo) {
    this.xo.close();
  }
  this.xo = null;
};

InfoReceiver.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  this._cleanup(false);
};

InfoReceiver.timeout = 8000;

module.exports = InfoReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/location.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = global.location || {
  origin: 'http://localhost:80'
, protocol: 'http:'
, host: 'localhost'
, port: 80
, href: 'http://localhost/'
, hash: ''
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

__webpack_require__("./node_modules/sockjs-client/lib/shims.js");

var URL = __webpack_require__("./node_modules/url-parse/index.js")
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js")
  , escape = __webpack_require__("./node_modules/sockjs-client/lib/utils/escape.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , eventUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , transport = __webpack_require__("./node_modules/sockjs-client/lib/utils/transport.js")
  , objectUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/object.js")
  , browser = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser.js")
  , log = __webpack_require__("./node_modules/sockjs-client/lib/utils/log.js")
  , Event = __webpack_require__("./node_modules/sockjs-client/lib/event/event.js")
  , EventTarget = __webpack_require__("./node_modules/sockjs-client/lib/event/eventtarget.js")
  , loc = __webpack_require__("./node_modules/sockjs-client/lib/location.js")
  , CloseEvent = __webpack_require__("./node_modules/sockjs-client/lib/event/close.js")
  , TransportMessageEvent = __webpack_require__("./node_modules/sockjs-client/lib/event/trans-message.js")
  , InfoReceiver = __webpack_require__("./node_modules/sockjs-client/lib/info-receiver.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:main');
}

var transports;

// follow constructor steps defined at http://dev.w3.org/html5/websockets/#the-websocket-interface
function SockJS(url, protocols, options) {
  if (!(this instanceof SockJS)) {
    return new SockJS(url, protocols, options);
  }
  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
  }
  EventTarget.call(this);

  this.readyState = SockJS.CONNECTING;
  this.extensions = '';
  this.protocol = '';

  // non-standard extension
  options = options || {};
  if (options.protocols_whitelist) {
    log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");
  }
  this._transportsWhitelist = options.transports;
  this._transportOptions = options.transportOptions || {};
  this._timeout = options.timeout || 0;

  var sessionId = options.sessionId || 8;
  if (typeof sessionId === 'function') {
    this._generateSessionId = sessionId;
  } else if (typeof sessionId === 'number') {
    this._generateSessionId = function() {
      return random.string(sessionId);
    };
  } else {
    throw new TypeError('If sessionId is used in the options, it needs to be a number or a function.');
  }

  this._server = options.server || random.numberString(1000);

  // Step 1 of WS spec - parse and validate the url. Issue #8
  var parsedUrl = new URL(url);
  if (!parsedUrl.host || !parsedUrl.protocol) {
    throw new SyntaxError("The URL '" + url + "' is invalid");
  } else if (parsedUrl.hash) {
    throw new SyntaxError('The URL must not contain a fragment');
  } else if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + parsedUrl.protocol + "' is not allowed.");
  }

  var secure = parsedUrl.protocol === 'https:';
  // Step 2 - don't allow secure origin with an insecure protocol
  if (loc.protocol === 'https:' && !secure) {
    // exception is 127.0.0.0/8 and ::1 urls
    if (!urlUtils.isLoopbackAddr(parsedUrl.hostname)) {
      throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');
    }
  }

  // Step 3 - check port access - no need here
  // Step 4 - parse protocols argument
  if (!protocols) {
    protocols = [];
  } else if (!Array.isArray(protocols)) {
    protocols = [protocols];
  }

  // Step 5 - check protocols argument
  var sortedProtocols = protocols.sort();
  sortedProtocols.forEach(function(proto, i) {
    if (!proto) {
      throw new SyntaxError("The protocols entry '" + proto + "' is invalid.");
    }
    if (i < (sortedProtocols.length - 1) && proto === sortedProtocols[i + 1]) {
      throw new SyntaxError("The protocols entry '" + proto + "' is duplicated.");
    }
  });

  // Step 6 - convert origin
  var o = urlUtils.getOrigin(loc.href);
  this._origin = o ? o.toLowerCase() : null;

  // remove the trailing slash
  parsedUrl.set('pathname', parsedUrl.pathname.replace(/\/+$/, ''));

  // store the sanitized url
  this.url = parsedUrl.href;
  debug('using url', this.url);

  // Step 7 - start connection in background
  // obtain server info
  // http://sockjs.github.io/sockjs-protocol/sockjs-protocol-0.3.3.html#section-26
  this._urlInfo = {
    nullOrigin: !browser.hasDomain()
  , sameOrigin: urlUtils.isOriginEqual(this.url, loc.href)
  , sameScheme: urlUtils.isSchemeEqual(this.url, loc.href)
  };

  this._ir = new InfoReceiver(this.url, this._urlInfo);
  this._ir.once('finish', this._receiveInfo.bind(this));
}

inherits(SockJS, EventTarget);

function userSetCode(code) {
  return code === 1000 || (code >= 3000 && code <= 4999);
}

SockJS.prototype.close = function(code, reason) {
  // Step 1
  if (code && !userSetCode(code)) {
    throw new Error('InvalidAccessError: Invalid code');
  }
  // Step 2.4 states the max is 123 bytes, but we are just checking length
  if (reason && reason.length > 123) {
    throw new SyntaxError('reason argument has an invalid length');
  }

  // Step 3.1
  if (this.readyState === SockJS.CLOSING || this.readyState === SockJS.CLOSED) {
    return;
  }

  // TODO look at docs to determine how to set this
  var wasClean = true;
  this._close(code || 1000, reason || 'Normal closure', wasClean);
};

SockJS.prototype.send = function(data) {
  // #13 - convert anything non-string to string
  // TODO this currently turns objects into [object Object]
  if (typeof data !== 'string') {
    data = '' + data;
  }
  if (this.readyState === SockJS.CONNECTING) {
    throw new Error('InvalidStateError: The connection has not been established yet');
  }
  if (this.readyState !== SockJS.OPEN) {
    return;
  }
  this._transport.send(escape.quote(data));
};

SockJS.version = __webpack_require__("./node_modules/sockjs-client/lib/version.js");

SockJS.CONNECTING = 0;
SockJS.OPEN = 1;
SockJS.CLOSING = 2;
SockJS.CLOSED = 3;

SockJS.prototype._receiveInfo = function(info, rtt) {
  debug('_receiveInfo', rtt);
  this._ir = null;
  if (!info) {
    this._close(1002, 'Cannot connect to server');
    return;
  }

  // establish a round-trip timeout (RTO) based on the
  // round-trip time (RTT)
  this._rto = this.countRTO(rtt);
  // allow server to override url used for the actual transport
  this._transUrl = info.base_url ? info.base_url : this.url;
  info = objectUtils.extend(info, this._urlInfo);
  debug('info', info);
  // determine list of desired and supported transports
  var enabledTransports = transports.filterToEnabled(this._transportsWhitelist, info);
  this._transports = enabledTransports.main;
  debug(this._transports.length + ' enabled transports');

  this._connect();
};

SockJS.prototype._connect = function() {
  for (var Transport = this._transports.shift(); Transport; Transport = this._transports.shift()) {
    debug('attempt', Transport.transportName);
    if (Transport.needBody) {
      if (!global.document.body ||
          (typeof global.document.readyState !== 'undefined' &&
            global.document.readyState !== 'complete' &&
            global.document.readyState !== 'interactive')) {
        debug('waiting for body');
        this._transports.unshift(Transport);
        eventUtils.attachEvent('load', this._connect.bind(this));
        return;
      }
    }

    // calculate timeout based on RTO and round trips. Default to 5s
    var timeoutMs = Math.max(this._timeout, (this._rto * Transport.roundTrips) || 5000);
    this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), timeoutMs);
    debug('using timeout', timeoutMs);

    var transportUrl = urlUtils.addPath(this._transUrl, '/' + this._server + '/' + this._generateSessionId());
    var options = this._transportOptions[Transport.transportName];
    debug('transport url', transportUrl);
    var transportObj = new Transport(transportUrl, this._transUrl, options);
    transportObj.on('message', this._transportMessage.bind(this));
    transportObj.once('close', this._transportClose.bind(this));
    transportObj.transportName = Transport.transportName;
    this._transport = transportObj;

    return;
  }
  this._close(2000, 'All transports failed', false);
};

SockJS.prototype._transportTimeout = function() {
  debug('_transportTimeout');
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transport) {
      this._transport.close();
    }

    this._transportClose(2007, 'Transport timed out');
  }
};

SockJS.prototype._transportMessage = function(msg) {
  debug('_transportMessage', msg);
  var self = this
    , type = msg.slice(0, 1)
    , content = msg.slice(1)
    , payload
    ;

  // first check for messages that don't need a payload
  switch (type) {
    case 'o':
      this._open();
      return;
    case 'h':
      this.dispatchEvent(new Event('heartbeat'));
      debug('heartbeat', this.transport);
      return;
  }

  if (content) {
    try {
      payload = JSON.parse(content);
    } catch (e) {
      debug('bad json', content);
    }
  }

  if (typeof payload === 'undefined') {
    debug('empty payload', content);
    return;
  }

  switch (type) {
    case 'a':
      if (Array.isArray(payload)) {
        payload.forEach(function(p) {
          debug('message', self.transport, p);
          self.dispatchEvent(new TransportMessageEvent(p));
        });
      }
      break;
    case 'm':
      debug('message', this.transport, payload);
      this.dispatchEvent(new TransportMessageEvent(payload));
      break;
    case 'c':
      if (Array.isArray(payload) && payload.length === 2) {
        this._close(payload[0], payload[1], true);
      }
      break;
  }
};

SockJS.prototype._transportClose = function(code, reason) {
  debug('_transportClose', this.transport, code, reason);
  if (this._transport) {
    this._transport.removeAllListeners();
    this._transport = null;
    this.transport = null;
  }

  if (!userSetCode(code) && code !== 2000 && this.readyState === SockJS.CONNECTING) {
    this._connect();
    return;
  }

  this._close(code, reason);
};

SockJS.prototype._open = function() {
  debug('_open', this._transport && this._transport.transportName, this.readyState);
  if (this.readyState === SockJS.CONNECTING) {
    if (this._transportTimeoutId) {
      clearTimeout(this._transportTimeoutId);
      this._transportTimeoutId = null;
    }
    this.readyState = SockJS.OPEN;
    this.transport = this._transport.transportName;
    this.dispatchEvent(new Event('open'));
    debug('connected', this.transport);
  } else {
    // The server might have been restarted, and lost track of our
    // connection.
    this._close(1006, 'Server lost session');
  }
};

SockJS.prototype._close = function(code, reason, wasClean) {
  debug('_close', this.transport, code, reason, wasClean, this.readyState);
  var forceFail = false;

  if (this._ir) {
    forceFail = true;
    this._ir.close();
    this._ir = null;
  }
  if (this._transport) {
    this._transport.close();
    this._transport = null;
    this.transport = null;
  }

  if (this.readyState === SockJS.CLOSED) {
    throw new Error('InvalidStateError: SockJS has already been closed');
  }

  this.readyState = SockJS.CLOSING;
  setTimeout(function() {
    this.readyState = SockJS.CLOSED;

    if (forceFail) {
      this.dispatchEvent(new Event('error'));
    }

    var e = new CloseEvent('close');
    e.wasClean = wasClean || false;
    e.code = code || 1000;
    e.reason = reason;

    this.dispatchEvent(e);
    this.onmessage = this.onclose = this.onerror = null;
    debug('disconnected');
  }.bind(this), 0);
};

// See: http://www.erg.abdn.ac.uk/~gerrit/dccp/notes/ccid2/rto_estimator/
// and RFC 2988.
SockJS.prototype.countRTO = function(rtt) {
  // In a local environment, when using IE8/9 and the `jsonp-polling`
  // transport the time needed to establish a connection (the time that pass
  // from the opening of the transport to the call of `_dispatchOpen`) is
  // around 200msec (the lower bound used in the article above) and this
  // causes spurious timeouts. For this reason we calculate a value slightly
  // larger than that used in the article.
  if (rtt > 100) {
    return 4 * rtt; // rto > 400msec
  }
  return 300 + rtt; // 300msec < rto <= 400msec
};

module.exports = function(availableTransports) {
  transports = transport(availableTransports);
  __webpack_require__("./node_modules/sockjs-client/lib/iframe-bootstrap.js")(SockJS, availableTransports);
  return SockJS;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/shims.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable */
/* jscs: disable */


// pulled specific shims from https://github.com/es-shims/es5-shim

var ArrayPrototype = Array.prototype;
var ObjectPrototype = Object.prototype;
var FunctionPrototype = Function.prototype;
var StringPrototype = String.prototype;
var array_slice = ArrayPrototype.slice;

var _toString = ObjectPrototype.toString;
var isFunction = function (val) {
    return ObjectPrototype.toString.call(val) === '[object Function]';
};
var isArray = function isArray(obj) {
    return _toString.call(obj) === '[object Array]';
};
var isString = function isString(obj) {
    return _toString.call(obj) === '[object String]';
};

var supportsDescriptors = Object.defineProperty && (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());

// Define configurable, writable and non-enumerable props
// if they don't exist.
var defineProperty;
if (supportsDescriptors) {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: method
        });
    };
} else {
    defineProperty = function (object, name, method, forceAssign) {
        if (!forceAssign && (name in object)) { return; }
        object[name] = method;
    };
}
var defineProperties = function (object, map, forceAssign) {
    for (var name in map) {
        if (ObjectPrototype.hasOwnProperty.call(map, name)) {
          defineProperty(object, name, map[name], forceAssign);
        }
    }
};

var toObject = function (o) {
    if (o == null) { // this matches both null and undefined
        throw new TypeError("can't convert " + o + ' to object');
    }
    return Object(o);
};

//
// Util
// ======
//

// ES5 9.4
// http://es5.github.com/#x9.4
// http://jsperf.com/to-integer

function toInteger(num) {
    var n = +num;
    if (n !== n) { // isNaN
        n = 0;
    } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
    }
    return n;
}

function ToUint32(x) {
    return x >>> 0;
}

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

function Empty() {}

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isFunction(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

//
// Array
// =====
//

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties(Array, { isArray: isArray });


var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';
            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(fun /*, thisp*/) {
        var object = toObject(this),
            self = splitString && isString(this) ? this.split('') : object,
            thisp = arguments[1],
            i = -1,
            length = self.length >>> 0;

        // If no callback function or if callback is not a callable function
        if (!isFunction(fun)) {
            throw new TypeError(); // TODO message
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                // context
                fun.call(thisp, self[i], i, object);
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(sought /*, fromIndex */ ) {
        var self = splitString && isString(this) ? this.split('') : toObject(this),
            length = self.length >>> 0;

        if (!length) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = toInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : Math.max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === sought) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

var string_split = StringPrototype.split;
if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = /()??/.exec('')[1] === void 0; // NPCG: nonparticipating capturing group

        StringPrototype.split = function (separator, limit) {
            var string = this;
            if (separator === void 0 && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (_toString.call(separator) !== '[object RegExp]') {
                return string_split.call(this, separator, limit);
            }

            var output = [],
                flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline  ? 'm' : '') +
                        (separator.extended   ? 'x' : '') + // Proposed for ES6
                        (separator.sticky     ? 'y' : ''), // Firefox 3+
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + 'g');
            string += ''; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === void 0 ?
                -1 >>> 0 : // Math.pow(2, 32) - 1
                ToUint32(limit);
            while (match = separator.exec(string)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === void 0) {
                                    match[i] = void 0;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < string.length) {
                        ArrayPrototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separator.test('')) {
                    output.push('');
                }
            } else {
                output.push(string.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (separator === void 0 && limit === 0) { return []; }
        return string_split.call(this, separator, limit);
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        return string_substr.call(
            this,
            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,
            length
        );
    }
}, hasNegativeSubstrBug);


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport-list.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  // streaming transports
  __webpack_require__("./node_modules/sockjs-client/lib/transport/websocket.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/xhr-streaming.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/xdr-streaming.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/eventsource.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__("./node_modules/sockjs-client/lib/transport/eventsource.js"))

  // polling transports
, __webpack_require__("./node_modules/sockjs-client/lib/transport/htmlfile.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__("./node_modules/sockjs-client/lib/transport/htmlfile.js"))
, __webpack_require__("./node_modules/sockjs-client/lib/transport/xhr-polling.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/xdr-polling.js")
, __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js")(__webpack_require__("./node_modules/sockjs-client/lib/transport/xhr-polling.js"))
, __webpack_require__("./node_modules/sockjs-client/lib/transport/jsonp-polling.js")
];


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , utils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , XHR = global.XMLHttpRequest
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:browser:xhr');
}

function AbstractXHRObject(method, url, payload, opts) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function () {
    self._start(method, url, payload, opts);
  }, 0);
}

inherits(AbstractXHRObject, EventEmitter);

AbstractXHRObject.prototype._start = function(method, url, payload, opts) {
  var self = this;

  try {
    this.xhr = new XHR();
  } catch (x) {
    // intentionally empty
  }

  if (!this.xhr) {
    debug('no xhr');
    this.emit('finish', 0, 'no xhr support');
    this._cleanup();
    return;
  }

  // several browsers cache POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  // Explorer tends to keep connection open, even after the
  // tab gets closed: http://bugs.jquery.com/ticket/5280
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload cleanup');
    self._cleanup(true);
  });
  try {
    this.xhr.open(method, url, true);
    if (this.timeout && 'timeout' in this.xhr) {
      this.xhr.timeout = this.timeout;
      this.xhr.ontimeout = function() {
        debug('xhr timeout');
        self.emit('finish', 0, '');
        self._cleanup(false);
      };
    }
  } catch (e) {
    debug('exception', e);
    // IE raises an exception on wrong port.
    this.emit('finish', 0, '');
    this._cleanup(false);
    return;
  }

  if ((!opts || !opts.noCredentials) && AbstractXHRObject.supportsCORS) {
    debug('withCredentials');
    // Mozilla docs says https://developer.mozilla.org/en/XMLHttpRequest :
    // "This never affects same-site requests."

    this.xhr.withCredentials = true;
  }
  if (opts && opts.headers) {
    for (var key in opts.headers) {
      this.xhr.setRequestHeader(key, opts.headers[key]);
    }
  }

  this.xhr.onreadystatechange = function() {
    if (self.xhr) {
      var x = self.xhr;
      var text, status;
      debug('readyState', x.readyState);
      switch (x.readyState) {
      case 3:
        // IE doesn't like peeking into responseText or status
        // on Microsoft.XMLHTTP and readystate=3
        try {
          status = x.status;
          text = x.responseText;
        } catch (e) {
          // intentionally empty
        }
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }

        // IE does return readystate == 3 for 404 answers.
        if (status === 200 && text && text.length > 0) {
          debug('chunk');
          self.emit('chunk', status, text);
        }
        break;
      case 4:
        status = x.status;
        debug('status', status);
        // IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450
        if (status === 1223) {
          status = 204;
        }
        // IE returns this for a bad port
        // http://msdn.microsoft.com/en-us/library/windows/desktop/aa383770(v=vs.85).aspx
        if (status === 12005 || status === 12029) {
          status = 0;
        }

        debug('finish', status, x.responseText);
        self.emit('finish', status, x.responseText);
        self._cleanup(false);
        break;
      }
    }
  };

  try {
    self.xhr.send(payload);
  } catch (e) {
    self.emit('finish', 0, '');
    self._cleanup(false);
  }
};

AbstractXHRObject.prototype._cleanup = function(abort) {
  debug('cleanup');
  if (!this.xhr) {
    return;
  }
  this.removeAllListeners();
  utils.unloadDel(this.unloadRef);

  // IE needs this field to be a function
  this.xhr.onreadystatechange = function() {};
  if (this.xhr.ontimeout) {
    this.xhr.ontimeout = null;
  }

  if (abort) {
    try {
      this.xhr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xhr = null;
};

AbstractXHRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

AbstractXHRObject.enabled = !!XHR;
// override XMLHttpRequest for IE6/7
// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (!AbstractXHRObject.enabled && (axo in global)) {
  debug('overriding xmlhttprequest');
  XHR = function() {
    try {
      return new global[axo]('Microsoft.XMLHTTP');
    } catch (e) {
      return null;
    }
  };
  AbstractXHRObject.enabled = !!new XHR();
}

var cors = false;
try {
  cors = 'withCredentials' in new XHR();
} catch (ignored) {
  // intentionally empty
}

AbstractXHRObject.supportsCORS = cors;

module.exports = AbstractXHRObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/browser/eventsource.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global.EventSource;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/browser/websocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Driver = global.WebSocket || global.MozWebSocket;
if (Driver) {
	module.exports = function WebSocketBrowserDriver(url) {
		return new Driver(url);
	};
} else {
	module.exports = undefined;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/eventsource.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  , EventSourceReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/eventsource.js")
  , XHRCorsObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js")
  , EventSourceDriver = __webpack_require__("./node_modules/sockjs-client/lib/transport/browser/eventsource.js")
  ;

function EventSourceTransport(transUrl) {
  if (!EventSourceTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  AjaxBasedTransport.call(this, transUrl, '/eventsource', EventSourceReceiver, XHRCorsObject);
}

inherits(EventSourceTransport, AjaxBasedTransport);

EventSourceTransport.enabled = function() {
  return !!EventSourceDriver;
};

EventSourceTransport.transportName = 'eventsource';
EventSourceTransport.roundTrips = 2;

module.exports = EventSourceTransport;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/htmlfile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , HtmlfileReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js")
  , XHRLocalObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-local.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  ;

function HtmlFileTransport(transUrl) {
  if (!HtmlfileReceiver.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/htmlfile', HtmlfileReceiver, XHRLocalObject);
}

inherits(HtmlFileTransport, AjaxBasedTransport);

HtmlFileTransport.enabled = function(info) {
  return HtmlfileReceiver.enabled && info.sameOrigin;
};

HtmlFileTransport.transportName = 'htmlfile';
HtmlFileTransport.roundTrips = 2;

module.exports = HtmlFileTransport;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/iframe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Few cool transports do work only for same-origin. In order to make
// them work cross-domain we shall use iframe, served from the
// remote domain. New browsers have capabilities to communicate with
// cross domain iframe using postMessage(). In IE it was implemented
// from IE 8+, but of course, IE got some details wrong:
//    http://msdn.microsoft.com/en-us/library/cc197015(v=VS.85).aspx
//    http://stevesouders.com/misc/test-postmessage.php

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , version = __webpack_require__("./node_modules/sockjs-client/lib/version.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , iframeUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/iframe.js")
  , eventUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:transport:iframe');
}

function IframeTransport(transport, transUrl, baseUrl) {
  if (!IframeTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  EventEmitter.call(this);

  var self = this;
  this.origin = urlUtils.getOrigin(baseUrl);
  this.baseUrl = baseUrl;
  this.transUrl = transUrl;
  this.transport = transport;
  this.windowId = random.string(8);

  var iframeUrl = urlUtils.addPath(baseUrl, '/iframe.html') + '#' + this.windowId;
  debug(transport, transUrl, iframeUrl);

  this.iframeObj = iframeUtils.createIframe(iframeUrl, function(r) {
    debug('err callback');
    self.emit('close', 1006, 'Unable to load an iframe (' + r + ')');
    self.close();
  });

  this.onmessageCallback = this._message.bind(this);
  eventUtils.attachEvent('message', this.onmessageCallback);
}

inherits(IframeTransport, EventEmitter);

IframeTransport.prototype.close = function() {
  debug('close');
  this.removeAllListeners();
  if (this.iframeObj) {
    eventUtils.detachEvent('message', this.onmessageCallback);
    try {
      // When the iframe is not loaded, IE raises an exception
      // on 'contentWindow'.
      this.postMessage('c');
    } catch (x) {
      // intentionally empty
    }
    this.iframeObj.cleanup();
    this.iframeObj = null;
    this.onmessageCallback = this.iframeObj = null;
  }
};

IframeTransport.prototype._message = function(e) {
  debug('message', e.data);
  if (!urlUtils.isOriginEqual(e.origin, this.origin)) {
    debug('not same origin', e.origin, this.origin);
    return;
  }

  var iframeMessage;
  try {
    iframeMessage = JSON.parse(e.data);
  } catch (ignored) {
    debug('bad json', e.data);
    return;
  }

  if (iframeMessage.windowId !== this.windowId) {
    debug('mismatched window id', iframeMessage.windowId, this.windowId);
    return;
  }

  switch (iframeMessage.type) {
  case 's':
    this.iframeObj.loaded();
    // window global dependency
    this.postMessage('s', JSON.stringify([
      version
    , this.transport
    , this.transUrl
    , this.baseUrl
    ]));
    break;
  case 't':
    this.emit('message', iframeMessage.data);
    break;
  case 'c':
    var cdata;
    try {
      cdata = JSON.parse(iframeMessage.data);
    } catch (ignored) {
      debug('bad json', iframeMessage.data);
      return;
    }
    this.emit('close', cdata[0], cdata[1]);
    this.close();
    break;
  }
};

IframeTransport.prototype.postMessage = function(type, data) {
  debug('postMessage', type, data);
  this.iframeObj.post(JSON.stringify({
    windowId: this.windowId
  , type: type
  , data: data || ''
  }), this.origin);
};

IframeTransport.prototype.send = function(message) {
  debug('send', message);
  this.postMessage('m', message);
};

IframeTransport.enabled = function() {
  return iframeUtils.iframeEnabled;
};

IframeTransport.transportName = 'iframe';
IframeTransport.roundTrips = 2;

module.exports = IframeTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/jsonp-polling.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// The simplest and most robust transport, using the well-know cross
// domain hack - JSONP. This transport is quite inefficient - one
// message could use up to one http request. But at least it works almost
// everywhere.
// Known limitations:
//   o you will get a spinning cursor
//   o for Konqueror a dumb timer is needed to detect errors

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , SenderReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js")
  , JsonpReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/jsonp.js")
  , jsonpSender = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/jsonp.js")
  ;

function JsonPTransport(transUrl) {
  if (!JsonPTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }
  SenderReceiver.call(this, transUrl, '/jsonp', jsonpSender, JsonpReceiver);
}

inherits(JsonPTransport, SenderReceiver);

JsonPTransport.enabled = function() {
  return !!global.document;
};

JsonPTransport.transportName = 'jsonp-polling';
JsonPTransport.roundTrips = 1;
JsonPTransport.needBody = true;

module.exports = JsonPTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/lib/ajax-based.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , SenderReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:ajax-based');
}

function createAjaxSender(AjaxObject) {
  return function(url, payload, callback) {
    debug('create ajax sender', url, payload);
    var opt = {};
    if (typeof payload === 'string') {
      opt.headers = {'Content-type': 'text/plain'};
    }
    var ajaxUrl = urlUtils.addPath(url, '/xhr_send');
    var xo = new AjaxObject('POST', ajaxUrl, payload, opt);
    xo.once('finish', function(status) {
      debug('finish', status);
      xo = null;

      if (status !== 200 && status !== 204) {
        return callback(new Error('http status ' + status));
      }
      callback();
    });
    return function() {
      debug('abort');
      xo.close();
      xo = null;

      var err = new Error('Aborted');
      err.code = 1000;
      callback(err);
    };
  };
}

function AjaxBasedTransport(transUrl, urlSuffix, Receiver, AjaxObject) {
  SenderReceiver.call(this, transUrl, urlSuffix, createAjaxSender(AjaxObject), Receiver, AjaxObject);
}

inherits(AjaxBasedTransport, SenderReceiver);

module.exports = AjaxBasedTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:buffered-sender');
}

function BufferedSender(url, sender) {
  debug(url);
  EventEmitter.call(this);
  this.sendBuffer = [];
  this.sender = sender;
  this.url = url;
}

inherits(BufferedSender, EventEmitter);

BufferedSender.prototype.send = function(message) {
  debug('send', message);
  this.sendBuffer.push(message);
  if (!this.sendStop) {
    this.sendSchedule();
  }
};

// For polling transports in a situation when in the message callback,
// new message is being send. If the sending connection was started
// before receiving one, it is possible to saturate the network and
// timeout due to the lack of receiving socket. To avoid that we delay
// sending messages by some small time, in order to let receiving
// connection be started beforehand. This is only a halfmeasure and
// does not fix the big problem, but it does make the tests go more
// stable on slow networks.
BufferedSender.prototype.sendScheduleWait = function() {
  debug('sendScheduleWait');
  var self = this;
  var tref;
  this.sendStop = function() {
    debug('sendStop');
    self.sendStop = null;
    clearTimeout(tref);
  };
  tref = setTimeout(function() {
    debug('timeout');
    self.sendStop = null;
    self.sendSchedule();
  }, 25);
};

BufferedSender.prototype.sendSchedule = function() {
  debug('sendSchedule', this.sendBuffer.length);
  var self = this;
  if (this.sendBuffer.length > 0) {
    var payload = '[' + this.sendBuffer.join(',') + ']';
    this.sendStop = this.sender(this.url, payload, function(err) {
      self.sendStop = null;
      if (err) {
        debug('error', err);
        self.emit('close', err.code || 1006, 'Sending error: ' + err);
        self.close();
      } else {
        self.sendScheduleWait();
      }
    });
    this.sendBuffer = [];
  }
};

BufferedSender.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

BufferedSender.prototype.close = function() {
  debug('close');
  this._cleanup();
  if (this.sendStop) {
    this.sendStop();
    this.sendStop = null;
  }
};

module.exports = BufferedSender;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/lib/iframe-wrap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , IframeTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/iframe.js")
  , objectUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/object.js")
  ;

module.exports = function(transport) {

  function IframeWrapTransport(transUrl, baseUrl) {
    IframeTransport.call(this, transport.transportName, transUrl, baseUrl);
  }

  inherits(IframeWrapTransport, IframeTransport);

  IframeWrapTransport.enabled = function(url, info) {
    if (!global.document) {
      return false;
    }

    var iframeInfo = objectUtils.extend({}, info);
    iframeInfo.sameOrigin = true;
    return transport.enabled(iframeInfo) && IframeTransport.enabled();
  };

  IframeWrapTransport.transportName = 'iframe-' + transport.transportName;
  IframeWrapTransport.needBody = true;
  IframeWrapTransport.roundTrips = IframeTransport.roundTrips + transport.roundTrips - 1; // html, javascript (2) + transport - no CORS (1)

  IframeWrapTransport.facadeTransport = transport;

  return IframeWrapTransport;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/lib/polling.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:polling');
}

function Polling(Receiver, receiveUrl, AjaxObject) {
  debug(receiveUrl);
  EventEmitter.call(this);
  this.Receiver = Receiver;
  this.receiveUrl = receiveUrl;
  this.AjaxObject = AjaxObject;
  this._scheduleReceiver();
}

inherits(Polling, EventEmitter);

Polling.prototype._scheduleReceiver = function() {
  debug('_scheduleReceiver');
  var self = this;
  var poll = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);

  poll.on('message', function(msg) {
    debug('message', msg);
    self.emit('message', msg);
  });

  poll.once('close', function(code, reason) {
    debug('close', code, reason, self.pollIsClosing);
    self.poll = poll = null;

    if (!self.pollIsClosing) {
      if (reason === 'network') {
        self._scheduleReceiver();
      } else {
        self.emit('close', code || 1006, reason);
        self.removeAllListeners();
      }
    }
  });
};

Polling.prototype.abort = function() {
  debug('abort');
  this.removeAllListeners();
  this.pollIsClosing = true;
  if (this.poll) {
    this.poll.abort();
  }
};

module.exports = Polling;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/lib/sender-receiver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , BufferedSender = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/buffered-sender.js")
  , Polling = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/polling.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:sender-receiver');
}

function SenderReceiver(transUrl, urlSuffix, senderFunc, Receiver, AjaxObject) {
  var pollUrl = urlUtils.addPath(transUrl, urlSuffix);
  debug(pollUrl);
  var self = this;
  BufferedSender.call(this, transUrl, senderFunc);

  this.poll = new Polling(Receiver, pollUrl, AjaxObject);
  this.poll.on('message', function(msg) {
    debug('poll message', msg);
    self.emit('message', msg);
  });
  this.poll.once('close', function(code, reason) {
    debug('poll close', code, reason);
    self.poll = null;
    self.emit('close', code, reason);
    self.close();
  });
}

inherits(SenderReceiver, BufferedSender);

SenderReceiver.prototype.close = function() {
  BufferedSender.prototype.close.call(this);
  debug('close');
  this.removeAllListeners();
  if (this.poll) {
    this.poll.abort();
    this.poll = null;
  }
};

module.exports = SenderReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/receiver/eventsource.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , EventSourceDriver = __webpack_require__("./node_modules/sockjs-client/lib/transport/browser/eventsource.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:receiver:eventsource');
}

function EventSourceReceiver(url) {
  debug(url);
  EventEmitter.call(this);

  var self = this;
  var es = this.es = new EventSourceDriver(url);
  es.onmessage = function(e) {
    debug('message', e.data);
    self.emit('message', decodeURI(e.data));
  };
  es.onerror = function(e) {
    debug('error', es.readyState, e);
    // ES on reconnection has readyState = 0 or 1.
    // on network error it's CLOSED = 2
    var reason = (es.readyState !== 2 ? 'network' : 'permanent');
    self._cleanup();
    self._close(reason);
  };
}

inherits(EventSourceReceiver, EventEmitter);

EventSourceReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

EventSourceReceiver.prototype._cleanup = function() {
  debug('cleanup');
  var es = this.es;
  if (es) {
    es.onmessage = es.onerror = null;
    es.close();
    this.es = null;
  }
};

EventSourceReceiver.prototype._close = function(reason) {
  debug('close', reason);
  var self = this;
  // Safari and chrome < 15 crash if we close window before
  // waiting for ES cleanup. See:
  // https://code.google.com/p/chromium/issues/detail?id=89155
  setTimeout(function() {
    self.emit('close', null, reason);
    self.removeAllListeners();
  }, 200);
};

module.exports = EventSourceReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/receiver/htmlfile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , iframeUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/iframe.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:receiver:htmlfile');
}

function HtmlfileReceiver(url) {
  debug(url);
  EventEmitter.call(this);
  var self = this;
  iframeUtils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  url = urlUtils.addQuery(url, 'c=' + decodeURIComponent(iframeUtils.WPrefix + '.' + this.id));

  debug('using htmlfile', HtmlfileReceiver.htmlfileEnabled);
  var constructFunc = HtmlfileReceiver.htmlfileEnabled ?
      iframeUtils.createHtmlfile : iframeUtils.createIframe;

  global[iframeUtils.WPrefix][this.id] = {
    start: function() {
      debug('start');
      self.iframeObj.loaded();
    }
  , message: function(data) {
      debug('message', data);
      self.emit('message', data);
    }
  , stop: function() {
      debug('stop');
      self._cleanup();
      self._close('network');
    }
  };
  this.iframeObj = constructFunc(url, function() {
    debug('callback');
    self._cleanup();
    self._close('permanent');
  });
}

inherits(HtmlfileReceiver, EventEmitter);

HtmlfileReceiver.prototype.abort = function() {
  debug('abort');
  this._cleanup();
  this._close('user');
};

HtmlfileReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  if (this.iframeObj) {
    this.iframeObj.cleanup();
    this.iframeObj = null;
  }
  delete global[iframeUtils.WPrefix][this.id];
};

HtmlfileReceiver.prototype._close = function(reason) {
  debug('_close', reason);
  this.emit('close', null, reason);
  this.removeAllListeners();
};

HtmlfileReceiver.htmlfileEnabled = false;

// obfuscate to avoid firewalls
var axo = ['Active'].concat('Object').join('X');
if (axo in global) {
  try {
    HtmlfileReceiver.htmlfileEnabled = !!new global[axo]('htmlfile');
  } catch (x) {
    // intentionally empty
  }
}

HtmlfileReceiver.enabled = HtmlfileReceiver.htmlfileEnabled || iframeUtils.iframeEnabled;

module.exports = HtmlfileReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/receiver/jsonp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var utils = __webpack_require__("./node_modules/sockjs-client/lib/utils/iframe.js")
  , random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js")
  , browser = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:receiver:jsonp');
}

function JsonpReceiver(url) {
  debug(url);
  var self = this;
  EventEmitter.call(this);

  utils.polluteGlobalNamespace();

  this.id = 'a' + random.string(6);
  var urlWithId = urlUtils.addQuery(url, 'c=' + encodeURIComponent(utils.WPrefix + '.' + this.id));

  global[utils.WPrefix][this.id] = this._callback.bind(this);
  this._createScript(urlWithId);

  // Fallback mostly for Konqueror - stupid timer, 35 seconds shall be plenty.
  this.timeoutId = setTimeout(function() {
    debug('timeout');
    self._abort(new Error('JSONP script loaded abnormally (timeout)'));
  }, JsonpReceiver.timeout);
}

inherits(JsonpReceiver, EventEmitter);

JsonpReceiver.prototype.abort = function() {
  debug('abort');
  if (global[utils.WPrefix][this.id]) {
    var err = new Error('JSONP user aborted read');
    err.code = 1000;
    this._abort(err);
  }
};

JsonpReceiver.timeout = 35000;
JsonpReceiver.scriptErrorTimeout = 1000;

JsonpReceiver.prototype._callback = function(data) {
  debug('_callback', data);
  this._cleanup();

  if (this.aborting) {
    return;
  }

  if (data) {
    debug('message', data);
    this.emit('message', data);
  }
  this.emit('close', null, 'network');
  this.removeAllListeners();
};

JsonpReceiver.prototype._abort = function(err) {
  debug('_abort', err);
  this._cleanup();
  this.aborting = true;
  this.emit('close', err.code, err.message);
  this.removeAllListeners();
};

JsonpReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  clearTimeout(this.timeoutId);
  if (this.script2) {
    this.script2.parentNode.removeChild(this.script2);
    this.script2 = null;
  }
  if (this.script) {
    var script = this.script;
    // Unfortunately, you can't really abort script loading of
    // the script.
    script.parentNode.removeChild(script);
    script.onreadystatechange = script.onerror =
        script.onload = script.onclick = null;
    this.script = null;
  }
  delete global[utils.WPrefix][this.id];
};

JsonpReceiver.prototype._scriptError = function() {
  debug('_scriptError');
  var self = this;
  if (this.errorTimer) {
    return;
  }

  this.errorTimer = setTimeout(function() {
    if (!self.loadedOkay) {
      self._abort(new Error('JSONP script loaded abnormally (onerror)'));
    }
  }, JsonpReceiver.scriptErrorTimeout);
};

JsonpReceiver.prototype._createScript = function(url) {
  debug('_createScript', url);
  var self = this;
  var script = this.script = global.document.createElement('script');
  var script2;  // Opera synchronous load trick.

  script.id = 'a' + random.string(8);
  script.src = url;
  script.type = 'text/javascript';
  script.charset = 'UTF-8';
  script.onerror = this._scriptError.bind(this);
  script.onload = function() {
    debug('onload');
    self._abort(new Error('JSONP script loaded abnormally (onload)'));
  };

  // IE9 fires 'error' event after onreadystatechange or before, in random order.
  // Use loadedOkay to determine if actually errored
  script.onreadystatechange = function() {
    debug('onreadystatechange', script.readyState);
    if (/loaded|closed/.test(script.readyState)) {
      if (script && script.htmlFor && script.onclick) {
        self.loadedOkay = true;
        try {
          // In IE, actually execute the script.
          script.onclick();
        } catch (x) {
          // intentionally empty
        }
      }
      if (script) {
        self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));
      }
    }
  };
  // IE: event/htmlFor/onclick trick.
  // One can't rely on proper order for onreadystatechange. In order to
  // make sure, set a 'htmlFor' and 'event' properties, so that
  // script code will be installed as 'onclick' handler for the
  // script object. Later, onreadystatechange, manually execute this
  // code. FF and Chrome doesn't work with 'event' and 'htmlFor'
  // set. For reference see:
  //   http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
  // Also, read on that about script ordering:
  //   http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
  if (typeof script.async === 'undefined' && global.document.attachEvent) {
    // According to mozilla docs, in recent browsers script.async defaults
    // to 'true', so we may use it to detect a good browser:
    // https://developer.mozilla.org/en/HTML/Element/script
    if (!browser.isOpera()) {
      // Naively assume we're in IE
      try {
        script.htmlFor = script.id;
        script.event = 'onclick';
      } catch (x) {
        // intentionally empty
      }
      script.async = true;
    } else {
      // Opera, second sync script hack
      script2 = this.script2 = global.document.createElement('script');
      script2.text = "try{var a = document.getElementById('" + script.id + "'); if(a)a.onerror();}catch(x){};";
      script.async = script2.async = false;
    }
  }
  if (typeof script.async !== 'undefined') {
    script.async = true;
  }

  var head = global.document.getElementsByTagName('head')[0];
  head.insertBefore(script, head.firstChild);
  if (script2) {
    head.insertBefore(script2, head.firstChild);
  }
};

module.exports = JsonpReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/receiver/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:receiver:xhr');
}

function XhrReceiver(url, AjaxObject) {
  debug(url);
  EventEmitter.call(this);
  var self = this;

  this.bufferPosition = 0;

  this.xo = new AjaxObject('POST', url, null);
  this.xo.on('chunk', this._chunkHandler.bind(this));
  this.xo.once('finish', function(status, text) {
    debug('finish', status, text);
    self._chunkHandler(status, text);
    self.xo = null;
    var reason = status === 200 ? 'network' : 'permanent';
    debug('close', reason);
    self.emit('close', null, reason);
    self._cleanup();
  });
}

inherits(XhrReceiver, EventEmitter);

XhrReceiver.prototype._chunkHandler = function(status, text) {
  debug('_chunkHandler', status);
  if (status !== 200 || !text) {
    return;
  }

  for (var idx = -1; ; this.bufferPosition += idx + 1) {
    var buf = text.slice(this.bufferPosition);
    idx = buf.indexOf('\n');
    if (idx === -1) {
      break;
    }
    var msg = buf.slice(0, idx);
    if (msg) {
      debug('message', msg);
      this.emit('message', msg);
    }
  }
};

XhrReceiver.prototype._cleanup = function() {
  debug('_cleanup');
  this.removeAllListeners();
};

XhrReceiver.prototype.abort = function() {
  debug('abort');
  if (this.xo) {
    this.xo.close();
    debug('close');
    this.emit('close', null, 'user');
    this.xo = null;
  }
  this._cleanup();
};

module.exports = XhrReceiver;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/sender/jsonp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:sender:jsonp');
}

var form, area;

function createIframe(id) {
  debug('createIframe', id);
  try {
    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
    return global.document.createElement('<iframe name="' + id + '">');
  } catch (x) {
    var iframe = global.document.createElement('iframe');
    iframe.name = id;
    return iframe;
  }
}

function createForm() {
  debug('createForm');
  form = global.document.createElement('form');
  form.style.display = 'none';
  form.style.position = 'absolute';
  form.method = 'POST';
  form.enctype = 'application/x-www-form-urlencoded';
  form.acceptCharset = 'UTF-8';

  area = global.document.createElement('textarea');
  area.name = 'd';
  form.appendChild(area);

  global.document.body.appendChild(form);
}

module.exports = function(url, payload, callback) {
  debug(url, payload);
  if (!form) {
    createForm();
  }
  var id = 'a' + random.string(8);
  form.target = id;
  form.action = urlUtils.addQuery(urlUtils.addPath(url, '/jsonp_send'), 'i=' + id);

  var iframe = createIframe(id);
  iframe.id = id;
  iframe.style.display = 'none';
  form.appendChild(iframe);

  try {
    area.value = payload;
  } catch (e) {
    // seriously broken browsers get here
  }
  form.submit();

  var completed = function(err) {
    debug('completed', id, err);
    if (!iframe.onerror) {
      return;
    }
    iframe.onreadystatechange = iframe.onerror = iframe.onload = null;
    // Opera mini doesn't like if we GC iframe
    // immediately, thus this timeout.
    setTimeout(function() {
      debug('cleaning up', id);
      iframe.parentNode.removeChild(iframe);
      iframe = null;
    }, 500);
    area.value = '';
    // It is not possible to detect if the iframe succeeded or
    // failed to submit our form.
    callback(err);
  };
  iframe.onerror = function() {
    debug('onerror', id);
    completed();
  };
  iframe.onload = function() {
    debug('onload', id);
    completed();
  };
  iframe.onreadystatechange = function(e) {
    debug('onreadystatechange', id, iframe.readyState, e);
    if (iframe.readyState === 'complete') {
      completed();
    }
  };
  return function() {
    debug('aborted', id);
    completed(new Error('Aborted'));
  };
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/sender/xdr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , eventUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , browser = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:sender:xdr');
}

// References:
//   http://ajaxian.com/archives/100-line-ajax-wrapper
//   http://msdn.microsoft.com/en-us/library/cc288060(v=VS.85).aspx

function XDRObject(method, url, payload) {
  debug(method, url);
  var self = this;
  EventEmitter.call(this);

  setTimeout(function() {
    self._start(method, url, payload);
  }, 0);
}

inherits(XDRObject, EventEmitter);

XDRObject.prototype._start = function(method, url, payload) {
  debug('_start');
  var self = this;
  var xdr = new global.XDomainRequest();
  // IE caches even POSTs
  url = urlUtils.addQuery(url, 't=' + (+new Date()));

  xdr.onerror = function() {
    debug('onerror');
    self._error();
  };
  xdr.ontimeout = function() {
    debug('ontimeout');
    self._error();
  };
  xdr.onprogress = function() {
    debug('progress', xdr.responseText);
    self.emit('chunk', 200, xdr.responseText);
  };
  xdr.onload = function() {
    debug('load');
    self.emit('finish', 200, xdr.responseText);
    self._cleanup(false);
  };
  this.xdr = xdr;
  this.unloadRef = eventUtils.unloadAdd(function() {
    self._cleanup(true);
  });
  try {
    // Fails with AccessDenied if port number is bogus
    this.xdr.open(method, url);
    if (this.timeout) {
      this.xdr.timeout = this.timeout;
    }
    this.xdr.send(payload);
  } catch (x) {
    this._error();
  }
};

XDRObject.prototype._error = function() {
  this.emit('finish', 0, '');
  this._cleanup(false);
};

XDRObject.prototype._cleanup = function(abort) {
  debug('cleanup', abort);
  if (!this.xdr) {
    return;
  }
  this.removeAllListeners();
  eventUtils.unloadDel(this.unloadRef);

  this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
  if (abort) {
    try {
      this.xdr.abort();
    } catch (x) {
      // intentionally empty
    }
  }
  this.unloadRef = this.xdr = null;
};

XDRObject.prototype.close = function() {
  debug('close');
  this._cleanup(true);
};

// IE 8/9 if the request target uses the same scheme - #79
XDRObject.enabled = !!(global.XDomainRequest && browser.hasDomain());

module.exports = XDRObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , XhrDriver = __webpack_require__("./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js")
  ;

function XHRCorsObject(method, url, payload, opts) {
  XhrDriver.call(this, method, url, payload, opts);
}

inherits(XHRCorsObject, XhrDriver);

XHRCorsObject.enabled = XhrDriver.enabled && XhrDriver.supportsCORS;

module.exports = XHRCorsObject;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/sender/xhr-fake.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  ;

function XHRFake(/* method, url, payload, opts */) {
  var self = this;
  EventEmitter.call(this);

  this.to = setTimeout(function() {
    self.emit('finish', 200, '{}');
  }, XHRFake.timeout);
}

inherits(XHRFake, EventEmitter);

XHRFake.prototype.close = function() {
  clearTimeout(this.to);
};

XHRFake.timeout = 2000;

module.exports = XHRFake;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/sender/xhr-local.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , XhrDriver = __webpack_require__("./node_modules/sockjs-client/lib/transport/browser/abstract-xhr.js")
  ;

function XHRLocalObject(method, url, payload /*, opts */) {
  XhrDriver.call(this, method, url, payload, {
    noCredentials: true
  });
}

inherits(XHRLocalObject, XhrDriver);

XHRLocalObject.enabled = XhrDriver.enabled;

module.exports = XHRLocalObject;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/websocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , urlUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/url.js")
  , inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , EventEmitter = __webpack_require__("./node_modules/sockjs-client/lib/event/emitter.js").EventEmitter
  , WebsocketDriver = __webpack_require__("./node_modules/sockjs-client/lib/transport/browser/websocket.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:websocket');
}

function WebSocketTransport(transUrl, ignore, options) {
  if (!WebSocketTransport.enabled()) {
    throw new Error('Transport created when disabled');
  }

  EventEmitter.call(this);
  debug('constructor', transUrl);

  var self = this;
  var url = urlUtils.addPath(transUrl, '/websocket');
  if (url.slice(0, 5) === 'https') {
    url = 'wss' + url.slice(5);
  } else {
    url = 'ws' + url.slice(4);
  }
  this.url = url;

  this.ws = new WebsocketDriver(this.url, [], options);
  this.ws.onmessage = function(e) {
    debug('message event', e.data);
    self.emit('message', e.data);
  };
  // Firefox has an interesting bug. If a websocket connection is
  // created after onunload, it stays alive even when user
  // navigates away from the page. In such situation let's lie -
  // let's not open the ws connection at all. See:
  // https://github.com/sockjs/sockjs-client/issues/28
  // https://bugzilla.mozilla.org/show_bug.cgi?id=696085
  this.unloadRef = utils.unloadAdd(function() {
    debug('unload');
    self.ws.close();
  });
  this.ws.onclose = function(e) {
    debug('close event', e.code, e.reason);
    self.emit('close', e.code, e.reason);
    self._cleanup();
  };
  this.ws.onerror = function(e) {
    debug('error event', e);
    self.emit('close', 1006, 'WebSocket connection broken');
    self._cleanup();
  };
}

inherits(WebSocketTransport, EventEmitter);

WebSocketTransport.prototype.send = function(data) {
  var msg = '[' + data + ']';
  debug('send', msg);
  this.ws.send(msg);
};

WebSocketTransport.prototype.close = function() {
  debug('close');
  var ws = this.ws;
  this._cleanup();
  if (ws) {
    ws.close();
  }
};

WebSocketTransport.prototype._cleanup = function() {
  debug('_cleanup');
  var ws = this.ws;
  if (ws) {
    ws.onmessage = ws.onclose = ws.onerror = null;
  }
  utils.unloadDel(this.unloadRef);
  this.unloadRef = this.ws = null;
  this.removeAllListeners();
};

WebSocketTransport.enabled = function() {
  debug('enabled');
  return !!WebsocketDriver;
};
WebSocketTransport.transportName = 'websocket';

// In theory, ws should require 1 round trip. But in chrome, this is
// not very stable over SSL. Most likely a ws connection requires a
// separate SSL connection, in which case 2 round trips are an
// absolute minumum.
WebSocketTransport.roundTrips = 2;

module.exports = WebSocketTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/xdr-polling.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  , XdrStreamingTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/xdr-streaming.js")
  , XhrReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/xhr.js")
  , XDRObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xdr.js")
  ;

function XdrPollingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XDRObject);
}

inherits(XdrPollingTransport, AjaxBasedTransport);

XdrPollingTransport.enabled = XdrStreamingTransport.enabled;
XdrPollingTransport.transportName = 'xdr-polling';
XdrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrPollingTransport;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/xdr-streaming.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  , XhrReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/xhr.js")
  , XDRObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xdr.js")
  ;

// According to:
//   http://stackoverflow.com/questions/1641507/detect-browser-support-for-cross-domain-xmlhttprequests
//   http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/

function XdrStreamingTransport(transUrl) {
  if (!XDRObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XDRObject);
}

inherits(XdrStreamingTransport, AjaxBasedTransport);

XdrStreamingTransport.enabled = function(info) {
  if (info.cookie_needed || info.nullOrigin) {
    return false;
  }
  return XDRObject.enabled && info.sameScheme;
};

XdrStreamingTransport.transportName = 'xdr-streaming';
XdrStreamingTransport.roundTrips = 2; // preflight, ajax

module.exports = XdrStreamingTransport;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/xhr-polling.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  , XhrReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/xhr.js")
  , XHRCorsObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js")
  , XHRLocalObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-local.js")
  ;

function XhrPollingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr', XhrReceiver, XHRCorsObject);
}

inherits(XhrPollingTransport, AjaxBasedTransport);

XhrPollingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }

  if (XHRLocalObject.enabled && info.sameOrigin) {
    return true;
  }
  return XHRCorsObject.enabled;
};

XhrPollingTransport.transportName = 'xhr-polling';
XhrPollingTransport.roundTrips = 2; // preflight, ajax

module.exports = XhrPollingTransport;


/***/ }),

/***/ "./node_modules/sockjs-client/lib/transport/xhr-streaming.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js")
  , AjaxBasedTransport = __webpack_require__("./node_modules/sockjs-client/lib/transport/lib/ajax-based.js")
  , XhrReceiver = __webpack_require__("./node_modules/sockjs-client/lib/transport/receiver/xhr.js")
  , XHRCorsObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-cors.js")
  , XHRLocalObject = __webpack_require__("./node_modules/sockjs-client/lib/transport/sender/xhr-local.js")
  , browser = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser.js")
  ;

function XhrStreamingTransport(transUrl) {
  if (!XHRLocalObject.enabled && !XHRCorsObject.enabled) {
    throw new Error('Transport created when disabled');
  }
  AjaxBasedTransport.call(this, transUrl, '/xhr_streaming', XhrReceiver, XHRCorsObject);
}

inherits(XhrStreamingTransport, AjaxBasedTransport);

XhrStreamingTransport.enabled = function(info) {
  if (info.nullOrigin) {
    return false;
  }
  // Opera doesn't support xhr-streaming #60
  // But it might be able to #92
  if (browser.isOpera()) {
    return false;
  }

  return XHRCorsObject.enabled;
};

XhrStreamingTransport.transportName = 'xhr-streaming';
XhrStreamingTransport.roundTrips = 2; // preflight, ajax

// Safari gets confused when a streaming ajax request is started
// before onload. This causes the load indicator to spin indefinetely.
// Only require body when used in a browser
XhrStreamingTransport.needBody = !!global.document;

module.exports = XhrStreamingTransport;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/browser-crypto.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

if (global.crypto && global.crypto.getRandomValues) {
  module.exports.randomBytes = function(length) {
    var bytes = new Uint8Array(length);
    global.crypto.getRandomValues(bytes);
    return bytes;
  };
} else {
  module.exports.randomBytes = function(length) {
    var bytes = new Array(length);
    for (var i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
    return bytes;
  };
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = {
  isOpera: function() {
    return global.navigator &&
      /opera/i.test(global.navigator.userAgent);
  }

, isKonqueror: function() {
    return global.navigator &&
      /konqueror/i.test(global.navigator.userAgent);
  }

  // #187 wrap document.domain in try/catch because of WP8 from file:///
, hasDomain: function () {
    // non-browser client always has a domain
    if (!global.document) {
      return true;
    }

    try {
      return !!global.document.domain;
    } catch (e) {
      return false;
    }
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/escape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Some extra characters that Chrome gets wrong, and substitutes with
// something else on the wire.
// eslint-disable-next-line no-control-regex, no-misleading-character-class
var extraEscapable = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g
  , extraLookup;

// This may be quite slow, so let's delay until user actually uses bad
// characters.
var unrollLookup = function(escapable) {
  var i;
  var unrolled = {};
  var c = [];
  for (i = 0; i < 65536; i++) {
    c.push( String.fromCharCode(i) );
  }
  escapable.lastIndex = 0;
  c.join('').replace(escapable, function(a) {
    unrolled[ a ] = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    return '';
  });
  escapable.lastIndex = 0;
  return unrolled;
};

// Quote string, also taking care of unicode characters that browsers
// often break. Especially, take care of unicode surrogates:
// http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
module.exports = {
  quote: function(string) {
    var quoted = JSON.stringify(string);

    // In most cases this should be very fast and good enough.
    extraEscapable.lastIndex = 0;
    if (!extraEscapable.test(quoted)) {
      return quoted;
    }

    if (!extraLookup) {
      extraLookup = unrollLookup(extraEscapable);
    }

    return quoted.replace(extraEscapable, function(a) {
      return extraLookup[a];
    });
  }
};


/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/event.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var random = __webpack_require__("./node_modules/sockjs-client/lib/utils/random.js");

var onUnload = {}
  , afterUnload = false
    // detect google chrome packaged apps because they don't allow the 'unload' event
  , isChromePackagedApp = global.chrome && global.chrome.app && global.chrome.app.runtime
  ;

module.exports = {
  attachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.addEventListener(event, listener, false);
    } else if (global.document && global.attachEvent) {
      // IE quirks.
      // According to: http://stevesouders.com/misc/test-postmessage.php
      // the message gets delivered only to 'document', not 'window'.
      global.document.attachEvent('on' + event, listener);
      // I get 'window' for ie8.
      global.attachEvent('on' + event, listener);
    }
  }

, detachEvent: function(event, listener) {
    if (typeof global.addEventListener !== 'undefined') {
      global.removeEventListener(event, listener, false);
    } else if (global.document && global.detachEvent) {
      global.document.detachEvent('on' + event, listener);
      global.detachEvent('on' + event, listener);
    }
  }

, unloadAdd: function(listener) {
    if (isChromePackagedApp) {
      return null;
    }

    var ref = random.string(8);
    onUnload[ref] = listener;
    if (afterUnload) {
      setTimeout(this.triggerUnloadCallbacks, 0);
    }
    return ref;
  }

, unloadDel: function(ref) {
    if (ref in onUnload) {
      delete onUnload[ref];
    }
  }

, triggerUnloadCallbacks: function() {
    for (var ref in onUnload) {
      onUnload[ref]();
      delete onUnload[ref];
    }
  }
};

var unloadTriggered = function() {
  if (afterUnload) {
    return;
  }
  afterUnload = true;
  module.exports.triggerUnloadCallbacks();
};

// 'unload' alone is not reliable in opera within an iframe, but we
// can't use `beforeunload` as IE fires it on javascript: links.
if (!isChromePackagedApp) {
  module.exports.attachEvent('unload', unloadTriggered);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/iframe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

var eventUtils = __webpack_require__("./node_modules/sockjs-client/lib/utils/event.js")
  , browser = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser.js")
  ;

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:utils:iframe');
}

module.exports = {
  WPrefix: '_jp'
, currentWindowId: null

, polluteGlobalNamespace: function() {
    if (!(module.exports.WPrefix in global)) {
      global[module.exports.WPrefix] = {};
    }
  }

, postMessage: function(type, data) {
    if (global.parent !== global) {
      global.parent.postMessage(JSON.stringify({
        windowId: module.exports.currentWindowId
      , type: type
      , data: data || ''
      }), '*');
    } else {
      debug('Cannot postMessage, no parent window.', type, data);
    }
  }

, createIframe: function(iframeUrl, errorCallback) {
    var iframe = global.document.createElement('iframe');
    var tref, unloadRef;
    var unattach = function() {
      debug('unattach');
      clearTimeout(tref);
      // Explorer had problems with that.
      try {
        iframe.onload = null;
      } catch (x) {
        // intentionally empty
      }
      iframe.onerror = null;
    };
    var cleanup = function() {
      debug('cleanup');
      if (iframe) {
        unattach();
        // This timeout makes chrome fire onbeforeunload event
        // within iframe. Without the timeout it goes straight to
        // onunload.
        setTimeout(function() {
          if (iframe) {
            iframe.parentNode.removeChild(iframe);
          }
          iframe = null;
        }, 0);
        eventUtils.unloadDel(unloadRef);
      }
    };
    var onerror = function(err) {
      debug('onerror', err);
      if (iframe) {
        cleanup();
        errorCallback(err);
      }
    };
    var post = function(msg, origin) {
      debug('post', msg, origin);
      setTimeout(function() {
        try {
          // When the iframe is not loaded, IE raises an exception
          // on 'contentWindow'.
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(msg, origin);
          }
        } catch (x) {
          // intentionally empty
        }
      }, 0);
    };

    iframe.src = iframeUrl;
    iframe.style.display = 'none';
    iframe.style.position = 'absolute';
    iframe.onerror = function() {
      onerror('onerror');
    };
    iframe.onload = function() {
      debug('onload');
      // `onload` is triggered before scripts on the iframe are
      // executed. Give it few seconds to actually load stuff.
      clearTimeout(tref);
      tref = setTimeout(function() {
        onerror('onload timeout');
      }, 2000);
    };
    global.document.body.appendChild(iframe);
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }

/* eslint no-undef: "off", new-cap: "off" */
, createHtmlfile: function(iframeUrl, errorCallback) {
    var axo = ['Active'].concat('Object').join('X');
    var doc = new global[axo]('htmlfile');
    var tref, unloadRef;
    var iframe;
    var unattach = function() {
      clearTimeout(tref);
      iframe.onerror = null;
    };
    var cleanup = function() {
      if (doc) {
        unattach();
        eventUtils.unloadDel(unloadRef);
        iframe.parentNode.removeChild(iframe);
        iframe = doc = null;
        CollectGarbage();
      }
    };
    var onerror = function(r) {
      debug('onerror', r);
      if (doc) {
        cleanup();
        errorCallback(r);
      }
    };
    var post = function(msg, origin) {
      try {
        // When the iframe is not loaded, IE raises an exception
        // on 'contentWindow'.
        setTimeout(function() {
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage(msg, origin);
          }
        }, 0);
      } catch (x) {
        // intentionally empty
      }
    };

    doc.open();
    doc.write('<html><s' + 'cript>' +
              'document.domain="' + global.document.domain + '";' +
              '</s' + 'cript></html>');
    doc.close();
    doc.parentWindow[module.exports.WPrefix] = global[module.exports.WPrefix];
    var c = doc.createElement('div');
    doc.body.appendChild(c);
    iframe = doc.createElement('iframe');
    c.appendChild(iframe);
    iframe.src = iframeUrl;
    iframe.onerror = function() {
      onerror('onerror');
    };
    tref = setTimeout(function() {
      onerror('timeout');
    }, 15000);
    unloadRef = eventUtils.unloadAdd(cleanup);
    return {
      post: post
    , cleanup: cleanup
    , loaded: unattach
    };
  }
};

module.exports.iframeEnabled = false;
if (global.document) {
  // postMessage misbehaves in konqueror 4.6.5 - the messages are delivered with
  // huge delay, or not at all.
  module.exports.iframeEnabled = (typeof global.postMessage === 'function' ||
    typeof global.postMessage === 'object') && (!browser.isKonqueror());
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/log.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var logObject = {};
['log', 'debug', 'warn'].forEach(function (level) {
  var levelExists;

  try {
    levelExists = global.console && global.console[level] && global.console[level].apply;
  } catch(e) {
    // do nothing
  }

  logObject[level] = levelExists ? function () {
    return global.console[level].apply(global.console, arguments);
  } : (level === 'log' ? function () {} : logObject.log);
});

module.exports = logObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/object.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }

, extend: function(obj) {
    if (!this.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj;
  }
};


/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/random.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__("./node_modules/sockjs-client/lib/utils/browser-crypto.js");

// This string has length 32, a power of 2, so the modulus doesn't introduce a
// bias.
var _randomStringChars = 'abcdefghijklmnopqrstuvwxyz012345';
module.exports = {
  string: function(length) {
    var max = _randomStringChars.length;
    var bytes = crypto.randomBytes(length);
    var ret = [];
    for (var i = 0; i < length; i++) {
      ret.push(_randomStringChars.substr(bytes[i] % max, 1));
    }
    return ret.join('');
  }

, number: function(max) {
    return Math.floor(Math.random() * max);
  }

, numberString: function(max) {
    var t = ('' + (max - 1)).length;
    var p = new Array(t + 1).join('0');
    return (p + this.number(max)).slice(-t);
  }
};


/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/transport.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:utils:transport');
}

module.exports = function(availableTransports) {
  return {
    filterToEnabled: function(transportsWhitelist, info) {
      var transports = {
        main: []
      , facade: []
      };
      if (!transportsWhitelist) {
        transportsWhitelist = [];
      } else if (typeof transportsWhitelist === 'string') {
        transportsWhitelist = [transportsWhitelist];
      }

      availableTransports.forEach(function(trans) {
        if (!trans) {
          return;
        }

        if (trans.transportName === 'websocket' && info.websocket === false) {
          debug('disabled from server', 'websocket');
          return;
        }

        if (transportsWhitelist.length &&
            transportsWhitelist.indexOf(trans.transportName) === -1) {
          debug('not in whitelist', trans.transportName);
          return;
        }

        if (trans.enabled(info)) {
          debug('enabled', trans.transportName);
          transports.main.push(trans);
          if (trans.facadeTransport) {
            transports.facade.push(trans.facadeTransport);
          }
        } else {
          debug('disabled', trans.transportName);
        }
      });
      return transports;
    }
  };
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/utils/url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var URL = __webpack_require__("./node_modules/url-parse/index.js");

var debug = function() {};
if (process.env.NODE_ENV !== 'production') {
  debug = __webpack_require__("./node_modules/debug/src/browser.js")('sockjs-client:utils:url');
}

module.exports = {
  getOrigin: function(url) {
    if (!url) {
      return null;
    }

    var p = new URL(url);
    if (p.protocol === 'file:') {
      return null;
    }

    var port = p.port;
    if (!port) {
      port = (p.protocol === 'https:') ? '443' : '80';
    }

    return p.protocol + '//' + p.hostname + ':' + port;
  }

, isOriginEqual: function(a, b) {
    var res = this.getOrigin(a) === this.getOrigin(b);
    debug('same', a, b, res);
    return res;
  }

, isSchemeEqual: function(a, b) {
    return (a.split(':')[0] === b.split(':')[0]);
  }

, addPath: function (url, path) {
    var qs = url.split('?');
    return qs[0] + path + (qs[1] ? '?' + qs[1] : '');
  }

, addQuery: function (url, q) {
    return url + (url.indexOf('?') === -1 ? ('?' + q) : ('&' + q));
  }

, isLoopbackAddr: function (addr) {
    return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^\[::1\]$/.test(addr);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/sockjs-client/lib/version.js":
/***/ (function(module, exports) {

module.exports = '1.6.1';


/***/ }),

/***/ "./node_modules/stompjs/index.js":
/***/ (function(module, exports, __webpack_require__) {

// Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
//
//   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0
//
// The library can be used in node.js app to connect to STOMP brokers over TCP 
// or Web sockets.

// Root of the `stompjs module`

var Stomp = __webpack_require__("./node_modules/stompjs/lib/stomp.js");
var StompNode = __webpack_require__("./node_modules/stompjs/lib/stomp-node.js");

module.exports = Stomp.Stomp;
module.exports.overTCP = StompNode.overTCP;
module.exports.overWS = StompNode.overWS;

/***/ }),

/***/ "./node_modules/stompjs/lib/stomp-node.js":
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.7.1

/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2013 [Jeff Mesnil](http://jmesnil.net/)
 */

(function() {
  var Stomp, net, overTCP, overWS, wrapTCP, wrapWS;

  Stomp = __webpack_require__("./node_modules/stompjs/lib/stomp.js");

  net = __webpack_require__("./node_modules/node-libs-browser/mock/empty.js");

  Stomp.Stomp.setInterval = function(interval, f) {
    return setInterval(f, interval);
  };

  Stomp.Stomp.clearInterval = function(id) {
    return clearInterval(id);
  };

  wrapTCP = function(port, host) {
    var socket, ws;
    socket = null;
    ws = {
      url: 'tcp:// ' + host + ':' + port,
      send: function(d) {
        return socket.write(d);
      },
      close: function() {
        return socket.end();
      }
    };
    socket = net.connect(port, host, function(e) {
      return ws.onopen();
    });
    socket.on('error', function(e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('close', function(e) {
      return typeof ws.onclose === "function" ? ws.onclose(e) : void 0;
    });
    socket.on('data', function(data) {
      var event;
      event = {
        'data': data.toString()
      };
      return ws.onmessage(event);
    });
    return ws;
  };

  wrapWS = function(url) {
    var WebSocketClient, connection, socket, ws;
    WebSocketClient = __webpack_require__("./node_modules/websocket/lib/browser.js").client;
    connection = null;
    ws = {
      url: url,
      send: function(d) {
        return connection.sendUTF(d);
      },
      close: function() {
        return connection.close();
      }
    };
    socket = new WebSocketClient();
    socket.on('connect', function(conn) {
      connection = conn;
      ws.onopen();
      connection.on('error', function(error) {
        return typeof ws.onclose === "function" ? ws.onclose(error) : void 0;
      });
      connection.on('close', function() {
        return typeof ws.onclose === "function" ? ws.onclose() : void 0;
      });
      return connection.on('message', function(message) {
        var event;
        if (message.type === 'utf8') {
          event = {
            'data': message.utf8Data
          };
          return ws.onmessage(event);
        }
      });
    });
    socket.connect(url);
    return ws;
  };

  overTCP = function(host, port) {
    var socket;
    socket = wrapTCP(port, host);
    return Stomp.Stomp.over(socket);
  };

  overWS = function(url) {
    var socket;
    socket = wrapWS(url);
    return Stomp.Stomp.over(socket);
  };

  exports.overTCP = overTCP;

  exports.overWS = overWS;

}).call(this);


/***/ }),

/***/ "./node_modules/stompjs/lib/stomp.js":
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.7.1

/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
 */

(function() {
  var Byte, Client, Frame, Stomp,
    __hasProp = {}.hasOwnProperty,
    __slice = [].slice;

  Byte = {
    LF: '\x0A',
    NULL: '\x00'
  };

  Frame = (function() {
    var unmarshallSingle;

    function Frame(command, headers, body) {
      this.command = command;
      this.headers = headers != null ? headers : {};
      this.body = body != null ? body : '';
    }

    Frame.prototype.toString = function() {
      var lines, name, skipContentLength, value, _ref;
      lines = [this.command];
      skipContentLength = this.headers['content-length'] === false ? true : false;
      if (skipContentLength) {
        delete this.headers['content-length'];
      }
      _ref = this.headers;
      for (name in _ref) {
        if (!__hasProp.call(_ref, name)) continue;
        value = _ref[name];
        lines.push("" + name + ":" + value);
      }
      if (this.body && !skipContentLength) {
        lines.push("content-length:" + (Frame.sizeOfUTF8(this.body)));
      }
      lines.push(Byte.LF + this.body);
      return lines.join(Byte.LF);
    };

    Frame.sizeOfUTF8 = function(s) {
      if (s) {
        return encodeURI(s).match(/%..|./g).length;
      } else {
        return 0;
      }
    };

    unmarshallSingle = function(data) {
      var body, chr, command, divider, headerLines, headers, i, idx, len, line, start, trim, _i, _j, _len, _ref, _ref1;
      divider = data.search(RegExp("" + Byte.LF + Byte.LF));
      headerLines = data.substring(0, divider).split(Byte.LF);
      command = headerLines.shift();
      headers = {};
      trim = function(str) {
        return str.replace(/^\s+|\s+$/g, '');
      };
      _ref = headerLines.reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        idx = line.indexOf(':');
        headers[trim(line.substring(0, idx))] = trim(line.substring(idx + 1));
      }
      body = '';
      start = divider + 2;
      if (headers['content-length']) {
        len = parseInt(headers['content-length']);
        body = ('' + data).substring(start, start + len);
      } else {
        chr = null;
        for (i = _j = start, _ref1 = data.length; start <= _ref1 ? _j < _ref1 : _j > _ref1; i = start <= _ref1 ? ++_j : --_j) {
          chr = data.charAt(i);
          if (chr === Byte.NULL) {
            break;
          }
          body += chr;
        }
      }
      return new Frame(command, headers, body);
    };

    Frame.unmarshall = function(datas) {
      var data;
      return (function() {
        var _i, _len, _ref, _results;
        _ref = datas.split(RegExp("" + Byte.NULL + Byte.LF + "*"));
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          data = _ref[_i];
          if ((data != null ? data.length : void 0) > 0) {
            _results.push(unmarshallSingle(data));
          }
        }
        return _results;
      })();
    };

    Frame.marshall = function(command, headers, body) {
      var frame;
      frame = new Frame(command, headers, body);
      return frame.toString() + Byte.NULL;
    };

    return Frame;

  })();

  Client = (function() {
    var now;

    function Client(ws) {
      this.ws = ws;
      this.ws.binaryType = "arraybuffer";
      this.counter = 0;
      this.connected = false;
      this.heartbeat = {
        outgoing: 10000,
        incoming: 10000
      };
      this.maxWebSocketFrameSize = 16 * 1024;
      this.subscriptions = {};
    }

    Client.prototype.debug = function(message) {
      var _ref;
      return typeof window !== "undefined" && window !== null ? (_ref = window.console) != null ? _ref.log(message) : void 0 : void 0;
    };

    now = function() {
      if (Date.now) {
        return Date.now();
      } else {
        return new Date().valueOf;
      }
    };

    Client.prototype._transmit = function(command, headers, body) {
      var out;
      out = Frame.marshall(command, headers, body);
      if (typeof this.debug === "function") {
        this.debug(">>> " + out);
      }
      while (true) {
        if (out.length > this.maxWebSocketFrameSize) {
          this.ws.send(out.substring(0, this.maxWebSocketFrameSize));
          out = out.substring(this.maxWebSocketFrameSize);
          if (typeof this.debug === "function") {
            this.debug("remaining = " + out.length);
          }
        } else {
          return this.ws.send(out);
        }
      }
    };

    Client.prototype._setupHeartbeat = function(headers) {
      var serverIncoming, serverOutgoing, ttl, v, _ref, _ref1;
      if ((_ref = headers.version) !== Stomp.VERSIONS.V1_1 && _ref !== Stomp.VERSIONS.V1_2) {
        return;
      }
      _ref1 = (function() {
        var _i, _len, _ref1, _results;
        _ref1 = headers['heart-beat'].split(",");
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          v = _ref1[_i];
          _results.push(parseInt(v));
        }
        return _results;
      })(), serverOutgoing = _ref1[0], serverIncoming = _ref1[1];
      if (!(this.heartbeat.outgoing === 0 || serverIncoming === 0)) {
        ttl = Math.max(this.heartbeat.outgoing, serverIncoming);
        if (typeof this.debug === "function") {
          this.debug("send PING every " + ttl + "ms");
        }
        this.pinger = Stomp.setInterval(ttl, (function(_this) {
          return function() {
            _this.ws.send(Byte.LF);
            return typeof _this.debug === "function" ? _this.debug(">>> PING") : void 0;
          };
        })(this));
      }
      if (!(this.heartbeat.incoming === 0 || serverOutgoing === 0)) {
        ttl = Math.max(this.heartbeat.incoming, serverOutgoing);
        if (typeof this.debug === "function") {
          this.debug("check PONG every " + ttl + "ms");
        }
        return this.ponger = Stomp.setInterval(ttl, (function(_this) {
          return function() {
            var delta;
            delta = now() - _this.serverActivity;
            if (delta > ttl * 2) {
              if (typeof _this.debug === "function") {
                _this.debug("did not receive server activity for the last " + delta + "ms");
              }
              return _this.ws.close();
            }
          };
        })(this));
      }
    };

    Client.prototype._parseConnect = function() {
      var args, connectCallback, errorCallback, headers;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      headers = {};
      switch (args.length) {
        case 2:
          headers = args[0], connectCallback = args[1];
          break;
        case 3:
          if (args[1] instanceof Function) {
            headers = args[0], connectCallback = args[1], errorCallback = args[2];
          } else {
            headers.login = args[0], headers.passcode = args[1], connectCallback = args[2];
          }
          break;
        case 4:
          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3];
          break;
        default:
          headers.login = args[0], headers.passcode = args[1], connectCallback = args[2], errorCallback = args[3], headers.host = args[4];
      }
      return [headers, connectCallback, errorCallback];
    };

    Client.prototype.connect = function() {
      var args, errorCallback, headers, out;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      out = this._parseConnect.apply(this, args);
      headers = out[0], this.connectCallback = out[1], errorCallback = out[2];
      if (typeof this.debug === "function") {
        this.debug("Opening Web Socket...");
      }
      this.ws.onmessage = (function(_this) {
        return function(evt) {
          var arr, c, client, data, frame, messageID, onreceive, subscription, _i, _len, _ref, _results;
          data = typeof ArrayBuffer !== 'undefined' && evt.data instanceof ArrayBuffer ? (arr = new Uint8Array(evt.data), typeof _this.debug === "function" ? _this.debug("--- got data length: " + arr.length) : void 0, ((function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
              c = arr[_i];
              _results.push(String.fromCharCode(c));
            }
            return _results;
          })()).join('')) : evt.data;
          _this.serverActivity = now();
          if (data === Byte.LF) {
            if (typeof _this.debug === "function") {
              _this.debug("<<< PONG");
            }
            return;
          }
          if (typeof _this.debug === "function") {
            _this.debug("<<< " + data);
          }
          _ref = Frame.unmarshall(data);
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            frame = _ref[_i];
            switch (frame.command) {
              case "CONNECTED":
                if (typeof _this.debug === "function") {
                  _this.debug("connected to server " + frame.headers.server);
                }
                _this.connected = true;
                _this._setupHeartbeat(frame.headers);
                _results.push(typeof _this.connectCallback === "function" ? _this.connectCallback(frame) : void 0);
                break;
              case "MESSAGE":
                subscription = frame.headers.subscription;
                onreceive = _this.subscriptions[subscription] || _this.onreceive;
                if (onreceive) {
                  client = _this;
                  messageID = frame.headers["message-id"];
                  frame.ack = function(headers) {
                    if (headers == null) {
                      headers = {};
                    }
                    return client.ack(messageID, subscription, headers);
                  };
                  frame.nack = function(headers) {
                    if (headers == null) {
                      headers = {};
                    }
                    return client.nack(messageID, subscription, headers);
                  };
                  _results.push(onreceive(frame));
                } else {
                  _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled received MESSAGE: " + frame) : void 0);
                }
                break;
              case "RECEIPT":
                _results.push(typeof _this.onreceipt === "function" ? _this.onreceipt(frame) : void 0);
                break;
              case "ERROR":
                _results.push(typeof errorCallback === "function" ? errorCallback(frame) : void 0);
                break;
              default:
                _results.push(typeof _this.debug === "function" ? _this.debug("Unhandled frame: " + frame) : void 0);
            }
          }
          return _results;
        };
      })(this);
      this.ws.onclose = (function(_this) {
        return function() {
          var msg;
          msg = "Whoops! Lost connection to " + _this.ws.url;
          if (typeof _this.debug === "function") {
            _this.debug(msg);
          }
          _this._cleanUp();
          return typeof errorCallback === "function" ? errorCallback(msg) : void 0;
        };
      })(this);
      return this.ws.onopen = (function(_this) {
        return function() {
          if (typeof _this.debug === "function") {
            _this.debug('Web Socket Opened...');
          }
          headers["accept-version"] = Stomp.VERSIONS.supportedVersions();
          headers["heart-beat"] = [_this.heartbeat.outgoing, _this.heartbeat.incoming].join(',');
          return _this._transmit("CONNECT", headers);
        };
      })(this);
    };

    Client.prototype.disconnect = function(disconnectCallback, headers) {
      if (headers == null) {
        headers = {};
      }
      this._transmit("DISCONNECT", headers);
      this.ws.onclose = null;
      this.ws.close();
      this._cleanUp();
      return typeof disconnectCallback === "function" ? disconnectCallback() : void 0;
    };

    Client.prototype._cleanUp = function() {
      this.connected = false;
      if (this.pinger) {
        Stomp.clearInterval(this.pinger);
      }
      if (this.ponger) {
        return Stomp.clearInterval(this.ponger);
      }
    };

    Client.prototype.send = function(destination, headers, body) {
      if (headers == null) {
        headers = {};
      }
      if (body == null) {
        body = '';
      }
      headers.destination = destination;
      return this._transmit("SEND", headers, body);
    };

    Client.prototype.subscribe = function(destination, callback, headers) {
      var client;
      if (headers == null) {
        headers = {};
      }
      if (!headers.id) {
        headers.id = "sub-" + this.counter++;
      }
      headers.destination = destination;
      this.subscriptions[headers.id] = callback;
      this._transmit("SUBSCRIBE", headers);
      client = this;
      return {
        id: headers.id,
        unsubscribe: function() {
          return client.unsubscribe(headers.id);
        }
      };
    };

    Client.prototype.unsubscribe = function(id) {
      delete this.subscriptions[id];
      return this._transmit("UNSUBSCRIBE", {
        id: id
      });
    };

    Client.prototype.begin = function(transaction) {
      var client, txid;
      txid = transaction || "tx-" + this.counter++;
      this._transmit("BEGIN", {
        transaction: txid
      });
      client = this;
      return {
        id: txid,
        commit: function() {
          return client.commit(txid);
        },
        abort: function() {
          return client.abort(txid);
        }
      };
    };

    Client.prototype.commit = function(transaction) {
      return this._transmit("COMMIT", {
        transaction: transaction
      });
    };

    Client.prototype.abort = function(transaction) {
      return this._transmit("ABORT", {
        transaction: transaction
      });
    };

    Client.prototype.ack = function(messageID, subscription, headers) {
      if (headers == null) {
        headers = {};
      }
      headers["message-id"] = messageID;
      headers.subscription = subscription;
      return this._transmit("ACK", headers);
    };

    Client.prototype.nack = function(messageID, subscription, headers) {
      if (headers == null) {
        headers = {};
      }
      headers["message-id"] = messageID;
      headers.subscription = subscription;
      return this._transmit("NACK", headers);
    };

    return Client;

  })();

  Stomp = {
    VERSIONS: {
      V1_0: '1.0',
      V1_1: '1.1',
      V1_2: '1.2',
      supportedVersions: function() {
        return '1.1,1.0';
      }
    },
    client: function(url, protocols) {
      var klass, ws;
      if (protocols == null) {
        protocols = ['v10.stomp', 'v11.stomp'];
      }
      klass = Stomp.WebSocketClass || WebSocket;
      ws = new klass(url, protocols);
      return new Client(ws);
    },
    over: function(ws) {
      return new Client(ws);
    },
    Frame: Frame
  };

  if (typeof exports !== "undefined" && exports !== null) {
    exports.Stomp = Stomp;
  }

  if (typeof window !== "undefined" && window !== null) {
    Stomp.setInterval = function(interval, f) {
      return window.setInterval(f, interval);
    };
    Stomp.clearInterval = function(id) {
      return window.clearInterval(id);
    };
    window.Stomp = Stomp;
  } else if (!exports) {
    self.Stomp = Stomp;
  }

}).call(this);


/***/ }),

/***/ "./node_modules/url-parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var required = __webpack_require__("./node_modules/requires-port/index.js")
  , qs = __webpack_require__("./node_modules/querystringify/index.js")
  , controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
  , CRHTLF = /[\n\r\t]/g
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , port = /:\d+$/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i
  , windowsDriveLetter = /^[a-zA-Z]:/;

/**
 * Remove control characters and whitespace from the beginning of a string.
 *
 * @param {Object|String} str String to trim.
 * @returns {String} A new string representing `str` stripped of control
 *     characters and whitespace from its beginning.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(controlOrWhitespace, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address, url) {     // Sanitize what is left of the address
    return isSpecial(url.protocol) ? address.replace(/\\/g, '/') : address;
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d*)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * Check whether a protocol scheme is special.
 *
 * @param {String} The protocol scheme of the URL
 * @return {Boolean} `true` if the protocol scheme is special, else `false`
 * @private
 */
function isSpecial(scheme) {
  return (
    scheme === 'file:' ||
    scheme === 'ftp:' ||
    scheme === 'http:' ||
    scheme === 'https:' ||
    scheme === 'ws:' ||
    scheme === 'wss:'
  );
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @param {Object} location
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address, location) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');
  location = location || {};

  var match = protocolre.exec(address);
  var protocol = match[1] ? match[1].toLowerCase() : '';
  var forwardSlashes = !!match[2];
  var otherSlashes = !!match[3];
  var slashesCount = 0;
  var rest;

  if (forwardSlashes) {
    if (otherSlashes) {
      rest = match[2] + match[3] + match[4];
      slashesCount = match[2].length + match[3].length;
    } else {
      rest = match[2] + match[4];
      slashesCount = match[2].length;
    }
  } else {
    if (otherSlashes) {
      rest = match[3] + match[4];
      slashesCount = match[3].length;
    } else {
      rest = match[4]
    }
  }

  if (protocol === 'file:') {
    if (slashesCount >= 2) {
      rest = rest.slice(2);
    }
  } else if (isSpecial(protocol)) {
    rest = match[4];
  } else if (protocol) {
    if (forwardSlashes) {
      rest = rest.slice(2);
    }
  } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
    rest = match[4];
  }

  return {
    protocol: protocol,
    slashes: forwardSlashes || isSpecial(protocol),
    slashesCount: slashesCount,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);
  address = address.replace(CRHTLF, '');

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '', location);
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (
    extracted.protocol === 'file:' && (
      extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) ||
    (!extracted.slashes &&
      (extracted.protocol ||
        extracted.slashesCount < 2 ||
        !isSpecial(url.protocol)))
  ) {
    instructions[3] = [/(.*)/, 'pathname'];
  }

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address, url);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      index = parse === '@'
        ? address.lastIndexOf(parse)
        : address.indexOf(parse);

      if (~index) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && isSpecial(url.protocol)) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';

  if (url.auth) {
    index = url.auth.indexOf(':');

    if (~index) {
      url.username = url.auth.slice(0, index);
      url.username = encodeURIComponent(decodeURIComponent(url.username));

      url.password = url.auth.slice(index + 1);
      url.password = encodeURIComponent(decodeURIComponent(url.password))
    } else {
      url.username = encodeURIComponent(decodeURIComponent(url.auth));
    }

    url.auth = url.password ? url.username +':'+ url.password : url.username;
  }

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (port.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    case 'username':
    case 'password':
      url[part] = encodeURIComponent(value);
      break;

    case 'auth':
      var index = value.indexOf(':');

      if (~index) {
        url.username = value.slice(0, index);
        url.username = encodeURIComponent(decodeURIComponent(url.username));

        url.password = value.slice(index + 1);
        url.password = encodeURIComponent(decodeURIComponent(url.password));
      } else {
        url.username = encodeURIComponent(decodeURIComponent(value));
      }
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.auth = url.password ? url.username +':'+ url.password : url.username;

  url.origin = url.protocol !== 'file:' && isSpecial(url.protocol) && url.host
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , host = url.host
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result =
    protocol +
    ((url.protocol && url.slashes) || isSpecial(url.protocol) ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  } else if (url.password) {
    result += ':'+ url.password;
    result += '@';
  } else if (
    url.protocol !== 'file:' &&
    isSpecial(url.protocol) &&
    !host &&
    url.pathname !== '/'
  ) {
    //
    // Add back the empty userinfo, otherwise the original invalid URL
    // might be transformed into a valid one with `url.pathname` as host.
    //
    result += '@';
  }

  //
  // Trailing colon is removed from `url.host` when it is parsed. If it still
  // ends with a colon, then add back the trailing colon that was removed. This
  // prevents an invalid URL from being transformed into a valid one.
  //
  if (host[host.length - 1] === ':' || (port.test(url.hostname) && !url.port)) {
    host += ':';
  }

  result += host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/websocket/lib/browser.js":
/***/ (function(module, exports, __webpack_require__) {

var _globalThis;
if (typeof globalThis === 'object') {
	_globalThis = globalThis;
} else {
	try {
		_globalThis = __webpack_require__("./node_modules/es5-ext/global.js");
	} catch (error) {
	} finally {
		if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
		if (!_globalThis) { throw new Error('Could not determine global this'); }
	}
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = __webpack_require__("./node_modules/websocket/lib/version.js");


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),

/***/ "./node_modules/websocket/lib/version.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/websocket/package.json").version;


/***/ }),

/***/ "./node_modules/websocket/package.json":
/***/ (function(module, exports) {

module.exports = {"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.35","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.63","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}

/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inspeccionPorPrioridad\">\r\n  <h1>PRIORIDAD</h1>\r\n   <h1>DE EMBALAJE</h1>\r\n  <div id=\"myProgress\">\r\n    <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\r\n      <h2>Prioridad 1</h2>\r\n      <p style=\"font-family: Roboto-Regular;display: unset;\"><label>Por Embalar: </label>{{formatoPzaP1 | acFormatNumber}} <label>  piezas</label></p>\r\n      <p style=\"font-family: Roboto-Regular\"><label *ngIf=\"!existo\">Tiempo Estimado de Embalaje: </label>{{TEIPrioridad1}}</p>\r\n    </div>\r\n    <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\r\n\r\n      <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\r\n        <h2>Prioridad 2</h2>\r\n        <p style=\"font-family: Roboto-Regular\"><label>Por Embalar: </label>{{formatoPzaP2 | acFormatNumber }}<label>piezas</label></p>\r\n        <p style=\"font-family: Roboto-Regular\"><label >Tiempo Estimado de Embalaje: </label>{{TEIPrioridad2}}</p>\r\n      </div>\r\n\r\n      <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\r\n        <h2>P2</h2>\r\n        <p style=\"font-family: Roboto-Regular;display: unset;\"><label>PE: </label>{{formatoPzaP2 | acFormatNumber }} </p>\r\n        <p><label >TEE: </label>{{TEIPrioridad2}}</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\r\n\r\n      <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\r\n        <h2>Prioridad 3</h2>\r\n        <p style=\"font-family: Roboto-Regular;display: unset;\"><label>Por Embalar: </label>{{formatoPzaP3}}</p>\r\n        <p style=\"font-family: Roboto-Regular\"><label >Tiempo Estimado de Embalaje: </label>{{TEIPrioridad3}}<label>piezas</label></p>\r\n      </div>\r\n\r\n      <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\r\n        <h2>P3</h2>\r\n        <p style=\"font-family: Roboto-Regular;display: unset;\"><label>PE: </label>{{formatoPzaP3}} </p>\r\n        <p style=\"font-family: Roboto-Regular\"><label >TEE: </label>{{TEIPrioridad3}}</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = "#myProgress{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;color:#9b9b9b;font-family:\"Roboto\",sans-serif;margin-left:0%;padding-top:25px}#Prioridad1{height:100%;background-color:#af3634;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad2{height:100%;background-color:#eeb253;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad3{height:100%;background-color:#63b257;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}p{font-size:11px;color:#fff;margin-top:1%}h1{font-size:22px;color:#008895;font-family:\"Roboto\",sans-serif}h2{font-size:20px;color:#fff}.tipoInspeccion{margin-top:2%;margin-bottom:2%;text-align:left;font-size:24px;font-weight:bold}.pedimento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.imgPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.txtPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Roboto\",sans-serif}.datoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Roboto\",sans-serif}.ordenDeCompra{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:121px}.txtOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Roboto\",sans-serif;padding-bottom:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.datoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Roboto\",sans-serif;padding-left:7%;-webkit-box-sizing:border-box;box-sizing:border-box}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraPrioridadesEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarraPrioridadesEmbalajeComponent = /** @class */ (function () {
    function BarraPrioridadesEmbalajeComponent(router, _pzasAInspeccionar, coreComponent) {
        this.router = router;
        this._pzasAInspeccionar = _pzasAInspeccionar;
        this.coreComponent = coreComponent;
        this.inspector = "aHernandezM";
    }
    BarraPrioridadesEmbalajeComponent.prototype.ngOnInit = function () {
        this.obtenerTotalesPorInspector(this.inspector);
        // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
        this.mostrarPartidasInspeccion();
        this.obTenerTotalesEmbalar();
    };
    // obtenerDatosInspector(){
    //     this.inspector=SessionUser.getInstance().getUser().getUsuario();
    //     console.log(this.inspector);
    // }
    BarraPrioridadesEmbalajeComponent.prototype.ngOnChanges = function (change) {
    };
    BarraPrioridadesEmbalajeComponent.prototype.obTenerTotalesEmbalar = function () {
        this.pzasP1 = this.datosPrioridades.prioridad1;
        this.pzasP2 = this.datosPrioridades.prioridad2;
        this.pzasP3 = this.datosPrioridades.prioridad3;
        console.log('Soy p1:::', this.pzasP1);
    };
    // Método para obtener el promedio por pieza de cada inspector.
    BarraPrioridadesEmbalajeComponent.prototype.obtenerTotalesPorInspector = function (inspector) {
        var _this = this;
        // var arregloTotalInspector : any = new Array<totalesInspeccionProducto>();
        this._pzasAInspeccionar.consultaDeTotalesPorInspector(inspector).subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.totalesInspeccionProducto1 = data.current;
            // let tiempoT = 1;
            var tiempoT = 0;
            tiempoT = _this.totalesInspeccionProducto1.promXpieza;
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
        }, function (error) {
        });
    };
    // Mostrar listado de partidas para inspeccion.
    BarraPrioridadesEmbalajeComponent.prototype.mostrarPartidasInspeccion = function () {
        // this.coreComponent.openModal(0);
        var _this = this;
        // Método para obtener el promedio por pieza de cada inspector.
        this._pzasAInspeccionar.obtenerPiezasPorPrioridad().subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.ContadorPiezasXPrioridad1 = data.current;
            // console.log("piezasPrioridad: " + this.ContadorPiezasXPrioridad1);
            _this.pzasP1; // = 10;
            _this.pzasP2; // = 10;
            _this.pzasP3; // = 0;
            //Test
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP2(_this.pzasP3);
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            console.log("filtra prioridad");
            // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
            /* this.partidaPrioridad = new PartidaInspeccion(); */
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    // Funciones para porcentajes
    BarraPrioridadesEmbalajeComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == true && value3 == false) {
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 50;
        }
        else if (value1 == true && value2 == false && value3 == true) {
            porcentaje = 70;
        }
        return porcentaje;
    };
    BarraPrioridadesEmbalajeComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == false && value2 == true && value3 == true) {
            this.descripcionLargaP2 = true;
            this.descripcionCortaP2 = false;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 70;
        }
        else if (value1 === true && value2 === true && value3 === true) {
            this.descripcionLargaP2 = false;
            this.descripcionCortaP2 = true;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 25;
        }
        else if (value1 === true && value2 === true && value3 === false) {
            this.descripcionCortaP2 = true;
            this.descripcionLargaP2 = false;
            porcentaje = 30;
        }
        return porcentaje;
    };
    BarraPrioridadesEmbalajeComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == false && value3 == true) {
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 30;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 25;
        }
        else if (value1 == false && value2 == true && value3 == true) {
            porcentaje = 30;
        }
        return porcentaje;
    };
    // Funciones para visualizar los recuadros por prioridad
    BarraPrioridadesEmbalajeComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraPrioridadesEmbalajeComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraPrioridadesEmbalajeComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    BarraPrioridadesEmbalajeComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        // Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraPrioridadesEmbalajeComponent.prototype, "datosPrioridades", void 0);
    BarraPrioridadesEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-barra-prioridades-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], BarraPrioridadesEmbalajeComponent);
    return BarraPrioridadesEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\r\n  <div class=\"barraProgreso\" style=\"width:70%; border-right: 1px solid #ECEEF0; \">\r\n    <div class=\"barra\">\r\n      <h1>PROGRESO DE {{evento| uppercase}}</h1>\r\n      <div class=\"datos\">\r\n        <div class=\"mensaje\">\r\n          <label style=\"font-style: italic; padding-top: 5px;\">{{mensaje}}</label>\r\n        </div>\r\n        <div class=\"hora\">\r\n          <img src='./assets/Images/reloj.svg' style=\"width: 37px;height: 37px;margin-right: 10px;\"/>\r\n          <label>{{hora}}</label>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"padreBarraProgreso\" style=\"position: relative\">\r\n        <div id=\"myProgress\">\r\n          <div id=\"myBar\" [style.width]=\"promedio\" [style.background]=\"colorBarra\" class=\"tooltip\">\r\n            <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</span>\r\n            <label class=\"textLeft\" *ngIf=\"textLeft\">{{formatoPzasInspeccionadas}}</label>\r\n            <!--<label class=\"textoBarraE\"style=\"font-size: 25px\">{{piezasEmbaladasHoy}} piezas embaladas</label>-->\r\n          </div>\r\n\r\n          <div id=\"myBar2\" [style.width]=\"restante\">\r\n            <span class=\"tooltiptextRigth\" *ngIf=\"toolTipRigth\">{{formatoPzasRestantes}}</span>\r\n            <label class=\"textRigth\" *ngIf=\"textRigth\" style=\"color:#9B9B9B\">{{formatoPzasRestantes}}</label>\r\n            <!--<label class=\"textoBarraE\"style=\"font-size: 25px\">{{piezasRestantesHoy}} piezas (restantes)</label>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"datosBarra\">\r\n          <div class=\"PzasIniciales\">\r\n            0 piezas\r\n          </div>\r\n          <div class=\"pzasTotales\">\r\n            {{totalPiezasHoy}} piezas\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--Empieza la parte de prioridad de embalaje-->\r\n  <div class=\"inspeccionPorPrioridad\" style=\"width: 30%; heigth: 100%;\">\r\n    <div  style=\"padding-left: 20px;height: 100%;\">\r\n    <h1>PRIORIDAD</h1>\r\n    <h1>DE EMBALAJE</h1>\r\n    <div id=\"myProgressPrio\">\r\n      <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\r\n        <h2>Prioridad 1</h2>\r\n        <p style=\"font-family: Roboto-Regular;display: unset;\"><label>Por Embalar: </label>{{formatoPzaP1 | acFormatNumber}} <label>  piezas</label></p>\r\n        <p style=\"font-family: Roboto-Regular\"><label *ngIf=\"!existo\">Tiempo Estimado de Embalaje: </label>{{TEIPrioridad1}}</p>\r\n      </div>\r\n      <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\r\n\r\n        <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\r\n          <h2>Prioridad 2</h2>\r\n          <p style=\"font-family: Roboto-Regular\"><label>Por Embalar: </label>{{formatoPzaP2 | acFormatNumber }}<label>piezas</label></p>\r\n          <p> style=\"font-family: Roboto-Regular\"<label >Tiempo Estimado de Embalaje: </label>{{TEIPrioridad2}}</p>\r\n        </div>\r\n\r\n        <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\r\n          <h2>P2</h2>\r\n          <p style=\"font-family: Roboto-Regular;display: unset;\"><label>PE: </label>{{formatoPzaP2 | acFormatNumber }} </p>\r\n          <p><label >TEE: </label>{{TEIPrioridad2}}</p>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\r\n\r\n        <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\r\n          <h2>Prioridad 3</h2>\r\n          <p style=\"font-family: Roboto-Regular;display: unset;\"><label>Por Embalar: </label>{{formatoPzaP3}}</p>\r\n          <p style=\"font-family: Roboto-Regular\"><label >Tiempo Estimado de Embalaje: </label>{{TEIPrioridad3}}<label>piezas</label></p>\r\n        </div>\r\n\r\n        <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\r\n          <h2>P3</h2>\r\n          <p style=\"font-family: Roboto-Regular;display: unset;\"><label>PE: </label>{{formatoPzaP3}} </p>\r\n          <p style=\"font-family: Roboto-Regular\"><label >TEE: </label>{{TEIPrioridad3}}</p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".principal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:100%;width:100%}.barraProgreso{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;padding-left:20px;padding-right:20px;min-height:180px;font-family:\"Roboto\",sans-serif}.textoBarraE{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Roboto}.barra{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:50%;text-align:left;font-family:\"Roboto\",sans-serif}#myProgress{width:100%;background-color:#ddd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:70px;font-weight:bold;margin-top:1%;color:#9b9b9b}#myBar{height:100%;text-align:center;line-height:30px;color:#424242;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative;display:inline-block}#myBar2{height:100%;background-color:#ddd;text-align:center;line-height:30px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#9b9b9b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block}.datosBarra{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1%;font-weight:bold;font-size:14px}.PzasIniciales{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.pzasTotales{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:1}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:130px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-60px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}#myBar .tooltiptextleft{visibility:visibility;width:119px;height:17%;background-color:#000;color:#fff;text-align:center;padding:5px 0;position:absolute;z-index:1;bottom:-10%;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myBar .tooltiptextleft::after{content:\" \";position:absolute;color:#424242;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000 transparent}#myBar2 .tooltiptextRigth{visibility:visibility;width:119px;height:17%;background-color:#000;color:#fff;text-align:center;padding:5px 0;position:absolute;z-index:1;bottom:-10%;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;margin-left:-60px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myBar2 .tooltiptextRigth::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000 transparent}.textLeft,.textRigth{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff}h1{font-size:22px;color:#008895;font-family:\"Roboto\",sans-serif}.datos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mensaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.hora{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;font-size:30px;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myProgressPrio{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;color:#9b9b9b;font-family:\"Roboto\",sans-serif;margin-left:0%;padding-top:27px}#Prioridad1{height:100%;background-color:#af3634;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad2{height:100%;background-color:#eeb253;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}#Prioridad3{height:100%;background-color:#63b257;text-align:left;line-height:19px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;font-size:20px;border:1px solid #fff;padding-left:10px;padding-top:6px}p{font-size:11px;color:#fff;margin-top:1%}h1{font-size:22px;color:#008895;font-family:\"Roboto\",sans-serif}h2{font-size:20px;color:#fff}.tipoInspeccion{margin-top:2%;margin-bottom:2%;text-align:left;font-size:24px;font-weight:bold}.pedimento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.imgPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.txtPedimento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Roboto\",sans-serif}.datoTexto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Roboto\",sans-serif}.ordenDeCompra{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:121px}.txtOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.tipoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-weight:500;font-family:\"Roboto\",sans-serif;padding-bottom:3%;-webkit-box-sizing:border-box;box-sizing:border-box}.datoTextoOC{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:30px;font-family:\"Roboto\",sans-serif;padding-left:7%;-webkit-box-sizing:border-box;box-sizing:border-box}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarraProgresoEmbalajeComponent = /** @class */ (function () {
    function BarraProgresoEmbalajeComponent(router, _totalpzasInsp, _pzasAInspeccionar) {
        this.router = router;
        this._totalpzasInsp = _totalpzasInsp;
        this._pzasAInspeccionar = _pzasAInspeccionar;
        ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
        this.mensajeNaranja = 'Con el ritmo de Embalaje actual, no lograrás cumplir el objetivo.';
        this.mensajeAzul = 'Acelera el ritmo de Embalaje, para que logres el objetivo.';
        this.mensajeVerde = 'Con el ritmo de Embalaje actual, lograrás cumplir el objetivo.';
        this.naranja = '#FF6700';
        this.azul = '#0098DA';
        this.verde = '#94BA13 ';
        /// Variables para tiempo
        this.tiempoP2 = 0;
        this.tiempoP3 = 0;
        this.piezasEmbaladasHoy = 0;
        this.piezasRestantesHoy = 0;
        // Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
        this.tiempo = 5;
        this.tiempoP1 = 0;
        // Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
        this.PzasInspeccionadas = 0;
        this.pzasTotales = 7;
        // inspector:string = "aHernandezM";
        this.evento = 'embalaje';
    }
    BarraProgresoEmbalajeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inspector = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        /*this.obtenerPiezasInspeccionadasHoy(this.inspector);*/
        this.obtenerPiezasInspeccion(this.inspector);
        this.idHora = setInterval(function () {
            _this.hora = _this.obtenerHoraActual();
        }, 1000);
        this.obtenerDatosBarraProgreso();
        /*Llamada a los metodos de prioridad*/
        this.obTenerTotalesEmbalar();
        // this.obtenerTotalesPorInspector(this.inspector);
        // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
        // this.mostrarPartidasInspeccion();
    };
    BarraProgresoEmbalajeComponent.prototype.ngOnChanges = function () {
        // this.mostrarTiempo();
        this.obtenerTotalesPorInspector();
        this.totTiempoEstimadoPrioridada = this.obtenerTotalTiemporEstimado(this.TEIPrioridad1, this.TEIPrioridad2, this.TEIPrioridad3);
        /*console.log('Recibi total-->', this.totTiempoEstimadoPrioridada );*/
        var recibirHoraActual = this.obtenerHoraActual();
        this.cambiarColorBarra(this.totTiempoEstimadoPrioridada, recibirHoraActual);
    };
    BarraProgresoEmbalajeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.idHora);
    };
    BarraProgresoEmbalajeComponent.prototype.mostrarTiempo = function () {
    };
    BarraProgresoEmbalajeComponent.prototype.obtenerDatosBarraProgreso = function () {
        this.totalPiezasHoy = this.datosBarra.totalPiezas;
        this.piezasEmbaladasHoy = this.datosBarra.piezasEmbaladas;
        this.piezasRestantesHoy = this.totalPiezasHoy - this.piezasEmbaladasHoy;
        this.formatoPzasInspeccionadas = (this.piezasEmbaladasHoy === 1) ? this.piezasEmbaladasHoy + ' pieza embalada' : this.piezasEmbaladasHoy + ' piezas embaladas';
        this.formatoPzasRestantes = (this.piezasRestantesHoy === 1) ? this.piezasRestantesHoy + ' pieza (restante)' : this.piezasRestantesHoy + ' piezas (restantes)';
        this.promedio = this.obtenerPorcentaje(this.totalPiezasHoy, this.piezasEmbaladasHoy) + '%';
        this.restante = this.obtenerRestante(this.totalPiezasHoy) + '%';
    };
    BarraProgresoEmbalajeComponent.prototype.obtenerPiezasInspeccion = function (inspector) {
        var _this = this;
        var piezasTotalesInspeccion;
        this._totalpzasInsp.sumaPiezasInspeccionadasyPorInspeccionar(this.inspector).subscribe(function (data) {
            // piezasTotalesInspeccion= data.current;
            // console.log(piezasTotalesInspeccion);
            var pzasTotales1 = piezasTotalesInspeccion;
            _this.pzasTotales = pzasTotales1;
            _this.obtenerRestante(_this.pzasTotales);
            _this.pzasRestantes = (_this.pzasTotales - _this.PzasInspeccionadas);
            _this.formatoPzasRestantes = (_this.pzasRestantes === 1) ? _this.pzasRestantes + ' pieza (restante)' : _this.pzasRestantes + ' piezas (restantes)';
            _this.promedio = _this.obtenerPorcentaje(_this.pzasTotales, _this.PzasInspeccionadas) + '%';
            _this.restante = _this.obtenerRestante(_this.pzasTotales) + '%';
        }, function (error) {
            // console.log("error al obtener las piezas en inspeccion..." + error);
        });
    };
    // Funcion para obtener porcentaje restante
    BarraProgresoEmbalajeComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.totalPiezasHoy, this.piezasEmbaladasHoy);
        return restante;
    };
    // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoEmbalajeComponent.prototype.obtenerPorcentaje = function (totales, inspeccionadas) {
        var porcentaje;
        if (totales < inspeccionadas) {
            alert('El numero de piezas inspeccionadas es mayor que las piezas totales');
        }
        else if (totales === inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            // alert("El porcentaje es: " + porcentaje + "%" + "\nFelicidades has inspeccionado todas las piezas");
        }
        else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 10) {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = true;
                this.textLeft = false;
            }
            else if (porcentaje >= 90 && porcentaje <= 100) {
                this.toolTipRigth = true;
                this.textRigth = false;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
            else {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
        }
        return porcentaje;
    };
    BarraProgresoEmbalajeComponent.prototype.obtenerHoraActual = function () {
        var fecha = new Date();
        var formatoMinutos = fecha.getMinutes();
        var minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        var formatoHoras = fecha.getHours();
        var hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        // let FormatoSegundos = fecha.getSeconds();
        // let seconds = (FormatoSegundos < 10) ? '0' + FormatoSegundos : FormatoSegundos;
        return hours + ':' + minutes + ' Hrs.';
    };
    /////////////////////////////////////  METODO PARA OBTENER EL TIEMPO TOTAL ESTIMADO DE LAS TRES PRIORIDADES ///////////////
    BarraProgresoEmbalajeComponent.prototype.obtenerTotalTiemporEstimado = function (tiempoP1, tiempoP2, tiempoP3) {
        var tiempoEstimadoP1 = tiempoP1;
        var tiempoEstimadoP2 = tiempoP2;
        var tiempoEstimadoP3 = tiempoP3;
        var tiempoTot = [];
        var hrP1 = 0;
        var hrP2 = 0;
        var hrP3 = 0;
        var minP1 = 0;
        var minP2 = 0;
        var minP3 = 0;
        // console.log('p1::', tiempoEstimadoP1);
        // console.log('p2::', tiempoEstimadoP2);
        // console.log('p3::', tiempoEstimadoP3);
        ////// calcular prioridad uno
        if (this.pzasP1 > 0) {
            var arrayTE1 = tiempoEstimadoP1.split(' ');
            if (arrayTE1.length > 3) {
                hrP1 = Number(arrayTE1[0]); // 1
                minP1 = Number(arrayTE1[2]); // 15
            }
            else if (arrayTE1.length === 2) {
                hrP1 = 0; // 1
                var minP1_1 = Number(arrayTE1[0]); //
            }
            else {
                hrP1 = 0; // 1
                minP1 = 0; //
            }
        }
        else {
            hrP1 = 0; // 1
            minP1 = 0; //
        }
        /////// calcular la prioridad 2
        if (this.pzasP2 > 0) {
            var arrayTE2 = tiempoEstimadoP2.split(' ');
            if (arrayTE2.length > 3) {
                hrP2 = Number(arrayTE2[0]); // 1
                minP2 = Number(arrayTE2[2]); // 15
            }
            else if (arrayTE2.length === 2) {
                hrP2 = 0; // 0
                var minP2_1 = Number(arrayTE2[0]); //
            }
            else {
                hrP2 = 0; // 0
                minP2 = 0;
            }
        }
        else {
            hrP2 = 0; // 0
            minP2 = 0;
        }
        if (this.pzasP3 > 0) {
            /////// calcular la prioridad 3
            var arrayTE3 = tiempoEstimadoP3.split(' ');
            if (arrayTE3.length > 3) {
                hrP3 = Number(arrayTE3[0]); //
                minP3 = Number(arrayTE3[2]); //
            }
            else if (arrayTE3.length === 2) {
                hrP3 = 0; // 1
                minP3 = Number(arrayTE3[0]); //
            }
            else {
                hrP3 = 0; // 1
                minP3 = 0; //
            }
        }
        else {
            hrP3 = 0; // 1
            minP3 = 0; //
        }
        var sumHrs = hrP1 + hrP2 + hrP3;
        var sumMin = minP1 + minP2 + minP3;
        if (sumMin >= 60) {
            var hrAux = (Math.floor((sumMin * 60) / 3600)) + sumHrs;
            var minAux = Math.floor(((sumMin * 60) % 3600) / 60);
            tiempoTot.push(hrAux);
            tiempoTot.push(minAux);
        }
        else {
            tiempoTot.push(sumHrs);
            tiempoTot.push(sumMin);
        }
        console.log(' Total tiempo::', tiempoTot);
        return tiempoTot;
    };
    ///////////////////// METODO PARA COLOCAR EL MENSAJE DE L BARRA DE PROGRESO SEGUN EL TIEMPO ESTIMADO Y LA HORA DE SALIDA////
    BarraProgresoEmbalajeComponent.prototype.cambiarColorBarra = function (tiempoE, horaActual) {
        console.log('Entre a cambiar color');
        console.log('Soy tiempo estimado', tiempoE);
        console.log('Soy tiempo eactual', horaActual);
        var hr = tiempoE[0];
        var min = tiempoE[1];
        //let tiempoEstimado:any = tiempoE;
        var tiempoRestante;
        //let hrSalida = '18:00 Hrs.'
        var hrSalida = '18:00 Hrs.';
        var hrRango = '17:00 Hrs.';
        ////////////////// SE CONVIERTE LA HORA DE SALIDA A NUMERICO //////////////////////////////////
        var partsSalida = hrSalida.split(':');
        var hrActualSalida = Number(partsSalida[0]);
        var auxSalida = partsSalida[1];
        var minSalida = auxSalida.split(' ');
        var minActualSalida = Number(minSalida[0]);
        var horaSalidaAComparar = Number(hrActualSalida + '.' + minActualSalida);
        var partsSalidaR = hrRango.split(':');
        var hrActualSalidaR = Number(partsSalidaR[0]);
        var auxSalidaR = partsSalidaR[1];
        var minSalidaR = auxSalidaR.split(' ');
        var minActualSalidaR = Number(minSalidaR[0]);
        var horaSalidaACompararR = Number(hrActualSalidaR + '.' + minActualSalidaR);
        /////////////// SE CONVIERTE LA HORA ACTUAL A NUMERICO ////////////////////////////////////
        var parts = horaActual.split(':');
        var hrActual = Number(parts[0]);
        var aux = parts[1];
        var partsmin = aux.split(' ');
        var minActual = Number(partsmin[0]);
        var sumaHoras = hrActual + hr;
        var sumaMin = minActual + min;
        // console.log('sum de hora + lo que fal-->', sumaHoras, ':', sumaMin);
        if (sumaMin >= 60) {
            var hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
            var minAux = Math.floor(((sumaMin * 60) % 3600) / 60);
            tiempoRestante = Number(hrAux + '.' + minAux);
        }
        else {
            tiempoRestante = Number(sumaHoras + '.' + sumaMin); // 18:30 Hrs
        }
        if ((tiempoRestante > horaSalidaACompararR) && (tiempoRestante < horaSalidaAComparar)) {
            this.mensaje = this.mensajeAzul;
            this.colorBarra = this.azul;
        }
        else if (tiempoRestante > horaSalidaAComparar) {
            this.mensaje = this.mensajeNaranja;
            this.colorBarra = this.naranja;
        }
        else if (tiempoRestante < horaSalidaAComparar) {
            this.mensaje = this.mensajeVerde;
            this.colorBarra = this.verde;
        }
    };
    /*METODOS DE PRIORIDADES*/
    BarraProgresoEmbalajeComponent.prototype.obTenerTotalesEmbalar = function () {
        this.pzasP1 = this.datosBarra.prioridad1;
        this.pzasP2 = this.datosBarra.prioridad2;
        this.pzasP3 = this.datosBarra.prioridad3;
        /// console.log('Soy p1:::', this.pzasP1);
        this.mostrarPartidasInspeccion();
    };
    // Mostrar listado de partidas para inspeccion.
    BarraProgresoEmbalajeComponent.prototype.mostrarPartidasInspeccion = function () {
        // this.coreComponent.openModal(0);
        //Test
        this.mostrarP1 = this.visualizarP1(this.pzasP1);
        this.mostrarP2 = this.visualizarP2(this.pzasP2);
        this.mostrarP3 = this.visualizarP3(this.pzasP3);
        this.formatoPzaP1 = (this.pzasP1 == 1) ? this.pzasP1 + ' pieza' : this.pzasP1 + ' piezas';
        this.formatoPzaP2 = (this.pzasP2 == 1) ? this.pzasP2 + ' pieza' : this.pzasP2 + ' piezas';
        this.formatoPzaP3 = (this.pzasP3 == 1) ? this.pzasP3 + ' pieza' : this.pzasP3 + ' piezas';
        this.porcentajeP1 = this.obtenerPorcentajeP1(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP2 = this.obtenerPorcentajeP2(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP3 = this.obtenerPorcentajeP3(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        /// console.log("filtra prioridad");
        // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
        /* this.partidaPrioridad = new PartidaInspeccion(); */
    };
    // Funciones para visualizar los recuadros por prioridad
    BarraProgresoEmbalajeComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraProgresoEmbalajeComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraProgresoEmbalajeComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    // Funciones para porcentajes
    BarraProgresoEmbalajeComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == true && value3 == false) {
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 50;
        }
        else if (value1 == true && value2 == false && value3 == true) {
            porcentaje = 70;
        }
        return porcentaje;
    };
    BarraProgresoEmbalajeComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == false && value2 == true && value3 == true) {
            this.descripcionLargaP2 = true;
            this.descripcionCortaP2 = false;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 70;
        }
        else if (value1 === true && value2 === true && value3 === true) {
            this.descripcionLargaP2 = false;
            this.descripcionCortaP2 = true;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 25;
        }
        else if (value1 === true && value2 === true && value3 === false) {
            this.descripcionCortaP2 = true;
            this.descripcionLargaP2 = false;
            porcentaje = 30;
        }
        return porcentaje;
    };
    BarraProgresoEmbalajeComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == false && value3 == true) {
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 30;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 25;
        }
        else if (value1 == false && value2 == true && value3 == true) {
            porcentaje = 30;
        }
        return porcentaje;
    };
    // Método para obtener el promedio por pieza de cada embalaje por prioridad, que trae el servicio.
    BarraProgresoEmbalajeComponent.prototype.obtenerTotalesPorInspector = function () {
        // let tiempoT = 1;
        for (var i = 0; i < this.datosTiempo.length; i++) {
            if (this.datosTiempo[i].prioridad === 'P1') {
                this.tiempoP1 = this.datosTiempo[i].tiempo;
            }
            else if (this.datosTiempo[i].prioridad === 'P2') {
                this.tiempoP2 = this.datosTiempo[i].tiempo;
            }
            else if (this.datosTiempo[i].prioridad === 'P3') {
                this.tiempoP3 = this.datosTiempo[i].tiempo;
            }
        }
        this.TEIPrioridad1 = this.obtenerTiempoEstimado(this.pzasP1, this.tiempoP1);
        // console.log('Tiempo estimado:', this.TEIPrioridad1);
        this.TEIPrioridad2 = this.obtenerTiempoEstimado(this.pzasP2, this.tiempoP2);
        this.TEIPrioridad3 = this.obtenerTiempoEstimado(this.pzasP3, this.tiempoP3);
    };
    ////////////////// SE OBTIENE EL TIEMPO ESTIMADO DEL TOTAL DE  PIEZAS QUE FALTAN POR EMABALAR ////////////////
    BarraProgresoEmbalajeComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        // Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraProgresoEmbalajeComponent.prototype, "datosBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraProgresoEmbalajeComponent.prototype, "datosTiempo", void 0);
    BarraProgresoEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-barra-progreso-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__["a" /* InspeccionService */]])
    ], BarraProgresoEmbalajeComponent);
    return BarraProgresoEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"PbolsaContenedoraPL\" style=\"height: 100%;\">\r\n  <div class=\"bolsaContenedoraPL\" *ngIf=\"bolsaContenedora\">\r\n    <div class=\"datosBolsaPL\">\r\n      <p class=\"p1\">Packing list - {{arrayFolioPacking[0]}}</p>\r\n    </div>\r\n    <div class=\"paquetesPl\">\r\n      <!--Empieza-->\r\n      <div class=\"numCopias\">\r\n        <div style=\"height: 90%\">\r\n          <div class=\"pPedido\">\r\n            <div class=\"btnMas\" (click)=\"mostrarDetalles('Pedido')\">\r\n              <div class=\"tooltip\">\r\n                <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n                <span class=\"tooltiptext\">\r\n                  <p>Ver detalles</p>\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"imgP\">\r\n              <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printPedido\" />\r\n              <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printPedido\" />\r\n            </div>\r\n            <div class=\"datosP\">\r\n              <p style=\"font-size: 18px;font-weight:bold;\">Pedido</p>\r\n              <p style=\"font-size: 15px;\">Total: {{arrayPathPedidosAux.length}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"total\">\r\n          <label>{{textoNumCopPed}}</label>\r\n        </div>\r\n      </div>\r\n      <!--Empieza-->\r\n      <div class=\"numCopias\">\r\n        <div style=\"height: 90%\">\r\n          <div class=\"pFacturas\">\r\n            <div class=\"btnMas\" (click)=\"mostrarDetalles('Facturas')\">\r\n              <div class=\"tooltip\">\r\n                <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n                <span class=\"tooltiptext\">\r\n                <p>Ver detalles</p>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"imgP\">\r\n              <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printFacturas\" />\r\n              <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printFacturas\" />\r\n            </div>\r\n            <div class=\"datosP\">\r\n              <p style=\"font-size: 18px;font-weight:bold;\">Facturas</p>\r\n              <p style=\"font-size: 15px;\">Total: {{arrayPathFacturas.length}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"total\">\r\n          <label> {{textoNumCopFac}}</label>\r\n        </div>\r\n    </div>\r\n      <!--Remisiones-->\r\n      <div class=\"pCertificados\" *ngIf=\"activarEvidencia\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Evidencia')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printCertificado\" />\r\n          <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printCertificado\" />\r\n        </div>\r\n        <div class=\"datosP\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Evidencias</p>\r\n          <p style=\"font-size: 15px;\">Total: {{arrayEvidenciaCFDI.length}}</p>\r\n        </div>\r\n      </div>\r\n      <!---->\r\n    <!--Termina-->\r\n      <!--Remisiones-->\r\n      <div class=\"pCertificados\" *ngIf=\"activarRemision\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Remisiones')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printCertificado\" />\r\n          <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printCertificado\" />\r\n        </div>\r\n        <div class=\"datosP\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Remisiones</p>\r\n          <p style=\"font-size: 15px;\">Total: {{arrayPathRemisiones.length}}</p>\r\n        </div>\r\n      </div>\r\n      <!---->\r\n      <div class=\"pCertificados\" *ngIf=\"activarCertificado\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Certificados')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printCertificado\" />\r\n          <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printCertificado\" />\r\n        </div>\r\n        <div class=\"datosP\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Certificados</p>\r\n          <p style=\"font-size: 15px;\">Total: {{arrayPathCertificados.length}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pHojaSeguridad\" *ngIf=\"activarHojaSeg\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Hoja de Seguridad')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printHoja\" />\r\n          <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printHoja\" />\r\n        </div>\r\n        <div class=\"datosP\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Hoja de Seguridad</p>\r\n          <p style=\"font-size: 15px;\">Total: {{arrayPathHojas.length}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pPackingList\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Packing List')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\" *ngIf=\"printPacking\" />\r\n          <img class=\"img\" src='./assets/Images/doc_verde.svg' style=\"height:121px;width:124px;\" *ngIf=\"!printPacking\" />\r\n        </div>\r\n        <div class=\"datosP\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Packing List</p>\r\n        </div>\r\n      </div>\r\n      <!--Nuevo-->\r\n      <div class=\"pCertificados\" *ngIf=\"arrayEntregas !== undefined && arrayEntregas.length > 0\">\r\n        <div class=\"btnMas\" (click)=\"mostrarDetalles('Entregas')\">\r\n          <div class=\"tooltip\">\r\n            <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:29px;width:29px;\" />\r\n            <span class=\"tooltiptext\">\r\n              <p>Ver detalles</p>\r\n              </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"imgP\">\r\n          <img class=\"img\" src='./assets/Images/doc_gris.svg' style=\"height:121px;width:124px;\"  />\r\n        </div>\r\n        <div class=\"datosP\" style=\"min-height: 70px;\">\r\n          <p style=\"font-size: 18px;font-weight:bold;\">Reg. Entrega Controlado</p>\r\n          <p style=\"font-size: 15px;\">Total: {{arrayPathEntregas.length}}</p>\r\n        </div>\r\n      </div>\r\n      <!---->\r\n    </div>\r\n  </div>\r\n  <footer *ngIf=\"mostrarFooter\" class=\"btnDireccionPL\">\r\n    <div *ngIf=\"btnImprimir\">\r\n      <a class=\"btnImprimir\" (click)=\"validarImpresion()\" [style.pointer-events]=\"colorBoton?'auto':'none'\" [style.background]=\"colorBoton?'#008895':'#D8D9DD'\">Imprimir</a>\r\n    </div>\r\n    <div *ngIf=\"btnFinalizar\" style=\"display: flex;\">\r\n      <div style=\"padding-right: 10px\">\r\n        <a class=\"btnImprimir\" (click)=\"popImpresion(false)\" style=\"width: 170px;\">Finalizar</a>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"btnGdl\" style=\"display: flex;\">\r\n      <div style=\"padding-right: 10px\">\r\n        <a class=\"btnImprimir\" (click)=\"popImpresion(false)\" style=\"width: 262px;\">CONTINUAR EMBALANDO</a>\r\n      </div>\r\n      <div>\r\n      <a class=\"btnImprimir\" (click)=\"popImpresion(true)\" style=\"background-color: #4BA92B\">GENERAR GUÍA</a>\r\n      </div>\r\n      <!--(click)=\"enviarPaquete()\"-->\r\n    </div>\r\n    <!-- <div *ngIf=\"footerSBorde\">\r\n      <a class=\"btnImprimir\">IMPRIMIR</a>\r\n    </div> -->\r\n  </footer>\r\n  <div *ngIf=\"activarPopFin\">\r\n    <pn-pop-up-exito [label]=\"'El proceso terminó exitosamente'\" [imagen]=\"false\" (desactivarPop)=\"desactivarPop($event)\"></pn-pop-up-exito>\r\n  </div>\r\n  <!--Fin guadalajara-->\r\n  <div *ngIf=\"activarPopFinGdl\">\r\n    <pn-pop-up-exito [label]=\"'El proceso terminó exitosamente'\" [imagen]=\"false\" (desactivarPop)=\"desactivarPopGdl($event)\"></pn-pop-up-exito>\r\n  </div>\r\n  <div *ngIf=\"activarPopVerificar\">\r\n    <pn-impresion-confirmada (activarFinalizar)=\"enviarPaquete($event)\" (cerrarPop)=\"popImpresionDes($event)\"></pn-impresion-confirmada>\r\n  </div>\r\n    <pq-detalle-paquete *ngIf=\"detalles\" [titulo]=\"titulo\" [array] = \"arrayRutas\" [foliosAux]= \"arrayFolios\" (cancelar) = \"cancelaDetalle ($event)\" [totales]=\"totCopias\"></pq-detalle-paquete>\r\n    <pn-ruta-envio *ngIf=\"activarEnvio\"></pn-ruta-envio>\r\n</div>\r\n<pn-pop-up-facturacion *ngIf=\"Cfdi\" (cerrarPop)=\"cerrarPop($event)\" [recibirLista]=\"datosCfdi\" [datosCliente] =\"valoresCLiente\"></pn-pop-up-facturacion>\r\n<pn-pop-up-medidas *ngIf=\"activeMedidas\" [client]=\"valoresCLiente\" (updateMeter)=\"actualizarPop($event)\"></pn-pop-up-medidas>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".bolsaContenedoraPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;height:95%;width:100%}.datosBolsaPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:100%;height:100%;max-height:150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;line-height:2.5;padding-left:17%;-webkit-box-sizing:border-box;box-sizing:border-box}.paquetesPl{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;font-family:\"Roboto\"}.pPedido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:265px;width:177px;border:2px solid #d8d9dd;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.pFacturas{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:265px;width:177px;border:2px solid #d8d9dd;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.pCertificados{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:265px;width:177px;border:2px solid #d8d9dd;margin:2%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.pHojaSeguridad{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:265px;width:177px;border:2px solid #d8d9dd;margin:2%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.pPackingList{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:265px;width:177px;border:2px solid #d8d9dd;margin:2%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.p1{font-size:22px;color:#000;line-height:26px;font-weight:bold}.p2{font-size:22px;color:#424242}.btnMas{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;height:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-top:10px;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.imgP{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.datosP{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;border:2px solid;height:70px;background-color:#008895;border:none;color:#fff;text-align:center;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:1}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:70px;background-color:#4c4c4c;color:#fff;text-align:left;border-radius:6px;padding:5px 10px 0px 0px;font-size:10px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-26px;font-size:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1;height:13px}.btnImprimir{width:190px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:20px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.btnDireccionPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:70px;max-height:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1800px}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%}.numCopias{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:300px;width:177px;margin:2%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.numCopias>.total{height:10%;background:#e8f4f5;color:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:15px;font-family:Roboto;font-weight:300}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BolsaContenedoraPackingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BolsaContenedoraPackingListComponent = /** @class */ (function () {
    function BolsaContenedoraPackingListComponent(coreComponent, _embalar, _electronService, _insertarPendienteService, comunService) {
        this.coreComponent = coreComponent;
        this._embalar = _embalar;
        this._electronService = _electronService;
        this._insertarPendienteService = _insertarPendienteService;
        this.comunService = comunService;
        this.cambiarVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambiarVistaEnvio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.arrayidPedido = new Array();
        this.titulo = "";
        this.mostrarFooter = true;
        this.colorBoton = true;
        this.validacionDeImpresion = true;
        this.btnImprimir = true;
        this.param = new __WEBPACK_IMPORTED_MODULE_1__class_Parametros_class__["a" /* Parametros */]();
        this.arrayPPedidos = [];
        this.arrayPedidos = new Array();
        this.arrayCertificados = new Array();
        this.arrayHoja = new Array();
        this.arrayFacturas = new Array();
        this.arrayPakingList = new Array();
        this.arrayRemisiones = new Array();
        this.arrayEvidenciaCFDI = new Array();
        this.arrayEntregas = new Array();
        this.arrayTodo = new Array();
        this.arrayPathPedidosAux = new Array();
        this.arrayPathPedidos = new Array();
        this.arrayPathFacturas = new Array();
        this.arrayPathCertificados = new Array();
        this.arrayPathHojas = new Array();
        this.arrayPathPakingList = new Array();
        this.arrayPathEntregas = new Array();
        this.arrayPathRemisiones = new Array();
        this.arrayPathEvidencia = new Array();
        this.arrayFolioPedidos = new Array();
        this.arrayFolioFacturas = new Array();
        this.arrayFolioCertificados = new Array();
        this.arrayFolioHojas = new Array();
        this.arrayFolioPacking = new Array();
        this.arrayFolioEntregas = new Array();
        this.arrayFolioRemisiones = new Array();
        this.arrayFolioEvidencia = new Array();
        this.arrayPathTodos = new Array();
        this.arrayFolios = new Array();
        this.arrayRutas = new Array();
        this.ruta = 'http://proquifa.com.mx:51725/SAP/';
        this.rutaGlass = 'http://proquifa.com.mx:51725/SAP/';
        this.printPedido = true;
        this.printCertificado = true;
        this.printHoja = true;
        this.printFacturas = true;
        this.printPacking = true;
        this._maximizer = false;
        this._fullScreen = false;
        this.totCopiadPedido = 0;
        this.totCopiasFac = 0;
        this.bolsaContenedora = true;
    }
    BolsaContenedoraPackingListComponent.prototype.ngOnInit = function () {
        this.usuarioId = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.maximizer();
        var idUsuarioLogueado = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.estado = 'Generar';
        this.param.idUsuarioLogueado = idUsuarioLogueado;
        this.param.estado = this.estado;
        this.generarDocumentos(this.param);
        this.obtenerFolioPorUsuario(idUsuarioLogueado);
    };
    BolsaContenedoraPackingListComponent.prototype.ngOnChanges = function () {
        this.llenarPaquete();
    };
    // mostrarDetalles(){
    //   this.bolsaContenedora = false;
    //   this.detalles = true;
    // }
    BolsaContenedoraPackingListComponent.prototype.mostrarDetalles = function (valor) {
        this.totCopias = '';
        this.titulo = valor;
        this.arrayRutas = [];
        this.arrayFolios = [];
        if (valor === 'Pedido') {
            if (this.arrayPathPedidosAux[0] !== undefined) {
                this.totCopias = this.textoNumCopPed;
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathPedidosAux);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioPedidos);
            }
        }
        else if (valor === 'Facturas') {
            if (this.arrayPathFacturas[0] !== undefined) {
                this.totCopias = this.textoNumCopFac;
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathFacturas);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioFacturas);
            }
        }
        else if (valor === 'Evidencia') {
            this.detalles = true;
            this.bolsaContenedora = false;
            this.mostrarFooter = false;
            Array.prototype.push.apply(this.arrayRutas, this.arrayPathEvidencia);
            Array.prototype.push.apply(this.arrayFolios, this.arrayFolioEvidencia);
        }
        else if (valor === 'Remisiones') {
            this.detalles = true;
            this.bolsaContenedora = false;
            this.mostrarFooter = false;
            Array.prototype.push.apply(this.arrayRutas, this.arrayPathRemisiones);
            Array.prototype.push.apply(this.arrayFolios, this.arrayFolioRemisiones);
        }
        else if (valor === 'Certificados') {
            if (this.arrayPathCertificados[0] !== undefined) {
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathCertificados);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioCertificados);
            }
        }
        else if (valor === 'Hoja de Seguridad') {
            if (this.arrayPathHojas[0] !== undefined) {
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathHojas);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioHojas);
            }
        }
        else if (valor === 'Packing List') {
            if (this.arrayPathPakingList[0] !== undefined) {
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathPakingList);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioPacking);
            }
        }
        else if (valor === 'Entregas') {
            if (this.arrayPathEntregas[0] !== undefined) {
                this.detalles = true;
                this.bolsaContenedora = false;
                this.mostrarFooter = false;
                Array.prototype.push.apply(this.arrayRutas, this.arrayPathEntregas);
                Array.prototype.push.apply(this.arrayFolios, this.arrayFolioEntregas);
            }
        }
    };
    BolsaContenedoraPackingListComponent.prototype.validarImpresion = function () {
        var archivo;
        // this.colorBoton= false;
        if (this.validacionDeImpresion === true) {
            /* if (this.arrayPathPedidosAux[0] !== undefined) {
               for (let j: number = 0; j < this.totCopiadPedido; j++) {
                 for (let i: number = 0; i < this.arrayPathPedidosAux.length; i++) {
                   // setTimeout(() => {
                   this.imprimirHorizontal(this.arrayPathPedidosAux[i]);
                   // }, 5000);
                 }
               }
              }
              if (this.arrayPathFacturas[0] !== undefined) {
                for (let j: number = 0; j < this.totCopiasFac; j++) {
                  for (let i: number = 0; i < this.arrayPathFacturas.length; i++) {
                    // setTimeout(() => {
                    this.imprimirHorizontal(this.arrayPathFacturas[i]);
                    // }, 5000);
                  }
                }
              }
              if (this.arrayPathCertificados[0] !== undefined) {
                for (let i: number = 0; i < this.arrayPathCertificados.length; i++) {
                  this.imprimirVertical(this.arrayPathCertificados[i]);
                }
              }
              if (this.arrayPathHojas[0] !== undefined) {
                for (let i: number = 0; i < this.arrayPathHojas.length; i++) {
                  this.imprimirVertical(this.arrayPathHojas[i]);
                }
              }
              if (this.arrayPathPakingList[0] !== undefined) {
                for (let i: number = 0; i < this.arrayPathPakingList.length; i++) {
                  // setTimeout(() => {
                    this.imprimirVertical(this.arrayPathPakingList[i]);
                  // }, 5000);
                }
         
               }*/
            if (this.rutaV.toLowerCase() === 'guadalajara') {
                this.btnGdl = true;
            }
            else {
                this.btnFinalizar = true;
            }
            this.btnImprimir = false;
        }
        else if (this.validacionDeImpresion === false) {
            this.btnFinalizar = false;
            this.colorBoton = false;
        }
    };
    BolsaContenedoraPackingListComponent.prototype.generarDocumentos = function (parametros) {
        var _this = this;
        var pzaPedido;
        var pzaFactura;
        this.coreComponent.openModal(1);
        var pedidos = new Array();
        this._embalar.generarDocumentos(parametros).subscribe(function (data) {
            debugger;
            if (data.current.documentos) {
                console.log(data.current);
                _this.arrayTodo = data.current.documentos;
                _this.totCopiadPedido = data.current.restricciones.numCopiasPedido;
                _this.totCopiasFac = data.current.restricciones.numCopiasFactura;
                if (_this.totCopiadPedido === 1) {
                    pzaPedido = 'Copia';
                }
                else {
                    pzaPedido = 'Copias';
                }
                if (_this.totCopiasFac === 1) {
                    pzaFactura = 'Copia';
                }
                else {
                    pzaFactura = 'Copias';
                }
                _this.textoNumCopPed = _this.totCopiadPedido + ' ' + pzaPedido;
                _this.textoNumCopFac = _this.totCopiasFac + ' ' + pzaFactura;
                _this.filtraDocumentos(_this.arrayTodo);
                // this.coreComponent.closeModal(0);
            }
            else {
                _this.textoNumCopPed = _this.totCopiadPedido + ' ' + 'copias';
                _this.textoNumCopFac = _this.totCopiasFac + ' ' + 'copias';
            }
            /******VALIDACIONES PARA LOS POPS DEL CFDI*****/
            if (data.current.CFDI && data.current.CFDI.length > 0) {
                _this.datosCfdi = data.current.CFDI;
                _this.Cfdi = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(1);
        });
    };
    BolsaContenedoraPackingListComponent.prototype.filtraDocumentos = function (lista) {
        var _this = this;
        var years;
        console.log(lista);
        //  this.arrayPedidos = lista["Pedido"];
        this.arrayPakingList = lista['PackingList'];
        this.arrayCertificados = lista['Certificado'];
        this.arrayHoja = lista['Hoja'];
        this.arrayFacturas = lista['Factura'];
        this.arrayRemisiones = lista['Remision'];
        this.arrayEvidenciaCFDI = lista['Evidencia'];
        this.arrayEntregas = lista['RegistroEntregaControlado'];
        //
        // if (this.arrayPedidos != undefined) {
        //   for (let pedido of this.arrayPedidos) {
        //     //this.arrayPPedidos[this.arrayPPedidos.length] = pedido.idPPedido;
        //     if (pedido.cPedido !== null && pedido.cpedido !== "") {
        //       this.path = this.ruta + "Pedidos/" + pedido.cpedido + ".pdf";
        //   //    this.arrayPathPedidos.push(this.path);
        //       this.arrayFolioPedidos.push(pedido.cpedido);
        //     //  this.arrayPathTodos.push(this.path);
        //     }
        //   }
        // }
        if (this.arrayEvidenciaCFDI !== undefined) {
            this.activarEvidencia = true;
            for (var i = 0; i < this.arrayEvidenciaCFDI.length; i++) {
                var numeroFactura = this.arrayEvidenciaCFDI[i].numeroFactura;
                var facturadoPor = this.arrayEvidenciaCFDI[i].facturadoPor;
                if (numeroFactura !== null && facturadoPor !== null && numeroFactura !== undefined) {
                    this.path = this.rutaGlass + 'OrdenDespacho/Evidencia/' + facturadoPor + '/' + numeroFactura + '.pdf';
                    this.arrayPathEvidencia.push(this.path);
                    this.arrayFolioEvidencia.push(numeroFactura);
                    this.arrayPathTodos.push(this.path);
                }
            }
        }
        else {
            this.activarEvidencia = false;
        }
        if (this.arrayRemisiones !== undefined) {
            this.activarRemision = true;
            var _loop_1 = function (i) {
                var numeroFactura = this_1.arrayRemisiones[i].numeroFactura;
                var facturadoPor = this_1.arrayRemisiones[i].facturadoPor;
                if (numeroFactura != null && facturadoPor != null && numeroFactura !== undefined) {
                    this_1.comunService.obtenerRuta(numeroFactura, 'Remisiones', facturadoPor).then(function (data) {
                        _this.path = data;
                        _this.arrayPathRemisiones.push(_this.path);
                        _this.arrayFolioRemisiones.push(numeroFactura);
                        _this.arrayPathTodos.push(_this.path);
                    });
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.arrayRemisiones.length; i++) {
                _loop_1(i);
            }
        }
        else {
            this.activarRemision = false;
        }
        if (this.arrayHoja !== undefined) {
            this.activarHojaSeg = true;
            for (var i = 0; i < this.arrayHoja.length; i++) {
                var fabricante = this.arrayHoja[i].idFabricante;
                var codigo = this.arrayHoja[i].codigo;
                this.path = this.ruta + 'HojasSeguridad/' + fabricante + '/' + codigo + '.pdf';
                this.arrayPathHojas.push(this.path);
                this.arrayFolioHojas.push(codigo);
                this.arrayPathTodos.push(this.path);
            }
        }
        else {
            this.activarHojaSeg = false;
        }
        if (this.arrayCertificados !== undefined) {
            this.activarCertificado = true;
            for (var i = 0; i < this.arrayCertificados.length; i++) {
                var fabricante = this.arrayCertificados[i].idFabricante;
                var codigo = this.arrayCertificados[i].codigo;
                var lote = this.arrayCertificados[i].lote;
                var folio = codigo + '-' + lote;
                if (codigo !== null && codigo !== '') {
                    if (lote !== null && lote !== '') {
                        this.path = this.ruta + 'Certificados/' + fabricante + '/' + folio + '.pdf';
                        this.arrayPathCertificados.push(this.path);
                        this.arrayFolioCertificados.push(folio);
                        this.arrayPathTodos.push(this.path);
                    }
                }
            }
        }
        else {
            this.activarCertificado = false;
        }
        if (this.arrayFacturas !== undefined) {
            var _loop_2 = function (i) {
                var numeroFactura = this_2.arrayFacturas[i].numeroFactura;
                var facturadoPor = this_2.arrayFacturas[i].facturadoPor;
                if (numeroFactura != null && facturadoPor != null && numeroFactura !== undefined) {
                    this_2.comunService.obtenerRuta(numeroFactura, 'facturas', facturadoPor).then(function (data) {
                        _this.path = data;
                        _this.arrayPathFacturas.push(_this.path);
                        _this.arrayFolioFacturas.push(numeroFactura);
                        _this.arrayPathTodos.push(_this.path);
                    });
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.arrayFacturas.length; i++) {
                _loop_2(i);
            }
        }
        if (this.arrayPakingList !== undefined) {
            var _loop_3 = function (i) {
                var folio = this_3.arrayPakingList[i].folio;
                if (folio !== null && folio !== '') {
                    this_3.comunService.obtenerRuta(folio, 'PackingList', '').then(function (data) {
                        _this.path = data;
                        _this.arrayPathPakingList.push(_this.path);
                        _this.arrayFolioPacking.push(folio);
                        _this.arrayPathTodos.push(_this.path);
                    });
                }
            };
            var this_3 = this;
            for (var i = 0; i < this.arrayPakingList.length; i++) {
                _loop_3(i);
            }
        }
        if (this.arrayEntregas !== undefined) {
            var _loop_4 = function (i) {
                var folio = this_4.arrayEntregas[i].folio;
                if (folio !== null && folio !== '') {
                    this_4.comunService.obtenerRuta(folio, 'Entregas', '').then(function (data) {
                        _this.path = data;
                        _this.arrayPathEntregas.push(_this.path);
                        _this.arrayFolioEntregas.push(folio);
                        _this.arrayPathTodos.push(_this.path);
                    });
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.arrayEntregas.length; i++) {
                _loop_4(i);
            }
        }
    };
    BolsaContenedoraPackingListComponent.prototype.imprimirHorizontal = function (archivo) {
        console.log('Imprimir path::', archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 1200, height: 900 });
        //    let newWin = new BrowserWindow({  width: 40, height: 40})
        var html = [
            "<html>",
            "<html><head>",
            "<style>",
            "@media print { @page @page {size: landscape}}",
            "</style></head>",
            "<body> <div class='contenido'>",
            //"<pq-visor-pdf  class='pdfViewer' [urlPdf]="+this.arrayPathPedidosAux[0]+"  ></pq-visor-pdf>",
            "<iframe id='pdf' width='100%' src='" + archivo + "'height='100%' alt='pdf' type='application/pdf'/>",
            // "<object id='pdf' data=" +this.arrayPathPedidosAux[0]+ "width='100%' height='500px'  type='application/pdf'>",
            // "<embed id='pdf' width='100%' src="+ "http://187.189.39.50:51725/SAP/HojasSeguridad/2/1012553.pdf" +"height='100%' alt='pdf' pluginspage='http:// www.adobe.com/products/acrobat/readstep2.html' type='application/pdf'/>",
            // "<div class='contentRefuse' id='preview' [innerHtml]='htmlToAdd | safeHtml' [style.height]='400px' [style.overflow]='hidden'>",
            "</div></body></html>"
        ].join("");
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
        newWin.hide();
        setTimeout(function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = "";
            var landscape = "landscape";
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description.indexOf("Zebra") === -1) {
                    impresora = print_1.name;
                }
                console.log('Nombre de impresora:', impresora);
            }
            newWin.webContents.print({ silent: true, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        }, 4000);
    };
    BolsaContenedoraPackingListComponent.prototype.imprimirVertical = function (archivo) {
        console.log('Imprimir path::', archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 1000, height: 1000 });
        var html = [
            "<html>",
            "<html><head>",
            "<style>",
            "@media print { @page @page {size: landscape}}",
            "</style></head>",
            "<body> <div class='contenido'>",
            "<object id='pdf' data=" + this.arrayPathPedidosAux[0] + "width='100%' height='500px'  type='application/pdf'>",
            "</body></html>"
        ].join("");
        PDFWindow.addSupport(newWin);
        //newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
        newWin.loadURL(archivo);
        newWin.hide();
        setTimeout(function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = "";
            var landscape = "landscape";
            for (var _i = 0, prints_2 = prints; _i < prints_2.length; _i++) {
                var print_2 = prints_2[_i];
                if (print_2.description.indexOf("Zebra") === -1) {
                    impresora = print_2.name;
                }
            }
            console.log('Nombre de impresora:', impresora);
            newWin.webContents.print({ silent: true, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        }, 5000);
    };
    BolsaContenedoraPackingListComponent.prototype.cancelaDetalle = function () {
        this.mostrarFooter = true;
        this.bolsaContenedora = true;
        this.detalles = false;
    };
    BolsaContenedoraPackingListComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    BolsaContenedoraPackingListComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    BolsaContenedoraPackingListComponent.prototype.llenarPaquete = function () {
        this.rutaV = this.valoresCLiente[0].ruta;
        this.destino = this.valoresCLiente[0].destino;
        // console.log('Soy ruta en vista Packing', this.rutaV);
        // console.log('Soy los id P Pedidos', this.arrayPakingList[0].folio);
    };
    BolsaContenedoraPackingListComponent.prototype.activarPopFinalizar = function () {
        this.activarPopFin = true;
    };
    BolsaContenedoraPackingListComponent.prototype.desactivarPop = function (desactivar) {
        var _this = this;
        ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
        var idEmpleado = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var parametro = {
            idUsuarioLogueado: idEmpleado,
            idHorario: this.valoresCLiente[0].idHorario
        };
        var avanzar;
        this._embalar.registrarEmbalarPedido(parametro).subscribe(function (data) {
            avanzar = data.current;
            _this.activarPopFin = desactivar;
            _this.comunService.finalizarEmb(true);
        });
        //
    };
    BolsaContenedoraPackingListComponent.prototype.enviarPaquete = function ($activador) {
        var meter;
        var idPedido;
        if (this.dateMeter !== undefined && this.dateMeter !== null) {
            meter = this.dateMeter;
        }
        else {
            meter = null;
        }
        if (this.validarEnvio !== 2) {
            this.idPedido = null;
        }
        this.paquete = { lista: this.arrayPPedidos,
            estado: 'Embalado',
            idUsuarioLogueado: this.usuarioId,
            folio: this.arrayPakingList[0].folio,
            ruta: this.rutaV,
            destinoAlmacen: this.destino,
            generGuia: this.tipoFinalizar,
            idCliente: this.valoresCLiente[0].idCliente,
            envio: meter,
            idPedido: this.idPedido
        };
        console.log('Soy el paquete a enviar', this.paquete);
        if (this.rutaV.toLowerCase() === 'guadalajara') {
            this.pedidosGDL(this.paquete);
        }
        else {
            this.actualizarEstadoInsertarPendiente(this.paquete);
        }
    };
    BolsaContenedoraPackingListComponent.prototype.actualizarEstadoInsertarPendiente = function (paquete) {
        var _this = this;
        this._insertarPendienteService.actualizarEstadoInsertarPendiente(paquete).subscribe(function (data) {
            console.log('finalice el proceso', data.current);
            if ((data.current > 0) && (data.current !== null)) {
                _this.activarPopFinalizar();
                /*this.comunService.finalizarEmb(true);*/
            }
            else {
                //  alert('No se agrego');
            }
        });
    };
    BolsaContenedoraPackingListComponent.prototype.obtenerArchivosPedido = function (objeto) {
        var _this = this;
        debugger;
        this.coreComponent.openModal(1);
        this._embalar.archivoPedido(objeto).subscribe(function (data) {
            var rutaAuxP;
            var arrayF;
            var nombre;
            console.log(data);
            var pedido;
            if (data.current !== undefined) {
                if (data.current.MailBot) {
                    for (var i_1 = 0; i_1 < data.current.MailBot.length; i_1++) {
                        //          this.arrayPathPedidosAux.push("data:application/pdf;base64,"+ data.current[i]);
                        var pathAux = data.current.MailBot[i_1].split('SAP/');
                        // let rutaAux = this.ruta +pathAux[1] ;
                        /* let rutaAux = this.rutaGlass +pathAux[1] ;*/
                        var rutaAux = _this.ruta + pathAux[1];
                        _this.arrayPathPedidosAux.push(rutaAux);
                        _this.arrayPathTodos.push(rutaAux);
                        arrayF = pathAux[1].split('/');
                        nombre = arrayF[arrayF.length - 1].split('.');
                        _this.arrayFolioPedidos.push(nombre[0]);
                    }
                }
                if (data.current.Pedido) {
                    for (var i = 0; i < data.current.Pedido.length; i++) {
                        rutaAuxP = data.current.Pedido[i];
                        _this.arrayPathPedidosAux.push(rutaAuxP);
                        _this.arrayPathTodos.push(rutaAuxP);
                        var dataP = data.current.Pedido[i].split('.pdf');
                        pedido = dataP[0].split('/');
                        _this.arrayFolioPedidos.push(pedido[pedido.length - 1]);
                    }
                }
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log(error);
        });
    };
    BolsaContenedoraPackingListComponent.prototype.obtenerFolioPorUsuario = function (idUsuario) {
        var _this = this;
        this.coreComponent.openModal(1);
        this._embalar.obtenerFolioPorUsuario(idUsuario).subscribe(function (data) {
            var objeto;
            var lista = new Array();
            lista = data.current;
            _this.validarEnvio = data.current[0].guiaCliente;
            if (data.current && data.current !== null && data.current[0].guiaCliente === 1) {
                _this.activeMedidas = true;
            }
            else {
                _this.activeMedidas = false;
            }
            _this.idPedido = data.current[0].pedido;
            for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                var folios = lista_1[_i];
                _this.arrayidPedido.push(folios.idPedido);
                // this.obtenerArchivosPedido("48851");
            }
            objeto = {
                'idUsuario': idUsuario,
                'estado': 'Generar'
            };
            _this.obtenerArchivosPedido(objeto);
            _this.arrayPPedidos = _this.arrayidPedido;
            console.log(_this.arrayidPedido);
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log(error);
        });
    };
    BolsaContenedoraPackingListComponent.prototype.popImpresion = function (tipoEnvio) {
        this.tipoFinalizar = tipoEnvio;
        this.activarPopVerificar = true;
        //TODO: Agregar validacion para imprimir etiqueta de Stock
    };
    BolsaContenedoraPackingListComponent.prototype.popImpresionDes = function ($desactivar) {
        this.activarPopVerificar = $desactivar;
    };
    BolsaContenedoraPackingListComponent.prototype.finalizar = function () {
        /*if (this.rutaV.toLowerCase() === 'guadalajara') {
          this.pedidosGDL();
        } else {
          this.enviarPaquete(true);
        }*/
    };
    /******METODO PARA CONSULTAR SI HAY MAS DE GUADALAJARA******/
    BolsaContenedoraPackingListComponent.prototype.pedidosGDL = function (paquete) {
        var _this = this;
        var idUsuarioLogueado = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this._embalar.pedidosGDL(paquete).subscribe(function (data) {
            console.log('Soy data', data);
            if (data.current === true) {
                _this.activarPopFinGdl = true;
            }
            else {
                _this.cambiarVistaEnvio.emit(true);
            }
        });
    };
    BolsaContenedoraPackingListComponent.prototype.desactivarPopGdl = function ($event) {
        this.activarPopFinGdl = false;
        this.cambiarVista.emit(true);
    };
    BolsaContenedoraPackingListComponent.prototype.cerrarPop = function () {
        this.Cfdi = false;
        this.generarDocumentos(this.param);
    };
    BolsaContenedoraPackingListComponent.prototype.actualizarPop = function (data) {
        this.activeMedidas = false;
        if (data.valor) {
            this.dateMeter = data.meter;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BolsaContenedoraPackingListComponent.prototype, "valoresCLiente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BolsaContenedoraPackingListComponent.prototype, "cambiarVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BolsaContenedoraPackingListComponent.prototype, "cambiarVistaEnvio", void 0);
    BolsaContenedoraPackingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-bolsa-contenedora-packing-list',
            template: __webpack_require__("./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_4_ngx_electron__["a" /* ElectronService */], __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], BolsaContenedoraPackingListComponent);
    return BolsaContenedoraPackingListComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"botoneraDiasEmbalaje\">\r\n\r\n  <div [ngClass]=\"botones[0]\" (click)=\"metodoDeDias('hoy', 0)\" style=\"border-right: 1px solid #88868A\">\r\n      <a id=\"dhoy\" style=\"font-family: 'Novecento';font-weight: bold;font-size: 18px\" >Hoy<span class=\"indice\">{{totalHoy}}</span></a>\r\n  </div>\r\n\r\n  <div [ngClass]=\"botones[1]\" (click)=\"metodoDeDias('manana', 1)\" style=\"border-right: 1px solid #88868A\">\r\n    <a  style=\"font-family: 'Novecento';font-weight: bold;font-size: 18px\">Mañana<span class=\"indice\">{{totalManana}}</span></a>\r\n  </div>\r\n\r\n  <div [ngClass]=\"botones[2]\" (click)=\"metodoDeDias('pasado', 2)\" style=\"border-right: 1px solid #88868A\">\r\n     <a  style=\"flex-direction: column;font-family: 'Novecento';font-weight: bold;font-size: 18px\">\r\n          Pasado Mañana <span class=\"indice\">{{totalPasadoM}}</span>\r\n      </a>\r\n  </div>\r\n\r\n  <div [ngClass]=\"botones[3]\" (click)=\"metodoDeDias('futuro', 3)\" style=\"border-right: 1px solid #88868A\">\r\n      <a style=\"font-family: 'Novecento';font-weight: bold;font-size: 18px\">Futuro <span class=\"indice\">{{totalFuturo}}</span></a>\r\n  </div>\r\n\r\n  <div [ngClass]=\"botones[4]\" (click)=\"metodoDeDias('todo', 4)\">\r\n      <a style=\"font-family: 'Novecento';font-weight: bold;font-size: 18px\">Todo <span class=\"indice\">{{totalTodo}}</span></a>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".botoneraDiasEmbalaje{width:100%;height:100%;background:#bdb76b;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.botonesDias{width:20%;height:100%;background:#eceef0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;position:relative}.botonesDiasActive{width:20%;height:100%;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;position:relative}.indice{position:relative;font-size:14px;top:-7px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BotoneraDiasEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BotoneraDiasEmbalajeComponent = /** @class */ (function () {
    function BotoneraDiasEmbalajeComponent(embalarServices) {
        this.embalarServices = embalarServices;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventHoy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.totalHoy = 0;
        this.totalTodo = 0;
        this.totalManana = 0;
        this.totalPasadoM = 0;
        this.totalFuturo = 0;
        this.botones = new Array(5).fill('botonesDias');
    }
    BotoneraDiasEmbalajeComponent.prototype.ngOnInit = function () {
        this.obtenerTotalEmbalarIndices('123');
    };
    BotoneraDiasEmbalajeComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
        this.iniciarBotonera = true;
        if (this.iniciarBotonera) {
            this.metodoDeDias('hoy', 0);
        }
    };
    BotoneraDiasEmbalajeComponent.prototype.metodoDeDias = function (boton, index) {
        console.log("boton", boton);
        this.botones.fill('botonesDias');
        this.botones[index] = 'botonesDiasActive';
        this.event.emit(boton);
    };
    BotoneraDiasEmbalajeComponent.prototype.obtenerTotalEmbalarIndices = function (val) {
        var _this = this;
        var i;
        this.embalarServices.ConsultaTotalEmbalar(val).subscribe(function (data) {
            _this.listaHoy = data.current.Hoy;
            _this.listaManana = data.current.Mañana;
            _this.listaFuturo = data.current.Futuro;
            _this.listaPasado = data.current.PasadoMañana;
            if (_this.listaHoy) {
                for (i = 0; i < _this.listaHoy.length; i++) {
                    if (_this.listaHoy[i].estado === 'Por Embalar') {
                        _this.totalHoy += _this.listaHoy[i].partidasHoy;
                    }
                }
            }
            if (_this.listaFuturo) {
                for (i = 0; i < _this.listaFuturo.length; i++) {
                    if (_this.listaFuturo[i].estado === 'Por Embalar') {
                        _this.totalFuturo += _this.listaFuturo[i].partidasFuturo;
                    }
                }
            }
            if (_this.listaManana) {
                for (i = 0; i < _this.listaManana.length; i++) {
                    if (_this.listaManana[i].estado === 'Por Embalar') {
                        _this.totalManana += _this.listaManana[i].partidasMañana;
                    }
                }
            }
            if (_this.listaPasado) {
                for (i = 0; i < _this.listaPasado.length; i++) {
                    if (_this.listaPasado[i].estado === 'Por Embalar') {
                        _this.totalPasadoM += _this.listaPasado[i].partidasPMañana;
                    }
                }
            }
            _this.totalTodo = _this.totalHoy + _this.totalManana + _this.totalPasadoM + _this.totalFuturo;
            /// console.log('Valores totales', this.totalHoy,  this.totalManana , this.totalPasadoM , this.totalFuturo);
            /// this.eventHoy.emit(this.totalHoy);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BotoneraDiasEmbalajeComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BotoneraDiasEmbalajeComponent.prototype, "eventHoy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BotoneraDiasEmbalajeComponent.prototype, "tHoy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BotoneraDiasEmbalajeComponent.prototype, "tTodo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BotoneraDiasEmbalajeComponent.prototype, "tManana", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BotoneraDiasEmbalajeComponent.prototype, "tPasadoM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BotoneraDiasEmbalajeComponent.prototype, "tFuturo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BotoneraDiasEmbalajeComponent.prototype, "iniciarBotonera", void 0);
    BotoneraDiasEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-botonera-dias-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], BotoneraDiasEmbalajeComponent);
    return BotoneraDiasEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detallePaquete\" *ngIf = \"!mostrarDatosPL\">\r\n  <div class=\"datosPaquete\" *ngIf=\"datosPaquete\">\r\n    <div class=\"encabezadoPaquete\" style=\"display: flex;\">\r\n      <div class=\"titulo\">{{valorTitulo}}</div>\r\n      <div class=\"barraBusqueda\">\r\n        <div class=\"buscar\" style=\"padding-left: 236px;\">\r\n          <div>\r\n            <div class=\"lupa\">\r\n              <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n            </div>\r\n            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Folios\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contenidoPaquete\" style=\"overflow: scroll; scrollbar-face-color: #FFFFFF;\" *ngIf=\"validarLista\">\r\n      <!--<iframe  class=\"pdfViewer\"  src=\"http://192.168.2.113:8080/Correos/attached/164b31226c9cd3e1_0.pdf\" #visor></iframe>-->\r\n      <div class=\"listado\">\r\n        <div class=\"lista\" [ngClass]=\"listaFolios[i]\" *ngFor=\"let item of folios; let i = index\"  (click)=\"seleccionarItemLista(i)\">\r\n          <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"item.check\" (event) = \"recibeCheck($event)\"></pq-check-gris-palomita-verde>\r\n          <label style=\"padding-left:13px;\"> {{item.folio}} </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"contenidoPaquete\" style=\"overflow: scroll; scrollbar-face-color: #FFFFFF;\" *ngIf=\"!validarLista\">\r\n      <div class=\"listado\">\r\n        <div  class=\"lista\" [ngClass]=\"listaFolios[i]\" *ngFor=\"let item of FoliosSearched; let i = index\"  (click)=\"seleccionarItemLista(i)\">\r\n          <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"item.check\"></pq-check-gris-palomita-verde>\r\n          <label style=\"padding-left:13px;\"> {{item.folio}} </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"totalesPaquete\">\r\n      <!-- <div class=\"btnSeleccion\" (click)=\"seleccionarTodaLaLista()\">\r\n        <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\"  [check]=\"mostrarTodosChecks\"></pq-check-gris-palomita-verde>\r\n        <label>Seleccionar todo</label>\r\n      </div> -->\r\n      <div class=\"totalNum\">\r\n        Total: #{{folios.length}}\r\n      </div>\r\n      <div class=\"totalCopias\">\r\n        {{totales}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<!-- <div class=\"datosPaquete\" style = \"display: flex; flex-direction: column;\" *ngIf=\"mostrarDatosPL && !datosPaquete\" > -->\r\n  <!-- <div class=\"txtPackingList\" >\r\n    <p class=\"p1\">Packing List</p>\r\n    <p class=\"p2\">{{foliosAux[0]}}</p>\r\n  </div> -->\r\n<!-- </div>  -->\r\n\r\n  <div class=\"pdfPaquete\" *ngIf=\"true\">\r\n  <!-- <webview src=\"http://201.161.12.60:51725/SAP/Facturas/Ryndem/62.pdf\" plugins></webview> //Esta funcion no la reconoce electron -->\r\n   <!-- <iframe *ngIf = \"visorPdf\" class=\"pdfViewer\"  src=\"http://192.168.2.113:8080/Correos/attached/164b31226c9cd3e1_0.pdf\" #visor></iframe> -->\r\n   <!-- //Version que funciona en electron.  -->\r\n   <!-- <iframe src=\"http://187.189.39.50:51725/SAP/Doctos/1955240939.pdf\" class=\"pdfViewer\"  #iframe></iframe>-->\r\n   <pq-visor-pdf  *ngIf = \"visorPdf2\" class=\"pdfViewer\" [urlPdf]=\"path\"  ></pq-visor-pdf>\r\n   <pq-visor-pdf  *ngIf = \"visorPdf\" class=\"pdfViewer\" [urlPdf]=\"path\"  ></pq-visor-pdf>\r\n   <p *ngIf=\"!colorBoton\"> Selecciona un folio para visualizar la documentación </p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"detallePaquete\" *ngIf = \"mostrarDatosPL\" style= \" display: flex; flex-direction: column;\">\r\n  <div class=\"txtPackingList\" >\r\n    <p class=\"p1\">Packing List</p>\r\n    <p class=\"p2\">{{foliosAux[0]}}</p>\r\n  </div>\r\n<!-- </div>  -->\r\n\r\n  <div class=\"pdfPaquete\" *ngIf=\"true\">\r\n  <!-- <webview src=\"http://201.161.12.60:51725/SAP/Facturas/Ryndem/62.pdf\" plugins></webview> //Esta funcion no la reconoce electron -->\r\n   <!-- <iframe *ngIf = \"visorPdf\" class=\"pdfViewer\"  #visor></iframe> -->\r\n   <!-- //Version que funciona en electron.  -->\r\n   <!-- <iframe src=\"http://201.161.12.60:51725/SAP/Facturas/Ryndem/62.pdf\" class=\"pdfViewer\"  #iframe></iframe>-->\r\n     <pq-visor-pdf  *ngIf = \"visorPdf2\" class=\"pdfViewer\" [urlPdf]=\"path\"  ></pq-visor-pdf>\r\n     <pq-visor-pdf  *ngIf = \"visorPdf\" class=\"pdfViewer\" [urlPdf]=\"path\"  ></pq-visor-pdf>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!---------------------------------------------Botones-------------------------------------->\r\n<footer *ngIf=\"mostrarFooter\" class=\"btnDireccionPL\" style=\"justify-content: space-between\">\r\n  <div style=\"padding-left: 11px\">\r\n    <a class=\"btnImprimir\" (click)=\"cambiarVista()\">REGRESAR</a>\r\n  </div>\r\n  <div>\r\n    <a class=\"btnImprimir\" (click)=\"validarImpresion()\" [style.pointer-events]=\"colorBoton?'auto':'none'\" [style.background]=\"colorBoton?'#008895':'#D8D9DD'\">IMPRIMIR</a>\r\n  </div>\r\n  <!-- <div *ngIf=\"footerSBorde\">\r\n    <a class=\"btnImprimir\">IMPRIMIR</a>\r\n  </div> -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.scss":
/***/ (function(module, exports) {

module.exports = ".buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:50px;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:30px}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{cursor:pointer;background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.detallePaquete{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:95%;width:100%;padding-bottom:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.datosPaquete{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding-left:10px;padding-right:17px}.encabezadoPaquete{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;border-bottom:1px solid #424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding-left:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.titulo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:22px;color:#424242;font-weight:bold;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.barraBusqueda{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.contenidoPaquete{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.contenidoPaquete ::-webkit-scrollbar-track{background-color:blue}.totalesPaquete{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;border-top:1px solid #424242;height:65px;max-height:65px;min-height:65px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding-left:20px;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #424242}.btnSeleccion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;font-weight:bold}.totalNum{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;font-weight:400;width:50%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.pdfPaquete{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#f3f3f4;-webkit-box-sizing:border-box;box-sizing:border-box;margin-right:20px}.pdfPaquete>p{font-family:\"Novecento\";font-size:40px;color:#d8d9dd;text-align:center;line-height:55px;font-weight:bold;width:476px}.txtPackingList{font-family:\"Roboto\",sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;line-height:1.5;display:-webkit-box;display:-ms-flexbox;display:flex;min-width:531px;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:25px}.txtPackingList>.p1{font-size:22px;color:#424242;font-weight:bold;height:35px;padding-right:10px}.txtPackingList>.p2{font-size:18px;color:#008895;height:25px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.lista{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:25px;color:#008895;height:60px}::-webkit-scrollbar-track{background-color:blue}.pdfViewer{min-width:450px;max-width:450px;border:20px solid #eceef0;height:100%;width:100%;display:inline-table}.btnDireccionPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:70px;max-height:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.btnImprimir{width:190px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.totalCopias{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#008895;font-size:16px;font-family:Roboto;font-weight:bold}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePaqueteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { VisorPdfComponent } from './../../../../components/shared/visor-pdf/visor-pdf.component';
var DetallePaqueteComponent = /** @class */ (function () {
    function DetallePaqueteComponent(_electronService) {
        this._electronService = _electronService;
        this.cancelar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validarLista = true;
        this.listaFolios = [];
        this.mostrarCheck = true;
        this.mostrarTodosChecks = false;
        this.FolioPackingList = "PL-010418-0046";
        this.mostrarFooter = true;
        this.checked = true;
        this.folios = [];
        this._maximizer = false;
        this._fullScreen = false;
        this.mostrarDatosPL = false;
        // this.datosPaquete= true;
    }
    DetallePaqueteComponent.prototype.ngOnInit = function () {
        this.maximizer();
        //      console.log(this.array);
        for (var i = 0; i < this.foliosAux.length; i++) {
            this.folios.push({ 'folio': this.foliosAux[i], 'check': false });
        }
        this.cargarvalores();
        this.seleccionarItemLista(0);
    };
    DetallePaqueteComponent.prototype.cargarvalores = function () {
        this.valorTitulo = this.titulo;
        if (this.valorTitulo == "Packing List") {
            console.log("seleccionaste PL");
            this.mostrarDatosPL = true;
            this.datosPaquete = false;
        }
        else {
            this.datosPaquete = true;
        }
    };
    DetallePaqueteComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.FoliosSearched = this.folios.slice();
        }
        else {
            this.folios.forEach(function (folio) {
                if (folio.folio
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.FoliosSearched = searchArrayAux;
            this.validarLista = false;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    ///metodo para cuando da clic en el checkbox
    DetallePaqueteComponent.prototype.seleccionarItemLista = function (i) {
        var auxCheck = this.folios[i].check;
        for (var j = 0; j < this.folios.length; j++) {
            if (this.folios[j].check === true) {
                this.folios[j].check = false;
            }
        }
        if (auxCheck === false && this.checked == true) {
            this.folios[i].check = true;
            this.colorBoton = true;
            this.path = this.array[i];
            if (this.visorPdf == false || this.visorPdf == undefined) {
                this.visorPdf2 = false;
                this.visorPdf = true;
            }
            else {
                this.visorPdf = false;
                this.visorPdf2 = true;
                this.colorBoton = true;
            }
        }
        else {
            this.colorBoton = false;
            this.path = "";
            this.visorPdf2 = false;
            this.visorPdf = false;
        }
    };
    ///METODO PARA CUANDO LE DA CLIC EN
    //
    //
    //
    //
    //
    //
    // SELECCIONAR TODOS
    DetallePaqueteComponent.prototype.seleccionarTodaLaLista = function () {
        var i;
        if (this.mostrarTodosChecks === false) {
            for (i = 0; i < this.folios.length; i++) {
                this.folios[i].check = true;
                console.log(this.folios[i].check);
            }
            this.colorBoton = true;
            this.mostrarTodosChecks = true;
        }
        else if (this.mostrarTodosChecks === true) {
            for (i = 0; i < this.folios.length; i++) {
                this.folios[i].check = false;
                console.log(this.folios[i].check);
            }
            this.mostrarTodosChecks = false;
        }
    };
    DetallePaqueteComponent.prototype.cambiarVista = function () {
        this.mostrarFooter = false;
        this.cancelar.emit();
    };
    DetallePaqueteComponent.prototype.validarImpresion = function () {
        /*this.imprimir();*/
        if (this.titulo === 'Pedido' || this.titulo === 'Facturas' || this.titulo === 'Remisiones') {
            // this.imprimirHorizontal(this.path);
            this.printWindow(this.path);
        }
        else if (this.titulo === 'Certificados' || this.titulo === 'Hoja de Seguridad' || this.titulo === 'Packing List' || this.titulo === 'Entregas') {
            // this.imprimirVertical(this.path);
            this.printWindow(this.path);
        }
    };
    /**/
    /*imprimirBien(url) {
      var iframe = this._printIframe;
      if (!this._printIframe) {
        iframe = this._printIframe = document.createElement('iframe');
        document.body.appendChild(iframe); iframe.style.display = 'none';
        iframe.onload = function() { setTimeout(function() { iframe.focus(); iframe.contentWindow.print(); }, 1); };
      } iframe.src = url; }*/
    /**/
    DetallePaqueteComponent.prototype.printWindow = function (doc) {
        console.log('Entre ');
        var shell = electron.shell;
        shell.openExternal(doc);
    };
    DetallePaqueteComponent.prototype.imprimirHorizontal = function (archivo) {
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 1200, height: 900 });
        //let newWin = new BrowserWindow({  width: 40, height: 40})
        var html = [
            "<html>",
            "<html><head>",
            "<style>",
            "@media print { @page @page {size: landscape}}",
            "</style></head>",
            "</html>"
        ].join("");
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
        newWin.hide();
        newWin.hide();
        setTimeout(function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = "";
            var landscape = "landscape";
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description == "ZebraTicket") {
                    impresora = print_1.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        }, 4000);
    };
    DetallePaqueteComponent.prototype.imprimirVertical = function (archivo) {
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 1000, height: 1000 });
        var html = [
            "<html>",
            "<html><head>",
            "<style>",
            "@media print { @page @page {size: landscape}}",
            "</style></head>",
            "</html>"
        ].join("");
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
        newWin.hide();
        newWin.hide();
        setTimeout(function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = "";
            var landscape = "landscape";
            for (var _i = 0, prints_2 = prints; _i < prints_2.length; _i++) {
                var print_2 = prints_2[_i];
                if (print_2.description == "ZebraTicket") {
                    impresora = print_2.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        }, 5000);
    };
    DetallePaqueteComponent.prototype.recibeCheck = function (valor) {
        this.checked = valor;
    };
    DetallePaqueteComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    DetallePaqueteComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DetallePaqueteComponent.prototype, "titulo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DetallePaqueteComponent.prototype, "array", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DetallePaqueteComponent.prototype, "foliosAux", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DetallePaqueteComponent.prototype, "totales", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DetallePaqueteComponent.prototype, "cancelar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("visor"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DetallePaqueteComponent.prototype, "visor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("iframe"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DetallePaqueteComponent.prototype, "_printIframe", void 0);
    DetallePaqueteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-detalle-paquete',
            template: __webpack_require__("./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */]])
    ], DetallePaqueteComponent);
    return DetallePaqueteComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"escanearCodigo\">\r\n\r\n  <div class=\"encabezado\" >\r\n    <div class=\"txtEncabezado\">\r\n    <p style=\"font-weight: bold;\">ESCANEA EL CÓDIGO</p>\r\n    <p style=\"font-weight: normal;\">{{valorTituloLista}} · {{valorRecibidoEmbalaje}}</p>\r\n  </div>\r\n  <div class=\"imgEncabezado\">\r\n    <img class=\"img\" src='./assets/Images/escanea_2.svg' style=\"height:42px;width:42px;\" />\r\n\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"contenido\">\r\n    <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"cambioDeEtiqueta\">\r\n      <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of etiquetaPorRefrigeracion; let i = index\"  (click)=\"seleccionarItemFD(i)\" style=\"display: flex;flex-direction:row;width: 100%; height: 80px;\">\r\n        <div class=\"dfSelect\"></div>\r\n        <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n          <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}} ·  </label>\r\n          <label>{{item.fd}}<p style=\"font-family: Roboto-Regular;text-align: center;\">{{item.piezas}} Piezas</p></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!cambioDeEtiqueta\">\r\n      <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of etiquetaPorQr; let i = index\"  (click)=\"seleccionarItemFD(i)\" style=\"display: flex;flex-direction:row;width: 100%; height: 80px;\">\r\n        <div class=\"dfSelect\"></div>\r\n        <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n          <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}} ·  </label>\r\n          <label >{{item.qr}} <p style=\"font-family: Roboto-Regular;text-align: center;\">{{item.piezas}} Piezas</p></label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = "divCambioColor{color:#008895}.escanearCodigo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.txtEncabezado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;font-size:21px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:flex;-ms-flex-direction:column;flex-direction:column;padding:8px 15px 15px 15px}.txtEncabezado>p{color:#008895}.imgEncabezado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-width:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.encabezado{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;-webkit-box-ordinal-group:1;order:0;-webkit-box-flex:0;flex:0 1 auto;align-self:auto;height:100%;width:100%;border-bottom:2px solid #424242;max-height:70px;min-height:70px;font-size:21px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.encabezado>p{color:#008895}.contenido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;overflow:scroll}.listaSeleccionada{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:6px solid #008895;background-color:#eceef0}.listaSeleccionada>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px;color:#008895}.listaSeleccionada>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;color:#008895}.listaSeleccionada>.datosLst>p{font-weight:normal;color:#424242}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px}.lista>.divActive .datosLst p{font-family:\"Roboto-Regular\";font-size:20px;color:#000;line-height:26px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscanearCodigoEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EscanearCodigoEmbalajeComponent = /** @class */ (function () {
    function EscanearCodigoEmbalajeComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.etiquetaPorRefrigeracion = [{ "fd": "FD-030916-4272-4", "piezas": 14 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7235-9", "piezas": 88 }];
        this.etiquetaPorQr = [{ "qr": "QR-030916-4272-4", "piezas": 14 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7235-9", "piezas": 88 }];
        this.etiquetaPorCongelacion = [{ "fd": "FD-030916-4272-4", "piezas": 14 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7235-9", "piezas": 88 }];
        this.listaFD = [];
        this.codigoAmbiente = this.etiquetaPorRefrigeracion[0];
        this.val = 0;
        this.cambioDeEtiqueta = false;
        this.cambioColorLetra = false;
    }
    EscanearCodigoEmbalajeComponent.prototype.ngOnInit = function () {
        this.seleccionarPrimero();
        this.seleccionarTitulo();
    };
    EscanearCodigoEmbalajeComponent.prototype.seleccionarTitulo = function () {
        if (this.cambioDeEtiqueta === true) {
            this.valorTituloLista = "FD’S ";
        }
        else if (this.cambioDeEtiqueta === false) {
            this.valorTituloLista = "QR’S ";
        }
    };
    EscanearCodigoEmbalajeComponent.prototype.seleccionarPrimero = function () {
        this.listaFD = [];
        this.listaFD = new Array(this.etiquetaPorRefrigeracion.length).fill('');
        this.listaFD[this.val] = 'divActive';
        this.codigoAmbiente = this.etiquetaPorRefrigeracion[this.val].fd;
        //console.log(this.codigoAmbiente);
        this.emitEvent.emit(this.codigoAmbiente);
    };
    EscanearCodigoEmbalajeComponent.prototype.seleccionarItemFD = function (i) {
        this.listaFD = [];
        this.listaFD = new Array(this.etiquetaPorRefrigeracion.length).fill('');
        this.listaFD[i] = 'divActive';
        //this.listaFD[i]= 'divCambioColor';
        this.codigoAmbiente = this.etiquetaPorRefrigeracion[i].fd;
        //console.log(this.codigoAmbiente);
        this.emitEvent.emit(this.codigoAmbiente);
        //return this.codigoAmbiente;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EscanearCodigoEmbalajeComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EscanearCodigoEmbalajeComponent.prototype, "emitEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EscanearCodigoEmbalajeComponent.prototype, "valorRecibidoEmbalaje", void 0);
    EscanearCodigoEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-escanear-codigo-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EscanearCodigoEmbalajeComponent);
    return EscanearCodigoEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"escanearCodigoPL\">\r\n  <textarea #textarea id=\"pedimento\" type=\"text\" name=\"firstname\" autofocus=\"focus\" (keydown.enter)=\"enter()\" class=\"texArea\"\r\n  [(ngModel)]=\"textoPedimento\"></textarea>\r\n  <div class=\"contenidoPL\" style=\"position: absolute\">\r\n    <div class=\"codigoPL\">\r\n      <img class=\"img\" src='./assets/Images/Codigo_de_barras.svg' style=\"height:210px;width:291px;\" *ngIf=\"escaneoNormal\" />\r\n      <img class=\"img\" src='./assets/Images/Codigo_de_barras_correcto.svg' style=\"height:210px;width:291px;\" *ngIf=\"escaneoCorrecto\" />\r\n      <img class=\"img\" src='./assets/Images/Codigo_de_barras_incorrecto.svg' style=\"height:210px;width:291px;\" *ngIf=\"escaneoIncorrecto\" />\r\n    </div>\r\n    <div class=\"TextoPL\">\r\n      <div class=\"textoNormalEscaneo\" *ngIf=\"escaneoNormal\">\r\n        <p>Escanear código de barras de </p>\r\n        <p>Bolsa Contenedora. </p>\r\n      </div>\r\n      <div class=\"textoCorrectoEscaneo\" *ngIf=\"escaneoCorrecto\">\r\n        <p>Lectura del código de barras de Bolsa</p>\r\n        <p>Contenedora de la <label style=\"color:#008895;font-weight:bold\">OE-280991-0001</label> correcta. </p>\r\n      </div>\r\n      <div class=\"textoIncorrectoEscaneo\" *ngIf=\"escaneoIncorrecto\">\r\n        <p>Lectura del código de barras de Bolsa</p>\r\n        <p>Contenedora de la <label style=\"color:#008895;font-weight:bold;\">OE-280991-0001</label></p>\r\n        <p> incorrecta.</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".escanearCodigoPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;font-family:\"Roboto\";display:flex;flex-direction:column;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:100%;width:100%}.codigoPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:auto;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0% 6% 6% 6%;-webkit-box-sizing:border-box;box-sizing:border-box}.TextoPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:auto;width:100%;color:#323433;font-size:55px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.texArea{width:100%;height:100%;border:1px solid red;z-index:1;opacity:0}.contenidoPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscanearCodigoPackingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EscanearCodigoPackingListComponent = /** @class */ (function () {
    function EscanearCodigoPackingListComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = true;
        this.textoPedimento = "";
        this.escaneoNormal = true;
    }
    EscanearCodigoPackingListComponent.prototype.ngOnInit = function () {
        this.focus = true;
    };
    EscanearCodigoPackingListComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    EscanearCodigoPackingListComponent.prototype.enter = function () {
        var _this = this;
        console.log("llega enter" + this.textoPedimento);
        // alert("txtEnviado: " + this.textoPedimento);
        if (this.textoPedimento.length > 1) {
            this.escaneoNormal = false;
            this.escaneoCorrecto = true;
            this.cambioVistaEscaneo = true;
            setTimeout(function () {
                _this.event.emit(_this.cambioVistaEscaneo);
            }, 1000);
        }
        else {
            // console.log("Error al escanear codigo.");
            this.escaneoNormal = false;
            this.escaneoIncorrecto = true;
            setTimeout(function () {
                _this.escaneoNormal = true;
                _this.escaneoIncorrecto = false;
            }, 1000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EscanearCodigoPackingListComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EscanearCodigoPackingListComponent.prototype, "event", void 0);
    EscanearCodigoPackingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-escanear-codigo-packing-list',
            template: __webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EscanearCodigoPackingListComponent);
    return EscanearCodigoPackingListComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fdEmbalaje\">\r\n\r\n  <div class=\"encabezado\">\r\n    <p style=\"font-weight: bold;\">{{FD}}</p>\r\n    <p style=\"font-weight: normal;\">{{valorRecibidoEmbalajeFD}}</p>\r\n  </div>\r\n\r\n  <div class=\"contenidoFd\">\r\n    <div class=\"agregarDescripcionFd\">\r\n      <div class=\"txtDescripcionFD\">\r\n        <label style=\"font-family: Novecento;\">Escanea las Bolsas de Inspección y colocalas dentro del empaque contenedor correspondiente. </label>\r\n      </div>\r\n      <div class=\"imgDEscripcionFD\" (click)=\"agregarPaquete()\" [style.pointer-events] = \"botonA?'auto':'none'\" *ngIf=\"botonA\">\r\n        <img class=\"img\" src='./assets/Images/Agregar.svg' style=\"height:28px;width:28px;\"/>\r\n      </div>\r\n      <div class=\"imgDEscripcionFD\" (click)=\"agregarPaquete()\" [style.pointer-events] = \"botonA?'auto':'none'\" *ngIf=\"!botonA\">\r\n        <img class=\"img\" src='./assets/Images/mas_inactivo.svg' style=\"height:28px;width:28px;\"/>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"EscanearQrFd\">\r\n      <div class=\"Escanear\">\r\n        <div class=\"txtEscanear\">\r\n        <p class=\"p1\">1.- ESCANEAR </p>\r\n        <p class=\"p2\">Código QR, de </p>\r\n        <p class=\"p2\">bolsa de Inspección</p>\r\n        </div>\r\n        <div class=\"imgEscanear\">\r\n          <p>\r\n            <img class=\"img\" src='./assets/Images/escanea.svg' style=\"height:102px;width:276px;\" *ngIf=\"true\" />\r\n            <img class=\"img\" src='./assets/Images/escanea_gris.svg' style=\"height:102px;width:276px;\" *ngIf=\"false\" />\r\n          </p>\r\n          <p class=\"p3\" style=\"font-family: Novecentol\">{{FD}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"Flecha\">\r\n        <img class=\"img\" src='./assets/Images/seguimiento.svg' style=\"height:22px;width:276px;\" />\r\n      </div>\r\n\r\n      <div class=\"Guardar\">\r\n        <div class=\"txtGuardar\">\r\n        <p class=\"p1\">2.- GUARDAR</p>\r\n        <p class=\"p2\">Bolsa de Inspección,</p>\r\n        <p class=\"p2\">en {{textoTipo}}</p>\r\n        </div>\r\n        <div class=\"imgGuardar\">\r\n          <p>\r\n            <img class=\"img\" src='./assets/Images/hielera_etiqueta.svg' style=\"height:177px;width:161px;\" *ngIf=\"tipoImgenHielera\" />\r\n            <img class=\"img\" src='./assets/Images/bolsa_transito.svg' style=\"height:198px;width:163px;\" *ngIf=\"tipoImgenBolsa\" />\r\n          </p>\r\n          <p class=\"p3\" style=\"font-family: Novecento\">{{folio}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"comentarios\" *ngIf=\"comentarios !== ''\">\r\n    <label>Comentarios: </label>\r\n    <textarea disabled=\"true\" *ngIf=\"comentarios !== ''\">{{comentarios}}</textarea>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".fdEmbalaje{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;font-family:\"Roboto\",sans-serif}.encabezado{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;-webkit-box-ordinal-group:1;order:0;-webkit-box-flex:0;flex:0 1 auto;align-self:auto;height:100%;width:100%;border-bottom:2px solid #424242;max-height:70px;font-size:21px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;padding:8px 15px 15px}.encabezado>p{color:#008895}.contenido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;font-family:\"Roboto\",sans-serif}.agregarDescripcionFd{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:15px 0 10px}.txtDescripcionFD{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:12px;color:#424242;font-family:\"Roboto\",sans-serif}.imgDEscripcionFD{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.EscanearQrFd{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:350.9px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%}.Escanear{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-width:239px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.txtEscanear{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:60%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:center}.imgEscanear{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.Flecha{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-width:276px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.Guardar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-width:231px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.txtGuardar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:60%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:center}.imgGuardar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.p1{color:#008895;font-size:18px;font-weight:bold}.p2{color:#000;font-size:18px;font-weight:normal;line-height:1.5}.p3{color:#008895;font-size:16px;font-weight:normal;LINE-HEIGHT:2.5}.comentarios{width:100%;height:130px;line-height:1.5}.comentarios>textArea{width:100%;height:100px;outline:0 none;border:1px solid #eaeaea;font-size:16px;font-family:Roboto;font-weight:400;color:#242424;background-color:#f8f8f8;padding:10px 10px 10px;-webkit-box-sizing:border-box;box-sizing:border-box}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FdEmbalajeComponent = /** @class */ (function () {
    function FdEmbalajeComponent() {
        this.tipoManejo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.desactivarBoton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FdEmbalajeComponent.prototype.ngOnInit = function () {
    };
    FdEmbalajeComponent.prototype.ngOnChanges = function () {
        this.validarImagenEmbalaje();
        this.obtenerDatosFD();
        this.activarBoton();
    };
    FdEmbalajeComponent.prototype.activarBoton = function () {
        this.botonA = this.activarBotonM;
    };
    FdEmbalajeComponent.prototype.obtenerDatosFD = function () {
        console.log('Llegue-->', this.valorRecibidoEmbalajeFD);
        this.FD = this.valorRecibidoFD.folio;
        this.piezas = this.valorRecibidoFD.piezas;
        this.folio = this.folioPaquete.folio;
    };
    FdEmbalajeComponent.prototype.validarImagenEmbalaje = function () {
        if (this.valorRecibidoEmbalajeFD === "CONGELACIÓN" || this.valorRecibidoEmbalajeFD === "REFRIGERACIÓN") {
            this.tipoImgenHielera = true;
            this.tipoImgenBolsa = false;
            this.textoTipo = 'Hielera';
        }
        else {
            this.tipoImgenHielera = false;
            this.tipoImgenBolsa = true;
            this.textoTipo = 'Bolsa de transito';
        }
        // console.log("bola", this.tipoImgenBolsa);
        // console.log("hielera", this.tipoImgenHielera);
        console.log('Soy ------>>>', this.valorRecibidoEmbalajeFD);
    };
    FdEmbalajeComponent.prototype.agregarPaquete = function () {
        // this.botonA = false;
        this.desactivarBoton.emit('desactivar');
        var tipo;
        console.log('Funciono el clic');
        if (this.valorRecibidoEmbalajeFD === "CONGELACIÓN") {
            tipo = 'Congelacion';
            this.tipoManejo.emit(tipo);
        }
        else if (this.valorRecibidoEmbalajeFD === "REFRIGERACIÓN") {
            tipo = 'Refrigeracion';
            this.tipoManejo.emit(tipo);
        }
        else if (this.valorRecibidoEmbalajeFD === "AMBIENTE") {
            tipo = 'Ambiente';
            this.tipoManejo.emit(tipo);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FdEmbalajeComponent.prototype, "valorRecibidoFD", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FdEmbalajeComponent.prototype, "valorRecibidoEmbalajeFD", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FdEmbalajeComponent.prototype, "folioPaquete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FdEmbalajeComponent.prototype, "activarBotonM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FdEmbalajeComponent.prototype, "tipoManejo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FdEmbalajeComponent.prototype, "desactivarBoton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FdEmbalajeComponent.prototype, "comentarios", void 0);
    FdEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-fd-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FdEmbalajeComponent);
    return FdEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash; <pq-vista-operacion-embalaje *ngIf=\"vistaInicial\"></pq-vista-operacion-embalaje> &ndash;&gt;\r\n<div class=\"graficasEmbalaje\">\r\n   <div class=\"botoneraDiasEmbalaje\">\r\n  <pq-botonera-dias-embalaje class=\"botoneraDiasEmbalaje\" (event)=\"filtrarDias($event)\" [iniciarBotonera]=\"iniciarBotonera\" [tHoy]=\"tHoy\" [tTodo]=\"tTodo\" [tPasadoM]=\"tPasadoM\" [tManana]=\"tManana\" [tFuturo]=\"tFuturo\"></pq-botonera-dias-embalaje>\r\n  </div>\r\n\r\n&lt;!&ndash; Graficas y contenido  &ndash;&gt;\r\n  <div class=\"graficasE\">\r\n  &lt;!&ndash; Pruebas de graficas  &ndash;&gt;\r\n  <div style=\"width: 100%;height:100%;flex-direction:row; display:flex\">\r\n\r\n    <div [ngStyle]=\"{'width': '42%','padding-top':'19px','height':'100%','display':'flex','align-items':'center', 'justify-content':'center', 'position':'relative', 'flex-direction':'column'}\">\r\n      <div>\r\n        <label class=\"tituloGrafica\">PRODUCTOS</label>\r\n      </div>\r\n      &lt;!&ndash; <div style=\"height:  4%\"></div> &ndash;&gt;\r\n      <div id=\"donaProducto\">\r\n        <pn-donut-chart [idGrafica]=\"'producto'\" [data]=\"data\" [tipoGrafica]=\"'VerdevsAzul'\" [height]=\"'auto'\"> </pn-donut-chart>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div [ngStyle]=\"{'width': '8%', 'height':'100%'}\"></div>\r\n\r\n    <div [ngStyle]=\"{'width':'27%', 'height':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n\r\n      <div [ngStyle]=\"{'width':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center', 'margin-bottom':'10%'}\">\r\n        <div>\r\n          <label class=\"tituloGMediano\">PROVEEDORES</label>\r\n        </div>\r\n        <div style=\"height:  2%\"></div>\r\n        <div id=\"donaProveedores\">\r\n          <pn-donut-chart [idGrafica]=\"'cliente'\" [data]=\"dataCLiente\" [tipoGrafica]=\"'Versus'\" [height]=\"'auto'\"> </pn-donut-chart>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div [ngStyle]=\"{'width':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n        <div>\r\n          <label class=\"tituloGMediano\">PRIORIDADES</label>\r\n        </div>\r\n        <div style=\"height:2%\"></div>\r\n        <div id=\"donaPrioridades\">\r\n          <pn-donut-chart [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"'Versus'\" [height]=\"'auto'\"> </pn-donut-chart>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div [ngStyle]=\"{'width': '5%', 'height':'100%'}\"></div>\r\n\r\n    &lt;!&ndash;    grupo de las graficas pequeñas &ndash;&gt;\r\n\r\n    <div [ngStyle]=\"{'width':'15%', 'height':'calc(100% - 4px)', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n\r\n      <div [ngStyle]=\"{'width':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center','margin-bottom':'10%'}\">\r\n        <div>\r\n          <label class=\"tituloGPequenio\">PRIORIDAD 1</label>\r\n        </div>\r\n        <div style=\"height:4%\"></div>\r\n        <div id=\"prioridad1\">\r\n          <pn-dona [doughnutChartLabels]=\"arrayProductos\" [doughnutChartData]=\"array2\" [tipoGrafica]=\"tipoGraficaP1\"></pn-dona>\r\n        </div>\r\n      </div>\r\n\r\n      <div [ngStyle]=\"{'width':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center','margin-bottom':'10%'}\">\r\n        <div>\r\n          <label class=\"tituloGPequenio\">PRIORIDAD 2</label>\r\n        </div>\r\n        <div style=\"height:10%\"></div>\r\n        <div id=\"prioridad2\">\r\n          <pn-dona [doughnutChartLabels]=\"arraylabelP2\" [doughnutChartData]=\"arrayValoresP2\" [tipoGrafica]=\"tipoGraficaP2\"></pn-dona>\r\n        </div>\r\n      </div>\r\n\r\n      <div [ngStyle]=\"{'width':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n        <div>\r\n          <label class=\"tituloGPequenio\">PRIORIDAD 3</label>\r\n        </div>\r\n        <div style=\"height:4%\"></div>\r\n        <div id=\"prioridad3\">\r\n          <div>\r\n            <pn-dona [doughnutChartLabels]=\"arraylabelP3\" [doughnutChartData]=\"arrayValoresP3\" [tipoGrafica]=\"tipoGraficaP3\"></pn-dona>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  &lt;!&ndash; pruebas de graficas   &ndash;&gt;\r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".graficasEmbalaje{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.graficasE{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%}.botonesControl{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:90px;min-height:90px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:60px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.botoneraDiasEmbalaje{width:100%;height:100%;background:#bdb76b;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:50px;max-height:50px;display:flex;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.botonesDias{width:20%;height:100%;background:#d8d9dd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;position:relative;min-height:50px}.botonesDiasActive{width:20%;height:100%;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;position:relative;min-height:50px}.indice{position:relative;font-size:14px;top:-7px}.botonIngresar{width:190px;height:50px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;text-align:center}.tituloGrafica{width:100px;font-size:36px;font-weight:bold;font-family:Novecento}.tituloGMediano{width:100px;font-size:24px;font-weight:bold;font-family:Novecento}.tituloGPequenio{width:100px;font-size:21px;font-weight:bold;font-family:Novecento}#doughnut1Div{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}#doughnut1Div2{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}#totalDoughnut1{height:70px;margin:auto;left:0;right:0;top:0;bottom:0}#totalDoughnut1>label{font-size:14px;text-align:center;font-weight:300}#totalDoughnut1>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}.total{position:absolute;width:140px;height:70px;margin:auto;left:0;right:0;top:0;bottom:0}.total>label{font-size:14px;text-align:center;font-weight:300}.total>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}#totalDoughnut12{height:70px;margin:auto;left:0;right:0;top:0;bottom:0}#totalDoughnut12>label{font-size:14px;text-align:center;font-weight:300}#totalDoughnut12>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}.total2{position:absolute;width:140px;height:70px;margin:auto;left:0;right:0;top:0;bottom:0}.total2>label{font-size:14px;text-align:center;font-weight:300}.total2>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}#donaPrioridades,#donaProveedores{width:50%}#prioridad1,#prioridad2,#prioridad3{width:55%}#donaProducto{width:75%}@media(min-width: 80em){#donaProveedores,#donaPrioridades{width:85%;max-width:150px}#prioridad1,#prioridad2,#prioridad3{width:90%;max-width:100px}#donaProducto{width:72%;padding-top:10px}}@media(min-width: 92em){#donaProveedores,#donaPrioridades{width:70%;max-width:370px}#prioridad1,#prioridad2,#prioridad3{width:75%;max-width:200px}#donaProducto{width:80%;max-width:800px}}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficasEmbalajeComponent = /** @class */ (function () {
    function GraficasEmbalajeComponent() {
        this.data = {
            // Titulo del centro de la dona
            titulo: "TOTAL EMBALAJE",
            /// titulos de los las particiones de la dona
            labels: ["POR EMBALAR", "EMBALADAS"],
            // cantidad de los datos a graficar  (total)
            valores: [10, 22],
            // bubtitulo del centro de la dona
            labelsExtras: [["Piezas"], ["Monto"]],
            /// titulo del subtutulo de particion de la dona
            labelsExtrasHover: ["Piezas", "Monto"],
            /// valores del label (TRABAJO (total))
            valuesExtras: [364.50, '$7500.00'],
            // valores de los subtitulos de la particion de la dona
            valuesExtrasHover: [[243, '$5000.000'], [121.50, '$2500.00']]
        };
        this.dataCLiente = {
            // Titulo del centro de la dona
            titulo: "Dona Clientes",
            /// titulos de los las particiones de la dona
            labels: ["Centro de Estudios Científicos y Clínicos Pharma", "TRABAJADO"],
            // cantidad de los datos a graficar  (total)
            valores: [10, 22, 5, 9, 14, 70],
            // bubtitulo del centro de la dona
            labelsExtras: [["Piezas"], ["Monto"]],
            /// titulo del subtutulo de particion de la dona
            labelsExtrasHover: ["Piezas", "Monto"],
            /// valores del label (TRABAJO (total))
            valuesExtras: [364.50, '$7500.00'],
            ///valores de los subtitulos de la particion de la dona
            valuesExtrasHover: [[316, '$4700.000'], [121.50, '$2500.00'], [20, 10], [15, 5], [8, 3], [10, 8]]
        };
        this.dataPrioridades = {
            // Titulo del centro de la dona
            titulo: "Dona Prioridades",
            /// titulos de los las particiones de la dona
            labels: ["PRIORIDAD 2", "TRABAJADO", "PRUEBA"],
            // cantidad de los datos a graficar  (total)
            valores: [10, 5, 22],
            // bubtitulo del centro de la dona
            labelsExtras: [["Piezas"], ["Monto"]],
            /// titulo del subtutulo de particion de la dona
            labelsExtrasHover: ["Piezas", "Monto"],
            /// valores del label (TRABAJO (total))
            valuesExtras: [364.50, '$7500.00'],
            /// valores de los subtitulos de la particion de la dona
            valuesExtrasHover: [[35, '$4700.000'], [121.50, '$2500.00'], [10, 52]]
        };
        this.dataPrioridadUno = {
            // Titulo del centro de la dona
            titulo: "Dona Prioridad 1",
            /// titulos de los las particiones de la dona
            labels: ["Cliente", "TRABAJADO", "DAto1", "Dato2", "Dato3"],
            // cantidad de los datos a graficar  (total)
            valores: [10, 22, 30, 20, 10],
            // bubtitulo del centro de la dona
            labelsExtras: [["Piezas"], ["Monto"]],
            /// titulo del subtutulo de particion de la dona
            labelsExtrasHover: ["Piezas", "Monto"],
            /// valores del label (TRABAJO (total))
            valuesExtras: [364.50, '$7500.00'],
            /// valores de los subtitulos de la particion de la dona
            valuesExtrasHover: [[316, '$4700.000'], [121.50, '$2500.00'], [4, 6], [12, 56], [34, 24]]
        };
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tHoy = 0;
        this.tTodo = 0;
        this.tManana = 0;
        this.tPasadoM = 0;
        this.tFuturo = 0;
        this.mostrarVistaInicial = false;
        // vistaInicial: boolean = false;
        // graficasE: boolean = true;
        this.vistaInicial = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // @Output() graficas: EventEmitter<Boolean> = new EventEmitter<Boolean>();
        //prueba de variables
        this.squery = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.punterosProvee = new Array();
        this.universoPartidas = new Array();
        this.universoDias = new Array();
        this.universoActual = new Array();
        //Se crea esta copia del universo para mostrar la información de las partidas en la vista.
        this.copiaUniversoPartidas = new Array();
        this.arrayValoresPro = 10;
        this.arrayLabelPro = 10;
        this.arrayValoresPrioridad = 10;
        this.arrayValoresP1 = 10;
        this.arrayValoresP2 = 10;
        this.arrayValoresP3 = 10;
        this.objetivoDeinspeccion = 0;
        this.piezasInspeccionadas = 0;
        this.inspeccionDeceada = 0;
        this.inspeccionDeceadaHastaElMomento = 0;
        this.minimoDeInspeccion = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
        this.mostrarMenuRoles = true;
        this.botones = new Array(5).fill('botonesDias');
        this.botonRegresar = true;
        this.copiaPartidaEmbalaje = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
    }
    GraficasEmbalajeComponent.prototype.ngOnInit = function () {
        // this.recibePartidas();
        this.iniciarBotonera = true;
        this.filtrarDias('hoy');
    };
    GraficasEmbalajeComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
        this.filtrarDias('hoy');
        this.iniciarBotonera = true;
        if (this.iniciarBotonera) {
            this.filtrarDias('hoy');
        }
    };
    //test
    GraficasEmbalajeComponent.prototype.recibePartidas = function () {
        var _this = this;
        //this.coreComponent.openModal(0);
        this.copiaPartidaEmbalaje;
        console.log(this.copiaPartidaEmbalaje);
        this._insp.recibePartidasInspeccion().subscribe(function (data) {
            var arrayLabel = new Array();
            var arrayValores = new Array();
            var arrPart = new Array();
            // console.log(data);
            if (data != null) {
                _this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
                _this.partidaPrioridad = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], data.current[0]);
                _this.partidaPoriginal = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], data.current[0]);
            }
            arrPart = data.current;
            _this.squery.Query(arrPart, ['idProducto'], true);
            _this.punterosProvee = _this.squery.getPunteros(['idProducto'], "idProducto");
            _this.tTodo = data.current.length;
            _this.punterosProvee.forEach(function (element) {
                var totalCantidad = 0;
                var punterosTemp = new Array();
                punterosTemp = _this.squery.getPunteros([element]);
                /*   console.log("valor de los punteros:" + element); */
                for (var i = 0; i < punterosTemp.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], _this.squery.universo[punterosTemp[i]]);
                    if (i == 0) {
                        partTemp.setDiasFiltro("hoy");
                        _this.tHoy = _this.tHoy + 1;
                        if (_this.tHoy >= _this.tTodo) {
                            _this.tHoy = _this.tTodo - _this.tHoy;
                        }
                        //  this.tHoy=0;
                    }
                    else if (i == 1) {
                        _this.tManana = 0;
                        partTemp.setDiasFiltro("manana");
                        _this.tManana = _this.tManana + 1;
                    }
                    else {
                        _this.tPasadoM = 0;
                        partTemp.setDiasFiltro("pasado");
                        _this.tPasadoM = _this.tPasadoM + 1;
                    }
                    if (_this.tHoy != 0 && _this.tManana != 0) {
                        _this.universoPartidas.push(partTemp);
                    }
                    //else if(this.tManana >1) {this.universoPartidas.push(partTemp);}
                }
            });
            _this.tTodo = _this.tHoy + _this.tManana;
            console.log("Valores botonera: " + _this.tTodo, _this.tHoy, _this.tManana);
            _this.iniciarBotonera = true;
            _this.arraylabelP3 = new Array();
            _this.arrayValoresP3 = new Array();
            _this.arraylabelP3 = [""];
            _this.arrayValoresP3 = [1];
            var test = new Array();
            // console.log(this.universoPartidas);
            test = Object.assign([], _this.universoPartidas);
            //Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
            // this.copiaUniversoPartidas = Object.assign([], this.universoPartidas);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error inspeccion");
            console.log(error);
            //terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    GraficasEmbalajeComponent.prototype.filtrarDias = function (dia) {
        var _this = this;
        // console.log("llego:" + dia);
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var punterosDias = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        this.universoActual = new Array();
        if (dia != "todo") {
            sq.Query(this.universoPartidas, ['diasFiltro'], true);
            punterosDias = sq.getPunteros([dia]);
            if (punterosDias.length > 0) {
                punterosDias.forEach(function (element) {
                    // /* for (var i: number = 0; i < posicion.length; i++) {  */
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[element]);
                    _this.universoActual.push(partTemp);
                    /* } */
                });
                this.tipoGrafica = 'verdeVSazul';
                this.tipoGraficaP1 = 'prioridadRoja';
                this.tipoGraficaP2 = 'prioridadNaranja';
                this.tipoGraficaP3 = 'prioridadVerde';
                this.filtradoDeProductos();
                this.filtradoProveedores();
                this.filtrarPrioridades();
                this.operacionesPrioridades();
            }
            else {
                console.log("entra gris");
                this.tipoGrafica = 'gris';
                this.tipoGraficaPro = 'gris';
                this.tipoGraficaPrioridades = 'gris';
                this.tipoGraficaP1 = 'gris';
                this.tipoGraficaP2 = 'gris';
                this.tipoGraficaP3 = 'gris';
                this.arrayProductos = new Array();
                this.array2 = new Array();
                this.arrayLabelPro = new Array();
                this.arrayValoresPro = new Array();
                this.arrayLabelPrioridad = new Array();
                this.arrayValoresPrioridad = new Array();
                this.arrayValoresP2 = new Array();
                this.arraylabelP2 = new Array();
                this.arrayValoresP3 = new Array();
                this.arraylabelP3 = new Array();
                arrayLabel.push("hola");
                arrayValores.push(5);
                Array.prototype.push.apply(this.arrayProductos, arrayLabel);
                Array.prototype.push.apply(this.array2, arrayValores);
                Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
                Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
                Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
                Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
                Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
            }
        }
        else {
            this.tipoGraficaP1 = 'prioridadRoja';
            this.tipoGraficaP2 = 'prioridadNaranja';
            this.tipoGraficaP3 = 'prioridadVerde';
            this.universoActual = new Array();
            this.universoActual = Object.assign([], this.universoPartidas);
            this.filtradoDeProductos();
            this.filtradoProveedores();
            this.filtrarPrioridades();
            this.operacionesPrioridades();
        }
        this.iniciarBotonera = false;
    };
    GraficasEmbalajeComponent.prototype.filtradoDeProductos = function () {
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var contArribados = 0;
        var contNoArribados = 0;
        if (this.universoActual.length > 0) {
            this.tipoGrafica = "verdeVSazul";
            sq.Query(this.universoActual, ['estado'], true);
            punterosProd = sq.getPunteros(['estado'], "estado");
            this.arrayProductos = new Array();
            this.array2 = new Array();
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[puntem[i]]);
                    if (partTemp.getEstado() == 'En inspección')
                        contArribados = contArribados + 1;
                    else
                        contNoArribados = contNoArribados + 1;
                }
                arrayValores.push(contArribados);
                arrayValores.push(contNoArribados);
                arrayLabel.push("Arribados");
                arrayLabel.push("No Arribados");
            });
            Array.prototype.push.apply(this.arrayProductos, arrayLabel);
            Array.prototype.push.apply(this.array2, arrayValores);
        }
        else {
            this.arrayLabelPro = new Array();
            this.arrayValoresPro = new Array();
            this.tipoGrafica = "gris";
            this.tipoGraficaPro = 'gris';
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayProductos, arrayLabel);
            Array.prototype.push.apply(this.array2, arrayValores);
            Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
    };
    GraficasEmbalajeComponent.prototype.filtradoProveedores = function () {
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        this.arrayLabelPro = new Array();
        this.arrayValoresPro = new Array();
        if (this.universoActual.length > 0) {
            this.tipoGraficaPro = "general";
            sq.Query(this.universoActual, ['idProveedor'], true);
            punterosProd = sq.getPunteros(['idProveedor'], "idProvedor");
            /*  this.arrayLabelPro = new Array<string>();
             this.arrayValoresPro = new Array<number>(); */
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    cantidad = cantidad + 1;
                }
                arrayValores.push(cantidad);
                arrayLabel.push(element);
            });
            Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
        else {
            this.tipoGraficaPro = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
    };
    GraficasEmbalajeComponent.prototype.filtrarPrioridades = function () {
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosPrio = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        if (this.universoActual.length > 0) {
            this.tipoGraficaPrioridades = "prioridades";
            sq.Query(this.universoActual, ['prioridad'], true);
            punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
            this.arrayLabelPrioridad = new Array();
            this.arrayValoresPrioridad = new Array();
            punterosPrio.forEach(function (element) {
                var cantidad = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    cantidad = cantidad + 1;
                }
                arrayValores.push(cantidad);
                arrayLabel.push(element);
            });
            Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
        }
        else {
            this.tipoGraficaPrioridades = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
        }
    };
    GraficasEmbalajeComponent.prototype.operacionesPrioridades = function () {
        console.log("obterner graficas de diferente prioridad");
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosPrio = new Array();
        var punteroP1 = new Array();
        var punteroP2 = new Array();
        var punteroP3 = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var listaAux = new Array();
        var punterosAux = new Array();
        var sqAux = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.arraylabelP1 = new Array();
        this.arrayValoresP1 = new Array();
        this.arraylabelP2 = new Array();
        this.arrayValoresP2 = new Array();
        this.arraylabelP3 = new Array();
        this.arrayValoresP3 = new Array();
        if (this.universoActual.length > 0) {
            sq.Query(this.universoActual, ['prioridad'], true);
            punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
            punteroP1 = sq.getPunteros(['p1']);
            if (punteroP1.length > 0) {
                for (var i = 0; i < punteroP1.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP1[i]]);
                    listaAux.push(partTemp);
                }
                sqAux.Query(listaAux, ['idProducto'], true);
                punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");
                if (punterosAux.length > 0) {
                    for (var i = 0; i < punterosAux.length; i++) {
                        punterosAux.forEach(function (element) {
                            puntem = sqAux.getPunteros([element]);
                            var cantidad = 0;
                            for (var i = 0; i < puntem.length; i++) {
                                cantidad = cantidad + 1;
                            }
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                        });
                    }
                    Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
                    Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
                }
            }
            else {
                this.tipoGraficaP1 = "gris";
            }
            punteroP2 = sq.getPunteros(['P2']);
            if (punteroP2.length > 0) {
                for (var i = 0; i < punteroP2.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP2[i]]);
                }
                sqAux.Query(listaAux, ['idProducto'], true);
                punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");
                if (punterosAux.length > 0) {
                    for (var i = 0; i < punterosAux.length; i++) {
                        punterosAux.forEach(function (element) {
                            puntem = sqAux.getPunteros([element]);
                            var cantidad = 0;
                            for (var i = 0; i < puntem.length; i++) {
                                cantidad = cantidad + 1;
                            }
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                        });
                    }
                    Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
                    Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
                }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
                this.tipoGraficaP2 = "gris";
            }
            punteroP3 = sq.getPunteros(['P3']);
            if (punteroP3.length > 0) {
                for (var i = 0; i < punteroP3.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP3[i]]);
                }
                sqAux.Query(listaAux, ['idProducto'], true);
                punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");
                if (punterosAux.length > 0) {
                    for (var i = 0; i < punterosAux.length; i++) {
                        punterosAux.forEach(function (element) {
                            puntem = sqAux.getPunteros([element]);
                            var cantidad = 0;
                            for (var i = 0; i < puntem.length; i++) {
                                cantidad = cantidad + 1;
                            }
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                        });
                    }
                    Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
                    Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
                }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
                this.tipoGraficaP3 = "gris";
            }
        }
        else {
            this.tipoGraficaP1 = "gris";
            this.tipoGraficaP2 = "gris";
            this.tipoGraficaP3 = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayValoresP1, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
            Array.prototype.push.apply(this.arrayValoresP2, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
            Array.prototype.push.apply(this.arrayValoresP3, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
        }
    };
    //fin Test
    GraficasEmbalajeComponent.prototype.regresarVistaI = function () {
        console.log("entro Metodo Graficas ");
        // let ocultarGraficas = false;
        // this.filtrarDias('hoy');
        this.mostrarVistaInicial = !this.mostrarVistaInicial;
        this.vistaInicial.emit(this.mostrarVistaInicial);
        // this.graficas.emit(ocultarGraficas);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GraficasEmbalajeComponent.prototype, "vistaInicial", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], GraficasEmbalajeComponent.prototype, "copiaPartidaEmbalaje", void 0);
    GraficasEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-graficas-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GraficasEmbalajeComponent);
    return GraficasEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"informacionOE\">\r\n  <div class=\"encabezadoInformacionOE\">\r\n    <h1>INFORMACIÓN DE LA O. ENTREGA</h1>\r\n  </div>\r\n\r\n  <div class=\"contenidoInformacionOE\">\r\n    <div class=\"cliente\">{{cliente}}</div>\r\n    <div class=\"esac\" *ngIf=\"esac !== null\">ESAC: <label>{{esac}}</label> ·  Cobrador: <label *ngIf=\"informacionOe[0].cobrador !== undefined\">{{informacionOe[0].cobrador}}</label></div>\r\n    <div class=\"usuario\" style=\"font-family:Roboto-Regular \">{{datosPuesto}}</div>\r\n    <div class=\"ruta\">\r\n      <img src='./assets/Images/Images/Configuracion/Rutas/ubicacion.svg' style=\"margin-right:  9px;\"/>\r\n      {{datosRuta}}\r\n\r\n    </div>\r\n    <div class=\"etiquetaEntrega\" *ngIf=\"informacionOe[0].condicionAlmacenaje === 1 && informacionOe[0].condicionAlmacenaje !== null\">Entregar en condiciones de almacenaje</div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.scss":
/***/ (function(module, exports) {

module.exports = ".informacionOE{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0px 20px 10px 0px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif}.encabezadoInformacionOE{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:36px;min-height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.encabezadoInformacionOE>h1{font-size:22px;color:#008895}.contenidoInformacionOE{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%}.cliente{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;font-size:18px;color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;font-weight:500;max-height:38px;min-height:50px}.usuario{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;font-size:16px;color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:40px;min-height:40px}.ruta{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;font-size:18px;color:#424242;font-weight:500;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:35px}.etiquetaEntrega{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;font-size:16px;color:#67a640;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:30px;min-height:30px}.esac{font-family:Roboto;font-weight:bold;font-size:14px;color:#008895}.esac>label{font-weight:400 !important}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionOeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformacionOeComponent = /** @class */ (function () {
    function InformacionOeComponent(CoreComponent) {
        this.CoreComponent = CoreComponent;
        this.indiceValor = 0;
    }
    InformacionOeComponent.prototype.ngOnInit = function () {
        //this.mostrarInformacionOe ();
    };
    InformacionOeComponent.prototype.mostrarInformacionOe = function () {
        var _this = this;
        if (this.indiceValor === 0) {
            this.CoreComponent.openModal(1);
            this.indiceValor++;
        }
        console.log('Entre:)', this.informacionOe);
        this.ruta = this.informacionOe[0].ruta;
        this.esac = this.informacionOe[0].prioridad;
        this.zonaMensajeria = this.informacionOe[0].zonaMensajeria;
        this.usuario = this.informacionOe[0].contacto;
        this.puesto = this.informacionOe[0].puesto;
        if (this.puesto && this.puesto !== '' && this.puesto !== null && this.puesto !== undefined && this.puesto !== '-') {
            this.datosPuesto = this.usuario + './' + this.puesto;
        }
        else {
            this.datosPuesto = this.usuario;
        }
        if (this.zonaMensajeria && this.zonaMensajeria !== '' && this.zonaMensajeria !== null && this.zonaMensajeria !== undefined) {
            this.datosRuta = this.ruta + '.-' + this.zonaMensajeria;
        }
        else {
            this.datosRuta = this.ruta;
        }
        this.cliente = this.informacionOe[0].cliente;
        if (this.indiceValor === 1) {
            setTimeout(function () {
                _this.CoreComponent.closeModal(1);
                _this.indiceValor++;
            }, 1500);
        }
    };
    InformacionOeComponent.prototype.ngOnChanges = function () {
        if (this.informacionOe !== undefined) {
            this.mostrarInformacionOe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InformacionOeComponent.prototype, "informacionOe", void 0);
    InformacionOeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-informacion-oe',
            template: __webpack_require__("./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], InformacionOeComponent);
    return InformacionOeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"packingList\">\r\n  <div class=\"encabezado\" style=\"font-family: Novecento-Bold\"> <p>PACKING LIST </p></div>\r\n  <div class=\"contenido\">\r\n    <div class=\"listado\">\r\n      <div *ngFor=\"let item of bolsa; let i = index\" class=\"lista\">\r\n        #{{i +1}} · {{item.tipo}}\r\n          <p class=\"p1\">{{item.folio}}</p>\r\n          <p class=\"p2\">{{item.piezas}} Piezas</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".packingList{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;max-height:500px}.encabezado{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;-webkit-box-ordinal-group:1;order:0;-webkit-box-flex:0;flex:0 1 auto;align-self:auto;height:100%;width:100%;border-bottom:2px solid #424242;max-height:70px;font-size:21px;font-weight:bold;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.encabezado>p{color:#008895}.contenido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;overflow:scroll}.lista{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:78px;max-height:78px;padding:8px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\";line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;color:#008895;font-size:16px}.lista>.p1{font-family:Roboto-Light;font-size:14px;color:#000;line-height:21px}.lista>.p2{font-weight:normal;font-family:Roboto-Regular;font-size:12px;color:#000;line-height:21px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackingListEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PackingListEmbalajeComponent = /** @class */ (function () {
    function PackingListEmbalajeComponent() {
        this.bolsa = [];
        this.activarBoton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.i = 0;
    }
    PackingListEmbalajeComponent.prototype.ngOnInit = function () {
    };
    PackingListEmbalajeComponent.prototype.ngOnChanges = function () {
        this.recibirDatosList();
    };
    PackingListEmbalajeComponent.prototype.recibirDatosList = function () {
        var val = 0;
        var aux = true;
        this.contenidoListaP = this.recibirDatos;
        console.log('entre a paking', this.contenidoListaP);
        if (this.i > 0) {
            this.activarBoton.emit(aux);
            if (this.bolsa.length === 0) {
                this.bolsa.push(this.contenidoListaP);
            }
            else {
                for (var i = 0; i < this.bolsa.length; i++) {
                    if (this.bolsa[i].folio === this.contenidoListaP.folio) {
                        this.bolsa[i].piezas += this.contenidoListaP.piezas;
                        val = 1;
                        break;
                    }
                }
                if (val === 0) {
                    this.bolsa.push(this.contenidoListaP);
                }
            }
        }
        this.i = 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PackingListEmbalajeComponent.prototype, "recibirDatos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PackingListEmbalajeComponent.prototype, "activarBoton", void 0);
    PackingListEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-packing-list-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PackingListEmbalajeComponent);
    return PackingListEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"openPopImpresion\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <div class=\"alerta\">\r\n        <img src=\"assets/Images/impresora.svg\" alt=\"\" class=\"alert\" style=\"box-sizing: border-box; padding-bottom: 20px\"/>\r\n      </div>\r\n      <label>¿Impresión de Documentación Correcta?</label>\r\n    </div>\r\n    <div class=\"dvBotones\" style=\"display: flex; justify-content:space-between\">\r\n      <div class=\"dvBoton\" (click)=\"closePopUp()\" style=\"box-sizing: border-box; margin-left: 25px\">\r\n        <label>\r\n         No\r\n        </label>\r\n      </div>\r\n      <div class=\"dvBoton\" (click)=\"cambiarPopFinalizar()\" style=\"box-sizing: border-box; margin-right: 25px\">\r\n        <label>\r\n          Si\r\n        </label>\r\n      </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:355px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{font-family:Roboto}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpresionConfirmadaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImpresionConfirmadaComponent = /** @class */ (function () {
    function ImpresionConfirmadaComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activarFinalizar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openPopImpresion = true;
    }
    ImpresionConfirmadaComponent.prototype.ngOnInit = function () {
    };
    ImpresionConfirmadaComponent.prototype.closePopUp = function () {
        this.openPopImpresion = false;
        this.cerrarPop.emit(false);
    };
    ImpresionConfirmadaComponent.prototype.cambiarPopFinalizar = function () {
        this.openPopImpresion = false;
        this.activarFinalizar.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ImpresionConfirmadaComponent.prototype, "cerrarPop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ImpresionConfirmadaComponent.prototype, "activarFinalizar", void 0);
    ImpresionConfirmadaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-impresion-confirmada',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImpresionConfirmadaComponent);
    return ImpresionConfirmadaComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" *ngIf=\"correo\">\r\n  <!-- Inicio modal -->\r\n  <div id=\"pop-up-lote\" class=\"modal\" #pop>\r\n    <!-- Inicio modal-content -->\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\" >\r\n        ENVIAR EVIDENCIA DE FACTURACIÓN\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div style=\"width: 100%;height: 90%\">\r\n          <div class=\"remitentes\">\r\n            <label>Contacto: <span *ngFor=\"let item of correoContacto; let i = index\" class=\"destinatarios\">{{item}} </span></label>\r\n          </div>\r\n          <div class=\"remitentes\" style=\"padding-left: 63px;\">\r\n            <label>CC : <input #textCopia (blur)=\"cambioCopia(textCopia.value, 'CC')\" value=\"{{cc}}\"  type=\"text\" class=\"copiaCorreo\"></label>\r\n          </div>\r\n          <div class=\"remitentes\" style=\"padding-left: 50px;\">\r\n            <label>CCO : <input #textCopiaO (blur)=\"cambioCopia(textCopiaO.value, 'CCO')\" value=\"{{destinatarioCopia}}\"  type=\"text\" class=\"copiaCorreo\"></label>\r\n          </div>\r\n          <div  class=\"remitentes\" style=\"padding-left: 20px;\">\r\n            <label>ASUNTO : <span style=\"font-weight: 300\"> Factura {{this.datos.factura}}</span></label>\r\n          </div>\r\n          <div class=\"comentarios\">\r\n            <textarea placeholder=\" Escribe Comentarios Adicionales\" [(ngModel)]=\"comentario\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div style=\"width: 100%;height: 10%\" class=\"btnDireccionPL\">\r\n          <!--<div>\r\n            <a class=\"btnImprimir\" (click)=\"cambiarVista()\">CANCELAR</a>\r\n          </div>-->\r\n          <div>\r\n            <a class=\"btnImprimir\" (click)=\"finalizar()\">ACEPTAR</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Fin modal-content-->\r\n  </div>\r\n  <!--Fin modal-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(255,255,255,.7);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;top:0%;background-color:#fff;position:relative;padding:0;outline:0;width:795px;height:520px;color:#000;border:1px solid #008894;font-family:\"Roboto\",sans-serif;border-radius:11px 11px 11px 11px}.header{width:100%;height:55px;color:#fff;font-family:\"Novecento\";font-weight:bold;font-size:26px;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:10px 10px 0px 0px}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px;padding-right:20px}.btnDireccionPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:5%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;justify-items:center}.btnImprimir{width:170px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.titulo{font-family:Novecento;font-weight:bold;font-size:16px}.remitentes{height:15%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:10px;padding-bottom:10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #424242}.remitentes>label{font-family:Novecento;font-weight:bold;font-size:16px}.comentarios{width:100%;height:35%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:10px}.comentarios>textarea{width:100%;height:100%;border-color:transparent}.destinatarios{font-family:Roboto;font-weight:300;color:#008894;font-size:16px;padding-left:5px}.copiaCorreo{height:27px;width:500px;border-color:transparent;outline:0 none}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpCorreoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpCorreoComponent = /** @class */ (function () {
    function PopUpCorreoComponent(_embalar) {
        this._embalar = _embalar;
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.correoContacto = [];
        this.comentario = '';
        this.correosEnviar = '';
    }
    PopUpCorreoComponent.prototype.ngOnInit = function () {
        this.recuperarCorreos();
        this.correo = true;
        console.log('Datos -->', this.datos);
    };
    PopUpCorreoComponent.prototype.recuperarCorreos = function () {
        var correo;
        for (var i = 0; i < this.correos.length; i++) {
            if (i < this.correos.length - 1) {
                correo = this.correos[i] + ';';
                this.correosEnviar += correo;
            }
            else {
                correo = this.correos[i];
                this.correosEnviar += correo;
            }
            this.correoContacto.push(correo);
        }
    };
    PopUpCorreoComponent.prototype.cambioCopia = function (texto, tipo) {
        if (tipo === 'CCO') {
            this.destinatarioCopia = texto;
        }
        else if (tipo = 'CC') {
            this.cc = texto;
        }
    };
    PopUpCorreoComponent.prototype.finalizar = function () {
        this.correosEnviar.trim();
        var asunto = 'Factura' + ' ' + this.datos.factura;
        var obj = {
            correo: this.correosEnviar,
            ccorreo: this.cc,
            cocorreo: this.destinatarioCopia,
            asunto: asunto,
            cuerpoCorreo: this.comentario,
            facturadaPor: this.datos.fpor,
            archivoAdjunto: this.datos.factura
        };
        this._embalar.enviarCorreo(obj).subscribe(function (data) {
            console.log(data.current);
        });
        console.log(this.destinatarioCopia);
        console.log(this.cc);
        console.log(this.correosEnviar);
        this.cerrarPop.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpCorreoComponent.prototype, "correos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpCorreoComponent.prototype, "cerrarPop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpCorreoComponent.prototype, "datos", void 0);
    PopUpCorreoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-correo',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], PopUpCorreoComponent);
    return PopUpCorreoComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpCerrar\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <div class=\"alerta\" *ngIf=\"imagen\">\r\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <label [style.padding-top]=\"imagen?'15px':'80px'\">\r\n        {{label}}\r\n      </label>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\r\n        <label>Aceptar</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:3}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;padding-top:20px}.alerta img.alert{width:100%;height:100%}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpExitoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpExitoComponent = /** @class */ (function () {
    function PopUpExitoComponent() {
        this.desactivarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpExitoComponent.prototype.ngOnInit = function () {
        this.popUpCerrar = true;
    };
    PopUpExitoComponent.prototype.cerrar = function () {
        this.popUpCerrar = false;
        this.desactivarPop.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpExitoComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpExitoComponent.prototype, "imagen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpExitoComponent.prototype, "desactivarPop", void 0);
    PopUpExitoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-exito',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpExitoComponent);
    return PopUpExitoComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\"  *ngIf=\"openView\" [style.display]=\"envioCorreo? 'none':'block'\">\r\n  <!-- Inicio modal -->\r\n  <div id=\"pop-up-lote\" class=\"modal\" #pop>\r\n    <!-- Inicio modal-content -->\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\" >\r\n        FACTURAR\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div class=\"informacionGeneral\">\r\n          <div class=\"infoOrden\">\r\n            <h1 class=\"titulo\">INFORMACIÓN DE LA O.ENTREGA</h1>\r\n            <label class=\"subtitulo\">{{datosCliente[0].cliente}}</label>\r\n            <p class=\"info\">{{datosCliente[0].contacto}} / {{datosCliente[0].puesto}}</p>\r\n          </div>\r\n          <div class=\"infoTipo\">\r\n            <h1 class =\"titulo\" style=\"justify-content: flex-end\"> {{tipoFactura}}</h1>\r\n            <p class=\"info\" style=\"justify-content: flex-end\">Tipo de Validación</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"informacionFactura\">\r\n          <div class=\"contenidoFac\">\r\n            <div class=\"primeraSeccion\">\r\n              <div class=\"tituloFacturaList\">\r\n                FACTURAS\r\n              </div>\r\n              <div style=\"width: 100%; height: 8%\">\r\n                <div class=\"buscar\">\r\n                  <div>\r\n                    <div class=\"lupa\">\r\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\r\n                    </div>\r\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Buscar\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"listaFacturas\">\r\n                <!--Lista total-->\r\n                <div class=\"segundaSeccionList\">\r\n                  <div style=\"width: 97%;\">\r\n                    <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"validarLista\">\r\n                      <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                        <div class=\"dfSelect\"></div>\r\n                        <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\r\n                          <div class=\"informacionList\">\r\n                            <label style=\"display: flex\">#{{i +1}} · <img height=\"18px\" width=\"20px\" src=\"./assets/Images/ventas/visitas/archivos.svg\"><span>{{item.factura}}</span></label>\r\n                            <h3>{{item.importe}}  {{item.moneda}}</h3>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!--Lista de busqueda-->\r\n                    <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!validarLista\">\r\n                      <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of clientesSearched; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\r\n                        <div class=\"dfSelect\"></div>\r\n                        <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i)\">\r\n                          <div class=\"informacionList\">\r\n                            <label>#{{i +1}} · <span>{{item.folioFactura}} </span></label>\r\n                            <h3>{{item.importe}} {{item.moneda}}</h3>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!---->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"totales\">\r\n                {{totales}} Facturas\r\n              </div>\r\n            </div>\r\n            <div class=\"border\"></div>\r\n            <div class=\"segundaSeccion\">\r\n              <div class=\"tituloFacturaList\">\r\n               <label *ngIf=\"!datos\" class=\"titulo\">{{index}}</label><u class=\"folio\" (click)=\"visualizar(index)\" *ngIf=\"!datos\"> F -{{folio}}</u><label class=\"titulo\" style=\"padding-left: 5px;padding-right: 5px;\" *ngIf=\"!datos\"> {{punto}}</label><a *ngIf=\"!datos\" [href]=\"rutaXML\" download=\"\" target=\"_blank\" class=\"titulo\"> XML {{folio}}</a>\r\n              </div>\r\n              <div class=\"infoFacturaSinInfo\" *ngIf=\"datos\">\r\n                <div *ngIf=\"datos\" class=\"tipoFacturacion\">\r\n                  <label class=\"sinDatos\">SELECCIONA UNA FACTURA\r\n                    PARA HABILITAR ESTA SECCIÓN</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"infoFactura\" *ngIf=\"!datos\">\r\n                <div *ngIf=\"correo\" class=\"datosTipoFac\">\r\n                  <div>\r\n                    <label> Destinatarios</label>\r\n                  </div>\r\n                  <div  *ngFor=\"let item of correos; let i = index\" style=\"padding-bottom: 1px\">\r\n                    <label class=\"tituloCorreo\" style=\"line-height: 1.5;\">· {{item}} </label>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"sat\" class=\"datosTipoFac\">\r\n                  <div class=\"datosIndividuales\">\r\n                    <label class=\"texto\">Página SAT</label>\r\n                    <u id =a.linkview (click)=\"abrirNueva()\" #a.linkview  class=\"linkSat\">{{link}}</u>\r\n                  </div>\r\n                  <div class=\"datosIndividuales\">\r\n                    <label class=\"texto\">Folio Fiscal</label>\r\n                    <span class=\"subtituloTexto\">{{folioF}}</span>\r\n                  </div>\r\n                  <div style=\"height: 30%; width: 100%;display: flex;box-sizing: border-box;justify-content: space-between;\">\r\n                    <div style=\"display: flex; flex-direction: column\">\r\n                      <label class=\"texto\">RFC Emisor</label>\r\n                      <span class=\"subtituloTexto\">{{RfcE}}</span>\r\n                    </div>\r\n                    <div style=\"display: flex; flex-direction: column\">\r\n                      <label class=\"texto\">RFC Receptor</label>\r\n                      <span class=\"subtituloTexto\">{{RfcR}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"portal\" class=\"datosTipoFac\">\r\n                  <div style=\"height: 50%;\" class=\"datosIndividuales\">\r\n                    <label class=\"texto\">URL</label>\r\n                    <span class=\"subtituloLink\" (click)=\"abrirNueva()\">{{url}}</span>\r\n                  </div>\r\n                  <div  style=\"height: 30%; width: 100%;display: flex;box-sizing: border-box;justify-content: space-between;\">\r\n                    <div style=\"display: flex; flex-direction: column\">\r\n                      <label class=\"texto\">Usuario</label>\r\n                      <span class=\"subtituloTexto\">{{usuario}}</span>\r\n                    </div>\r\n                    <div style=\"display: flex; flex-direction: column\">\r\n                      <label class=\"texto\">Contraseña</label>\r\n                      <span class=\"subtituloTexto\">{{password}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"height: 50%\" *ngIf=\"!datos\">\r\n                <div class=\"tituloFacturaList\" style=\"padding-bottom: 10px;\">\r\n                  EVIDENCIA\r\n                </div>\r\n                <div class=\"cargaDoc\">\r\n                  <!-- <div  *ngIf=\"primerCarga\" style=\"width: 5px;height: 5px\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'400px'\"\r\n                        [style.overflow]=\"'auto'\">\r\n                   </div>-->\r\n                  <input type=\"file\" class=\"carga\"  (change)=\"fileChange2($event)\" id=\"cargarDocumento\">\r\n                  <label for=\"cargarDocumento\" style=\"display: flex\" *ngIf=\"primerCarga\" class=\"cargarDocumento\"><img src=\"./assets/Images/cargar_permiso.svg\" class=\"imgeArchivo\">\r\n                    <p class=\"textoImagen\">CARGAR EVIDENCIA</p></label>\r\n                  <div *ngIf=\"!primerCarga\" class=\"vistDoc\">\r\n                    <div style=\"width: 100%;height: 95%; justify-content: center;display: flex\">\r\n                      <!-- <pq-visor-pdf [urlPdf]=\"url\"></pq-visor-pdf>-->\r\n                      <div class=\"contentRefuse\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'100%'\"\r\n                           [style.overflow]=\"'auto'\">\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"!primerCarga\" class=\"recargar\">\r\n                      <label for=\"cargarDocumento\" style=\"display: flex\"><img src=\"./assets/Images/editar-pieza/cargar.svg\"></label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"width: 100%; height: 7%\" class=\"btnDireccionPL\">\r\n              <!--<div>\r\n                <a class=\"btnImprimir\" (click)=\"cerrar()\">CANCELAR</a>\r\n              </div>-->\r\n              <div>\r\n                <a class=\"btnImprimir\" (click)=\"finalizar()\" [style.pointer-events]=\"colorBoton?'auto':'none'\" [style.background]=\"colorBoton?'#4BA92B':'#D8D9DD'\">ACEPTAR</a>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n     </div>\r\n    <!-- fin modal-content -->\r\n  </div>\r\n  <!-- fin modal-->\r\n</div>\r\n<pn-pop-up-correo *ngIf=\"envioCorreo\" [correos]=\"correos\" [datos] = \"datosEnviar\" (cerrarPop)=\"cerrarCorreo($event)\"></pn-pop-up-correo>\r\n<!--/*****************************************************************/-->\r\n<div id=\"popUp\" class=\"popUp\" *ngIf=\"popImpresion\" >\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n      <span>Imprimiendo Evidencia\r\n        <span></span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(255,255,255,.7);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;top:0%;background-color:#fff;position:relative;padding:0;outline:0;width:929px;height:805px;color:#000;border:1px solid #008894;font-family:\"Roboto\",sans-serif;border-radius:11px 11px 11px 11px}.header{width:100%;height:55px;color:#fff;font-family:\"Novecento\";font-weight:bold;font-size:26px;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:10px 10px 0px 0px}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contenido>.informacionGeneral{width:100%;height:125px;background:#f8fbfc;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.contenido>.informacionFactura{height:627px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px 20px 20px 20px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contenido>.informacionFactura>.contenidoFac{height:93%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.contenido>.informacionFactura>.contenidoFac>.primeraSeccion{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:40%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px}.contenido>.informacionFactura>.contenidoFac>.segundaSeccion{width:60%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px}.info{font-family:Roboto;font-weight:300;font-size:16px;color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex}.titulo{font-family:Novecento;font-weight:bold;font-size:22px;color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex}.subtitulo{font-family:Roboto;font-weight:500;font-size:18px;color:#424242}.subtituloLink{font-family:Roboto;font-weight:500;font-size:18px;color:#424242;cursor:pointer}.infoOrden{width:70%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.5;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:20px}.infoTipo{width:30%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.5;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-right:20px}.buscar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid}.buscar div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:249px;border-radius:102px 102px 102px 102px;-moz-border-radius:102px 102px 102px 102px;-webkit-border-radius:102px 102px 102px 102px;border:.5px solid #bfc0c7;height:26px;width:90%}.buscar div div{border:none;border-radius:0px 0px 0px 0px;-moz-border-radius:0px 0px 0px 0px;-webkit-border-radius:0px 0px 0px 0px;border:0px solid #000;width:40px;background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.buscar div .buscar-input{background:transparent;border-radius:100px;-moz-border-radius:102px 102px 102px 102px;border:0px solid #000;width:100%;font-family:Helvetica;font-size:18px;color:#aaa9af;outline:none;padding-left:5px}.barraBusqueda{width:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.lista{width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{background-color:#eceef0}.lista>.divActive .dfSelect{background:#008895 !important;width:5px !important;color:#008895}.lista>.divActive .datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.divActive .datosLst>p{font-weight:normal}.listaFacturas{overflow:auto;height:80%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid #424242;border-top:1px solid #424242}.tituloFacturaList{font-family:Novecento;font-weight:bold;font-size:20px;width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:5px}.tituloFacturaList>.titulo{font-family:Novecento;font-weight:bold;font-size:20px;color:#424242}.informacionList{font-family:Roboto;width:85%;padding-top:4px}.informacionList label{font-family:Roboto;font-weight:bold;font-size:21px;line-height:1}.informacionList span{font-weight:bold;font-size:20px;color:#008894;font-family:Roboto}.informacionList h3{font-size:17px;font-family:Roboto;color:#424242;line-height:1.5;font-weight:500;margin-top:4px}.infoFactura{height:40%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid;padding-top:15px}.infoFacturaSinInfo{height:95%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid;padding-top:15px}.sinDatos{color:#d8d9dd;font-family:Novecento;font-weight:bold;font-size:25px;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btnDireccionPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:5%;padding-top:15px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.btnImprimir{width:170px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.tipoFacturacion{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cargaDoc{width:100%;height:95%;background-color:#eceef0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.carga{display:none}.carga::-webkit-file-upload-button{opacity:0}.vistDoc{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;padding-bottom:10px;padding-right:30px;padding-left:30px}.textoImagen{color:#d8d9dd;font-size:25px;text-align:center;position:relative;font-family:Novecento;font-weight:bold}.imgeArchivo{height:84px;width:66px;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;text-align:center}.cargarDocumento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.documento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-bottom:10px;width:100%;height:80%}.totales{width:100%;height:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-top:10px;font-family:Roboto;font-weight:300}.folio{font-size:20px;font-family:Novecento;font-weight:bold;color:#008894;cursor:pointer}.folio u:hover{opacity:.8}.datosTipoFac{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tituloCorreo{font-family:Roboto;font-weight:bold;font-size:18px}.datosIndividuales{height:30%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.texto{font-family:Roboto;font-weight:300}.subtituloTexto{font-family:Roboto;font-weight:bold;font-size:17px;line-height:1.5}.recargar{width:100%;height:8%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.linkSat{font-family:Roboto;font-weight:bold;color:#008894;font-size:18px}u.folio:hover{opacity:.8}a:hover{opacity:.8}span.subtituloLink:hover{opacity:.8}#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border:1px solid #008894;border-radius:21px 21px 19px 19px}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;color:#fff;font-family:Novecento;font-weight:bold;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px;border-radius:21px 21px 0px 0px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.border{width:1.1px;height:100%;background:-webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;background:linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%}@media all and (max-height: 818px)and (min-height: 770px){.modal-content{height:750px}}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpFacturacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopUpFacturacionComponent = /** @class */ (function () {
    function PopUpFacturacionComponent(_embalar) {
        this._embalar = _embalar;
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.facturas = [];
        this.listaFD = [];
        this.pdf = '';
        this.htmlToAdd = '';
        this.val = 1;
        this.validarLista = true;
        this.correos = [];
        this.rutaLocal = 'http://localhost:8080/SAP/';
        this.rutaProd = 'http://187.189.39.50:51725/SAP/Facturas/';
        this.rutaSat = 'https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?&id=';
        this.link = 'https://verificacfdi.facturaelectronica.sat.gob.mx'; // Es el lin k que se mustra para sat. Solo la vista
        this.lista = [];
    }
    PopUpFacturacionComponent.prototype.ngOnInit = function () {
        this.datos = true;
        this.cliente = 'CENTRO DE ESTUDIOS CIENTÍFICOS PHARMA';
        this.encargado = 'Pedro Alejandro Hernández L. / Almacenista';
        // this.index = 2;
        this.colorBoton = false;
        this.primerCarga = true;
        console.log('Datos cliente -->', this.datosCliente);
    };
    PopUpFacturacionComponent.prototype.ngOnChanges = function () {
        if (this.recibirLista && this.recibirLista !== null) {
            this.recuperarDatos();
        }
    };
    PopUpFacturacionComponent.prototype.recuperarDatos = function () {
        console.log('Sor la lista facturas--', this.recibirLista);
        var monto;
        this.tipoFactura = this.recibirLista[0].tipo;
        this.openView = true;
        for (var i = 0; i < this.recibirLista.length; i++) {
            monto = new __WEBPACK_IMPORTED_MODULE_1__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(this.recibirLista[i].importe);
            this.facturas.push({ tipo: this.recibirLista[i].tipo,
                usuario: this.recibirLista[i].usuario,
                password: this.recibirLista[i].password,
                correos: this.recibirLista[i].correos,
                url: this.recibirLista[i].url,
                importe: monto,
                factura: this.recibirLista[i].factura,
                fpor: this.recibirLista[i].fpor,
                folioF: this.recibirLista[i].folioF,
                rfcReceptor: this.recibirLista[i].rfcReceptor,
                rfcEmisor: this.recibirLista[i].rfcEmisor,
                moneda: this.recibirLista[i].moneda,
                idFactura: this.recibirLista[i].idFactura,
                sello: this.recibirLista[i].sello,
                total: this.recibirLista[i].total });
        }
        this.lista = this.facturas; /// Va a sufrir los cambios
        this.listaAux = this.facturas; // Nunca se modifica (EL Universo)
        this.totales = this.listaAux.length;
    };
    /// Funcion de buscar en facturacion
    PopUpFacturacionComponent.prototype.buscar = function (search) {
        var _this = this;
        this.listaFD[this.i] = '';
        this.fPor = '';
        this.folio = '';
        this.datos = true;
        /////////////////////////
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.listaAux.slice();
        }
        else {
            this.listaAux.forEach(function (folio) {
                if (folio.factura.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
            // this.validarLista = false;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    PopUpFacturacionComponent.prototype.seleccionarItem = function (item, $index) {
        this.i = $index;
        this.fPor = item.fpor;
        this.colorBoton = false;
        this.primerCarga = true; // Cada que de clic se cambiara a la vista prinicpal.
        this.val = 1;
        this.idFactura = item.idFactura;
        ///// Proceso de obtener los datos
        this.folio = item.factura;
        this.clienteFac = item.fpor;
        this.rutaXML = this.rutaProd + this.clienteFac + '/' + this.folio + '.xml';
        if (item.tipo === 'Correos') {
            this.correo = true;
            this.sat = false;
            this.portal = false;
            this.correos = item.correos.split(';');
            if (this.correos[this.correos.length - 1] === '') {
                this.correos.splice(this.correos.length - 1, 1);
            }
            this.datosEnviar = { fpor: item.fpor,
                factura: item.factura,
                total: item.total,
                fe: item.sello };
        }
        else if (item.tipo === 'SAT') {
            this.RfcR = item.rfcReceptor;
            this.RfcE = item.rfcEmisor;
            this.folioF = item.folioF;
            this.total = item.total;
            this.fe = item.sello;
            this.correo = false;
            this.sat = true;
            this.portal = false;
            this.pathVistaExterna = this.rutaSat + this.folioF + '&re=' + this.RfcE + '&rr=' + this.RfcR + '&tt=' + this.total + '&fe=' + this.fe;
        }
        else if (item.tipo === 'Portal') {
            this.url = item.url;
            this.usuario = item.usuario;
            this.password = item.password;
            this.correo = false;
            this.sat = false;
            this.portal = true;
            this.pathVistaExterna = item.url;
        }
        this.datos = false;
        this.listaFD = [];
        this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[$index] = 'divActive';
        this.index = '#' + ($index + 1) + ' · ';
        this.punto = '·';
    };
    PopUpFacturacionComponent.prototype.fileChange2 = function ($event) {
        this.file = undefined;
        if (this.val === 1) {
            this.primerCarga = false;
            this.val = 2;
        }
        console.log($event);
        this.file = $event.target.files;
        if (this.file !== null && this.file !== undefined) {
            this.colorBoton = true;
        }
        this.mostrarDocumento(this.file);
    };
    PopUpFacturacionComponent.prototype.mostrarDocumento = function (fileInput) {
        /*const blob = new Blob([fileInput], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(blob).split(':');
        this.url = fileURL[1] + ':' + fileURL[2] + ':' + fileURL[3];*/
        var doc = document.querySelector('#preview');
        var $img = document.querySelector('#preview');
        var reader = new FileReader();
        /*Validación para eliminar si ya existe un elemento*/
        if (document.querySelector('#preview')) {
            document.querySelector('#preview').children[0].remove();
        }
        /******************/
        reader.onload = function (e) {
            document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
        };
        reader.readAsDataURL(fileInput[0]);
    };
    PopUpFacturacionComponent.prototype.visualizar = function (index) {
        this.path = this.rutaProd + this.clienteFac + '/' + this.folio + '.pdf';
        console.log('Soy index', index);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(this.path);
    };
    PopUpFacturacionComponent.prototype.abrirNueva = function () {
        // window.open("https://www.argar.cat", "Diseño Web", "width=300, height=200");
        console.log('Entre ');
        var shell = electron.shell;
        shell.openExternal(this.pathVistaExterna);
        // shell.openExternal('https://www.argar.cat/es/ventana-nueva-con-javascript/');
    };
    PopUpFacturacionComponent.prototype.cerrar = function () {
        this.openView = false;
        this.cerrarPop.emit(true);
    };
    PopUpFacturacionComponent.prototype.finalizar = function () {
        var _this = this;
        if (this.tipoFactura === 'Correos') {
            this._embalar.uploadFile(this.file, this.folio, this.fPor).subscribe(function (data) {
                _this.envioCorreo = true;
            });
        }
        else {
            this._embalar.uploadFile(this.file, this.folio, this.fPor).subscribe(function (data) {
                var ruta = _this.rutaLocal + 'OrdenDespacho/Evidencia/' + _this.fPor + '/' + _this.folio + '.pdf';
                if (_this.tipoFactura === 'SAT') {
                    // this.imprimirEvidencia(ruta);
                    _this.activarPop();
                }
                _this.cerrarPendiente();
            });
        }
    };
    PopUpFacturacionComponent.prototype.cerrarPendiente = function () {
        var _this = this;
        this._embalar.finalizarEvidenciaFac(this.idFactura).subscribe(function (data) {
            var indice;
            if (data.current === true) {
                for (var i = 0; i < _this.listaAux.length; i++) {
                    if (_this.folio === _this.listaAux[i].factura) {
                        indice = i;
                    }
                }
                _this.listaAux.splice(indice, 1);
                _this.lista.splice(_this.i, 1);
                if (_this.listaAux.length > 0) {
                    _this.totales = _this.listaAux.length;
                    if (_this.lista.length > 0) {
                        _this.seleccionarItem(_this.lista[0], 0);
                    }
                    else {
                        _this.datos = true;
                    }
                }
                else {
                    _this.cerrar();
                }
            }
        });
    };
    /*imprimirEvidencia(archivo) {
      console.log('Imprimir path::', archivo);
      const BrowserWindow = electron.remote.BrowserWindow;
      let newWin = new BrowserWindow({  width: 1200, height: 900})
      //    let newWin = new BrowserWindow({  width: 40, height: 40})
      var html = [
        "<html>",
        "<html><head>",
        "<style>",
        "@media print { @page @page {size: landscape}}",
        "</style></head>",
        "<body> <div class='contenido'>",
        //"<pq-visor-pdf  class='pdfViewer' [urlPdf]="+this.arrayPathPedidosAux[0]+"  ></pq-visor-pdf>",
        "<iframe id='pdf' width='100%' src='"+ archivo +"'height='100%' alt='pdf' type='application/pdf'/>",
  
        // "<object id='pdf' data=" +this.arrayPathPedidosAux[0]+ "width='100%' height='500px'  type='application/pdf'>",
  
        // "<embed id='pdf' width='100%' src="+ "http://187.189.39.50:51725/SAP/HojasSeguridad/2/1012553.pdf" +"height='100%' alt='pdf' pluginspage='http:// www.adobe.com/products/acrobat/readstep2.html' type='application/pdf'/>",
        // "<div class='contentRefuse' id='preview' [innerHtml]='htmlToAdd | safeHtml' [style.height]='400px' [style.overflow]='hidden'>",
        "</div></body></html>"
  
      ].join("");
  
      PDFWindow.addSupport(newWin)
      newWin.loadURL(archivo);
      newWin.hide()
      setTimeout(() => {
        console.log(newWin.webContents.getPrinters());
        let prints = newWin.webContents.getPrinters();
        let impresora: String = "";
        let landscape: string = "landscape";
  
        for (let print of prints) {
          if (print.description.indexOf("Zebra") === -1) {
            impresora = print.name;
          }
          console.log('Nombre de impresora:', impresora);
        }
        newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora}, (success) => {
          newWin.close();
        });
      }, 4000);
    }*/
    PopUpFacturacionComponent.prototype.cerrarCorreo = function (evento) {
        if (evento) {
            this.envioCorreo = false;
            this.cerrarPendiente();
        }
    };
    PopUpFacturacionComponent.prototype.activarPop = function () {
        var _this = this;
        this.envioCorreo = true;
        this.popImpresion = true;
        setTimeout(function () {
            _this.popImpresion = false;
            _this.envioCorreo = false;
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpFacturacionComponent.prototype, "cerrarPop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpFacturacionComponent.prototype, "recibirLista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpFacturacionComponent.prototype, "datosCliente", void 0);
    PopUpFacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-facturacion',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], PopUpFacturacionComponent);
    return PopUpFacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpGenerarEtiqueta\" >\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n      <label style=\"padding-top: 10px\">\r\n        Generando etiqueta\r\n      </label>\r\n    </div>\r\n    <!--<div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"imprimirEtiqueta()\">\r\n        <label>Aceptar</label>\r\n      </div>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n\r\n<!--<div id=\"popUp\" class=\"popUp\" *ngIf=\"openPopImprimir\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <label>Imprimir QR para </label>\r\n      <label> colocar en Sobre de Documentos</label>\r\n    </div>\r\n    <div class=\"dvBotones\" style=\"justify-content: center\">\r\n      <div class=\"dvBoton\" (click)=\"cambiarPop()\">\r\n        Aceptar\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:19px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpGenerarEtiquetaEstadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PopUpGenerarEtiquetaEstadoComponent = /** @class */ (function () {
    // transform(new Date());
    function PopUpGenerarEtiquetaEstadoComponent(_electronService, _commonService) {
        this._electronService = _electronService;
        this._commonService = _commonService;
        // popUpGenerarEtiqueta = true;
        this.vistaPopEstado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); /// Se agrego por que va este componente antes de de pop-ip-informativo
        /*@Output() vistaListaEmbalar: EventEmitter <any> = new EventEmitter<any>();*/
        this.folio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.terminarGenerar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.folioEtiqueta = this.folioTemHie;
        this.i = 1;
        this._maximizer = false;
        this._fullScreen = false;
    }
    PopUpGenerarEtiquetaEstadoComponent.prototype.ngOnInit = function () {
        this.maximizer();
        if (this.activarSobre) {
            this.popUpGenerarEtiqueta = true;
        }
        else {
            this.popUpGenerarEtiqueta = true;
        }
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.ngOnChanges = function () {
        this.valor = this.valorIndice;
        this.folioEtiqueta = this.folioTemHie;
        console.log('folio Hielera x2:', this.folioEtiqueta);
        this.obtenerFolio();
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.obtenerFolio = function () {
        var _this = this;
        var tipo;
        if (this.recibirManejo === 'Refrigeracion' || this.recibirManejo === 'Refrigeración') {
            tipo = 'Hielera Refrigeracion';
        }
        else if (this.recibirManejo === 'Congelación' || this.recibirManejo === 'Congelacion') {
            tipo = 'Hielera Congelacion';
        }
        else if (this.recibirManejo === 'Ambiente') {
            tipo = 'Bolsa de transito';
        }
        if (this.activarBolsa) {
            this.folioEtiqueta = this.folioEtiqueta;
        }
        else if (this.activarSobre) {
            this.folioEtiqueta = this.folioEtiqueta;
            if (this.activarSobre) {
                setTimeout(function () {
                    _this.imprimirEtiquetaBolsa();
                }, 1500);
            }
        }
        else {
            if (this.valor !== 0) {
                if (this.activarSobre) {
                    setTimeout(function () {
                        _this.imprimirEtiquetaBolsa();
                    }, 1500);
                }
                else {
                    setTimeout(function () {
                        _this.imprimirEtiquetaBolsa();
                    }, 1500);
                }
                this.folioEtiqueta = this.folioEtiqueta + '-' + this.valorIndice;
                this.valoresPaking = { folio: this.folioEtiqueta, tipo: tipo };
                this.folio.emit(this.valoresPaking);
            }
        }
        console.log('Soy el folio a imprimir..', this.folioEtiqueta);
    };
    /*cambiarVistaEmbalar() {
      this.popUpGenerarEtiqueta = false;
      let val = true;
      this.vistaListaEmbalar.emit(val);
    }*/
    PopUpGenerarEtiquetaEstadoComponent.prototype.CambiarVista = function () {
        this.popUpGenerarEtiqueta = false;
        var val = true;
        this.vistaPopEstado.emit(val);
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.cambiarGenerar = function () {
        this.popUpGenerarEtiqueta = false;
        this.terminarGenerar.emit(true);
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.imprimirEtiqueta = function () {
        var BrowserWindow = electron.remote.BrowserWindow;
        // clipboard.writeText('Electron is ready!!');
        var newWin = new BrowserWindow({ width: 288, height: 216 });
        // var fecha:string= this.transform(new Date());
        var html = [
            '<html><head>',
            '<style>',
            '@media print { @page {size: 10cm 10cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}',
            '.contenido {display: flex ;padding-top:127px; padding-left:130px;box-sizing:border-box;  page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;\'} .bcode{font-family:\'Code 128\'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}',
            '</style></head>',
            '<body> <div class=\'contenido\' >',
            '<img style=\'width: 4cm; height:4cm;\' ',
            'src=\'https://qrcode.tec-it.com/API/QRCode?data=' + this.folioEtiqueta + '&backcolor=%23ffffff\'>',
            '</div>',
            '</div>',
            '</body></html>'
        ].join('');
        newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
        newWin.hide();
        // newWin.webContents.openDevTools()
        newWin.webContents.on('did-finish-load', function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = '';
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description == 'ZebraTicket') {
                    impresora = print_1.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        });
        this.CambiarVista();
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.imprimirEtiquetaBolsa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, BrowserWindow, newWin, QRCode, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Soy datos cliente', this.datosCliente);
                        cliente = this.datosCliente[0].cliente;
                        BrowserWindow = electron.remote.BrowserWindow;
                        newWin = new BrowserWindow({ width: 288, height: 240 });
                        return [4 /*yield*/, this.getQRCode(this.folioEtiqueta)];
                    case 1:
                        QRCode = _a.sent();
                        html = [
                            '\n' +
                                '     <html><head>\n' +
                                '        <style>\n' +
                                '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
                                '            html, body {\n' +
                                '                width: 100%;\n' +
                                '            }\n' +
                                '            \n' +
                                '            body {\n' +
                                '                background: #cafe00;\n' +
                                '            }\n' +
                                '\n' +
                                '            .contenido {\n' +
                                '                display: flex;\n' +
                                '                justify-content: center;\n' +
                                '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
                                '            }\n' +
                                '\n' +
                                '        </style></head>\n' +
                                '        <body> \n' +
                                '            <div class=\'contenido\' >\n' +
                                '<div>',
                            '<img style=\'width: 4cm; height:4cm;\' ',
                            'src=\'' + QRCode + '\'>',
                            '</div>',
                            '                <span style=\'font-weight: bold;margin-top: 10px;align-self: center;text-align: center; line-height: 1.2\'>' + cliente + '</span>\n' +
                                '                 <div style=\'font-weight: 300;display: inline-block; height: 20px;align-self: center;text-align: center;\'>' + this.folioEtiqueta + '</div>\n' +
                                '            </div>\n' +
                                '        \n' +
                                '        </body></html>'
                        ].join('');
                        newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
                        newWin.hide();
                        // newWin.webContents.openDevTools()
                        newWin.webContents.on('did-finish-load', function () {
                            console.log(newWin.webContents.getPrinters());
                            var prints = newWin.webContents.getPrinters();
                            var impresora = '';
                            for (var _i = 0, prints_2 = prints; _i < prints_2.length; _i++) {
                                var print_2 = prints_2[_i];
                                if (print_2.description == 'ZebraTicket') {
                                    impresora = print_2.name;
                                }
                            }
                            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                                newWin.close();
                            });
                        });
                        if (this.activarBolsa) {
                            this.cambiarGenerar();
                        }
                        else {
                            this.CambiarVista();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.cambiarPop = function () {
        this.openPopImprimir = false;
        this.popUpGenerarEtiqueta = true;
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    PopUpGenerarEtiquetaEstadoComponent.prototype.getQRCode = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            var parameter = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
            parameter.code = code;
            _this._commonService.getQRCode(parameter)
                .subscribe(function (data) {
                resolve(data.current);
            }, function (error) {
                resolve("https://qrcode.tec-it.com/API/QRCode?data=" + code + "&backcolor=%23ffffff");
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "vistaPopEstado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "folio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "terminarGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "recibirManejo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "activarSobre", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "activarBolsa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "valorIndice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "folioTemHie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpGenerarEtiquetaEstadoComponent.prototype, "datosCliente", void 0);
    PopUpGenerarEtiquetaEstadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-generar-etiqueta-estado',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */], __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__["a" /* ComunService */]])
    ], PopUpGenerarEtiquetaEstadoComponent);
    return PopUpGenerarEtiquetaEstadoComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"openPopcolocar\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\" *ngIf=\"activarHielera\">\r\n      <label>Colocar Etiqueta Corporativa</label>\r\n        <label>a {{tipoMensaje}}.</label>\r\n    </div>\r\n    <div class=\"popContenido\" *ngIf=\"activarSobre\">\r\n      <label>Colocar Etiqueta QR</label>\r\n      <label>a sobre de documentos.</label>\r\n    </div>\r\n    <div class=\"popContenido\" *ngIf=\"activarBolsaInfo\">\r\n      <label>Colocar Etiqueta QR</label>\r\n      <label>a la Bolsa.</label>\r\n    </div>\r\n    <!--<div class=\"dvBotones\" style=\"justify-content: flex-start; padding-left: 34px\">\r\n      <div class=\"dvBoton\" (click)=\"closePopUp()\">\r\n        Cancelar\r\n      </div>\r\n    </div>-->\r\n    <div class=\"dvBotones\" style=\"justify-content: center; /*padding-left: 200px*/\">\r\n      <div class=\"dvBoton\" (click)=\"cambiarVistaEmbalar()\">\r\n        <label>Aceptar </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--<div id=\"popUp\" class=\"popUp\" *ngIf=\"openPopImprimir\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <label>Imprimir Etiqueta para </label>\r\n             <label> colocar en Etiqueta Corporativa</label>\r\n    </div>\r\n    <div class=\"dvBotones\" style=\"justify-content: center\">\r\n      <div class=\"dvBoton\" (click)=\"CambiarVista()\">\r\n        Aceptar\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:78px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{font-family:Roboto}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:Novecento;font-size:21px;font-weight:bold;color:#fff;cursor:pointer;margin-top:-2px}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpInformativoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpInformativoComponent = /** @class */ (function () {
    function PopUpInformativoComponent() {
        // @Input () label: string;
        this.popUpGenerarEtiqueta = true;
        /* @Output() vistaPopEstado: EventEmitter <any> = new EventEmitter<any>();*/
        this.vistaListaEmbalar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); /// Se agrego por el cambio que se hizo
        this.cambiarVistaGenerar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tipoMensaje = 'Hielera';
        this.openPopcolocar = true;
    }
    PopUpInformativoComponent.prototype.ngOnInit = function () {
        if (this.activarBolsa) {
            this.activarBolsaInfo = true;
            this.activarHielera = false;
            this.activarSobre = false;
        }
        else if (this.activarGenerar) {
            this.activarHielera = false;
            this.activarSobre = true;
        }
        else {
            this.activarHielera = true;
            this.activarSobre = false;
        }
    };
    PopUpInformativoComponent.prototype.closePopUp = function () {
        this.vEmbalarProductos = true;
    };
    PopUpInformativoComponent.prototype.cambiarPop = function () {
        this.openPopcolocar = false;
        this.openPopImprimir = true;
    };
    /* CambiarVista() {
       this.openPopcolocar = false;
       this.openPopImprimir = false;
       let val = true;
       this.vistaPopEstado.emit(val);
     }*/
    PopUpInformativoComponent.prototype.cambiarVistaEmbalar = function () {
        if (this.activarSobre) {
            this.popUpGenerarEtiqueta = false;
            var val = true;
            this.cambiarVistaGenerar.emit(val);
        }
        else {
            this.popUpGenerarEtiqueta = false;
            var val = true;
            this.vistaListaEmbalar.emit(val);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpInformativoComponent.prototype, "vistaListaEmbalar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpInformativoComponent.prototype, "cambiarVistaGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpInformativoComponent.prototype, "activarGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpInformativoComponent.prototype, "activarBolsa", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpInformativoComponent.prototype, "tipoMensaje", void 0);
    PopUpInformativoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-informativo',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpInformativoComponent);
    return PopUpInformativoComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\r\n  <div id=\"id01\" class=\"modal\" #pop>\r\n    <div class=\"modal-content\">\r\n      <header class=\"header\">\r\n        <h1> PROQUIFA NET  </h1>\r\n      </header>\r\n      <div class=\"contenido\">\r\n        <div class=\"info\">\r\n          <span>INFORMACIÓN DE LA O.ENTREGA</span>\r\n          <label class=\"subTitle\">{{client[0].cliente}}</label>\r\n          <label>{{contacto}}</label>\r\n        </div>\r\n        <div class=\"datos\">\r\n          <span>Datos del Paquete: </span>\r\n          <div>\r\n            <div>\r\n              <div>\r\n                <label>Peso: </label>\r\n                <input type=\"number\" [(ngModel)]=\"peso\" (input)=\"saveMeter($event.target.value, 'peso')\"  min=\"1\">\r\n                <label style=\"padding-left: 4px\">kg</label>\r\n              </div>\r\n              <div>\r\n                <label>Longitud:</label>\r\n                <input [(ngModel)]=\"longitud\" (input)=\"saveMeter($event.target.value, 'long')\"  type=\"number\"  min=\"1\">\r\n                <label style=\"padding-left: 4px\">cm</label>\r\n              </div>\r\n            </div>\r\n            <div style=\"padding-top: 61px\">\r\n              <div>\r\n                <label>Altura:</label>\r\n                <input type=\"number\" [(ngModel)]=\"altura\" (input)=\"saveMeter($event.target.value, 'alt')\"  min=\"1\">\r\n                <label style=\"padding-left: 4px\">cm</label>\r\n              </div>\r\n              <div>\r\n                <label  style=\"padding-left: 20px;\">Ancho:</label>\r\n                <input [(ngModel)]=\"ancho\" (input)=\"saveMeter($event.target.value, 'ancho')\" type=\"number\"  min=\"1\">\r\n                <label style=\"padding-left: 4px;\">cm</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <footer class=\"footer2\">\r\n        <a type=\"submit\" class=\"btnOk\" (click)=\"btn(true)\" [style.background]=\"activeBtn? '#008894':'#C2C3C9' \" [style.pointerEvents]=\"activeBtn?'auto':'none'\" >\r\n          <label> ACEPTAR </label>\r\n        </a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal{z-index:11;display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(238,238,238,.8);font-family:\"Roboto\",sans-serif}.modal-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:auto;text-align:center;background-color:#fff;position:relative;padding:0;outline:0;width:792px;height:518px;color:#424242;border-radius:25px;font-family:\"Roboto\";font-size:20px;border:1px solid #008a98}.header{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:52px;background-color:#008894;border-radius:24px 24px 0px 0px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;align-items:center}.header h1{top:20px;color:#fff;font-size:25px;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-weight:bold}.contenido{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;align-self:stretch;width:100%;height:calc(100% - 403px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;color:#424242}.contenido>.info{height:137px;width:100%;background-color:#f8fbfc;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;line-height:1.2;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:30px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}.contenido>.info>label{font-family:roboto;font-weight:normal;font-size:16px;color:#424242}.contenido>.info .subTitle{font-size:18px;font-weight:400}.contenido>.info>span{font-family:Novecento;font-weight:bold;font-size:22px;color:#008894}.footer2{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:stretch;align-self:stretch;height:61px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:30px;padding-left:30px;display:-webkit-box;display:-ms-flexbox;display:flex}.btnOk{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#338a9c;cursor:pointer}.btnOk>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.datos{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:266px;padding-top:20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-left:30px;padding-right:30px}.datos>span{font-family:Roboto;font-weight:bold;font-size:20px;color:#424242}.datos>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:39px}.datos>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.datos>div>div>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.datos>div>div>div>label{font-family:Roboto;font-weight:400;font-size:18px;color:#424242;padding-right:4px}.datos>div>div>div>input{background:#fff;border:1px solid #ccc;width:111px;height:26px;font-size:15px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpMedidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpMedidasComponent = /** @class */ (function () {
    function PopUpMedidasComponent() {
        this.updateMeter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpMedidasComponent.prototype.ngOnInit = function () {
        this.activeBtn = false;
        console.log(this.client);
        if (this.client[0].puesto !== undefined && this.client[0].puesto !== null && this.client[0].puesto.trim() !== '') {
        }
        else {
            this.contacto = this.client[0].contacto;
        }
    };
    PopUpMedidasComponent.prototype.btn = function (valor) {
        this.dataMeter = {
            valor: valor,
            meter: {
                peso: this.peso,
                length: this.longitud,
                height: this.altura,
                width: this.ancho
            }
        };
        this.updateMeter.emit(this.dataMeter);
    };
    PopUpMedidasComponent.prototype.saveMeter = function (data, tipo) {
        if (tipo === 'peso') {
            this.peso = data;
        }
        else if (tipo === 'alt') {
            this.altura = data;
        }
        else if (tipo === 'ancho') {
            this.ancho = data;
        }
        else if (tipo === 'long') {
            this.longitud = data;
        }
        this.validarBtn();
    };
    PopUpMedidasComponent.prototype.validarBtn = function () {
        if (this.peso !== null && this.peso !== undefined && this.peso !== '' && this.altura !== null && this.altura !== undefined
            && this.altura !== '' && this.longitud !== '' && this.longitud !== null && this.longitud !== undefined && this.ancho !== null && this.ancho !== undefined
            && this.ancho !== '') {
            this.activeBtn = true;
        }
        else {
            this.activeBtn = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpMedidasComponent.prototype, "updateMeter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpMedidasComponent.prototype, "client", void 0);
    PopUpMedidasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-medidas',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpMedidasComponent);
    return PopUpMedidasComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpComprobante\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n    <!--  <title>Bolsa de Tránsito</title>-->\r\n      <div class=\"alerta\">\r\n      <img src=\"assets/Images/packinglist.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <label>\r\n       Se ha generado un nuevo Paking List\r\n      </label>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\r\n        <label>Aceptar</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:47px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{padding-top:15px;font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;margin-top:-2px;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%;padding-top:15px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpPakingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpPakingListComponent = /** @class */ (function () {
    function PopUpPakingListComponent() {
        this.cambiarVistaPaking = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popUpComprobante = true;
    }
    PopUpPakingListComponent.prototype.ngOnInit = function () {
    };
    PopUpPakingListComponent.prototype.cerrar = function () {
        this.popUpComprobante = false;
        this.cambiarVistaPaking.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpPakingListComponent.prototype, "cambiarVistaPaking", void 0);
    PopUpPakingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-paking-list',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpPakingListComponent);
    return PopUpPakingListComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpComprobante\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <!--  <title>Bolsa de Tránsito</title>-->\r\n      <div class=\"alerta\">\r\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <label>\r\n        ¡Se han embalado todas las piezas\r\n      </label>\r\n      <label style=\"color:#008894\">\r\n        exitosamente!\r\n      </label>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\r\n        Aceptar\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:11}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:11;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:47px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{padding-top:15px;font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%;padding-top:15px}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpRegresarVistPrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpRegresarVistPrincipalComponent = /** @class */ (function () {
    function PopUpRegresarVistPrincipalComponent() {
        this.cambiarVistaPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popUpComprobante = true;
    }
    PopUpRegresarVistPrincipalComponent.prototype.ngOnInit = function () {
    };
    PopUpRegresarVistPrincipalComponent.prototype.cerrar = function () {
        this.popUpComprobante = false;
        this.cambiarVistaPrincipal.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpRegresarVistPrincipalComponent.prototype, "cambiarVistaPrincipal", void 0);
    PopUpRegresarVistPrincipalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-regresar-vist-principal',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpRegresarVistPrincipalComponent);
    return PopUpRegresarVistPrincipalComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpScanear\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <textarea #textarea type=\"text\" name=\"firstname\" (keydown.enter)=\"enter()\" class=\"texArea\" [(ngModel)]=\"textoPedimento\" style=\"position: absolute\"> </textarea>\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <div class=\"alerta\">\r\n        <img src=\"assets/Images/escanea.svg\" alt=\"\" class=\"alert\" />\r\n      </div>\r\n      <label>\r\n        {{mensaje}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Pop-up informativo de lo que recupero al scanear con el pop anterior-->\r\n\r\n<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpComprobante\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n     <title>Bolsa de Tránsito</title>\r\n      <!--<div class=\"alerta\" *ngIf=\"!valScaner\">-->\r\n      <!--<img src=\"assets/Images/packinglist.svg\" alt=\"\" class=\"alert\" />-->\r\n      <!--</div>-->\r\n      <label>\r\n        Folio: {{textoPedimento}}\r\n      </label>\r\n      <label>\r\n        Manejo: Ambiente\r\n      </label>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\r\n        <label>Aceptar</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border-radius:20px;border:1px solid #008894}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;border-radius:19px 19px 0 0;color:#fff;font-family:Roboto;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:30px;padding-top:30px}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.popContenido>label{padding-top:20px;font-family:Roboto;font-weight:bold;font-size:30px}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;height:100%;padding-top:1.8%;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.alerta{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.alerta img.alert{width:100%;height:100%}.texArea{width:100%;height:100%;border:1px solid red;z-index:1;opacity:0}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpScanearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpScanearComponent = /** @class */ (function () {
    function PopUpScanearComponent() {
        this.envioFolio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaListaEmbalar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popUpScanear = true;
        this.popUpComprobante = false;
        this.focus = true;
    }
    PopUpScanearComponent.prototype.ngOnInit = function () {
    };
    PopUpScanearComponent.prototype.ngAfterViewInit = function () {
        this.textArea.nativeElement.focus();
    };
    PopUpScanearComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.textoPedimento = obj.nombre;
        // console.log(this.textoPedimento);
    };
    PopUpScanearComponent.prototype.enter = function () {
        var _this = this;
        console.log('llega enter' + this.textoPedimento);
        var pzas;
        var folio;
        var BolsaTransito;
        var auxP;
        auxP = this.textoPedimento.trim();
        this.textoPedimento = auxP;
        // alert("txtEnviado: " + this.textoPedimento);
        if (this.textoPedimento.length > 1) {
            this.escaneoNormal = false;
            this.escaneoCorrecto = true;
            this.popUpComprobante = true;
            this.valoresPaking = { folio: this.textoPedimento, tipo: 'Bolsa de transito' };
            this.envioFolio.emit(this.valoresPaking);
            this.popUpScanear = false;
        }
        else {
            // console.log("Error al escanear codigo.");
            this.escaneoNormal = false;
            this.escaneoIncorrecto = true;
            setTimeout(function () {
                _this.escaneoNormal = true;
                _this.escaneoIncorrecto = false;
            }, 1000);
        }
    };
    PopUpScanearComponent.prototype.cerrar = function () {
        this.popUpComprobante = false;
        var val = true;
        this.vistaListaEmbalar.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpScanearComponent.prototype, "mensaje", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpScanearComponent.prototype, "valScaner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpScanearComponent.prototype, "recibirManejo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpScanearComponent.prototype, "envioFolio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpScanearComponent.prototype, "vistaListaEmbalar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopUpScanearComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopUpScanearComponent.prototype, "textArea", void 0);
    PopUpScanearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-scanear',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpScanearComponent);
    return PopUpScanearComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpTimbrado\" >\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <span>Timbrado incorrecto.\r\n        <span></span>\r\n      </span>\r\n      <span>¿Desea realizar el timbrado de nuevo?</span>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"closePopUp()\">\r\n        Cancelar\r\n      </div>\r\n      <div class=\"dvBoton\" (click)=\"aceptar()\" style=\"width: 170px; margin-left: 10px;\">\r\n        Reintentar\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border:1px solid #008894;border-radius:21px 21px 19px 19px}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;color:#fff;font-family:Novecento;font-weight:bold;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px;border-radius:21px 21px 0px 0px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:70px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-ms-flex-pack:distribute;justify-content:space-around}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton>label{font-family:\"Novecento\";font-size:21px;font-weight:bold;color:#fff;height:100%;padding-top:1.8%;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpTimbradoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopUpTimbradoComponent = /** @class */ (function () {
    function PopUpTimbradoComponent() {
        this.cerrarPopTimbrado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpTimbradoComponent.prototype.ngOnInit = function () {
        this.popUpTimbrado = true;
    };
    PopUpTimbradoComponent.prototype.closePopUp = function () {
        this.popUpTimbrado = false;
        this.cerrarPopTimbrado.emit(0);
    };
    PopUpTimbradoComponent.prototype.aceptar = function () {
        this.popUpTimbrado = false;
        this.cerrarPopTimbrado.emit(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpTimbradoComponent.prototype, "cerrarPopTimbrado", void 0);
    PopUpTimbradoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-timbrado',
            template: __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpTimbradoComponent);
    return PopUpTimbradoComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; flex-direction: row;height: 100%;\">\r\n  <div class=\"productosPorEmbalar\" style=\"padding: 20px;box-sizing:  border-box;border-right: 2px solid #ECEEF0;\">\r\n    <div class=\"encabezadoP\">\r\n      <p>PRODUCTOS </p>\r\n      <P>POR EMBALAR</P>\r\n    </div>\r\n    <div>\r\n      <textarea id=\"elementoText\" #elemento (keydown.enter)=\"recuperarTextAux()\" type=\"text\" name=\"firstname\" class=\"texArea\" [(ngModel)]=\"textoPedimento\" style=\"position: inherit;opacity: 0\"></textarea>\r\n    </div>\r\n    <div class=\"congelarPorColectar\" *ngIf=\"mostrarCongelarPorColectar\" (click)=\"MostrarlistaPorCongelacion()\" [style.pointer-events]=\"validarClicCongelacion?'auto':'none'\">\r\n      <div class=\"tipo\">\r\n        <div class=\"imagenTipo\">\r\n          <img class=\"img\" src='./assets/Images/congelacion.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgConge1\"/>\r\n          <img class=\"img\" src='./assets/Images/congelacionOpaco.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgConge2\"/>\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"congeNormal\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor1\">Congelación</p>\r\n          <p [style.color]=\"txtColor2\">{{estadoConge}}</p>\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"congeOpaco\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor3\">Congelación</p>\r\n          <p [style.color]=\"txtColor3\">{{estadoConge}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grafica\">\r\n        <pq-barra-progreso-decremental [tipo]=\"tipoConge\" [pzasTotales] = \"pzasTotalesConge\" [pzasAlMomento] = \"pzasAlMomentoConge\" [mensajePzas] = \"mensajeGraficas\" >\r\n        </pq-barra-progreso-decremental>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"refriPorColectar\" *ngIf=\"mostrarRefriPorColectar\" (click)=\"MostrarlistaporRefrigeracion()\" [style.pointer-events]=\"validarClicRefrigeracion?'auto':'none'\">\r\n      <div class=\"tipo\">\r\n        <div class=\"imagenTipo\">\r\n          <img class=\"img\" src='./assets/Images/refrigeracion.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgRefri1\"/>\r\n          <img class=\"img\" src='./assets/Images/refrigeracionOpaco.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgRefri2\"/>\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"refriNormal\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor1\">Refrigeración</p>\r\n          <p [style.color]=\"txtColor2\">{{estadoRefri}}</p>\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"refriOpaco\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor3\">Refrigeración</p>\r\n          <p [style.color]=\"txtColor3\">{{estadoRefri}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grafica\">\r\n        <pq-barra-progreso-decremental [tipo]=\"tipoRefri\" [pzasTotales] = \"pzasTotalesRefri\" [pzasAlMomento] = \"pzasAlMomentoRefri\" [mensajePzas] = \"mensajeGraficas\" >\r\n        </pq-barra-progreso-decremental>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"AmbientePorColectar\" *ngIf=\"mostrarAmbientePorColectar\" (click)=\" MostrarlistaPorAmbiente()\" [style.pointer-events]=\"validarClicAmbiente?'auto':'none'\">\r\n      <div class=\"tipo\">\r\n        <div class=\"imagenTipo\">\r\n          <img class=\"img\" src='./assets/Images/ambiente.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgAmbiente1\"/>\r\n          <img class=\"img\" src='./assets/Images/ambienteOpaco.svg' style=\"height:33px;width:33px;\" *ngIf=\"imgAmbiente2\" />\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"ambienteNormal\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor1\">Ambiente</p>\r\n          <p [style.color]=\"txtColor2\">{{estadoAmbiente}}</p>\r\n        </div>\r\n        <div class=\"datosTipo\" *ngIf=\"ambienteOpaco\">\r\n          <p style=\"font-weight: 500;\" [style.color]=\"txtColor3\">Ambiente</p>\r\n          <p [style.color]=\"txtColor3\">{{estadoAmbiente}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grafica\">\r\n        <pq-barra-progreso-decremental [tipo]=\"tipoAmbiente\" [pzasTotales] = \"pzasTotalesambiente\" [pzasAlMomento] = \"pzasAlMomentoAmbiente\" [mensajePzas] = \"mensajeGraficas\"  >\r\n        </pq-barra-progreso-decremental>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--EMPIEZA LA LISTA-->\r\n  <div class=\"EscaneaCodigo\" *ngIf=\"mostrarVistaLista\">\r\n\r\n    <div class=\"encabezado\" >\r\n      <div class=\"txtEncabezado\">\r\n        <p style=\"font-weight: bold;\">ESCANEA EL CÓDIGO</p>\r\n        <p style=\"font-weight: normal;\">{{mensajeGraficas}} · {{tipoProductoEmbalar}}</p>\r\n      </div>\r\n      <div class=\"imgEncabezado\">\r\n        <img class=\"img\" src='./assets/Images/escanea_2.svg' style=\"height:42px;width:42px;\" />\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contenido\">\r\n      <!--<textarea #elemento (keydown.enter)=\"recuperarTextAux()\" type=\"text\" name=\"firstname\" class=\"texArea\" [(ngModel)]=\"textoPedimento\" style=\"position: inherit;opacity: 0\"></textarea>-->\r\n      <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"cambioDeEtiqueta\">\r\n        <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of etiquetaPorRefrigeracion; let i = index\"  (click)=\"seleccionarItemFD(i)\" style=\"display: flex;flex-direction:row;width: 100%; height: 80px;\">\r\n          <div class=\"dfSelect\"></div>\r\n          <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n            <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}} ·  </label>\r\n            <label>{{item.fd}}<p style=\"font-family: Roboto-Regular;text-align: center;\">{{item.piezas}} Piezas</p></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!cambioDeEtiqueta\">\r\n        <div [ngClass]=\"listaFD[i]\" *ngFor=\"let item of listaAux; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%; height: 80px;position: relative\">\r\n          <textarea (keydown.enter)=\"recuperarTextAux()\" type=\"text\" name=\"firstname\" class=\"texArea\" [(ngModel)]=\"textoPedimento\" style=\"position: absolute;opacity: 0\"></textarea>\r\n          <!--\r\n                      <textarea  type=\"text\" name=\"firstname\" (keydown.enter)=\"enter(i)\" class=\"texArea\" [(ngModel)]=\"textoPedimento\">Hola 2</textarea>\r\n          -->\r\n          <div class=\"dfSelect\"></div>\r\n          <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\r\n            <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}} ·  </label>\r\n            <label >{{item.folioEmpaque}} <p style=\"font-family: Roboto-Regular;text-align: center;font-size: 17px;\">{{item.piezas}} Piezas · FEE: {{item.fee}}</p></label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <pq-alerta *ngIf=\"activarPopUp\" [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlerta($event)\" [activarBoton]=\"false\"></pq-alerta>\r\n  </div>\r\n  <div *ngIf=\"popError\">\r\n    <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\" ></pq-alerta>\r\n  </div>\r\n  <div *ngIf=\"activarPopExitoso\">\r\n    <pn-pop-up-exito [label]=\"'Escaneo Exitoso'\" [imagen]=\"true\" (desactivarPop)=\"cerrarPop($event)\"></pn-pop-up-exito>\r\n  </div>\r\n  <div *ngIf=\"activarPopTimbre\">\r\n    <pn-pop-up-timbrado (cerrarPopTimbrado)=\"reinterntatTimbrado($event)\"></pn-pop-up-timbrado>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.scss":
/***/ (function(module, exports) {

module.exports = ".productosPorEmbalar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%;font-family:\"Roboto\",sans-serif}.encabezadoP{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;border-bottom:2px solid #424242;max-height:70px;font-size:21px;font-weight:bold;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;padding:8px 15px 15px 15px}.encabezadoP>p{color:#008895}.AmbientePorColectar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;max-height:213px}.tipo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.imagenTipo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10%;-webkit-box-sizing:border-box;box-sizing:border-box}.datosTipo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;font-size:25px;color:#424242;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5}.grafica{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-height:110px}.refriPorColectar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;max-height:213px}.congelarPorColectar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;align-items:stretch;max-height:213px}.escanearCodigo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.EscaneaCodigo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;border-right:1px solid #eceef0;padding:17px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:340px}divCambioColor{color:#008895}.vistaOPeracionEmbalar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.txtEncabezado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;font-size:21px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:flex;-ms-flex-direction:column;flex-direction:column;padding:8px 15px 15px 15px}.txtEncabezado>p{color:#008895}.imgEncabezado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-width:45px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.encabezado{-ms-flex-order:0;order:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:70px;-webkit-box-ordinal-group:1;order:0;-webkit-box-flex:0;flex:0 1 auto;align-self:auto;height:100%;width:100%;border-bottom:2px solid #424242;max-height:70px;min-height:70px;font-size:21px;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.2;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.encabezado>p{color:#008895}.contenido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;overflow:scroll}.listaSeleccionada{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:6px solid #008895;background-color:#eceef0}.listaSeleccionada>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px;color:#008895}.listaSeleccionada>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;color:#008895}.listaSeleccionada>.datosLst>p{font-weight:normal;color:#424242}.lista{border-bottom:solid 1px #eceef0;border-bottom:solid 1px #eceef0;width:100%;min-height:80px;font-size:20px;padding:15px 19px 14px 13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#c2c3c8;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.lista>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px}.lista>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.lista>.datosLst>p{font-weight:normal}.lista>.divActual{-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive .dfSelect{width:5px !important}.lista>.divActive .datosLst label{color:#008895;padding-left:-2px}.lista>.divActive .datosLst p{font-family:\"Roboto-Regular\";font-size:20px;color:#000;line-height:26px}.lista>.divActive .datosLst .index{color:#1a1a1a}.productosAEmbalar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-width:283px}.texArea{width:98%;height:100%;z-index:1;opacity:0;position:absolute}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosPorEmbalarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductosPorEmbalarComponent = /** @class */ (function () {
    function ProductosPorEmbalarComponent(embalarServices, coreComponent, ComunServices) {
        this.embalarServices = embalarServices;
        this.coreComponent = coreComponent;
        this.ComunServices = ComunServices;
        this.activarPopImprimir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); //// Se emitira cuando se haya generado la factura correcta.
        this.emitEventColectar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.videoIns = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activarBtnMas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitEventValidarBotonGenerar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitEventPiezas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitEventScanear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitActivarPopExi = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.piezasFaltantes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mensajeGraficas = "QR’s";
        this.pzasAlMomentoAmbiente = 0;
        this.pzasAlMomentoRefri = 0;
        this.pzasAlMomentoConge = 0;
        this.activarConge = 1;
        this.activarRefri = 1;
        this.activarAmb = 1;
        this.focus = true;
        this.txtColor1 = '#338A9C';
        this.txtColor2 = '#000000';
        this.txtColor3 = '#9B9B9B';
        this.listaIdPaquete = []; /// Almacenara los id que se enviaran al servicio....
        this.copiaListaPedimentos = []; /*******Se utiliza para tener la lista de los que se van a enviar*******/
        ///////////////////////////////////////// VARIABLES PARA LA LISTA /////////////////////
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.arrayAuxConge = [];
        this.arrayAuxRefri = [];
        this.arrayAuxAmbiente = [];
        this.etiquetaPorRefrigeracion = [{ "fd": "FD-030916-4272-4", "piezas": 14 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7235-9", "piezas": 88 }];
        this.etiquetaPorQr = [{ "qr": "QR-030916-4272-4", "piezas": 14 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7896-7", "piezas": 15 },
            { "qr": "QR-256398-7892-5", "piezas": 24 },
            { "qr": "QR-256398-7897-1", "piezas": 18 },
            { "qr": "QR-256398-7235-9", "piezas": 88 }];
        this.etiquetaPorCongelacion = [{ "fd": "FD-030916-4272-4", "piezas": 14 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7896-7", "piezas": 15 },
            { "fd": "FD-256398-7892-5", "piezas": 24 },
            { "fd": "FD-256398-7897-1", "piezas": 18 },
            { "fd": "FD-256398-7235-9", "piezas": 88 }];
        this.listaFD = [];
        this.codigoAmbiente = this.etiquetaPorRefrigeracion[0];
        this.val = 0;
        this.cambioDeEtiqueta = false;
        this.cambioColorLetra = false;
        this.arraryCongelacion = [];
        this.arrarRefrigeracion = [];
        this.arrayAmbiente = [];
        this.listaAux = [];
        this.listaTotal = [];
        this.folio = '12345';
        this.indexAux = 0;
        this.arrayFoliosAux = [];
        this.selecionarPrimera = true;
        this.valorIndice = 0;
        //////////////// VARIABLES PERTENECIENTES AL TEXTAREA //////////////
        this.textoPedimento = undefined;
        this.escaneoNormal = true;
    }
    ProductosPorEmbalarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.mostrarVistaLista = true;
        /*this.MostrarListaInicial();*/
        this.validarBoton();
        ///////////// LLAMADA A LOS METODOS DE LA LISTA  /////////////
        /*this.seleccionarPrimero();*/
        this.seleccionarTitulo();
        /////////////////////////////// variables pertenecientes al textArea ////////////////
        this.focus = true;
        this.subsVideo = this.ComunServices.videoEmbalar.subscribe(function (data) {
            _this.nombreVideo = data;
        });
    };
    ProductosPorEmbalarComponent.prototype.ngOnChanges = function () {
        this.usuarioId = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        // console.log('usuario', this.usuarioId);
        //this.usuarioId = 54;
        /*this.recibirVistaEscanear();*/
        if (this.datosPorEstado !== undefined) {
            this.recibirDatosPorEstado();
        }
        this.validarPorEmbalar();
        if (this.datosPorEstado && this.selecionarPrimera) {
            this.seleccionarListaMostrar();
            this.selecionarPrimera = false;
        }
        this.obtenerFolioPaquete();
        // this.valorBotonAgregar();
        /* if (this.enviarInfo) {
           this.recuperarDatosCliente();
         }*/
        if (this.validarPakingList && this.nombreV !== undefined) {
            this.recuperarDatosCliente();
        }
        this.llamarDesactivarBtn(this.desactivarBtn);
        if (this.activarFocus || !this.activarFocus) {
            this.hoja.nativeElement.focus(); /**********SE AGREGO PARA ACTIVAR EL FOCUS ***********/
        }
    };
    ProductosPorEmbalarComponent.prototype.llamarDesactivarBtn = function (desactivar) {
        this.valorBotonAgregar(desactivar);
    };
    /////////////// Este metodo se va a encargar de saber cuando va a entrar a la lista de lo que se debe escanear. //////////////
    /*recibirVistaEscanear() {
      if (this.mostrarVistaLista) {
        this.hoja.nativeElement.focus();
      }
    }*/
    /***************************************ESTE METODO RECUPERA LOS VALORES DEL CLIENTE QUE SE ENVIARAN CUANDO DE GENERAR******************************************/
    ProductosPorEmbalarComponent.prototype.recuperarDatosCliente = function () {
        var totBolsas;
        var objetoBolsa;
        for (var i = 0; i < this.listaTotal.length; i++) {
            if (this.listaTotal[i].tipo === 'Bolsa de transito') {
                for (var j = 0; j < this.arrayFoliosAux.length; j++) {
                    if (this.listaTotal[i].folio === this.arrayFoliosAux[i]) {
                        break;
                    }
                }
                if (j === this.arrayFoliosAux.length) {
                    this.arrayFoliosAux[this.arrayFoliosAux.length] = this.listaTotal[i].tipo;
                }
            }
        }
        if (this.arrayFoliosAux.length > 0) {
            totBolsas = this.arrayFoliosAux.length;
        }
        else {
            totBolsas = 0;
        }
        console.log('Soy total de bolsas', totBolsas);
        objetoBolsa = {
            cantidad: totBolsas,
            tipoBolsa: 'BolsaTransito'
        };
        this.guardarConsumible(objetoBolsa);
    };
    ProductosPorEmbalarComponent.prototype.guardarConsumible = function (objeto) {
        var _this = this;
        this.embalarServices.guardarConsumible(objeto).subscribe(function (data) {
            if (data.current === true) {
                _this.objPakcingList = { zona: _this.datosClienteP[0].zonaMensajeria, ruta: _this.datosClienteP[0].ruta, folio: _this.listaAux[0].folioTemporal, partidaPackingList: _this.listaTotal, video: _this.nombreV };
                console.log('Soy lista que va a generar <<<<------>>', _this.objPakcingList);
                _this.generarPackingList(_this.objPakcingList);
                /*this.popAvanzarExitosamente = true;*/
                /*this.emitActivarPopExi.emit(true);*/
            }
            else {
                _this.mensaje = 'Bolsas insuficientes';
                _this.popError = true;
            }
        });
    };
    /////// ESTE METODO RECUPERA EL TOTAL DE LAS BOLSAS
    ProductosPorEmbalarComponent.prototype.totalBolsas = function () {
        return this.arrayFoliosAux.length;
    };
    ///// EN ESTE METODO SE MANDARA AL SEVICIO LOS DATOS DEL PACKING LIST /////////////////
    ProductosPorEmbalarComponent.prototype.generarPackingList = function (lista) {
        var _this = this;
        this.coreComponent.openModal(0);
        this.embalarServices.generarPackingList(lista).subscribe(function (data) {
            // let datos = data.current;
            _this.coreComponent.closeModal(0);
            if (data.current < 0) {
                _this.activarPopTimbre = true;
            }
            else {
                _this.emitActivarPopExi.emit(true);
                _this.activarPopImprimir.emit(true);
            }
        });
    };
    ////////////////////////////// ESTE METODO PERMITE REINTERTAR LA LLAMDA AL SERVICIO DEL PAKING LIST POR MOTIVO DEL TIMBRADO/////////////////////////////
    ProductosPorEmbalarComponent.prototype.reinterntatTimbrado = function (tipo) {
        if (tipo === 0) {
            this.activarPopTimbre = false;
        }
        else if (tipo === 1) {
            this.activarPopTimbre = false;
            this.recuperarDatosCliente();
        }
    };
    //////////////////// EN ESTE METODO SE OBTENDRA EL FOLIO QUE DEBE IR EN LA LISTA DE PAKING LIST ///////////////
    ProductosPorEmbalarComponent.prototype.obtenerFolioPaquete = function () {
        this.valoresPacking = this.folioPakingList;
    };
    /////////////////// EN ESTE METODO SE OBTEDRA EL INPUT QUE GUARDA LA INFORMACION QUE MANDA VISTA-EMBALAR-PRODUCTOS
    ProductosPorEmbalarComponent.prototype.recibirDatosPorEstado = function () {
        // console.log('Soy productos por embalar', this.datosPorEstado);
        this.coreComponent.openModal(1);
        this.pzasTotalesConge = this.datosPorEstado.arrayConge.length;
        this.pzasTotalesRefri = this.datosPorEstado.arrayRefri.length;
        this.pzasTotalesambiente = this.datosPorEstado.arrayAmbiente.length;
        this.arraryCongelacion = this.datosPorEstado.arrayConge;
        this.arrarRefrigeracion = this.datosPorEstado.arrayRefri;
        this.arrayAmbiente = this.datosPorEstado.arrayAmbiente;
        this.coreComponent.closeModal(1);
        /// console.log('lista congelacion --->>>', this.datosPorEstado.arrayConge);
    };
    ProductosPorEmbalarComponent.prototype.MostrarListaInicial = function () {
        if (this.pzasAlMomentoConge < this.pzasTotalesConge && this.pzasAlMomentoConge > 0) {
            this.tipoProductoEmbalar = "CONGELACIÓN";
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
        }
        else if (this.pzasAlMomentoRefri < this.pzasTotalesRefri && this.pzasAlMomentoRefri > 0) {
            this.tipoProductoEmbalar = "REFRIGERACIÓN";
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
        }
        else if (this.pzasAlMomentoAmbiente < this.pzasTotalesambiente && this.pzasAlMomentoAmbiente > 0) {
            this.tipoProductoEmbalar = "AMBIENTE";
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
        }
    };
    ProductosPorEmbalarComponent.prototype.MostrarlistaporRefrigeracion = function () {
        /// console.log("Entro a refrigeraciòn");
        this.tipoProductoEmbalar = "REFRIGERACIÓN";
        this.emitEventColectar.emit(this.tipoProductoEmbalar);
    };
    ProductosPorEmbalarComponent.prototype.MostrarlistaPorCongelacion = function () {
        // console.log("Entro a congelaciòn");
        this.tipoProductoEmbalar = "CONGELACIÓN";
        this.emitEventColectar.emit(this.tipoProductoEmbalar);
    };
    ProductosPorEmbalarComponent.prototype.MostrarlistaPorAmbiente = function () {
        /// console.log("Entro a congelaciòn");
        this.tipoProductoEmbalar = "AMBIENTE";
        this.emitEventColectar.emit(this.tipoProductoEmbalar);
    };
    ProductosPorEmbalarComponent.prototype.validarPorEmbalar = function () {
        var _this = this;
        if (this.valorIndice === 0 && this.pzasTotalesambiente !== undefined) {
            this.coreComponent.openModal(1);
            this.valorIndice++;
        }
        this.mostrarAmbientePorColectar = this.visualizarElemento(this.pzasTotalesambiente);
        this.mostrarRefriPorColectar = this.visualizarElemento(this.pzasTotalesRefri);
        this.mostrarCongelarPorColectar = this.visualizarElemento(this.pzasTotalesConge);
        var faltanteRefri = this.pzasTotalesRefri - this.pzasAlMomentoRefri;
        this.tipoAmbiente = this.validarMensajeAmbiente(this.pzasTotalesambiente, this.pzasAlMomentoAmbiente, faltanteRefri);
        // console.log(this.tipoAmbiente);
        if (this.tipoAmbiente == "normal") {
            this.ambienteNormal = true;
            this.imgAmbiente1 = true;
            this.validarClicAmbiente = true;
            this.ambienteOpaco = false;
            this.imgAmbiente2 = false;
        }
        else {
            this.ambienteOpaco = true;
            this.imgAmbiente2 = true;
            this.ambienteNormal = false;
            this.imgAmbiente1 = false;
            this.validarClicAmbiente = false;
        }
        var faltanteConge = this.pzasTotalesConge - this.pzasAlMomentoConge;
        this.tipoRefri = this.validarMensajeRefrigeracion(this.pzasTotalesRefri, this.pzasAlMomentoRefri, faltanteConge);
        // console.log(this.tipoRefri);
        if (this.tipoRefri == "normal") {
            this.imgRefri1 = true;
            this.refriNormal = true;
            this.imgRefri2 = false;
            this.refriOpaco = false;
            this.validarClicRefrigeracion = true;
        }
        else {
            this.imgRefri2 = true;
            this.refriOpaco = true;
            this.imgRefri1 = false;
            this.refriNormal = false;
            this.validarClicRefrigeracion = false;
        }
        this.tipoConge = this.validarMensajeCongelacion(this.pzasTotalesConge, this.pzasAlMomentoConge);
        // console.log(this.tipoConge);
        if (this.tipoConge == "normal") {
            this.imgConge1 = true;
            this.congeNormal = true;
            this.imgConge2 = false;
            this.congeOpaco = false;
            this.validarClicCongelacion = true;
        }
        else {
            this.imgConge2 = true;
            this.congeOpaco = true;
            this.imgConge1 = false;
            this.congeNormal = false;
            this.validarClicCongelacion = false;
        }
        if (this.valorIndice === 1 && this.pzasTotalesConge !== undefined) {
            setTimeout(function () {
                _this.coreComponent.closeModal(1);
                _this.valorIndice++;
            }, 1500);
        }
    };
    ProductosPorEmbalarComponent.prototype.visualizarElemento = function (dato) {
        if (dato < 1) {
            return false;
        }
        else
            return true;
    };
    ProductosPorEmbalarComponent.prototype.validarRestante = function (total, pzasAlmomento) {
        if (pzasAlmomento > total) {
            /// console.log("las piezas son mas que el total.");
            return false;
        }
        else if (pzasAlmomento == total) {
            /// console.log("Las piezas son igual al total");
            return true;
        }
        else if (pzasAlmomento < total) {
            // console.log("aun faltan piezas por inspeccionas o lo que sea... XD");
            return false;
        }
        else {
            /// console.log("caso no preevisto verifique con el admin");
        }
    };
    ProductosPorEmbalarComponent.prototype.validarMensajeAmbiente = function (pzaTotales, pzaAlMomento, faltantesRefri) {
        if (pzaAlMomento >= 0 && pzaAlMomento < pzaTotales && faltantesRefri === 0) {
            this.estadoAmbiente = 'Colectando';
            this.tipoProductoEmbalar = 'AMBIENTE';
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
            this.vistaListaConge = false;
            this.vistaListaRefri = false;
            this.vistaListaAmbiente = true;
            return "normal";
        }
        else if (pzaAlMomento === pzaTotales) {
            this.estadoAmbiente = "Colectado";
            return "opaco";
        }
        else if (pzaAlMomento === 0) {
            this.estadoAmbiente = 'Por colectar';
            return "opaco";
        }
    };
    ProductosPorEmbalarComponent.prototype.validarMensajeRefrigeracion = function (pzaTotales, pzaAlMomento, faltantesConge) {
        if (pzaAlMomento >= 0 && pzaAlMomento < pzaTotales && faltantesConge === 0) {
            this.estadoRefri = "Colectando";
            this.tipoProductoEmbalar = 'REFRIGERACIÓN';
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
            this.vistaListaConge = false;
            this.vistaListaRefri = true;
            this.vistaListaAmbiente = false;
            return "normal";
        }
        else if (pzaAlMomento === pzaTotales) {
            this.estadoRefri = 'Colectado';
            return "opaco";
        }
        else if (pzaAlMomento === 0) {
            this.estadoRefri = 'Por colectar';
            return "opaco";
        }
    };
    ProductosPorEmbalarComponent.prototype.validarMensajeCongelacion = function (pzaTotales, pzaAlMomento) {
        if (pzaAlMomento >= 0 && pzaAlMomento < pzaTotales && pzaTotales > 0) {
            this.estadoConge = "Colectando";
            this.tipoProductoEmbalar = 'CONGELACIÓN';
            this.emitEventColectar.emit(this.tipoProductoEmbalar);
            this.vistaListaConge = true;
            this.vistaListaRefri = false;
            this.vistaListaAmbiente = false;
            return "normal";
        }
        else if (pzaAlMomento === pzaTotales) {
            this.estadoConge = "Colectado";
            return "opaco";
        }
        else if (pzaAlMomento === 0) {
            this.estadoConge = "Por colectar";
            return "normal";
        }
    };
    ProductosPorEmbalarComponent.prototype.validarBoton = function () {
        if (this.pzasAlMomentoAmbiente === this.pzasTotalesambiente && this.pzasAlMomentoRefri === this.pzasTotalesRefri && this.pzasAlMomentoConge === this.pzasTotalesConge) {
            this.valorBoton = true;
        }
        else {
            this.valorBoton = false;
        }
        this.emitEventValidarBotonGenerar.emit(this.valorBoton);
    };
    /////////////////////////////// METODOS CORRESPONDIENTES A LA LISTA //////////////////
    ProductosPorEmbalarComponent.prototype.seleccionarTitulo = function () {
        if (this.cambioDeEtiqueta === true) {
            this.valorTituloLista = "FD’S ";
        }
        else if (this.cambioDeEtiqueta === false) {
            this.valorTituloLista = "QR’S ";
        }
    };
    ProductosPorEmbalarComponent.prototype.seleccionarPrimero = function () {
        var piezas;
        this.listaFD = [];
        this.listaFD = new Array(this.listaAux.length).fill('');
        this.listaFD[0] = 'divActive';
        this.codigoAmbiente = this.listaAux[this.val].folioEmpaque;
        piezas = this.listaAux[this.val].piezas;
        this.lista = { folio: this.codigoAmbiente, piezas: piezas };
        // console.log(this.codigoAmbiente);
        this.emitEvent.emit(this.lista);
    };
    ProductosPorEmbalarComponent.prototype.seleccionarListaMostrar = function () {
        this.activarTextArea();
        if (this.vistaListaConge === true) {
            this.indexAux = 0;
            this.listaAux = this.arraryCongelacion;
            this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/
        }
        else if (this.vistaListaRefri === true) {
            this.listaAux = this.arrarRefrigeracion;
            this.indexAux = 0;
            this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/
        }
        else if (this.vistaListaAmbiente === true) {
            this.listaAux = this.arrayAmbiente;
            this.indexAux = 0;
            this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/
        }
        /*this.seleccionarPrimero();*/
    };
    ProductosPorEmbalarComponent.prototype.activarTextArea = function () {
        if (this.mostrarVistaLista) {
            this.hoja.nativeElement.focus();
            // this.seleccionarNombreVideo(0);
        }
    };
    ProductosPorEmbalarComponent.prototype.seleccionarNombreVideo = function (i) {
        if (this.vistaListaAmbiente) {
            if (this.arrayAmbiente[i].videoPartida != null) {
                this.videoIns.emit(this.arrayAmbiente[i].videoPartida);
            }
            else {
                this.videoIns.emit('error');
            }
        }
        else if (this.vistaListaRefri) {
            if (this.arrarRefrigeracion[i].videoPartida != null) {
                this.videoIns.emit(this.arrarRefrigeracion[i].videoPartida);
            }
            else {
                this.videoIns.emit('error');
            }
        }
        else if (this.vistaListaConge) {
            if (this.arraryCongelacion[i].videoPartida != null) {
                this.videoIns.emit(this.arraryCongelacion[i].videoPartida);
            }
            else {
                this.videoIns.emit('error');
            }
        }
    };
    ProductosPorEmbalarComponent.prototype.seleccionarItemFD = function (i) {
        // this.seleccionarNombreVideo(i);
        // this.listaFD = [];
        // this.listaFD = new Array(this.listaAux.length).fill('');
        this.listaFD[i] = 'divActive';
        // this.listaFD[i]= 'divCambioColor';
        this.codigoAmbiente = this.listaAux[i].folioEmpaque;
        // console.log(this.codigoAmbiente);
        var piezas = this.listaAux[i].piezas;
        this.lista = { folio: this.codigoAmbiente, piezas: piezas };
        this.emitEvent.emit(this.lista);
        // return this.codigoAmbiente;
    };
    //////////////// Recuperar textArea ///////////
    ProductosPorEmbalarComponent.prototype.recuperarTextAux = function () {
        /* if (this.indexAux !== 0) {
           this.enter(this.indexAux);
         } else {
           this.enter(-1);
         }*/
        this.validarPedimentoEnter();
    };
    /****************************************************/
    ProductosPorEmbalarComponent.prototype.validarPedimentoEnter = function () {
        var aux = this.textoPedimento.trim();
        var indexAux;
        this.textoPedimento = aux;
        var cont = 0;
        var duplicado = this.buscarCodigoDuplicado(this.textoPedimento);
        if (duplicado) {
            for (var i = 0; i < this.listaAux.length; i++) {
                if (this.listaAux[i].folioEmpaque === this.textoPedimento) {
                    this.copiaListaPedimentos[this.copiaListaPedimentos.length] = this.textoPedimento;
                    indexAux = i;
                }
                else {
                    cont++;
                }
            }
            if (cont === this.listaAux.length) {
                this.mensaje = 'Folio incorrecto';
                this.activarPopUp = true;
            }
            else {
                this.enter(indexAux); /* Se manda allamar por que aquí se hacen todos los procesos */
            }
        }
        else {
            this.mensaje = 'Codigo duplicado';
            this.activarPopUp = true;
        }
        this.textoPedimento = undefined;
    };
    ProductosPorEmbalarComponent.prototype.buscarCodigoDuplicado = function (elemento) {
        var i;
        if (this.copiaListaPedimentos.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.copiaListaPedimentos.length; i++) {
                if (this.copiaListaPedimentos[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    /***************************************/
    ProductosPorEmbalarComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.textoPedimento = obj.nombre;
        console.log('<------->', this.textoPedimento);
    };
    ProductosPorEmbalarComponent.prototype.enter = function (index) {
        this.seleccionarItemFD(index);
        var i = index;
        var BolsaTransito;
        var aux;
        var arrayAux;
        var listaAuxEmb;
        var pzas;
        /*console.log('Soy congelacion --->>>>', this.arraryCongelacion);
        this.indexAux = index;
        this.activarPopExitoso = false;
        this.activarPopUp = false;
        let i: number;
        aux = this.textoPedimento.trim();
        this.textoPedimento = aux;
                            /!*console.log('Soy aux  ---------', aux);*!/
                            // console.log('llega enter' + this.textoPedimento, '--->');
        let validarDuplicado: boolean;
        let tipoEstado: string;
        if (this.textoPedimento.length > 1) {
          this.escaneoNormal = false;
          this.escaneoCorrecto = true;
          this.cambioVistaEscaneo = true;
        } else {
          // console.log("Error al escanear codigo.");
          this.escaneoNormal = false;
          this.escaneoIncorrecto = true;
          setTimeout(() => {
            this.escaneoNormal = true;
            this.escaneoIncorrecto = false;
          }, 1000);
        }
        if (index === -1) {
          i = 0;
        } else {
          i = index;
        }*/
        // if (this.listaAux[i].folioEmpaque === this.textoPedimento) {
        // alert('codigo correcto');
        /*this.activarPopExitoso = true;*/
        //////////// condiciones si es codigo corresponde al que esta en el item
        if (this.vistaListaConge === true) {
            this.faltantes = true;
            /* if (this.pzasAlMomentoConge === 0) {
               BolsaTransito = 'Congelacion';
               this.emitEventScanear.emit(BolsaTransito);
             }*/
            // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
            // if (validarDuplicado === false) {
            this.pzasAlMomentoConge = this.pzasAlMomentoConge + 1;
            pzas = this.listaAux[i].piezas;
            this.listaPakingList = { folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo };
            listaAuxEmb = { remisionar: this.listaAux[i].remisionar, idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar' };
            arrayAux = { embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio };
            this.listaTotal.push(arrayAux);
            this.valorBotonAgregar(BolsaTransito);
            this.emitEventPiezas.emit(this.listaPakingList);
            if (this.pzasAlMomentoConge === this.pzasTotalesConge) {
                this.validarPorEmbalar();
                this.validarBoton();
                if (this.pzasTotalesRefri > 0) {
                    this.seleccionarListaMostrar();
                    BolsaTransito = 'Refrigeracion';
                    this.emitEventScanear.emit(BolsaTransito);
                }
                else if (this.pzasTotalesambiente > 0) {
                    this.seleccionarListaMostrar();
                    BolsaTransito = 'Ambiente';
                    this.emitEventScanear.emit(BolsaTransito);
                }
                else {
                    this.faltantes = false;
                    // this.activarPopExitoso = true;
                }
            }
            else {
                // this.activarPopExitoso = true;
            }
            this.piezasFaltantes.emit(this.faltantes);
            /* } else {
               this.mensaje = 'Codigo duplicado';
               this.activarPopUp = true;
             }*/
        }
        else if (this.vistaListaRefri) {
            this.faltantes = true;
            BolsaTransito = 'Refrigeracion';
            // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
            //if (validarDuplicado === false) {
            this.pzasAlMomentoRefri = this.pzasAlMomentoRefri + 1;
            pzas = this.listaAux[i].piezas;
            this.listaPakingList = { folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo };
            listaAuxEmb = { remisionar: this.listaAux[i].remisionar, idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar' };
            arrayAux = { embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio };
            this.listaTotal.push(arrayAux);
            this.emitEventPiezas.emit(this.listaPakingList);
            if (this.pzasAlMomentoRefri === this.pzasTotalesRefri) {
                this.validarPorEmbalar();
                this.validarBoton();
                if (this.pzasTotalesambiente > 0) {
                    this.seleccionarListaMostrar();
                    BolsaTransito = 'Ambiente';
                    this.emitEventScanear.emit(BolsaTransito);
                }
                else {
                    this.faltantes = false;
                    // this.activarPopExitoso = true;
                }
            }
            else {
                // this.activarPopExitoso = true;
            }
            this.piezasFaltantes.emit(this.faltantes);
            this.valorBotonAgregar(BolsaTransito);
            /*} else {
              this.mensaje = 'Codigo duplicado';
              this.activarPopUp = true;
            }*/
        }
        else if (this.vistaListaAmbiente) {
            this.faltantes = true;
            BolsaTransito = 'Ambiente';
            // this.emitEventScanear.emit(BolsaTransito);
            // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
            // if (validarDuplicado === false) {
            // this.activarPopExitoso = true;
            this.pzasAlMomentoAmbiente = this.pzasAlMomentoAmbiente + 1;
            pzas = this.listaAux[i].piezas;
            this.listaPakingList = { folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo };
            listaAuxEmb = { remisionar: this.listaAux[i].remisionar, idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar' };
            arrayAux = { embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio };
            this.listaTotal.push(arrayAux);
            this.valorBotonAgregar(BolsaTransito);
            this.emitEventPiezas.emit(this.listaPakingList);
            if (this.pzasAlMomentoAmbiente === this.pzasTotalesambiente) {
                this.faltantes = false;
                this.validarPorEmbalar();
                // this.seleccionarListaMostrar();
                this.validarBoton();
            }
            this.piezasFaltantes.emit(this.faltantes);
        }
        ///////////// terminan
        /*} else {
          this.activarPopUp = true;
          this.mensaje = 'Codigo incorrecto';
        }*/
        this.textoPedimento = undefined;
        // console.log('Soy la lista que tienen todo el aux', this.listaAux[i]);
    };
    /***********************ESTE METODO VERIFICA SI YA SE ESCANEO ESE CODIGO ANTERIORMENTE****************/
    ProductosPorEmbalarComponent.prototype.validarTextoPedimento = function (texto, listaEmb) {
        console.log('Soiy lista AUX----->>>', listaEmb);
        if (this.vistaListaConge === true) {
            if (this.arrayAuxConge.length > 0) {
                for (var i = 0; i < this.arrayAuxConge.length; i++) {
                    if (this.arrayAuxConge[i] === texto) {
                        // console.log('Soy elemento-->', this.arrayAuxConge[i]);
                        return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
                    }
                }
                this.arrayAuxConge[this.arrayAuxConge.length] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                    this.listaEmbalar = {};
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
            else {
                this.arrayAuxConge[0] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
        }
        else if (this.vistaListaRefri === true) {
            if (this.arrayAuxRefri.length > 0) {
                for (var i = 0; i < this.arrayAuxRefri.length; i++) {
                    if (this.arrayAuxRefri[i] === texto) {
                        // console.log('Soy elemento-->', this.arrayAuxRefri[i]);
                        return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
                    }
                }
                this.arrayAuxAmbiente[this.arrayAuxConge.length] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
            else {
                this.arrayAuxRefri[0] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
        }
        else if (this.vistaListaAmbiente === true) {
            if (this.arrayAuxAmbiente.length > 0) {
                for (var i = 0; i < this.arrayAuxAmbiente.length; i++) {
                    if (this.arrayAuxAmbiente[i] === texto) {
                        // console.log('Soy elemento-->', this.arrayAuxAmbiente[i]);
                        return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
                    }
                }
                this.arrayAuxConge[this.arrayAuxAmbiente.length] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
            else {
                this.arrayAuxAmbiente[0] = texto;
                if (this.listaIdPaquete.length > 0) {
                    this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                else {
                    this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
                }
                return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
            }
        }
    };
    /****************Este metodo se encarga de revisar si se puede agregar otra hielera o bolsa*******************/
    ProductosPorEmbalarComponent.prototype.valorBotonAgregar = function (tipo) {
        var piezasEmba = 0;
        var piezasPorEmb = 0;
        if (tipo === 'Ambiente') {
            if ((this.pzasAlMomentoRefri > 0) && (this.pzasAlMomentoRefri === this.pzasTotalesRefri) && (this.activarRefri === 1)) {
                piezasEmba = this.pzasAlMomentoRefri;
                piezasPorEmb = this.pzasTotalesRefri;
                this.activarRefri = 2;
            }
            else if ((this.pzasAlMomentoConge > 0) && (this.pzasAlMomentoConge === this.pzasTotalesConge) && (this.activarConge === 1)) {
                piezasEmba = this.pzasAlMomentoConge;
                piezasPorEmb = this.pzasTotalesConge;
                this.activarConge = 2;
            }
            else {
                piezasEmba = this.pzasAlMomentoAmbiente;
                piezasPorEmb = this.pzasTotalesambiente;
            }
        }
        else if (tipo === 'Refrigeracion' || tipo === 'Refrigeración') {
            if ((this.pzasAlMomentoConge > 0) && (this.pzasAlMomentoConge === this.pzasTotalesConge) && (this.activarConge === 1)) {
                piezasEmba = this.pzasAlMomentoConge;
                piezasPorEmb = this.pzasTotalesConge;
                this.activarConge = 2;
            }
            else {
                piezasEmba = this.pzasAlMomentoRefri;
                piezasPorEmb = this.pzasTotalesRefri;
            }
        }
        else if ((tipo === 'Congelacion') || (tipo === 'Congelación')) {
            piezasEmba = this.pzasAlMomentoConge;
            piezasPorEmb = this.pzasTotalesConge;
        }
        var i;
        for (i = 0; i < this.listaTotal.length; i++) {
            if ((this.listaTotal[i].folio === this.valoresPacking.folio) && (piezasEmba < piezasPorEmb) && (tipo !== 'desactivar')) {
                this.activarBtnMas.emit(true);
                break;
            }
        }
        if (i === this.listaTotal.length) {
            this.activarBtnMas.emit(false);
        }
    };
    ProductosPorEmbalarComponent.prototype.cerrarAlerta = function () {
        this.activarPopUp = false;
        this.hoja.nativeElement.focus();
        this.activarTextArea();
    };
    ProductosPorEmbalarComponent.prototype.cerrarAlert = function () {
        this.popError = false;
    };
    ProductosPorEmbalarComponent.prototype.cerrarPop = function ($desactivar) {
        this.activarPopExitoso = $desactivar;
        this.activarTextArea();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "activarPopImprimir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitEventColectar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "videoIns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "activarBtnMas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitEventValidarBotonGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitEventPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitEventScanear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitActivarPopExi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "datosPorEstado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "folioPakingList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "datosClienteP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductosPorEmbalarComponent.prototype, "enviarInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "estadoVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "desactivarBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "validarPakingList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "activarFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "nombreV", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "piezasFaltantes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('elemento'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductosPorEmbalarComponent.prototype, "hoja", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductosPorEmbalarComponent.prototype, "emitEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "valorRecibidoEmbalaje", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductosPorEmbalarComponent.prototype, "mostrarVistaLista", void 0);
    ProductosPorEmbalarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-productos-por-embalar',
            template: __webpack_require__("./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], ProductosPorEmbalarComponent);
    return ProductosPorEmbalarComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.html":
/***/ (function(module, exports) {

module.exports = "<script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular-resource.js'></script>\r\n<script src='../../../../../../app/services/session/consume-rest.js'></script>\r\n<div class=\"content-area \">\r\n  <div class=\"contenedorFormulario\">\r\n   <!-- <div class=\"tabla-clientes\">\r\n      <label class=\"encabezadoLista\">PACKING LIST</label>\r\n      <div id=\"estilo_borde_verde_lista\" class=\"lista\">\r\n        <div [ngClass]=\"lstResultadoCotizaciones[i]\" *ngFor=\"let packing_list of encabezadosPasckinList; let i = index \"\r\n             class=\"listaItem\" (click)=\"itemSelect(i)\">\r\n          <div class=\"ltSelect\"></div>\r\n          <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\r\n            <label class=\"numPacking_list \"> #{{i+1}}· <span\r\n              style=\" padding-bottom: 15px;\"\r\n              class=\"nombrePacking_list \"> {{packing_list.folio}}  </span></label>\r\n            <label class=\"piezasPacking_llist \"> {{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\r\n            <div style=\"display: flex; flex-direction: row \">\r\n              <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\r\n              <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\r\n              <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      &lt;!&ndash; total &ndash;&gt;\r\n    </div>-->\r\n    <div class=\"segundaSeccion\">\r\n      <!--<div class=\"escanearCodigos\">\r\n        <div class=\"tituloColectar\">\r\n          <span class=\"tituloColectarElem\">\r\n          COLECTAR ELEMENTO </span>\r\n          <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\r\n        </div>\r\n        &lt;!&ndash; div de tipos de elementos &ndash;&gt;\r\n\r\n        &lt;!&ndash; prueba&ndash;&gt;\r\n      </div>-->\r\n      <!--padding-right: 20px;-->\r\n      <div class=\"formularioRutas\">\r\n        <label class=\"seleccionLista\"> EJECUTAR RUTA </label>\r\n        <div>\r\n          <label class=\" subtitulos \" style=\" border-bottom: 1px solid #008895;display: flex;\">Detalles</label>\r\n          <div style=\"flex-direction: row\">\r\n            <div class=\" subtituloPeque \"\r\n                 style=\" padding-top: 20px; display: flex;\">Destino\r\n            </div>\r\n            <div class=\"rowFormulario\">\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">País:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].pais}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Estado:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].estado}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Calle / Nº / Colonia:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].calle}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Delegación / Municipio:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].delegacion}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">C.P:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].CP}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Ruta:</div>\r\n                <div class=\"estiloLabelsContacto\">{{destino[0].ruta}}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"rowFormulario\">\r\n             <!-- <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Delegación / Municipio:</div>\r\n                <div class=\"estiloLabelsContacto\"></div>\r\n              </div>-->\r\n             <!-- <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">C.P:</div>\r\n                <div class=\"estiloLabelsContacto\"></div>\r\n              </div>-->\r\n              <!--<div class=\"datosForm\">-->\r\n                <!--<div class=\"estiloLabelData\">Ruta:</div>-->\r\n                <!--<div class=\"estiloLabelsContacto\"></div>-->\r\n              <!--</div>-->\r\n              <!--Agregar lo siguiente comentado a Mensajeria-->\r\n              <!--<div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Mensajeria:</div>\r\n                <div class=\"estiloLabelsContacto\"></div>\r\n              </div>-->\r\n            </div>\r\n            <label class=\" subtituloPeque \" style=\" padding-top: 20px; display: flex;\"> Contacto</label>\r\n            <div class=\"rowFormulario\">\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Nombre:</div>\r\n                <div class=\"estiloLabelsContacto\">{{this.datosContacto[0].contacto}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Puesto:</div>\r\n                <div class=\"estiloLabelsContacto\">{{this.datosContacto[0].puesto}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <div class=\"estiloLabelData\">Departamento:</div>\r\n                <div class=\"estiloLabelsContacto\">{{this.datosContacto[0].departamento}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <label class=\"estiloLabelData\">Tel:</label>\r\n                <div class=\"estiloLabelsContacto\">{{this.datosContacto[0].tel}}</div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <label class=\"estiloLabelData\">Email:</label>\r\n                <div class=\"estiloLabelsContacto\">{{this.datosContacto[0].mail}}</div>\r\n              </div>\r\n            </div>\r\n           <!-- <div class=\"rowFormulario\">\r\n              <div class=\"datosForm\">\r\n                <label class=\"estiloLabelData\">Tel:</label>\r\n                <div class=\"estiloLabelsContacto\"></div>\r\n              </div>\r\n              <div class=\"datosForm\">\r\n                <label class=\"estiloLabelData\">Email</label>\r\n                <div class=\"estiloLabelsContacto\"></div>\r\n              </div>\r\n            </div>-->\r\n            <!--<div\r\n              style=\" justify-content: space-between; display: flex; flex-direction: column; padding-bottom: 30px; \">\r\n              <label class=\"subtituloPeque0\" style=\" padding-top: 20px; display: flex;\">Comentario\r\n                de envío</label>\r\n              <div>\r\n                <div class=\"estiloLabelData\" *ngIf=\"etiquetaComentarios\">\r\n                  <label class=\"estiloTxtAreaContacto\"></label>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <div *ngIf=\"!etiquetaComentarios\">\r\n                  <div class=\"contenedorComentario\" *ngIf=\"!etiquetaComentarios\">\r\n                    <label>SIN COMENTARIOS</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n            <!--<div class=\"rowFormulario\">\r\n              <div\r\n                style=\" justify-content: space-between; display: flex; flex-direction: column; padding-bottom: 30px; \">\r\n                <label class=\"subtituloPeque0\" style=\" padding-top: 20px; display: flex;\">Comentario\r\n                  de envío</label>\r\n                <div>\r\n                  <div class=\"estiloLabelData\" *ngIf=\"etiquetaComentarios\">\r\n                    <label class=\"estiloTxtAreaContacto\"></label>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div *ngIf=\"!etiquetaComentarios\">\r\n                    <div class=\"contenedorComentario\" *ngIf=\"!etiquetaComentarios\">\r\n                      <label>SIN COMENTARIOS</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n            <div class=\"rowFormulario\"></div>\r\n            <label class=\" subtituloPeque \" style=\"display: flex;\">Datos del paquete</label>\r\n            <br>\r\n            <div\r\n              style=\" justify-content: space-between; display: flex; flex-direction: row; padding-top: 20px; padding-bottom: 20px;flex-wrap: wrap;\">\r\n              <div style=\"padding-bottom: 5px;\">\r\n                <label class=\"estiloLabelData\">Peso:</label>\r\n                <input class=\"inputPaquete\" name=\"peso\" id=\"peso\"\r\n                       (input)=\"recibeContacto($event.target.value,'peso')\" [value]=\"valorInicial\"\r\n                       [disabled]=\"activarInputs\" style=\"z-index: 3\" [(ngModel)]=\"peso\">\r\n                <label class=\"estiloLabelData\">kg</label>\r\n              </div>\r\n              <div style=\"padding-bottom: 5px;\">\r\n                <label class=\"estiloLabelData\">Longitud:</label>\r\n                <input class=\"inputPaquete\" name=\"longitud\" id=\"longitud\"\r\n                       (input)=\"recibeContacto($event.target.value,'longitud')\" value=\" \" [disabled]=\"activarInputs\"\r\n                       style=\"z-index: 3\" [(ngModel)]=\"longitud\">\r\n                <label class=\"estiloLabelData\">cm</label>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 5px;\">\r\n                <label class=\"estiloLabelData\">Altura:</label>\r\n                <input class=\"inputPaquete\" name=\"altura\" id=\"altura\"\r\n                       (input)=\"recibeContacto($event.target.value,'altura')\" value=\" \" [disabled]=\"activarInputs\"\r\n                       style=\"z-index: 3\" [(ngModel)]=\"altura\">\r\n                <label class=\"estiloLabelData\">cm</label>\r\n              </div>\r\n\r\n              <div style=\"padding-bottom: 5px;\">\r\n                <label class=\"estiloLabelData\">Ancho:</label>\r\n                <input class=\"inputPaquete\" name=\"ancho\" id=\"ancho\"\r\n                       (input)=\"recibeContacto($event.target.value, 'ancho')\" value=\" \" [readonly]=\"activarInputs\"\r\n                       style=\"z-index: 3\" [(ngModel)]=\"ancho\">\r\n                <label class=\"estiloLabelData\">cm</label>\r\n              </div>\r\n              <!-- <input class=\"inputPaquete\" name=\"ancho\" type=\"number\" (input)=\"recibeContacto($event.target.value,'ancho')\" value=\" \"> -->\r\n            </div>\r\n            <div class=\"rowFormulario\"></div>\r\n            <label class=\"subtituloPeque\" style=\"padding-top: 20px;\">Registro de envío</label>\r\n            <!--<div class=\"archivo\" *ngIf=\"tipoEnviar\">\r\n              <div class=\"datosForm\" style=\"align-items: center;\">\r\n                <label class=\"estiloLabelData\" style=\"min-width: 140px;\"> Mensajería</label>\r\n                <div [ngStyle]=\"{'display':'flex', 'flex-direction':'row'}\">\r\n                  <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedEnvio\" id=\"cmbEnvio\"  (valueDropList)=\"recibeValosCombo($event,'envio')\" [items]=\"tiposEnvios\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n            <div *ngIf=\"tipoEnviar\" id=\"archivo\" class=\"archivo\">\r\n              <div class=\"datosForm\" style=\"align-items: center;\">\r\n                <label class=\"estiloLabelData\" style=\"min-width: 100px;\" *ngIf=\"tipoEnviar\"> Mensajería <label *ngIf=\"activarSelect\"> :</label></label>\r\n                <div [ngStyle]=\"{'display':'flex', 'flex-direction':'row'}\"  style=\"min-width: 210px;\">\r\n                  <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedEnvio\" id=\"cmbEnvio\"  (valueDropList)=\"recibeValosCombo($event,'envio')\" [items]=\"tiposEnvios\" [heightLi]=\"'35px'\" *ngIf=\"!activarSelect\"></pn-combo-flecha-verde>\r\n                  <label *ngIf=\"activarSelect\">{{recibioMensajeria}}</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"datosForm\" style=\"align-items: center;\">\r\n                <label class=\"estiloLabelData\" style=\"min-width: 140px;\"> Guía de envío:</label>\r\n                <div *ngIf=validarPaquteria>\r\n                  <input id=\"ingresoNumTracking\" class=\"estiloInputMensajero\" name=\"mensajero \" value=\" \" type=\"text \"\r\n                         maxlength=\"13\" [ngModel]=\"ingresoTracking\" (ngModelChange)=\"incluirTrackingArreglo($event)\"\r\n                         style=\"z-index: 3; position: relative\">\r\n                </div>\r\n                <div *ngIf=!validarPaquteria>\r\n                  <label class=\"estiloLabelData\" style=\"border-bottom: red;\">{{numeroTracking}}</label>\r\n                </div>\r\n                <label id=\"localizacion\"></label>\r\n                <div *ngIf=\"!validarPaquteria\">\r\n                  <!--GRIS-->\r\n                  <div *ngIf=\"activarBotonEnvio\">\r\n                    <img style=\"width: 40px; height: 40px;z-index: 4;position: relative\"\r\n                         src='./assets/Images/Images/Recurso 265100.svg' #dato\r\n                         (click)=\"realizarEnvioTipoMensajero(mensajeria, estado)\" *ngIf=\"activarBotonEnvio\"/>\r\n                  </div>\r\n                  <div *ngIf=\"popUpLocalizar\">\r\n                    <!--<pn-pop-up-localizar-numero-rastreo></pn-pop-up-localizar-numero-rastreo>-->\r\n                  </div>\r\n                  <!--VERDE-->\r\n                  <div *ngIf=\"!activarBotonEnvio\">\r\n                    <img style=\"width: 40px; height: 40px;;z-index: 3\" src='./assets/Images/Images/Recurso 266100.svg'\r\n                         *ngIf=\"!activarBotonEnvio\"/>\r\n                  </div>\r\n                  <!--   <img style=\"width: 40px; height: 40px;\" src='./assets/Images/Images/Recurso 265100.svg' *ngIf=\"mostarPopUp\" /> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"datosForm\" style=\"align-items: center;\">\r\n                <label class=\"estiloLabelData\"> Guía de envío escaneada:</label>\r\n                <div id=\"EstiloCargarArchivo\">\r\n\r\n                  <div *ngIf=\"activar\">\r\n                    <!--<pn-file-upload-envio [nombreArchivo]=valor_tracking [fileName]=cargarGuia\r\n                                          [mensajeria]=validarPaquteria (enviarDocumento)=\"recibeDocumentacion($event)\"\r\n                                          style=\"min-width: 260px;\" [paqDistinta]=paqDistinta\r\n                                          [ruta]=cargarGuia></pn-file-upload-envio>-->\r\n\r\n                    <pq-file-upload [disabled]=\"true\" [docR]=\"cargarGuia\" style=\"min-width: 260px;display: flex;\"\r\n                                    (enviarDocumento)=\"recibeDocumentacion($event)\"\r\n                                    [activarOjito]=\"tipoEnvio\"></pq-file-upload>\r\n\r\n                  </div>\r\n                  <!--<div *ngIf=\"!activar\">\r\n                    <pn-file-upload-envio [nombreArchivo]=valor_tracking [fileName]=cargarGuia\r\n                                          [mensajeria]=validarPaquteria (enviarDocumento)=\"recibeDocumentacion($event)\"\r\n                                          style=\"min-width: 260px;\" [paqDistinta]=paqDistinta\r\n                                          [ruta]=cargarGuia></pn-file-upload-envio>\r\n                  </div>-->\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"totalFinalizar\">\r\n  <div class=\"botonFinalizar\" (click)=\"finalizar()\" [style.pointerEvents]=\"btnAceptar ? 'auto':'none'\"\r\n       [style.background]=\"btnAceptar ? '#008895':'#C2C3C9'\"> FINALIZAR\r\n  </div>\r\n</div>\r\n<div *ngIf=\"activarAlerta\">\r\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\r\n</div>\r\n<div *ngIf=\"activarAlertExit\">\r\n\r\n</div>\r\n<div *ngIf=\"activarPopFin\">\r\n  <pn-pop-up-exito [label]=\"'El proceso terminó exitosamente'\" [imagen]=\"false\" (desactivarPop)=\"desactivarPop($event)\"></pn-pop-up-exito>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.scss":
/***/ (function(module, exports) {

module.exports = ".encabezadoCliente{font-family:\"Novecento\";font-weight:bold;font-size:28px;color:#424242;text-align:left;padding-left:30px;size:150px;height:50px;padding-top:20px}.area{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #d8d8d8;width:100%;min-width:220px;border-top:1px solid #d8d8d8}.bordeDatosC{width:100%}.contenedor{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:20px}.label_estilo_encabezado{font-family:\"Novecento\";font-weight:bold;font-size:22px;color:#008895;height:28px;padding-bottom:5px}.label_nombre_lugar{font-family:\"Roboto\";font-weight:medium;font-size:18px;color:#424242;width:369px;height:52px}.label_cliente{font-family:\"Roboto\";font-weight:\"Regular\";font-size:16px;color:#424242;width:369px;height:22px}.label_ubicacion{font-family:\"Roboto\";font-size:16px;color:#424242;width:369px}.encabezadoLista{font-family:Helvetica;font-size:25px;color:#008895;line-height:22px;font-weight:bold;padding-bottom:20px;height:42px}.numPacking_list{font-family:Helvetica;font-size:20px;color:#000;line-height:22px;font-weight:bold;padding-bottom:12px}.totalPacking_llist{font-size:12px;color:#404040;text-align:center;font-family:\"Roboto\";width:167px;height:16px}.datosFooter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px;min-height:56px;max-height:56px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.p1,.p2,.p3{margin-right:10px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}.img{cursor:pointer}.nombrePacking_list{font-family:Helvetica-Bold;font-size:20px;color:#008895;line-height:22px}.seleccionLista{font-family:Helvetica;font-weight:bold;font-size:25px;color:#008895;width:100%}.contenedorComentario{opacity:.18;font-family:Novecento;font-size:36px;color:#4a4a4a;text-align:center;font-weight:bold}.estiloComentario{font-family:Roboto;color:#4a4a4a;font-size:15px}.estiloNombreSeleccioncliente{font-family:\"Novecento\";font-size:25px;color:#008895;text-align:left;line-height:30px;padding-left:20px}.subtitulos{font-family:Roboto;font-size:18px;color:#4a4a4a;font-weight:bold;padding-top:20px;padding-bottom:20px}.subtituloPeque{font-family:Roboto;font-size:18px;color:#4a4a4a;font-weight:bold}.divColectarElemntos{font-family:Roboto-Medium;font-size:14px;color:#008895;text-align:center;padding-bottom:20px;padding-top:20px;margin-top:20px}#encabezados{width:99%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-width:800px}.infoPL{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:429px;max-width:429px}.progresoTrabajo{min-width:908px;max-width:908px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-left:1px solid #d8d8d8;border-right:1px solid #d8d8d8;padding-left:25px;padding-right:25px;-webkit-box-sizing:border-box;box-sizing:border-box}.prioridadEmbalaje{min-width:396px;max-width:396px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:25px;-webkit-box-sizing:border-box;box-sizing:border-box}#principal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:230px;max-height:230px !important;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;-webkit-box-sizing:border-box;box-sizing:border-box}.mensajero{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0px 0px;border:1px solid #d8d9dd}.estiloInputMensajero{background-size:30px;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;width:100%;margin:-29px 0px;min-width:255px}#error{margin-top:20%}#error>ul>li{background:gray;padding:.5rem;color:#fff;font-weight:0;font-size:.8em;text-align:center;-webkit-animation:up 1s ease-in-out 1 backwards;animation:up 1s ease-in-out 1 backwards}.lista{overflow:scroll;border-bottom:solid 1px #eceef0}.lista div:hover{background-color:#eceef0}.lista>.divActual{background-color:#eceef0;-webkit-box-shadow:0 2px 4px -3px #008895;box-shadow:0 2px 4px -3px #008895}.lista>.divActive{height:101px;background-color:#eceef0}.lista>.divActive .ltSelect{background:#008895 !important;width:10px !important}#listaContent{padding-top:15px;padding-bottom:15.8px;padding-left:10px}.listaItem{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;width:249px;border-bottom:solid 1px #eceef0;-webkit-box-sizing:border-box;box-sizing:border-box}.listaSeleccionada{border-bottom:solid 1px #eceef0;height:100%;width:100%;min-height:80px;font-size:20px;padding:19px 23px 18px 17px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Roboto\",sans-serif;font-weight:bold;line-height:1.3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:6px solid #008895;background-color:#eceef0}.listaSeleccionada>.index{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:52px;color:#008895}.listaSeleccionada>.datosLst{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;color:#008895}.listaSeleccionada>.datosLst>p{font-weight:normal;color:#424242}.content-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:20px;padding-right:20px;width:100%;height:97%;padding-bottom:10px}.contenedorFormulario{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:20px;border-top:1px solid #d8d8d8}.formularioRutas{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 0px;padding-right:0px;min-width:450px;width:calc(100% - 514px);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.tabla-clientes{overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:267px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:calc(100vh - 630px);overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:12px;border-bottom:1px solid #d8d8d8;width:15%}.estiloTipoElemento{font-family:Novecento;font-size:16px;color:#008895;text-align:center;font-weight:bold;padding-top:10px;padding-bottom:15px}.textArea{width:100%;z-index:1;opacity:0;bottom:0px;top:0px}.imgEscanear{position:absolute}.divColectarElementos{opacity:.94;background:#008895;width:181px;height:63px;padding:5px 0px;border:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.divColectarElementos .labelcolectarElementos{font-family:Roboto;font-size:14px;color:#fff;text-align:center;font-weight:medium}.escanear{font-family:\"Roboto\";display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:30px;width:100%;margin-top:22px}.elementosItems{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:calc(100vh - 581px)}.escanearCodigos{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 20px;min-width:472px;max-width:472px;border-left:1px solid #d8d8d8;border-right:1px solid #d8d8d8;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box}.tituloColectar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:80px}.seccionUno{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:30px;padding-top:30px;height:260px}.contenedorTarjeta{height:100%}.imagenTarjeta{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid #d8d8d8;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:181px;max-height:208px;min-height:208px;-webkit-box-sizing:border-box;box-sizing:border-box}.datosForm{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.rowFormulario{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:20px;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.estiloLabelsContacto{font-family:Roboto-Light;font-size:15px;color:#4a4a4a;min-width:80px;max-width:290px}.estiloTxtAreaContacto{font-family:Roboto-Light;font-size:15px;color:#4a4a4a}.estiloLabelData{font-family:Roboto-Regular;font-size:15px;color:#4a4a4a;margin-right:10px}.botonFinalizar{width:170px;height:30px;background:#c2c3c9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold}#EstiloCargarArchivo{font-family:\"Roboto\";font-weight:lighter;font-size:14px;color:#abaab0;padding-left:0px;max-width:350px}.totalFinalizar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:15px 0;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.archivo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:20px;padding-bottom:20px}.tituloColectarElem{padding-bottom:10px;-ms-flex-line-pack:center;align-content:center;font-family:Helvetica-Bold;font-weight:bold;font-size:25px;color:#008895;width:100%;padding-left:20px}.segundaSeccion{-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #d8d8d8;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:100%;min-height:568px}.ubicacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-top:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.piezasPacking_llist{padding-bottom:12px}.inputPaquete{position:relative}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaEnvioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RutaEnvioComponent = /** @class */ (function () {
    function RutaEnvioComponent(comunService, _trabajarRutasEnvioService, coreComponent, _embalar) {
        this.comunService = comunService;
        this._trabajarRutasEnvioService = _trabajarRutasEnvioService;
        this.coreComponent = coreComponent;
        this._embalar = _embalar;
        this.informacionDatos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaColectarElementosAuxiliar = [];
        this.pahtDoc = 'http://proquifa.com.mx:51725/SAP/';
        this.activarBarraProgreso = true;
        this.activarBarraPrioridades = true;
        this.val = 0;
        this.contacto = "";
        this.telefono = "";
        this.puesto = "";
        this.email = "";
        this.comentarios = "";
        this.btnAceptar = false;
        this.contador = 0;
        this.activarInputs = false;
        this.texto = "";
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.activarBtn = false;
        this.auxDataClientCurrent = [];
        this.indexPacking = 0;
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.encabezadosPasckinList = [];
        this.codigosBarra = [];
        this.imgTipoValidacionArr = [];
        this.labelComentarios = true;
        this.cantidadPL = 0;
        this.tipoDeProducto = [];
        this.valoresData = [];
        this.popUp = false;
        this.numeroTracking = "";
        this.arreglo_numeros_tracking = [];
        this.arreglo_numeros_trackingCopia = [];
        this.activarBotonEnvio = false;
        this.etiquetaComentarios = true;
        this.mostarPopUp = [];
        this.informacionEnvio = [
            {
                envio_numero_trackig: "",
                envio_archivo_generado: ""
            }
        ];
        this.activar = false;
        this.informacionCompaniaArray = [
            {
                nombre_compania: "RYNDEM STUDIOS ejemplo realizar .....nnnnnn pruebas MAS PRUEBAS MAS NNNNNNN",
                contacto_compania: "Pedro Alejandro Hernández L.",
                cargo_compania: "Almacenista",
                ubicacion: "Toluca",
                zona: 'local'
            }
        ];
        this.validarnumerosEnvio = /^([0-9])*$/;
        this.focus = true;
        this.tipoEnviar = true;
        this.tiposEnvios = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'DHL', key: 0 },
            { nombre: 'ESTAFETA', key: 1 },
            { nombre: 'FEDEX', key: 2 },
            { nombre: 'UPS', key: 3 }
        ];
        this.datosContacto = [];
        this.datosInformacion = [];
        this.destino = [{
                pais: 'México', estado: 'JALISCO', delegacion: 'Guadalajara', CP: '44500', ruta: 'Guadalajara',
                calle: 'LA VILLA #1996,COLONIA CHAPALITA', num: '1996', colonia: 'Chapalita'
            }];
    }
    RutaEnvioComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Seleccionar';
        this.selectedEnvio = obj;
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser();
        this.obtenerDatosContacto();
    };
    RutaEnvioComponent.prototype.realizarEnvioTipoMensajero = function (mensajeria, estado, indice) {
        var _this = this;
        console.log("entro a realizar el envio....");
        this.activarBtn = false;
        this.btnAceptar = true;
        // this.recibioMensajeria = mensajeria;
        this.recibioEstadoEnvio_Abreviacion = 'JA';
        if (estado == 'AGUASCALIENTES') {
            var infoEstado = 'AG';
            this.recibioEstadoEnvio_Abreviacion = infoEstado;
        }
        else {
            if (estado == 'BAJA CALIFORNIA NORTE') {
                var infoEstado = 'BN';
                this.recibioEstadoEnvio_Abreviacion = infoEstado;
            }
            else {
                if (estado == 'BAJA CALIFORNIA SUR') {
                    var infoEstado = 'BS';
                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                }
                else {
                    if (estado == 'COAHUILA') {
                        var infoEstado = 'CH';
                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                    }
                    else {
                        if (estado == 'CHIHUAHUA') {
                            var infoEstado = 'CI';
                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                        }
                        else {
                            if (estado == 'COLIMA') {
                                var infoEstado = 'CL';
                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                            }
                            else {
                                if (estado == 'CAMPECHE') {
                                    var infoEstado = 'CP';
                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                }
                                else {
                                    if (estado == 'CHIAPAS') {
                                        var infoEstado = 'CS';
                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                    }
                                    else {
                                        if (estado == 'DISTRITO FEDERAL') {
                                            var infoEstado = 'DF';
                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                        }
                                        else {
                                            if (estado == 'DURANGO') {
                                                var infoEstado = 'DG';
                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                            }
                                            else {
                                                if (estado == 'GUERRERO') {
                                                    var infoEstado = 'GE';
                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                }
                                                else {
                                                    if (estado == 'GUANAJUATO') {
                                                        var infoEstado = 'GJ';
                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                    }
                                                    else {
                                                        if (estado == 'HIDALGO') {
                                                            var infoEstado = 'HD';
                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                        }
                                                        else {
                                                            if (estado == 'JALISCO') {
                                                                var infoEstado = 'JA';
                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                            }
                                                            else {
                                                                if (estado == 'MICHOACAN') {
                                                                    var infoEstado = 'MC';
                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                }
                                                                else {
                                                                    if (estado == 'MORELOS') {
                                                                        var infoEstado = 'MR';
                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                    }
                                                                    else {
                                                                        if (estado == 'MEXICO') {
                                                                            var infoEstado = 'MX';
                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                        }
                                                                        else {
                                                                            if (estado == 'NAYARIT') {
                                                                                var infoEstado = 'NA';
                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                            }
                                                                            else {
                                                                                if (estado == 'NUEVO LEON') {
                                                                                    var infoEstado = 'NL';
                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                }
                                                                                else {
                                                                                    if (estado == 'OAXACA') {
                                                                                        var infoEstado = 'OA';
                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                    }
                                                                                    else {
                                                                                        if (estado == 'PUEBLA') {
                                                                                            var infoEstado = 'QE';
                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                        }
                                                                                        else {
                                                                                            if (estado == 'QUERETARO') {
                                                                                                var infoEstado = 'OA';
                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                            }
                                                                                            else {
                                                                                                if (estado == 'QUINTANA ROO') {
                                                                                                    var infoEstado = 'QI';
                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                }
                                                                                                else {
                                                                                                    if (estado == 'SINALOA') {
                                                                                                        var infoEstado = 'SI';
                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                    }
                                                                                                    else {
                                                                                                        if (estado == 'SAN LUIS POTOSI') {
                                                                                                            var infoEstado = 'SL';
                                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                        }
                                                                                                        else {
                                                                                                            if (estado == 'SONORA') {
                                                                                                                var infoEstado = 'SO';
                                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                            }
                                                                                                            else {
                                                                                                                if (estado == 'TAMAULIPAS') {
                                                                                                                    var infoEstado = 'TA';
                                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                }
                                                                                                                else {
                                                                                                                    if (estado == 'TABASCO') {
                                                                                                                        var infoEstado = 'TB';
                                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                    }
                                                                                                                    else {
                                                                                                                        if (estado == 'TLAXCALA') {
                                                                                                                            var infoEstado = 'TL';
                                                                                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                        }
                                                                                                                        else {
                                                                                                                            if (estado == 'VERACRUZ') {
                                                                                                                                var infoEstado = 'VC';
                                                                                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                if (estado == 'YUCATAN') {
                                                                                                                                    var infoEstado = 'YU';
                                                                                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    if (estado == 'ZACATECAS') {
                                                                                                                                        var infoEstado = 'ZA';
                                                                                                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.recibioMensajeria == "UPS") {
            console.log("/****** UPS *****//");
            this.getRealizarEnvioUps();
            this.index = indice;
            this.validarPaquteria = false;
            this.paqDistinta = false;
        }
        else {
            if (this.recibioMensajeria == "FEDEX") {
                console.log("/****** FEDEX *****//");
                this.tipoGuardar = 'fedex';
                this.getRealizarEnvioFedex();
                this.index = indice;
                this.validarPaquteria = false;
                this.paqDistinta = false;
            }
            else if (this.recibioMensajeria == "DHL") {
                this.tipoGuardar = 'paqueteria';
                this.mostarPopUp[indice] = true;
                this.validarPaquteria = false;
                this.paqDistinta = true;
            }
            else {
                this.tipoGuardar = 'paqueteria';
                this.paqDistinta = true;
                console.log("valor paqueteria" + this.paqDistinta);
                // .incluirTrackingArreglo();
                console.log(this.arreglo_numeros_tracking);
                this.validarPaquteria = true;
                this.mostarPopUp[indice] = true;
            }
            this.mostarPopUp[indice] = false;
        }
        setTimeout(function () {
            console.log("POSICIÓN", _this.numeroPosicion);
            var objeto = {
                numeroTracking: _this.numeroTracking,
                indexObjeto: _this.numeroPosicion,
                valor: false
            };
            console.log("OBJETO******");
            console.log(objeto);
            _this.arreglo_numeros_tracking.push(objeto);
            _this.arreglo_numeros_trackingCopia.push(objeto);
            // console.log(this.numeroTracking);
            console.log("ARREGLO******");
            console.log(_this.arreglo_numeros_tracking);
        }, 5000);
        this.mostarPopUp.push(false);
    };
    /******************Este metodo se ocupa para hacer la llamada a FEDEX***************/
    RutaEnvioComponent.prototype.getRealizarEnvioFedex = function () {
        var _this = this;
        // this.activarBotonEnvio = true;
        this.mostarPopUp.push(true);
        this.popUp = true;
        var info2 = {
            contact: {
                personName: this.datosContacto[0].contacto,
                companyName: 'Proquifa',
                phoneNumber: this.datosContacto[0].tel
            },
            address: {
                streetLines: [this.destino[0].calle],
                city: this.destino[0].delegacion,
                stateOrProvinceCode: this.recibioEstadoEnvio_Abreviacion,
                postalCode: this.destino[0].CP,
                countryCode: "MX"
            },
            peso: this.peso,
            length: this.longitud,
            height: this.altura,
            width: this.ancho,
            customerReferenceClient: "",
            invoceNumber: "",
            poNumber: "",
            reintentos: 0,
            emisor: this.usuario["nombre"]
        };
        // console.log(info2);
        this.coreComponent.openModal(0);
        this._trabajarRutasEnvioService.getRealizarEnvioFedex(info2).subscribe(function (data) {
            // console.log(data);
            if (data.current === false) {
                _this.coreComponent.closeModal(0);
                _this.mensaje = 'El servicio de Fedex no esta disponible en este momento, favor de hacer la carga manual';
                _this.activarAlerta = true;
                _this.validarPaquteria = true;
                _this.paqDistinta = true;
                _this.tipoEnvio = true;
            }
            else {
                console.log('Soy el numero de guia --->', _this.numGuia);
                _this.numGuia = data.current.TrackingNumber;
                _this.numeroTracking = data.current.TrackingNumber;
                if (_this.numeroTracking && _this.numeroTracking !== '' && _this.numeroTracking !== undefined && _this.numeroTracking !== null) {
                    _this.activarSelect = true;
                }
                var url = _this.pahtDoc + 'DoctosCierre/RT/' + data.current.File;
                _this.cargarGuia = [{ path: url, name: data.current.File }];
                _this.activar = true;
                _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
                _this.activarInputs = true; // Se desabilitan los inputs
                // this.getEnviarTrackingNumber();
                _this.coreComponent.closeModal(0);
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
            // console.log(error);
        });
    };
    RutaEnvioComponent.prototype.getEnviarTrackingNumber = function () {
        // this.numeroTracking = "";
        var _this = this;
        this._trabajarRutasEnvioService.obtenerTrackingNumber().subscribe(function (data) {
            _this.numeroTracking = data.current;
            _this.numGuia = data.current;
            console.log("FEDEX********");
            console.log(data);
            _this.informacionEnvio[0].envio_numero_trackig == _this.numeroTracking;
            _this.valor_tracking = _this.numeroTracking + '.pdf';
            // console.log(this.contador + "valor de contador");
            _this.caracteres = _this.valor_tracking.length;
            // console.log("valor del tracking" + this.caracteres);
            // console.log(this.valor_tracking);
            if (_this.codigosBarra.length == _this.contador && _this.caracteres != 0) {
                // console.log("valor tracking" + this.valor_tracking);
                // console.log("Entro a la validacion (Estoy en FEDEX.....) ");
                // console.log(this.numeroTracking);
                _this.btnAceptar = true;
            }
            _this.enviarFileGuideShip();
        }, function (error) {
            // console.log(error);
        });
    };
    RutaEnvioComponent.prototype.enviarFileGuideShip = function () {
        var _this = this;
        this._trabajarRutasEnvioService.enviarFileGuideShip().subscribe(function (data) {
            console.log(data);
            /* this.cargarGuia = [this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
             // this.cargarGuia[0].path = "GuiaEnvio.pdf";
             console.log( this.cargarGuia);*/
            /// Se activa para mostrar la guia
            _this.activar = true;
            _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
            _this.activarInputs = true; // Se desabilitan los inputs
        }, function (error) {
            console.log(error);
        });
    };
    RutaEnvioComponent.prototype.dataURLtoFile = function (dataurl, filename) {
        var bstr = atob(dataurl);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, { type: "application/pdf" });
        return file;
    };
    RutaEnvioComponent.prototype.incluirTrackingArreglo = function (tracking) {
        this.ingresoTracking = tracking;
        this.ingresoTrackingAux = this.ingresoTracking.trim();
        var guiaStrin = this.ingresoTrackingAux.toString();
        this.numGuia = guiaStrin;
        console.log("input");
        console.log("filename" + this.ingresoTracking);
        var objetoInput = {
            numeroTracking: this.ingresoTracking,
            indexObjeto: this.numeroPosicion,
            valor: false
        };
        console.log("tt" + this.ingresoTracking);
        if (this.ingresoTracking.length == 10) {
            this.fileName = this.ingresoTracking;
            console.log("formo objeto" + objetoInput);
            this.arreglo_numeros_tracking.push(objetoInput);
            console.log(this.arreglo_numeros_tracking);
        }
        console.log("valor paqueteria" + this.paqDistinta);
        this.validarBotonEnvio();
    };
    RutaEnvioComponent.prototype.obtenerArchivoUPS = function () {
        var _this = this;
        this._trabajarRutasEnvioService.obtenerArchivoUPS().subscribe(function (data) {
            _this.guiaEnvio = data;
            _this.cargarGuia = [_this.guiaEnvio.current];
            _this.cargarGuia = [_this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
        }, function (error) {
            console.log(error);
        });
    };
    RutaEnvioComponent.prototype.getRealizarEnvioUps = function () {
        var _this = this;
        // this.activarBotonEnvio = true;
        console.log(this.usuario);
        this.nombre_envio = this.usuario["nombre"];
        this.mostarPopUp.push(true);
        this.popUp = true;
        var info_envio_ups = {
            UPSSecurity: {
                UsernameToken: {
                    Username: "ryndem.ups",
                    Password: "Mexico2018"
                },
                ServiceAccessToken: {
                    AccessLicenseNumber: "ED52772FFECE6EAC"
                }
            },
            ShipmentRequest: {
                Request: {
                    RequestOption: "validate",
                    TransactionReference: {
                        CustomerContext: "Your Customer Context"
                    }
                },
                Shipment: {
                    //La Descripción de Bienes para el envío. Se aplica a envíos internacionales y nacionales.
                    //Proporcione una descripción detallada de los artículos que se envían para documentos y no documentos.
                    //Ejemplos: "informes anuales" y "tornillos de acero de 9 mm".
                    Description: "Description",
                    Shipper: {
                        Name: this.usuario["nombre"],
                        AttentionName: "Shipper Attn Name",
                        Phone: {
                            Number: "5513151498",
                            Extension: "1"
                        },
                        ShipperNumber: "6437V0",
                        FaxNumber: "",
                        Address: {
                            AddressLine: "Jose Maria Morelos 164, Nino Jesus",
                            City: "Mexico City",
                            StateProvinceCode: "DF",
                            PostalCode: "14080",
                            CountryCode: "MX"
                        }
                    },
                    ShipTo: {
                        //Para envío hacia adelante se aceptan 35 caracteres
                        // pero solo se imprimirán 30 caracteres en la etiqueta.
                        // Name:this.informacionCompaniaArray[0].nombre_compania,
                        Name: this.datosContacto[0].contacto,
                        AttentionName: "Proquifa GDL",
                        Phone: {
                            Number: this.datosContacto[0].tel != "" ? this.datosContacto[0].tel : "N/D"
                        },
                        Address: {
                            AddressLine: this.destino[0].calle.length > 35 ? this.destino[0].calle.substr(0, 34) : this.destino[0].calle,
                            City: this.destino[0].delegacion,
                            StateProvinceCode: this.recibioEstadoEnvio_Abreviacion,
                            PostalCode: this.destino[0].CP,
                            CountryCode: "MX"
                        }
                    },
                    ShipFrom: {
                        Name: this.usuario["nombre"],
                        AttentionName: "Proquifa",
                        Phone: {
                            Number: "5513151498"
                        },
                        FaxNumber: "",
                        Address: {
                            AddressLine: "Jose Maria Morelos 164, Nino Jesus",
                            City: "Mexico City",
                            StateProvinceCode: "DF",
                            //Length: 2...5
                            PostalCode: "42855",
                            CountryCode: "MX"
                        }
                    },
                    PaymentInformation: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "6437V0"
                            }
                        }
                    },
                    Service: {
                        Code: "65",
                        Description: "Express"
                    },
                    Package: {
                        Description: "Description",
                        Packaging: {
                            Code: "02",
                            Description: "Description"
                        },
                        Dimensions: {
                            UnitOfMeasurement: {
                                Code: "CM",
                                Description: "centimeters"
                            },
                            Length: "7",
                            Width: "5",
                            Height: "2"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "KGS",
                                Description: "Kilograms"
                            },
                            Weight: "10"
                        }
                    }
                },
                LabelSpecification: {
                    LabelImageFormat: {
                        Code: "GIF",
                        Description: "GIF"
                    },
                    HTTPUserAgent: ""
                }
            }
        };
        console.log(info_envio_ups);
        this._trabajarRutasEnvioService.getRealizarEnvioUps(info_envio_ups).subscribe(function (data) {
            console.log(data);
            _this.valor_tracking = data.ShipmentResponse.ShipmentResults.PackageResults.TrackingNumber;
            _this.valor_base64 = data.ShipmentResponse.ShipmentResults.PackageResults.ShippingLabel.GraphicImage;
            _this.guardarEtiquetaUPS();
            // this.obtenerArchivoUPS();
            _this.numeroTracking = _this.valor_tracking;
            if (_this.numeroTracking && _this.numeroTracking !== '' && _this.numeroTracking !== undefined) {
                _this.activarSelect = true;
            }
            _this.valor_tracking = _this.numeroTracking + '.pdf';
            console.log(_this.contador + "valor de contador");
            _this.caracteres = _this.valor_tracking.length;
            console.log("valor del tracking" + _this.caracteres);
            console.log(_this.valor_tracking);
        }, function (error) {
            console.log(error);
        });
        setTimeout(function () {
        }, 4000);
        if (this.codigosBarra.length == this.contador && this.caracteres != 0) {
            console.log("valor tracking" + this.valor_tracking);
            console.log("Entro a la validacion (Estoy en ups.....) ");
            console.log(this.numeroTracking);
            this.btnAceptar = true;
        }
    };
    /******ESTE METODO VA A RECUPERAR EL NOMBRE DEL ARCHIVO A VISUALIZAR -- guardarArchivo****/
    RutaEnvioComponent.prototype.guardarEtiquetaUPS = function () {
        var _this = this;
        var dataVal = {
            nombre: this.valor_tracking,
            data1: this.valor_base64,
        };
        var cargarAux;
        this._trabajarRutasEnvioService.guardaEtiquetaUPS(dataVal).subscribe(function (data) {
            // this.informacionEnvio[0].envio_numero_trackig === this.numeroTracking;
            /*********SE RECUPERA EL NOMBRE DEL ARCHIVO*******/
            var url;
            _this.guiaEnvio = data.current;
            var guiaAux = _this.guiaEnvio;
            var arr = guiaAux.split('.');
            _this.numGuia = arr[0];
            console.log('Soy el numero de guia --->', _this.numGuia);
            url = _this.pahtDoc + 'DoctosCierre/RT/' + _this.guiaEnvio;
            _this.cargarGuia = [{ path: url, name: 'Guia.pdf' }];
            _this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
            _this.activarInputs = true; // Se desabilitan los inputs
            _this.activar = true;
        }, function (error) {
            console.log(error);
        });
    };
    RutaEnvioComponent.prototype.validarBotonEnvio = function () {
        var auxIndex = 1;
        var contador = 0;
        /*for (let item of this.codigosValidos[this.indexPacking]) {
          if (item) {
            contador++;
          }
        }*/
        if (this.validarPaquteria) {
            if ((this.recibioMensajeria !== 'Seleccionar') && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.ingresoTracking !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined) && (this.ingresoTracking !== undefined)) {
                this.activar = true;
            }
            else {
                this.activar = false;
                this.archivo = undefined;
            }
            if (this.activar && this.archivo.length > 0) {
                this.btnAceptar = true;
            }
            else {
                this.btnAceptar = false;
            }
        }
        else {
            if ((this.recibioMensajeria !== 'Seleccionar') && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined)) {
                this.activarBotonEnvio = true;
            }
            else {
                this.activarBotonEnvio = false;
            }
        }
    };
    RutaEnvioComponent.prototype.recibeContacto = function (texto, tipoInput) {
        var obj;
        obj = new Object();
        obj.tipo = tipoInput;
        if (tipoInput == "peso") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.peso = texto.trim();
                // console.log("valido");
            }
            // this.validarSiNumero(this.peso);
        }
        else if (tipoInput == "longitud") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.longitud = texto.trim();
                // console.log("valido");
            }
        }
        else if (tipoInput == "altura") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.altura = texto.trim();
                // console.log("valido");
            }
        }
        else if (tipoInput == "ancho") {
            if (this.validarnumerosEnvio.test(this.texto)) {
                this.ancho = texto.trim();
            }
        }
        this.validarBotonEnvio();
    };
    RutaEnvioComponent.prototype.cerrarAlert = function ($event) {
        this.activarAlerta = false;
        this.textArea.nativeElement.focus();
    };
    RutaEnvioComponent.prototype.recibeValosCombo = function (valor, tipo) {
        this.numGuia = '';
        this.ingresoTracking = '';
        this.activar = false;
        this.recibioMensajeria = valor.nombre;
        if (valor.nombre === 'FEDEX') {
            this.tipoGuardar = 'fedex';
        }
        else {
            this.tipoGuardar = 'paqueteria';
        }
        if (valor.nombre === 'UPS' || valor.nombre === 'FEDEX') {
            this.tipoEnvio = false;
            // this.tipoEnviar = false;
            this.validarPaquteria = false;
        }
        else if (valor.nombre === 'DHL' || valor.nombre === 'ESTAFETA') {
            this.tipoEnvio = true;
            // this.tipoEnviar = false;
            this.validarPaquteria = true;
        }
        else {
            // this.tipoEnviar = true;
        }
        this.validarBotonEnvio();
    };
    /****RECIBE LOS DATOS DEL CONTACTO****/
    RutaEnvioComponent.prototype.obtenerDatosContacto = function () {
        var _this = this;
        this._embalar.obtenerDatosContacto().subscribe(function (data) {
            _this.datosContacto[0] = data.current;
            _this.datosInformacion[0] = { ruta: 'Guadalajara', contacto: _this.datosContacto[0].contacto, puesto: _this.datosContacto[0].puesto, cliente: 'Proquifa Gdl' };
            _this.informacionDatos.emit(_this.datosInformacion);
        });
    };
    /****Recibe la documentación que se cargo****/
    RutaEnvioComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log(archivo);
        this.paqDistinta = true;
        this.cargarDocumento = archivo;
        this.archivo = archivo;
        this.validarBotonEnvio();
    };
    RutaEnvioComponent.prototype.finalizar = function () {
        var _this = this;
        var numeroGuia = { noGuia: this.numGuia, mensajeria: this.recibioMensajeria };
        this.coreComponent.openModal(0);
        this._embalar.finalizarGDL(numeroGuia).subscribe(function (data) {
            if (_this.validarPaquteria) {
                var numGuia = _this.ingresoTracking;
                console.log('Soy numero de guia', numGuia);
                _this._trabajarRutasEnvioService.uploadFile(numGuia, _this.cargarDocumento, _this.tipoGuardar).subscribe(function (dataFile) {
                });
            }
            if (data.current === true) {
                _this.activarPopFinalizar();
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    RutaEnvioComponent.prototype.activarPopFinalizar = function () {
        this.activarPopFin = true;
    };
    RutaEnvioComponent.prototype.desactivarPop = function (desactivar) {
        this.activarPopFin = desactivar;
        this.comunService.finalizarEmb(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], RutaEnvioComponent.prototype, "informacionDatos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("textarea"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RutaEnvioComponent.prototype, "textArea", void 0);
    RutaEnvioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-ruta-envio',
            template: __webpack_require__("./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_2__trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], RutaEnvioComponent);
    return RutaEnvioComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaColectarElementos\">\r\n  <div class=\"vistaColectar\">\r\n\r\n    <div class=\"pCongelacion\" *ngIf=\"mostrarCongelador\">\r\n      <img class=\"imgCongelacion\" src='./assets/Images/congelacion.svg' style=\"height:101px;width: 105px;\"/>\r\n      <article class=\"datosConge\" style=\"margin-top: 12%;\">\r\n        <p class=\"dato\">{{formatoConge}}</p>\r\n        <p class=\"tipo\">Congelación</p>\r\n      </article>\r\n    </div>\r\n\r\n    <div class=\"flecha1\" *ngIf=\"mostrarFlecha1\">\r\n      <img class=\"img\" src='./assets/Images/siguiente.svg' style=\"height:60px;width: 72px;\"/>\r\n    </div>\r\n\r\n    <div class=\"pRefrigeracion\" *ngIf=\"mostrarRefri\">\r\n      <img class=\"imgRefrigeracion\" src='./assets/Images/refrigeracion.svg' style=\"height:101px;width: 105px;\"/>\r\n      <article class=\"datosRefri\" style=\"margin-top: 12%;\">\r\n        <p class=\"dato\">{{formatoRefri}}</p>\r\n        <p class=\"tipo\">Refrigeración</p>\r\n      </article>\r\n    </div>\r\n\r\n    <div class=\"flecha2\" *ngIf=\"mostrarFlecha2\">\r\n      <img class=\"img\" src='./assets/Images/siguiente.svg' style=\"height:60px;width: 72px;\"/>\r\n    </div>\r\n\r\n    <div class=\"pAmbiente\" *ngIf=\"mostrarAmbiente\">\r\n      <img class=\"imgAmbiente\" src='./assets/Images/ambiente.svg' style=\"height:101px;width: 105px;\"/>\r\n      <article class=\"datosAmbiente\" style=\"margin-top: 12%;\">\r\n        <p class=\"dato\">{{formatoAmbiente}}</p>\r\n        <p class=\"tipo\">Ambiente</p>\r\n      </article>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <footer class=\"botonesDireccion\">\r\n    <a class=\"botonIngresar\">COLECTAR</a>\r\n  </footer> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.scss":
/***/ (function(module, exports) {

module.exports = ".vistaColectarElementos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:95%;width:100%;font-family:\"Roboto\",sans-serif}.vistaColectar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pAmbiente{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flecha1{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pRefrigeracion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.flecha2{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:12%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.pCongelacion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:14%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dato{font-size:40px;color:#404040;text-align:center;margin-top:10%}.tipo{font-size:35px;color:#338a9c;text-align:center;margin-top:10%;font-weight:bold}.botonIngresar{width:190px;height:30px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaColectarElementosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VistaColectarElementosComponent = /** @class */ (function () {
    function VistaColectarElementosComponent(CoreComponent) {
        this.CoreComponent = CoreComponent;
    }
    VistaColectarElementosComponent.prototype.ngOnInit = function () {
        // this.mostrarDatos();
    };
    VistaColectarElementosComponent.prototype.ngOnChanges = function () {
        this.mostrarPartidas();
        console.log('', this.partidasPorColectar);
    };
    VistaColectarElementosComponent.prototype.mostrarPartidas = function () {
        this.partidasAmbiente = this.partidasPorColectar[0].numPartidasAmbiente;
        this.partdasRefrigeracion = this.partidasPorColectar[0].numPartidasRefrigeracion;
        this.partidasCongelacion = this.partidasPorColectar[0].numPartidasCongelacion;
        this.mostrarAmbiente = this.visualizarElemento(this.partidasAmbiente);
        this.mostrarRefri = this.visualizarElemento(this.partdasRefrigeracion);
        this.mostrarCongelador = this.visualizarElemento(this.partidasCongelacion);
        this.mostrarFlechas(this.mostrarAmbiente, this.mostrarRefri, this.mostrarCongelador);
        this.formatoAmbiente = (this.partidasAmbiente == 1) ? this.partidasAmbiente + ' Partida' : this.partidasAmbiente + ' Partidas';
        this.formatoRefri = (this.partdasRefrigeracion == 1) ? this.partdasRefrigeracion + ' Partida' : this.partdasRefrigeracion + ' Partidas';
        this.formatoConge = (this.partidasCongelacion == 1) ? this.partidasCongelacion + ' Partida' : this.partidasCongelacion + ' Partidas';
    };
    VistaColectarElementosComponent.prototype.mostrarDatos = function () {
        this.mostrarAmbiente = this.visualizarElemento(this.partidasAmbiente);
        this.mostrarRefri = this.visualizarElemento(this.partdasRefrigeracion);
        this.mostrarCongelador = this.visualizarElemento(this.partidasCongelacion);
        this.mostrarFlechas(this.mostrarAmbiente, this.mostrarRefri, this.mostrarCongelador);
        this.formatoAmbiente = (this.partidasAmbiente == 1) ? this.partidasAmbiente + ' Partida' : this.partidasAmbiente + ' Partidas';
        this.formatoRefri = (this.partdasRefrigeracion == 1) ? this.partdasRefrigeracion + ' Partida' : this.partdasRefrigeracion + ' Partidas';
        this.formatoConge = (this.partidasCongelacion == 1) ? this.partidasCongelacion + ' Partida' : this.partidasCongelacion + ' Partidas';
    };
    VistaColectarElementosComponent.prototype.visualizarElemento = function (dato) {
        if (dato < 1) {
            return false;
        }
        else
            return true;
    };
    VistaColectarElementosComponent.prototype.mostrarFlechas = function (dato1, dato2, dato3) {
        if (dato1 == true && dato2 == true && dato3 == true) {
            this.mostrarFlecha1 = true;
            this.mostrarFlecha2 = true;
        }
        else if (dato1 == false && dato2 == true && dato3 == true) {
            this.mostrarFlecha1 = true;
            this.mostrarFlecha2 = false;
        }
        else if (dato1 == true && dato2 == false && dato3 == true) {
            this.mostrarFlecha1 = true;
            this.mostrarFlecha2 = false;
        }
        else if (dato1 == true && dato2 == true && dato3 == false) {
            this.mostrarFlecha1 = false;
            this.mostrarFlecha2 = true;
        }
        else if (dato1 == true && dato2 == false && dato3 == false) {
            this.mostrarFlecha1 = false;
            this.mostrarFlecha2 = false;
        }
        else if (dato1 == false && dato2 == true && dato3 == false) {
            this.mostrarFlecha1 = false;
            this.mostrarFlecha2 = false;
        }
        else if (dato1 == false && dato2 == false && dato3 == true) {
            this.mostrarFlecha1 = false;
            this.mostrarFlecha2 = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaColectarElementosComponent.prototype, "partidasPorColectar", void 0);
    VistaColectarElementosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-vista-colectar-elementos',
            template: __webpack_require__("./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], VistaColectarElementosComponent);
    return VistaColectarElementosComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaEmbalarProductos\">\r\n<div>\r\n  <pq-productos-por-embalar (activarPopImprimir)=\"activarPopImp($event)\" [validarPakingList]=\"activarPaking\"  (emitActivarPopExi)=\"activarVistaPack($event)\" [desactivarBtn]=\"desactivarBtn\" [datosClienteP]=\"datosCliente\" (emitEventColectar)= \"recibirTipoEmbajale($event)\" (emitEventValidarBotonGenerar)= \"recibirValorB($event)\" [datosPorEstado] = \"listaTotales\" [mostrarVistaLista]=\"vistaEmbalar\"  (emitEvent)= \"recibirFD($event)\" (emitEventPiezas)= \"recibirDatosPakingList($event)\" (emitEventScanear)=\"recibirManejoScanear($event)\" [folioPakingList]=\"folio\" (activarBtnMas)=\"activarBtnMas($event)\" [enviarInfo]=\"activarEnviarInfo\" [estadoVista]=\"estadoVistaUsuario\" [activarFocus]=\"activarFocus\" [nombreV]=\"nombreVideo\" (piezasFaltantes)=\"sobrantes($event)\"></pq-productos-por-embalar>\r\n</div>\r\n\r\n<!-- Vista Iniciar grabacion -->\r\n<div class=\"iniciarEmbalaje\" *ngIf=\"vistaVideo\">\r\n  <div class=\"enfoqueSuperior\" style=\"width:100%; flex-direction:row; justify-content:space-between\">\r\n    <img src=\"./assets/Images/Images/Sup_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\r\n    <img src=\"./assets/Images/Images/Sup_Der.svg\" alt=\"\" class=\"imgEnfoque\">\r\n </div>\r\n    <div class=\"grabar\">\r\n      <!-- <div class=\"iniciarInspeccion\"> -->\r\n      <div class=\"titulo\">\r\n        <h1 style=\"font-family: Novecento-Demibold\">INICIAR EMBALAJE</h1>\r\n      </div>\r\n\r\n      <div class=\"boton\">\r\n        <!--<button type=\"button\" name=\"button\" (click)=\"quitarVistaVideo()\" class=\"btnGrabar\">GRABAR</button>\r\n        <img src=\"./assets/Images/Images/FlechaDerBlanca.svg\">-->\r\n        <div (click)=\"quitarVistaVideo()\" class=\"btnGrabar\">\r\n          <div style=\"display: flex;padding-right: 15px\">\r\n          <label style=\"font-family: Novecento-Bold;display: contents;\">Iniciar  </label>\r\n          </div>\r\n          <div>\r\n          <label class=\"up\"> </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"enfoqueInferior\" style=\"width:100%;flex-direction:row; justify-content:space-between; align-items: flex-end;\">\r\n      <img src=\"./assets/Images/Images/Inf_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\r\n      <img src=\"./assets/Images/Images/Inf_Der.svg\" alt=\"\" class=\"imgEnfoque\">\r\n    </div>\r\n</div>\r\n<!-- FIN Vista Iniciar grabacion -->\r\n<div class=\"vistaOPeracionEmbalar\"  [style.opacity]=\"vistaEmbalar?'1':'0'\" [style.display]=\"vistaEmbalar?'flex':'none'\">\r\n<!--  <div class=\"EscaneaCodigo\">\r\n    <pq-escanear-codigo-embalaje (emitEvent)= \"recibirFD($event)\"  [valorRecibidoEmbalaje] =\"recibirValorEmbajale\">  </pq-escanear-codigo-embalaje>\r\n  </div>-->\r\n\r\n  <div class=\"seccionFD\">\r\n    <pq-fd-embalaje (desactivarBoton)=\"enviarBtnDesactivo($event)\" [comentarios]=\"comentariosEntrega\" [valorRecibidoFD] =\"recibirValorFD\" [valorRecibidoEmbalajeFD] = \"recibirValorEmbajale\" (tipoManejo)=\"agregarPaquete($event)\" [folioPaquete] = \"folio\" [activarBotonM]=\"openBtnMas\"></pq-fd-embalaje>\r\n  </div>\r\n\r\n  <div class=\"seccionPackingList\">\r\n    <div class=\"video\">\r\n      <div class=\"enfoqueSuperior\" style=\"width:100%; flex-direction:row; justify-content:space-between\">\r\n        <img src=\"./assets/Images/Images/Sup_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\r\n        <img src=\"./assets/Images/Images/Sup_Der.svg\" alt=\"\" class=\"imgEnfoque\">\r\n      </div>\r\n      <!--<pq-grabacion-video style=\"width:94%;height: 93%;\"></pq-grabacion-video-->\r\n       <!-- <video  width=\"94\" height=\"93\" src=\"./assets/Images/GLI-112818-1291.webm\">\r\n        </video>-->\r\n      <div *ngIf=\"mensajeVideo\" style=\"color: #D8D9DD; background-color: #F3F3F4;height: 100%; width: 90%\">\r\n        <p class=\"p\">VIDEO</p>\r\n        <p class=\"p\">NO DISPONIBLE</p>\r\n      </div>\r\n      <video href=\"path\" autoplay height=\"100%\" *ngIf=\"videoValido\" #video style=\"max-width:330px;\">\r\n      </video>\r\n      <div class=\"enfoqueInferior\" style=\"width:100%;flex-direction:row; justify-content:space-between; align-items: flex-end;\">\r\n        <img src=\"./assets/Images/Images/Inf_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\r\n        <img src=\"./assets/Images/Images/Inf_Der.svg\" alt=\"\" class=\"imgEnfoque\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"packingList\">\r\n      <pq-packing-list-embalaje [recibirDatos] = \"listaPaking\" (activarBoton)=\"activacionBoton($event)\"></pq-packing-list-embalaje>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n  <!--SECCIÓN DE LOS POP-UP-->\r\n  <div *ngIf=\"vistaEtiquetaPoP\">\r\n    <!--<pn-pop-up-informativo  (vistaPopEstado)=\"mostrarModalEtiqueta($event)\" ></pn-pop-up-informativo>-->\r\n    <pn-pop-up-informativo  (vistaListaEmbalar)=\"mostrarListaEmbalar($event)\" [tipoMensaje]=\"tipo\"></pn-pop-up-informativo>\r\n  </div>\r\n  <!--Se muestra la etiqueta de se ha generado en sobre-->\r\n  <div *ngIf=\"vistaEtiquetaPoPGene\">\r\n    <pn-pop-up-informativo [activarGenerar]=\"botonGenerar\" (cambiarVistaGenerar)=\"enviarDatosVisOper($event)\"></pn-pop-up-informativo>\r\n  </div>\r\n  <!--Modal para las hieleras y bolsas-->\r\n  <div *ngIf=\"openModal\">\r\n    <pn-pop-up-generar-etiqueta-estado [datosCliente]=\"datosClient\" [activarSobre]=\"false\" (vistaPopEstado)=\"mostrarModalEtiqueta($event)\"(folio)=\"recibirFolio($event)\"  [recibirManejo]=\"manejoAScanear\" [valorIndice]=\"i\" [folioTemHie]=\"folioHielera\"></pn-pop-up-generar-etiqueta-estado>\r\n  </div>\r\n  <!--Se imprimi la etiqueta del sobre de documentos-->\r\n  <div *ngIf=\"cambiarImpresion\">\r\n    <pn-pop-up-generar-etiqueta-estado [activarSobre]=\"true\" [datosCliente]=\"datosClient\" (vistaPopEstado)=\"mostrarModalEtiquetaCamGenerar($event)\"(folio)=\"recibirFolio($event)\"  [recibirManejo]=\"manejoAScanear\" [valorIndice]=\"i\" [folioTemHie]=\"folioHielera\"></pn-pop-up-generar-etiqueta-estado>\r\n  </div>\r\n  <!--Se imprimi la etiqueta de la bolsa-->\r\n  <div *ngIf=\"etiquetaBolsa\">\r\n    <pn-pop-up-generar-etiqueta-estado [datosCliente]=\"datosClient\" [activarBolsa]=\"true\" (terminarGenerar)=\"mostrarEtiquetaBolsa($event)\"(folio)=\"recibirFolio($event)\"  [recibirManejo]=\"manejoAScanear\" [valorIndice]=\"i\" [folioTemHie]=\"folioHielera\"></pn-pop-up-generar-etiqueta-estado>\r\n  </div>\r\n  <!--Se muestra la etiqueta de la bolsa -->\r\n  <div *ngIf=\"vistaEtiquetaPoPBolsa\">\r\n    <pn-pop-up-informativo [activarBolsa]=\"true\" [activarGenerar]=\"false\" (cambiarVistaGenerar)=\"enviarDatosVisOper($event)\"></pn-pop-up-informativo>\r\n  </div>\r\n  <div *ngIf=\"popScaner\">\r\n    <pn-pop-up-scanear (vistaListaEmbalar)=\"mostrarListaEmbalar($event)\" [valScaner]=\"false\" [mensaje]=\"'Escanea el siguiente QR, por trabajar'\" [recibirManejo]=\"manejoAScanear\" (envioFolio)=\"recibirFolio($event)\"></pn-pop-up-scanear>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.scss":
/***/ (function(module, exports) {

module.exports = ".up{border-left:25px solid #fff;border-top:12.5px solid transparent;border-bottom:12.5px solid transparent;display:-webkit-box;display:-ms-flexbox;display:flex}.vistaEmbalarProductos{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:95%;width:100%;min-width:1800px}.productosAEmbalar{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-width:283px}.iniciarEmbalaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;height:100%;width:100%;order:0;flex:1 1 auto;align-self:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:20px;box-sizing:border-box}.enfoqueSuperior{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.imgEnfoque{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto}.enfoqueInferior{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.grabar{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;padding:10px 10px 10px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#9b9b9b;font-family:\"Roboto\",sans-serif;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;align-items:center;height:100%}.titulo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;margin:5%}.boton{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;margin:5%}.btnGrabar{background-color:#c1292e;color:#fff;border:none;width:240px;height:51px;font-size:30px;padding-left:20px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}h1{font-size:61px;font-weight:bold;color:#008895}.vistaOPeracionEmbalar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.EscaneaCodigo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;border-right:1px solid #eceef0;max-width:329px;padding:17px;-webkit-box-sizing:border-box;box-sizing:border-box}.seccionFD{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;padding:19px;-webkit-box-sizing:border-box;box-sizing:border-box;border-right:1px solid #eceef0}.seccionPackingList{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-width:352px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.video{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:200px;padding:5px 13px 0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.packingList{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;padding-left:20px;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.p{text-align:center;width:100%;height:35%;padding-top:21px;font-size:35px}@media all and (max-height: 1389px)and (min-Height: 1300px){.video{min-height:174px}.packingList{height:58%}}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaEmbalarProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VistaEmbalarProductosComponent = /** @class */ (function () {
    function VistaEmbalarProductosComponent(embalarServices, ComunServices) {
        this.embalarServices = embalarServices;
        this.ComunServices = ComunServices;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambiarVistaGenerar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.EventEmitterEnviar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventActivarPopVistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activarBoton = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activarImprimirGenerar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // Se emite cuado ya se va a imprimir en el clic generar
        this.sobrante = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.videoValido = true;
        this.lista = [];
        this.listaCongelacion = [];
        this.listaRegrigeracion = [];
        this.listaAmbiente = [];
        this.totPzaCongelacion = 0;
        this.totPzaRefrigeracion = 0;
        this.totPzaAmbiente = 0;
        this.vistaEtiquetaPoP = false;
        /*ruta: string = "http://192.168.2.156:8081:8080/SAP/InspeccionOC/videoPartida/"; */
        this.ruta = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
        /*rutaProd: string = "http://192.168.2.156:8080/SAP/InspeccionOC/videoPartida/";*/
        this.rutaProd = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
        /*"http://localhost:4848/glassfish4/glassfish/domains/domain1/docroot/SAP/InspeccionOC/videoPartida/"*/
        this.i = 0;
        this.listaPaking = []; //// Esta variable recupera el valor que manda productos con respecto a lo que se debe mostrar en paking list
        this.listaVideoConge = [];
        this.listaVideoAmbiente = [];
        this.listaVideo = [];
        this.activarFocus = false;
        this.recordedChunks = [];
        this.vistaVideo = true;
    }
    VistaEmbalarProductosComponent.prototype.ngOnInit = function () {
        var usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.idEmpleado = usuario.toString();
        // this.idEmpleado = '54'
        console.log('Soy empleado  convertido<--->', this.idEmpleado);
        this.obtenerFolioPorUsuario(this.idEmpleado);
    };
    VistaEmbalarProductosComponent.prototype.ngOnChanges = function () {
        this.datosClient = this.datosCliente;
        if (this.activarImpresionSobreProd) {
            this.cambiarImpresion = true;
            this.openModal = false;
            console.log('Entre de nuevo --->');
        }
        /*Se manda a llamar al que deitne la camara*/
        if (this.activarPaking) {
            this.save();
        }
    };
    /************************************************************************/
    VistaEmbalarProductosComponent.prototype.ngAfterViewInit = function () {
        // set the initial state of the video
        var video = this.video.nativeElement;
        video.muted = false;
        video.controls = false;
        video.autoplay = true;
        this.startFunction();
    };
    VistaEmbalarProductosComponent.prototype.startFunction = function () {
        var video = document.getElementsByTagName('video')[0];
        if (video) {
            this.mediaConstraints = {
                video: { mandatory: { minWidth: 1480, minHeight: 1024 } }, audio: false
            };
            var that = this;
            navigator.getUserMedia({ video: true, audio: false }, function (stream) {
                that.theStream = stream;
                var video = document.getElementsByTagName('video')[0];
                video.src = window.URL.createObjectURL(stream);
                video.muted = true;
                try {
                    that.mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
                }
                catch (e) {
                    console.error('Exception while creating MediaRecorder: ' + e);
                    return;
                }
                that.theRecorder = that.mediaRecorder;
                console.log(that.recordedChunks);
                that.mediaRecorder.ondataavailable =
                    function (event) { that.recordedChunks.push(event.data); };
                that.mediaRecorder.start(100);
            }, function (error) {
                console.log(error);
            });
        }
    };
    VistaEmbalarProductosComponent.prototype.save = function () {
        var _this = this;
        this.theRecorder.stop();
        this.theStream.getTracks().forEach(function (track) { track.stop(); });
        var blob = new Blob(this.recordedChunks, { type: "video/webm" });
        var url = URL.createObjectURL(blob);
        this.base64(blob).then(function (data) {
            var base = data.split(",");
            //  console.log(base);
            var b64 = base[1];
            //  console.log(b64);
            _this.guardarVideo(b64);
        });
        setTimeout(function () { URL.revokeObjectURL(url); }, 100);
    };
    VistaEmbalarProductosComponent.prototype.base64 = function (blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                resolve(reader.result);
            };
        });
    };
    VistaEmbalarProductosComponent.prototype.guardarVideo = function (obj) {
        var _this = this;
        var datos = {
            video: obj,
            concepto: 'Grabacion Embalar'
        };
        this.embalarServices.guardarVideo(datos).subscribe(function (data) {
            _this.nombreVideo = data.current;
            console.log('Video ===> ', _this.nombreVideo);
        }, function (error) {
            console.log(error);
        });
    };
    /**********************************************/
    VistaEmbalarProductosComponent.prototype.activarPopImp = function (valor) {
        this.activarImprimirGenerar.emit(valor);
    };
    VistaEmbalarProductosComponent.prototype.quitarVistaVideo = function () {
        /* this.listaAmbiente = [{folio:1234}];
         this.listaCongelacion = [];*/
        this.vistaVideo = false;
        // this.vistaEmbalar = true;
        this.i = 1;
        this.event.emit(this.mostrarBotones);
        if (this.listaCongelacion.length > 0) {
            this.tipo = 'Hielera';
            this.manejoAScanear = 'Congelacion';
            this.openModal = true;
            this.popScaner = false;
        }
        else if (this.listaRegrigeracion.length > 0) {
            this.tipo = 'Hielera';
            this.manejoAScanear = 'Refrigeracion';
            this.openModal = true;
            this.popScaner = false;
        }
        else if (this.listaAmbiente.length > 0) {
            /*this.openModal = false;
            this.popScaner = true;*/
            this.tipo = 'Bolsa de tránsito';
            this.manejoAScanear = 'Ambiente';
            this.openModal = true;
        }
    };
    VistaEmbalarProductosComponent.prototype.activarVistaPack = function ($valor) {
        this.eventActivarPopVistaP.emit($valor);
    };
    VistaEmbalarProductosComponent.prototype.recibirFD = function (valor) {
        this.recibirValorFD = valor;
        console.log('Soy valor', valor);
    };
    VistaEmbalarProductosComponent.prototype.recibirTipoEmbajale = function (tipoEmbalaje) {
        this.recibirValorEmbajale = tipoEmbalaje;
        // console.log(tipoEmbalaje);
    };
    VistaEmbalarProductosComponent.prototype.recibirValorB = function (val) {
        // console.log(val);
        this.EventEmitterEnviar.emit(val);
    };
    VistaEmbalarProductosComponent.prototype.recibirDatosPakingList = function (valor) {
        // console.log('Entre al papá :)');
        this.listaPaking = valor;
    };
    VistaEmbalarProductosComponent.prototype.recibirManejoScanear = function (manejo) {
        this.i += 1;
        if (manejo === 'Refrigeracion' || manejo === 'Refrigeración') {
            this.tipo = 'Hielera';
            this.manejoAScanear = manejo;
            this.openModal = true;
        }
        else if (manejo === 'Ambiente') {
            /*this.manejoAScanear = manejo;
            this.popScaner = true;*/
            this.tipo = 'Bolsa de tránsito';
            this.manejoAScanear = manejo;
            this.openModal = true;
        }
    };
    VistaEmbalarProductosComponent.prototype.recibirFolio = function (folioPaking) {
        this.folio = folioPaking;
    };
    VistaEmbalarProductosComponent.prototype.obtenerFolioPorUsuario = function (idEmpleado) {
        var _this = this;
        this.embalarServices.obtenerFolioPorUsuario(idEmpleado).subscribe(function (data) {
            // console.log('Soy data productos por embalar', data.current);
            _this.lista = data.current;
            _this.folioHielera = data.current[0].folioTemporal;
            // console.log('Folio hielera:', this.folioHielera);
            _this.comentariosEntrega = data.current[0].comentariosEntrega;
            _this.lista.forEach(function (element) {
                if (element.manejo === 'Congelacion' || element.manejo === 'Congelación') {
                    _this.listaCongelacion.push(element);
                    _this.totPzaCongelacion += element.piezas;
                }
                else if (element.manejo === 'Refrigeración' || element.manejo === 'Refrigeracion') {
                    _this.listaRegrigeracion.push(element);
                    _this.totPzaRefrigeracion += element.piezas;
                }
                else if (element.manejo === 'Ambiente') {
                    _this.listaAmbiente.push(element);
                    _this.totPzaAmbiente += element.piezas;
                }
            });
            // console.log('congelacion:', this.listaCongelacion, 'Ambiente :', this.listaAmbiente , ' refrigeracion', this.listaRegrigeracion);
            _this.listaTotales = { congelacion: _this.totPzaCongelacion, refrigeracion: _this.totPzaRefrigeracion, ambiente: _this.totPzaAmbiente,
                arrayConge: _this.listaCongelacion, arrayRefri: _this.listaRegrigeracion, arrayAmbiente: _this.listaAmbiente };
        });
    };
    VistaEmbalarProductosComponent.prototype.reproducirVideo = function (nombreVideo) {
        /* this.path = this.ruta + nombreVideo + ".webm";*/
        this.path = this.rutaProd + nombreVideo + ".webm";
        this.video.nativeElement.src = this.path;
        if (nombreVideo !== 'error') {
            this.mensajeVideo = false;
            this.videoValido = true;
        }
        else {
            this.mensajeVideo = true;
            this.videoValido = false;
        }
    };
    VistaEmbalarProductosComponent.prototype.mostrarModalEtiqueta = function (val) {
        // console.log('hola, llegue', val);
        this.enviarTipo = this.manejoAScanear;
        // this.i += 1;
        this.vistaEtiquetaPoP = val;
    };
    VistaEmbalarProductosComponent.prototype.mostrarListaEmbalar = function (val) {
        this.vistaEmbalar = val;
        this.vistaEtiquetaPoP = false;
        this.openModal = false;
        this.popScaner = false;
        this.activarFocus = !this.activarFocus;
    };
    VistaEmbalarProductosComponent.prototype.agregarPaquete = function (manejo) {
        this.i += 1;
        // console.log('Soy popS-->', this.popScaner);
        if (manejo === 'Congelacion' || manejo === 'Refrigeracion') {
            this.tipo = 'Hielera';
            this.openModal = true;
            this.popScaner = false;
            // this.i += 1;
        }
        else if (manejo === 'Ambiente') {
            this.tipo = 'Bolsa de tránsito';
            // this.manejoAScanear = 'Ambiente';
            /*this.popScaner = true;
            this.openModal = false;*/
            this.openModal = true;
        }
    };
    VistaEmbalarProductosComponent.prototype.activacionBoton = function (activado) {
        this.activarBoton.emit(activado);
    };
    VistaEmbalarProductosComponent.prototype.activarBtnMas = function (respuesta) {
        this.openBtnMas = respuesta;
    };
    VistaEmbalarProductosComponent.prototype.enviarBtnDesactivo = function ($tipo) {
        this.desactivarBtn = $tipo;
    };
    VistaEmbalarProductosComponent.prototype.mostrarModalEtiquetaCamGenerar = function (val) {
        // console.log('hola, llegue', val);
        this.vistaEtiquetaPoPGene = val;
        this.botonGenerar = true;
    };
    VistaEmbalarProductosComponent.prototype.mostrarEtiquetaBolsa = function () {
        this.etiquetaBolsa = false;
        this.vistaEtiquetaPoPBolsa = true;
    };
    VistaEmbalarProductosComponent.prototype.enviarDatosVisOper = function ($valor) {
        // this.cambiarVistaGenerar.emit($valor);
        this.cambiarVistaGenerar.emit($valor);
    };
    VistaEmbalarProductosComponent.prototype.activarDatosBolsa = function ($valor) {
        this.vistaEtiquetaPoPGene = false;
        this.botonGenerar = false;
        this.etiquetaBolsa = true;
    };
    VistaEmbalarProductosComponent.prototype.sobrantes = function (estado) {
        this.sobrante.emit(estado);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "cambiarVistaGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "EventEmitterEnviar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "eventActivarPopVistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "activarBoton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "activarImprimirGenerar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaEmbalarProductosComponent.prototype, "datosCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaEmbalarProductosComponent.prototype, "activarEnviarInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaEmbalarProductosComponent.prototype, "estadoVistaUsuario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaEmbalarProductosComponent.prototype, "activarImpresionSobreProd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaEmbalarProductosComponent.prototype, "activarPaking", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEmbalarProductosComponent.prototype, "sobrante", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('video'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaEmbalarProductosComponent.prototype, "video", void 0);
    VistaEmbalarProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-vista-embalar-productos',
            template: __webpack_require__("./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], VistaEmbalarProductosComponent);
    return VistaEmbalarProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaGenerarPackingList\">\r\n\r\n  <!--<pq-escanear-codigo-packing-list *ngIf=\"escanearCodigo\" (event)=\"cambioDeVista($event)\"></pq-escanear-codigo-packing-list>-->\r\n  <pq-bolsa-contenedora-packing-list *ngIf=\"bolsaContenedora\" [valoresCLiente]=\"valorCliente\" (cambiarVista)=\"vistaColectarPartidas($event)\" (cambiarVistaEnvio)=\"vistaEnvio($event)\"></pq-bolsa-contenedora-packing-list>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".vistaGenerarPackingList{height:99%}.btnDireccionPL{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:70px;max-height:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1800px}.btnDireccionPLSnBorde{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:70px;max-height:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1800px}.btnImprimir{width:190px;height:30px;background-color:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaGenerarPackingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VistaGenerarPackingListComponent = /** @class */ (function () {
    function VistaGenerarPackingListComponent() {
        this.vistaColectar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaEnvioVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bolsaContenedora = true;
        this.colorBoton = true;
        this.validacionDeImpresion = true;
        this.btnImprimir = true;
        this.escanearCodigo = true;
        this.mostrarFooter = true;
        // this.footerSBorde = false;
    }
    VistaGenerarPackingListComponent.prototype.ngOnInit = function () {
    };
    VistaGenerarPackingListComponent.prototype.cambioDeVista = function (valor) {
        this.bolsaContenedora = valor;
        console.log(this.bolsaContenedora);
        if (this.bolsaContenedora == false) {
            this.bolsaContenedora = false;
            this.escanearCodigo = true;
        }
        else {
            this.bolsaContenedora = true;
            this.escanearCodigo = false;
            this.mostrarFooter = false;
            // this.footerCBorde = true;
            // this.footerCBorde= false;
        }
    };
    VistaGenerarPackingListComponent.prototype.validarImpresion = function () {
        if (this.validacionDeImpresion === true) {
            this.btnFinalizar = true;
            this.btnImprimir = false;
        }
        else if (this.validacionDeImpresion === false) {
            this.btnFinalizar = false;
            this.colorBoton = false;
        }
    };
    VistaGenerarPackingListComponent.prototype.vistaColectarPartidas = function ($event) {
        this.vistaColectar.emit(true);
    };
    VistaGenerarPackingListComponent.prototype.vistaEnvio = function ($event) {
        this.vistaEnvioVista.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaGenerarPackingListComponent.prototype, "valorCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGenerarPackingListComponent.prototype, "vistaColectar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGenerarPackingListComponent.prototype, "vistaEnvioVista", void 0);
    VistaGenerarPackingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-vista-generar-packing-list',
            template: __webpack_require__("./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VistaGenerarPackingListComponent);
    return VistaGenerarPackingListComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaOperacion\">\r\n    <div class=\"informacionGerneral\">\r\n      <div class=\"informacionOE\">\r\n        <pq-informacion-oe [informacionOe]=\"listaCliente\"></pq-informacion-oe>\r\n      </div>\r\n      <div class=\"barraProgreso\">\r\n        <pq-barra-progreso-embalaje [datosBarra]=\"datosBarraProgreso\" [datosTiempo]=\"tiempoPrioridad\"></pq-barra-progreso-embalaje>\r\n      </div>\r\n      <!--<div class=\"prioridadEmbalaje\">\r\n        <pq-barra-prioridades-embalaje [datosPrioridades]=\"datosPrioridad\"></pq-barra-prioridades-embalaje>\r\n      </div>-->\r\n    </div>\r\n\r\n    <div class=\"barraActividades\">\r\n      <!--<Pq-barra-actividades (verificarSiAvanza)=\"verificarAvance($event)\" (eventCambio)=\"recibeIndex($event)\" [maxItemList]=\"maxItemList\" [clickArrows]=\"clickArrows\" [clickArrows2]=\"clickArrows2\" [actividades]=\"actividades\">\r\n      </Pq-barra-acti>vidades>-->\r\n      <pn-barra-pasos [activarPasos]= \"activarPasos\"[lstItems]=\"pasos\" [blockItems]=\"true\" (eventCambio)=\"vistaSelected($event)\" [blockLeft]=\"bloqueoIzquier\" [blockRight]=\"bloqueoDerecho\" [siguiente]=\"avanzar\" [anterior]=\"regresar\"></pn-barra-pasos>\r\n    </div>\r\n  <div class=\"contenido\">\r\n  <pq-vista-colectar-elementos [partidasPorColectar]=\"listaPartidas\" *ngIf=\"vColectarElementos\"></pq-vista-colectar-elementos>\r\n    <!--Descomentar se omitio parapruebas-->\r\n    <!--<pn-ruta-envio *ngIf=\"vEmbalarProductos\"></pn-ruta-envio>-->\r\n    <pq-vista-embalar-productos *ngIf=\"vEmbalarProductos\" (activarImprimirGenerar)=\"activarImpresionSobreG($event)\" [activarPaking]=\"activarGenerarPaking\" (cambiarVistaGenerar)=\"cambiarAPackingList($event)\" [activarImpresionSobreProd]=\"activarImpresionSobre\" (eventActivarPopVistaP)=\"activarPopPaking($event)\" (event)=\"mostrarBotones($event)\" (activarBoton)=\"recibirActivacionB($event)\" [datosCliente]=\"listaCliente\" [activarEnviarInfo]=\"enviarInfo\" [estadoVistaUsuario]=\"estadoVista\" (sobrante)=\"validarSobrantes($event)\"></pq-vista-embalar-productos> <!--(cambiarVistaGenerar)=\"validarBotonGenerar($event)\"-->\r\n  <pq-vista-generar-packing-list *ngIf=\"vPackingList\" [valorCliente]=\"listaCliente\" (vistaColectar)=\"actualizarVista($event)\" (vistaEnvioVista)=\"cambiaraEnviar($event)\"></pq-vista-generar-packing-list>\r\n   <!--Vista de envio solo para guadalajara-->\r\n    <pn-ruta-envio *ngIf=\"vEnviar\" (informacionDatos)=\"recibirDatos($event)\"></pn-ruta-envio>\r\n    <footer class=\"botonesDireccion\" *ngIf=\"visualizarBotones\">\r\n      <div class=\"modificacionBoton\">\r\n        <a class=\"botonIngresar\" (click)=\"mostrarPopUp()\" *ngIf=\"btnVistaColectar\">COLECTAR</a> <!--(click)=\"cambiarAColectar()\"-->\r\n        <!--<a class=\"botonIngresar\" (click)=\"validarBotonGenerar()\" *ngIf=\"btnVistaEmbalar\" [style.pointer-events] = \"habilitarBoton?'auto':'none'\" [style.background] = \"habilitarBoton?'#008895':'#9B9B9B'\">GENERAR</a>-->\r\n       <!-- <a class=\"botonIngresar\" (click)=\"activarImpresionSobreG()\" *ngIf=\"btnVistaEmbalar\" [style.pointer-events] = \"habilitarBoton?'auto':'none'\" [style.background] = \"habilitarBoton?'#008895':'#9B9B9B'\">GENERAR</a>-->\r\n        <a class=\"botonIngresar\" (click)=\"verificarStock()\" *ngIf=\"btnVistaEmbalar\" [style.pointer-events] = \"habilitarBoton?'auto':'none'\" [style.background] = \"habilitarBoton?'#008895':'#9B9B9B'\">GENERAR</a>\r\n      </div>\r\n      <div *ngIf=\"btnVistaPackingList\">\r\n        <a class=\"botonIngresar\" >IMPRIMIR</a>\r\n      </div>\r\n    </footer>\r\n</div>\r\n</div>\r\n<footer class=\"footer\">\r\n  <div class=\"datosFooter\">\r\n    <div class=\"Prioridad1\">\r\n      <label class=\"p1\">P1</label> Prioridad 1\r\n    </div>\r\n\r\n    <div class=\"Prioridad2\">\r\n      <label class=\"p2\">P2</label> Prioridad 2\r\n    </div>\r\n\r\n    <div class=\"Prioridad3\">\r\n      <label class=\"p3\">P3</label> Prioridad 3\r\n    </div>\r\n\r\n    <div class=\"Ambiente\">\r\n      <img class=\"img\" src='./assets/Images/ambiente.svg' /> Ambiente\r\n    </div>\r\n\r\n    <div class=\"Congelación\">\r\n      <img class=\"img\" src='./assets/Images/congelacion.svg' /> Congelación\r\n    </div>\r\n\r\n    <div class=\"Refrigeración\">\r\n      <img class=\"img\" src='./assets/Images/refrigeracion.svg' /> Refrigeración\r\n    </div>\r\n    <div class=\"Refrigeración\" *ngIf=\"vPackingList\">\r\n      <img class=\"img\" src='./assets/Images/Images/Configuracion/Rutas/ubicacion.svg' /> Ubicaciòn\r\n    </div>\r\n  </div>\r\n</footer>\r\n<div *ngIf=\"activarPopUpPaking\">\r\n <!-- <pn-pop-up-paking-list (cambiarVistaPaking)=\"cambiarAPackingList($event)\"></pn-pop-up-paking-list>-->\r\n  <pn-pop-up-paking-list (cambiarVistaPaking)=\"cerrarPopPaking($event)\"></pn-pop-up-paking-list>\r\n</div>\r\n<!-----------------------------------SECCIÓN DE LOS POP-UP------------------->\r\n<!--<div *ngIf=\"vistaEtiquetaPoP\">\r\n  &lt;!&ndash;<pn-pop-up-informativo  (vistaPopEstado)=\"mostrarModalEtiqueta($event)\" ></pn-pop-up-informativo>&ndash;&gt;\r\n  <pn-pop-up-informativo  (vistaListaEmbalar)=\"mostrarListaEmbalar($event)\"  ></pn-pop-up-informativo>\r\n</div>\r\n<div *ngIf=\"openModal\">\r\n  <pn-pop-up-generar-etiqueta-estado [activarSobre]=\"false\" (vistaPopEstado)=\"mostrarModalEtiqueta($event)\"(folio)=\"recibirFolio($event)\"  [recibirManejo]=\"manejoAScanear\" [valorIndice]=\"i\" [folioTemHie]=\"folioHielera\"></pn-pop-up-generar-etiqueta-estado>\r\n</div>-->\r\n<!--/*****************************************************************/-->\r\n<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpColectarElementos\" >\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\r\n      <span>Colectando en dispositivo móvil\r\n        <span></span>\r\n      </span>\r\n    </div>\r\n    <div class=\"dvBotones\">\r\n      <div class=\"dvBoton\" (click)=\"closePopUp()\">\r\n        Cancelar\r\n      </div>\r\n     <!-- <div class=\"dvBoton\" (click)=\"webSocket()\" style=\"width: 20px; margin-left: 10px;\">\r\n        X\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--/*****************************************************************/-->\r\n<div id=\"popUp\" class=\"popUp\" *ngIf=\"activarAdv\">\r\n  <div class=\"fondo\"></div>\r\n  <div class=\"popContenido\">\r\n    <div class=\"popHeader\">\r\n      <span>PROQUIFA NET</span>\r\n    </div>\r\n    <div class=\"popContenido\">\r\n      <img src=\"assets/Images/alerta.svg\" alt=\"\" class=\"alert\"/>\r\n      <div class=\"informacion\">\r\n          <label>No se han escaneado todos los folios</label>\r\n          <label>¿ Deseas continuar ?</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"dvBotonAdv\">\r\n      <div class=\"dvBoton\" (click)=\"cerrarAdvertencia(false)\">\r\n        <label>Cancelar</label>\r\n      </div>\r\n       <div class=\"dvBoton\" (click)=\"cerrarAdvertencia(true)\">\r\n         <label>Continuar</label>\r\n       </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.scss":
/***/ (function(module, exports) {

module.exports = ".vistaOperacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:1760px}.informacionGerneral{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;border-bottom:1px solid #eceef0;border-top:1px solid #eceef0;height:100%;width:98%;max-height:230px;min-height:230px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:20px;margin-right:20px;min-width:1760px;padding-top:20px;padding-bottom:20px}.informacionOE{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;border-right:1px solid #eceef0;height:100%;width:100%;min-width:446px;max-width:446px;max-height:230px}.barraProgreso{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-height:230px;min-width:908px}.prioridadEmbalaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;border-left:1px solid #eceef0;height:100%;width:100%;min-width:413px;max-width:413px;padding:0px 0 0px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:230px}.contenido{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:68%;width:100%}.barraActividades{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:100%;width:100%;max-height:85px;padding-left:20px;padding-right:20px;padding-top:5px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1800px}.botonesDireccion{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:70px;max-height:70px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1800px}.botonIngresar{width:190px;height:30px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto}.modificacionBoton{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media screen and (min-height: 1440px)and (min-width: 2560px){.contenido{height:66.5%;min-height:738px}.footer{min-width:759px}.vistaOperacion{height:95%}}@media screen and (max-height: 1439px)and (min-height: 1304px){.contenido{height:65%}.footer{min-width:1800px}.vistaOperacion{height:95%}}@media screen and (max-height: 1299px)and (min-height: 1240px){.contenido{height:64%;min-height:715px}}@media screen and (max-height: 1239px)and (min-height: 1100px){.contenido{height:62%;min-height:715px}}@media screen and (max-height: 1309px)and (min-height: 1206px){.vistaOperacion{height:91%}.contenido{height:58%;min-height:450px}}@media screen and (max-height: 1099px)and (min-height: 770px){.contenido{height:61%;min-height:715px}.footer{min-width:1800px}.vistaOperacion{height:95%;min-height:944px}.contenido{min-height:500px}}@media screen and (max-height: 1299px)and (min-height: 1200px){.vistaOperacion{height:100%}.contenido{height:60%;min-height:500px}}@media screen and (width: 2560px)and (max-height: 1330px){.vistaGenerarPackingList{height:91%;overflow:scroll}}@media screen and (min-height: 110px)and (max-height: 1199px){.vistaOperacion{height:100%;max-height:1555px;min-height:990px}.contenido{min-height:549px}}@media screen and (min-height: 1391px)and (max-height: 1418px){.vistaOperacion{height:100%}}#popUp{position:absolute;width:100%;height:100%;left:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.fondo{position:fixed;height:100%;width:100%;left:0;top:0;overflow-y:hidden;background:rgba(204,209,209,.6);z-index:2}#popUp>div.popContenido{max-width:630px;width:630px;height:385px;max-height:385px;position:relative;z-index:9;background:#fff;border:1px solid #008894;border-radius:21px 21px 19px 19px}#popUp>div.popContenido>.popHeader{background-color:#008894;border:1px solid #008894;color:#fff;font-family:Novecento;font-weight:bold;font-size:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:55px;border-radius:20px 20px 0px 0px}#popUp>div.popContenido>.popContenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#popUp>div.popContenido>.popContenido>i{padding:35px;font-size:60px;color:#008a98}#popUp>div.popContenido>.popContenido>span{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}#popUp>div.popContenido>.dvBotones{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}#popUp>div.popContenido>.dvBotones>.dvBoton{width:170px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#008894;color:#fff;font-size:21px;font-family:Novecento;font-weight:bold}#popUp>div.popContenido>.dvBotones>.dvBoton:HOVER{opacity:.9;cursor:pointer}#popUp>div.popContenido>.dvBotones>.dvBoton:ACTIVE{background:#005f67}.footer{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;align-self:auto;border-top:2px solid;width:100%;height:100%;min-height:57px;max-height:57px;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;-webkit-box-sizing:border-box;box-sizing:border-box}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.dvBotonAdv{position:absolute;bottom:25px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;width:100%}.dvBotonAdv>.dvBoton{display:-webkit-box;display:-ms-flexbox;display:flex;width:170px;height:31px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#008a98;cursor:pointer}.dvBotonAdv>.dvBoton>label{font-family:Novecento;font-weight:bold;font-size:20px;color:#fff;text-align:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:4px;cursor:pointer}.dvBotonAdv>.dvBoton:HOVER{opacity:.9;cursor:pointer}.dvBotonAdv>.dvBoton:ACTIVE{background:#005f67}.informacion{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:20px}.informacion>label{font-family:Roboto,sans-serif;font-size:25px;font-weight:bold}.img,.p1,.p2,.p3{margin-right:6px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}"

/***/ }),

/***/ "./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaOperacionEmbalajeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stompjs__ = __webpack_require__("./node_modules/stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sockjs_client__ = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**WEB Socket**/



var VistaOperacionEmbalajeComponent = /** @class */ (function () {
    function VistaOperacionEmbalajeComponent(embalarServices, coreComponent, embalarServicesAgregar, embalarServicesEstado) {
        this.embalarServices = embalarServices;
        this.coreComponent = coreComponent;
        this.embalarServicesAgregar = embalarServicesAgregar;
        this.embalarServicesEstado = embalarServicesEstado;
        this.actividades = ["COLECTAR ELEMENTOS", "EMBALAR PRODUCTOS", "GENERAR PACKING LIST"];
        // actividades: any [] = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
        this.EventEmiterCambioFooter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarTotales = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaInicialI = true;
        this.cambioFooter = false;
        this.cambioDeFooter = false;
        this.pasos = [
            "1.COLECTAR ELEMENTOS",
            "2.EMBALAR PRODUCTOS",
            "3.GENERAR PL"
        ];
        this.vistaSeleccionada = "1.COLECTAR ELEMENTOS";
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = true;
        this.partidaEmbalaje = new __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.serverUrl = 'http://187.189.39.53:10080/WebSocket/ws';
        this.arrayidPedidos = new Array();
        this.vColectarElementos = true;
        this.btnVistaColectar = true;
        this.visualizarBotones = true;
        this.popUpColectarElementos = false;
        this.initializeWebSocketConnection();
    }
    VistaOperacionEmbalajeComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_6_sockjs_client__(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_5_stompjs__["over"](ws);
        var that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe("/topic/public", function (message) {
                if (message.body) {
                    console.log("MENSAJE DE WEBSOCKET");
                    console.log(message.body);
                    if (message.body) {
                        var data = JSON.parse(message.body);
                        if (data.type === 'APP') {
                            if (data.data.idUsuario === __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado()) {
                                that.cambiarAColectar();
                            }
                        }
                    }
                }
            });
        });
    };
    VistaOperacionEmbalajeComponent.prototype.sendMessage = function (message) {
        this.stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
    };
    VistaOperacionEmbalajeComponent.prototype.ngOnInit = function () {
        this.usuario = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        // this.usuario = 54;
        this.consultarEstado();
        this.obtenerPartidaEmbalaje();
        console.log('Soy usuario=>', this.usuario);
        /// this.usuarioE = 159; /// Se adquiere el id del usuario
        // console.log('usuario::', this.usuarioE);
    };
    /* consultarEstadoP (idEmpleado: any) {
       this.embalarServicesEstado.consultarEstado(idEmpleado).subscribe(
         data  => {
           console.log('Soy data estado-->', data.current);
           this.estadoVista = data.current;
         });
     }*/
    VistaOperacionEmbalajeComponent.prototype.consultarEstado = function () {
        var _this = this;
        this.activarPasos = false;
        /* this.consultarEstadoP (this.usuario);*/
        this.estadoV = this.estadoVista;
        console.log('Entre  VISTA OPERACION-->', this.estadoV);
        if (this.estadoV === 'Registro') {
            this.registrarEmbalarPedido(this.usuario);
        }
        else if (this.estadoV === 'Por Colectar') {
            this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: this.estadoV };
            this.colectarPartidas(this.objetoColecta);
            this.popUpColectarElementos = true;
            this.vColectarElementos = false;
            this.vEmbalarProductos = true;
            this.vColectarElementos = false;
            this.btnVistaColectar = false;
            this.btnVistaEmbalar = false;
            this.bloqueoIzquier = true;
            this.bloqueoDerecho = false;
            this.avanzar = true;
            this.avanzar = false;
            this.regresar = false;
            /*setTimeout(() => {
              this.avanzarS();
            }, 500);*/
            // this.avanzarS();
        }
        else if (this.estadoV === 'Generar' || this.estadoV === "generar") {
            this.avanzar = false;
            setTimeout(function () {
                _this.avanzarS();
                _this.avanzar = false;
            }, 500);
            //  this.avanzar = false;
            this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: 'Por Colectar' };
            this.colectarPartidas(this.objetoColecta);
            this.vEmbalarProductos = false;
            this.vPackingList = true;
            this.btnVistaEmbalar = false;
            this.visualizarBotones = false;
            this.vColectarElementos = false;
            // Se asignan los valores para que pueda avanzar la barra azul
            this.bloqueoIzquier = true;
            this.bloqueoDerecho = false;
            this.avanzar = true;
            this.regresar = true;
            // Cambiar la variable para cambiar el footer
            this.cambioDeFooter = true;
            this.activarPopUpPaking = false;
            this.EventEmiterCambioFooter.emit(this.cambioDeFooter);
        }
        else if (this.estadoV === 'Por Embalar' || this.estadoV === 'Por embalar') {
            this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: 'Por Colectar' };
            this.colectarPartidas(this.objetoColecta);
            this.visualizarBotones = true;
            this.btnVistaColectar = true;
            this.vColectarElementos = true;
            this.vEmbalarProductos = false;
            this.vPackingList = false;
            if (this.regresarView === true) {
                this.regresar = true;
                this.bloqueoIzquier = false;
                setTimeout(function () {
                    _this.avanzar = false;
                    _this.regresar = false;
                    _this.regresarA();
                    _this.regresar = true;
                    _this.bloqueoIzquier = false;
                }, 500);
            }
            else {
                this.avanzar = false;
                this.regresar = false;
            }
        }
        else if (this.estadoV === 'A Embalar' || this.estadoV === ' A embalar') {
            this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: this.estadoV };
            this.colectarPartidas(this.objetoColecta);
            this.popUpColectarElementos = false;
            this.vColectarElementos = false;
            this.vEmbalarProductos = true;
            this.btnVistaColectar = false;
            this.btnVistaEmbalar = false;
            this.bloqueoIzquier = true;
            this.bloqueoDerecho = false;
            this.avanzar = true;
            this.avanzar = false;
            this.regresar = false;
        }
        else if (this.estadoV === 'GDLEnvio') {
            this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: 'A Embalar' };
            this.colectarPartidas(this.objetoColecta);
            this.activarPasos = true;
            this.bloqueoIzquier = true;
            this.bloqueoDerecho = false;
            this.avanzar = true;
            setTimeout(function () {
                _this.activarPasos = false;
                _this.avanzar = false;
                _this.bloqueoIzquier = false;
            }, 500);
            setTimeout(function () {
                _this.activarPasos = true;
                _this.bloqueoIzquier = true;
                _this.bloqueoDerecho = false;
                _this.avanzar = true;
            }, 500);
            this.popUpColectarElementos = false;
            this.vColectarElementos = false;
            this.vEmbalarProductos = false;
            this.btnVistaColectar = false;
            this.btnVistaEmbalar = false;
            this.vEnviar = true;
        }
    };
    ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
    VistaOperacionEmbalajeComponent.prototype.registrarEmbalarPedido = function (idEmpleado) {
        this.objetoColecta = { idUsuarioLogueado: this.usuario, estado: 'Por colectar' };
        this.colectarPartidas(this.objetoColecta);
        this.vColectarElementos = true;
        this.vEmbalarProductos = false;
        this.vPackingList = false;
        this.avanzar = true;
        this.regresar = false;
    };
    VistaOperacionEmbalajeComponent.prototype.regresarA = function () {
        var _this = this;
        setTimeout(function () {
            _this.regresar = true;
            _this.bloqueoIzquier = false;
        }, 500);
    };
    VistaOperacionEmbalajeComponent.prototype.avanzarS = function () {
        this.avanzar = true;
    };
    VistaOperacionEmbalajeComponent.prototype.colectarPartidas = function (objetoColectar) {
        var _this = this;
        this.coreComponent.openModal(1);
        this.embalarServices.colectarPartidas(objetoColectar).subscribe(function (data) {
            debugger;
            _this.avanzar = true;
            // console.log('Soy data colectar Partidas', data.current);
            _this.listaCliente = data.current.Cliente;
            _this.listaPartidas = data.current.Cantidades;
            _this.tiempoPrioridad = data.current.TiempoPrioridad;
            _this.coreComponent.closeModal(1);
        }, function (error) {
            console.log("error embalar");
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(1);
        });
    };
    VistaOperacionEmbalajeComponent.prototype.cambiarAColectar = function () {
        this.popUpColectarElementos = false;
        this.vColectarElementos = false;
        this.vEmbalarProductos = true;
        this.btnVistaColectar = false;
        this.btnVistaEmbalar = false;
        console.log('avanzar');
        // this.clickArrows2 = !this.clickArrows2;
        // Se asignan los valores para que pueda avanzar la barra azul
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = false;
        this.avanzar = true;
        this.regresar = false;
        console.log(this.avanzar, this.bloqueoIzquier);
    };
    VistaOperacionEmbalajeComponent.prototype.mostrarPopUp = function () {
        this.popUpColectarElementos = true;
        this.vColectarElementos = true;
        this.vEmbalarProductos = false;
        this.btnVistaColectar = true;
        this.btnVistaEmbalar = false;
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = false;
        this.avanzar = false;
        this.regresar = false;
        this.actualizarEstado();
    };
    VistaOperacionEmbalajeComponent.prototype.actualizarEstado = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__["a" /* Parametros */]();
        parametros.estado = 'Por Colectar';
        parametros.idUsuarioLogueado = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.embalarServices.actualizarEstado(parametros).subscribe(function (data) {
            if (data && data.current) {
                var chatMessage = {
                    type: 'DESKTOP',
                    data: {
                        idUsuario: __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado(),
                        mensaje: "Por Colectar"
                    }
                };
                _this.sendMessage(chatMessage);
            }
        });
    };
    VistaOperacionEmbalajeComponent.prototype.actualizarEstadoV = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__["a" /* Parametros */]();
        parametros.estado = 'A Embalar';
        parametros.idUsuarioLogueado = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.embalarServices.actualizarEstado(parametros).subscribe(function (data) {
            if (data && data.current) {
                var chatMessage = {
                    type: 'DESKTOP',
                    data: {
                        idUsuario: __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado(),
                        mensaje: "A Embalar"
                    }
                };
                _this.sendMessage(chatMessage);
            }
        });
    };
    VistaOperacionEmbalajeComponent.prototype.closePopUp = function () {
        this.popUpColectarElementos = false;
        this.vColectarElementos = true;
        this.vEmbalarProductos = false;
        this.btnVistaColectar = true;
        this.btnVistaEmbalar = false;
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = true;
        this.avanzar = false;
        this.regresar = false;
    };
    VistaOperacionEmbalajeComponent.prototype.webSocket = function () {
        __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var chatMessage = {
            type: 'APP',
            data: {
                idUsuario: __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado(),
                mensaje: "A Embalar"
            }
        };
        this.sendMessage(chatMessage);
        this.actualizarEstadoV();
    };
    VistaOperacionEmbalajeComponent.prototype.mostrarBotones = function (valor) {
        this.mostrarBoton = valor;
        console.log("valor: " + this.mostrarBoton);
        if (this.mostrarBoton = false) {
            console.log("valor: false");
        }
        else {
            this.btnVistaEmbalar = true;
        }
    };
    VistaOperacionEmbalajeComponent.prototype.cerrarPopPaking = function (val) {
        this.activarPopUpPaking = false;
    };
    VistaOperacionEmbalajeComponent.prototype.cambiarAPackingList = function (val) {
        this.vEmbalarProductos = false;
        this.vPackingList = true;
        this.vistaInicialI = false;
        this.btnVistaEmbalar = false;
        this.visualizarBotones = false;
        // Se asignan los valores para que pueda avanzar la barra azul
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = false;
        this.avanzar = true;
        this.regresar = true;
        // Cambiar la variable para cambiar el footer
        this.cambioDeFooter = true;
        this.EventEmiterCambioFooter.emit(this.cambioDeFooter);
    };
    VistaOperacionEmbalajeComponent.prototype.activarPopPaking = function ($val) {
        this.activarPopUpPaking = $val;
    };
    VistaOperacionEmbalajeComponent.prototype.validarBotonGenerar = function ($valor) {
        this.enviarInfo = true;
    };
    VistaOperacionEmbalajeComponent.prototype.activarImpresionSobreG = function (val) {
        this.activarImpresionSobre = true;
    };
    // DOCS: SE MANDA A LLAMAR CUANDO LE DA AL BOTON GENERAR,
    // ANTES SE MANDABA A LLAMAR AL METODO "verificarGenFactura"
    VistaOperacionEmbalajeComponent.prototype.verificarStock = function () {
        var _this = this;
        var idUser = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.embalarServices.validateStock(idUser).subscribe(function (data) {
            if (data && data.current) {
                _this.generarEtiquetaStock();
            }
            _this.verificarGenFactura();
        }, function (error) {
            console.log("Error al verificar Stock");
        });
    };
    //DOCS: SE MANDA A LLAMAR UNA VEZ QUE SE VALIDA SI HAY ETIQUETA PARA EL STOCK
    VistaOperacionEmbalajeComponent.prototype.verificarGenFactura = function () {
        if (this.sobrante) {
            this.activarAdv = true;
        }
        else if (!this.sobrante) {
            this.activarGenerarPaking = true;
        }
    };
    VistaOperacionEmbalajeComponent.prototype.verificarAvance = function (valor) {
        this.clickArrows2 = !this.clickArrows2;
        this.maxItemList = valor;
    };
    VistaOperacionEmbalajeComponent.prototype.recibeIndex = function (indexActual) {
        this.indexBarraActividades = indexActual;
        console.log("this.index: " + this.indexBarraActividades);
        if (indexActual == 1) {
            this.maxItemList = 1;
            this.cambiarAColectar();
        }
        else if (this.indexBarraActividades == 2) {
            this.maxItemList = 2;
            // this.cambiarAPackingList();
        }
        //   } else {
        //       if((this.contDespachable == undefined || this.contDespachable == 0) && (this.contIncidencia == undefined || this.contIncidencia == 0)){
        //       this.regresar();
        //       }
        //         else{
        //         if (this.indexBarraActividades == 2 && this.confirmacion == false ) {
        //       if (this.recibePzas > this.recibeTotalPzas) {
        //         this.avanzarSimple();
        //         this.confirmacion = true;
        //       } else {
        //          // this.abrirPop();
        //          // this.regresar();
        //       }
        //     }
        //   }
        // }
    };
    VistaOperacionEmbalajeComponent.prototype.obtenerPartidaEmbalaje = function () {
        /// console.log("Entro a vista operacion");
        // this.partidaEmbalaje;
        /// console.log(this.partidaEmbalaje);
    };
    VistaOperacionEmbalajeComponent.prototype.vistaSelected = function (event) {
        this.vistaSeleccionada = event;
        // if (event == "COTIZAR" && this.lstProductos.length == 0) {
        // let param: Parametros = new Parametros();
        // param.idCliente = 28;
        // param.nivelCliente = "AA";
        // this.coreComponent.openModal(0);
        // }
    };
    VistaOperacionEmbalajeComponent.prototype.HabilitarBotonGenerar = function (valor) {
        this.habilitarBoton = valor;
        console.log(this.habilitarBoton);
    };
    VistaOperacionEmbalajeComponent.prototype.recibirActivacionB = function (activar) {
        this.habilitarBoton = activar;
    };
    VistaOperacionEmbalajeComponent.prototype.regresarVistaP = function (activar) {
        this.vistaPrincipal.emit(activar);
    };
    VistaOperacionEmbalajeComponent.prototype.actualizarVista = function ($estado) {
        this.activarGenerarPaking = false;
        this.activarPopUpPaking = false;
        this.activarImpresionSobre = false;
        this.visualizarBotones = true;
        this.btnVistaColectar = true;
        this.vPackingList = false;
        this.regresarView = $estado;
        // this.vColectarElementos = true;
        this.estadoVista = 'Por embalar';
        this.actualizarTotales.emit(true);
        this.consultarEstado();
    };
    VistaOperacionEmbalajeComponent.prototype.cambiaraEnviar = function ($event) {
        this.actualizarTotales.emit(true);
        this.vEmbalarProductos = false;
        this.vPackingList = false;
        this.vEnviar = true;
    };
    VistaOperacionEmbalajeComponent.prototype.recibirDatos = function (datos) {
        this.listaCliente = datos;
    };
    VistaOperacionEmbalajeComponent.prototype.nombreVideo = function (nombre) {
        this.nombreVid = nombre;
    };
    VistaOperacionEmbalajeComponent.prototype.validarSobrantes = function (estado) {
        this.sobrante = estado;
    };
    VistaOperacionEmbalajeComponent.prototype.cerrarAdvertencia = function ($event) {
        this.activarAdv = false;
        if ($event) {
            this.activarGenerarPaking = true;
        }
        else {
            document.getElementById('elementoText').focus();
        }
    };
    // TODO: METODO PARA GENERAR LA ETIQUETA IMPRESA CUANDO EL PEDIDO TENGA PARTIDAS SON DE STOCK
    VistaOperacionEmbalajeComponent.prototype.generarEtiquetaStock = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado());
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 288, height: 216 });
        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAAEuCAYAAACAv9lxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZKSURBVHgB7d39ddTG28Zx+Tn8n3SQpAJCBYQKgAqACiAVhFRAUoGTChwqcKjAoQLHFTiuYJ+99sdthkVaSfdoJM2t7+ecPXlZr951aTSjGZ3t9hoAQFj/1wAAQiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgnvQZDg7O2sAAOXlDEtGiR4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4Agst6jr4Pr6MFgGFK9kuiRA8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwT1oKvDkyZPO73788cfmxYsXh3+af/75p/n55587f/Ptt982z549ax4/ftx8//33rX/z+++/N3/99ddhWv/999/hN5rHy5cvD/Pr+vuuZbTlPPbq1avm33//PUz/4uLiq++1HloGuby8/Op7fad5//3334fp2PzevHnzxfz6tknqp59+an755Zcvfvvnn38e1i+dhz76u65t2LWubTStp0+fHuad0rZ//vx5M0Tb9gGwt8ugn5/6TKVvPvr89ttv93+/P+EH/WYfULvr6+sv5qX/3ofO6N/tLwC989tfXHa3t7df/E7Tsmm22Qdf5/bUOvctp81v6DbRR+sydB76vH37djeEreuYaWk7D11uoGYlj+8qSvRGJUeVqEUlPZU0VZKVfUAcSrAqGadUQkxLifqdlUz1UWn43bt399+r9GglaE3r9evXh/nqd/pb+53uMq6urr6an6g0rf+v3+hvNT39U/PVtNL5ef3xxx+H+dhyars8fPjwq+VUKVp3CpqvtpHRd5pG2zbSdETLa/Owv7O7hA8fPtz/XtO1bTWE/tama9vI7oZOTSvd/wBG2GVoZiph2fRUuj2WlqT3wXP4f2npta20mZYS05L0+fl5a2k4pVJ527TT5Wi7S0hLs/sLxP133hJ91/RsfvuwvP++bT36ttHxPPYXp6++13zte82vbT5t02tbV03LljmdVrqv2vY/EEXJPK2+MVb17Kar/vdYWqeclshVD232od9aWtf/N1aiHTK/tGT8/v37JkdaH68Sbto+YfPTXYM+XXcdY+ahkny6/MbaAkQl85z1svYPm5bdVQHIV1XVTZs0XKzK4RSr2jDHjbiiYDxuFDTWKGvVMdZQ20cNjRaKuSH28ePH+3/vWs7cKo50Hmq47qL57+vxD/+u9WprcB4q3X+qGjpet7S66Zg1DgP4WlVBryBRnXP63xaaKsW2neiq803rplP6Tfp0iUJb+gLDgt5+M7bEbPPxSu9cvvvuu6aEdBlPXUDT73LXK73TapuWtTm00T4m6IF2VQW9Tv62Ep2CVtUUQx/z09+p5KlSb9tv+gIrN9Bqc2p9S22LtulqP3ddVL/55psGQLuqgt6qTYxCWiXarsAWVZeo2kSlQT1Hnpbaj3+TPilzShpCQ0vzUwZiOs+bm5uma36euvkx87D5tP3G4+7u7v7f2/an9hnPygPjVdUYaye6fdQwqlv2UyV5q2/XxcA6JFkVwHFduV1EFF722OYx/da+03yHhlsalmOqGCxI0/mkDdBd9f26qP3www+H9fRcZNIqma6OYJI2YA9pIzkl3ea50wLw2aaGQEifHrEel2kIpo2Oaek/lfYu7WoIbZO2E6QNlhb66QXE2LPwkl7M9BsLflVlHd+B2LSs8dIT9Fo3m4emlQa60UUmrUobsz2Opc/Sn2oMBzBe9U/djKXG1+MOU9YgqwDWEyTWyenRo0eHgFb1kP6fwi4tzacNuSk9CWR1xirJ6zdW8j5+HFKBZgGn0nc6Py1bWwOxglDztouROm/Z7/S0jK2DzW9o20XbtrILm6aj9dA20jxtPunfDp1P2tai6prjC5I6S7XdKZ166ka0Lb3rCoS2y9CsoMNUm77OQMfDAaQdnI47NzUdQwscd1IaMgSChlY47kyljkGeIRdkH6698+vqxDSkw9SQeeizD+bdEEOGQNhfSL74zZghEKzDHFCjvuM7RxUleiulDa0P19/Zb9qexrBBu6w64tdff73vCKXfqZORSo76Pq0Dt6d1bIiDlObTVZq0Abvanm3XdNTeoGVIBw2z7/QbG4bhmLVPpHcafcuZTvvUNkrnoSotLZ/mkbYZ2KBmQ6tZTpW2bXiFtmkNLaXz5A3Q7uzTlcT347Ozk99nTHo1FGz2BEvuUyVj5idjqyFsFMySy9nWZgAgX8k8JegBYAVK5ikvHgGA4Ah6AAiOoAeA4Ah6AAiOoAeA4DbRM1bPwmt8c+sNezxwmT2SqEcG9dE4K+kQAFg3e1GJeuvay9xtPxt7HNSGs9Y+ToeSqJkN1631P3V8W98HW3cekd2OsI9X2vgs6oTkHTnS3qCkQcTmPCk09EE6vMDaqcPX3KGhfWr7t2sAuiFswLu593GuqY5vrX9Xh7w5pe9qHkPDk596Mc5Q2p5d7zo4RdttqhFVi+bpLkNTsMuul7r2p+9ZneqjIQ7ahiEoQUMSTL38JT9zbRfRkA7aPuk7caf4aHpz7mMvvdd4yFASaz6+23jP2amGvfDOX/tjKn3zypr2LkPJBRtLB2mJgE8/OsH2Je1daQR9O237qQO+bR+vccycOY5vfU6Ne1TSkkF/PPbVmGNlSn3zy5r2LkPJBRtDO6p0AKSffXXOriSC/ksqxc8RculHJdyuAeHmpjCb8/juGkSvpCWDfsiAhG2fKUvz0je/rGnvMpRcsKG0o+c6AdLPqZEhcxH0nw0ZTbTGfTyU7mKWWPe5w36poB8zOurx9pla3zxzVP14pRpv2kaEnGve6UtIMD0ba7/v1Y6laB9r/ku9I1gNrfainLlpmy+57nPRqKweXe+iWKtqg14Holrql6ShjPWEDMrQhXSpkDcKe28Y5LDXXS5pDedYSX0vsumiJ22WKmB6VRv0OvmWDgFRiWsNyxGNTkDPSViCHnXNeYTTYy2laa131MLMVkrzUmXQH7+rdGlLl7yi0YVziVL0Kd6XrHu0vQd4SXr5TLQqnC2V5qXKoF9b3bhKPXOX+CJTR6C13SXZO3znsLaLnEI+Wql+S6V5qS7odcKtMVTttYTIt6a7tdQcvZX1Yvk1VgVq3aOU6r0ZUmtpXqoL+rWWLHK6ouOztVVbpLR/Sxcy1nqRs/GEIjh+N/NQtZbmpbqgzz3RNLbHxcVFc319fRg7Qp/b29vDeBU5V2udCCqNIU/uNlSpS+OfpPtXH73wXS+Azx3TpeSdm44hhVAOHd9az6mPb4ly1+opLNZcmj/YZWgKPuDfxtu5wT77K3LvPPaB4O6FWLrH7BBLjxmSK6cH6OvXr3s7OOn7Fy9euOeh5SvF2xXfPvsLXO88cjqglVz3uY5b9Wb1zGfqXrBt+pYha9q7DCUXrM2+tOM+CYaEvFnL2BceNQd9TtA9e/Zs1LxyhlQo1WNUBYU5jm8tv/eCWmrd5zpuPRe5uc7rvuXIUVXVjbfaZuxtl25/9RnreAx0jKPx1L1UXTNGTn2r3m1QgrcOXMe3HoEc8/feHrel1n0O3vaf/R1gU7uqgt57Iii0x9bNencunaf8vNvOs3+9F3Mp1SjpXX9PaGsMeo+aj2/PI5XV181/UlXQe0vLT58+bcbyhgBB7+cNUO+LJ/TiDY9Sd23eY0dvjBrL3jY1Vq3Hd05pPsKbuKoKeu9B5nldnHau53d3d3cNfLwB6gm6nN+VCLucaXoLJVsKes8TQ1FK87KJEr33iuwJekr0fnO3b3iPixL72LvuOe+89ax/jW1Q3p7rUUrzUvUwxaXxcvB5eQM0wsm4RNB71Bj0W66bNwT9CQQ9UDfvcAeeBv41I+gBhLW1wcu6bCLoo4zRAWA471DEqrKJVJqXB01FVJXiqSO8ublpPNQYM/aJhsePHzcAlkdp/rNNBL0GivJ0EInUGANsCaX5L1VVdePt4KKqG4YmALaD0vyXqgp675VWIc+LQYBtoDT/taqC3tuTUeZ4OxCA5XkLdVFL81JV0HvHNJE53/kJYBm6e6c0/7XqGmNVT+99XFJDuepJGjpCAf97QmzM8May9nNni68JHKKqoBeV6r1Br6v9q1evDq8SBLYuZ6jmtfI0wkYvzUt1HaY8Qw6ndMWnCgeIxzsUcfTSvFQX9Kq6yS2F6EUNuS8ZB7AulOa7VTkEwhRX4OfPnzOkMBAEpfnTqgz6KeoWVV//5MkTwh4IgNL8adUOajbFlVghT9gDdXv//j2l+R7VBr1K9DnP1RvCHqibpzPklkrzUvUwxefn55M812thz3DGQF28rwncUmleqg56hbzCfgoW9jyNA9RDj0uPtbXSvFT/4hFV3+hxySlYAy0DoAF18IxKu7WQlxBvmHr37t2kPfx0xfcOcwpg3bY4wGGYVwlqWIMpr9QaA4SwB+LRXcDWqmjDBL3q6y8vLwl7AL22dl6Hejm4Qp6wB9Bna2+dCxX0QtgD6KOQ39LghuGCXgh7AH08j2bWKmTQS6mwZ4hjIAZV32ylUTZs0EuJsGeIYyAOjZOzBaGDXizsNY79VBjiGIhBwxtvoVE2fNCLhf0Ug6CJDgyF/ZZa7YGIdA5voSf8JoJe9Jy9OlXp5eBTUP0ejbNA/bbQKLuZoDe6VZtq5Dp1paa+HqibdwTMmmwu6EVPz0wV9pTqgfpFb5TdZNDLVGGvkgCjXQLr4G2Hi94ou9mgF4X9FHX2mg6A5XlHso3eKPug2ThdyW9ubrLq6PSopX4/5VDJQGk6Zj98+DDqN3qo4fXr180a6Q5dT9hp+Tznsxpl17puuTYf9KKncR49epT1bLzq6gl61EQhP/Zu1IJ0bbRceo+E6DzUBWlsVYw1ykY8jzdddWPs0cscOkB4rh5YhqpgrQe8zmcL/bGiNsoS9J+o52xuXTuNssD8FPDH5+7Tp08bj6iNsgR9wur4vHimHphf29Nzqn6hUfYzgv7I+fl540XQA/NK6+aPeR+1jNhTtprGWF1p53jju0oBqsbREAdjafnUoLvFt8wDS9Bosl1Ub68qHU+jrM7/KQdCXFo1Qa+r7KtXr0b9RoF7fX3djKWSgCfoRb8j6IF5qOH11HcKa8+dthplIwU9VTctcjpR6Zl8AOvg7f2ucawiNcoS9C1UIveWyhmnHlgPe6Z+LIV8pDY3gr6Dt9MEz9ID63KqHv+USK8NJeg7eEoBANbH25M3UidIgr4DQQ/EoHPZe4cepVRP0AMIz/uAhRplIwgd9NSX18XbAB5hP9fySG6td7p6ZHrLjbLhg94bAt7fUeUzP++TTnd3d43HmkI55ykvz29rPb5zBjqL8Ba5aoLe23nBeyJ4O0wR9H7eAPX2XVjTPs65eHjXY0tBL96BziI0ylYT9N4DzDvsqPd27eHDhw18vGHnHZvEu49Llei90x378hDxVknU3OvbO9CZ1N4oW03Q6wDzhL0nBDRUqRfDH/h579pUoh1b4rK3gnmUupjPeaHzXhwfP37c1Mwb9LU3ylZVR+8JAoXAmKuxAiCnTi7S+Bhz8waoQn7sPlvjPvZOVxesuY7x2gsy3mfqq2+U3WXQz099pvbmzZveeXZ99lfk3ulfX1/v9iebex770sJuaVoGz7Lv72J2S7u9vd3t79rc2//t27eD5qO/885Dy1fKvpTtXq45jvGS6z7nceudV+nzu2/+WdPeZSi5YG0uLy+zToRnz57tLi4uDoFi9O9XV1eHkz8nZIaeaKXVHPTiXf70ZNRxckz7Wf8/d/o6hkrRMuYsmz4vX75sPca17rnHeMl1n/O4zcmRdLtOrW/eWdPeZSi5YF1yw7jkR6WlpdUe9LpYTrU/9tUM95+ppnl+fr4rKfdCVPJTct3nPm69OTL0rtGjb945qnuO3jtAUWmqX6UhNp96ME71CJ/qou0zhVNvM5qKtw65NO0T7xub1sibI7U2ylYX9DljxZe01hO0NgqUtV7M5zj2vMPqlubtWbpW3n1Za6NsdUE/R6lqrDUuU8100VxbqMy1j9d6ofO+wGOttD+39Ex9lUMg6KBbUxBEOwmWpn27tm2q5Zmram7OeQ2xtuWZircqqsaeslUGvQ66tQSBSnmU5qenUq23xDU1BcLc+3jf8Nmsgc41vWA7Im97kEK+tlJ9tYOaKQiWvsXVSfDu3bsGZSjsli5JLrWPdZFb+tjSul9eXjZR5Qx05u1ZvJSqR6/UibBU46ydBAxiVo5t46XCfun5qyCz1J2rjuuLi4vwT5J5BzpTj/uaGmWrH6ZY49LMXbLXo5RLBsCWLBW2a9nHqjaZO+xtm29hOA/dOXnX0ztg4hJCjEevkr0+c5yUeiLk6uqKkJ+RtrW2+VwX9LXtY4X9XBcdBZ/WfUtjNnkbZVXIrKZRdpehKdiTy0M9U9UFvGmayT9dXevXpvaesX20j0v1HtV0NRzGWqn7/b50P2lP37Uc30setzlDT0w57EnfvLKmvctQcsFyKAymOCHUTVoDqdUQ8CZ60Bu7qE+1j9cc8Me07hqOIPeCp3XXNlzD8b30cbuGgc765pXj7NMMXM7Ozk5+nzHpydi44x8/frwft1z/L73lUsOTfXTLquFyc+ruMC9rGNObpvTvtn/b9rH2qf4ZZR9rXbXOevlI1/Et9j4HO771T9sWWIeSeRo+6AGgBiXzNPTLwQEABD0AhEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABPegKejs7KwBACyLEj0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABJf1HP1ut2sAAOtGiR4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4Agvt/Rz8Y0WO346IAAAAASUVORK5CYII=';
        var html = [
            '\n' +
                '     <html><head>\n' +
                '        <style>\n' +
                '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
                '            html, body {\n' +
                '                width: 100%;\n' +
                '            }\n' +
                '            \n' +
                '            body {\n' +
                '                background: #cafe00;\n' +
                '            }\n' +
                '\n' +
                '            .contenido {\n' +
                '                display: flex;\n' +
                '                justify-content: center;\n' +
                '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
                '            }\n' +
                '\n' +
                '        </style></head>\n' +
                '        <body> \n' +
                '            <div class=\'contenido\' >\n' +
                '<div>',
            '<img style=\'width: 9cm; height:6cm;\' ',
            'src=\'' + base64 + '\'>',
            '</div>',
            '            </div>\n' +
                '        \n' +
                '        </body></html>'
        ].join('');
        newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
        newWin.hide();
        newWin.webContents.on('did-finish-load', function () {
            var prints = newWin.webContents.getPrinters();
            var impresora = '';
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description == 'ZebraTicket') {
                    impresora = print_1.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionEmbalajeComponent.prototype, "EventEmiterCambioFooter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionEmbalajeComponent.prototype, "vistaPrincipal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionEmbalajeComponent.prototype, "actualizarTotales", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaOperacionEmbalajeComponent.prototype, "vistaInicial", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaOperacionEmbalajeComponent.prototype, "datosBarraProgreso", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaOperacionEmbalajeComponent.prototype, "datosPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaOperacionEmbalajeComponent.prototype, "estadoVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], VistaOperacionEmbalajeComponent.prototype, "partidaEmbalaje", void 0);
    VistaOperacionEmbalajeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-vista-operacion-embalaje',
            template: __webpack_require__("./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_1__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], VistaOperacionEmbalajeComponent);
    return VistaOperacionEmbalajeComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/embalar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbalarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__embalar_component__ = __webpack_require__("./src/app/components/embalar/embalar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmbalarRoutingModule = /** @class */ (function () {
    function EmbalarRoutingModule() {
    }
    EmbalarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__embalar_component__["a" /* EmbalarComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EmbalarRoutingModule);
    return EmbalarRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/embalar/embalar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"seccionEmbalar\">\r\n  <div class=\"aux\" *ngIf=\"true\" style=\"position:relative;display:flex;background: #E6E6E6;\">\r\n    <!-- <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\"> -->\r\n    <!-- <aside [ngClass]=\"classAsideMenuE\"> -->\r\n    <aside [ngClass]=\"classAsideMenuE\">\r\n      <div class=\"articulo\" *ngIf=\"!ocultarAcorE\">\r\n        <!--<div class=\"encabezadoMenu\">RESPONSABLE DE SURTIDO</div>\r\n        <div class=\"menus\">Salidas Almacén</div>-->\r\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" [titulo]=\"'RESPONSABLE DE SURTIDO'\"  style=\"width: 100%;\" *ngIf=\"activarMenu\"></pn-menu-seccion-roles>\r\n      </div>\r\n    </aside>\r\n    <!-- <pn-menu-seccion [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'RESPONSABLE DE SURTIDO'\" [vistaInicialActiva]=\"vistaInicialActiva\"\r\n      style=\"width: 100%\"></pn-menu-seccion> -->\r\n    <!-- <pn-menu-seccion></pn-menu-seccion> -->\r\n\r\n    <div style=\"position: absolute;  padding-top: 352px;right: 0\">\r\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" style=\"margin-right: 0px\"/>\r\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcorE\" (click)=\"mostarOcultarAcordeon()\" style=\"margin-right: 0px\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"areaDeTrabajo\" style=\"overflow: auto\">\r\n    <!-- Encabezado de la aplicación -->\r\n    <div class=\"encabezado\">\r\n      <img src='./assets/Images/regresar.svg' (click)=\"mostrarGraficaI()\" *ngIf=\"vistaInicialI\" style=\"height: 29px;width: 29.8px;cursor:pointer\" />\r\n      <label>EMBALAR PRODUCTOS</label>\r\n    </div>\r\n    <!--Esta seccion es la unica que sera Scrollable  -->\r\n    <div class=\"scroll\" style=\"min-width: 1005px; height: calc(100% - 48px);\">\r\n      <!--style=\"min-width: 800px;\"-->\r\n      <!--Objetivos de Embalaje  -->\r\n      <div style=\"height: 100%;width: 100%;border-top: 2px solid #303030;box-sizing: border-box;\" [style.min-width]=\"vistaInicialI?'1800px':'985px'\">\r\n      <div class=\"objetivosEmbalaje\" style=\"min-width: 800px;\">\r\n\r\n        <div class=\"embalajeHoy\">\r\n          <div class=\"texto\">\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">TU OBJETIVO</p>\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">DE EMBALAJE HOY</p>\r\n          </div>\r\n          <div class=\"imagen\">\r\n            <div style=\"max-width: 85px; min-width: 30px; height:50px;padding-right: 25px\">\r\n              <label class=\"estiloNumero\"> {{objetivosDeEmbalaje}}</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"imagen\">\r\n            <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"width:22px;padding: 10px\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"piezasHoy\">\r\n          <div class=\"texto\">\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">PIEZAS HOY</p>\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">EMBALADAS</p>\r\n          </div>\r\n          <div class=\"imagen\">\r\n            <div style=\"max-width:85px; height:50px;padding-right: 25px\">\r\n              <!--<label class=\"estiloNumero\"> {{piezasEmbaladas}}</label>-->\r\n              <div class=\"tooltip\"><label class=\"estiloNumero\"> {{piezasEmbaladas}}\r\n               <!-- <span class=\"tooltiptext\">\r\n                  <label>ESTAS A {{embalajeDeceadoAlMomento}} PIEZAS EMBALADAS DESEADAS</label>\r\n                </span>-->\r\n              </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"embalajeDeseado\">\r\n          <div class=\"texto\">\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">EMBALAJE</p>\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">DESEADO</p>\r\n          </div>\r\n          <div class=\"imagen\">\r\n              <div class=\"tooltip\">\r\n                <div style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; padding-right: 25px;width: 91px\">\r\n                <label class=\"estiloNumero\"> {{embalajeDeseado}}</label>\r\n                <label  style=\"font-size:16px; font-weight: bold; float: left;position: absolute\" [style.color]=\"colorEmbDeseMom\">{{valorSignoDesaparece}}{{embalajeDeceadoAlMomento}}</label>\r\n                <!--<span class=\"tooltiptext\">\r\n                  <label>SUPERASTE EL MÌNIMO DE PIEZAS EMBALADAS</label>\r\n                </span>-->\r\n                  <span class=\"tooltiptext\">\r\n                  <label><!--ESTAS A {{embalajeDeceadoAlMomento}} PIEZAS EMBALADAS DESEADAS--> {{mensajeDeseadoMomento}}</label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"embalajeMinimo\">\r\n          <div class=\"texto\">\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">MINÍMO DE</p>\r\n            <p style=\"font-family: Roboto-Bold;font-size: 16px;\">EMBALAJE</p>\r\n          </div>\r\n          <div class=\"imagen\">\r\n            <div class=\"tooltip\">\r\n            <div style=\"flex-direction: row; width:91px; height:50px; position: relative\">\r\n              <label class=\"estiloNumero\"> {{embalajeMinimo}}</label>\r\n              <label [style.color]=\"cambiarColor\" style=\"font-size:16px; font-weight: bold; float: left;position: absolute\"> {{valorSigno}}{{embalajeMinimoAlMomento}}</label>\r\n              <span class=\"tooltiptext\">\r\n                  <label><!--ESTAS A {{embalajeMinimoAlMomento}} PIEZAS DE SUPERAR EL MÌNIMO DE EMBALAJE-->{{mensajeEmbDeseado}}</label>\r\n                </span>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n       <div class=\"estadisticas\">\r\n         <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Embalar'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Embaladas'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\"></pq-pop-up-estadisticas>\r\n        <!-- <pq-pop-up-estadisticas [tipo]=\"'Embalar'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Embaladas'\" [totalesPorInspector]= \"totales_estadisticas\" [donita] = \"listaDatosPrioEstadisticas\"></pq-pop-up-estadisticas>-->\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"graficas\" style=\"min-width: 985px;min-height: 537px;height: calc(100% - 69px);\">\r\n        <div *ngIf=\"graficasI\" style=\"height: 100%;width: 100%;\">\r\n          <!-- <pq-vista-operacion-embalaje *ngIf=\"vistaInicial\"></pq-vista-operacion-embalaje> -->\r\n          <div class=\"graficasEmbalaje\" style=\"width: 100%\">\r\n            <div class=\"botoneraDiasEmbalaje\" style=\"padding-top: 1px; padding-bottom: 1px\">\r\n              <pq-botonera-dias-embalaje class=\"botoneraDiasEmbalaje\" (event)=\"recibirDia($event)\" [iniciarBotonera]=\"iniciarBotonera\"  style=\"display: inline-table;\" ></pq-botonera-dias-embalaje>\r\n            </div>\r\n\r\n            <!-- Graficas y contenido  -->\r\n            <div class=\"graficasE\" style=\"width: 100%;height: calc(100% - 200px);\">\r\n              <!-- Pruebas de graficas  -->\r\n              <div [ngStyle]=\"{'width': '100%', 'height':'100%', 'flex-direction':'row', 'display':'flex' }\">\r\n                <!--, 'border': '1px solid'-->\r\n\r\n                <div style=\"width: 100%; height: 95%; flex-direction:row; display:flex\">\r\n\r\n                  <div [ngStyle]=\"{'width': '55%','padding-top':'19px', 'height':'100%','display':'flex','align-items':'center', 'justify-content':'center', 'position':'relative', 'flex-direction':'column'}\">\r\n                    <div [ngStyle]=\"{'width':'100%', 'height': '100%','flex-direction':'column', 'display':'flex', 'align-items': 'center'}\">\r\n                      <div style=\"height: 10%;\">\r\n                        <label class=\"tituloGrafica\">PRODUCTOS</label>\r\n                      </div>\r\n                       <div style=\"height: 4%\"></div>\r\n                      <div  id=\"donaProducto\" style=\"height: 90%;\">\r\n                        <pn-donut-chart *ngIf=\"activarGrProd\" [idGrafica]=\"'producto'\" [data]=\"dataProductos\" [tipoGrafica]=\"tipoGraficaProductos\" [height]=\"'auto'\"> </pn-donut-chart>\r\n                        <!--<pn-dona [doughnutChartLabels]=\"filtroProducctos\" [doughnutChartData]=\"arrayProductosG\" [tipoGrafica]=\"tipoGrafica\"></pn-dona>-->\r\n                      </div>\r\n                      <!--<pn-donut-chart [idGrafica]=\"'producto'\" [data]=\"data\" [tipoGrafica]=\"'VerdevsAzul'\" [height]=\"'auto'\"> </pn-donut-chart>-->\r\n                    </div>\r\n                  </div>\r\n                  <!-- grafica productos y clientes-->\r\n                  <div [ngStyle]=\"{'width':'25%', 'height':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n                    <!-- <pn-donut-chart [idGrafica]=\"'proveedor'\" [data]=\"data\" [tipoGrafica]=\"tipoGraficaPro\"  [height]= \"'25%'\"> </pn-donut-chart> -->\r\n                    <div [ngStyle]=\"{'width':'100%', 'height':'50%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center'}\">\r\n                      <div style= \"height: 10%; display: flex; justify-content: center; width: 100%;\">\r\n                        <label class=\"tituloGMediano\">CLIENTES</label>\r\n                      </div>\r\n                      <!-- <div style=\"height:2%\"></div> -->\r\n                      <div id=\"donaProveedores\" style=\"height: 75%;\" >\r\n                        <pn-donut-chart *ngIf=\"clienteData\" [idGrafica]=\"'prioridades'\" [data]=\"dataCLiente\" [tipoGrafica]=\"tipoGraficaClienteGra\" [height]= \"'25%'\" > </pn-donut-chart>\r\n                        <!-- <pn-dona [doughnutChartLabels]=\"filtroClientes\" [doughnutChartData]=\"arrayClientes\" [tipoGrafica]=\"tipoGraficaCliente\"></pn-dona>-->\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                    <!--GRAFICA PRIORIDADES-->\r\n                    <div [ngStyle]=\"{'width':'100%', 'height':'50%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n                      <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\r\n                        <label class=\"tituloGMediano\">PRIORIDADES</label>\r\n                      </div>\r\n                      <!-- <div style=\"height:2%\"></div> -->\r\n                      <div id=\"donaPrioridades\" style=\"height: 75%;\" >\r\n                        <pn-donut-chart *ngIf=\"activarGrPrio\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tipoGraficaGraPrio\" [height]= \"'25%'\"></pn-donut-chart>\r\n                        <!-- <pn-dona [doughnutChartLabels]=\"filtroPrioridades\" [doughnutChartData]=\"arrayPrioridades\" [tipoGrafica]=\"tipoGraficaPrioridades\"></pn-dona>-->\r\n                      </div>\r\n                    </div>\r\n                    <!--TERMINA PRIORIDADES-->\r\n                  </div>\r\n                  <!-- fin grafica clientes y productos -->\r\n                  <div [ngStyle]=\"{'width': '5%', 'height':'100%'}\"></div>\r\n\r\n                  <div [ngStyle]=\"{'width':'15%', 'height':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center'}\">\r\n                    <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center'}\">\r\n                      <div style= \"height: 10%; display: flex; justify-content: center; width: 100%;\">\r\n                        <label class=\"tituloGMediano\">PRIORIDAD 1</label>\r\n                      </div>\r\n                      <div id=\"prioridad1\" style=\"height: 75%;\" >\r\n                        <!--<pn-dona [doughnutChartLabels]=\"filtroPrioridad1\" [doughnutChartData]=\"arrayPrioridad1\" [tipoGrafica]=\"tipoGraficaPrioridad1\"></pn-dona>-->\r\n                        <pn-donut-chart *ngIf=\"activarGrPrio1\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridadUno\" [tipoGrafica]=\"tipoGraficaPrioridades1\" [height]= \"'25%'\"></pn-donut-chart>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n                    <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n                      <div style= \"height: 10%; display: flex; justify-content: center; width: 100%;\">\r\n                        <label class=\"tituloGMediano\">PRIORIDAD 2</label>\r\n                      </div>\r\n                      <div id=\"prioridad2\" style=\"height: 75%;\" >\r\n                        <!--<pn-dona [doughnutChartLabels]=\"filtroPrioridad2\" [doughnutChartData]=\"arrayPrioridad2\" [tipoGrafica]=\"tipoGraficaPrioridad2\"></pn-dona>-->\r\n                        <pn-donut-chart *ngIf=\"activarGrPrio2\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridadDos\" [tipoGrafica]=\"tipoGraficaPrioridades2\" [height]= \"'25%'\"></pn-donut-chart>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\r\n                      <div style= \"height: 10%; display: flex; justify-content: center; width: 100%;\">\r\n                        <label class=\"tituloGMediano\">PRIORIDAD 3</label>\r\n                      </div>\r\n                      <div id=\"prioridad3\" style=\"height: 75%;\" >\r\n                        <!--<pn-dona [doughnutChartLabels]=\"filtroPrioridad3\" [doughnutChartData]=\"arrayPrioridad3\" [tipoGrafica]=\"tipoGraficaPrioridad3\"></pn-dona>-->\r\n                        <pn-donut-chart *ngIf=\"activarGrPrio3\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridadTres\" [tipoGrafica]=\"tipoGraficaPrioridades3\" [height]= \"'25%'\"></pn-donut-chart>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <!-- fin div graficas -->\r\n                </div>\r\n              </div>\r\n              <!-- pruebas de graficas   -->\r\n            </div>\r\n            <div class=\"botonesControl\"> <!-- <div class=\"botonesControl\" style=\"min-width: 800px;min-height: 90px\">-->\r\n              <div class=\"botonIngresar\" (click)=\"vistaIngresar()\" [style.display]=\"boton?'-webkit-box':'none'\" style=\"height: 43px;\" [style.pointerEvents]=\"desactivarBtnIngresar?'none':'auto'\">INGRESAR </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- TERMINA LA PARTE DE GRAFICAS -->\r\n\r\n        <pq-vista-operacion-embalaje class=\"vistaInicialI\" *ngIf=\"vistaInicialI\" [partidaEmbalaje] = \"partidaEmbalaje\" [datosBarraProgreso]=\"listaBarraProgreso\" [datosPrioridad] = \"listaPrioridadesPiezasTotales\" (EventEmiterCambioFooter)=\"quitarOpcionesFooter($event)\" [estadoVista]=\"estadoVista\" (vistaPrincipal)=\"vistaPrincipal($event)\" (actualizarTotales)=\"actualizarTot($event)\"></pq-vista-operacion-embalaje>\r\n        <div *ngIf=\"activarPopRegresar\">\r\n          <pn-pop-up-regresar-vist-principal></pn-pop-up-regresar-vist-principal>\r\n        </div>\r\n        <!--<div *ngIf=\"activarIm\">\r\n          <pn-pop-up-generar-etiqueta-estado></pn-pop-up-generar-etiqueta-estado>\r\n        </div>-->\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<pn-pop-up-correo *ngIf=\"correo\"></pn-pop-up-correo>\r\n<pn-pop-up-facturacion *ngIf=\"facturacion\"></pn-pop-up-facturacion>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/embalar/embalar.component.scss":
/***/ (function(module, exports) {

module.exports = ".seccionEmbalar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.botonesControl{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:60px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box;align-items:center;background-color:#eceef0}.botonIngresar{width:190px;height:50px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;float:right;padding-left:auto}.menuRolesEmbalaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-width:321px;min-width:321px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;background-color:#e6e6e6;font-family:Helvetica-Bold}.encabezadoMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;min-height:40px;background-color:#008895;font-size:18px;color:#fff;font-weight:bold;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:11px;-webkit-box-sizing:border-box;box-sizing:border-box}.menus{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;min-height:36px;background-color:#ccc;font-size:16px;color:#424242;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:11px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:6px}.areaDeTrabajo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.encabezado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;max-height:48px;min-height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:13px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Novecento}.encabezado>label{font-size:25px;color:#5b5b5b}.objetivosEmbalaje{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;min-width:1634px;padding-top:10px;padding-bottom:0px;border-bottom:1px;border-top:1px}.embalajeHoy{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:308px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-right:1px solid #979797}.texto{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#9b9b9b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-family:\"Roboto-Bold\";padding-left:20px;height:40px;width:120px}.imagen{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.img{cursor:pointer}.piezasHoy{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:272px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;border-right:1px solid #979797;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.embalajeDeseado{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:262px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;border-right:1px solid #979797;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.embalajeMinimo{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:262px;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.estadisticas{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.graficas{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;height:93.5%;width:100%;min-width:1760px}.estiloNumero{color:#008895;font-weight:bold;font-size:46px;font-family:Roboto}.aux .asideNormalMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:181px;width:321px;height:100%;overflow-y:scroll}.aux .asideNormalMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.aux>.asideOcultarMenu{-webkit-animation-name:ocultarMenu;animation-name:ocultarMenu;-webkit-animation-duration:1s;animation-duration:1s;-webkit-transition:1s ease-in-out;transition:1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0px;width:0px}.aux>.asideOcultarMenu>.articulo{width:0px}.aux>.asideMostrarMenu{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;-webkit-animation-name:mostrarMenu;animation-name:mostrarMenu;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll}.aux>.asideMostrarMenu>.articulo{width:321px;background-color:#e6e6e6;float:left;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}@-webkit-keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@keyframes ocultarMenu{from{min-width:321px}to{width:0px}}@-webkit-keyframes mostrarMenu{from{width:0px}to{width:321px}}@keyframes mostrarMenu{from{width:0px}to{width:321px}}.scroll{width:100%}.tooltip .tooltiptext::after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #4c4c4c transparent}.tooltip:hover .tooltiptext{visibility:visible;opacity:1}.tooltip{position:relative;display:inline-block;cursor:pointer}.tooltip .tooltiptext{visibility:hidden;width:130px;background-color:#424242;color:#fff;font-family:\"Roboto\";text-align:left;padding:5px 10px 0px 0px;font-size:9px;padding:5px;display:-webkit-box;display:-ms-flexbox;display:flex;left:2%;margin-left:-60px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;z-index:1}.footer{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;align-self:auto;border-top:2px solid;width:100%;height:100%;min-height:57px;max-height:57px;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:57px;max-height:57px;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-ms-flex-align:stretch;-webkit-box-align:inherit;align-items:inherit;border-top:2px solid #000;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;font-size:14px;min-width:759px;-webkit-box-sizing:border-box;box-sizing:border-box}.datosFooter{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:distribute;align-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;min-width:759px}.Ambiente,.Congelación,.Prioridad1,.Prioridad2,.Prioridad3,.Refrigeración{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.7%;margin-right:.7%}.img,.p1,.p2,.p3{margin-right:6px}.p1{color:#af3634;font-weight:bold}.p2{color:#eeb253;font-weight:bold}.p3{color:#63b236;font-weight:bold}@media all and (max-height: 1440px)and (min-Height: 1390px){.botonesControl{height:60px}.graficas{height:86.6%}.graficasEmbalaje{height:100%}.graficas{min-height:700px}.graficasE{padding-top:80px}.scroll{height:95%}}@media all and (max-height: 1389px)and (min-Height: 1300px){.botonesControl{height:60px}.graficas{height:90.6%}.graficasEmbalaje{height:100%}.graficas{min-height:700px}.botonesControl{max-height:90px;min-height:90px;height:100%}.graficasE{padding-top:80px}.scroll{height:95%}.areaDeTrabajo{overflow-y:scroll}}@media all and (max-height: 1200px)and (min-Height: 770px){.encabezado{min-width:1005px}.botonesControl{height:55px}.graficasE{height:65%;padding-top:15px}.graficasEmbalaje{height:100%}.graficas{min-height:502px}.objetivosEmbalaje{padding-right:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.areaDeTrabajo{overflow-y:scroll}}@media all and (min-width: 1350px)and (min-Height: 770px){.graficasE{height:65%}}@media all and (max-height: 1299px)and (min-height: 1201px){.graficasEmbalaje{height:100%}}@media all and (max-height: 2560px)and (min-Height: 1440px){.graficasE{padding-top:80px}.graficasE{height:85%}}@media all and (max-height: 1418px)and (min-Height: 1391px){.graficasE{height:85%}}@media all and (max-height: 1299px)and (min-Height: 1201px)and (min-width: 1368px){.graficas{height:100%}.graficasEmbalaje{height:100%}.areaDeTrabajo{overflow-y:scroll}}.graficasEmbalaje{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:99.7%}.graficasE{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;width:100%;background-color:#eceef0}.botonesControl{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.botoneraDiasEmbalaje{width:100%;height:100%;background:#88868a;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;min-height:50px;max-height:50px;display:flex;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.botonesDias{width:20%;height:100%;background:#d8d9dd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;position:relative;min-height:50px}.botonesDiasActive{width:20%;height:100%;background:#008895;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;position:relative;min-height:50px}.indice{position:relative;font-size:14px;top:-7px}.botonIngresar{width:190px;height:50px;background:#008894;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:21px;cursor:pointer;border:none;color:#fff;font-weight:bold;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:auto;align-self:auto;text-align:center}.tituloGrafica{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.tituloGMediano{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}.tituloGPequenio{font-size:calc((1vh + 1vw) / 2 );font-weight:bold;font-family:Novecento}#doughnut1Div{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}#doughnut1Div2{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}#totalDoughnut1{height:70px;margin:auto;left:0;right:0;top:0;bottom:0}#totalDoughnut1>label{font-size:14px;text-align:center;font-weight:300}#totalDoughnut1>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}.total{position:absolute;width:140px;height:70px;margin:auto;left:0;right:0;top:0;bottom:0}.total>label{font-size:14px;text-align:center;font-weight:300}.total>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}#totalDoughnut12{height:70px;margin:auto;left:0;right:0;top:0;bottom:0}#totalDoughnut12>label{font-size:14px;text-align:center;font-weight:300}#totalDoughnut12>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}.total2{position:absolute;width:140px;height:70px;margin:auto;left:0;right:0;top:0;bottom:0}.total2>label{font-size:14px;text-align:center;font-weight:300}.total2>label:nth-of-type(2){font-size:40px;text-align:center;font-weight:700}#divBoton{width:100%;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box}#donaPrioridades,#donaProveedores{width:50%}#prioridad1,#prioridad2,#prioridad3{width:55%}#donaProducto{width:75%}@media(min-width: 80em){#donaProveedores,#donaPrioridades{width:85%;max-width:150px;max-height:187px}#prioridad1,#prioridad2,#prioridad3{width:100%;max-width:132px;max-height:134px}#donaProducto{width:72%;padding-top:40px;max-height:310px}}@media(min-width: 92em){#donaProveedores,#donaPrioridades{width:70%;max-width:370px;max-height:initial}#prioridad1,#prioridad2,#prioridad3{width:75%;max-width:370px;max-height:initial}#donaProducto{width:80%;max-width:800px;max-height:initial}}"

/***/ }),

/***/ "./src/app/components/embalar/embalar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbalarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_Empleado_class__ = __webpack_require__("./src/app/class/Empleado.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_despachos_parametrosInspeccion_class__ = __webpack_require__("./src/app/class/despachos/parametrosInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { EmbalarService } from '../../services/embalar/embalar.service';







var EmbalarComponent = /** @class */ (function () {
    /*+++++*/
    /// Se utiliza para guardar todos los datos de la lista de acuerdo a prioridades..
    // @Input() copiaPartidaEmbalaje: PartidaInspeccion = new PartidaInspeccion();
    function EmbalarComponent(router, coreComponent, comunService, embalarServices, embalarServicesEstadisticas, embalarServicesEstado) {
        this.router = router;
        this.coreComponent = coreComponent;
        this.comunService = comunService;
        this.embalarServices = embalarServices;
        this.embalarServicesEstadisticas = embalarServicesEstadisticas;
        this.embalarServicesEstado = embalarServicesEstado;
        this.iniciarGraficas = 0;
        this.colorIndiceInspeccionDeceada = '#D0021B';
        this.colorMinimoInspeccion = '#D0021B';
        this.classAsideMenuE = 'asideNormalMenu';
        this.vistaInicialActiva = true;
        this.boton = true;
        this.copiaPartidaEmbalaje = new Array();
        this.partidaEmbalaje = new Array();
        this.estadoPedido = 'Por embalar';
        this.cambiarColorDeceado = true;
        this.totaleEmbaladasG = 0; /// ESTA VARIABLE SIRVE PARA OBTENER EL TOTAL QUE SE EMBALO
        this.totaleAEmbaladasG = 0; /// ESTA VARIABLE SIRVE PARA OBTENER EL TOTAL QUE SE DEBEN EMBALAR
        this.obtenerDia = 'hoy';
        this.itemsMenu = [];
        this.filtroClientes = [];
        this.filtroPrioridades = [];
        this.montoTotEmbaladas = 0;
        this.montoTotPorEm = 0;
        this.listaPorAnio = [];
        this.listaPorQuincena = [];
        this.listaPorMes = [];
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mostrarVistaInicial = false;
        this.arrayProductos = new Array();
        /// array2: any[] = ["ana", "laura"];
        this.tipoGrafica = 'verdeVSazul';
        this.nombreClientes = new Array(); /// Este array se utilizara para giuardar los nombres de los clientes
        this.pzaCliente = new Array(); /// ESTE ARRAY CONTENDRA LAS PIEZAS QUE TIENE CADA CLIENTE
        this.montoCliente = new Array(); /// ESTE ARRAY VA A ALMACENAR EL MONTO POR CADA CLIENTE
        this.listaPrioridad1 = []; /// Se utiliza para guardar todos los datos de la lista que contenga solo los que pertenecen a la prioridad 1..
        this.listaGraficaProductos = new Array(); // La lista que tendra los datos de grafica productos
        this.totPzaPrioridad1 = 0;
        this.totMontoPrioridad1 = 0;
        this.totPzaPrioridad2 = 0;
        this.totMontoPrioridad2 = 0;
        this.totPzaPrioridad3 = 0;
        this.totMontoPrioridad3 = 0;
        this.botones = new Array(5).fill('botonesDias');
        this.listaClientes = [];
        this.nuevoClientes = [];
        this.nuevaPrioridad = [];
        this.listaPrioridades = new Array();
        this.listaNueva = [];
        this.filtroPrioridad1 = [];
        this.nuevaPrioridad1 = [];
        this.listaPrioridad2 = [];
        this.filtroPrioridad2 = [];
        this.nuevaPrioridad2 = [];
        this.listaPrioridad3 = [];
        this.filtroPrioridad3 = [];
        this.nuevaPrioridad3 = [];
        this.nuevaPrioridadEstadisticas = [];
        this.listaDataTotales = []; /// SE USA PARA GUARDAR TODO LO QUE TRAE EL SERVICIO
        this.listaDataHoy = [];
        this.listaDataManana = [];
        this.listaDataPasado = [];
        this.listaDataFuturo = [];
        this.data1 = {
            titulo: "Totales",
            labels: ["ASISTENCIA", "INASISTENCIA"],
            valores: [39, 26],
            labelsExtras: ["Asistieron", "Faltaron"],
            labelsExtrasHover: ["Colaboradores"],
            valuesExtras: [39, 26],
            valuesExtrasHover: [[39], [26]]
        };
        this.filtroPrioUsuario = [];
        this.arrayLabelQuincena = [];
        this.arrayDatosQuincena = [];
        this.arrayDatosMes = [];
        this.arrayLabelMes = [];
        this.arrayDatosYear = [];
        this.arrayLabelYear = [];
        this.listaQuincena = [];
        this.listaMes = [];
        this.listaYear = [];
        this.usuarioE = new __WEBPACK_IMPORTED_MODULE_7__class_Empleado_class__["a" /* Empleado */]();
        this.parametros = new __WEBPACK_IMPORTED_MODULE_8__class_despachos_parametrosInspeccion_class__["a" /* parametrosInspeccion */]();
        this.arrayClientes = [];
        this.arrayPrioridades = [];
        this.arrayPrioridad1 = [];
        this.arrayPrioridad2 = [];
        this.arrayPrioridad3 = [];
        this.filtroProducctos = [];
        this.arrayProductosG = [];
        this.arrayLabelPro = [];
        this.arrayValoresPro = [];
        this.listaDataPrioridad1 = [];
        this.listaDataPrioridad2 = [];
        this.listaDataPrioridad3 = [];
        this.listaTodo = [];
        this.arrayLabelPrioridadesEstadisticas = [];
        this.arrayDatosPrioridadesEstadisticas = [];
        ////////////  Variables para las graficas de donut chart /////////
        this.arrayProducto = [];
        this.filtroProducto = [];
        this.nuevoProducto = [];
        this.filtroPrioridadesGra = [];
        this.arrayPrioridadesGra = [];
        this.filtroPrioridad1Gra = [];
        this.arrayPrioridad1Gra = [];
        this.filtroPrioridad2Gra = [];
        this.arrayPrioridad2Gra = [];
        this.filtroPrioridad3Gra = [];
        this.arrayPrioridad3Gra = [];
        this.arrayClientesGra = [];
        this.filtroClientesGra = [];
        this.totEnvioXCliente = 0;
        this.totEnvio = 0;
    }
    EmbalarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.finalizarEmbalado
            .subscribe(function (data) {
            _this.valorComun = data;
            _this.obtenerMetodos(1);
            _this.usuarioE.idEmpleado = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado(); /// Se adquiere el id del usuario*/
            // this.usuarioE.idEmpleado = 54;
            _this.consultaEstadisticaUsuarioEmbalar(_this.usuarioE);
            _this.iniciarBotonera = true;
            _this.usuarioId = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
            // this.usuarioId = 54;
            // this.consultarEstado(this.usuarioId); /// Es la llamada al servicio que traera el estado..
            _this.mostrarGraficaI();
        });
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'embalar') {
                _this.desactivarBtnIngresar = false;
                console.log('Soy Embalar y recargare :) ');
                _this.obtenerMetodos(0);
            }
        });
        this.obtenerMetodos(1);
        /// this.recibePartidasEmbalaje(this.estadoPedido);
        this.usuarioE.idEmpleado = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado(); /// Se adquiere el id del usuario*/
        // this.usuarioE.idEmpleado = 54;
        this.consultaEstadisticaUsuarioEmbalar(this.usuarioE);
        this.iniciarBotonera = true;
        this.usuarioId = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        // this.usuarioId = 54;
        // this.consultarEstado(this.usuarioId); /// Es la llamada al servicio que traera el estado..
    };
    EmbalarComponent.prototype.obtenerMetodos = function (tipo) {
        if (tipo === 1) {
            this.graficasI = true;
        }
        this.obtenerTotalEmbalar("123"); /// Se manda a llamar al metodo que adquiere los valores del servicio
        this.cambiarColorEmbalajeMinimoAlMomento();
        this.cambiarColorembalajeDeceadoAlMomento();
    };
    ///////// Metodo usado para graficas
    EmbalarComponent.prototype.recibirTotHoy = function (valTotHoy) {
        var _this = this;
        this.totHoy = valTotHoy;
        this.coreComponent.openModal(1);
        this.embalarServices.totalesGeneral().subscribe(function (data) {
            _this.totHoy = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXCliente = data.current.EnvioXCliente;
            _this.itemsMenu = [{ rol: 'RESPONSABLE DE SURTIDO', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totHoy, url: 'embalar', disable: false, select: true },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: false },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio' },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXCliente, url: 'trabajarRutaCliente' }
                            ],
                            select: false
                        }
                    ] }];
            _this.activarMenu = true;
            _this.coreComponent.closeModal(1);
        });
    };
    ///////////////// Muestra la vista principal ///////////////////
    EmbalarComponent.prototype.regresarVistaI = function () {
        // console.log('entro:Embalar');
        this.vistaInicial = !this.vistaInicial;
        this.mostrarvistaInicial = this.vistaInicial;
        // console.log('this.vistaInicial: ' + this.vistaInicialI);
        /* if (this.mostrarvistaInicial) {
           this.vistaInicialI = true;
           this.graficasI = false;
           this.boton = false;
         } else {
           // this.vistaInicialI= false;
           // this.graficasI= true;
         }*/
        this.vistaInicialI = true;
        this.graficasI = false;
        this.boton = false;
    };
    EmbalarComponent.prototype.vistaIngresar = function () {
        /*******SE COMENTO PARA ESTAR PROBANDO EL POP DE FACTURACIÓN******/
        this.desactivarBtnIngresar = true;
        console.log('Entre otra vez :))) ');
        this.consultarEstado(this.usuarioId);
        // this.medidas = true;
    };
    EmbalarComponent.prototype.actualizarTot = function ($event) {
        this.obtenerTotalEmbalar("123");
    };
    ///////// Consulta el estado para pasar a la siguiente vista //////////////
    EmbalarComponent.prototype.consultarEstado = function (idEmpleado) {
        var _this = this;
        var estado;
        this.coreComponent.openModal(1);
        this.embalarServicesEstado.consultarEstado(idEmpleado).subscribe(function (data) {
            // console.log('Soy data estado- EMBALAR->', data.current);
            estado = data.current;
            if (estado === 'Nuevo') {
                _this.registrarEmbalarPedido(idEmpleado);
            }
            else {
                _this.estadoVista = estado;
                _this.vistaInicial = !_this.vistaInicial;
                _this.mostrarvistaInicial = _this.vistaInicial;
                // console.log('this.vistaInicial: ' + this.vistaInicialI);
                /*if (this.mostrarvistaInicial) {
                  this.vistaInicialI = true;
                  this.graficasI = false;
                  this.boton = false;
                }*/
                _this.vistaInicialI = true;
                _this.graficasI = false;
                _this.boton = false;
            }
        });
        this.coreComponent.closeModal(1);
    };
    ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
    EmbalarComponent.prototype.registrarEmbalarPedido = function (idEmpleado) {
        var _this = this;
        this.activarPopRegresar = false;
        var parametro = {
            idUsuarioLogueado: idEmpleado
        };
        var avanzar;
        this.embalarServicesEstado.registrarEmbalarPedido(parametro).subscribe(function (data) {
            avanzar = data.current;
            if (avanzar === false) {
                _this.activarPopRegresar = true;
            }
            else {
                _this.estadoVista = 'Registro';
                // this.vistaInicial = !this.vistaInicial;
                // console.log('this.vistaInicial: ' + this.vistaInicialI);
                _this.vistaInicialI = true;
                _this.graficasI = false;
                _this.boton = false;
            }
        });
    };
    EmbalarComponent.prototype.cambiarColorEmbalajeMinimoAlMomento = function () {
        /*if (this.embalajeMinimoAlMomento >= 0) {
          this.cambiarColor = true;
        } else {
          this.cambiarColor = false;
        }*/
    };
    EmbalarComponent.prototype.cambiarColorembalajeDeceadoAlMomento = function () {
        /*if (this.embalajeDeceadoAlMomento >= 0) {
          this.cambiarColorDeceado = true;
        } else {
          this.cambiarColorDeceado = false;
        }*/
    };
    EmbalarComponent.prototype.mostrarGraficaI = function () {
        this.vistaInicialI = false;
        this.graficasI = true;
        this.boton = true;
        this.desactivarBtnIngresar = false;
        this.quitarOpcionesFooter(false);
    };
    EmbalarComponent.prototype.vistaPrincipal = function (evento) {
        if (evento === true) {
            this.vistaInicialI = false;
            this.graficasI = true;
            this.boton = true;
            this.desactivarBtnIngresar = false;
            this.quitarOpcionesFooter(false);
        }
    };
    EmbalarComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcorE = !this.ocultarAcorE;
        if (this.ocultarAcorE) {
            this.classAsideMenuE = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenuE = 'asideMostrarMenu';
        }
    };
    EmbalarComponent.prototype.quitarOpcionesFooter = function (val) {
        this.cambioFooter = val;
    };
    //////////////////////////// FIN //////////
    EmbalarComponent.prototype.consultaEstadisticaUsuarioEmbalar = function (usuario) {
        var _this = this;
        this.activarGraficasPrioEsta = false;
        var totPza = 0;
        var totPartidas = 0;
        var totPzaPrio = 0;
        var totPzaPrio1 = 0;
        var totPzaPrio2 = 0;
        var totPzaPrio3 = 0;
        this.listaQuincena = { listaLabel: [''], listaDatos: [0] };
        this.listaMes = { listaLabel: [''], listaDatos: [0] };
        this.listaYear = { listaLabel: [''], listaDatos: [0] };
        this.listaPrioridadUsuarioEstadisticas = [];
        this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear };
        this.embalarServicesEstadisticas.ConsultaEstadisticaUsuarioEmbalar(usuario).subscribe(function (data) {
            if (data.current.Prioridad !== undefined) {
                if (data.current.AllYears) {
                    _this.listaAnios = data.current.AllYears;
                }
                if (data.current.Prioridad) {
                    _this.listaPrioridadEstadisticas = data.current.Prioridad;
                }
                if (data.current.Year) {
                    _this.listaPorAnio = data.current.Year;
                    _this.listaPorAnio.forEach(function (inde) {
                        _this.arrayLabelYear.push(inde.tiempo);
                        _this.arrayDatosYear.push(inde.totalPiezas);
                    });
                }
                if (data.current.Mes) {
                    _this.listaPorMes = data.current.Mes;
                    _this.listaPorMes.forEach(function (inde) {
                        _this.arrayLabelMes.push(inde.tiempo);
                        _this.arrayDatosMes.push(inde.totalPiezas);
                    });
                }
                if (data.current.Quincena) {
                    _this.listaPorQuincena = data.current.Quincena;
                    _this.listaPorQuincena.forEach(function (inde) {
                        _this.arrayLabelQuincena.push(inde.tiempo);
                        _this.arrayDatosQuincena.push(inde.totalPiezas);
                    });
                }
                _this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
                ///// Se asignan a las listas los datos para la grafica de puntos
                _this.listaQuincena = { listaLabel: _this.arrayLabelQuincena, listaDatos: _this.arrayDatosQuincena };
                _this.listaMes = { listaLabel: _this.arrayLabelMes, listaDatos: _this.arrayDatosMes };
                _this.listaYear = { listaLabel: _this.arrayLabelYear, listaDatos: _this.arrayDatosYear };
                ////// Aqui termina
                for (var i = 0; i < _this.listaAnios.length; i++) {
                    totPza += _this.listaAnios[i].totalPiezas;
                    totPartidas += _this.listaAnios[i].totalPartidas;
                }
                for (var i = 0; i < _this.listaPrioridadEstadisticasDatos.length; i++) {
                    if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
                        totPzaPrio1 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
                        totPzaPrio2 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
                        totPzaPrio3 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                }
                /* this.arrayLabelPrioridadesEstadisticas = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
                 this.arrayDatosPrioridadesEstadisticas = [totPzaPrio1, totPzaPrio2, totPzaPrio3];
                 this.graficasEstadisticas = 'prioridades';
                 this.listaDatosPrioEstadisticas = {arrayLabel: this.arrayLabelPrioridadesEstadisticas,
                   arrayValores: this.arrayDatosPrioridadesEstadisticas,
                   tipoGrafica: this.graficasEstadisticas};*/
                //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Prioridad 1', 'pieza': totPzaPrio1 },
                    { 'prioridad': 'Prioridad 2', 'pieza': totPzaPrio2 },
                    { 'prioridad': 'Prioridad 3', 'pieza': totPzaPrio3 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
            }
            else {
                /* this.graficasEstadisticas = 'gris';
                 this.arrayLabelPrioridadesEstadisticas = ['Ninguna'];
                 this.arrayDatosPrioridadesEstadisticas = [1];
                 this.listaDatosPrioEstadisticas = {arrayLabel: this.arrayLabelPrioridadesEstadisticas,
                   arrayValores: this.arrayDatosPrioridadesEstadisticas,
                   tipoGrafica: this.graficasEstadisticas};*/
                //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Ninguna', 'pieza': 0 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
        });
    };
    EmbalarComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
        this.filtroPrioUsuario = [];
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPrioUsuario.push(valor.prioridad);
        }
        var valoresC = [];
        var valoresPrioEst = [];
        for (var _b = 0, _c = this.listaPrioridadUsuarioEstadisticas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresPrioEst.push([0]);
            valoresC.push(0);
        }
        if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPrioUsuario,
                valores: valoresC,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresPrioEst
            };
            this.graficasEstadisticas = 'Prioridades';
        }
        else {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0]]
            };
            this.graficasEstadisticas = 'Gris';
        }
    };
    EmbalarComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    EmbalarComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case 'PRIORIDADESESTADISTICAS':
                var posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
                if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
                total.valuesExtras[0] += elemento.pieza; // Total de Partidas
                total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
                this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
                break;
            default:
                break;
        }
    };
    ////////////// TERMINA EL PINTADO DE GRAFICAS /////////////////////
    EmbalarComponent.prototype.obtenerTotalEmbalar = function (val) {
        var _this = this;
        this.activarMenu = false;
        var tot = 0;
        this.coreComponent.openModal(1);
        this.embalarServices.ConsultaTotalEmbalar(val).subscribe(function (data) {
            // .log('Soy el servicio--->', data.current);
            if (data.current.Totales) {
                _this.listaDataTotales = data.current.Totales;
            }
            if (data.current.Hoy) {
                _this.listaDataHoy = data.current.Hoy;
                for (var i = 0; i < _this.listaDataHoy.length; i++) {
                    if (_this.listaDataHoy[i].estado === 'Por Embalar') {
                        tot += _this.listaDataHoy[i].piezas;
                    }
                }
                // this.embalajeDeseado = tot;
            }
            if (data.current.Mañana) {
                _this.listaDataManana = data.current.Mañana;
            }
            if (data.current.Futuro) {
                _this.listaDataFuturo = data.current.Futuro;
            }
            if (data.current.PasadoMañana) {
                _this.listaDataPasado = data.current.PasadoMañana;
            }
            _this.iniciarGraficas = 1;
            _this.filtrarDatosDias(_this.listaDataTotales, tot);
            _this.recibirDia('hoy');
            _this.recuperarDatosBarraProgreso(_this.listaDataHoy);
            _this.coreComponent.closeModal(1);
        }, function (error) {
            console.log("error embalar");
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(1);
        });
    };
    EmbalarComponent.prototype.recuperarDatosBarraProgreso = function (listaHoy) {
        var totP1 = 0;
        var totP2 = 0;
        var totP3 = 0;
        for (var i = 0; i < listaHoy.length; i++) {
            if (listaHoy[i].prioridad === 'P1') {
                totP1 += listaHoy[i].piezas;
            }
            else if (listaHoy[i].prioridad === 'P2') {
                totP2 += listaHoy[i].piezas;
            }
            else if (listaHoy[i].prioridad === 'P3') {
                totP3 += listaHoy[i].piezas;
            }
        }
        this.listaBarraProgreso = { totalPiezas: this.embalajeDeseado, piezasEmbaladas: this.piezasEmbaladas, prioridad1: totP1, prioridad2: totP2, prioridad3: totP3 };
    };
    EmbalarComponent.prototype.filtrarDatosDias = function (listaDataTotales, totEmbalajeDesea) {
        var totPzasP1 = 0;
        var totPzasP2 = 0;
        var totPzasP3 = 0;
        var totalPiezasPorPrioridades = totEmbalajeDesea;
        this.objetivosDeEmbalaje = listaDataTotales[0].maximoVendido;
        this.piezasEmbaladas = listaDataTotales[0].totalEmbalada;
        this.embalajeMinimo = listaDataTotales[0].minimoEmbalar;
        this.embalajeDeseado = this.piezasEmbaladas + listaDataTotales[0].totalAEmbalar;
        // this.embalajeDeseado = 128;
        this.embalajeDeceadoAlMomento = this.embalajeDeseado - this.piezasEmbaladas;
        if (this.embalajeDeceadoAlMomento === 0) {
            this.valorSignoDesaparece = ' ';
            this.colorEmbDeseMom = '#FBB03B';
            this.mensajeDeseadoMomento = 'HAZ SUPERADO EL EMBALAJE DESEADO';
        }
        else {
            this.colorEmbDeseMom = '#D0021B';
            this.valorSignoDesaparece = '-';
            if (this.embalajeDeceadoAlMomento === 1) {
                this.mensajeDeseadoMomento = 'ESTAS A' + ' ' + this.embalajeDeceadoAlMomento + ' ' + 'PIEZA EMBALADAS DESEADAS';
            }
            else {
                this.mensajeDeseadoMomento = 'ESTAS A' + ' ' + this.embalajeDeceadoAlMomento + ' ' + 'PIEZAS EMBALADAS DESEADAS';
            }
        }
        /// Se asigna los valores a los indices
        /// Calcular el signo y color del indice
        if (this.piezasEmbaladas > this.embalajeMinimo) {
            this.cambiarColor = '#39B54A';
            this.embalajeMinimoAlMomento = this.piezasEmbaladas - this.embalajeMinimo;
            this.valorSigno = '+';
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE EMBALAJE';
        }
        else if (this.embalajeMinimo > this.piezasEmbaladas) {
            this.cambiarColor = '#D0021B';
            this.embalajeMinimoAlMomento = this.embalajeMinimo - this.piezasEmbaladas;
            this.valorSigno = '-';
            if (this.embalajeMinimoAlMomento === 1) {
                this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.embalajeMinimoAlMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE EMBALAJE';
            }
            else {
                this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.embalajeMinimoAlMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE EMBALAJE';
            }
        }
        else if (this.piezasEmbaladas === this.embalajeMinimo) {
            this.cambiarColor = '#FBB03B';
            this.embalajeMinimoAlMomento = this.piezasEmbaladas - this.embalajeMinimo;
            this.valorSigno = ' ';
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE EMBALAJE';
        }
        this.recibirTotHoy(totalPiezasPorPrioridades);
        // this.limpiarVariablesGrafica(); /// LIMPIA LAS VARIABLES PARA AGREGAR LO DE FILTRO QUE LLEVA EL ARRAY
        // this.calcularDatosParaGraficas(); /// MANDA A LLAMAR AL METODO QUE HACE EL LLENADO DE LOS LABEL Y A SU VEZ MANDA A LLAMAR A UNO QUE LLENA LAS PIEZAS Y EL MONTO
    };
    /////////////// METODOS PARA LAS GRAFICAS
    EmbalarComponent.prototype.recibirDia = function (val) {
        var _this = this;
        setTimeout(function () {
            _this.activarGrProd = false;
            _this.activarGrPrio = false;
            _this.activarGrPrio1 = false;
            _this.clienteData = false;
            _this.activarGrPrio2 = false;
            _this.activarGrPrio3 = false;
        }, 5);
        this.obtenerDia = val;
        this.listaTodo = [];
        var listaAux = [];
        // this.filtrarDatosDias(this.listaDataTotales, this.listaDataHoy, this.listaDataManana, this.listaDataPasado, this.listaDataFuturo);
        /// console.log('Soy prioridad 1 ------>>>', this.listaDataPrioridad1);
        if (this.iniciarGraficas > 0) {
            this.limpiarVar();
            if (val === 'hoy') {
                this.obtenerGraficaProductos(this.listaDataHoy);
                this.ObtenerDatosGraficaClientes(this.listaDataHoy);
                this.ObtenerDatosGraficaPrioridades(this.listaDataHoy);
                this.obtenerDatosGraficaPrioridad1(this.listaDataHoy);
            }
            else if (val === 'manana') {
                this.ObtenerDatosGraficaClientes(this.listaDataManana);
                this.ObtenerDatosGraficaPrioridades(this.listaDataManana);
                this.obtenerGraficaProductos(this.listaDataManana);
                this.obtenerDatosGraficaPrioridad1(this.listaDataManana);
            }
            else if (val === 'pasado') {
                this.ObtenerDatosGraficaClientes(this.listaDataPasado);
                this.ObtenerDatosGraficaPrioridades(this.listaDataPasado);
                this.obtenerGraficaProductos(this.listaDataPasado);
                this.obtenerDatosGraficaPrioridad1(this.listaDataPasado);
            }
            else if (val === 'futuro') {
                this.obtenerGraficaProductos(this.listaDataFuturo);
                this.ObtenerDatosGraficaClientes(this.listaDataFuturo);
                this.ObtenerDatosGraficaPrioridades(this.listaDataFuturo);
                this.obtenerDatosGraficaPrioridad1(this.listaDataFuturo);
            }
            else if (val === 'todo') {
                this.listaDataHoy.forEach(function (element) {
                    _this.listaTodo.push(element);
                });
                this.listaDataManana.forEach(function (element) {
                    _this.listaTodo.push(element);
                });
                this.listaDataPasado.forEach(function (element) {
                    _this.listaTodo.push(element);
                });
                this.listaDataFuturo.forEach(function (element) {
                    _this.listaTodo.push(element);
                });
                // console.log('Lista todo------>>>', this.listaTodo);
                this.obtenerGraficaProductos(this.listaTodo);
                this.ObtenerDatosGraficaClientes(this.listaTodo);
                this.ObtenerDatosGraficaPrioridades(this.listaTodo);
                this.obtenerDatosGraficaPrioridad1(this.listaTodo);
            }
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
    };
    EmbalarComponent.prototype.limpiarVar = function () {
        this.listaGraficaProductos = new Array();
        this.filtroProducto = [];
        this.nuevoProducto = [];
        this.filtroPrioridadesGra = [];
        this.nuevaPrioridad = [];
        this.listaPrioridades = new Array();
        this.listaPrioridad1 = new Array();
        this.nuevaPrioridad1 = [];
        this.filtroPrioridad1Gra = [];
        this.listaPrioridad2 = new Array();
        this.nuevaPrioridad2 = [];
        this.filtroPrioridad2Gra = [];
        this.filtroClientesGra = [];
        this.nuevoClientes = [];
        this.listaClientes = new Array();
    };
    EmbalarComponent.prototype.obtenerGraficaProductos = function (lista) {
        // console.log('Soy lista -->', lista);
        this.filtroProducctos = [];
        this.arrayProductosG = [];
        var sq = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var arrayMonto = new Array();
        var cantidadEmbalada;
        var cantidadPorEmbalada;
        var val = 0;
        this.arrayLabelPro = new Array();
        this.arrayValoresPro = new Array();
        if (lista.length > 0) {
            this.tipoGrafica = 'verdeVSazul';
            sq.Query(lista, ['estado'], true);
            punterosProd = sq.getPunteros(['estado'], 'estado');
            // console.log('Query:::', punterosProd);
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                var monto = 0;
                // var montoDiv = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[puntem[i]];
                    if (element === 'por embalar') {
                        cantidad += listaDatos.totalAEmbalar;
                        monto += listaDatos.monto;
                        // console.log('Soy embalar', cantidad);
                    }
                    else if (element === 'embalado') {
                        cantidad += listaDatos.totalEmbalada;
                        monto += listaDatos.monto;
                        // console.log('Soy Por embalar', cantidad);
                    }
                }
                // console.log('Soy cantidad ', cantidad);
                arrayValores.push(cantidad);
                arrayLabel.push(element);
                arrayMonto.push(monto);
                // console.log('Soy divisa -->', montoDiv);
                /*new AccountingFormatMoney().transform(monto)*/
            });
            for (var i = 0; i < arrayLabel.length; i++) {
                if (arrayLabel[i] === 'por embalar') {
                    this.listaGraficaProductos.push({ estado: arrayLabel[i], piezas: arrayValores[i], monto: arrayMonto[i] });
                }
                else if (arrayLabel[i] === 'embalado') {
                    this.listaGraficaProductos.push({ estado: arrayLabel[i], piezas: arrayValores[i], monto: arrayMonto[i] });
                }
            }
            // console.log('lista Graficas-->', this.listaGraficaProductos)
            /*For para ordenar los datos de acuerdo al monto*/
            var montoAuxL = void 0;
            var band = false;
            while (!band) {
                band = true;
                for (var i = 0; i < this.listaGraficaProductos.length - 1; i++) {
                    var aux = i + 1;
                    if (this.listaGraficaProductos[i].monto < this.listaGraficaProductos[aux].monto) {
                        montoAuxL = this.listaGraficaProductos[i + 1];
                        this.listaGraficaProductos[i + 1] = this.listaGraficaProductos[i];
                        this.listaGraficaProductos[i] = montoAuxL;
                        band = false;
                    }
                }
            }
            // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
            /**********************************************/
            // console.log('label-->', arrayLabel);
            /////////////////////////////////////////////////////////
            for (var i = 0; i < arrayValores.length; i++) {
                if (arrayValores[i] > 0) {
                    Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
                    Array.prototype.push.apply(this.arrayProductosG, arrayValores);
                    break;
                }
                else {
                    val = val + 1;
                }
            }
            if (val === arrayValores.length) {
                arrayValores = new Array();
                arrayLabel = new Array();
                this.tipoGrafica = "gris";
                arrayValores.push(1);
                arrayLabel.push("");
                Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
                Array.prototype.push.apply(this.arrayProductosG, arrayValores);
            }
        }
        else {
            this.tipoGrafica = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
            Array.prototype.push.apply(this.arrayProductosG, arrayValores);
        }
    };
    EmbalarComponent.prototype.ObtenerDatosGraficaClientes = function (lista) {
        var _this = this;
        /// console.log('Soy lista -->', lista);
        this.filtroClientes = [];
        this.arrayClientes = [];
        var sq = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        var sqAux = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var val = 0;
        this.arrayLabelPro = new Array();
        this.arrayValoresPro = new Array();
        if (lista.length > 0) {
            sq.Query(lista, ['nombreCliente'], true);
            punterosProd = sq.getPunteros(['nombreCliente'], 'nombreCliente');
            // console.log('Query:::', punterosProd);
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                var monto = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[puntem[i]];
                    // cantidad = cantidad + 1;
                    cantidad += listaDatos.piezas;
                    monto += listaDatos.monto;
                }
                // console.log('Soy cantidad ', cantidad);
                if (cantidad > 0) {
                    arrayValores.push(cantidad);
                    arrayLabel.push(element);
                    _this.listaClientes.push({ 'nombreCliente': element, 'piezas': cantidad, 'monto': monto });
                }
            });
            /*For para ordenar los datos de acuerdo al monto*/
            var montoAuxL = void 0;
            var band = false;
            while (!band) {
                band = true;
                for (var i = 0; i < this.listaClientes.length - 1; i++) {
                    var aux = i + 1;
                    if (this.listaClientes[i].monto < this.listaClientes[aux].monto) {
                        montoAuxL = this.listaClientes[i + 1];
                        this.listaClientes[i + 1] = this.listaClientes[i];
                        this.listaClientes[i] = montoAuxL;
                        band = false;
                    }
                }
            }
            // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
            /**********************************************/
            // console.log('valores-->', arrayValores);
            // console.log('label-->', arrayLabel);
            /////////////////////////////////////////////////////////
            if (arrayValores.length > 0) {
                this.tipoGraficaCliente = 'general';
                Array.prototype.push.apply(this.filtroClientes, arrayLabel);
                Array.prototype.push.apply(this.arrayClientes, arrayValores);
            }
            else {
                arrayValores = new Array();
                arrayLabel = new Array();
                this.tipoGraficaCliente = "gris";
                arrayValores.push(1);
                arrayLabel.push("");
                Array.prototype.push.apply(this.filtroClientes, arrayLabel);
                Array.prototype.push.apply(this.arrayClientes, arrayValores);
            }
            // console.log('Soy filtro clientes:::', this.filtroClientes);
        }
        else {
            this.tipoGraficaCliente = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.filtroClientes, arrayLabel);
            Array.prototype.push.apply(this.arrayClientes, arrayValores);
        }
    };
    EmbalarComponent.prototype.ObtenerDatosGraficaPrioridades = function (lista) {
        // console.log('tamaño', lista.length);
        this.filtroPrioridades = [];
        this.arrayPrioridades = [];
        var arrayMonto = new Array();
        var sq = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var punterosPrio = new Array();
        var punteroP1 = new Array();
        var punteroP2 = new Array();
        var punteroP3 = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var arrayValores = new Array();
        var arrayValoresAux = new Array();
        var prioridadNom;
        if (lista.length > 0) {
            sq.Query(lista, ['prioridad'], true);
            punterosProd = sq.getPunteros(['prioridad'], 'prioridad');
            // console.log('Query:::', punterosProd);
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                var monto = 0;
                prioridadNom = '';
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[puntem[i]];
                    // cantidad = cantidad + 1;
                    cantidad += listaDatos.piezas;
                    monto += listaDatos.monto;
                }
                // console.log('Soy cantidad ', cantidad);
                if ((element !== 'null') && (cantidad > 0)) {
                    arrayValores.push(cantidad);
                    arrayLabel.push(element);
                    arrayMonto.push(monto);
                    if (element === 'p1') {
                        prioridadNom = 'Prioridad 1';
                    }
                    else if (element === 'p2') {
                        prioridadNom = 'Prioridad 2';
                    }
                    else if (element === 'p3') {
                        prioridadNom = 'Prioridad 3';
                    }
                }
                // this.listaPrioridades.push({prioridad: prioridadNom, piezas: cantidad, monto: monto});
            });
            console.log('----->>>>>>>>', this.listaPrioridades);
            if (arrayLabel.length > 0) {
                this.tipoGraficaPrioridades = 'prioridades';
                var arrayPrio = ['p1', 'p2', 'p3'];
                var arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
                for (var i = 0; i < arrayLabel.length; i++) {
                    for (var j = 0; j < arrayPrio.length; j++) {
                        if (arrayLabel[i] === arrayPrio[j]) {
                            arrayValoresAux[j] = arrayValores[i];
                            this.listaPrioridades[j] = ({ prioridad: arrayLabelAux[j], piezas: arrayValores[i], monto: arrayMonto[i] });
                        }
                        else if (arrayValoresAux[j] === undefined) {
                            arrayValoresAux[j] = 0;
                            this.listaPrioridades[j] = ({ prioridad: arrayLabelAux[j], piezas: 0, monto: 0 });
                        }
                    }
                }
                /*For para ordenar los datos de acuerdo al monto*/
                /* let montoAuxL: any;
                 let band = false;
                 while (!band) {
                   band= true;
                   for (var i= 0; i < this.listaPrioridades.length -1; i++){
                     var aux= i+1;
                     if (this.listaPrioridades[i].monto < this.listaPrioridades[aux].monto) {
                       montoAuxL = this.listaPrioridades[i+1];
                       this.listaPrioridades[i + 1] = this.listaPrioridades[i];
                       this.listaPrioridades[i] = montoAuxL;
                       band = false;
                     }
                   }
                 }*/
                /**********************************************/
                /*console.log('Valores Auxiliares-->', arrayValoresAux);
                console.log('Valores label---->', arrayPrio);*/
                Array.prototype.push.apply(this.filtroPrioridades, arrayLabelAux);
                Array.prototype.push.apply(this.arrayPrioridades, arrayValoresAux);
            }
            else {
                this.tipoGraficaPrioridades = "gris";
                arrayValores.push(1);
                arrayLabel.push("");
                Array.prototype.push.apply(this.filtroPrioridades, arrayLabel);
                Array.prototype.push.apply(this.arrayPrioridades, arrayValores);
            }
        }
        else {
            this.tipoGraficaPrioridades = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.filtroPrioridades, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridades, arrayValores);
        }
    };
    EmbalarComponent.prototype.obtenerDatosGraficaPrioridad1 = function (lista) {
        var _this = this;
        /// console.log('Soy lista -->', lista);
        this.filtroPrioridad1 = [];
        this.arrayPrioridad1 = [];
        this.filtroPrioridad2 = [];
        this.arrayPrioridad2 = [];
        this.filtroPrioridad3 = [];
        this.arrayPrioridad3 = [];
        var sq = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punteroP1 = new Array();
        var punteroP2 = new Array();
        var punteroP3 = new Array();
        var punterosProd = new Array();
        var punterosPrio = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var val = 0;
        var listaAux = new Array();
        var listaAuxP2 = new Array();
        var listaAuxP3 = new Array();
        var punterosAux = new Array();
        var sqAux = new __WEBPACK_IMPORTED_MODULE_6__class_compras_utils_query_class__["a" /* Query */]();
        this.arraylabelP1 = new Array();
        this.arrayValoresP1 = new Array();
        this.arraylabelP2 = new Array();
        this.arrayValoresP2 = new Array();
        this.arraylabelP3 = new Array();
        this.arrayValoresP3 = new Array();
        this.arrayLabelPro = new Array();
        this.arrayValoresPro = new Array();
        if (lista.length > 0) {
            sq.Query(lista, ['prioridad'], true);
            punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
            punteroP1 = sq.getPunteros(['p1']);
            if (punteroP1.length > 0) {
                this.tipoGraficaPrioridad1 = 'prioridadRoja';
                for (var i = 0; i < punteroP1.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[punteroP1[i]];
                    listaAux.push(listaDatos);
                }
                sqAux.Query(listaAux, ['nombreCliente'], true);
                punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');
                if (punterosAux.length > 0) {
                    //  for (var i: number = 0; i < punterosAux.length; i++) {
                    punterosAux.forEach(function (element) {
                        puntem = sqAux.getPunteros([element]);
                        var cantidad = 0;
                        var monto = 0;
                        for (var i = 0; i < puntem.length; i++) {
                            var listaDatosAux;
                            listaDatosAux = sqAux.universo[puntem[i]];
                            cantidad += listaDatosAux.piezas;
                            monto += listaDatosAux.monto;
                        }
                        if (cantidad > 0) {
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                            /* PRIORIDAD 1 */
                            _this.listaPrioridad1.push({ nombrePrio1: element, piezas: cantidad, monto: monto });
                        }
                    });
                    /*For para ordenar los datos de acuerdo al monto*/
                    var montoAuxL = void 0;
                    var band = false;
                    while (!band) {
                        band = true;
                        for (var i = 0; i < this.listaPrioridad1.length - 1; i++) {
                            var aux = i + 1;
                            if (this.listaPrioridad1[i].monto < this.listaPrioridad1[aux].monto) {
                                montoAuxL = this.listaPrioridad1[i + 1];
                                this.listaPrioridad1[i + 1] = this.listaPrioridad1[i];
                                this.listaPrioridad1[i] = montoAuxL;
                                band = false;
                            }
                        }
                    }
                    /**********************************************/
                    //  }
                    /////////////////////////////////////////////////////////
                    if (arrayValores.length > 0) {
                        Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
                    }
                    else {
                        arrayValores = new Array();
                        arrayLabel = new Array();
                        this.tipoGraficaPrioridad1 = "gris";
                        arrayValores.push(1);
                        arrayLabel.push("");
                        Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
                    }
                }
            }
            else {
                arrayValores = new Array();
                arrayLabel = new Array();
                this.tipoGraficaPrioridad1 = "gris";
                arrayValores.push(1);
                arrayLabel.push("");
                Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
                Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
            }
            punteroP2 = sq.getPunteros(['p2']);
            if (punteroP2.length > 0) {
                arrayValores = new Array();
                arrayLabel = new Array();
                for (var i = 0; i < punteroP2.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[punteroP2[i]];
                    listaAuxP2.push(listaDatos);
                }
                sqAux.Query(listaAuxP2, ['nombreCliente'], true);
                punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');
                if (punterosAux.length > 0) {
                    //  for (var i: number = 0; i < punterosAux.length; i++) {
                    punterosAux.forEach(function (element) {
                        puntem = sqAux.getPunteros([element]);
                        var cantidad = 0;
                        var monto = 0;
                        for (var i = 0; i < puntem.length; i++) {
                            //cantidad = cantidad + 1;
                            var listaDatosAux;
                            listaDatosAux = sqAux.universo[puntem[i]];
                            // console.log('Soy datos--> segunda fase', listaDatosAux);
                            cantidad += listaDatosAux.piezas;
                            monto += listaDatosAux.monto;
                        }
                        if (cantidad > 0) {
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                            /* PRIORIDAD 2*/
                            _this.listaPrioridad2.push({ nombrePrio2: element, piezas: cantidad, monto: monto });
                        }
                    });
                    /*For para ordenar los datos de acuerdo al monto*/
                    var montoAuxL = void 0;
                    var band = false;
                    while (!band) {
                        band = true;
                        for (var i = 0; i < this.listaPrioridad2.length - 1; i++) {
                            var aux = i + 1;
                            if (this.listaPrioridad2[i].monto < this.listaPrioridad2[aux].monto) {
                                montoAuxL = this.listaPrioridad2[i + 1];
                                this.listaPrioridad2[i + 1] = this.listaPrioridad2[i];
                                this.listaPrioridad2[i] = montoAuxL;
                                band = false;
                            }
                        }
                    }
                    /**********************************************/
                    if (arrayValores.length > 0) {
                        this.tipoGraficaPrioridad2 = 'prioridadNaranja';
                        Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
                    }
                    else {
                        var arrayLabel = new Array();
                        var arrayValores = new Array();
                        arrayLabel.push("");
                        arrayValores.push(1);
                        Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
                        this.tipoGraficaPrioridad2 = "gris";
                    }
                }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
                Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
                this.tipoGraficaPrioridad2 = "gris";
            }
            punteroP3 = sq.getPunteros(['p3']);
            if (punteroP3.length > 0) {
                arrayValores = new Array();
                arrayLabel = new Array();
                for (var i = 0; i < punteroP3.length; i++) {
                    var listaDatos;
                    listaDatos = sq.universo[punteroP3[i]];
                    listaAuxP3.push(listaDatos);
                }
                sqAux.Query(listaAuxP3, ['nombreCliente'], true);
                punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');
                if (punterosAux.length > 0) {
                    //  for (var i: number = 0; i < punterosAux.length; i++) {
                    punterosAux.forEach(function (element) {
                        puntem = sqAux.getPunteros([element]);
                        var cantidad = 0;
                        var monto = 0;
                        for (var i = 0; i < puntem.length; i++) {
                            //cantidad = cantidad + 1;
                            var listaDatosAux;
                            listaDatosAux = sqAux.universo[puntem[i]];
                            // console.log('Soy datos--> segunda fase', listaDatosAux);
                            cantidad += listaDatosAux.piezas;
                            monto += listaDatosAux.monto;
                        }
                        if (cantidad > 0) {
                            arrayValores.push(cantidad);
                            arrayLabel.push(element);
                            /* PRIORIDAD 3*/
                            _this.listaPrioridad3.push({ nombrePrio3: element, piezas: cantidad, monto: monto });
                        }
                    });
                    /*For para ordenar los datos de acuerdo al monto*/
                    var montoAuxL = void 0;
                    var band = false;
                    while (!band) {
                        band = true;
                        for (var i = 0; i < this.listaPrioridad3.length - 1; i++) {
                            var aux = i + 1;
                            if (this.listaPrioridad3[i].monto < this.listaPrioridad3[aux].monto) {
                                montoAuxL = this.listaPrioridad3[i + 1];
                                this.listaPrioridad3[i + 1] = this.listaPrioridad3[i];
                                this.listaPrioridad3[i] = montoAuxL;
                                band = false;
                            }
                        }
                    }
                    /**********************************************/
                    if (arrayValores.length > 0) {
                        this.tipoGraficaPrioridad3 = 'prioridadVerde';
                        Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
                    }
                    else {
                        var arrayLabel = new Array();
                        var arrayValores = new Array();
                        arrayLabel.push("");
                        arrayValores.push(1);
                        Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
                        Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
                        this.tipoGraficaPrioridad3 = "gris";
                    }
                }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
                Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
                this.tipoGraficaPrioridad3 = "gris";
            }
        }
        else {
            var arrayLabel = new Array();
            var arrayValores = new Array();
            this.tipoGraficaPrioridad1 = "gris";
            this.tipoGraficaPrioridad2 = "gris";
            this.tipoGraficaPrioridad3 = 'gris';
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
            Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
            Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
        }
    };
    EmbalarComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        if (this.listaGraficaProductos.length > 0) {
            for (var _i = 0, _a = this.listaGraficaProductos; _i < _a.length; _i++) {
                var valor = _a[_i];
                this.arrayProducto.push(valor.piezas);
                this.filtroProducto.push(valor.estado);
                this.tipoGraficaProductos = 'General';
            }
        }
        else {
            this.tipoGraficaProductos = 'Gris';
            this.arrayProducto.push(1);
            this.filtroProducto.push("");
        }
        var valoresP = [];
        var valoresProductos = [];
        for (var _b = 0, _c = this.listaGraficaProductos; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresProductos.push([0, 0]);
            valoresP.push(0);
        }
        if (valoresP.length > 0) {
            this.dataProductos = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.dataProductosAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.tipoGraficaProductos = 'VerdevsAzul';
        }
        else {
            this.dataProductos = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProductos = 'Gris';
            setTimeout(function () {
                _this.activarGrProd = true;
            }, 5);
        }
        /// Empieza lo de grafica por clientes
        if (this.listaClientes.length > 0) {
            for (var _d = 0, _e = this.listaClientes; _d < _e.length; _d++) {
                var valor = _e[_d];
                this.arrayClientesGra.push(valor.piezas);
                this.filtroClientesGra.push(valor.nombreCliente);
                this.tipoGraficaClienteGra = 'General';
            }
        }
        else {
            this.tipoGraficaClienteGra = 'gris';
            this.arrayClientesGra.push(1);
            this.filtroClientesGra.push("");
        }
        var valoresC = [];
        var valoresCliente = [];
        for (var _f = 0, _g = this.listaClientes; _f < _g.length; _f++) {
            var nombre = _g[_f];
            valoresCliente.push([0, 0]);
            valoresC.push(0);
        }
        if (valoresC.length > 0) {
            this.dataCLiente = {
                titulo: 'Totales',
                labels: this.filtroClientesGra,
                valores: valoresC,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresCliente,
            };
            this.dataClientesAux = {
                titulo: 'Totales',
                labels: this.filtroClientesGra,
                valores: valoresC,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresCliente,
            };
            this.tipoGraficaClienteGra = 'General';
        }
        else {
            this.dataCLiente = {
                titulo: 'Totales',
                labels: this.filtroClientesGra,
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaClienteGra = 'Gris';
            setTimeout(function () {
                _this.clienteData = true;
            }, 5);
        }
        //////// Empìeza grafica Prioridades //////
        if (this.listaPrioridades.length > 0) {
            for (var _h = 0, _j = this.listaPrioridades; _h < _j.length; _h++) {
                var prioridad = _j[_h];
                this.filtroPrioridadesGra.push(prioridad.prioridad);
                this.arrayPrioridadesGra.push(prioridad.piezas);
            }
            this.tipoGraficaGraPrio = 'Prioridades';
        }
        else {
            this.tipoGraficaGraPrio = 'Gris';
            this.filtroPrioridadesGra.push("");
            this.arrayPrioridadesGra.push(1);
        }
        var valoresPrio = [];
        var valoresPrioridades = [];
        for (var _k = 0, _l = this.listaPrioridades; _k < _l.length; _k++) {
            var nombre = _l[_k];
            valoresPrioridades.push([0, 0]);
            valoresPrio.push(0);
        }
        if (valoresPrio.length > 0) {
            this.dataPrioridades = {
                titulo: 'Totales',
                labels: this.filtroPrioridadesGra,
                valores: valoresPrio,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades,
            };
            this.dataPrioridadesAux = {
                titulo: 'Totales',
                labels: this.filtroPrioridadesGra,
                valores: valoresPrio,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades,
            };
            this.tipoGraficaPrioridades = 'Prioridades';
        }
        else {
            this.dataPrioridades = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, '0']],
            };
            this.tipoGraficaGraPrio = 'Gris';
            setTimeout(function () {
                _this.activarGrPrio = true;
            }, 5);
        }
        //////// Empìeza grafica Prioridad 1 //////
        if (this.listaPrioridad1.length > 0) {
            for (var _m = 0, _o = this.listaPrioridad1; _m < _o.length; _m++) {
                var prioridad = _o[_m];
                this.filtroPrioridad1Gra.push(prioridad.nombrePrio1);
                this.arrayPrioridad1Gra.push(prioridad.piezas);
            }
            this.tipoGraficaPrioridades1 = 'PrioridadRoja';
        }
        else {
            this.tipoGraficaPrioridades1 = 'Gris';
            this.filtroPrioridad1Gra.push("");
            this.arrayPrioridad1Gra.push(1);
        }
        var valoresPrio1 = [];
        var valoresPrioridades1 = [];
        for (var _p = 0, _q = this.listaPrioridad1; _p < _q.length; _p++) {
            var nombre = _q[_p];
            valoresPrioridades1.push([0, 0]);
            valoresPrio1.push(0);
        }
        if (valoresPrio1.length > 0) {
            this.dataPrioridadUno = {
                titulo: 'Totales',
                labels: this.filtroPrioridad1Gra,
                valores: valoresPrio1,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades1,
            };
            this.dataPrioridades1Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridad1Gra,
                valores: valoresPrio1,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades1,
            };
            this.tipoGraficaPrioridades1 = 'PrioridadRoja';
        }
        else {
            this.dataPrioridadUno = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, '0']],
            };
            this.tipoGraficaPrioridades1 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrio1 = true;
            }, 5);
        }
        //////// Empìeza grafica Prioridad 2 //////
        if (this.listaPrioridad2.length > 0) {
            for (var _r = 0, _s = this.listaPrioridad2; _r < _s.length; _r++) {
                var prioridad = _s[_r];
                this.filtroPrioridad2Gra.push(prioridad.nombrePrio2);
                this.arrayPrioridad2Gra.push(prioridad.piezas);
            }
            this.tipoGraficaPrioridades2 = 'PrioridadNaranja';
        }
        else {
            this.tipoGraficaPrioridades2 = 'Gris';
            this.filtroPrioridad2Gra.push("");
            this.arrayPrioridad2Gra.push(1);
        }
        var valoresPrio2 = [];
        var valoresPrioridades2 = [];
        for (var _t = 0, _u = this.listaPrioridad2; _t < _u.length; _t++) {
            var nombre = _u[_t];
            valoresPrioridades2.push([0, 0]);
            valoresPrio2.push(0);
        }
        if (valoresPrio2.length > 0) {
            this.dataPrioridadDos = {
                titulo: 'Totales',
                labels: this.filtroPrioridad2Gra,
                valores: valoresPrio2,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades2,
            };
            this.dataPrioridades2Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridad2Gra,
                valores: valoresPrio2,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades2,
            };
            this.tipoGraficaPrioridades2 = 'PrioridadNaranja';
        }
        else {
            this.dataPrioridadDos = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, '0']],
            };
            this.tipoGraficaPrioridades2 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrio2 = true;
            }, 5);
        }
        //////// Empìeza grafica Prioridad 3 //////
        if (this.listaPrioridad3.length > 0) {
            for (var _v = 0, _w = this.listaPrioridad3; _v < _w.length; _v++) {
                var prioridad = _w[_v];
                this.filtroPrioridad3Gra.push(prioridad.nombrePrio3);
                this.arrayPrioridad3Gra.push(prioridad.piezas);
            }
            this.tipoGraficaPrioridades3 = 'PrioridadVerde';
        }
        else {
            this.tipoGraficaPrioridades3 = 'Gris';
            this.filtroPrioridad3Gra.push("");
            this.arrayPrioridad3Gra.push(1);
        }
        var valoresPrio3 = [];
        var valoresPrioridades3 = [];
        for (var _x = 0, _y = this.listaPrioridad3; _x < _y.length; _x++) {
            var nombre = _y[_x];
            valoresPrioridades3.push([0, 0]);
            valoresPrio3.push(0);
        }
        if (valoresPrio3.length > 0) {
            this.dataPrioridadTres = {
                titulo: 'Totales',
                labels: this.filtroPrioridad3Gra,
                valores: valoresPrio3,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades3,
            };
            this.dataPrioridades3Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridad3Gra,
                valores: valoresPrio3,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades3,
            };
            this.tipoGraficaPrioridades3 = 'PrioridadVerde';
        }
        else {
            this.dataPrioridadTres = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, '0']],
            };
            this.tipoGraficaPrioridades3 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrio3 = true;
            }, 5);
        }
    };
    EmbalarComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.listaGraficaProductos; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficas(this.dataProductos, productos, 'PRODUCTOS', this.dataProductosAux);
        }
        for (var i = 0; i < this.dataProductos.valuesExtrasHover.length; i++) {
            this.dataProductos.valuesExtrasHover[i][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(this.dataProductos.valuesExtrasHover[i][1]);
        }
        /// Empieza clientes
        for (var _b = 0, _c = this.listaClientes; _b < _c.length; _b++) {
            var cliente = _c[_b];
            this.llenarTotalesGraficas(this.dataCLiente, cliente, 'CLIENTES', this.dataClientesAux);
        }
        for (var _d = 0, _e = this.listaPrioridades; _d < _e.length; _d++) {
            var prioridades = _e[_d];
            this.llenarTotalesGraficas(this.dataPrioridades, prioridades, 'PRIORIDADES', this.dataPrioridadesAux);
        }
        for (var _f = 0, _g = this.listaPrioridad1; _f < _g.length; _f++) {
            var prioridad1 = _g[_f];
            this.llenarTotalesGraficas(this.dataPrioridadUno, prioridad1, 'PRIORIDAD1', this.dataPrioridades1Aux);
        }
        for (var _h = 0, _j = this.listaPrioridad2; _h < _j.length; _h++) {
            var prioridad2 = _j[_h];
            this.llenarTotalesGraficas(this.dataPrioridadDos, prioridad2, 'PRIORIDAD2', this.dataPrioridades2Aux);
        }
        for (var _k = 0, _l = this.listaPrioridad3; _k < _l.length; _k++) {
            var prioridad3 = _l[_k];
            this.llenarTotalesGraficas(this.dataPrioridadTres, prioridad3, 'PRIORIDAD3', this.dataPrioridades3Aux);
        }
    };
    EmbalarComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida, totalAux) {
        var _this = this;
        switch (graficaElegida) {
            case 'PRODUCTOS':
                var valuesExtraAux = total.valuesExtras;
                var posicion1 = this.filtroProducto.indexOf(elemento.estado);
                if (this.nuevoProducto.indexOf(elemento.estado) === -1) {
                    this.nuevoProducto.push(elemento.estado);
                }
                total.valuesExtrasHover[posicion1][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicion1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    total.valores[posicion1] += 1;
                }
                total.valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                setTimeout(function () {
                    _this.activarGrProd = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtraAux = total.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroClientesGra.indexOf(elemento.nombreCliente);
                if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoClientes.push(elemento.nombreCliente);
                }
                total.valuesExtrasHover[posicion2][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicion2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    total.valores[posicion2] += 1;
                }
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion2][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.clienteData = true;
                }, 5);
                break;
            case 'PRIORIDADES':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP = this.filtroPrioridadesGra.indexOf(elemento.prioridad);
                if (this.nuevaPrioridad.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridad.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicionP] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    if (elemento.piezas > 0) {
                        total.valores[posicionP] += 1;
                    }
                }
                /*total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrio = true;
                }, 5);
                break;
            case 'PRIORIDAD1':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP1 = this.filtroPrioridad1Gra.indexOf(elemento.nombrePrio1);
                if (this.nuevaPrioridad1.indexOf(elemento.nombrePrio1) === -1) {
                    this.nuevaPrioridad1.push(elemento.nombrePrio1);
                }
                total.valuesExtrasHover[posicionP1][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicionP1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    total.valores[posicionP1] += 1;
                }
                /*total.valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP1][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP1][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrio1 = true;
                }, 5);
                break;
            case 'PRIORIDAD2':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP2 = this.filtroPrioridad2Gra.indexOf(elemento.nombrePrio2);
                if (this.nuevaPrioridad2.indexOf(elemento.nombrePrio2) === -1) {
                    this.nuevaPrioridad2.push(elemento.nomCliente);
                }
                total.valuesExtrasHover[posicionP2][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicionP2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    total.valores[posicionP2] += 1;
                }
                /*total.valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP2][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP2][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrio2 = true;
                }, 5);
                break;
            case 'PRIORIDAD3':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP3 = this.filtroPrioridad3Gra.indexOf(elemento.nombrePrio3);
                if (this.nuevaPrioridad3.indexOf(elemento.nombrePrio3) === -1) {
                    this.nuevaPrioridad3.push(elemento.nombrePrio3);
                }
                total.valuesExtrasHover[posicionP3][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                if (elemento.monto > 0) {
                    total.valores[posicionP3] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                }
                else {
                    total.valores[posicionP3] += 1;
                }
                /*total.valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP3][1] = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP3][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrio3 = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    EmbalarComponent.prototype.generarEtiquetaStock = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado());
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 288, height: 216 });
        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXoAAAEuCAYAAACAv9lxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZKSURBVHgB7d39ddTG28Zx+Tn8n3SQpAJCBYQKgAqACiAVhFRAUoGTChwqcKjAoQLHFTiuYJ+99sdthkVaSfdoJM2t7+ecPXlZr951aTSjGZ3t9hoAQFj/1wAAQiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgnvQZDg7O2sAAOXlDEtGiR4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4Agst6jr4Pr6MFgGFK9kuiRA8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwRH0ABAcQQ8AwT1oKvDkyZPO73788cfmxYsXh3+af/75p/n55587f/Ptt982z549ax4/ftx8//33rX/z+++/N3/99ddhWv/999/hN5rHy5cvD/Pr+vuuZbTlPPbq1avm33//PUz/4uLiq++1HloGuby8/Op7fad5//3334fp2PzevHnzxfz6tknqp59+an755Zcvfvvnn38e1i+dhz76u65t2LWubTStp0+fHuad0rZ//vx5M0Tb9gGwt8ugn5/6TKVvPvr89ttv93+/P+EH/WYfULvr6+sv5qX/3ofO6N/tLwC989tfXHa3t7df/E7Tsmm22Qdf5/bUOvctp81v6DbRR+sydB76vH37djeEreuYaWk7D11uoGYlj+8qSvRGJUeVqEUlPZU0VZKVfUAcSrAqGadUQkxLifqdlUz1UWn43bt399+r9GglaE3r9evXh/nqd/pb+53uMq6urr6an6g0rf+v3+hvNT39U/PVtNL5ef3xxx+H+dhyars8fPjwq+VUKVp3CpqvtpHRd5pG2zbSdETLa/Owv7O7hA8fPtz/XtO1bTWE/tama9vI7oZOTSvd/wBG2GVoZiph2fRUuj2WlqT3wXP4f2npta20mZYS05L0+fl5a2k4pVJ527TT5Wi7S0hLs/sLxP133hJ91/RsfvuwvP++bT36ttHxPPYXp6++13zte82vbT5t02tbV03LljmdVrqv2vY/EEXJPK2+MVb17Kar/vdYWqeclshVD232od9aWtf/N1aiHTK/tGT8/v37JkdaH68Sbto+YfPTXYM+XXcdY+ahkny6/MbaAkQl85z1svYPm5bdVQHIV1XVTZs0XKzK4RSr2jDHjbiiYDxuFDTWKGvVMdZQ20cNjRaKuSH28ePH+3/vWs7cKo50Hmq47qL57+vxD/+u9WprcB4q3X+qGjpet7S66Zg1DgP4WlVBryBRnXP63xaaKsW2neiq803rplP6Tfp0iUJb+gLDgt5+M7bEbPPxSu9cvvvuu6aEdBlPXUDT73LXK73TapuWtTm00T4m6IF2VQW9Tv62Ep2CVtUUQx/z09+p5KlSb9tv+gIrN9Bqc2p9S22LtulqP3ddVL/55psGQLuqgt6qTYxCWiXarsAWVZeo2kSlQT1Hnpbaj3+TPilzShpCQ0vzUwZiOs+bm5uma36euvkx87D5tP3G4+7u7v7f2/an9hnPygPjVdUYaye6fdQwqlv2UyV5q2/XxcA6JFkVwHFduV1EFF722OYx/da+03yHhlsalmOqGCxI0/mkDdBd9f26qP3www+H9fRcZNIqma6OYJI2YA9pIzkl3ea50wLw2aaGQEifHrEel2kIpo2Oaek/lfYu7WoIbZO2E6QNlhb66QXE2LPwkl7M9BsLflVlHd+B2LSs8dIT9Fo3m4emlQa60UUmrUobsz2Opc/Sn2oMBzBe9U/djKXG1+MOU9YgqwDWEyTWyenRo0eHgFb1kP6fwi4tzacNuSk9CWR1xirJ6zdW8j5+HFKBZgGn0nc6Py1bWwOxglDztouROm/Z7/S0jK2DzW9o20XbtrILm6aj9dA20jxtPunfDp1P2tai6prjC5I6S7XdKZ166ka0Lb3rCoS2y9CsoMNUm77OQMfDAaQdnI47NzUdQwscd1IaMgSChlY47kyljkGeIRdkH6698+vqxDSkw9SQeeizD+bdEEOGQNhfSL74zZghEKzDHFCjvuM7RxUleiulDa0P19/Zb9qexrBBu6w64tdff73vCKXfqZORSo76Pq0Dt6d1bIiDlObTVZq0Abvanm3XdNTeoGVIBw2z7/QbG4bhmLVPpHcafcuZTvvUNkrnoSotLZ/mkbYZ2KBmQ6tZTpW2bXiFtmkNLaXz5A3Q7uzTlcT347Ozk99nTHo1FGz2BEvuUyVj5idjqyFsFMySy9nWZgAgX8k8JegBYAVK5ikvHgGA4Ah6AAiOoAeA4Ah6AAiOoAeA4DbRM1bPwmt8c+sNezxwmT2SqEcG9dE4K+kQAFg3e1GJeuvay9xtPxt7HNSGs9Y+ToeSqJkN1631P3V8W98HW3cekd2OsI9X2vgs6oTkHTnS3qCkQcTmPCk09EE6vMDaqcPX3KGhfWr7t2sAuiFswLu593GuqY5vrX9Xh7w5pe9qHkPDk596Mc5Q2p5d7zo4RdttqhFVi+bpLkNTsMuul7r2p+9ZneqjIQ7ahiEoQUMSTL38JT9zbRfRkA7aPuk7caf4aHpz7mMvvdd4yFASaz6+23jP2amGvfDOX/tjKn3zypr2LkPJBRtLB2mJgE8/OsH2Je1daQR9O237qQO+bR+vccycOY5vfU6Ne1TSkkF/PPbVmGNlSn3zy5r2LkPJBRtDO6p0AKSffXXOriSC/ksqxc8RculHJdyuAeHmpjCb8/juGkSvpCWDfsiAhG2fKUvz0je/rGnvMpRcsKG0o+c6AdLPqZEhcxH0nw0ZTbTGfTyU7mKWWPe5w36poB8zOurx9pla3zxzVP14pRpv2kaEnGve6UtIMD0ba7/v1Y6laB9r/ku9I1gNrfainLlpmy+57nPRqKweXe+iWKtqg14Holrql6ShjPWEDMrQhXSpkDcKe28Y5LDXXS5pDedYSX0vsumiJ22WKmB6VRv0OvmWDgFRiWsNyxGNTkDPSViCHnXNeYTTYy2laa131MLMVkrzUmXQH7+rdGlLl7yi0YVziVL0Kd6XrHu0vQd4SXr5TLQqnC2V5qXKoF9b3bhKPXOX+CJTR6C13SXZO3znsLaLnEI+Wql+S6V5qS7odcKtMVTttYTIt6a7tdQcvZX1Yvk1VgVq3aOU6r0ZUmtpXqoL+rWWLHK6ouOztVVbpLR/Sxcy1nqRs/GEIjh+N/NQtZbmpbqgzz3RNLbHxcVFc319fRg7Qp/b29vDeBU5V2udCCqNIU/uNlSpS+OfpPtXH73wXS+Azx3TpeSdm44hhVAOHd9az6mPb4ly1+opLNZcmj/YZWgKPuDfxtu5wT77K3LvPPaB4O6FWLrH7BBLjxmSK6cH6OvXr3s7OOn7Fy9euOeh5SvF2xXfPvsLXO88cjqglVz3uY5b9Wb1zGfqXrBt+pYha9q7DCUXrM2+tOM+CYaEvFnL2BceNQd9TtA9e/Zs1LxyhlQo1WNUBYU5jm8tv/eCWmrd5zpuPRe5uc7rvuXIUVXVjbfaZuxtl25/9RnreAx0jKPx1L1UXTNGTn2r3m1QgrcOXMe3HoEc8/feHrel1n0O3vaf/R1gU7uqgt57Iii0x9bNencunaf8vNvOs3+9F3Mp1SjpXX9PaGsMeo+aj2/PI5XV181/UlXQe0vLT58+bcbyhgBB7+cNUO+LJ/TiDY9Sd23eY0dvjBrL3jY1Vq3Hd05pPsKbuKoKeu9B5nldnHau53d3d3cNfLwB6gm6nN+VCLucaXoLJVsKes8TQ1FK87KJEr33iuwJekr0fnO3b3iPixL72LvuOe+89ax/jW1Q3p7rUUrzUvUwxaXxcvB5eQM0wsm4RNB71Bj0W66bNwT9CQQ9UDfvcAeeBv41I+gBhLW1wcu6bCLoo4zRAWA471DEqrKJVJqXB01FVJXiqSO8ublpPNQYM/aJhsePHzcAlkdp/rNNBL0GivJ0EInUGANsCaX5L1VVdePt4KKqG4YmALaD0vyXqgp675VWIc+LQYBtoDT/taqC3tuTUeZ4OxCA5XkLdVFL81JV0HvHNJE53/kJYBm6e6c0/7XqGmNVT+99XFJDuepJGjpCAf97QmzM8May9nNni68JHKKqoBeV6r1Br6v9q1evDq8SBLYuZ6jmtfI0wkYvzUt1HaY8Qw6ndMWnCgeIxzsUcfTSvFQX9Kq6yS2F6EUNuS8ZB7AulOa7VTkEwhRX4OfPnzOkMBAEpfnTqgz6KeoWVV//5MkTwh4IgNL8adUOajbFlVghT9gDdXv//j2l+R7VBr1K9DnP1RvCHqibpzPklkrzUvUwxefn55M812thz3DGQF28rwncUmleqg56hbzCfgoW9jyNA9RDj0uPtbXSvFT/4hFV3+hxySlYAy0DoAF18IxKu7WQlxBvmHr37t2kPfx0xfcOcwpg3bY4wGGYVwlqWIMpr9QaA4SwB+LRXcDWqmjDBL3q6y8vLwl7AL22dl6Hejm4Qp6wB9Bna2+dCxX0QtgD6KOQ39LghuGCXgh7AH08j2bWKmTQS6mwZ4hjIAZV32ylUTZs0EuJsGeIYyAOjZOzBaGDXizsNY79VBjiGIhBwxtvoVE2fNCLhf0Ug6CJDgyF/ZZa7YGIdA5voSf8JoJe9Jy9OlXp5eBTUP0ejbNA/bbQKLuZoDe6VZtq5Dp1paa+HqibdwTMmmwu6EVPz0wV9pTqgfpFb5TdZNDLVGGvkgCjXQLr4G2Hi94ou9mgF4X9FHX2mg6A5XlHso3eKPug2ThdyW9ubrLq6PSopX4/5VDJQGk6Zj98+DDqN3qo4fXr180a6Q5dT9hp+Tznsxpl17puuTYf9KKncR49epT1bLzq6gl61EQhP/Zu1IJ0bbRceo+E6DzUBWlsVYw1ykY8jzdddWPs0cscOkB4rh5YhqpgrQe8zmcL/bGiNsoS9J+o52xuXTuNssD8FPDH5+7Tp08bj6iNsgR9wur4vHimHphf29Nzqn6hUfYzgv7I+fl540XQA/NK6+aPeR+1jNhTtprGWF1p53jju0oBqsbREAdjafnUoLvFt8wDS9Bosl1Ub68qHU+jrM7/KQdCXFo1Qa+r7KtXr0b9RoF7fX3djKWSgCfoRb8j6IF5qOH11HcKa8+dthplIwU9VTctcjpR6Zl8AOvg7f2ucawiNcoS9C1UIveWyhmnHlgPe6Z+LIV8pDY3gr6Dt9MEz9ID63KqHv+USK8NJeg7eEoBANbH25M3UidIgr4DQQ/EoHPZe4cepVRP0AMIz/uAhRplIwgd9NSX18XbAB5hP9fySG6td7p6ZHrLjbLhg94bAt7fUeUzP++TTnd3d43HmkI55ykvz29rPb5zBjqL8Ba5aoLe23nBeyJ4O0wR9H7eAPX2XVjTPs65eHjXY0tBL96BziI0ylYT9N4DzDvsqPd27eHDhw18vGHnHZvEu49Llei90x378hDxVknU3OvbO9CZ1N4oW03Q6wDzhL0nBDRUqRfDH/h579pUoh1b4rK3gnmUupjPeaHzXhwfP37c1Mwb9LU3ylZVR+8JAoXAmKuxAiCnTi7S+Bhz8waoQn7sPlvjPvZOVxesuY7x2gsy3mfqq2+U3WXQz099pvbmzZveeXZ99lfk3ulfX1/v9iebex770sJuaVoGz7Lv72J2S7u9vd3t79rc2//t27eD5qO/885Dy1fKvpTtXq45jvGS6z7nceudV+nzu2/+WdPeZSi5YG0uLy+zToRnz57tLi4uDoFi9O9XV1eHkz8nZIaeaKXVHPTiXf70ZNRxckz7Wf8/d/o6hkrRMuYsmz4vX75sPca17rnHeMl1n/O4zcmRdLtOrW/eWdPeZSi5YF1yw7jkR6WlpdUe9LpYTrU/9tUM95+ppnl+fr4rKfdCVPJTct3nPm69OTL0rtGjb945qnuO3jtAUWmqX6UhNp96ME71CJ/qou0zhVNvM5qKtw65NO0T7xub1sibI7U2ylYX9DljxZe01hO0NgqUtV7M5zj2vMPqlubtWbpW3n1Za6NsdUE/R6lqrDUuU8100VxbqMy1j9d6ofO+wGOttD+39Ex9lUMg6KBbUxBEOwmWpn27tm2q5Zmram7OeQ2xtuWZircqqsaeslUGvQ66tQSBSnmU5qenUq23xDU1BcLc+3jf8Nmsgc41vWA7Im97kEK+tlJ9tYOaKQiWvsXVSfDu3bsGZSjsli5JLrWPdZFb+tjSul9eXjZR5Qx05u1ZvJSqR6/UibBU46ydBAxiVo5t46XCfun5qyCz1J2rjuuLi4vwT5J5BzpTj/uaGmWrH6ZY49LMXbLXo5RLBsCWLBW2a9nHqjaZO+xtm29hOA/dOXnX0ztg4hJCjEevkr0+c5yUeiLk6uqKkJ+RtrW2+VwX9LXtY4X9XBcdBZ/WfUtjNnkbZVXIrKZRdpehKdiTy0M9U9UFvGmayT9dXevXpvaesX20j0v1HtV0NRzGWqn7/b50P2lP37Uc30setzlDT0w57EnfvLKmvctQcsFyKAymOCHUTVoDqdUQ8CZ60Bu7qE+1j9cc8Me07hqOIPeCp3XXNlzD8b30cbuGgc765pXj7NMMXM7Ozk5+nzHpydi44x8/frwft1z/L73lUsOTfXTLquFyc+ruMC9rGNObpvTvtn/b9rH2qf4ZZR9rXbXOevlI1/Et9j4HO771T9sWWIeSeRo+6AGgBiXzNPTLwQEABD0AhEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABPegKejs7KwBACyLEj0ABEfQA0BwBD0ABEfQA0BwBD0ABEfQA0BwBD0ABJf1HP1ut2sAAOtGiR4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4AgiPoASA4gh4Agvt/Rz8Y0WO346IAAAAASUVORK5CYII=';
        var html = [
            '\n' +
                '     <html><head>\n' +
                '        <style>\n' +
                '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
                '            html, body {\n' +
                '                width: 100%;\n' +
                '            }\n' +
                '            \n' +
                '            body {\n' +
                '                background: #cafe00;\n' +
                '            }\n' +
                '\n' +
                '            .contenido {\n' +
                '                display: flex;\n' +
                '                justify-content: center;\n' +
                '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
                '            }\n' +
                '\n' +
                '        </style></head>\n' +
                '        <body> \n' +
                '            <div class=\'contenido\' >\n' +
                '<div>',
            '<img style=\'width: 9cm; height:6cm;\' ',
            'src=\'' + base64 + '\'>',
            '</div>',
            '            </div>\n' +
                '        \n' +
                '        </body></html>'
        ].join('');
        /*const html = [
          '\n' +
          '     <html><head>\n' +
          '        <style>\n' +
          '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
          '            html, body {\n' +
          '                width: 100%;\n' +
          '            }\n' +
          '            \n' +
          '            body {\n' +
          '                background: #cafe00;border: 1px solid #424242\n' +
          '            }\n' +
          '\n' +
          '            .contenido {\n' +
          '                display: flex;\n' +
          '                justify-content: center;\n' +
          '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
          '            }\n' +
          '\n' +
          '        </style></head>\n' +
          '        <body> \n' +
          '            <div class=\'contenido\' >\n' +
          '<div>',
          '</div>',
          '                <span style=\'font-weight: bold;margin-top: 18px;margin-left: 18px;align-self: start;text-align: center; line-height: 1.2\'>PRODUCTO DE</span>\n' +
          '                 <div style=\'font-weight: 600;display: inline-block;margin-left: 18px; height: 20px;align-self: start;text-align: center;font-size: 70px;\'>STOCK</div>\n' +
          '            </div>\n' +
          '        \n' +
          '        </body></html>'
        ].join('');*/
        newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
        newWin.hide();
        newWin.webContents.on('did-finish-load', function () {
            var prints = newWin.webContents.getPrinters();
            var impresora = '';
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description == 'ZebraTicket') {
                    impresora = print_1.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        });
    };
    EmbalarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-embalar',
            template: __webpack_require__("./src/app/components/embalar/embalar.component.html"),
            styles: [__webpack_require__("./src/app/components/embalar/embalar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], EmbalarComponent);
    return EmbalarComponent;
}());



/***/ }),

/***/ "./src/app/components/embalar/embalar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbalarModule", function() { return EmbalarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__embalar_component__ = __webpack_require__("./src/app/components/embalar/embalar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__embalar_routing_module__ = __webpack_require__("./src/app/components/embalar/embalar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_radio_button_sin_label_radio_button_sin_label_module__ = __webpack_require__("./src/app/components/shared/radio-button-sin-label/radio-button-sin-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_graficas_embalaje_graficas_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/graficas-embalaje/graficas-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_vista_operacion_embalaje_vista_operacion_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/vista-operacion-embalaje/vista-operacion-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_informacion_oe_informacion_oe_component__ = __webpack_require__("./src/app/components/embalar/componentes/informacion-oe/informacion-oe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_barra_progreso_embalaje_barra_progreso_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/barra-progreso-embalaje/barra-progreso-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_barra_prioridades_embalaje_barra_prioridades_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_vista_colectar_elementos_vista_colectar_elementos_component__ = __webpack_require__("./src/app/components/embalar/componentes/vista-colectar-elementos/vista-colectar-elementos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_vista_embalar_productos_vista_embalar_productos_component__ = __webpack_require__("./src/app/components/embalar/componentes/vista-embalar-productos/vista-embalar-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_vista_generar_packing_list_vista_generar_packing_list_component__ = __webpack_require__("./src/app/components/embalar/componentes/vista-generar-packing-list/vista-generar-packing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_botonera_dias_embalaje_botonera_dias_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/botonera-dias-embalaje/botonera-dias-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_productos_por_embalar_productos_por_embalar_component__ = __webpack_require__("./src/app/components/embalar/componentes/productos-por-embalar/productos-por-embalar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_escanear_codigo_embalaje_escanear_codigo_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_packing_list_embalaje_packing_list_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/packing-list-embalaje/packing-list-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_fd_embalaje_fd_embalaje_component__ = __webpack_require__("./src/app/components/embalar/componentes/fd-embalaje/fd-embalaje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shared_barra_progreso_decremental_barra_progreso_decremental_component__ = __webpack_require__("./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_escanear_codigo_packing_list_escanear_codigo_packing_list_component__ = __webpack_require__("./src/app/components/embalar/componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_bolsa_contenedora_packing_list_bolsa_contenedora_packing_list_component__ = __webpack_require__("./src/app/components/embalar/componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_detalle_paquete_detalle_paquete_component__ = __webpack_require__("./src/app/components/embalar/componentes/detalle-paquete/detalle-paquete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_shared_visor_pdf_visor_pdf_component__ = __webpack_require__("./src/app/components/shared/visor-pdf/visor-pdf.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_barra_pasos_barra_pasos_component__ = __webpack_require__("./src/app/components/shared/barra-pasos/barra-pasos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_combo_sin_border_combo_sin_border_module__ = __webpack_require__("./src/app/components/shared/combo-sin-border/combo-sin-border.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__componentes_pop_up_embalar_pop_up_informativo_pop_up_informativo_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_pop_up_embalar_pop_up_generar_etiqueta_estado_pop_up_generar_etiqueta_estado_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_pop_up_embalar_pop_up_scanear_pop_up_scanear_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__componentes_pop_up_embalar_pop_up_paking_list_pop_up_paking_list_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__componentes_pop_up_embalar_pop_up_regresar_vist_principal_pop_up_regresar_vist_principal_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__componentes_pop_up_embalar_pop_up_exito_pop_up_exito_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__componentes_pop_up_embalar_impresion_confirmada_impresion_confirmada_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__componentes_pop_up_embalar_pop_up_timbrado_pop_up_timbrado_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__componentes_pop_up_embalar_pop_up_facturacion_pop_up_facturacion_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__componentes_pop_up_embalar_pop_up_correo_pop_up_correo_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__componentes_ruta_envio_ruta_envio_component__ = __webpack_require__("./src/app/components/embalar/componentes/ruta-envio/ruta-envio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__ = __webpack_require__("./src/app/components/shared/check-gris-palomita-verde/check-gris-palomita-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__componentes_pop_up_embalar_pop_up_medidas_pop_up_medidas_component__ = __webpack_require__("./src/app/components/embalar/componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















































// import { MenuSeccionComponent } from "../shared/menu-seccion/menu-seccion.component";
var EmbalarModule = /** @class */ (function () {
    function EmbalarModule() {
    }
    EmbalarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__embalar_routing_module__["a" /* EmbalarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_radio_button_sin_label_radio_button_sin_label_module__["a" /* RadioButtonSinLabelModule */],
                __WEBPACK_IMPORTED_MODULE_32__shared_combo_sin_border_combo_sin_border_module__["a" /* ComboSinBorderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_31__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_41__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_42__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_43__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_44__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_48__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_49__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__["a" /* CheckGrisPalomitaVerdeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__embalar_component__["a" /* EmbalarComponent */],
                // FileUploadComponent,
                // AlertaComponent,
                __WEBPACK_IMPORTED_MODULE_12__componentes_graficas_embalaje_graficas_embalaje_component__["a" /* GraficasEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__componentes_vista_operacion_embalaje_vista_operacion_embalaje_component__["a" /* VistaOperacionEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__componentes_informacion_oe_informacion_oe_component__["a" /* InformacionOeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_barra_progreso_embalaje_barra_progreso_embalaje_component__["a" /* BarraProgresoEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__componentes_barra_prioridades_embalaje_barra_prioridades_embalaje_component__["a" /* BarraPrioridadesEmbalajeComponent */],
                // BarraActividadesComponent,
                __WEBPACK_IMPORTED_MODULE_17__componentes_vista_colectar_elementos_vista_colectar_elementos_component__["a" /* VistaColectarElementosComponent */],
                __WEBPACK_IMPORTED_MODULE_18__componentes_vista_embalar_productos_vista_embalar_productos_component__["a" /* VistaEmbalarProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_19__componentes_vista_generar_packing_list_vista_generar_packing_list_component__["a" /* VistaGenerarPackingListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__componentes_botonera_dias_embalaje_botonera_dias_embalaje_component__["a" /* BotoneraDiasEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__componentes_productos_por_embalar_productos_por_embalar_component__["a" /* ProductosPorEmbalarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_escanear_codigo_embalaje_escanear_codigo_embalaje_component__["a" /* EscanearCodigoEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__componentes_packing_list_embalaje_packing_list_embalaje_component__["a" /* PackingListEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__componentes_fd_embalaje_fd_embalaje_component__["a" /* FdEmbalajeComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_shared_barra_progreso_decremental_barra_progreso_decremental_component__["a" /* BarraProgresoDecrementalComponent */],
                __WEBPACK_IMPORTED_MODULE_26__componentes_escanear_codigo_packing_list_escanear_codigo_packing_list_component__["a" /* EscanearCodigoPackingListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__componentes_bolsa_contenedora_packing_list_bolsa_contenedora_packing_list_component__["a" /* BolsaContenedoraPackingListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__componentes_detalle_paquete_detalle_paquete_component__["a" /* DetallePaqueteComponent */],
                // CheckGrisPalomitaVerdeComponent,
                __WEBPACK_IMPORTED_MODULE_29__components_shared_visor_pdf_visor_pdf_component__["a" /* VisorPdfComponent */],
                // MenuSeccionComponent,
                __WEBPACK_IMPORTED_MODULE_30__shared_barra_pasos_barra_pasos_component__["a" /* BarraPasosComponent */],
                __WEBPACK_IMPORTED_MODULE_33__componentes_pop_up_embalar_pop_up_informativo_pop_up_informativo_component__["a" /* PopUpInformativoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__componentes_pop_up_embalar_pop_up_generar_etiqueta_estado_pop_up_generar_etiqueta_estado_component__["a" /* PopUpGenerarEtiquetaEstadoComponent */],
                __WEBPACK_IMPORTED_MODULE_35__componentes_pop_up_embalar_pop_up_scanear_pop_up_scanear_component__["a" /* PopUpScanearComponent */],
                __WEBPACK_IMPORTED_MODULE_36__componentes_pop_up_embalar_pop_up_paking_list_pop_up_paking_list_component__["a" /* PopUpPakingListComponent */],
                __WEBPACK_IMPORTED_MODULE_37__componentes_pop_up_embalar_pop_up_regresar_vist_principal_pop_up_regresar_vist_principal_component__["a" /* PopUpRegresarVistPrincipalComponent */],
                __WEBPACK_IMPORTED_MODULE_38__componentes_pop_up_embalar_pop_up_exito_pop_up_exito_component__["a" /* PopUpExitoComponent */],
                __WEBPACK_IMPORTED_MODULE_39__componentes_pop_up_embalar_impresion_confirmada_impresion_confirmada_component__["a" /* ImpresionConfirmadaComponent */],
                __WEBPACK_IMPORTED_MODULE_40__componentes_pop_up_embalar_pop_up_timbrado_pop_up_timbrado_component__["a" /* PopUpTimbradoComponent */],
                __WEBPACK_IMPORTED_MODULE_45__componentes_pop_up_embalar_pop_up_facturacion_pop_up_facturacion_component__["a" /* PopUpFacturacionComponent */],
                __WEBPACK_IMPORTED_MODULE_46__componentes_pop_up_embalar_pop_up_correo_pop_up_correo_component__["a" /* PopUpCorreoComponent */],
                __WEBPACK_IMPORTED_MODULE_47__componentes_ruta_envio_ruta_envio_component__["a" /* RutaEnvioComponent */],
                __WEBPACK_IMPORTED_MODULE_50__componentes_pop_up_embalar_pop_up_medidas_pop_up_medidas_component__["a" /* PopUpMedidasComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__embalar_component__["a" /* EmbalarComponent */]
            ]
        })
    ], EmbalarModule);
    return EmbalarModule;
}());



/***/ }),

/***/ "./src/app/components/shared/barra-pasos/barra-pasos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraActividades\">\r\n\r\n    <div class=\"flechaIzq\">\r\n      <img id=\"FlechaIzqVerde\" [src]=\"classflechaizq\" (click)=\"desplazamientoIzq()\" />\r\n    </div>\r\n  \r\n  \r\n    <div class=\"contenido\">\r\n      <a href=\"javascript:;\" class=\"elemento\" (click)=\"select(i)\" *ngFor=\"let item of lstItems; let i = index\" >\r\n        <div [ngClass]=\"classText[i]\">{{item}}</div>\r\n        <hr [ngClass]=\"classHr[i]\" >\r\n      </a>\r\n    </div>\r\n  \r\n    <div class=\"flechaDer\">\r\n      <img id=\"FlechaDerVerde\" [src]=\"classflechader\" (click)=\"desplazamientoDer()\"/>\r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/components/shared/barra-pasos/barra-pasos.component.scss":
/***/ (function(module, exports) {

module.exports = ".barraActividades{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-height:70px}.flechaIzq{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;cursor:pointer}.contenido{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-item-align:auto;align-self:auto;text-align:center;padding:15px}.elemento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:50%;font-size:12px;font-family:\"Roboto\",sans-serif;text-decoration:none;color:gray;padding-bottom:15px}.flechaDer{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;cursor:pointer}.texto{font-size:12px;font-family:\"Roboto\",sans-serif;text-decoration:none;color:gray}.hr{height:8px;background-color:#d8d9dd;width:100%;border:1px solid #d8d9dd}#FlechaIzqVerde,#FlechaDerVerde{width:19.5px;height:29.5px}.hrFocus{height:8px;width:100%;border:1px solid #008895;background-color:#008895}.textFocus{font-size:12px;font-family:\"Roboto\",sans-serif;text-decoration:none;color:#000;font-weight:600}"

/***/ }),

/***/ "./src/app/components/shared/barra-pasos/barra-pasos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraPasosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarraPasosComponent = /** @class */ (function () {
    function BarraPasosComponent() {
        this.blockLeft = false;
        this.blockRight = false;
        this.blockItems = false;
        this.siguiente = false;
        this.anterior = false;
        this.pasoApaso = false;
        this.activarPasos = false;
        this.eventCambio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.indexselected = 0;
    }
    BarraPasosComponent.prototype.ngOnInit = function () {
        if (this.activarPasos !== true) {
            this.classText = new Array(this.lstItems.length).fill("text");
            this.classHr = new Array(this.lstItems.length).fill("hr");
            this.classHr[0] = "hrFocus";
            this.classText[0] = "textFocus";
        }
        if (this.blockLeft) {
            this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        }
        else {
            if (this.indexselected == 0) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
            }
            else {
                this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
            }
        }
        if (this.blockRight) {
            this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
        }
        else {
            if (this.indexselected + 1 == this.lstItems.length) {
                this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
            }
            else {
                this.classflechader = "./assets/Images/FlechaDerVerde.svg";
            }
        }
    };
    BarraPasosComponent.prototype.ngOnChanges = function (change) {
        if (this.activarPasos === true) {
            this.classText = new Array(this.lstItems.length).fill("text");
            this.classHr = new Array(this.lstItems.length).fill("hr");
            this.classHr[0] = "hrFocus";
            this.classText[0] = "textFocus";
        }
        if (this.blockLeft) {
            this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        }
        else {
            if (this.indexselected == 0) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
            }
            else {
                this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
            }
        }
        if (this.blockRight) {
            this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
        }
        else {
            if (this.indexselected + 1 == this.lstItems.length) {
                this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
            }
            else {
                this.classflechader = "./assets/Images/FlechaDerVerde.svg";
            }
        }
        if (this.siguiente) {
            this.desplazamientoDer();
        }
        if (this.anterior) {
            this.desplazamientoIzq();
        }
    };
    BarraPasosComponent.prototype.desplazamientoIzq = function () {
        if (this.indexselected > 0 && !this.blockLeft) {
            this.indexselected -= 1;
            this.classHr.fill("hr");
            this.classText.fill("text");
            this.classHr[this.indexselected] = "hrFocus";
            this.classText[this.indexselected] = "textFocus";
            if (!this.blockRight) {
                this.classflechader = "./assets/Images/FlechaDerVerde.svg";
            }
            this.eventCambio.emit(this.lstItems[this.indexselected]);
            if (this.indexselected == 0) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
            }
        }
    };
    BarraPasosComponent.prototype.desplazamientoDer = function () {
        if (this.indexselected + 1 < this.lstItems.length && !this.blockRight) {
            this.indexselected += 1;
            this.classHr.fill("hr");
            this.classText.fill("text");
            this.classHr[this.indexselected] = "hrFocus";
            this.classText[this.indexselected] = "textFocus";
            if (!this.blockLeft) {
                this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
            }
            this.eventCambio.emit(this.lstItems[this.indexselected]);
            if (this.indexselected + 1 == this.lstItems.length) {
                this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
            }
        }
    };
    BarraPasosComponent.prototype.select = function ($i) {
        if (!this.blockItems &&
            (!this.blockLeft || (this.blockLeft && $i > this.indexselected)) &&
            (!this.blockRight || (this.blockRight && $i < this.indexselected)) &&
            (!this.pasoApaso ||
                (this.pasoApaso &&
                    ($i == this.indexselected + 1 || $i == this.indexselected - 1)))) {
            this.indexselected = $i;
            this.classHr.fill("hr");
            this.classText.fill("text");
            this.classHr[this.indexselected] = "hrFocus";
            this.classText[this.indexselected] = "textFocus";
            this.eventCambio.emit(this.lstItems[this.indexselected]);
            if (this.indexselected == 0) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
            }
            else {
                if (!this.blockLeft) {
                    this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
                }
            }
            if (this.indexselected + 1 == this.lstItems.length) {
                this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
            }
            else {
                if (!this.blockRight) {
                    this.classflechader = "./assets/Images/FlechaDerVerde.svg";
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraPasosComponent.prototype, "lstItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "blockLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "blockRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "blockItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "siguiente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "anterior", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "pasoApaso", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraPasosComponent.prototype, "activarPasos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BarraPasosComponent.prototype, "eventCambio", void 0);
    BarraPasosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-barra-pasos",
            template: __webpack_require__("./src/app/components/shared/barra-pasos/barra-pasos.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/barra-pasos/barra-pasos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraPasosComponent);
    return BarraPasosComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraProgresoDecremento\">\r\n\r\n  <div class=\"textoBarra\">\r\n    <p>{{pzasAlMomento}} de {{pzasTotales}} {{mensajePzas}}</p>\r\n  </div>\r\n\r\n  <div class=\"graficaDecremento\">\r\n\r\n    <div id=\"myProgress\" *ngIf=\"normal\">\r\n      <div id=\"myBar\" [style.width]=\"restante\"></div>\r\n      <div id=\"myBar2\" [style.width]=\"progreso\"></div>\r\n    </div>\r\n\r\n    <div id=\"myProgressOpaco\" *ngIf=\"opaco\">\r\n      <div id=\"myBarOpaco\" [style.width]=\"restante\"></div>\r\n      <div id=\"myBar2Opaco\" [style.width]=\"progreso\"></div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.scss":
/***/ (function(module, exports) {

module.exports = ".barraProgresoDecremento{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.textoBarra{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;font-size:25px;color:#404040}.graficaDecremento{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#myProgress{width:100%;background-color:#ddd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:14px;font-weight:bold;margin-top:1%;color:#9b9b9b;border-radius:8px}#myProgress>#myBar{height:100%;background-color:#008895;text-align:center;line-height:30px;color:#424242;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;position:relative;display:inline-block;border-radius:8px}#myProgress>#myBar2{height:100%;background-color:#ddd;text-align:center;line-height:30px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#9b9b9b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;display:inline-block;border-radius:8px}#myProgressOpaco{width:100%;background-color:#ddd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:14px;font-weight:bold;margin-top:1%;color:#9b9b9b;border-radius:8px}#myProgressOpaco>#myBarOpaco{height:100%;opacity:.5;background:#008895;line-height:30px;color:#424242;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;border-radius:8px}#myProgressOpaco>#myBar2Opaco{height:100%;background-color:#ddd;text-align:center;line-height:30px;color:#fff;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:auto;align-self:auto;color:#9b9b9b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:8px}"

/***/ }),

/***/ "./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoDecrementalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarraProgresoDecrementalComponent = /** @class */ (function () {
    function BarraProgresoDecrementalComponent() {
    }
    BarraProgresoDecrementalComponent.prototype.ngOnInit = function () {
        /*this.dibujarBarra();*/
    };
    BarraProgresoDecrementalComponent.prototype.ngOnChanges = function () {
        this.dibujarBarra();
    };
    BarraProgresoDecrementalComponent.prototype.dibujarBarra = function () {
        if (this.tipo == "opaco") {
            this.opaco = true;
            this.normal = false;
        }
        else if (this.tipo == "normal") {
            this.normal = true;
            this.opaco = false;
        }
        else {
            console.log("Error al ejecutar un tipo de barra de decremento... ");
        }
        this.progreso = this.obtenerRestante(this.pzasTotales) + "%";
        this.restante = this.obtenerPorcentaje(this.pzasTotales, this.pzasAlMomento) + "%";
    };
    //Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoDecrementalComponent.prototype.obtenerPorcentaje = function (pzasTotales, pzasAlMomento) {
        var porcentaje;
        if (pzasTotales < pzasAlMomento) {
            console.log("El numero de piezas al momento es mayor que las piezas totales");
        }
        else if (pzasTotales == pzasAlMomento) {
            porcentaje = Math.round((pzasAlMomento * 100) / pzasTotales);
        }
        else {
            porcentaje = Math.round((pzasAlMomento * 100) / pzasTotales);
        }
        return porcentaje;
    };
    //Funcion para obtener porcentaje restante
    BarraProgresoDecrementalComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.pzasAlMomento);
        return restante;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraProgresoDecrementalComponent.prototype, "pzasTotales", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraProgresoDecrementalComponent.prototype, "pzasAlMomento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BarraProgresoDecrementalComponent.prototype, "mensajePzas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BarraProgresoDecrementalComponent.prototype, "tipo", void 0);
    BarraProgresoDecrementalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-barra-progreso-decremental',
            template: __webpack_require__("./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/barra-progreso-decremental/barra-progreso-decremental.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraProgresoDecrementalComponent);
    return BarraProgresoDecrementalComponent;
}());



/***/ })

});
//# sourceMappingURL=embalar.module.chunk.js.map