import { Transaction } from './Transaction';
import { SHA256 } from './sha256'
import { Merkle } from './merkle';

export class Transactions {

	transactions: Transaction[] = [];
	merkleRoot: string;

	get(idx: number): Transaction {
		return this.transactions[idx];
	}
	add(transaction: Transaction): void {
		this.transactions.push(transaction);
		this.merkleRoot = this.calcMerkleRoot();
	}
	calcMerkleRoot(): string {
		let hashes: string[] = [];
		let lastHash: string = '';
		for(let t of this.transactions) {
			hashes.push(t.hash);
			lastHash = t.hash;
		}
		if(hashes.length % 2 != 0) {
			hashes.push(lastHash); // make an even number
		}
		return Merkle.root(hashes);
	}
	debug(): void {
		console.log("    [-----------IN------------] [-----------Out-----------] ");
		console.log("Nbr Addr   Asset                Addr   Asset                Note");
		console.log("--- ------ -------------------- ------ -------------------- -----------------------------------");
		for(let tran of this.transactions) {
			tran.debug();
		}
	}

	constructor() {}

}