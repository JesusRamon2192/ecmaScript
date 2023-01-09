const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        } else {
            reject('No funciona');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));

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

/* const getDatos = () => {
    return datos;
} */
//console.log(getDatos());

const getDatos = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
        resolve(datos);
       }, 1500); 
    })
}

getDatos().then((datos)=> console.log(datos));