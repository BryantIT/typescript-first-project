// const person: {
//   name: string
//   age: number
// } = {
  const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string] // Tuple
  } = {
  name: 'Kirk',
  age: 30,
  hobbies: ['Exploring', 'Women'],
  role: [2, 'captain']
}

// person.role.push('doctor')
// person.role[1] = 10 // !!! ERROR !!!

// person.role = [0, 'doctor', 'Ensign'] !!! ERROR !!!

let favoriteActivities: string[]
favoriteActivities = ['Women']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // !!! ERROR !!!
}
