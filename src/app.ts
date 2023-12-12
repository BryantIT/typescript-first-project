const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString)
    console.log(constructor)
  }
}

const WithTemplate = (template: string, hookId: string) => {
  return <T extends {new(...args: any[]): {name: string}}>(orConstructor: T) => {
    return class extends orConstructor {
      constructor(..._: any[]) {
        super()
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId)
        const p = new orConstructor()
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = p.name
        }
      }
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
  return {
    enumerable: true,
    configurable: true
  }
}

const Log3 = (
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  console.log('Method decorator!')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log('Parameter decorator!')
  console.log(target)
  console.log(name)
  console.log(position)
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product('Book', 19)
const p2 = new Product('Book 2', 29)

const autoBind = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor
}

class Printer {
  message = 'This works!'

  @autoBind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer()

const button = document.querySelector('button')!
button.addEventListener('click', p.showMessage)

const Required = (target: any, propName: string) => {
  console.log('Required decorator')
  console.log(target)
  console.log(propName)
}

const PositveNumber = (target: any, propName: string) => {
  console.log('PositiveNumber decorator')
  console.log(target)
  console.log(propName)
}

const validate = (obj: any) => {
  const objProp = Object.getOwnPropertyNames(obj)
  console.log(objProp)
  for (const prop of objProp) {
    console.log(prop)
  }
}

class Course {
  @Required
  title: string
  @PositveNumber
  price: number

  constructor(t: string, p: number) {
    this.title = t
    this.price = p
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax)
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  const createdCourse = new Course(title, price)
  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!')
    return
  }
  console.log(createdCourse)
})
