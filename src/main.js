// Imports for the ciphering techniques are all located in the ciphers folder
import Caesar from './ciphers/Caesar.js';
import Vigenere from './ciphers/Vigenere.js';

import queryHistory from './queryhistory.js';

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
boolean to check if there is a current cipher history existing
on the sidebar
*/
var hasActiveHistory = false;

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
  var message = $('#inputbox').val();
  console.log("Ciphering: " + message);
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

  function getCurrentData() {
    var data = {
      technique: $('#technique').val(),
      isEncrypting: isEncrypting,
      settings: ((cipher.hasInvalidSettings(settings)) ?
        cipher.defaultSettings : settings),
      originalMessage: $('#inputbox').val(),
      cipheredMessage: $('#outputbox').val()
    };
    return data;
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
    updateSettings();
    updateOutput();
  });

  $('#inputbox').on('input', function() {
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
    var history = $('#history').html();
    if (($('#inputbox').val()).length > 0) {
      if (!hasActiveHistory) {
        $('#history').html("");
        hasActiveHistory = true;
      }
      $('#history').fadeOut(10);
      $('#history').fadeIn();
      $('#history').prepend(queryHistory(getCurrentData()));
    }

  });

  $('#navicon').on('click', function() {
    $("div.header-right").toggleClass("responsive");
  });
});