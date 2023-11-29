// const names: Array<string> = ['Kirk', 'Spock', 'McCoy'] // same as string[]
// // const names: Array<string | number> = ['Kirk', 'Spock', 'McCoy'] // can also be a union type
// // names[0].split('')

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!')
//   }, 2000)
// })

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return { ...objA, ...objB }
}

const mergedObj = merge({ name: 'Kirk' }, { age: 30 })

const countAndDescribe = <T extends { length: number }>(element: T): [T, string] => {
  let descriptionText = 'Got no value.'
  if (element.length === 1) {
    descriptionText = 'Got 1 element.'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText]
}

const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return 'Value: ' + obj[key]
}