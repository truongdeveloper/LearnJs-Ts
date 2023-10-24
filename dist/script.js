import { arr, object, Student, Person, log } from "./module.js";

let student = new Student('truong', 22);
let person = new Person("Thao", "22");

log(arr, object, student,person)


// Detructuring
let arrCopy = [...arr];
log(arrCopy)
let objCopy = {...arr, ...object};
log(objCopy)

// Try Catch Finally
try{

    let radomNumber = Math.random()*100
    log(radomNumber)
    if(radomNumber <=50){
        throw new Error("Số random bé quá")
    }

}catch(error){
    console.error(error);
}finally{
    log("Đã chạy hết try catch")
}

//Function và đệ quy
// Xử lý bài toán lấy tạo mảng mới mà hàm đó chia hết cho 
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

log(result);

// Xử lý mảng
let resultArr1 = 0;
let resultArr = arr.forEach((item, index, arr) => {
    return resultArr1 += item
})

resultArr = arr.map((item) => {
    return item + item
})

resultArr = arr.filter((item, index) => {
    return item <= 1000
})

resultArr = arr.reduce((total , item, index, arr) => {
    return total += item
})
log(resultArr)

//Copy 1 mảng Object

let newObj = JSON.parse(JSON.stringify(object))
log(newObj)


// Xử lý Object

let newObject = {}

//copy
newObject = Object.assign(newObject, object)
//trả về thuộc tính và phương thức dạng mảng
newObject = Object.entries(object)
//Thêm phương thức cho hàm tạo
Person.prototype.fullName = function(){
    return this.name + this.age
}

log(person.fullName())
// log(newObject)


// Tạo một Promise
const myPromise = new Promise((resolve, reject) => {
    // Thực hiện một tác vụ không đồng bộ
    let result = 1
    try{
        setTimeout(() => {
            resolve(result)
        }, 2000);
    }catch(error){
        reject(error)
    }

  });
  
  // Sử dụng Promise
  myPromise
    .then((result) => {
        // là tác vụ bất đồng bộ nên trả về 1 Promise
        return fetch("https://restcountries.com/v3.1/all")
    })
    .then((response) => {
        // .json() là 1 phương thức bất đồng bộ nên nó trả về 1 Promise
        return response.json()
        // log(data)
    })
    .then(data => {
        // log(data)
    })
    .catch((error) => {
      console.error("Lỗi:", error); // Xử lý lỗi
    });


// Await/ Async
async function asyncFunc() {
    let response = await fetch("https://restcountries.com/v3.1/all")

    let data = await response.json()
    // log(data)
    return data
}
function getAPI() {
    let data = asyncFunc();
    log(data)
    data.then(data => log(data))
}
getAPI()