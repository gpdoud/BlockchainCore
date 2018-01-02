import { SHA256 } from './sha256';

export class Merkle {

	static root(hashes: string[]): string {
		let thashes = hashes;
		while(thashes.length > 1) {
			let h1  = thashes.shift();
			let h2 = thashes.shift();
			let hs = SHA256.hash(String(h1)+String(h2);
			thashes.push(hs);
		}
		return thashes[0];
	}

	constructor() {} 

}