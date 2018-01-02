"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = require("./sha256");
var Merkle = /** @class */ (function () {
    function Merkle() {
    }
    Merkle.root = function (hashes) {
        var thashes = hashes;
        while (thashes.length > 1) {
            var h1 = thashes.shift();
            var h2 = thashes.shift();
            var hs = sha256_1.SHA256.hash(String(h1) + String(h2));
            thashes.push(hs);
        }
        return thashes[0];
    };
    return Merkle;
}());
exports.Merkle = Merkle;
