### Object trong Js

Trong JavaScript, có nhiều phương thức tích hợp sẵn  
Thêm phương thức vào đối tượng JavaScript  
Để truy cập thuộc tính của một đối tượng từ bên trong một phương thức của cùng một đối tượng, bạn cần sử dụng từ thiskhóa.
```
    const person = {
        name: 'John',
        age: 30,

        // accessing name property by using this.name
        greet: function() { console.log('The name is' + ' ' + this.name); }
    };

    person.greet();

```

**JavaScript Constructor Function**  
```
    // constructor function
    function Person () {
        this.name = 'John',
        this.age = 23
    }

    // create an object
    const person = new Person();
```

Để tạo một đối tượng từ hàm khởi tạo, chúng ta sử dụng từ khóa.
```
new
```
Trong JavaScript, khi thistừ khóa được sử dụng trong hàm xây dựng, this sẽ đề cập đến đối tượng khi đối tượng được tạo  
Trong ES6 thì đã class đã được giới thiệu sử dụng class tương tự với các hàm tạo và nên sử dụng class  


**Js Getter**

```
    const student = {

        // data property
        firstName: 'Monica',
        
        // accessor property(getter)
        get getName() {
            return this.firstName;
        }
    };

    // accessing data property
    console.log(student.firstName); // Monica

    // accessing getter methods
    console.log(student.getName); // Monica

    // trying to access as a method
    console.log(student.getName()); // error
```

**Js Setter**

```
    const student = {
        firstName: 'Monica',
        
        //accessor property(setter)
        set changeName(newName) {
            this.firstName = newName;
        }
    };

    console.log(student.firstName); // Monica

    // change(set) object property using a setter
    student.changeName = 'Sarah';

    console.log(student.firstName); // Sarah
```

**JavaScript Object.defineProperty()**  
Trong JavaScript, bạn cũng có thể sử dụng Object.defineProperty()phương thức để thêm getters và setters.

```
const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
```

Phương thức này Object.defineProperty()có ba đối số.  

Đối số đầu tiên là objectName.  
Đối số thứ hai là tên của thuộc tính.  
Đối số thứ ba là một đối tượng mô tả thuộc tính.  

**JavaScript Prototype**  

```
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);
```

Nếu một đối tượng cố gắng truy cập cùng một thuộc tính có trong hàm khởi tạo và đối tượng nguyên mẫu, thì đối tượng đó sẽ lấy thuộc tính từ hàm khởi tạo

### Array trong Js

```
const words = ['hello', 'world', 'welcome'];
const array2 = new Array("eat", "sleep");
const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];
```

**Cac phương thức Xử ls mảng**
```
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	removes the last element of an array and returns the removed element
shift()	removes the first element of an array and returns the removed element
sort()	sorts the elements alphabetically in strings and in ascending order
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
```
*Mảng 2 chiều*

```
let x = [
['Jack', 24],
['Sara', 23], 
['Peter', 24]
];

// access the first item 
console.log(x[0]); // ["Jack", 24]

// access the first item of the first inner array
console.log(x[0][0]); // Jack

// access the second item of the third inner array
console.log(x[2][1]); // 24
```

**Chuỗi trong Js**
```
//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;```

```

JavaScript phân biệt chữ hoa chữ thường  
Chuỗi là 1 mảng
```
const a = 'hello';
console.log(a[1]); // "e"
```

Có thể khai báo String bằng từ khóa New  
Nên tránh sử dụng các đối tượng chuỗi. Việc sử dụng các đối tượng chuỗi sẽ làm chậm chương trình.

```
charAt(index)	returns the character at the specified index
concat()	joins two or more strings
replace()	replaces a string with another string
split()	converts the string to an array of strings
substr(start, length)	returns a part of a string
substring(start,end)	returns a part of a string
slice(start, end)	returns a part of a string
toLowerCase()	returns the passed string in lower case
toUpperCase()	returns the passed string in upper case
trim()	removes whitespace from the strings
includes()	searches for a string and returns a boolean value
search()	searches for a string and returns a position of a match
```
*Escape Character*

```
\"	include double quote
\\	include backslash
\n	new line
\r	carriage return
\v	vertical tab
\t	horizontal tab
\b	backspace
\f	form feed
```

## For in trong Js

```
for (key in object) {
    // body of for...in
}
```

For in dùng để lặp qua các phần tử của 1 object và có thể sử dụng cho mảng và chuỗi
Nếu lặp qua mảng nên sử dụng For of

## Number trong Js

```
Sử dụng ký hiệu số mũ e để bao gồm các số quá lớn hoặc quá nhỏ
const a1 = 5e9;
console.log(a1); //5000000000

const a2 = 5e-5;
console.log(a2); // 0.00005
Các số cũng có thể được biểu thị bằng ký hiệu thập lục phân

const a = 0xff;
console.log(a); // 255

const b = 0x00 ;
console.log(b); // 0
```

Có thể khia báo 1 Number với từ khóa new  
Các phương thức với Number
```
isNaN()	determines whether the passed value is NaN
isFinite()	determines whether the passed value is a finite number
isInteger()	determines whether the passed value is an integer
isSafeInteger()	determines whether the passed value is a safe integer
parseFloat(string)	converts the numeric floating string to floating-point number
parseInt(string, [radix])	converts the numeric string to integer
toExponential(fractionDigits)	returns a string value for a number in exponential notation
toFixed(digits)	returns a string value for a number in fixed-point notation
toPrecision()	returns a string value for a number to a specified precision
toString([radix])	returns a string value in a specified radix(base)
valueof()	returns the numbers value
toLocaleString()	returns a string with a language sensitive representation of a number
```

Thuộc tính số JavaScript

```
EPSILON	returns the smallest interval between two representable numbers
MAX_SAFE_INTEGER	returns the maximum safe integer
MAX_VALUE	returns the largest possible value
MIN_SAFE_INTEGER	returns the minimum safe integer
MIN_VALUE	returns the smallest possible value
NaN	represents 'Not-a-Number' value
NEGATIVE_INFINITY	represents negative infinity
POSITIVE_INFINITY	represents positive infinity
prototype	allows the addition of properties to Number objects
```

## Symbol trong Js

JavaScript ES6 đã giới thiệu một kiểu dữ liệu nguyên thủy mới được gọi là Symbol. Các ký hiệu là bất biến (không thể thay đổi) và là duy nhất

```
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
```

Bạn có thể thêm các ký hiệu làm khóa trong đối tượng bằng dấu ngoặc vuông []

```
let id = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}
```

Chú ý: Vòng for...inlặp không lặp qua các thuộc tính Symbolic

```
let id = Symbol("id");

let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person) {
    console.log(key);
}
Đầu ra:
    tên
    tuổi
```