var userInput;
var userName;
userInput = 5;
userInput = 'Kirk';
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput // Type 'unknown' is not assignable to type 'string'
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occurred!', 500);
