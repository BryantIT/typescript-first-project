let userInput: unknown
let userName: string

userInput = 5
userInput = 'Kirk'
if (typeof userInput === 'string') {
  userName = userInput
}
// userName = userInput // Type 'unknown' is not assignable to type 'string'

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500)