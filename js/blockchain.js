"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = require("./block");
var sha256_1 = require("./sha256");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.sha256 = new sha256_1.SHA256();
        this.blocks = [];
        if (this.blocks.length == 0) {
            var genesis = new block_1.Block("Genesis");
            this.add(genesis);
        }
    }
    Blockchain.prototype.add = function (block) {
        if (this.blocks.length == 0) {
            block.blk = 1;
            block.phash = '';
        }
        else {
            block.blk = this.blocks.length + 1;
            block.phash = this.blocks[this.blocks.length - 1].hash;
        }
        var minedBlock = this.mine(block);
        minedBlock.blk = this.blocks.length + 1;
        this.blocks.push(minedBlock);
    };
    Blockchain.prototype.mine = function (block) {
        block.nonce = 0;
        while (true) {
            block.hash = this.sha256.hash(block.forHash());
            if (this.isHashSecure(block.hash)) {
                return block;
            }
            block.nonce++;
        }
    };
    Blockchain.prototype.isHashSecure = function (hash, zeros) {
        if (zeros === void 0) { zeros = 4; }
        for (var idx = 0; idx < zeros; idx++) {
            if (hash.charAt(idx) != '0') {
                return false;
            }
        }
        return true;
    };
    Blockchain.prototype.check = function () {
        var isCorrupt = false;
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            var calchash = this.sha256.hash(block.forHash());
            if (calchash != block.hash) {
                isCorrupt = true;
                console.log("Block", block.blk, "is corrupt!");
            }
        }
        if (isCorrupt) {
            console.error("WARNING: Blockchain integrity has been compromised!!!");
        }
        else {
            console.log("INFO: Blockchain integrity is confirmed.");
        }
    };
    Blockchain.prototype.print = function () {
        console.log("\t", "================================================================");
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            block.debug();
        }
    };
    return Blockchain;
}());
exports.Blockchain = Blockchain;
