(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Ukraine = factory());
})(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
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
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    var UKRAINE_FLAG_IMAGE_URL = "data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E";
    var BLOOD_IMAGE_URL = "https://raw.githubusercontent.com/hejny/Ukraine/main/assets/with-drops-of-blood.png";

    function getUserLanguage() {
        var full = navigator.language || navigator.userLanguage;
        var _a = __read(full.split('-'), 2), language = _a[0]; _a[1];
        return language;
    }

    var defaultOptions = {
        /**
         * TODO: Add more countries like chechnya
         */
        countries: [/* Russia and Belarus */ 'ru', 'by'],
        text: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u0439\u043D\u0443 \u0441 <b>\u0423\u043A\u0440\u0430\u0438\u043D\u043E\u0439</b>",
        /**
         * TODO: !!! Better URL
         */
        moreInfoUrl: "https://github.com/hejny/Ukraine",
        ribbon: 'TOP_LEFT',
        isInConsole: true,
        isBloodIncluded: true,
        isGraphicIncluded: true,
        isCancelable: true,
    };

    var Ukraine = /** @class */ (function () {
        function Ukraine(options) {
            // TODO: Split into multiple methods like checkRequirements and init
            this.options = options;
            this.scope = 'x' + Math.random().toString().split('.')[1] + '_';
            if (this.options.countries.includes(getUserLanguage())) {
                this.initBlocking();
            }
            else if (options.ribbon) {
                this.initRibbon();
            }
        }
        Ukraine.save = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = options || {};
                            if (!(options.element === undefined)) return [3 /*break*/, 2];
                            return [4 /*yield*/, new Promise(function (resolve) {
                                    window.addEventListener('load', function (event) {
                                        resolve();
                                    });
                                })];
                        case 1:
                            _a.sent();
                            options.element = window.document.createElement('div');
                            window.document.body.appendChild(options.element);
                            _a.label = 2;
                        case 2: return [2 /*return*/, new Ukraine(__assign(__assign({ element: options.element }, defaultOptions), options))];
                    }
                });
            });
        };
        Ukraine.prototype.initBlocking = function () {
            // Note: To suppress main scrollbar if the page has longer content
            window.document.body.style.setProperty('overflow', 'hidden', 'important');
            this.options.element.style.zIndex = '999999';
            this.options.element.style.position = 'fixed';
            this.options.element.style.top = '0';
            this.options.element.style.bottom = '0';
            this.options.element.style.left = '0';
            this.options.element.style.right = '0';
            this.options.element.style.backgroundColor = '#ffffff';
            this.options.element.innerHTML = /* TODO: Use spaceTrim */ "\n        <div>\n          " + (!this.options.isBloodIncluded
                ? ''
                : "<img class=\"" + this.scope + "blood\" src=\"" + BLOOD_IMAGE_URL + "\" alt=\"Blood\"/>") + "\n          <div class=\"" + this.scope + "flag\">\n            <div class=\"" + this.scope + "text\">\n              " + this.options.text + "\n            </div>\n          </div>\n\n          <style>\n            img." + this.scope + "blood{\n              position: fixed;\n              pointer-events: none;\n              left: 10vw;\n              top: 10vh;\n              max-width: 30vw;\n            }\n\n\n            ." + this.scope + "flag {\n              background-image: url(\"" + UKRAINE_FLAG_IMAGE_URL + "\");\n              background-size: cover;\n              width:100vw;\n              height:100vh;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n            }\n\n            ." + this.scope + "text {\n              padding: 10px;\n              font-size: 50px;\n              color: #FFD500;\n              background-color: #005BBB;\n              border: 3px double #FFD500;\n            }\n\n            ." + this.scope + "text b{\n              display: block;\n              font-size: 100px;\n            }\n          </style>\n\n        </div>\n      ";
            // !!! Use here this.options.moreInfoUrl
        };
        Ukraine.prototype.initRibbon = function () {
            var _a = {
                TOP_LEFT: {
                    container: 'top: 0; left: 0;transform: translateX(-32px);',
                    rotate: '-45deg',
                },
                TOP_RIGHT: {
                    container: 'top: 0; right: 0;transform: translateX(32px);',
                    rotate: '45deg',
                },
                BOTTOM_LEFT: {
                    container: 'bottom: 0; left: 0;transform: translateX(-32px);',
                    rotate: '45deg',
                },
                BOTTOM_RIGHT: {
                    container: 'bottom: 0; right: 0;transform: translateX(32px);',
                    rotate: '-45deg',
                },
            }[this.options.ribbon], container = _a.container, rotate = _a.rotate;
            this.options.element.innerHTML = /* TODO: Use spaceTrim */ "\n\n        <div class=\"" + this.scope + "container\">\n          <a class=\"" + this.scope + "ribbon\" href=\"" + this.options.moreInfoUrl + "\"></a>\n        </div>\n\n        <style>\n\n          ." + this.scope + "container {\n\n            position: fixed;\n            " + container + "\n\n          }\n\n          ." + this.scope + "ribbon {\n            display: block;\n            width: 10vw;\n            height: 0px;\n            transform: rotate(" + rotate + ");\n            border-top: 20px solid #0057b7;\n            border-bottom: 20px solid #ffd700;\n          }\n\n        </style>\n\n\n    ";
        };
        return Ukraine;
    }());

    return Ukraine;

}));
//# sourceMappingURL=main.js.map
