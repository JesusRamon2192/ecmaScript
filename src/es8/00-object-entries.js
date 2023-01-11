const countrys = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
};
//Convierte un objeto a arrays incluyendo key y value
const tabla =Object.entries(countrys);
console.table(tabla);
console.log(tabla);