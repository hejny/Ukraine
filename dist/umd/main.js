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

    var UKRAINE_FLAG_IMAGE_URL = "data:image/svg+xml,%3Csvg class='flag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23005BBB'/%3E%3Crect width='1200' height='400' y='400' fill='%23FFD500'/%3E%3C/svg%3E";
    var BLOOD_IMAGE_URL = "https://raw.githubusercontent.com/hejny/Ukraine/main/assets/with-drops-of-blood.png";

    var Ukraine = /** @class */ (function () {
        function Ukraine(options) {
            this.options = options;
            this.scope = 'x' + Math.random().toString().split('.')[1] + '_';
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
            // TODO: !!! Also ocupy console and mess up whole dom
            // TODO: Play anthemn
        }
        Ukraine.create = function (options) {
            options = options || {};
            if (options.element === undefined) {
                options.element = window.document.createElement('div');
                window.document.body.appendChild(options.element);
            }
            return new Ukraine(__assign({ element: options.element, languages: [/* Russia and Belarus */ 'ru', 'by'], isBloodIncluded: true, text: "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u0439\u043D\u0443 \u0441 <b>\u0423\u043A\u0440\u0430\u0438\u043D\u043E\u0439</b>" }, options));
        };
        return Ukraine;
    }());

    return Ukraine;

}));
//# sourceMappingURL=main.js.map
