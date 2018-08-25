export default class Caesar {

	constructor() {
		this.defaultSettings = ['7'];
		this.HTMLText = 
			'<h4><strong>Caesar<br></strong></h4>\n' + 
			'<label for="Shift Value">Shift Value</label>\n' +
			'<input type="text" name="setting" id="shiftVal"\n' +  
			'placeholder="Enter value (Default 7)">\n';
		this.warning = 'Invalid shift value (must be number only), ' +
		               'using default value (7)';
	}

	encrypt(str, settings) {
		// check for invalid settings
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			return this.encrypt(str, this.defaultSettings);
		}

		// check for invalid settings
		if (typeof(str) == "undefined") {
			return "";
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
			if (curChar.match(/^[A-Za-z]+$/)) {
				var charCode = str.charCodeAt(i);

				if ((charCode >= 65) && (charCode <= 90)) // uppercase
					curChar = 
						String.fromCharCode(((charCode - 65 + shiftVal) % 26) + 65);
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
		return this.encrypt(str, [shiftVal.toString()]);
	}

	showSteps(str, settings, isEncrypting) {
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			settings = this.defaultSettings;
		}
		var shiftVal = parseInt(settings[0]);
		if (!isEncrypting) {
			shiftVal = -shiftVal;
		}
		var strLen = Math.min(str.length, 7);
		var output = '';
		output += ((isEncrypting) ? 'Encrypting "' : 'Decrypting "') + 
			((str.length > 7) ? str.substring(0, 7) + 
				'"... First 7 characters' : str + '"') + '<br><br>' +
			'Step 1: Rotate the alphabet to the ' + 
			((isEncrypting) ? 'right ' : 'left ') + 
			'by ' + Math.abs(shiftVal) + ' character(s)<br>' +
			'Old: a b c d e... w x y z  -><br>New: ' +
			this.encrypt('a b c d e... w x y z', [shiftVal.toString()]) +
			'<br><br>Step 2: Match the characters in the message to the newly ' +
			'shifted alphabet<br>';
			for (var i = 0; i < strLen; i++) {
				var curChar = str.charAt(i);
				if (curChar.match(/[a-z]/i)) {
					output += (curChar + ' -> shift by ' + shiftVal + ' -> ' + 
						        this.encrypt(curChar, [shiftVal.toString()]) + '<br>');
				}
			}
			output += '<br>Step 3: Recombine the letters in the final message<br>' +
			'Initial message: ' + str + '<br>Final message: ' + 
			this.encrypt(str, [shiftVal.toString()]);
			return output;
	}

	hasInvalidSettings(settings) {
		// we will not count a setting as invalid if no setting is passed in
		return(settings && settings.length > 0 && 
			     settings[0] !== '' && isNaN(parseInt(settings[0])));
	}
}