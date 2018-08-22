/*
input object - tracks the overall settings and the current input of the cipher
	isEncrypting = true if user is encrypting the message, false if decrypting
	message = message the user is ciphering
	technique = the ciphering technique the user chooses to cipher with
	settings = array representing the specific settings of a cipher technique
*/

import Caesar from './ciphers/Caesar.js';
import Vigenere from './ciphers/Vigenere.js';

var cipherMap = {};
cipherMap['Caesar'] = new Caesar();
cipherMap['Vigenere'] = new Vigenere();

var cipher = cipherMap['Caesar'];

var isEncrypting = true;
var settings = [];


function toggleSteps() {
  console.log('toggleSteps() called');
  var message = document.getElementById('messagebox').value;
  document.getElementById('steps').innerHTML = 
  cipher.showSteps(message, settings);
}


$(document).ready(function() {

  function updateOutput() {
  console.log('updateOutput() called from jQuery');
  var message = $('#inputbox').val();
  console.log("message is: " + message);
  $('#outputbox').val((isEncrypting ? cipher.encrypt(message, settings) : 
    cipher.decrypt(message, settings)));
  }

  function updateSettings() {
    settings = Array.from($("[name='setting']").val());
    console.log("Settings type: " + typeof(settings));
    console.log("Settings: " + settings + " Bool:" + (typeof(settings[0])));
    updateOutput();
  }

  /* Updates the encrypt/decrypt option when the slider is toggled */
  $('#togBtn').on('click', function() {
    isEncrypting = !isEncrypting;
    console.log('Encrypt/Decrypt button toggled to ' + isEncrypting + ' in jQuery');
    updateOutput();
  });

  $('#technique').change(function() {
    let technique = $(this).val();
    console.log('Technique set to ' + technique + ' inJQuery');
    cipher = cipherMap[technique];
    $('#settings').html(cipher.HTMLText);
    updateSettings();
    updateOutput();
  });

  $('#settingToggle').on('click', function() {
    console.log('settings display toggled');
    $('#settings').toggle();
  });

  $('#inputbox').on('input', function() {
    console.log('inputbox changed');
    updateOutput();
  });

  $("[name='setting']").keyup(function() {
    console.log('Settings changed');
    updateSettings();
    updateOutput();
  });
});