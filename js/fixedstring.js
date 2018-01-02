"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FixedString = /** @class */ (function () {
    function FixedString() {
    }
    FixedString.toString = function (data, len) {
        return (String(data) + FixedString.toPad(len)).substring(0, len);
    };
    FixedString.toPad = function (len) {
        var pad = '';
        for (var idx = 0; idx < len; idx++) {
            pad += ' ';
        }
        return pad;
    };
    return FixedString;
}());
exports.FixedString = FixedString;
