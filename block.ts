import { Transactions } from './transactions';
import { Transaction } from './transaction';

export class Block {
	
	blk: number;
	nonce: number;
	ts: Date;
	hash: string;
	phash: string;
	trans: Transactions;
	note: string;
	merkleroot: string;

	getTran(idx: number): Transaction {
		return this.trans.get(idx);
	}

	setTrans(trans: Transactions): void {
		this.trans = trans;
		this.merkleroot = trans.merkleRoot;
	}

	forHash(): string {
		return String(this.blk)
					+String(this.nonce)
					+String(this.ts)
					+ this.phash
					+String(this.trans)
					+ this.merkleroot
					+ this.note;
	}

 	debug(): void {
		console.log("Blk:\t [", this.blk,"]");
		console.log("PHash:\t [",this.phash.substring(58),"]");
		console.log("Hash:\t [",this.hash.substring(58),"]");
		console.log("Ts:\t [", this.ts.toISOString(),"]");
		console.log("Nonce:\t [", this.nonce, "]");
		console.log("MRoot:\t [", this.merkleroot, "]");
		console.log("Note:\t [", this.note,"]");
		console.log("Data follows --------------");
		this.trans.debug();
		console.log("================================================================================================");
	}

	constructor(note: string) {
		this.blk = -1;
		this.nonce = 0;
		this.ts = new Date();
		this.hash = '';
		this.phash = '';
		this.trans = new Transactions();
		this.note = note;
	}
}