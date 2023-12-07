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

const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property decorator!')
  console.log(target, propertyName)
}

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)

}

class Product {
  @Log
  title: string
  private _price: number

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - should be positive!')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax)
  }
}