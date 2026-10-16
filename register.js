const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


document.getElementById("registerForm").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const fullname= document.getElementById("fullName").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const confirmPassword= document.getElementById("confirmPassword").value;
    const newUser={
        name:fullname,
        email,
        password
    }
    if (!email) {
        alert("Nhập email");
        return;
    }
    if (!regexEmail.test(email)) {
        alert("Nhập đúng định dạng email");
        return;
        
    }
    if (password!=confirmPassword) {
        alert("Vui lòng nhập đúng lại mật khẩu!");
        return;
    }
    const res= await axios.get("http://localhost:3000/users");
const users=res.data;
    const emailExist= users.some((user)=>{
        return user.email.toLowerCase()===email.toLowerCase();
        
    });
    if (emailExist) {
        alert("Đã tồn tại email, vui lòng nhập email khác!");
        return;
    }
    axios.post("http://localhost:3000/register", newUser)
    .then(() => {
        location.replace("index.html");
        alert("Đăng ký thành công!");
    }).catch(() => {
        alert("Đăng ký thất bại!");
    });

})