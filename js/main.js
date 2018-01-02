"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blockchain_1 = require("./blockchain");
var block_1 = require("./block");
var transaction_1 = require("./transaction");
var transactions_1 = require("./transactions");
var Main = /** @class */ (function () {
    function Main() {
        this.blockchain = new blockchain_1.Blockchain();
    }
    Main.prototype.run = function () {
        // transactions
        var trans = new transactions_1.Transactions();
        var tran = new transaction_1.Transaction(0, '', '', 'gd', 'watch #37483636', 'bought gold watch');
        trans.add(tran);
        // blocks
        var block = new block_1.Block('Block with trans');
        block.setTrans(trans);
        this.blockchain.add(block);
        console.log("Intentionally corrupting block 2 by forcing data to upper case.");
        this.corruptBlock(this.blockchain.blocks[1]);
        this.blockchain.print();
        this.blockchain.check();
    };
    Main.prototype.corruptBlock = function (block) {
        block.merkleroot = "ABC123";
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.run();
