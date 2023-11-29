"use strict";
// const names: Array<string> = ['Kirk', 'Spock', 'McCoy'] // same as string[]
// // const names: Array<string | number> = ['Kirk', 'Spock', 'McCoy'] // can also be a union type
// // names[0].split('')
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!')
//   }, 2000)
// })
const merge = (objA, objB) => {
    return Object.assign(Object.assign({}, objA), objB);
};
const mergedObj = merge({ name: 'Kirk' }, { age: 30 });
