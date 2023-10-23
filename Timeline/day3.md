## ES6 ( Các tính năng mới trong ES6 ra mắt 2015)

### Let trong ES6

JavaScript letđược sử dụng để khai báo các biến. Trước đây, các biến được khai báo bằng  vartừ khóa.  

### Const trong ES6

Câu constlệnh được sử dụng để khai báo các hằng trong JavaScript  

### Arrow Function trong ES6

Trong phiên bản ES6 , bạn có thể sử dụng các Arrow Function để tạo biểu thức hàm  
```
// function expression using arrow function
let x = (x, y) => x * y;
```
### Class trong ES6

Class trong JavaScript được sử dụng để tạo một đối tượng. Lớp tương tự như Contructor

```
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person('John');

console.log(person1.name); // John
```
### Default Parameter Values

Trong phiên bản ES6, bạn có thể chuyển các giá trị mặc định trong các tham số hàm

```
function sum(x, y = 5) {

    // take sum
    // the value of y is 5 if not passed
    console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20
```
### JavaScript Template Literals
Trước khi có ES6 muốn thêm biến vào 1 chuỗi
```
const first_name = "Jack";
const last_name = "Sparrow";

console.log('Hello ' + first_name + ' ' + last_name);
```

Sau khi có Temple Literals

```
const first_name = "Jack";
const last_name = "Sparrow";

console.log(`Hello ${first_name} ${last_name}`);
```

## JavaScript Destructuring

Destructuring là một khái niệm quan trọng trong ES6  
Cú pháp Destructuring giúp việc gán giá trị cho một biến mới dễ dàng hơn

Trước đó:
```
// before you would do something like this
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
```

Sử dụng Destructuring

```
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
```

## Promise trong ES6

Promise được sử dụng để xử lý các tác vụ không đồng bộ
Promise được sinh ra để tránh trường hợp callback hell

```
// returns a promise
let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result); // Promise resolved
    },
 )
```

## JavaScript Rest Parameter and Spread Operator

Bạn có thể sử dụng  rest parameter để biểu thị số lượng đối số không xác định dưới dạng một mảng

```
function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

show('one', 'two', 'three', 'four', 'five', 'six')
```

**Sự khác nhau giữa Rest Parameter và Spread Syntax**
Spread syntax Dùng để sao chép các mục vào một mảng đuy nhất

```
let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]
```
Cả rest parameter và the spread operator sử dụng cùng một cú pháp. Tuy nhiên, spread operator được sử dụng với mảng (giá trị có thể lặp lại).


## Arrow Function trong JS

**this with Arrow Function**

This trong 1 function thường

```
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();

output
25
undefined
Window {}
```
Ở đây, this.agebên trong this.sayName()có thể truy cập được vì this.sayName()đây là phương thức của một đối tượng.  

Tuy nhiên,  innerFunc()đây là một chức năng bình thường và this.agekhông thể truy cập được vì this đề cập đến đối tượng chung (đối tượng Window trong trình duyệt). Do đó, this.agebên trong innerFunc()hàm cung cấp undefined
**Arguments Binding**

Các hàm thông thường có các đối số ràng buộc. Đó là lý do tại sao khi bạn truyền đối số cho một hàm thông thường, bạn có thể truy cập chúng bằng từ khóa arguments
```
let x = function () {
    console.log(arguments);
}
x(4,6,7); // Arguments [4, 6, 7]
```
Arrow Function không có ràng buộc đối số.

Khi bạn cố gắng truy cập một đối số bằng arguments, nó sẽ báo lỗi

```
let x = () => {
    console.log(arguments);
}

x(4,6,7); 
// ReferenceError: Can't find variable: arguments
```

Để giải quyết vấn đề này, bạn có thể sử dụng cú pháp Spread

```
let x = (...n) => {
    console.log(n);
}

x(4,6,7); // [4, 6, 7]
```

**Những điều bạn nên tránh với Arrow Function**

Bạn không nên sử dụng các Arrow Function để tạo các phương thức bên trong đối tượng.

```
let person = {
    name: 'Jack',
    age: 25,
    sayName: () => {

        // this refers to the global .....
        //
        console.log(this.age);
    }
}

person.sayName(); // undefined
```
Không sử dụng với hàm tạo

```

let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor
```

### Default Parameters

Khái niệm về tham số mặc định là một tính năng mới được giới thiệu trong phiên bản JavaScript ES6 . Điều này cho phép chúng ta đưa ra các giá trị mặc định cho các tham số của hàm

**Sử dụng biểu thức làm giá trị mặc định**
```
function sum(x = 1, y = x,  z = x + y) {
    console.log( x + y + z );
}

sum(); // 4

Không được sử dụng biểu thức trước tham số được khởi tạo sẽ bị lỗi
function sum( x = y, y = 1 ) {
    console.log( x + y);
}

sum(); 
ReferenceError: Không thể truy cập 'y' trước khi khởi tạo

```
Truyền giá trị undefined

```
function test(x = 1) {
  console.log(x);
}

// passing undefined
// takes default value 1
test(undefined); // 1
```

### JavaScript Template Literals (Template Strings)

```
const name = 'Jack';
console.log(`Hello ${name}!`); // Hello Jack!
```

Có thể dùng `` để làm đối số  cho hàm 

```
function tagExample(strings) {
    return strings;
}

// creating tagged template
const result = tagExample`Hello Jack`;

console.log(result);
```

## JavaScript Spread Operator

Toán tử trải rộng ...được sử dụng để mở rộng hoặc trải rộng một iterable hoặc một mảng  

```
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack
```

Có thể sử dụng Spread để sao chép 1 mảng

**Spread với Object**
Spread thường được sử dụng với các hằng đối tượng.

```
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}
```


## Map trong JS

JavaScript ES6 đã giới thiệu hai cấu trúc dữ liệu mới, tức là Map và WeakMap.  

Map tương tự như các đối tượng trong JavaScript, cho phép chúng ta lưu trữ các phần tử theo cặp key/value .

Các phần tử trong Map được chèn theo thứ tự chèn. Tuy nhiên, không giống như một đối tượng, bản đồ có thể chứa các đối tượng, hàm và các kiểu dữ liệu khác làm khóa

```
// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}
```

Sau khi tạo Map, bạn có thể sử dụng set() phương thức này để chèn các phần tử vào đó

```
// create a set
let map1 = new Map();

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}
```

Bạn có thể truy cập Mapcác phần tử bằng get()phương thức này  

```
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}
```

Truy cập các phần tử của Map


```
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}
```
Kiểm tra các phần tử có tồn tại hahy không

```
const set1 = new Set([1, 2, 3]);

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map1.has('info')); // true
```
Loại bỏ các phần tử

```
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

map1.delete('info'); // true
console.log(map1); // Map {}
```

Hoặc có thể dùng clear() nhưng clear sẽ không trả về gía trị

```
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing all element
map1.clear();
console.log(map1); // Map {}
```

Kích thước Map  

Bạn có thể lấy số phần tử trong Bản đồ bằng size() thuộc tính

```
let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

console.log(map1.size); // 1
```

Lặp qua các phần tử trong Map  

Bạn có thể lặp qua các phần tử Map bằng cách sử dụng vòng lặp for...of hoặc phương thức forEach() . Các phần tử được truy cập theo thứ tự chèn

```
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}

Đầu ra:

Name- Jack
Age- 27
```
Ngoài ra còn có thể dùng forEach()  

**Các phương thức khác của Map**

key()   Lặp qua các key() của Map  

value() Lặp qua các Value() của Map  

entries() Lặp qua các key/value của Map  

So Sánh Object và Map trong JS

Khóa (Key) trong Object:  

Object chỉ cho phép sử dụng chuỗi hoặc Symbol làm khóa.
Map cho phép bất kỳ kiểu dữ liệu nào làm khóa, bao gồm cả các đối tượng, hàm và các kiểu dữ liệu nguyên thủy khác.
Thứ tự:  

Object không bảo đảm thứ tự các khóa, trong khi Map bảo đảm thứ tự của các cặp khóa-giá trị theo thứ tự chúng được thêm vào.
Kích thước:  

Bạn phải sử dụng Object.keys(obj).length để lấy kích thước (số lượng cặp khóa-giá trị) của một Object.
Map có một thuộc tính size để truy xuất kích thước của nó một cách trực tiếp.
Sự thụ động của khóa:  

Object yêu cầu bạn biết trước các khóa mà bạn muốn sử dụng và phải truy cập chúng bằng cú pháp obj[key].
Map cho phép bạn thêm, xóa và truy cập các cặp khóa-giá trị một cách dễ dàng sử dụng các phương thức như set, get, delete, và has.
Làm việc với Object Literal:  

Object literal notation (cách tạo Object bằng cặp {}) là cách phổ biến để tạo Object trong JavaScript.
Map không thể được tạo bằng Object literal notation, bạn phải sử dụng new Map() để tạo một Map.
Sử dụng trong trường hợp nào:  

Object thường được sử dụng khi bạn có các khóa là các chuỗi và bạn không cần theo dõi thứ tự của các cặp khóa-giá trị.
Map thường được sử dụng khi bạn cần duyệt qua các cặp khóa-giá trị theo thứ tự, hoặc khi bạn cần sử dụng các kiểu dữ liệu khóa đa dạng.

**WeakMap**

Tương tự Map nhưng được lượt bớt 1 số Method  
get(), set(), delete()và has()
WeakMap khác với Map là không lặp qua được

```
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');


// looping through WeakMap
for (let i of weakMap) {

    console.log(i);  // TypeError
}
```

## Set trong JS



