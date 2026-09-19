//array[]

const students=["Trung Đức","Văn Bình","Văn Nam"];
const ids=[1,4,3,2];
const actives=[true,false,42,"trugduc21"];


//danh index:0,1,2,...

console.log(ids[2]);
students[1]="Hoàng Nam";
console.log(students[1]);


//for
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    
}

//b1

const names=["An",
            "Binh",
            "Nam",
            "Hoa",
            "Lac",
            "Duc"
];
console.log(names[0]);
console.log(names[5]);
    console.log(names.length);
    names.push("Trung");
console.log(names);

    names.pop();
console.log(names);

for (let i = 0; i < names.length; i++) {
console.log("Tên sinh viên thứ",i+1,": ",names[i]);    
}

//object
const pss={
    id:"ps1",
    name:"Duc",
    age:23
};
console.log(pss.id);
pss.id="ps2"
console.log(pss.id);
pss.address="Ha noi";
console.log(pss);

//array object

const mySudent=[{
    id:"1",
    name:"Duc"
},{
    id:"2",
    name:"An"
},{
    id:"3",
    name:"Binh"
},{
    id:"4",
    name:"Hoang"
},];

console.log(mySudent[1].id);

const student = { id: 1, name: "Nguyễn Văn An", age: 20, email: "an@gmail.com", major: "CNTT", };
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);
student.age="25";
student.phone="0124524613";
console.log(student);


const listStudent = [ { id: 1, name: "Nguyễn Văn An", age: 20, }, 
    { id: 2, name: "Trần Văn Bình", age: 21, }, 
    { id: 3, name: "Lê Văn Nam", age: 20, }, ];
console.log(listStudent);
console.log(listStudent[0].name);
console.log(listStudent[1].age);
for (let i = 0; i < listStudent.length; i++) {
    console.log(listStudent[i].name);
    
}