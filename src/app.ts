type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

type AddFunction = {
  (a: number, b: number): number
  (a: string, b: string): string
}

const add: AddFunction = (a: Combinable, b: Combinable): any => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('Kirk', ' Spock')
result.split(' ')

const fetchedUserData = {
  id: 'u1',
  name: 'Kirk',
  job: { title: 'Captain', description: 'USS Enterprise' }
}

console.log(fetchedUserData?.job?.title)

// type unknownEmployee = Employee | Admin

// const printEmployeeInformation = (emp: unknownEmployee) => {
//   console.log('Name: ' + emp.name)
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges)
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate)
//   }
// }

// printEmployeeInformation(e1)

// class Car {
//   drive() {
//     console.log('Driving...')
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...')
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo ... ' + amount)
//   }
// }

// type Vehicle = Car | Truck

// const v1 = new Car()
// const v2 = new Truck()

// const useVehicle = (vehicle: Vehicle) => {
//   vehicle.drive()
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }

// useVehicle(v1)
// useVehicle(v2)

// interface Bird {
//   type: 'bird'
//   flyingSpeed: number
// }

// interface Horse {
//   type: 'horse'
//   runningSpeed: number
// }

// type animal = Bird | Horse

// const moveAnimal = (animal: animal) => {
//   let speed
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed
//       break
//     case 'horse':
//       speed = animal.runningSpeed
//       break
//   }
//   console.log('Moving at speed: ' + speed)
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 })

// const userInputElement = document.getElementById('user-input')! as HTMLInputElement

// userInputElement.value = 'Hi there!'

// interface ErrorContainer {
//   [prop: string]: string
// }

// const errBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!'
// }
