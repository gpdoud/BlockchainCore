import { Blockchain } from './blockchain';
import { Block } from './block';

export class Main {

	blockchain: Blockchain;

	run() {
		this.blockchain.add(new Block("Second block"));
		this.blockchain.add(new Block("Third block"));
		this.blockchain.print();
		console.log("Intentionally corrupting block 2");
		this.corruptBlock(this.blockchain.blocks[1]);
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
