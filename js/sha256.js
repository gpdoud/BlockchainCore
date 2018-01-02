"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256_1 = require("js-sha256");
var SHA256 = /** @class */ (function () {
    function SHA256() {
    }
    SHA256.hash = function (str) {
        return js_sha256_1.sha256(str);
    };
    return SHA256;
}());
exports.SHA256 = SHA256;
