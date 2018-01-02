"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merkle_1 = require("./merkle");
var Transactions = /** @class */ (function () {
    function Transactions() {
        this.transactions = [];
    }
    Transactions.prototype.get = function (idx) {
        return this.transactions[idx];
    };
    Transactions.prototype.add = function (transaction) {
        this.transactions.push(transaction);
        this.merkleRoot = this.calcMerkleRoot();
    };
    Transactions.prototype.calcMerkleRoot = function () {
        var hashes = [];
        var lastHash = '';
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var t = _a[_i];
            hashes.push(t.hash);
            lastHash = t.hash;
        }
        if (hashes.length % 2 != 0) {
            hashes.push(lastHash); // make an even number
        }
        return merkle_1.Merkle.root(hashes);
    };
    Transactions.prototype.debug = function () {
        console.log("    [-----------IN------------] [-----------Out-----------] ");
        console.log("Nbr Addr   Asset                Addr   Asset                Note");
        console.log("--- ------ -------------------- ------ -------------------- -----------------------------------");
        for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
            var tran = _a[_i];
            tran.debug();
        }
    };
    return Transactions;
}());
exports.Transactions = Transactions;
