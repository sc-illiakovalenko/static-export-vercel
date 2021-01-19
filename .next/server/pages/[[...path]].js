module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("p9pM");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3qfc":
/***/ (function(module, exports) {

module.exports = require("next-localization");

/***/ }),

/***/ "4+8z":
/***/ (function(module) {

module.exports = JSON.parse("{\"__schema\":{\"types\":[{\"kind\":\"INTERFACE\",\"name\":\"ItemField\",\"possibleTypes\":[{\"name\":\"ReferenceField\"},{\"name\":\"NumberField\"},{\"name\":\"MultilistField\"},{\"name\":\"LinkField\"},{\"name\":\"TextField\"},{\"name\":\"IntegerField\"},{\"name\":\"ImageField\"},{\"name\":\"FileField\"},{\"name\":\"DateField\"},{\"name\":\"CheckboxField\"},{\"name\":\"NameValueListField\"},{\"name\":\"LookupField\"},{\"name\":\"LayoutField\"}]},{\"kind\":\"INTERFACE\",\"name\":\"InsertOptions\",\"possibleTypes\":[{\"name\":\"ItemTemplate\"}]},{\"kind\":\"INTERFACE\",\"name\":\"Item\",\"possibleTypes\":[{\"name\":\"UnknownItem\"},{\"name\":\"StyleguideTracking\"},{\"name\":\"StyleguideSitecoreContext\"},{\"name\":\"StyleguideSection\"},{\"name\":\"StyleguideRouteFields\"},{\"name\":\"StyleguideMultilingual\"},{\"name\":\"StyleguideLayoutTabsTab\"},{\"name\":\"StyleguideLayoutTabs\"},{\"name\":\"StyleguideLayoutReuse\"},{\"name\":\"StyleguideItemLinkItemTemplate\"},{\"name\":\"StyleguideFieldUsageText\"},{\"name\":\"StyleguideFieldUsageRichText\"},{\"name\":\"StyleguideFieldUsageNumber\"},{\"name\":\"StyleguideFieldUsageLink\"},{\"name\":\"StyleguideFieldUsageItemLink\"},{\"name\":\"StyleguideFieldUsageImage\"},{\"name\":\"StyleguideFieldUsageFile\"},{\"name\":\"StyleguideFieldUsageDate\"},{\"name\":\"StyleguideFieldUsageCustom\"},{\"name\":\"StyleguideFieldUsageContentList\"},{\"name\":\"StyleguideFieldUsageCheckbox\"},{\"name\":\"C__StyleguideExplanatoryComponent\"},{\"name\":\"StyleguideContentListItemTemplate\"},{\"name\":\"StyleguideComponentParamsRenderingParameters\"},{\"name\":\"StyleguideComponentParams\"},{\"name\":\"C__StandardTemplate\"},{\"name\":\"GraphQLIntegratedDemo\"},{\"name\":\"GraphQLConnectedDemo\"},{\"name\":\"ExampleCustomRouteType\"},{\"name\":\"ContentBlock\"},{\"name\":\"C__AppRoute\"}]},{\"kind\":\"INTERFACE\",\"name\":\"StyleguideExplanatoryComponent\",\"possibleTypes\":[{\"name\":\"StyleguideTracking\"},{\"name\":\"StyleguideSitecoreContext\"},{\"name\":\"StyleguideRouteFields\"},{\"name\":\"StyleguideMultilingual\"},{\"name\":\"StyleguideLayoutTabs\"},{\"name\":\"StyleguideLayoutReuse\"},{\"name\":\"StyleguideFieldUsageText\"},{\"name\":\"StyleguideFieldUsageRichText\"},{\"name\":\"StyleguideFieldUsageNumber\"},{\"name\":\"StyleguideFieldUsageLink\"},{\"name\":\"StyleguideFieldUsageItemLink\"},{\"name\":\"StyleguideFieldUsageImage\"},{\"name\":\"StyleguideFieldUsageFile\"},{\"name\":\"StyleguideFieldUsageDate\"},{\"name\":\"StyleguideFieldUsageCustom\"},{\"name\":\"StyleguideFieldUsageContentList\"},{\"name\":\"StyleguideFieldUsageCheckbox\"},{\"name\":\"C__StyleguideExplanatoryComponent\"},{\"name\":\"StyleguideComponentParams\"}]},{\"kind\":\"INTERFACE\",\"name\":\"AppRoute\",\"possibleTypes\":[{\"name\":\"ExampleCustomRouteType\"},{\"name\":\"C__AppRoute\"}]}]}}");

/***/ }),

/***/ "45PC":
/***/ (function(module, exports) {

module.exports = require("@sitecore-jss/sitecore-jss-tracking");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "MbQT":
/***/ (function(module, exports) {

module.exports = require("@sitecore-jss/sitecore-jss-nextjs");

/***/ }),

/***/ "NSsw":
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "WzpI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);





/**
 * Rendered in case if we have 404 error
 */
const NotFound = ({
  context
}) => {
  var _context$site;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "404: NotFound"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: {
        padding: 10
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        children: "Page not found"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
        children: "This page does not exist."
      }), context && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["Site: ", (_context$site = context.site) === null || _context$site === void 0 ? void 0 : _context$site.name, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), "Language: ", context.language]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "/",
        children: "Go to the Home page"
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cUJ6":
/***/ (function(module, exports) {

/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};
config.sitecoreApiKey = process.env.SITECORE_API_KEY || "{4FEFEBB5-49D7-4E8F-89D5-D40BC1F23BAD}", config.sitecoreApiHost = process.env.SITECORE_API_HOST || "http://jssnextweb", config.jssAppName = process.env.JSS_APP_NAME || "JssNextWeb", config.graphqlEndpointPath = process.env.GRAPHQL_ENDPOINT_PATH || "/api/jssnextweb", config.graphqlEndpoint = `${config.sitecoreApiHost}${config.graphqlEndpointPath}?sc_apikey=${config.sitecoreApiKey}`;
module.exports = config;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "kiQV":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"appName\":\"JssNextWeb\",\"rootPlaceholders\":[\"jss-main\"],\"sitecoreDistPath\":\"/dist/JssNextWeb\",\"sitecoreConfigPath\":\"/App_Config/Include/zzz\",\"graphqlEndpointPath\":\"/api/jssnextweb\",\"language\":\"en\"}}");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p9pM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ _path_getStaticProps; });

// NAMESPACE OBJECT: ./src/components/ContentBlock/index.tsx
var ContentBlock_namespaceObject = {};
__webpack_require__.r(ContentBlock_namespaceObject);
__webpack_require__.d(ContentBlock_namespaceObject, "default", function() { return components_ContentBlock; });

// NAMESPACE OBJECT: ./src/components/GraphQL-ConnectedDemo/index.tsx
var GraphQL_ConnectedDemo_namespaceObject = {};
__webpack_require__.r(GraphQL_ConnectedDemo_namespaceObject);
__webpack_require__.d(GraphQL_ConnectedDemo_namespaceObject, "getStaticProps", function() { return getStaticProps; });
__webpack_require__.d(GraphQL_ConnectedDemo_namespaceObject, "getServerSideProps", function() { return getServerSideProps; });
__webpack_require__.d(GraphQL_ConnectedDemo_namespaceObject, "default", function() { return GraphQL_ConnectedDemo; });

// NAMESPACE OBJECT: ./src/components/GraphQL-IntegratedDemo/index.tsx
var GraphQL_IntegratedDemo_namespaceObject = {};
__webpack_require__.r(GraphQL_IntegratedDemo_namespaceObject);
__webpack_require__.d(GraphQL_IntegratedDemo_namespaceObject, "default", function() { return GraphQL_IntegratedDemo; });

// NAMESPACE OBJECT: ./src/components/GraphQL-Layout/index.tsx
var GraphQL_Layout_namespaceObject = {};
__webpack_require__.r(GraphQL_Layout_namespaceObject);
__webpack_require__.d(GraphQL_Layout_namespaceObject, "default", function() { return GraphQL_Layout; });

// NAMESPACE OBJECT: ./src/components/Styleguide-ComponentParams/index.tsx
var Styleguide_ComponentParams_namespaceObject = {};
__webpack_require__.r(Styleguide_ComponentParams_namespaceObject);
__webpack_require__.d(Styleguide_ComponentParams_namespaceObject, "default", function() { return Styleguide_ComponentParams; });

// NAMESPACE OBJECT: ./src/components/Styleguide-CustomRouteType/index.tsx
var Styleguide_CustomRouteType_namespaceObject = {};
__webpack_require__.r(Styleguide_CustomRouteType_namespaceObject);
__webpack_require__.d(Styleguide_CustomRouteType_namespaceObject, "default", function() { return Styleguide_CustomRouteType; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Checkbox/index.tsx
var Styleguide_FieldUsage_Checkbox_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Checkbox_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Checkbox_namespaceObject, "default", function() { return Styleguide_FieldUsage_Checkbox; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-ContentList/index.tsx
var Styleguide_FieldUsage_ContentList_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_ContentList_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_ContentList_namespaceObject, "default", function() { return Styleguide_FieldUsage_ContentList; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Custom/index.tsx
var Styleguide_FieldUsage_Custom_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Custom_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Custom_namespaceObject, "default", function() { return Styleguide_FieldUsage_Custom; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Date/index.tsx
var Styleguide_FieldUsage_Date_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Date_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Date_namespaceObject, "default", function() { return Styleguide_FieldUsage_Date; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-File/index.tsx
var Styleguide_FieldUsage_File_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_File_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_File_namespaceObject, "default", function() { return Styleguide_FieldUsage_File; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Image/index.tsx
var Styleguide_FieldUsage_Image_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Image_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Image_namespaceObject, "default", function() { return Styleguide_FieldUsage_Image; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-ItemLink/index.tsx
var Styleguide_FieldUsage_ItemLink_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_ItemLink_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_ItemLink_namespaceObject, "default", function() { return Styleguide_FieldUsage_ItemLink; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Link/index.tsx
var Styleguide_FieldUsage_Link_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Link_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Link_namespaceObject, "default", function() { return Styleguide_FieldUsage_Link; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Number/index.tsx
var Styleguide_FieldUsage_Number_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Number_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Number_namespaceObject, "default", function() { return Styleguide_FieldUsage_Number; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-RichText/index.tsx
var Styleguide_FieldUsage_RichText_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_RichText_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_RichText_namespaceObject, "default", function() { return Styleguide_FieldUsage_RichText; });

// NAMESPACE OBJECT: ./src/components/Styleguide-FieldUsage-Text/index.tsx
var Styleguide_FieldUsage_Text_namespaceObject = {};
__webpack_require__.r(Styleguide_FieldUsage_Text_namespaceObject);
__webpack_require__.d(Styleguide_FieldUsage_Text_namespaceObject, "default", function() { return Styleguide_FieldUsage_Text; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Layout/index.tsx
var Styleguide_Layout_namespaceObject = {};
__webpack_require__.r(Styleguide_Layout_namespaceObject);
__webpack_require__.d(Styleguide_Layout_namespaceObject, "default", function() { return Styleguide_Layout; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Layout-Reuse/index.tsx
var Styleguide_Layout_Reuse_namespaceObject = {};
__webpack_require__.r(Styleguide_Layout_Reuse_namespaceObject);
__webpack_require__.d(Styleguide_Layout_Reuse_namespaceObject, "default", function() { return Styleguide_Layout_Reuse; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Layout-Tabs/index.tsx
var Styleguide_Layout_Tabs_namespaceObject = {};
__webpack_require__.r(Styleguide_Layout_Tabs_namespaceObject);
__webpack_require__.d(Styleguide_Layout_Tabs_namespaceObject, "default", function() { return Styleguide_Layout_Tabs; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Layout-Tabs-Tab/index.tsx
var Styleguide_Layout_Tabs_Tab_namespaceObject = {};
__webpack_require__.r(Styleguide_Layout_Tabs_Tab_namespaceObject);
__webpack_require__.d(Styleguide_Layout_Tabs_Tab_namespaceObject, "default", function() { return Styleguide_Layout_Tabs_Tab; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Multilingual/index.tsx
var Styleguide_Multilingual_namespaceObject = {};
__webpack_require__.r(Styleguide_Multilingual_namespaceObject);
__webpack_require__.d(Styleguide_Multilingual_namespaceObject, "default", function() { return Styleguide_Multilingual; });

// NAMESPACE OBJECT: ./src/components/Styleguide-RouteFields/index.tsx
var Styleguide_RouteFields_namespaceObject = {};
__webpack_require__.r(Styleguide_RouteFields_namespaceObject);
__webpack_require__.d(Styleguide_RouteFields_namespaceObject, "default", function() { return Styleguide_RouteFields; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Section/index.tsx
var Styleguide_Section_namespaceObject = {};
__webpack_require__.r(Styleguide_Section_namespaceObject);
__webpack_require__.d(Styleguide_Section_namespaceObject, "default", function() { return Styleguide_Section; });

// NAMESPACE OBJECT: ./src/components/Styleguide-SitecoreContext/index.tsx
var Styleguide_SitecoreContext_namespaceObject = {};
__webpack_require__.r(Styleguide_SitecoreContext_namespaceObject);
__webpack_require__.d(Styleguide_SitecoreContext_namespaceObject, "default", function() { return Styleguide_SitecoreContext; });

// NAMESPACE OBJECT: ./src/components/Styleguide-Tracking/index.tsx
var Styleguide_Tracking_namespaceObject = {};
__webpack_require__.r(Styleguide_Tracking_namespaceObject);
__webpack_require__.d(Styleguide_Tracking_namespaceObject, "default", function() { return Styleguide_Tracking; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./src/components/NotFound.tsx
var NotFound = __webpack_require__("WzpI");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next-localization"
var external_next_localization_ = __webpack_require__("3qfc");

// EXTERNAL MODULE: external "@sitecore-jss/sitecore-jss-nextjs"
var sitecore_jss_nextjs_ = __webpack_require__("MbQT");

// CONCATENATED MODULE: ./src/components/Layout.tsx





 // import { getPublicUrl } from 'lib/util';

 // import config from 'temp/config';
// Prefix public assets with a public URL to enable compaitibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
// const publicUrl = getPublicUrl();
// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.

const Navigation = () => {
  const {
    t
  } = Object(external_next_localization_["useI18n"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      className: "my-0 mr-md-auto font-weight-normal",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "text-dark",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `/sc_logo.svg`,
            alt: "Sitecore"
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      className: "my-2 my-md-0 mr-md-3",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "p-2 text-dark",
        href: "https://jss.sitecore.net",
        target: "_blank",
        rel: "noopener noreferrer",
        children: t('Documentation')
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/styleguide",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "p-2 text-dark",
          children: t('Styleguide')
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/graphql",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "p-2 text-dark",
          children: t('GraphQL')
        })
      })]
    })]
  });
};

const Layout = ({
  route
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: route.fields && route.fields.pageTitle && route.fields.pageTitle.value || 'Page'
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: `/favicon.ico`
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["VisitorIdentification"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navigation, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Placeholder"], {
        name: "jss-main",
        rendering: route
      })
    })]
  });
};

/* harmony default export */ var components_Layout = (Layout);
// CONCATENATED MODULE: ./src/components/ContentBlock/index.tsx





/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({
  fields
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    tag: "h2",
    className: "display-4",
    field: fields.heading
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
    className: "contentDescription",
    field: fields.content
  })]
});

/* harmony default export */ var components_ContentBlock = (ContentBlock);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// CONCATENATED MODULE: ./src/components/GraphQL-ConnectedDemo/query.graphql
/* 3a392a31e26a0932b87d29b16df52e9f4356d572
 * This file is automatically generated by graphql-let. */


const ConnectedDemoQueryDocument = external_graphql_tag_default.a`
    query ConnectedDemoQuery($datasource: String!, $contextItem: String!) {
  datasource(value: $datasource) {
    id
    name
    ... on GraphQLConnectedDemo {
      sample1 {
        jss
        value
      }
      sample2 {
        jss
        text
        target
        url
        definition {
          type
          shared
        }
      }
    }
  }
  contextItem: item(path: $contextItem) {
    id
    ... on AppRoute {
      pageTitle {
        value
      }
    }
    children(requirePresentation: true) {
      id
      ... on AppRoute {
        pageTitle {
          value
          jss
        }
      }
      url(options: {disableLanguageEmbedding: true})
    }
  }
}
    `;
/**
 * __useConnectedDemoQueryQuery__
 *
 * To run a query within a React component, call `useConnectedDemoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useConnectedDemoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConnectedDemoQueryQuery({
 *   variables: {
 *      datasource: // value for 'datasource'
 *      contextItem: // value for 'contextItem'
 *   },
 * });
 */

function useConnectedDemoQueryQuery(baseOptions) {
  return react_hooks_["useQuery"](ConnectedDemoQueryDocument, baseOptions);
}
function useConnectedDemoQueryLazyQuery(baseOptions) {
  return react_hooks_["useLazyQuery"](ConnectedDemoQueryDocument, baseOptions);
}
// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__("vW9U");

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: ./src/temp/config.js
var config = __webpack_require__("cUJ6");
var config_default = /*#__PURE__*/__webpack_require__.n(config);

// EXTERNAL MODULE: ./src/temp/GraphQLFragmentTypes.json
var GraphQLFragmentTypes = __webpack_require__("4+8z");

// EXTERNAL MODULE: external "apollo-link-batch-http"
var external_apollo_link_batch_http_ = __webpack_require__("vs62");

// EXTERNAL MODULE: external "apollo-link-persisted-queries"
var external_apollo_link_persisted_queries_ = __webpack_require__("NSsw");

// CONCATENATED MODULE: ./src/lib/GraphQLClientFactory.ts




/*
  INTROSPECTION DATA
  See https://www.apollographql.com/docs/react/recipes/fragment-matching.html
  This enables the Apollo cache to process fragments on interface types correctly.
  If this file does not exist, you may need to run the `jss graphql:update` script.
*/


/*
  QUERY LINK SELECTION
  A link is transport which GraphQL queries are pushed across.
  You have many choices.
  See the apollo-link documentation for more details.

  NOTE: to use Sitecore Experience Editor it is essential that your
  link passes cookies along with requests (credentials: 'include').
*/
// choose between a basic HTTP link to run queries...
// import { createHttpLink } from 'apollo-link-http';
// const link = createHttpLink({ uri: endpoint, credentials: 'include' });
// ...or a batched link (multiple queries within 10ms all go in one HTTP request)

 // ...and an automatic persisted query link, which reduces bandwidth by using query hashes to alias content
// the APQ link is _chained_ behind another link that performs the actual HTTP calls, so you can choose
// APQ + batched, or APQ + http links for example.


/**
 * Create new apollo client instance
 */

function GraphQLClientFactory(endpoint) {
  /* HTTP link selection: default to batched + APQ */
  const link = Object(external_apollo_link_persisted_queries_["createPersistedQueryLink"])().concat(new external_apollo_link_batch_http_["BatchHttpLink"]({
    uri: endpoint !== null && endpoint !== void 0 ? endpoint : config_default.a.graphqlEndpoint,
    credentials: 'include',
    headers: {
      connection: 'keep-alive'
    }
  }));
  const cache = new external_apollo_cache_inmemory_["InMemoryCache"]({
    fragmentMatcher: new external_apollo_cache_inmemory_["IntrospectionFragmentMatcher"]({
      introspectionQueryResultData: GraphQLFragmentTypes
    })
  });
  return new external_apollo_client_["ApolloClient"]({
    ssrMode: true,
    ssrForceFetchDelay: 100,
    link,
    cache: cache
  });
}
// CONCATENATED MODULE: ./src/components/GraphQL-ConnectedDemo/index.tsx








const GraphQLConnectedDemo = props => {
  var _data$datasource$samp, _data$datasource$samp2, _data$datasource$samp3, _data$datasource$samp4, _data$datasource$samp5, _data$datasource$samp6, _data$datasource$samp7, _data$datasource$samp8, _data$datasource$samp9, _data$datasource$samp10, _data$contextItem$pag;

  const data = props.rendering.uid ? Object(sitecore_jss_nextjs_["useComponentProps"])(props.rendering.uid) : undefined;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    "data-e2e-id": "graphql-connected",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "GraphQL Connected Demo"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["Connected GraphQL executes GraphQL queries directly against the Sitecore GraphQL endpoint. You can review the query execution in the browser devtools network tab. Note that Apollo Client maintains a query cache - so the same query will not execute twice (i.e. after route changes) unless either the page is refreshed, or the ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
        children: "fetch policy"
      }), " is set to not use the cache. Consult the Apollo documentation for details."]
    }), data && data.datasource && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: "Datasource Item (via Connected GraphQL)"
      }), "id: ", data.datasource.id, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "name: ", data.datasource.name, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample1: ", (_data$datasource$samp = data.datasource.sample1) === null || _data$datasource$samp === void 0 ? void 0 : _data$datasource$samp.value, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample1 (editable): ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
        field: (_data$datasource$samp2 = data.datasource.sample1) === null || _data$datasource$samp2 === void 0 ? void 0 : _data$datasource$samp2.jss
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample2:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["text: ", (_data$datasource$samp3 = data.datasource.sample2) === null || _data$datasource$samp3 === void 0 ? void 0 : _data$datasource$samp3.text]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["url: ", (_data$datasource$samp4 = data.datasource.sample2) === null || _data$datasource$samp4 === void 0 ? void 0 : _data$datasource$samp4.url]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["target: ", (_data$datasource$samp5 = data.datasource.sample2) === null || _data$datasource$samp5 === void 0 ? void 0 : _data$datasource$samp5.target]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["editable: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
            field: (_data$datasource$samp6 = data.datasource.sample2) === null || _data$datasource$samp6 === void 0 ? void 0 : _data$datasource$samp6.jss
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["field type: ", (_data$datasource$samp7 = data.datasource.sample2) === null || _data$datasource$samp7 === void 0 ? void 0 : (_data$datasource$samp8 = _data$datasource$samp7.definition) === null || _data$datasource$samp8 === void 0 ? void 0 : _data$datasource$samp8.type]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["field is shared?: ", (_data$datasource$samp9 = data.datasource.sample2) === null || _data$datasource$samp9 === void 0 ? void 0 : (_data$datasource$samp10 = _data$datasource$samp9.definition) === null || _data$datasource$samp10 === void 0 ? void 0 : _data$datasource$samp10.shared.toString()]
        })]
      })]
    }), data && data.contextItem && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: "Route Item (via Connected GraphQL)"
      }), "id: ", data.contextItem.id, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "page title: ", (_data$contextItem$pag = data.contextItem.pageTitle) === null || _data$contextItem$pag === void 0 ? void 0 : _data$contextItem$pag.value, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "children:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: data.contextItem.children.map(child => {
          var _routeItem$pageTitle, _routeItem$pageTitle2;

          const routeItem = child;
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: routeItem.url,
              children: (_routeItem$pageTitle = routeItem.pageTitle) === null || _routeItem$pageTitle === void 0 ? void 0 : _routeItem$pageTitle.value
            }), "(editable title too! ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
              field: (_routeItem$pageTitle2 = routeItem.pageTitle) === null || _routeItem$pageTitle2 === void 0 ? void 0 : _routeItem$pageTitle2.jss
            }), ")"]
          }, routeItem.id);
        })
      })]
    })]
  });
};
/**
 * Will be called during SSG
 * @param {ComponentRendering} rendering
 * @param {LayoutServiceData} layoutData
 * @param {GetStaticPropsContext} context
 */


const getStaticProps = async (rendering, layoutData) => {
  var _layoutData$sitecore, _layoutData$sitecore$;

  if (process.env.JSS_MODE === sitecore_jss_nextjs_["JSS_MODE_DISCONNECTED"]) {
    return null;
  }

  const graphQLClient = GraphQLClientFactory();
  const result = await graphQLClient.query({
    query: ConnectedDemoQueryDocument,
    variables: {
      datasource: rendering.dataSource,
      contextItem: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore = layoutData.sitecore) === null || _layoutData$sitecore === void 0 ? void 0 : (_layoutData$sitecore$ = _layoutData$sitecore.route) === null || _layoutData$sitecore$ === void 0 ? void 0 : _layoutData$sitecore$.itemId
    }
  });
  return result.data;
};
/**
 * Will be called during SSR
 * @param {ComponentRendering} rendering
 * @param {LayoutServiceData} layoutData
 * @param {GetServerSidePropsContext} context
 */

const getServerSideProps = async (rendering, layoutData) => {
  var _layoutData$sitecore2, _layoutData$sitecore3;

  if (process.env.JSS_MODE === sitecore_jss_nextjs_["JSS_MODE_DISCONNECTED"]) {
    return null;
  }

  const graphQLClient = GraphQLClientFactory();
  const result = await graphQLClient.query({
    query: ConnectedDemoQueryDocument,
    variables: {
      datasource: rendering.dataSource,
      contextItem: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore2 = layoutData.sitecore) === null || _layoutData$sitecore2 === void 0 ? void 0 : (_layoutData$sitecore3 = _layoutData$sitecore2.route) === null || _layoutData$sitecore3 === void 0 ? void 0 : _layoutData$sitecore3.itemId
    }
  });
  return result.data;
};
/* harmony default export */ var GraphQL_ConnectedDemo = (GraphQLConnectedDemo);
// CONCATENATED MODULE: ./src/components/GraphQL-IntegratedDemo/index.tsx





const GraphQLIntegratedDemo = props => {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  const {
    datasource,
    contextItem
  } = props.fields.data;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    "data-e2e-id": "graphql-integrated",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "GraphQL Integrated Demo"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "Integrated GraphQL executes GraphQL queries within the Layout Service endpoint, and merges the query results into the Layout Service result JSON. The query results can be seen by inspecting the Layout Service response in the browser devtools network tab."
    }), datasource && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: "Datasource Item (via Integrated GraphQL)"
      }), "id: ", datasource.id, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "name: ", datasource.name, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample1: ", datasource.sample1.value, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample1 (editable): ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
        field: datasource.sample1.jss
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "sample2:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["text: ", datasource.sample2.text]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["url: ", datasource.sample2.url]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["target: ", datasource.sample2.target]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["editable: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
            field: datasource.sample2.jss
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["field type: ", datasource.sample2.definition.type]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: ["field is shared?: ", datasource.sample2.definition.shared.toString()]
        })]
      })]
    }), contextItem && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: "Route Item (via Integrated GraphQL)"
      }), "id: ", contextItem.id, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "page title: ", contextItem.pageTitle.value, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "children:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        children: contextItem.children.map(child => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: child.url,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: child.pageTitle.value
            })
          }), "\xA0 (editable title too! ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
            field: child.pageTitle.jss
          }), ")"]
        }, child.id))
      })]
    })]
  });
};

/* harmony default export */ var GraphQL_IntegratedDemo = (GraphQLIntegratedDemo);
// CONCATENATED MODULE: ./src/components/GraphQL-Layout/index.tsx





const GraphQLLayout = ({
  rendering
}) => {
  const {
    sitecoreContext
  } = Object(sitecore_jss_nextjs_["useSitecoreContext"])();
  const disconnectedMode = sitecoreContext.route && sitecoreContext.route.layoutId === 'available-in-connected-mode';
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    "data-e2e-id": "graphql-layout",
    children: [disconnectedMode && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "This app is running in disconnected mode. GraphQL requires connected mode, headless connected mode, or integrated mode to work."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Libraries such as ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
          children: "graphql-tools"
        }), " can provide GraphQL API mocking capabilities, which could enable disconnected GraphQL. This is not supported out of the box, however."]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["To view the GraphQL samples, restart the app using ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
          children: "jss start:connected"
        }), "\xA0 or deploy the app to Sitecore to run in integrated mode per the JSS documentation."]
      })]
    }), !disconnectedMode && /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Placeholder"], {
      name: "jss-graphql-layout",
      rendering: rendering
    })]
  });
};

/* harmony default export */ var GraphQL_Layout = (GraphQLLayout);
// CONCATENATED MODULE: ./src/components/Styleguide-Specimen.tsx




/**
 * Helper component that displays explanatory information and where to find the definitions
 * of styleguide specimens.
 */
const StyleguideSpecimen = ({
  fields: {
    heading,
    description
  },
  children,
  rendering,
  e2eId
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "pt-3",
  id: `i${rendering.uid && rendering.uid.replace(/[{}]/g, '')}`,
  "data-e2e-id": e2eId,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    tag: "h4",
    field: heading
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
    field: description
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("small", {
      children: ["Implementation: ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("code", {
        children: ["/src/components/", rendering.componentName, "/index.js"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Definition:", ' ', /*#__PURE__*/Object(jsx_runtime_["jsxs"])("code", {
        children: ["/sitecore/definitions/components/", rendering.componentName, ".sitecore.js"]
      })]
    })
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "border p-2",
    children: children
  })]
});

/* harmony default export */ var Styleguide_Specimen = (StyleguideSpecimen);
// CONCATENATED MODULE: ./src/components/Styleguide-ComponentParams/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const StyleguideComponentParams = props => {
  // props.params (i.e. props.params.cssClass without destructuring) contains the component's params
  const {
    cssClass,
    columns,
    useCallToAction
  } = props.params;
  const columnsArray = columns && [...Array(parseInt(columns))];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, _objectSpread(_objectSpread({}, props), {}, {
    e2eId: "styleguide-componentparams",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: cssClass,
      children: ["The CSS class of this paragraph (", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: cssClass
      }), ") is set using a param"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: ["useCallToAction param: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: useCallToAction
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "param type: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: typeof useCallToAction
      }), useCallToAction === 'true' && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "alert alert-info",
        children: "the call to action is shown"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["columns param: ", columns]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "row",
      children: columnsArray && columnsArray.map((_, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-sm",
        children: ["Column ", index]
      }, `col-${index}`))
    })]
  }));
};

/* harmony default export */ var Styleguide_ComponentParams = (StyleguideComponentParams);
// CONCATENATED MODULE: ./src/components/Styleguide-CustomRouteType/index.tsx





const StyleguideCustomRouteType = () => {
  // useSitecoreContext() is the magical glue that gives you route-level context access
  // see the context examples in the styleguide for more details.
  // this fancy destructure syntax is essentially equivalent to
  // const fields = props.sitecoreContext.route.fields
  const {
    sitecoreContext: {
      route: {
        fields
      }
    }
  } = Object(sitecore_jss_nextjs_["useSitecoreContext"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    "data-e2e-id": "styleguide-customroutetype",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
      tag: "h3",
      field: fields.headline
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("em", {
        children: ["By ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
          field: fields.author
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
      field: fields.content
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/styleguide",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: "Return to the Styleguide"
      })
    })]
  });
};

/* harmony default export */ var Styleguide_CustomRouteType = (StyleguideCustomRouteType);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Checkbox/index.tsx



function Styleguide_FieldUsage_Checkbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Checkbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Checkbox_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Checkbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Checkbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Checkbox (boolean) content field within JSS.
 */
const StyleguideFieldUsageCheckbox = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Styleguide_Specimen, Styleguide_FieldUsage_Checkbox_objectSpread(Styleguide_FieldUsage_Checkbox_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-checkbox",
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
    children: [props.fields && props.fields.checkbox && props.fields.checkbox.value && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "checkbox"
      }), " is true"]
    }), !props.fields || !props.fields.checkbox || !props.fields.checkbox.value && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "checkbox"
      }), " is false"]
    }), Object(sitecore_jss_nextjs_["getFieldValue"])(props.fields, 'checkbox2', false) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "checkbox2"
      }), " is true"]
    }), !Object(sitecore_jss_nextjs_["getFieldValue"])(props.fields, 'checkbox2', false) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "checkbox2"
      }), " is false"]
    })]
  })
}));

/* harmony default export */ var Styleguide_FieldUsage_Checkbox = (StyleguideFieldUsageCheckbox);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-ContentList/index.tsx



function Styleguide_FieldUsage_ContentList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_ContentList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_ContentList_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_ContentList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_ContentList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_ContentList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Content List field type within JSS.
 * Content Lists are references to 0..n other content items.
 * In Sitecore terms, this maps by default to a Treelist field.
 */
const StyleguideFieldUsageContentList = props => {
  const {
    sharedContentList,
    localContentList
  } = props.fields;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_ContentList_objectSpread(Styleguide_FieldUsage_ContentList_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-content-list",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: "Shared Content List"
    }), sharedContentList && sharedContentList.map((listItem, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
          field: listItem.fields.textField
        })]
      })
    }, `sharedListItem-${index}`)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: "Local Content List"
    }), localContentList && localContentList.map((listItem, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
          field: listItem.fields.textField
        })]
      })
    }, `localListItem-${index}`))]
  }));
};

/* harmony default export */ var Styleguide_FieldUsage_ContentList = (StyleguideFieldUsageContentList);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Custom/index.tsx


function Styleguide_FieldUsage_Custom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Custom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Custom_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Custom_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Custom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Custom_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a custom content field type within JSS.
 * See /sitecore/definitions/components/Styleguide-FieldUsage-Custom.sitecore.js
 * for the definition of the structure of the custom field. This code is just for display.
 */
const StyleguideFieldUsageCustom = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Styleguide_Specimen, Styleguide_FieldUsage_Custom_objectSpread(Styleguide_FieldUsage_Custom_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-custom",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    field: props.fields.customIntField
  })
}));

/* harmony default export */ var Styleguide_FieldUsage_Custom = (StyleguideFieldUsageCustom);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Date/index.tsx



function Styleguide_FieldUsage_Date_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Date_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Date_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Date_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Date_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Date_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of date and time content field types within JSS.
 */
const StyleguideFieldUsageDate = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Styleguide_Specimen, Styleguide_FieldUsage_Date_objectSpread(Styleguide_FieldUsage_Date_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-date",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: ["Date helper: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["DateField"], {
          field: props.fields.date
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: ["Date helper (datetime): ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["DateField"], {
          field: props.fields.dateTime
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: ["UTC Date string:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["DateField"], {
          field: props.fields.date,
          render: date => date && date.toUTCString()
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: ["Localized Date string (local timezone):\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["DateField"], {
          field: props.fields.date,
          render: date => date && date.toLocaleDateString()
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
        children: ["Localized DateTime string (local timezone):\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["DateField"], {
          field: props.fields.dateTime,
          render: date => /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
            children: date && date.toLocaleString()
          })
        })]
      })]
    })
  }));
};

/* harmony default export */ var Styleguide_FieldUsage_Date = (StyleguideFieldUsageDate);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-File/index.tsx



function Styleguide_FieldUsage_File_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_File_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_File_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_File_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_File_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_File_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a File content field within JSS.
 * File types are stored within Sitecore's Media Library data, and can be edited.
 */
const StyleguideFieldUsageFile = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_File_objectSpread(Styleguide_FieldUsage_File_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-file",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["File"], {
    field: props.fields.file
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["File"], {
    field: props.fields.file,
    target: "_blank",
    children: "Custom link body"
  })]
}));

/* harmony default export */ var Styleguide_FieldUsage_File = (StyleguideFieldUsageFile);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Image/index.tsx



function Styleguide_FieldUsage_Image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Image_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Image_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Image_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of an Image content field within JSS.
 * Image field data is uploaded into the Sitecore Media Library.
 */
const StyleguideFieldUsageImage = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_Image_objectSpread(Styleguide_FieldUsage_Image_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-image",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Plain image"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Image"], {
    media: props.fields.sample1
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Advanced image (not editable)"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Image"], {
    field: props.fields.sample2,
    editable: false,
    imageParams: {
      mw: 100,
      mh: 50
    },
    height: "50",
    width: "94",
    "data-sample": "other-attributes-pass-through"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Srcset responsive image"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Image"], {
    field: props.fields.sample2,
    srcSet: [{
      mw: 300
    }, {
      mw: 100
    }],
    sizes: "(min-width: 960px) 300px, 100px",
    className: "img-fluid"
  })]
}));

/* harmony default export */ var Styleguide_FieldUsage_Image = (StyleguideFieldUsageImage);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-ItemLink/index.tsx



function Styleguide_FieldUsage_ItemLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_ItemLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_ItemLink_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_ItemLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_ItemLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_ItemLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Content Link content field within JSS.
 * Content links are a reference to a single other piece of content.
 */
const StyleguideFieldUsageItemLink = props => {
  const {
    sharedItemLink,
    localItemLink
  } = props.fields;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_ItemLink_objectSpread(Styleguide_FieldUsage_ItemLink_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-itemlink",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: "Shared Item Link"
    }), sharedItemLink && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
          field: sharedItemLink.fields.textField
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: "Local Item Link"
    }), localItemLink && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["Field: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
          field: localItemLink.fields.textField
        })]
      })
    })]
  }));
};

/* harmony default export */ var Styleguide_FieldUsage_ItemLink = (StyleguideFieldUsageItemLink);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Link/index.tsx



function Styleguide_FieldUsage_Link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Link_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a General Link (hyperlink) content field within JSS.
 */
const StyleguideFieldUsageLink = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_Link_objectSpread(Styleguide_FieldUsage_Link_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-link",
  children: ["External link:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
    field: props.fields.externalLink
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Internal link:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsxs"])(sitecore_jss_nextjs_["Link"], {
    field: props.fields.internalLink,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
      children: "HTML"
    }), " or other components can be used within link renderers, for example links to images."]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Email link:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
    field: props.fields.emailLink
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "All possible content params link:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
    field: props.fields.paramsLink
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "The link component accepts params of its own:\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Link"], {
    field: props.fields.externalLink,
    showLinkTextWithChildrenPresent: true,
    className: "font-weight-bold",
    "data-otherattributes": "pass-through-to-anchor-tag"
  })]
}));

/* harmony default export */ var Styleguide_FieldUsage_Link = (StyleguideFieldUsageLink);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Number/index.tsx



function Styleguide_FieldUsage_Number_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Number_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Number_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Number_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Number_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Number_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Number (decimal) content field within JSS.
 */
const StyleguideFieldUsageText = props => {
  const fieldValue = Object(sitecore_jss_nextjs_["getFieldValue"])(props.fields, 'sample');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_Number_objectSpread(Styleguide_FieldUsage_Number_objectSpread({}, props), {}, {
    e2eId: "styleguide-fieldusage-number",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
      field: props.fields.sample
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["JS value type: ", typeof fieldValue, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "JS value: ", fieldValue]
    })]
  }));
};

/* harmony default export */ var Styleguide_FieldUsage_Number = (StyleguideFieldUsageText);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-RichText/index.tsx



function Styleguide_FieldUsage_RichText_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_RichText_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_RichText_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_RichText_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_RichText_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_RichText_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Rich Text (HTML) content field within JSS.
 */
const StyleguideFieldUsageRichText = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_RichText_objectSpread(Styleguide_FieldUsage_RichText_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-richtext",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
    field: props.fields.sample
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
    field: props.fields.sample2,
    tag: "section",
    editable: false,
    className: "text-center",
    "data-sample": "other-attributes-pass-through"
  })]
}));

/* harmony default export */ var Styleguide_FieldUsage_RichText = (StyleguideFieldUsageRichText);
// CONCATENATED MODULE: ./src/components/Styleguide-FieldUsage-Text/index.tsx



function Styleguide_FieldUsage_Text_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_FieldUsage_Text_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_FieldUsage_Text_ownKeys(Object(source), true).forEach(function (key) { Styleguide_FieldUsage_Text_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_FieldUsage_Text_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_FieldUsage_Text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates usage of a Text content field within JSS.
 * Text fields are HTML encoded by default.
 */
const Styleguide_FieldUsage_Text_StyleguideFieldUsageText = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_FieldUsage_Text_objectSpread(Styleguide_FieldUsage_Text_objectSpread({}, props), {}, {
  e2eId: "styleguide-fieldusage-text",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    field: props.fields.sample
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    field: props.fields.sample2,
    tag: "section",
    editable: false,
    encode: false,
    className: "font-weight-bold",
    "data-sample": "other-attributes-pass-through"
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: ["Raw value (not editable): ", Object(sitecore_jss_nextjs_["getFieldValue"])(props.fields, 'sample')]
  })]
}));

/* harmony default export */ var Styleguide_FieldUsage_Text = (Styleguide_FieldUsage_Text_StyleguideFieldUsageText);
// CONCATENATED MODULE: ./src/components/Styleguide-Layout/index.tsx




/**
 * The main layout (columns) of the styleguide.
 * Navigation is automatically generated based on the components added to the layout,
 * and does not need to be manually maintained.
 */
const StyleguideLayout = props => {
  const getRendering = section => section;

  const convertUID = uid => {
    if (!uid) return '';
    return uid.replace(/[{}]/g, '');
  }; // this code reads the components in the child placeholders of this component,
  // and projects them into the left navigation column for the styleguide


  const sections = Object(sitecore_jss_nextjs_["getChildPlaceholder"])(props.rendering, 'jss-styleguide-layout').filter(section => Object(sitecore_jss_nextjs_["getFieldValue"])(getRendering(section), 'heading')).map(section => ({
    heading: Object(sitecore_jss_nextjs_["getFieldValue"])(getRendering(section), 'heading'),
    id: `i${convertUID(getRendering(section).uid)}`,
    children: Object(sitecore_jss_nextjs_["getChildPlaceholder"])(getRendering(section), 'jss-styleguide-section').filter(component => Object(sitecore_jss_nextjs_["getFieldValue"])(getRendering(component), 'heading')).map(component => ({
      heading: Object(sitecore_jss_nextjs_["getFieldValue"])(getRendering(component), 'heading'),
      id: `i${convertUID(getRendering(component).uid)}`
    }))
  })).map(section => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
    className: "nav flex-column pt-2",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: `#${section.id}`,
      className: "nav-item font-weight-bold",
      children: section.heading
    }), section.children && /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
      className: "nav flex-column",
      children: section.children.map(child => child.heading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: `#${child.id}`,
        children: child.heading
      }, child.id))
    })]
  }, section.heading));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "row",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "col-sm-8 col-lg-10",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Placeholder"], {
        name: "jss-styleguide-layout",
        rendering: props.rendering
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "col-sm-4 col-lg-2 order-sm-first pt-2",
      children: sections
    })]
  });
};

/* harmony default export */ var Styleguide_Layout = (StyleguideLayout);
// CONCATENATED MODULE: ./src/components/Styleguide-Layout-Reuse/index.tsx


function Styleguide_Layout_Reuse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_Layout_Reuse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_Layout_Reuse_ownKeys(Object(source), true).forEach(function (key) { Styleguide_Layout_Reuse_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_Layout_Reuse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_Layout_Reuse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates how to reuse content within JSS. See /data/routes/styleguide/en.yml
 * for the reused content definition sample. This component also demonstrates how to use
 * the Placeholder component's render props API to wrap all components in the placeholder
 * in a column tag (thus creating a horizontally laid out placeholder)
 */
const StyleguideLayoutReuse = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Styleguide_Specimen, Styleguide_Layout_Reuse_objectSpread(Styleguide_Layout_Reuse_objectSpread({}, props), {}, {
  e2eId: "styleguide-layout-reuse",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "row",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Placeholder"], {
      rendering: props.rendering,
      name: "jss-reuse-example",
      renderEach: (component, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-sm",
        children: component
      }, index),
      renderEmpty: components => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-sm",
        children: components
      })
    })
  })
}));

/* harmony default export */ var Styleguide_Layout_Reuse = (StyleguideLayoutReuse);
// CONCATENATED MODULE: ./src/components/Styleguide-Layout-Tabs/index.tsx



function Styleguide_Layout_Tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_Layout_Tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_Layout_Tabs_ownKeys(Object(source), true).forEach(function (key) { Styleguide_Layout_Tabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_Layout_Tabs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_Layout_Tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Demonstrates advanced component techniques in JSS.
 * This example implements a simple-looking tabs component.
 * Each tab is itself a child component added to a placeholder defined on the tabs component.
 * The tab component introspects its child components to render the tab headings (i.e. the tab children render partial content in two places).
 * When this component is edited in Sitecore Experience Editor, the tabbing behavior is turned off and each tab stacks on top of each other
 * for easy inline editing.
 */
class Styleguide_Layout_Tabs_StyleguideLayoutTabs extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(index) {
    this.setState({
      activeTabIndex: index
    });
  }

  render() {
    const {
      tabsPlaceholder,
      sitecoreContext
    } = this.props;
    let validTabIndex = 0;
    const isEditing = sitecoreContext && sitecoreContext.pageEditing;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_Layout_Tabs_objectSpread(Styleguide_Layout_Tabs_objectSpread({}, this.props), {}, {
      e2eId: "styleguide-layout-tabs",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
        className: "nav nav-tabs",
        children: !isEditing && (tabsPlaceholder || []).filter(tab => tab.props && tab.props.fields).map((tab, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: `nav-link ${index === this.state.activeTabIndex ? 'active' : null}`,
            onClick: () => this.setActiveTab(index),
            href: "#t",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
              field: tab.props.fields.title
            })
          })
        }, `tab${index}`))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "p-3 border-left border-right border-bottom",
        children: (tabsPlaceholder || []).map(tab => {
          const isValid = tab.props && tab.props.fields; // allow experience editor markup components to render

          if (!isValid && isEditing) return tab;
          validTabIndex += 1; // we render the tab either if it's active - or we're editing,
          // in which case we stack all tabs for visual editing

          if (this.state.activeTabIndex === validTabIndex - 1 || isEditing) {
            return tab;
          }

          return null;
        })
      })]
    }));
  }

} // This is a _higher order component_ that will wrap our component and inject placeholder
// data into it as a prop (in this case, props.tabsPlaceholder).
// this another option compared to using the <Placeholder> component;
// in this case, chosen because we primarily need access to the _data_
// of the placeholder.


const tabsComponentWithPlaceholderInjected = Object(sitecore_jss_nextjs_["withPlaceholder"])({
  placeholder: 'jss-tabs',
  prop: 'tabsPlaceholder'
})(Styleguide_Layout_Tabs_StyleguideLayoutTabs); // We need to know if experience editor is active, to disable the dynamic tab behavior for editing.
// Using the same technique as injecting the placeholder, we wrap the component again to inject the
// `sitecoreContext` prop.

const tabsWithPlaceholderAndSitecoreContext = Object(sitecore_jss_nextjs_["withSitecoreContext"])()(tabsComponentWithPlaceholderInjected);
/* harmony default export */ var Styleguide_Layout_Tabs = (tabsWithPlaceholderAndSitecoreContext);
// CONCATENATED MODULE: ./src/components/Styleguide-Layout-Tabs-Tab/index.tsx




/**
 * This is a single tab within the tabs sample component. These are added to the tabs placeholder.
 * This component demonstrates conditionally altering rendering when in the Sitecore Experience Editor to improve
 * author experience.
 */
const StyleguideLayoutTabsTab = props => {
  const {
    sitecoreContext
  } = Object(sitecore_jss_nextjs_["useSitecoreContext"])();
  console.log('sitecoreCONTEXT:', sitecoreContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    "data-e2e-class": "styleguide-layout-tabs-tab",
    children: [sitecoreContext && sitecoreContext.pageEditing && /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
      tag: "h5",
      field: props.fields.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["RichText"], {
      field: props.fields.content
    })]
  });
};

/* harmony default export */ var Styleguide_Layout_Tabs_Tab = (StyleguideLayoutTabsTab);
// CONCATENATED MODULE: ./src/components/Styleguide-Multilingual/index.tsx



function Styleguide_Multilingual_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_Multilingual_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_Multilingual_ownKeys(Object(source), true).forEach(function (key) { Styleguide_Multilingual_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_Multilingual_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_Multilingual_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Demonstrates using the dictionary functionality and defining route data in
 * multiple languages.
 */
const StyleguideMultilingual = props => {
  const {
    t,
    locale
  } = Object(external_next_localization_["useI18n"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_Multilingual_objectSpread(Styleguide_Multilingual_objectSpread({}, props), {}, {
    e2eId: "styleguide-multilingual",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
      field: props.fields.sample,
      encode: false,
      tag: "p"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["This is a static dictionary entry from ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "/data/dictionary"
      }), ":\xA0", t('styleguide-sample')]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/styleguide",
        locale: false,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "Show in English"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/da-DK/styleguide",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "Show in Danish"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["The current language is: ", locale()]
    })]
  }));
};

/* harmony default export */ var Styleguide_Multilingual = (StyleguideMultilingual);
// CONCATENATED MODULE: ./src/components/Styleguide-RouteFields/index.tsx



function Styleguide_RouteFields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_RouteFields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_RouteFields_ownKeys(Object(source), true).forEach(function (key) { Styleguide_RouteFields_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_RouteFields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_RouteFields_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Demonstrates gaining access to route-level fields.
 * This technique builds on the Styleguide-SitecoreContext technique,
 * to also get the route level field data and make it editable.
 */
const StyleguideRouteFields = props => {
  const {
    sitecoreContext
  } = Object(sitecore_jss_nextjs_["useSitecoreContext"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_RouteFields_objectSpread(Styleguide_RouteFields_objectSpread({}, props), {}, {
    e2eId: "styleguide-route-fields",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["Route level ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        children: "pageTitle"
      }), " field:", ' ', sitecoreContext.route && /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
        field: sitecoreContext.route.fields.pageTitle
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/styleguide/custom-route-type",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: "Sample of using a custom route type"
        })
      })
    })]
  }));
};

/* harmony default export */ var Styleguide_RouteFields = (StyleguideRouteFields);
// CONCATENATED MODULE: ./src/components/Styleguide-Section/index.tsx




/**
 * Represents a category of styleguide specimens within the Styleguide-Layout.
 * Usage examples are added to the `styleguide-section` placeholder that this
 * exposes.
 */
const StyleguideSection = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "pt-3",
  id: `i${props.rendering.uid && props.rendering.uid.replace(/[{}]/g, '')}`,
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Text"], {
    className: "border-bottom",
    field: props.fields.heading,
    tag: "h3"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["Placeholder"], {
    name: "jss-styleguide-section",
    rendering: props.rendering
  })]
});

/* harmony default export */ var Styleguide_Section = (StyleguideSection);
// CONCATENATED MODULE: ./src/components/Styleguide-SitecoreContext/index.tsx



function Styleguide_SitecoreContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_SitecoreContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_SitecoreContext_ownKeys(Object(source), true).forEach(function (key) { Styleguide_SitecoreContext_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_SitecoreContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_SitecoreContext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Demonstrates gaining access to the route-level Sitecore Context from
 * within other components.
 */
const StyleguideSitecoreContext = props => {
  const {
    sitecoreContext
  } = Object(sitecore_jss_nextjs_["useSitecoreContext"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_SitecoreContext_objectSpread(Styleguide_SitecoreContext_objectSpread({}, props), {}, {
    e2eId: "styleguide-sitecore-context",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "The current Sitecore Context is..."
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("pre", {
      style: {
        maxHeight: '400px',
        overflow: 'scroll'
      },
      children: JSON.stringify(sitecoreContext, null, 2)
    })]
  }));
};

/* harmony default export */ var Styleguide_SitecoreContext = (StyleguideSitecoreContext);
// EXTERNAL MODULE: external "@sitecore-jss/sitecore-jss-tracking"
var sitecore_jss_tracking_ = __webpack_require__("45PC");

// CONCATENATED MODULE: ./src/lib/data-fetcher.ts

/**
 * Implements a data fetcher using Axios - replace with your favorite
 * SSR-capable HTTP or fetch library if you like. See HttpJsonFetcher<T> type
 * in sitecore-jss library for implementation details/notes.
 * @param {string} url The URL to request; may include query string
 * @param {any} data Optional data to POST with the request.
 */

function dataFetcher(url, data) {
  return new sitecore_jss_nextjs_["AxiosDataFetcher"]().fetch(url, data);
}
// CONCATENATED MODULE: ./src/components/Styleguide-Tracking/index.tsx



function Styleguide_Tracking_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Styleguide_Tracking_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Styleguide_Tracking_ownKeys(Object(source), true).forEach(function (key) { Styleguide_Tracking_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Styleguide_Tracking_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Styleguide_Tracking_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Demonstrates analytics tracking patterns (xDB)
 */
class Styleguide_Tracking_StyleguideTracking extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Styleguide_Tracking_defineProperty(this, "event", void 0);

    Styleguide_Tracking_defineProperty(this, "goal", void 0);

    Styleguide_Tracking_defineProperty(this, "outcomeName", void 0);

    Styleguide_Tracking_defineProperty(this, "outcomeValue", void 0);

    Styleguide_Tracking_defineProperty(this, "campaign", void 0);

    Styleguide_Tracking_defineProperty(this, "pageId", void 0);

    Styleguide_Tracking_defineProperty(this, "pageUrl", void 0);

    Styleguide_Tracking_defineProperty(this, "trackingApiOptions", void 0);

    this.event = /*#__PURE__*/external_react_default.a.createRef();
    this.goal = /*#__PURE__*/external_react_default.a.createRef();
    this.outcomeName = /*#__PURE__*/external_react_default.a.createRef();
    this.outcomeValue = /*#__PURE__*/external_react_default.a.createRef();
    this.campaign = /*#__PURE__*/external_react_default.a.createRef();
    this.pageId = /*#__PURE__*/external_react_default.a.createRef();
    this.pageUrl = /*#__PURE__*/external_react_default.a.createRef();
    this.trackingApiOptions = {
      host: config_default.a.sitecoreApiHost,
      querystringParams: {
        sc_apikey: config_default.a.sitecoreApiKey
      },
      fetcher: dataFetcher
    };
  }

  submitEvent() {
    if (!this.event.current) return;
    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      eventId: this.event.current.value
    }], this.trackingApiOptions).then(() => alert('Page event pushed')).catch(error => alert(error));
  }

  submitGoal() {
    if (!this.goal.current) return;
    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      goalId: this.goal.current.value
    }], this.trackingApiOptions).then(() => alert('Goal pushed')).catch(error => alert(error));
  }

  submitOutcome() {
    if (!this.pageUrl.current || !this.pageId.current || !this.outcomeName.current || !this.outcomeValue.current) {
      return;
    }

    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      url: this.pageUrl.current.value,
      pageId: this.pageId.current.value,
      outcomeId: this.outcomeName.current.value,
      currencyCode: 'USD',
      monetaryValue: this.outcomeValue.current.value
    }], this.trackingApiOptions).then(() => alert('Outcome pushed')).catch(error => alert(error));
  }

  triggerCampaign() {
    if (!this.campaign.current) return;
    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      campaignId: this.campaign.current.value
    }], this.trackingApiOptions).then(() => alert('Campaign set')).catch(error => alert(error));
  }

  submitPageView() {
    if (!this.pageId.current || !this.pageUrl.current) return;
    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      pageId: this.pageId.current.value,
      url: this.pageUrl.current.value
    }], this.trackingApiOptions).then(() => alert('Page view pushed')).catch(error => alert(error));
  }

  abandonSession() {
    const abandonOptions = Styleguide_Tracking_objectSpread({
      action: 'flush'
    }, this.trackingApiOptions);

    sitecore_jss_tracking_["trackingApi"].trackEvent([], abandonOptions).then(() => alert('Interaction has been terminated and its data pushed to xConnect.')).catch(error => alert(error));
  }

  submitBatching() {
    sitecore_jss_tracking_["trackingApi"].trackEvent([{
      eventId: 'Download'
    }, {
      goalId: 'Instant Demo'
    }, {
      outcomeId: 'Opportunity'
    }, {
      pageId: '{110D559F-DEA5-42EA-9C1C-8A5DF7E70EF9}',
      url: '/arbitrary/url/you/own'
    }, // this goal will be added to the new page/route ID set above, not the current route
    {
      goalId: 'Register'
    }], this.trackingApiOptions).then(() => alert('Batch of events pushed')).catch(error => alert(error));
  }

  render() {
    const disconnectedMode = this.props.sitecoreContext.itemId === 'available-in-connected-mode';
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Styleguide_Specimen, Styleguide_Tracking_objectSpread(Styleguide_Tracking_objectSpread({}, this.props), {}, {
      e2eId: "styleguide-tracking",
      children: [disconnectedMode && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "The tracking API is only available in connected, integrated, or headless modes."
      }), !disconnectedMode && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: "alert alert-warning",
          children: ["Note: The JSS tracker API is disabled by default. Consult the", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://jss.sitecore.com/docs/fundamentals/services/tracking",
            children: "tracking documentation"
          }), ' ', "to enable it."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Event"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Events are defined in ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
                children: "/sitecore/system/Settings/Analytics/Page Events"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "event",
              children: "Event GUID or Name"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              id: "event",
              className: "form-control",
              ref: this.event
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitEvent.bind(this),
              children: "Submit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Goal"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Goals are defined in ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Goals"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "goal",
              children: "Goal GUID or Name"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: "form-control",
              id: "goal",
              ref: this.goal,
              placeholder: "i.e. Register"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitGoal.bind(this),
              children: "Submit"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Outcome"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Outcomes are defined in", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Outcomes"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "outcomeName",
              children: "Outcome GUID or Name"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: "form-control",
              id: "outcomeName",
              ref: this.outcomeName,
              placeholder: "i.e. Marketing Lead"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "outcomeValue",
              children: "Monetary Value (optional)"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "number",
              className: "form-control",
              id: "outcomeValue",
              ref: this.outcomeValue,
              placeholder: "i.e. 1337.00"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitOutcome.bind(this),
              children: "Submit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Campaign"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Campaigns are defined in", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
                children: "/sitecore/system/Marketing Control Panel/Campaigns"
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "campaign",
              children: "Campaign GUID or Name"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: "form-control",
              id: "campaign",
              ref: this.campaign
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.triggerCampaign.bind(this),
              children: "Submit"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Page View"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Track arbitrary page views for custom routing or offline use. Note that Layout Service tracks page views by default unless ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
                children: "tracking=false"
              }), " is passed in its query string."]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "pageId",
              children: "Page Item GUID"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: "form-control",
              id: "pageId",
              ref: this.pageId,
              placeholder: "i.e. {11111111-1111-1111-1111-111111111111}"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              htmlFor: "pageUrl",
              children: "Page URL"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "text",
              className: "form-control",
              id: "pageUrl",
              ref: this.pageUrl,
              placeholder: "i.e. /foo/bar"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary mt-3",
              onClick: this.submitPageView.bind(this),
              children: "Submit"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Batching"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "The tracking API supports pushing a whole batch of events in a single request. This can be useful for queuing strategies or offline PWA usage."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: this.submitBatching.bind(this),
              children: "Submit Batch of Events"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("fieldset", {
            className: "form-group col-sm",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("legend", {
              children: "Interaction Control"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Tracking data is not pushed into the xConnect service until your session ends on the Sitecore server. Click this button to instantly end your session and flush the data - great for debugging and testing."
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: "alert alert-warning",
              children: ["Note: By default ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("em", {
                children: "anonymous"
              }), " contacts will not be shown in Experience Profile. If your interactions are not showing up in Experience Profile, you may need to", ' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://doc.sitecore.net/developers/xp/xconnect/xconnect-search-indexer/enable-anonymous-contact-indexing.html",
                children: "enable anonymous contact indexing."
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: this.abandonSession.bind(this),
              children: "End Interaction"
            })]
          })
        })]
      })]
    }));
  }

}

/* harmony default export */ var Styleguide_Tracking = (Object(sitecore_jss_nextjs_["withSitecoreContext"])()(Styleguide_Tracking_StyleguideTracking));
// CONCATENATED MODULE: ./src/temp/componentFactory.ts
/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.ts to modify the generation of this file.


























const componentFactory_components = new Map();
componentFactory_components.set('ContentBlock', ContentBlock_namespaceObject);
componentFactory_components.set('GraphQL-ConnectedDemo', GraphQL_ConnectedDemo_namespaceObject);
componentFactory_components.set('GraphQL-IntegratedDemo', GraphQL_IntegratedDemo_namespaceObject);
componentFactory_components.set('GraphQL-Layout', GraphQL_Layout_namespaceObject);
componentFactory_components.set('Styleguide-ComponentParams', Styleguide_ComponentParams_namespaceObject);
componentFactory_components.set('Styleguide-CustomRouteType', Styleguide_CustomRouteType_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Checkbox', Styleguide_FieldUsage_Checkbox_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-ContentList', Styleguide_FieldUsage_ContentList_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Custom', Styleguide_FieldUsage_Custom_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Date', Styleguide_FieldUsage_Date_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-File', Styleguide_FieldUsage_File_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Image', Styleguide_FieldUsage_Image_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-ItemLink', Styleguide_FieldUsage_ItemLink_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Link', Styleguide_FieldUsage_Link_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Number', Styleguide_FieldUsage_Number_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-RichText', Styleguide_FieldUsage_RichText_namespaceObject);
componentFactory_components.set('Styleguide-FieldUsage-Text', Styleguide_FieldUsage_Text_namespaceObject);
componentFactory_components.set('Styleguide-Layout', Styleguide_Layout_namespaceObject);
componentFactory_components.set('Styleguide-Layout-Reuse', Styleguide_Layout_Reuse_namespaceObject);
componentFactory_components.set('Styleguide-Layout-Tabs', Styleguide_Layout_Tabs_namespaceObject);
componentFactory_components.set('Styleguide-Layout-Tabs-Tab', Styleguide_Layout_Tabs_Tab_namespaceObject);
componentFactory_components.set('Styleguide-Multilingual', Styleguide_Multilingual_namespaceObject);
componentFactory_components.set('Styleguide-RouteFields', Styleguide_RouteFields_namespaceObject);
componentFactory_components.set('Styleguide-Section', Styleguide_Section_namespaceObject);
componentFactory_components.set('Styleguide-SitecoreContext', Styleguide_SitecoreContext_namespaceObject);
componentFactory_components.set('Styleguide-Tracking', Styleguide_Tracking_namespaceObject);
function componentModule(componentName) {
  return componentFactory_components.get(componentName);
}
;
function componentFactory(componentName) {
  var _components$get;

  return (_components$get = componentFactory_components.get(componentName)) === null || _components$get === void 0 ? void 0 : _components$get.default;
}
;
// CONCATENATED MODULE: ./src/lib/layout-service.ts


const layoutService = new sitecore_jss_nextjs_["LayoutService"]({
  apiHost: config_default.a.sitecoreApiHost,
  apiKey: config_default.a.sitecoreApiKey,
  siteName: config_default.a.jssAppName
});
// CONCATENATED MODULE: ./src/lib/dictionary-service.ts


const dictionaryService = new sitecore_jss_nextjs_["DictionaryService"]({
  apiHost: config_default.a.sitecoreApiHost,
  apiKey: config_default.a.sitecoreApiKey,
  siteName: config_default.a.jssAppName
});

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("kiQV");

// CONCATENATED MODULE: ./src/lib/page-props-factory.ts
function page_props_factory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Extract normalized Sitecore item path from query
 */

const extractPath = function (params, isExportMode, locale) {
  var _params$path;

  if (params === undefined) {
    return '/';
  }

  if (isExportMode) {
    // home page
    if (!params.path) return '/';
    console.log('FINAL PATH:::::', params.path.join('/').replace(`${locale}/`, '/'));
    return params.path.join('/').replace(`${locale}/`, '/');
  }

  let path = Array.isArray(params.path) ? params.path.join('/') : (_params$path = params.path) !== null && _params$path !== void 0 ? _params$path : '/'; // Ensure leading '/'

  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  return path;
};
/**
 * Determines whether context is GetServerSidePropsContext (SSR) or GetStaticPropsContext (SSG)
 * @param context {GetServerSidePropsContext | GetStaticPropsContext}
 */


const isServerSidePropsContext = function (context) {
  return context.req !== undefined;
};

class page_props_factory_SitecorePagePropsFactory {
  constructor() {
    page_props_factory_defineProperty(this, "componentPropsService", void 0);

    this.componentPropsService = new sitecore_jss_nextjs_["ComponentPropsService"]();
  }

  get layoutService() {
    // Just returning our REST layout service atm, but in the very
    // near future we'll also have a GraphQL-based layout service.
    // Stubbed out as getter for potential logic here (e.g. based on constructor props)...
    return layoutService;
  }

  get dictionaryService() {
    // Just returning our REST dictionary service atm, but in the very
    // near future we'll also have a GraphQL-based dictionary service.
    // Stubbed out as getter for potential logic here (e.g. based on constructor props)...
    return dictionaryService;
  }

  detectLocale(context) {
    const defaultLanguage = package_0["a" /* config */].language;
    if (!context.params || !context.params.path) return defaultLanguage;
    const paths = context.params.path;
    if (paths[0] === '') return defaultLanguage;
    return ['en', 'da-DK'].find(lang => lang === paths[0]) || defaultLanguage;
  }
  /**
   * Create SitecorePageProps for given context (SSR / GetServerSidePropsContext or SSG / GetStaticPropsContext)
   * @param context {GetServerSidePropsContext | GetStaticPropsContext}
   * @see SitecorePageProps
   */


  async create(context) {
    // Use context locale if Next.js i18n is configured, otherwise use language defined in package.json
    const locale = this.detectLocale(context); // Get normalized Sitecore item path
    // i18n disabled when use nextjs Export

    const path = extractPath(context.params, !context.locale, locale);
    let notFound = false; // Fetch layoutData from Layout Service, passing on req/res for SSR

    const layoutData = await this.layoutService.fetchLayoutData(path, locale, isServerSidePropsContext(context) ? context.req : undefined, isServerSidePropsContext(context) ? context.res : undefined).catch(error => {
      var _error$response;

      if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 404) {
        // Let 404s (invalid path) through.
        // layoutData.sitecore.route will be missing, but
        // layoutData.sitecore.context will provide valuable information
        notFound = true;
        return error.response.data;
      }

      throw error;
    }); // Fetch dictionary data from Dictionary Service

    const dictionary = await this.dictionaryService.fetchDictionaryData(locale); // Retrieve component props using side-effects defined on components level

    let componentProps = {};

    if (layoutData.sitecore.route) {
      if (isServerSidePropsContext(context)) {
        componentProps = await this.componentPropsService.fetchServerSideComponentProps({
          layoutData: layoutData,
          context,
          componentModule: componentModule
        });
      } else {
        componentProps = await this.componentPropsService.fetchStaticComponentProps({
          layoutData: layoutData,
          context,
          componentModule: componentModule
        });
      }
    }

    return {
      locale,
      layoutData,
      dictionary,
      componentProps,
      notFound
    };
  }

}
const sitecorePagePropsFactory = new page_props_factory_SitecorePagePropsFactory();
// CONCATENATED MODULE: ./src/pages/[[...path]].tsx


function _path_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _path_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _path_ownKeys(Object(source), true).forEach(function (key) { _path_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _path_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _path_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import config from 'temp/config';

const SitecorePage = ({
  notFound,
  layoutData,
  componentProps
}) => {
  var _layoutData$sitecore$;

  console.log('----', notFound, layoutData, componentProps);

  if (notFound) {
    var _layoutData$sitecore;

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotFound["a" /* default */], {
      context: layoutData === null || layoutData === void 0 ? void 0 : (_layoutData$sitecore = layoutData.sitecore) === null || _layoutData$sitecore === void 0 ? void 0 : _layoutData$sitecore.context
    });
  }

  const context = _path_objectSpread({
    route: layoutData.sitecore.route,
    itemId: (_layoutData$sitecore$ = layoutData.sitecore.route) === null || _layoutData$sitecore$ === void 0 ? void 0 : _layoutData$sitecore$.itemId
  }, layoutData.sitecore.context);

  const routeData = layoutData.sitecore.route;

  const PageLayout = () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["ComponentPropsContext"], {
    value: componentProps,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(sitecore_jss_nextjs_["SitecoreContext"], {
      componentFactory: componentFactory,
      context: context,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Layout, {
        route: routeData
      })
    })
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(PageLayout, {});
}; // This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).


const getStaticPaths = async () => {
  // Fallback, along with revalidate in getStaticProps (below),
  // enables Incremental Static Regeneration. This allows us to
  // leave certain (or all) paths empty if desired and static pages
  // will be generated on request.
  // See https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
  //
  // Ultimately, this is where we'll also be able to request a "sitemap" from Sitecore.
  return {
    paths: [{
      params: {
        path: ['']
      }
    }, {
      params: {
        path: ['styleguide']
      }
    }, {
      params: {
        path: ['styleguide', 'custom-route-type']
      }
    }, {
      params: {
        path: ['graphql']
      }
    }, {
      params: {
        path: ['graphql', 'sample-1']
      }
    }, {
      params: {
        path: ['graphql', 'sample-2']
      }
    }, {
      params: {
        path: ['da-DK', 'styleguide']
      }
    }],
    fallback: false
  };
}; // This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.

const _path_getStaticProps = async context => {
  const props = await sitecorePagePropsFactory.create(context);
  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5 // In seconds

  };
};
/* harmony default export */ var _path_ = __webpack_exports__["default"] = (SitecorePage);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vW9U":
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "vs62":
/***/ (function(module, exports) {

module.exports = require("apollo-link-batch-http");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });