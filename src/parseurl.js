$(document).ready(function() {

  var urlParam = function urlParam(param) {
    var url = decodeURIComponent(window.location.search.substring(1));
    var urlVars = url.split('&');
    var paramName;
    var i;
    for (i = 0; i < urlVars.length; i++) {
        paramName = urlVars[i].split('=');
        if (paramName[0] === param) {
            return (paramName[1] === undefined ? true: paramName[1]);
        }
    }
  };

  var cipher = urlParam('cipher');
  console.log("Tutorial Cipher: " + cipher);

  var dir = '/../src/tutorialtext/' + cipher + '-Tut.txt';

  $('#tutorial-text').html(cipher + ' Tutorial' + '<br><br>');

  $.get(dir, function(txt) {
    $('#tutorial-content').html(txt);
  });

  $('#navicon').on('click', function() {
    $("div.header-right").toggleClass("responsive");
  });
});