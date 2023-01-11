//flat
const array = [1, 2, 3, 4, 5, [1,4,2,65,4, [1, 4, 6,2]]];
console.log(array.flat(3));

// flat map
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));