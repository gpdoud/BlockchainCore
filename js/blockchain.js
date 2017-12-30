"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = require("./sha256");
var blockchain = /** @class */ (function () {
    function blockchain() {
        this.blocks = [];
    }
    blockchain.prototype.add = function (block) {
    };
    blockchain.prototype.mine = function (block) {
        var sha256 = new sha256_1.SHA256();
        block.nonce = 0;
        while (true) {
            block.hash = sha256.hash(block.forHash());
            if (this.isHashSecure(block.hash)) {
                return block;
            }
            block.nonce++;
        }
    };
    blockchain.prototype.isHashSecure = function (hash, zeros) {
        if (zeros === void 0) { zeros = 4; }
        for (var idx = 0; idx < zeros; idx++) {
            if (hash.charAt(idx) != '0') {
                return false;
            }
        }
        return true;
    };
    return blockchain;
}());
exports.blockchain = blockchain;
