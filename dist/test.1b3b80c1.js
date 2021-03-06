// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\n .skin * {\n     box-sizing: border-box;\n   }\n   .skin *::after,\n   .skin *::before {\n     box-sizing: border-box;\n   }\n    \n   .skin {\n     position: relative;\n     background-color: #ffe600;\n     min-height: 50vh;\n   \n   }\n   .nose {\n     position: relative;\n     left: 50%;\n     top: 150px;\n     border: 20px solid #000000;\n     border-color: #000000 transparent transparent transparent;\n     width: 0px;\n     height: 0px;\n     margin-left: -20px;\n     z-index: 10;\n   }\n   .nose:hover {\n     transform-origin: 50% 100%;\n     animation: words 100ms infinite;\n   }\n   @keyframes words {\n     0% {\n       transform: rotate(0);\n     }\n     20% {\n       transform: rotate(4deg);\n     }\n     40% {\n       transform: rotate(-4deg);\n     }\n     100% {\n       transform: rotate(0);\n     }\n   }\n   .yuan {\n     /* border: 1px solid red; */\n     border-radius: 15px 15px 0px 0px;\n     background-color: #000000;\n     width: 38px;\n     height: 15px;\n     position: absolute;\n     top: -32px;\n     left: -19px;\n   }\n   .eve {\n     position: absolute;\n     top: 100px;\n     left: 50%;\n     border: 3px solid #2e2e2e;\n     width: 64px;\n     height: 64px;\n     margin-left: -32px;\n     border-radius: 50%;\n     background: #000000;\n   }\n   .eve::before {\n     position: relative;\n     top: 2px;\n     left: 8px;\n     content: \"\";\n     display: block;\n     border: 3px solid #fff;\n     width: 32px;\n     height: 32px;\n     border-radius: 50%;\n     background-color: #ffffff;\n   }\n   .eve.left {\n     transform: translateX(-100px);\n   }\n   .eve.right {\n     transform: translateX(100px);\n   }\n   .mouth {\n     position: absolute;\n     top: 200px;\n     left: 50%;\n     /* border: 1px solid red; */\n     width: 150px;\n     height: 170px;\n     margin-left: -75px;\n   }\n   .mouth .goatee {\n     position: relative;\n     z-index: 1;\n   }\n   .mouth .goatee .goateeLeft {\n     position: absolute;\n     top: -25px;\n     left: -5px;\n     border: 5px solid #000000;\n     width: 80px;\n     height: 30px;\n     border-radius: 0 0 0 50px;\n     border-top: none;\n     border-right: none;\n     transform: rotate(-15deg);\n     background: #ffe600;\n   }\n   .mouth .goatee .goateeRight {\n     position: absolute;\n     top: -25px;\n     left: 75px;\n     border: 5px solid #000000;\n     width: 80px;\n     height: 30px;\n     border-radius: 0 0 50px 0px;\n     border-top: none;\n     border-left: none;\n     transform: rotate(15deg);\n     background: #ffe600;\n   }\n   .mouth .tongue {\n     position: relative;\n     top: -10px;\n     width: 150px;\n     height: 200px;\n     overflow: hidden;\n   }\n   .mouth .tongue .yuan1 {\n     border: 3px solid #000;\n     width: 120px;\n     height: 250px;\n     position: absolute;\n     bottom: 0;\n     left: 50%;\n     background-color: #9b000a;\n     margin-left: -60px;\n     border-radius: 150px/300px;\n     overflow: hidden;\n   }\n   .mouth .tongue .yuan2 {\n     /* border: 3px solid green; */\n     width: 180px;\n     height: 250px;\n     position: absolute;\n     bottom: -85px;\n     left: 50%;\n     background-color: #ff485f;\n     margin-left: -90px;\n     border-radius: 50%;\n   }\n   .face {\n     z-index: 2;\n     border: 1px solid red;\n     width: 80px;\n     height: 80px;\n     position: absolute;\n     top: 230px;\n     left: 50%;\n     margin-left: -40px;\n   }\n   .face.left {\n     transform: translate(-160px);\n     border-radius: 50%;\n     border: 3px solid #000;\n     background-color: #ff0000;\n   }\n   .face.right {\n     transform: translate(160px);\n     border-radius: 50%;\n     border: 3px solid #000;\n     background-color: #ff0000;\n   }\n \n"; // 生成模块

var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  ui: {
    dome: document.querySelector('#dome'),
    dome2: document.querySelector('#dome2')
  },
  id: undefined,
  init: function init() {
    player.ui.dome.innerText = _css.default.substr(0, player.n);
    player.ui.dome2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvent();
    player.play();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvent: function bindEvent() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.dome.innerText = _css.default.substr(0, player.n);
    player.ui.dome2.innerHTML = _css.default.substr(0, player.n);
    player.ui.dome.scrollTop = dome.scrollHeight;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    ayer.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.1b3b80c1.js.map