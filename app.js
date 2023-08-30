"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Kirk';
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput // Type 'unknown' is not assignable to type 'string'
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);
