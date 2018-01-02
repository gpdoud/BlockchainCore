export class FixedString {

	static toString(data: any, len: number): string {
		return (String(data)+FixedString.toPad(len)).substring(0, len);
	}

	static toPad(len: number): string {
		let pad = '';
		for(let idx = 0; idx < len; idx++) {
			pad += ' ';
		}
		return pad;
	}
	
}