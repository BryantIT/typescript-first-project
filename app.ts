// const person: {
//   name: string
//   age: number
// } = {
  const person = {
  name: 'Kirk',
  age: 30,
  hobbies: ['Exploring', 'Women']
}

let favoriteActivities: string[]
favoriteActivities = ['Women']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // !!! ERROR !!!
}
