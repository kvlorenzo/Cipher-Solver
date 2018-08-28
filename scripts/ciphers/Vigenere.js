export default class Vigenere {

	constructor() {
		this.defaultSettings = ['key'];
		this.HTMLText = 
			'<h4><strong>Vigenere<br></strong></h4>\n' + 
			'<label for="Keyword">Keyword (case-insensitive)</label>\n' +
			'<input type="text" name="setting" id="keyword"\n' +  
			'placeholder="Enter keyword (Default "key")">\n';
		this.warning = 'Invalid keyword (must be letters only), ' +
		               'using default ("key")';
	}

	encrypt(str, settings) {
		// check for invalid settings
		if (!settings || settings.length <= 0 || !(/[a-z]/i.test(settings[0]))) {
			return this.encrypt(str, this.defaultSettings);
		} 

		// create key array - will be case-insensitive by making all lower-case
		var keyArr = this.createKeyArray(settings[0].toLowerCase());

		var output = '';
		var curIdx = 0; // tracks str index (excludes non-alphabetic chars);

		// Go through each character
		for (var i = 0; i < str.length; i++) {
			var curChar = str[i];

			// Check if it's a letter then get its character code
			if (curChar.match(/[a-z]/i)) {
				var charCode = str.charCodeAt(i);

				// keyCode is the shift value based on the letter - a = 0, b = 1...
				var keyCode = keyArr[curIdx % keyArr.length];

				if ((charCode >= 65) && (charCode <= 90)) { // uppercase
					curChar = 
						String.fromCharCode(((charCode - 65 + keyCode) % 26) + 65);
				}
				else if ((charCode >= 97) && (charCode <= 122)) { // lowercase
					curChar = 
						String.fromCharCode(((charCode - 97 + keyCode) % 26) + 97);
				}
				curIdx++;
			}
			output += curChar;
		}
		return output;
	}

	decrypt(str, settings) {
		if (!settings || settings.length <= 0 || !(/[a-z]/i.test(settings[0]))) {
			settings = this.defaultSettings;
		}
		var newKey = this.createDecryptKey(settings[0]);
		return this.encrypt(str, [newKey]);
	}

	showSteps(str, settings, isEncrypting) {
		if (!settings || settings.length <= 0 || isNaN(parseInt(settings[0]))) {
			settings = this.defaultSettings;
		}
		var key = (isEncrypting) ? settings[0] : 
							this.createDecryptKey(settings[0]);
		var strLen = Math.min(str.length, 7);
		var output = '';
		output += ((isEncrypting) ? 'Encrypting "' : 'Decrypting "') + 
			((str.length > 7) ? str.substring(0, 7) + 
				'"... First 7 characters' : str + '"') + '<br><br>' +
			'Step 1: Find the shift values of the characters in the key<br> ' +
			' Encrypting has a positive shift (> 0), decrypting has negative (< 0)' +
			'<br> Shift val will be as follows: a = 0, b = 1, c = 2,... z = 25<br>'; 
			for (var i = 0; i < key.length; i++) {
				var curChar = settings[0].charAt(i);
				if (curChar.match(/[a-z]/i)) {
					output += (curChar + ' ->  ' + curChar.toLowerCase().charCodeAt(0));
				}
			}
			output +='<br><br>Step 2: Match the characters in the message to the newly ' +
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
		return (settings && settings.length > 0 && 
			     settings[0] !== '' && !(settings[0].match(/^[A-Za-z]+$/)));
	}

	createDecryptKey(keyword) {
		var oldKey = keyword.toLowerCase();
		var newKey = '';
		for (var i = 0; i < oldKey.length; i++) {
			newKey += 
			String.fromCharCode(((26 - (oldKey.charCodeAt(i) - 97) % 26) % 26) + 97);
		}
		return newKey;
	}

	createKeyArray(keyword) {
		var keyArr = [];
		for (var i = 0; i < keyword.length; i++) {
			keyArr.push((keyword.charCodeAt(i) - 97) % 26);
		}
		return keyArr;
	}
}