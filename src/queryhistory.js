/*
This class is responsible for updating the cipher history of the user. The
class will take in the data as an object with the following properties:
  technique - the cipher technique used
  encrypting - boolean of whether it is encrypting or decrypting
  settings - the cipher settings for the technique
  time - the time of the cipher
  originalMessage - the original cipher message
  cipheredMessage - the ciphered message
*/

export default function queryHistory(data) {
  if (!data.originalMessage) {
    return '';
  }
  var htmlStr = '';
  htmlStr += 
    '<strong>Technique:</strong> ' + data.technique + '<br>' +
    ((data.isEncrypting) ? 'Encrypt' : 'Decrypt') + '<br>' +
    '<strong>Original Message:</strong> <br>' + data.originalMessage + '<br>' +
    '<strong>Ciphered Message:</strong> <br>' + data.cipheredMessage + '<br>' +
    'Created on ' + new Date().toLocaleString() + '<br><br>';
    return htmlStr;
}