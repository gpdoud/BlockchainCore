import { sha256 } from 'js-sha256';

export class SHA256 {
	
	hash(str: string): string {
		return sha256(str);
	}
}