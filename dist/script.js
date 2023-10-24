import { arr, object, Student, Person, log } from "./module.js";

let student = new Student('truong', 22);
let person = new Person("Thao", "22");

console.log(arr, object, student,person)


// Detructuring
let arrCopy = [...arr];
console.log(arrCopy)
let objCopy = {...arr, ...object};
console.log(objCopy)

// Try Catch Finally
try{

    let radomNumber = Math.random()*100
    console.log(radomNumber)
    if(radomNumber <=50){
        throw new Error("Số random bé quá")
    }

}catch(error){
    console.error(error);
}finally{
    console.log("Đã chạy hết try catch")
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

console.log(result); 

