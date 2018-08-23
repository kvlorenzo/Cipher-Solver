export default class Vigenere {

	constructor() {
		this.defaultSettings = ['key'];
		this.HTMLText = 
			'This is a test lol\n';
	}

	encrypt(str, settings) {
		// check for invalid settings
		if (!settings || settings.length <= 0) {
			return encrypt(str, this.defaultSettings);
		} 

		// create key settings
		var key = parseInt(settings[0]);
		// ensure the shift value is positive
		while (shiftVal < 0) {
			shiftVal += 26;
		}

		var output = '';
		// Go through each character
		for (var i = 0; i < str.length; i++) {
			var curChar = str[i];

			// Check if it's a letter then get its character code
			if (curChar.match(/[a-z]/i)) {
				var charCode = str.charCodeAt(i);

				if ((charCode >= 65) && (charCode <= 90)) // uppercase
					curChar = 
						String.fromCharCode(((code - 65 + shiftVal) % 26) + 65);
				else if ((charCode >= 97) && (charCode <= 122)) // lowercase
					curChar = 
						String.fromCharCode(((charCode - 97 + shiftVal) % 26) + 97);
			}
			output += curChar;
		}
		return output;
	}

	decrypt(str, settings) {
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			settings = this.defaultSettings;
		}
		let shiftVal = parseInt(settings[0]);
		shiftVal = -shiftVal;
		return encrypt(str, [shiftVal.toString()]);
	}

	showSteps(str, settings, isEncrypting) {
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			settings = this.defaultSettings;
		}
		var shiftVal = parseInt(settings[0]);
		if (!isEncrypting) {
			shiftVal = -shiftVal;
		}
		var output = '';
		output += ((isEncrypting) ? 'Encrypting ' : 'Decrypting ') + 
			((str.length > 7) ? str.substring(0, 7) + 
				'... First 7 characters' : str) + '\n\n' +
			'Step 1: Rotate the alphabet to the ' + 
			((isEncrypting) ? 'right ' : 'left ') + 
			'by ' + shiftVal + ' character(s)\n' +
			'a b c d e... w x y z\n' + '|    |    |\n' + 'v    v    v\n' +
			encrypt('a b c d e... w x y z', [shiftVal.toString()]); 
			return output;
	}
}