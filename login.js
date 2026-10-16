const regexEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("loginForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const userLogin={
        email,
        password
    };
    if (!email) {
        alert("Vui lòng nhập email!");
    }else if (!password) {
        alert("Vui lòng nhập mật khẩu!");
    }
    axios.post("http://localhost:3000/login",userLogin)
    .then((res)=>{
        const data = res.data;
        console.log(res.data);
        localStorage.setItem("accessToken",data.accessToken);
        localStorage.setItem("user",JSON.stringify(data.user));
        location.replace("index.html");
        alert("Đăng nhập thành công");
    }).catch(()=>{
        alert("Đăng nhập thất bại!");
    })
})