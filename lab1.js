
// B1
console.log("Lab 1 js nang cao");
let name ="duc";
let age = 23;
age = 24;
let address ="Hà Nội";
let isStudent="Đang còn sinh viên";
console.log("Tên của tôi: ", name);

console.log("Tuổi của tôi: " ,age);
console.log("Địa chỉ của tôi: " ,address);
console.log("Trạng thái học tập: " ,isStudent);


// let age= 20;
const a =10;
const b=5;

console.log("Tổng: ",a+b );
console.log("Hiệu: ",a-b );
console.log("Tích: ",a*b );
console.log("Thương: ",a/b );

// b4
function sayHello(name){
    console.log("Xin chào ",name);
}
sayHello("An");
sayHello("Duc");
sayHello("Hoang");

function sum(a,b){
    return a+b;
}
const result=sum(10,20);
console.log("Tổng: ",result);

function calculateTotal(price,quantity){
    return price*quantity;
}

const total=calculateTotal(50000,3);
console.log(total);


function calculateAverage(math,english,javascript){
    return (math+english+javascript)/3;
}
const average=calculateAverage(8,9,9);
console.log(average); 



