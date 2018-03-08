const { readFile }  = require('fs');
const { promisify } = require('util');
const pReadFile     = promisify(readFile);

for(let i = 0; i < 3; ++i) {
    console.log(i);
}
console.log('-----------------');

const arr = ['a', 'b', 'c'];
arr.forEach(async function(value) {
    await pReadFile('./hello.txt');
    console.log(value);
});
console.log('Arr done!');