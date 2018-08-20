/*
input object - tracks the overall settings and the current input of the cipher
	isEncrypting = true if user is encrypting the message, false if decrypting
	message = message the user is ciphering
	technique = the ciphering technique the user chooses to cipher with
	settings = array representing the specific settings of a cipher technique
*/

cipherMap = {}
cipherMap['Caesar'] = new Caesar();
cipherMap['Vigenere'] = new Vigenere();

var cipher = cipherMap['Caesar'];

var isEncrypting = true;
settings = [];

function toggleEncDec() {
	isEncrypting = !isEncrypting;
  console.log('Encrypt/Decrypt button toggled to ' + isEncrypting);
}

function setTechnique() {
  let technique = document.getElementById('technique').value;
  console.log('Technique set to ' + technique);
  cipher = cipherMap[technique];
  document.getElementById('settings').innerHTML = cipher.HTMLText;

}

function dispSettings() {
	console.log('dispSettings() called');
	var disp = document.getElementById('settings');
	disp.style.display = (disp.style.display === 'none') ? 'block' : 'none';
}

function testMe2() {
	console.log('Input area changed');
	var message = document.getElementById('messagebox').value;
	var shiftVal = parseInt(document.getElementById('shiftVal').value);
	document.getElementById('outputbox').innerHTML = 
		(isNaN(shiftVal)) ? caesar(message, 7) : caesar(message, shiftVal);
  var test = document.getElementById('settings');
  test.innerHTML = cipher.HTMLText;
}

function updateSettings() {
  
}

function togSteps() {
  var message = document.getElementById('messagebox').value;
  var shiftVal = parseInt(document.getElementById('shiftVal').value);
  document.getElementById('steps').innerHTML = 
    cipher.showSteps(message, );
}
