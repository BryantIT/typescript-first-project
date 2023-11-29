"use strict";
const names = ['Kirk', 'Spock', 'McCoy']; // same as string[]
// const names: Array<string | number> = ['Kirk', 'Spock', 'McCoy'] // can also be a union type
// names[0].split('')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
