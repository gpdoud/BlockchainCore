import { Blockchain } from './blockchain';
import { Block } from './block';
import { Transaction } from './transaction';
import { Transactions } from './transactions'

export class Main {

	blockchain: Blockchain;

	run() {
		// transactions
		let trans: Transactions = new Transactions();
		let tran: Transaction = new Transaction(0, '', '','gd', 'watch #37483636', 'bought gold watch');
		trans.add(tran);
		// blocks
		let block: Block = new Block('Block with trans');
		block.setTrans(trans);
		this.blockchain.add(block);
		console.log("Intentionally corrupting block 2 by forcing data to upper case.");
		this.corruptBlock(this.blockchain.blocks[1]);
		this.blockchain.print();
		this.blockchain.check();
	}

	corruptBlock(block: Block) {
		block.merkleroot = "ABC123";
	}

	constructor() {
		this.blockchain = new Blockchain();
	}
	
}

let main = new Main();
main.run();
