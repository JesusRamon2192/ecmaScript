// enahced object literals

function newUser(user, age, country, uID){
    return{
        user,
        age,
        country,
        id:uID
    }
}
console.log(newUser('David', 34, 'Mx', 1));