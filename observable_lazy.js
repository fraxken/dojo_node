const Observable = require('zen-observable');

// Note: Observable are lazy
console.log('--------------------');
console.log('a');
new Observable(observer => {
    observer.next('b');
    observer.complete();
}).subscribe(console.log);
console.log('c');