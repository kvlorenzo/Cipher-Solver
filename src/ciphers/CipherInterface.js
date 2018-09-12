/*
NOTE: To create a cipher class for this project, it must follow the guidelines
specified in this file. Since Javascript does not have an interface-like
structure to its classes like in Java, this file only serves as a template for
what a cipher class looks like and is not required to run this program.
However, since the main driver on the program relies on the methods and
variables laid out in this interface, it is necessary that any implementation
of a cipher follows the following behaviors:
*/

export default class CipherName {
  contructor() {
    /*
    The defaultSettings are the settings used if a user has not added settings
    of their own. All elements of the array must be strings and must go in the
    order that they are specified in the HTML text
    */
    this.defaultSettings = [];

    /*
    The HTMLText is the HTML that will be added if the user chooses to use this
    cipher. It must follow the following format:
      '<h4><strong>CipherName<br></strong></h4>\n' +
      <input type="typeoftexthere" name="setting" id="idnamehere">'
    All input must be within the name of 'setting'. However, you are not 
    limited to using one setting only. Add as many as you need so long as the
    name is 'setting'
    */
    this.HTMLText = '';

    /*
    The warning is a message that appears when a user enters in an invalid
    setting to the cipher. This message appears if the method 
    hasInvalidSettings (see below for details) returns true. The warning must
    contain a notification stating that there is an invalid value and the
    default value that will be used
    */
    this.warning = '';
  }


  /*
  Encrypts the string using the following settings
  Parameters: 
  str - the string to be encrypted
  settings - the settings used to encrypt the string. If settings are invalid,
  use the default settings
  */
  encrypt(str, settings){}


  /*
  Decrypts the string using the following settings
  Parameters: 
  str - the string to be decrypted
  settings - the settings used to decrypt the string. If settings are invalid,
  use the default settings
  */
  decrypt(str, settings){}


  /*
  Displays the steps to cipher the message in html format. It should limit the
  length of the message to 7 and display the steps in the following format:

  Step 1: Description of Steps Here
  ...
  ...

  Step 2: Description of Steps Here
  ...
  ...
  Parameters:
  str - the string to be ciphered
  settings - the settings to cipher the string. If settings are invalid, use
  the default settings
  isEncrypting - boolean for cipher type -> true = encrypt, false = decrypt
  */
  showSteps(str, settings, isEncrypting){}


  /*
  checks if the settings for the cipher are invalid (ex. NaN). However, if
  there are no settings given (ie blank settings), then it will NOT be
  considered invalid.
  Parameters:
  settings - the settings to check for validity
  */
  hasInvalidSettings(settings){}
}
