import { Block } from './block';
import { SHA256 } from './sha256';

export class Blockchain {

	sha256: SHA256 = new SHA256();
	blocks: Block[] = [];

	add(block: Block): void {
		if(this.blocks.length == 0) {
			block.blk = 1;
			block.phash = '';
		} else {
			block.blk = this.blocks.length + 1;
			block.phash = this.blocks[this.blocks.length - 1].hash;
		}
		let minedBlock = this.mine(block);
		minedBlock.blk = this.blocks.length + 1;
		this.blocks.push(minedBlock);
	}

	constructor() {
		if(this.blocks.length == 0) {
			let genesis = new Block("Genesis");
			this.add(genesis);
		}
	}

	mine(block: Block): Block {
		block.nonce = 0;
		while(true) {
			block.hash = this.sha256.hash(block.forHash());
			if(this.isHashSecure(block.hash)) {
				return block;
			}
			block.nonce++;
		}
	}

	isHashSecure(hash: string, zeros: number = 4): boolean {
		for(let idx = 0; idx < zeros; idx++) {
			if(hash.charAt(idx) != '0') {
				return false;
			}
		}
		return true;
	}

	check() {
		let isCorrupt = false;
		for(let block of this.blocks) {
			let calchash = this.sha256.hash(block.forHash());
			if(calchash != block.hash) {
				isCorrupt = true;
				console.log("Block", block.blk, "is corrupt! - hash is", 
									calchash.substring(57), "but should be", block.hash.substring(57));
			}
		}
		if(isCorrupt) {
			console.error("WARNING: Blockchain integrity has been compromised!!!");
		} else {
			console.log("INFO: Blockchain integrity is confirmed.");
		}
	}

	print() {
		for(let block of this.blocks) {
			block.debug();
		}
	}

}