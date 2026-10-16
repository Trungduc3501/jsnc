

document.getElementById("studentForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const nameStudent = document.getElementById("name").value;
const ageStudent = document.getElementById("age").value;
const emailStudent= document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


if (!nameStudent || !ageStudent || !emailStudent) {
    alert("Vui lòng nhập đủ thông tin cần thiết");
    return;
}else if (ageStudent<0 || ageStudent>50) {
    alert("Vui lòng nhập đúng số tuổi > 0 và < 50");
    return;
}
if (!regexEmail.test(emailStudent)) {
    alert("Vui lòng nhập đúng định dạng email");
    return;
}

  axios.post("http://localhost:3000/students",{
    name: nameStudent,
    age:ageStudent,
    email:emailStudent,
  }).then(()=>{
      location.replace("index.html");
      alert("Thêm dữ liệu thành công");
  }).catch(()=>{
    alert("Thêm thắt bại");
  })
  console.log("Thêm sk");
});
