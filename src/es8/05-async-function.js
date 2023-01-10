const fnAsync = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout (()=> resolve('Async'), 2000)
            : reject(new Error('Error!'));
    });
}
//“async-await” es una manera de trabajar de una forma mas cómoda con promesas, la palabra reservada “async” quiere decir que una función siempre devolverá una promesa. Ahora la palabra reservada “await”, solamente existe dentro de una función “async”, que hace que JavaScript espere hasta que la función promesa responda para continuar con el código dentro de ésta función, pero sin pausar la ejecución del siguiente código.
const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFunction();
console.log('After');


// Ejemplo 2
const datos = [{
    id:1, 
    title: 'Iron Man',
    year: 2008
},{
    id:2,
    title: 'Spiderman',
    year: 2017
}, {
    id:3,
    title: 'Avengers',
    year: 2019
}];

const getDatos = () => {
    //return datos;
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout (()=> resolve(console.log(datos)), 2000)
            : reject(new Error('Error de datos'));
    });
}

/* getDatos()
    .then((datos) => {
        console.log(datos)
    })
 */

/* const fnDatosAsync = async() => {
    const awaitDatos = await getDatos();
    console.log(awaitDatos);
} */

async function fnDatosAsync(){
    try {
        const awaitDatos = await getDatos();
        console.log(awaitDatos);
    } catch (err){
        console.log(err.message);
    }
}

fnDatosAsync()