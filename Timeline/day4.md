## Set in JS

Set tương tự như một mảng cho phép chúng ta lưu trữ nhiều mục như số, chuỗi, đối tượng, v.v. Tuy nhiên, không giống như mảng, một tập hợp không thể chứa các giá trị trùng lặp.

```
// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}
```

Khi các giá trị trùng lặp được truyền vào một Setđối tượng, các giá trị trùng lặp sẽ bị loại trừ.

```
// Set with duplicate values
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}
```

Set có phương thức để truy cập phần tử là value()  
Kiểm tra xem có phần tử trong mảng không has()  
Thêm các phần tử mới add()  
Xóa 1 phần tử cụ thể delete()  
Xóa hoàn toàn clear()  
Lặp qua các phần tử dùng for of hoặc forEach()


### WeakSet

WeakSet cũng tương tự như Set nhưng WeakSet chỉ có thể chứa các đối tượng trong khi Set có thể chứa bất kỳ loại dữ liệu nào như chuỗi, số, đối tượng, v.v

```
const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}
```

Khi thêm các phần tử không phải đối tượng WeakSet sẽ báo lỗi
WeakSet có các phương thức giống như Set

WeakSet không thể lặp qua được

*Lưu ý*

Trong JS không có các toán tử giao, hợp, con, ... Chúng ta có thể dùng Set hoặc WeakSet để thực hiện chức năng đó

```
// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let result = union(setA, setB);

console.log(result);

Đầu ra: 
Set {"táo", "xoài", "cam", "nho", "chuối"}
```

## Detructuring trong JS

Detructuring được giới thiệu trong ES6 giúp dễ dàng gán các giá trị mảng và thuộc tính đối tượng cho các biến riêng biệt  

Detructuring 1 mảng thì các phần tử sẽ được lấy ra lần lượt theo thứ tự index còn với 1 object thì sẽ được lấy ra dựa trên thuộc tính  

Nếu bạn muốn gán các tên biến khác nhau cho khóa đối tượng, bạn có thể sử dụng

```
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female
```

Có thể gán các giá trị mặc định cho mảng hoặc Object

```
const person = {
    name: 'Jack',
}

// assign default value 26 to age if undefined
const { name, age = 26} = person;

console.log(name); // Jack
console.log(age); // 26
```
Bỏ qua các mục

```
const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, , z] = arrValue;

console.log(x); // one
console.log(z); // three
```
Có thể dùng toán tử Speard để bỏ qua các biến

```
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { name, ...rest } = person;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}
```

Detructuring các Array và Object lồng nhau

```
// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

const person = {
    name: 'Jack',
    age: 26,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {name, hobbies: {read, playGame}} = person;

console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true
```
Để lấy được các phần tử lồng nhau phải đặt các biến bên trong [] hoặc {};

# Class trong JS ES6

Tương tự với hàm tạo class được giới thiệu trong ES6

```
// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); // John
console.log(person2.name); // Jack
```

Sự khác nhau khi tạo 1 phương thức trong hàm tạo và class
*Với hàm tạo*
```
// constructor function
function Person (name) {

   // assigning  parameter values to the calling object
    this.name = name;

    // defining method
    this.greet = function () {
        return ('Hello' + ' ' + this.name);
    }
}
```

*Với class*

```
class Person {
    constructor(name) {
    this.name = name;
  }

    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let person1 = new Person('John');

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John
```

**Getter và Setter**

```
class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person1 = new Person('Jack');
console.log(person1.name); // Jack

// changing the value of name property
person1.personName = 'Sarah';
console.log(person1.name); // Sarah
```

Class thì không được Hoisting khi bạn dùng nó trước khi nó được khỏi tạo thì sẽ bị lỗi

Class mặc định sử dụng 'use strict' bên trong class được sử dụng chế độ nghiêm ngặt

### Kế thừa trong class

Tính kế thừa cho phép bạn xác định một lớp có tất cả chức năng từ lớp cha và cho phép bạn bổ sung thêm các chức năng khác.

```
// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();

Đầu ra:

Hello Jack
```

### Từ khóa super trong Class

Từ superkhóa được sử dụng bên trong lớp con biểu thị lớp cha của nó

```
// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name);
    }

}

let student1 = new Student('Jack');
student1.greet();
```

Thuộc tính và ghi đè

```
// parent class
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.`);
    }
 
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        
        // call the super class constructor and pass in the name parameter
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();
```

Công dụng của kế thừa

Vì lớp con có thể kế thừa tất cả các chức năng của lớp cha nên điều này cho phép khả năng sử dụng lại mã.  
Khi một chức năng được phát triển, bạn có thể kế thừa nó một cách đơn giản. Không cần phải phát minh lại bánh xe. Điều này cho phép mã sạch hơn và dễ bảo trì hơn.  
Vì bạn cũng có thể thêm các chức năng của riêng mình vào lớp con nên bạn chỉ có thể kế thừa các chức năng hữu ích và xác định các tính năng cần thiết khác.     

## For..of trong JS

JavaScript for...of loop

for...of with Arrays

for...of with Strings

for...of with Sets

for...of with Maps

Bạn có thể tự các đinh vòng lặp của mình và dùng for..of để lặp qua

```
// creating iterable object
const iterableObj = {

    // iterator method
    [Symbol.iterator]() {
        let step = 0;
        return {
            next() {
                step++;
                if (step === 1) {
                    return { value: '1', done: false};
                 }
                else if (step === 2) {
                    return { value: '2', done: false};
                }
                else if (step === 3) {
                    return { value: '3', done: false};
                }
                return { value: '', done: true };
            }
        }
    }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}
```

### for...of with Generators

```
// generator function
function* generatorFunc() {
  
    yield 10;
    yield 20;
    yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
    console.log(value);
}

Đầu ra: 

10 
20 
30  
```

### Proxy

In JavaScript, proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, insertion, validation, etc. Proxy allows you to add custom behavior to an object or a function.

```
let student1 = {
    age: 24,
    name: "Felix"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.class); // property does not exist
```

Proxy có thể côi như một middleware để xác định lại các hoạt động khác nhau vào đối tượng như đọc, chèn, xác thực, v.v

*Get()*

```
let student = {
    name: 'Jack',
    age: 24
}

const handler = {

    // get the object key and value
    get(obj, prop) {

        return obj[prop];
  }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack
```

*Set()*

```
let student = {
    name: 'John'
}

let setNewValue = {
  set: function(obj, prop, value) {

    obj[prop] = value;
    return;
  }
};

// setting new proxy
let person = new Proxy(student, setNewValue);

// setting new key/value
person.age = 25;
console.log(person); // Proxy {name: "John", age: 25}
```

**Công dụng của proxy**

 Để xác thực  

 ```
 let student = {
    name: 'Jack',
    age: 24
}

const handler = {

    // get the object key and value
    get(obj, prop) {

    // check condition
    if (prop == 'name') {
      return obj[prop];
    } else {
      return 'Not allowed';
    }
  }
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack
console.log(proxy.age); // Not allowed
 ```
 Chế độ xem chỉ đọc của một đối tượng  

 ```
 let student = {
    name: 'Jack',
    age: 23
}

const handler = {
    set: function (obj, prop, value) {
        if (obj[prop]) {
            
            // cannot change the student value
            console.log('Read only')
        }
    }
};

const proxy = new Proxy(student, handler);

proxy.name = 'John'; // Read only
proxy.age = 33; // Read only
 ```

 **Side Effects**

 ```
 const myFunction = () => {
    console.log("execute this function")
};

const handler = {
    set: function (target, prop, value) {
        if (prop === 'name' && value === 'Jack') {
            // calling another function
            myFunction();
        }
        else {
            console.log('Can only access name property');
        }
    }
};

const proxy = new Proxy({}, handler);

proxy.name = 'Jack'; // execute this function
proxy.age = 33; // Can only access name property
 ```


# Các tác vụ bất đồng bộ trong JS

### Javascript setTimeout()

### Javascript clearTimeout()

## JavaScript CallBack Function

là một hàm được truyền vào 1 hàm dùng để xử lý bất đồng bộ hoặc xử lý các event

```
// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

Đầu ra:

Hello World
Hello John
```

## Promise trong JS

Trong JavaScript, Promise là một cách hay để xử lý các hoạt động không đồng bộ . Nó được sử dụng để tìm hiểu xem hoạt động không đồng bộ có được hoàn thành thành công hay không.  
Có 3  trạng thái: Pendding, Fulfilled, Rejected.

![alt](https://cdn.programiz.com/sites/tutorial2program/files/javascript-promise.png)


*Catch trong JS*

```
// returns a promise
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);
```

Hoạt động của chuỗi trong Js

![alt](https://cdn.programiz.com/sites/tutorial2program/files/javascript-promise-chaining.png)

Các phương thức Promise

```
all(iterable)	Chờ đợi tất cả các lời hứa được giải quyết hoặc bất kỳ lời hứa nào bị từ chối
allSettled(iterable)	Chờ cho đến khi tất cả lời hứa được giải quyết hoặc bị từ chối
any(iterable)	Trả về giá trị lời hứa ngay khi bất kỳ lời hứa nào được thực hiện
race(iterable)	Đợi cho đến khi bất kỳ lời hứa nào được giải quyết hoặc bị từ chối
reject(reason)	Trả về một đối tượng Promise mới bị từ chối vì lý do đã cho
resolve(value)	Trả về một đối tượng Promise mới được giải quyết với giá trị đã cho
catch()	Nối thêm lệnh gọi lại xử lý từ chối
then()	Nối thêm lệnh gọi lại trình xử lý đã giải quyết
finally()	Thêm một trình xử lý vào lời hứa
```

## Javscript async/await

Sử dụng async từ khóa có hàm để thể hiện rằng hàm đó là hàm không đồng bộ. Hàm async trả về một Promise



