const logoutBtn= document.getElementById("btnLogout");
const loginBtn= document.getElementById("btnLogin");
function checkLogin(params) {
    const token=localStorage.removeItem("accessToken");
    // localStorage.removeItem("user");
    if (token) {
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove="hidden";        
    }else{
                loginBtn.classList.remove("hidden");

        logoutBtn.classList.add="hidden";
    }
    
}
checkLogin();
document.getElementById("btnLogout").addEventListener("click",()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    alert("Đăng xuất thành công!");
    location.replace("index.html");
})