"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = require("./sha256");
var fixedstring_1 = require("./fixedstring");
var Transaction = /** @class */ (function () {
    function Transaction(nbr, inaddr, inasset, outaddr, outasset, note) {
        this.nbr = nbr;
        this.inaddr = inaddr;
        this.inasset = inasset;
        this.outaddr = outaddr;
        this.outasset = outasset;
        this.note = note;
        this.sethash();
    }
    Transaction.prototype.sethash = function () {
        this.hash = sha256_1.SHA256.hash(this.forHash());
    };
    Transaction.prototype.checkHash = function () {
        return this.hash == sha256_1.SHA256.hash(this.forHash());
    };
    Transaction.prototype.forHash = function () {
        return String(this.nbr)
            + this.inaddr + this.inasset
            + this.outaddr + this.outasset
            + this.note;
    };
    Transaction.prototype.debug = function () {
        console.log(fixedstring_1.FixedString.toString(this.nbr, 3) + " " +
            fixedstring_1.FixedString.toString(this.inaddr, 6) + " " +
            fixedstring_1.FixedString.toString(this.inasset, 20) + " " +
            fixedstring_1.FixedString.toString(this.outaddr, 6) + " " +
            fixedstring_1.FixedString.toString(this.outasset, 20) + " " +
            fixedstring_1.FixedString.toString(this.note, 35));
    };
    return Transaction;
}());
exports.Transaction = Transaction;
