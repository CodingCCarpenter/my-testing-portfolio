const { sum } = require('./mathFunctions');

let expected = 4;
let first = 2;
let second = 2;

let actual = sum(first, second);

if(actual !== expected) {
    console.log(`TEST FAILURE: actual value of ${actual} does not match expected value of ${expected}!`)
}
