import { SHA256 } from './sha256'; 
import { FixedString } from './fixedstring';
import { ForHash } from './forhash';

export class Transaction implements ForHash {

	nbr: number;
	inaddr: string; // who
	inasset: string;
	outaddr: string;
	outasset: string;
	note: string; 
	hash: string;

	sethash(): void {
		this.hash = SHA256.hash(this.forHash());
	}

	checkHash(): boolean {
		return this.hash == SHA256.hash(this.forHash());
	}

	forHash(): string {
		return String(this.nbr)
						+ this.inaddr + this.inasset
						+ this.outaddr + this.outasset
						+ this.note;
	}

	debug(): void {
			console.log(FixedString.toString(this.nbr, 3)+" "+
									FixedString.toString(this.inaddr, 6)+" "+
									FixedString.toString(this.inasset, 20)+" "+
									FixedString.toString(this.outaddr, 6)+" "+
									FixedString.toString(this.outasset, 20)+" "+
									FixedString.toString(this.note, 35));
	}
	
	constructor(nbr: number, inaddr: string, inasset: string, 
							outaddr: string, outasset: string, note: string) {
		this.nbr = nbr;
		this.inaddr = inaddr;
		this.inasset = inasset;
		this.outaddr = outaddr;
		this.outasset = outasset;
		this.note = note;
		this.sethash();
	}
}