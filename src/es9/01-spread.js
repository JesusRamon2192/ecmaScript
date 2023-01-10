const user = {
    username:'gndx',
    age: 14,
    country: 'CO',
};
const { username, ...values} = user;
console.log(username);
console.log(values);

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

console.log(objetoOriginal);
console.log(objetoReferencia);
console.log(objetoCopia);

const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

console.log(original, copia);