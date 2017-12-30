import { Block } from './block';
import { SHA256 } from './sha256';

export class blockchain {

	private blocks: Block[] = [];

	public add(block: Block): void {

	}

	private mine(block: Block): Block {
		let sha256 = new SHA256();
		block.nonce = 0;
		while(true) {
			block.hash = sha256.hash(block.forHash());
			if(this.isHashSecure(block.hash)) {
				return block;
			}
			block.nonce++;
		}
	}

	private isHashSecure(hash: string, zeros: number = 4): boolean {
		for(let idx = 0; idx < zeros; idx++) {
			if(hash.charAt(idx) != '0') {
				return false;
			}
		}
		return true;
	}

}