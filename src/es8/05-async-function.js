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