function caesar(str, amount) {
	// Wrap the amount
	if (amount < 0)
		return caesar(str, amount + 26);
	// Make an output variable
	var output = '';
	// Go through each character
	for (var i = 0; i < str.length; i ++) {
		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);
			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		// Append
		output += c;
	}
	// All done!
	return output;
}

class Caesar {

	constructor() {
		this.defaultSettings = ['7'];
		this.HTMLText = 
			'<h4><strong>Caesar poop<br></strong></h4>\n' + 
			'<label for="Shift Value">Shift Value</label>\n' +
			'<input type="text" name="shiftVal" id="shiftVal"\n' +  
			'oninput="testMe2()" + placeholder="Enter value (Default 7)">\n';
	}

	encrypt(str, settings) {
		// check for invalid settings
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			return encrypt(str, this.defaultSettings);
		} 

		// create shift val settings
		var shiftVal = parseInt(settings[0]);
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