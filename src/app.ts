const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString)
    console.log(constructor)
  }
}

const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }

}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Kirk'

  constructor() {
    console.log('Creating person object...')
  }
}

const person = new Person()

console.log(person.name)