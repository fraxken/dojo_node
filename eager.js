// Eager execution
console.time('execution');
console.log('a');
new Promise((resolve) => {
    console.log('b');
    resolve();
});
console.log('c');
console.timeEnd('execution');