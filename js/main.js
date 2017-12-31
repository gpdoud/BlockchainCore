"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blockchain_1 = require("./blockchain");
var block_1 = require("./block");
var Main = /** @class */ (function () {
    function Main() {
        this.blockchain = new blockchain_1.Blockchain();
    }
    Main.prototype.run = function () {
        this.blockchain.add(new block_1.Block("Second block"));
        this.blockchain.add(new block_1.Block("Third block"));
        this.blockchain.print();
        console.log("Intentionally corrupting block 2");
        this.corruptBlock(this.blockchain.blocks[1]);
        this.blockchain.check();
    };
    Main.prototype.corruptBlock = function (block) {
        block.data = block.data.toUpperCase();
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.run();
