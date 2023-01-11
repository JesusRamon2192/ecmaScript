const anotherFunction1 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        } else {
            reject('No funciona');
        }
    })
}

anotherFunction1()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'))
    
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout (()=>resolve('Hey!!'),2000)
            : reject(new Error('No funciona'))
    });
}

const anotherFunctionEject = async () => {
    try {
    const eject = await anotherFunction()
    console.log(eject)
    } catch (err){
        console.log(err.message);
    } finally {
        console.log('Funcion terminada');
    }
}

anotherFunctionEject()

