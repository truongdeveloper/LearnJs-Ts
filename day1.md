# Ôn lại kiến thức Javascript:

### Js biến
Kiểu dữ liệu động khia báo bằng let hoặc var từ ES6 trở đi nên sử dụng let
đặt tên biến không được để chữ số đứng đầu  
Hằng thì không thể gán lại dữ liệu
### Js kiểu dữ liệu
Có 8 kiểu dữ liệu trong Js đó là:
String, Number, Boolean, Object, Null, Undefined,  
Symbol là kiểu dữ liệu đặc biệt
```const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
```

BigInt: Kiêu dữ liệu dạng số lơn hơn 2^53-1, để khai báo thêm n cuối số 

```
    let int = 121872387n
```
### Js toán tử

Toán tử gán:   
=, +=, -=, /= , *=, %=, **=  
Toán tử số học:  
```
    + , -, * , /,  
```

Có 1 số đặc biệt:  
++ cộng thêm 1, -- giảm đi 1, ** lũy thừa x**y  

Toán tử so sánh  

```
    == So sánh giá trị bằng
    === So sánh giá trị bằng và kiểu dữ liệu
    != So sánh không bằng
    !== So sánh không bằng và kiểu dữ liệu
    > Lớn hơn 
    >= Lớn hơn hoặc bằng
    < Nhỏ hơn
    <= Nhỏ hơn hoặc bằng


```

Toán tử Logic

```
    && : AND Trả về true nếu tất cả true
    || : OR Trả về true nếu có một trường true
    ! : NOT Trả về true nếu toán hạng là false và ngược lại
```
Toán tử BitWise  
Thực hiện các phép toán dựa trên nhị phân  

Toán tử chuỗi  
Thực hiện + để nối các chuỗi  

Các toán tử khác  
```
    , Đánh giá nhiều toán hạng và trả về toán hạng cuối cùng
    let a = (1, 3 , 4); // 4

    ?= Trả về dựa trên điều kiện ( Cách viết ngắn hơn if else)
    (5 > 3) ? 'success' : 'error'; // "success"

    delete  Xoá thuộc tính một đối tượng hoạc 1 phần tử củ mảng

    typeOf  Cho biết kiểu dữ liệu của biến

    void    Loại bỏ giá tri trả về 1 biểu thức trả về undefined

    in  trả về true nếu thuộc tính có trong đối tượng

        const person = {
            name: "John",
            age: 30,
        };

        console.log("name" in person); // true
        console.log("email" in person); // false


    instanceOf Trả về true nếu thuộc đối tượng đã chỉ định hoặc kế thừa
    function Animal(name) {
        this.name = name;
    }

        const cat = new Animal("Fluffy");

        console.log(cat instanceof Animal); // true
        console.log(cat instanceof Object); // true
        console.log(cat instanceof String); // false

```
### Comment trong Js


### Ép kiểu dữ liệu trong Js

Chuyển đổi ngầm định  
```
    // numeric string used with + gives string type
    let result;

    result = '3' + 2; 
    console.log(result) // "32"

    result = '3' + true; 
    console.log(result); // "3true"

    result = '3' + undefined; 
    console.log(result); // "3undefined"

    result = '3' + null; 
    console.log(result); // "3null"

```

Chuyển đổi rõ ràng

```
    let result;

    // string to number
    result = Number('324');
    console.log(result); // 324

    result = Number('324e-1')  
    console.log(result); // 32.4

    // boolean to number
    result = Number(true);
    console.log(result); // 1

    result = Number(false);
    console.log(result); // 0
```

### JS If else

```
    if (condition) {
        // block of code if condition is true
    } else {
    // block of code if condition is false
    }
```


### Js loop

```
    // program to display text 5 times
    const n = 5;

    // looping from i = 1 to 5
    for (let i = 1; i <= n; i++) {
        console.log(`I love JavaScript.`);
    }
```

### Js White loop

White
```
    // program to display numbers from 1 to 5
    // initialize the variable
    let i = 1, n = 5;

    // while loop from i = 1 to 5
    while (i <= n) {
        console.log(i);
        i += 1;
    }
```
Do White

```
    // program to display numbers
    let i = 1;
    const n = 5;

    // do...while loop from 1 to 5
    do {
        console.log(i);
        i++;
    } while(i <= n);
```

So với white thì Do white lặp qua ít nhất 1 lần rồi mới kiểm tra giá trị

### Js Break

    Dùng để kết thúc vòng lặp ngay khi gặp nó  
    Khi hai vòng lặp lồng nhau Break sẽ dừng vòng lặp bao bọc nó  
    Break cũng dùng trong switch case  

    Break cũng có cú pháp Break [lable]

### Js Continue

    Khi trong vògn lặp gặp câu lệnh Continue thì sẽ bỏ qua vòng lặp hiện tại và bắt đầu vòng lặp tiếp theo  
    Khi hai vòng lặp lồng nhau Continue sẽ bỏ qua vòng lặp hiện tại của vòng lặp bao bọc nó  
    Continue cũng có cú pháp Continue [lable]

### Js Switch Case

```
    switch(variable/expression) {
        case value1:  
            // body of case 1
            break;

        case value2:  
            // body of case 2
            break;

        case valueN:
            // body of case N
            break;

        default:
            // body of default
    }
```

## Function trong JS

Hàm là một khối mã thực hiện một nhiệm vụ cụ thể.  
JavaScript cũng có một số lượng lớn các hàm sẵn có. Ví dụ: Math.sqrt()là hàm tính căn bậc hai của một số.  
```
    // program to add two numbers using a function
    // declaring a function
    function add(a, b) {
        console.log(a + b);
    }

    // calling functions
    add(3,4);
    add(2,9);
```

Câu returnlệnh có thể được sử dụng để trả về giá trị cho lệnh gọi hàm.  

Câu returnlệnh biểu thị rằng chức năng đã kết thúc. Bất kỳ mã nào sau đó returnkhông được thực thi.  

Nếu không có gì được trả về, hàm sẽ trả về một undefined giá trị.  

### Scope trong Js

Global Scope  
Local Scope  

### JS Hoisting 

Đưa việc khai báo các biến lên đầu để không bị lỗi is not Defined  
Đối với let sẽ là lỗi Reference Error do khi khỏi tại không gán giá trị gì cho biến còn var gán gái trị Undefined  

### Đệ quy trong JS

Một hàm mà trong hàm đó nó gọi lại chính nó
```
    function recurse() {
        // function code
        recurse();
        // function code
    }

    recurse();
```

Trong hàm đệ quy thường kết hợp If else để tạo điều kiện dừng hàm  
Bai tap thực hành  
```
    let arr = [12345, 6784, 8888, 99999, 3, 5, 4, 323, 444];
    let result = [];

    function divide10(num) {
    if (num >= 10) {
        num = parseInt(num / 10);
        return divide10(num);
    } else {
        return num;
    }
    }

    const length = arr.length;
    for (let i = 0; i < length; i++) {
    let firstDigit = divide10(arr[i]);
    if (firstDigit % 2 === 0) {
        result.push(arr[i]);
    }
    }

    console.log(result); 
```
### Muốn lấy được kết quả của dệ quy thì phải return Lý do là khi bạn thực hiện một cuộc gọi đệ quy, kết quả từ cuộc gọi đệ quy đó cần được trả về để sử dụng trong ngữ cảnh của cuộc gọi gốc. Nếu bạn không trả về giá trị từ cuộc gọi đệ quy, thì giá trị của hàm divide10 sẽ luôn là undefined


## Object trong JS

