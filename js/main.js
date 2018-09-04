// Imports for the ciphering techniques are all located in the ciphers folder
import Caesar from './ciphers/Caesar.js';
import Vigenere from './ciphers/Vigenere.js';


var cipherMap = {};
cipherMap['Caesar'] = new Caesar();
cipherMap['Vigenere'] = new Vigenere();

// default cipher technique is Caesar
var cipher = cipherMap['Caesar'];

/* 
boolean to check if the decrypt or encrypt button is chosen
true = encrypt, false = decrypt    
*/
var isEncrypting = true;

/*
Ciphering techniques will be kept in an array of strings; will be
retrieved by grabbing the value of tags with the name of 'setting'
*/
var settings = [];

/*
handles the events from the initial page
*/
$(document).ready(function() {

  function updateOutput() {
  console.log('updateOutput() called');
  var message = $('#inputbox').val();
  console.log("message is: " + message);
  $('#outputbox').val((isEncrypting ? cipher.encrypt(message, settings) : 
    cipher.decrypt(message, settings)));
  }

  function updateSettings() {
    settings = $("[name='setting']").map(function() {
      return $(this).val();
    });
    console.log('Settings updated');
    if (cipher.hasInvalidSettings(settings)) {
      $('#keywarning').html(cipher.warning);
      $('#keywarning').show();
    }
    else {
      $('#keywarning').hide();
    }
    updateOutput();
  }

  $('#togBtn').on('change', function() {
    isEncrypting = !isEncrypting;
    console.log('Encrypt/Decrypt button toggled to ' + isEncrypting);
    updateOutput();
  });

  $('#technique').change(function() {
    let technique = $(this).val();
    console.log('Technique set to ' + technique);
    cipher = cipherMap[technique];
    $('#settings').html(cipher.HTMLText);
    console.log("Settings HTML" + $('#settings').html());
    updateSettings();
    updateOutput();
  });

  $('#inputbox').on('input', function() {
    console.log('inputbox changed');
    updateOutput();
  });

  $("#settings").on('keyup', "[name='setting']", function() {
    console.log('Settings changed');
    updateSettings();
    updateOutput();
  });

  $('#showStepsBtn').on('click', function() {
    var message = $('#inputbox').val();
    console.log('Show steps button clicked');
    $('#steps').hide();
    $('#steps').html(cipher.showSteps(message, settings, isEncrypting));
    $('#steps').slideDown('slow', function() {});
  });
});