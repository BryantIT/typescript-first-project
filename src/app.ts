const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name = 'Kirk'

  constructor() {
    console.log('Creating person object...')
  }
}

const person = new Person()

console.log(person.name)