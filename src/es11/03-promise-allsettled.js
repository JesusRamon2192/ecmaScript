const promise1 = new Promise((resolve, reject)=> reject("Reject"));
const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("Resolve2"));
//Confirma y devuelve los resultados de todas las promesas en un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada
Promise.allSettled([promise1, promise2, promise3])
    .then(response=> console.log(response));

//Promise.all
//El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.
Promise.all([promise1, promise2, promise3])
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))