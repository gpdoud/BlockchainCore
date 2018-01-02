"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_1 = require("./transactions");
var Block = /** @class */ (function () {
    function Block(note) {
        this.blk = -1;
        this.nonce = 0;
        this.ts = new Date();
        this.hash = '';
        this.phash = '';
        this.trans = new transactions_1.Transactions();
        this.note = note;
    }
    Block.prototype.getTran = function (idx) {
        return this.trans.get(idx);
    };
    Block.prototype.setTrans = function (trans) {
        this.trans = trans;
        this.merkleroot = trans.merkleRoot;
    };
    Block.prototype.forHash = function () {
        return String(this.blk)
            + String(this.nonce)
            + String(this.ts)
            + this.phash
            + String(this.trans)
            + this.merkleroot
            + this.note;
    };
    Block.prototype.debug = function () {
        console.log("Blk:\t [", this.blk, "]");
        console.log("PHash:\t [", this.phash.substring(58), "]");
        console.log("Hash:\t [", this.hash.substring(58), "]");
        console.log("Ts:\t [", this.ts.toISOString(), "]");
        console.log("Nonce:\t [", this.nonce, "]");
        console.log("MRoot:\t [", this.merkleroot, "]");
        console.log("Note:\t [", this.note, "]");
        console.log("Data follows --------------");
        this.trans.debug();
        console.log("================================================================================================");
    };
    return Block;
}());
exports.Block = Block;
