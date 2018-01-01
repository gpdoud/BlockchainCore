"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block(data) {
        if (data === void 0) { data = null; }
        this.blk = -1;
        this.nonce = 0;
        this.ts = new Date();
        this.hash = '';
        this.phash = '';
        this.data = data;
    }
    Block.prototype.forHash = function () {
        return String(this.blk)
            + String(this.nonce)
            + String(this.ts)
            + String(this.phash)
            + String(this.data);
    };
    Block.prototype.debug = function () {
        console.log("---");
        console.log("Blk:\t [", this.blk, "]");
        console.log("PHash:\t [", this.phash.substring(57), "]");
        console.log("Hash:\t [", this.hash.substring(57), "]");
        console.log("Ts:\t [", this.ts.toISOString(), "]");
        console.log("Nonce:\t [", this.nonce, "]");
        console.log("Data follows --------------");
        console.log(this.data);
        console.log("---");
    };
    return Block;
}());
exports.Block = Block;
