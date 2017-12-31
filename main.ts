import { Blockchain } from './blockchain';
import { Block } from './block';

export class Main {

	blockchain: Blockchain;

	run() {
		this.blockchain.add(new Block("Second block"));
		this.blockchain.add(new Block("Third block"));
		console.log("Intentionally corrupting block 2 by forcing data to upper case.");
		this.corruptBlock(this.blockchain.blocks[1]);
		this.blockchain.print();
		this.blockchain.check();
	}

	corruptBlock(block: Block) {
		block.data = block.data.toUpperCase();
	}

	constructor() {
		this.blockchain = new Blockchain();
	}
	
}

let main = new Main();
main.run();
