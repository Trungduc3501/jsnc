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