const name="Trug Duc";
const age=23;

const result="Ten: "+name+"Tuoi: "+age;
console.log(result);

// const message = `
// Xin chào ${name}.

// Hôm nay chúng ta học JavaScript.

// Nội dung:
// - Template Literal
// - Arrow Function
// - map()
// `;

// console.log(message);

// const student = {
//   id: 1,
//   name: "Nguyễn Văn An",
//   age: 20,
// };

// const html = `
//   <tr>
//     <td>${student.id}</td>
//     <td>${student.name}</td>
//     <td>${student.age}</td>
//   </tr>
// `;

// document.getElementById("students").innerHTML = html;


const sum=(a,b)=>{
    return a+b;
}
console.log(sum(3,2));

const sayHello = (name) => {
  console.log(`Xin chào ${name}`);
};


sayHello("An");


// const students = [
//   { id: 1, name: "An" },
//   { id: 2, name: "Bình" },
//   { id: 3, name: "Cường" },
// ];

// students.map((student)=>{
//     console.log(student.name);
// })

const numbers = [1, 2, 3];

const newNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(newNumbers);

const students = [
  {
    id: 1,
    name: "An",
    age: 20,
  },
  {
    id: 2,
    name: "Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Cường",
    age: 22,
  },
];

const html = students
  .map((student) => {
    return `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
      </tr>
    `;
  })
  .join("");

document.querySelector("students").innerHTML = html;

