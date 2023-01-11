const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
};
//console.log(users.gndx.country);

//El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error.
console.log(users?.bebeloper?.country);