let arr = [12345, 6784, 8888, 99999, 3, 5, 4, 323, 444];

let object = {
    name: 'truong',
    age: 21,
    address: "Vĩnh Phúc",
    getName: function() {
        console.log(`Ten cua ban la ${this.name}`)
    },
    setName: function(name) {
        return this.name = name
    }
}

class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    get getName() {
        return this.name
    }
    set setName(name) {
        return this.name = name
    }
}

class Student extends Person {
    constructor( school){
        // super(name, age)
        this.school = school? school: 'Bỏ học'
    }

}

function log(){
    console.log(...arguments)
}

let arrObject = [

]

export { arr , object, Student, Person, log }