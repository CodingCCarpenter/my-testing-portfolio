const { sum } = require(./mathFunctions.js)

// process.argv

// const sum = (a, b) => {
//     return ( a + b )
// };


//the 1st argument is always index position 2, and the second is 3....look into why
let first = parseInt(process.argv[2]);
let second = parseInt(process.argv[3]);

console.log(sum(first, second));