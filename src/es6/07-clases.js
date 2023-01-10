// declarando
//class User {}

//instancia de una clase
//const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

const jesus = new user();
console.log(jesus.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor() {
        console.log('nuevo usuario');        
    }
    greeting() {
        return 'Hello';
    }
};

const david = new user();

// this
class user {
    constructor(name){
        this.name = name
    }
    // metodo
    speak (){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
};

const ana = new user('Ana');
console.log(ana.greeting());

// setters and getters

class user {
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greetings() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);