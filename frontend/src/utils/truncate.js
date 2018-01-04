const strippableChars = [' ', '.', '?', '!', ','];

export function truncate(txt) {
	return function(len) {
		if (txt.length > len) {
			if (strippableChars.includes(txt.charAt(len-1)) && len > 3) {
				return truncate(txt)(len-1);
			} else {
				return `${txt.substring(0, len)}...`;
			}
		}
		return txt;
	}
}
