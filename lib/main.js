'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              input object - tracks the overall settings and the current input of the cipher
                                                                                                                                                                                                                                                                              	isEncrypting = true if user is encrypting the message, false if decrypting
                                                                                                                                                                                                                                                                              	message = message the user is ciphering
                                                                                                                                                                                                                                                                              	technique = the ciphering technique the user chooses to cipher with
                                                                                                                                                                                                                                                                              	settings = array representing the specific settings of a cipher technique
                                                                                                                                                                                                                                                                              */

var _Caesar = require('ciphers/Caesar.js');

var _Caesar2 = _interopRequireDefault(_Caesar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cipherMap = {};
cipherMap['Caesar'] = new _Caesar2.default();
//cipherMap['Vigenere'] = new Vigenere();

var cipher = cipherMap['Caesar'];

var isEncrypting = true;
settings = [];

function toggleEncDec() {
  isEncrypting = !isEncrypting;
  console.log('Encrypt/Decrypt button toggled to ' + isEncrypting);
  updateOutput();
}

function setTechnique() {
  var technique = document.getElementById('technique').value;
  console.log('Technique set to ' + technique);
  cipher = cipherMap[technique];
  document.getElementById('settings').innerHTML = cipher.HTMLText;
  updateSettings();
  updateOutput();
}

function displaySettings() {
  console.log('displaySettings() called');
  var disp = document.getElementById('settings');
  disp.style.display = disp.style.display === 'none' ? 'block' : 'none';
}

function updateOutput() {
  console.log('updateOutput() called');
  var message = document.getElementById('messagebox').value;
  document.getElementById('outputbox').innerHTML = isEncrypting ? cipher.encrypt(message, settings) : cipher.decrypt(message, settings);
}

function updateSettings() {
  settings = Array.from(document.getElementsByName('setting'), function (x) {
    return x.value;
  });
  console.log("Settings: " + settings + " Bool:" + _typeof(settings[0]));
  updateOutput();
}

function toggleSteps() {
  console.log('toggleSteps() called');
  var message = document.getElementById('messagebox').value;
  document.getElementById('steps').innerHTML = cipher.showSteps(message, settings);
}