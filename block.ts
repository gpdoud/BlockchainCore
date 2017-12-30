export class Block {
	
	blk: number;
	nonce: number;
	ts: Date;
	hash: string;
	phash: string;
	data: any;

	public forHash(): string {
		return String(this.blk)
					+String(this.nonce)
					+String(this.ts)
					+String(this.phash)
					+String(this.data);
	}
}