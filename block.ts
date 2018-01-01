export class Block {
	
	blk: number;
	nonce: number;
	ts: Date;
	hash: string;
	phash: string;
	data: any;

	forHash(): string {
		return String(this.blk)
					+String(this.nonce)
					+String(this.ts)
					+String(this.phash)
					+String(this.data);
	}

 	debug(): void {
 		console.log("---");
		console.log("Blk:\t [", this.blk,"]");
		console.log("PHash:\t [",this.phash.substring(57),"]");
		console.log("Hash:\t [",this.hash.substring(57),"]");
		console.log("Ts:\t [", this.ts.toISOString(),"]");
		console.log("Nonce:\t [", this.nonce, "]");
		console.log("Data follows --------------");
		console.log(this.data);
 		console.log("---");
	}

	constructor(data: any = null) {
		this.blk = -1;
		this.nonce = 0;
		this.ts = new Date();
		this.hash = '';
		this.phash = '';
		this.data = data;
	}
}