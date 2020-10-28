/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n\nconst handlerSsrRequests = (req, res) => {\n  const context = {\n    status: 200,\n    fetch: {},\n\n    get(key) {\n      if (this.fetch[key]) return this.fetch[key];\n    },\n\n    set(k, d) {\n      this.fetch[k] = d;\n    },\n\n    poolFetches: [],\n\n    resetPoolFetches() {\n      this.poolFetches = [];\n    }\n\n  };\n\n  function recusiveRenderApp() {\n    return new Promise(async (resolve, reject) => {\n      console.log(\"Rendering react app\");\n      let app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n        location: req.url,\n        context: context\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n\n      if (context.poolFetches.length) {\n        console.log(`Found fetches that should be resolve before: ${context.poolFetches.length}`);\n        return Promise.all(context.poolFetches).then(() => {\n          context.poolFetches = [];\n          return recusiveRenderApp();\n        }).then(resolve).catch(reject);\n      }\n\n      console.log('Was resolved all fetches');\n      resolve(app);\n    });\n  }\n\n  recusiveRenderApp().catch(error => {\n    res.status(500).send(\"Error on Promises \" + JSON.stringify(error));\n  }).then(app => {\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        return res.status(500).send(\"Oops, better luck next time!\");\n      }\n\n      if (context.status) {\n        res.status(context.status);\n      }\n\n      if (context.url) {\n        return res.redirect(301, context.url);\n      }\n\n      const ssrFetchData = `<script>\n    window.__ssrFetch__ = ${JSON.stringify(context.fetch)}\n    </script>`;\n      return res.send(data.replace('<div id=\"root\"></div>', `<div data-any id=\"root\">${app}</div>${ssrFetchData}`));\n    });\n  });\n};\n\napp.get(\"/\", handlerSsrRequests);\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.get(\"/*\", handlerSsrRequests);\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _containers_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home */ \"./src/containers/home.js\");\n/* harmony import */ var _containers_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/details */ \"./src/containers/details.js\");\n/* harmony import */ var _containers_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/list */ \"./src/containers/list.js\");\n/* harmony import */ var _containers_not_found__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/not-found */ \"./src/containers/not-found.js\");\n\n\n\n\n\n\n\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n  padding: 20px;\n`;\n\nfunction App() {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {// window.__ssrFetchForce__ = true;\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/details\"\n  }, \"Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/list\"\n  }, \"List\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _containers_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/list\",\n    component: _containers_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/details\",\n    component: _containers_details__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _containers_not_found__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/component/show-comments.js":
/*!****************************************!*\
  !*** ./src/component/show-comments.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ssr */ \"./src/ssr/index.js\");\n\n\n\nconst getOperation = postId => ({\n  url: `http://localhost:3010/posts/${postId}/comments`\n});\n\nconst ShowPerson = props => {\n  const {\n    data,\n    loading\n  } = Object(_ssr__WEBPACK_IMPORTED_MODULE_1__[\"useSsrFetch\"])(getOperation(props.postId));\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  const results = data;\n  console.log(\"show comments\", results);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Show comments \", results.length), results.map(comments => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: comments.id\n  }, comments.name)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowPerson);\n\n//# sourceURL=webpack:///./src/component/show-comments.js?");

/***/ }),

/***/ "./src/containers/details.js":
/*!***********************************!*\
  !*** ./src/containers/details.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ssr */ \"./src/ssr/index.js\");\n\n\nconst OPERATION = {\n  url: `http://localhost:3010/photos`\n};\n\nconst Details = props => {\n  const {\n    data,\n    loading\n  } = Object(_ssr__WEBPACK_IMPORTED_MODULE_1__[\"useClientFetch\"])(OPERATION);\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  const results = data;\n  console.log(\"show photos\", results);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Details\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\n\n//# sourceURL=webpack:///./src/containers/details.js?");

/***/ }),

/***/ "./src/containers/home.js":
/*!********************************!*\
  !*** ./src/containers/home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Home = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/containers/home.js?");

/***/ }),

/***/ "./src/containers/list.js":
/*!********************************!*\
  !*** ./src/containers/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ssr */ \"./src/ssr/index.js\");\n/* harmony import */ var _component_show_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/show-comments */ \"./src/component/show-comments.js\");\n\n\n\nconst OPERATION = {\n  url: \"http://localhost:3010/posts\"\n};\n\nconst List = props => {\n  const {\n    data,\n    loading\n  } = Object(_ssr__WEBPACK_IMPORTED_MODULE_1__[\"useSsrFetch\"])(OPERATION);\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  const results = data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"List of posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, results.slice(0, 5).map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: item.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    key: item.id\n  }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_show_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    postId: item.id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/containers/list.js?");

/***/ }),

/***/ "./src/containers/not-found.js":
/*!*************************************!*\
  !*** ./src/containers/not-found.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst NotFound = ({\n  staticContext = {}\n}) => {\n  staticContext.status = 404;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"NotFound\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/containers/not-found.js?");

/***/ }),

/***/ "./src/ssr/index.js":
/*!**************************!*\
  !*** ./src/ssr/index.js ***!
  \**************************/
/*! exports provided: useStaticContext, useClientFetch, useSsrFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStaticContext\", function() { return useStaticContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useClientFetch\", function() { return useClientFetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSsrFetch\", function() { return useSsrFetch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/hash */ \"./src/utils/hash.js\");\n// eslint-disable-next-line no-unused-vars\n\n\n\n\nconst isSSR = !(typeof window !== \"undefined\" && window.document && window.document.createElement);\nconst useStaticContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(react_router__WEBPACK_IMPORTED_MODULE_1__[\"__RouterContext\"]).staticContext;\nconst useClientFetch = (operation, skip = false) => {\n  const cacheKey = Object(_utils_hash__WEBPACK_IMPORTED_MODULE_3__[\"hash\"])(operation);\n  const [fetchData, setFetchData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(!skip);\n  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null); // ssr will ignore useEffect\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (skip) return;\n\n    const refetch = async operation => {\n      setLoading(true);\n\n      try {\n        const {\n          data\n        } = await axios__WEBPACK_IMPORTED_MODULE_2___default()(operation);\n        setFetchData(data);\n        setLoading(false);\n      } catch (error) {\n        setError(error);\n      }\n    };\n\n    refetch(operation); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [cacheKey, skip]);\n  return {\n    data: fetchData,\n    loading,\n    error\n  };\n}; // this will tell to ssr to wait this fetch until resolve and then render again\n\nconst useSsrFetch = operation => {\n  const cacheKey = Object(_utils_hash__WEBPACK_IMPORTED_MODULE_3__[\"hash\"])(operation);\n  let ssrData = useSsrFetchState(cacheKey);\n  const context = useStaticContext(); // set on pool of ssr fetches the current fetch\n\n  const ssrRequest = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(operation => {\n    console.log(\"ssrRequest\");\n    const promiAxios = axios__WEBPACK_IMPORTED_MODULE_2___default()(operation);\n    context.poolFetches.push(new Promise((resolve, reject) => {\n      promiAxios.then(result => {\n        context.set(cacheKey, result.data);\n        resolve();\n      }).catch(reject);\n    }));\n  }, [context, cacheKey]);\n  if (isSSR && !ssrData) ssrRequest(operation);\n  const {\n    data: fetchData,\n    loading,\n    error\n  } = useClientFetch(operation, !!ssrData && !(typeof window !== \"undefined\" && window.__ssrFetchForce__));\n  return {\n    data: fetchData || ssrData,\n    loading: ssrData ? false : loading,\n    error\n  };\n};\n\nconst useSsrFetchState = (cacheKey, defaultValue) => {\n  const context = useStaticContext();\n\n  if (context && context.get) {\n    const data = context.get(cacheKey);\n\n    if (data) {\n      return data;\n    }\n  }\n\n  if (context && context.fetch && context.fetch[cacheKey]) return context.fetch[cacheKey];\n  if (!isSSR && window.__ssrFetch__ && window.__ssrFetch__[cacheKey]) return window.__ssrFetch__[cacheKey];\n  if (context) context.fetch[cacheKey] = defaultValue;\n  return defaultValue;\n};\n\n//# sourceURL=webpack:///./src/ssr/index.js?");

/***/ }),

/***/ "./src/utils/hash.js":
/*!***************************!*\
  !*** ./src/utils/hash.js ***!
  \***************************/
/*! exports provided: hash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hash\", function() { return hash; });\n/* harmony import */ var hashcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hashcode */ \"hashcode\");\n/* harmony import */ var hashcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hashcode__WEBPACK_IMPORTED_MODULE_0__);\n\nconst hash = x => {\n  return Object(hashcode__WEBPACK_IMPORTED_MODULE_0__[\"hashCode\"])().value(JSON.stringify(x));\n};\n\n//# sourceURL=webpack:///./src/utils/hash.js?");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");\n\n//# sourceURL=webpack:///external_%22@emotion/styled%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "hashcode":
/*!***************************!*\
  !*** external "hashcode" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hashcode\");\n\n//# sourceURL=webpack:///external_%22hashcode%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });