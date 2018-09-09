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

export class QueryHistory {
	constructor() {
    this.curHistory = [];
  }

  addCipher(data) {

  }
}