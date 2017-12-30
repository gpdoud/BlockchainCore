"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block() {
    }
    Block.prototype.forHash = function () {
        return String(this.blk)
            + String(this.nonce)
            + String(this.ts)
            + String(this.phash)
            + String(this.data);
    };
    return Block;
}());
exports.Block = Block;
