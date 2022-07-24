let mob = JSON.parse(localStorage.getItem("userAuth"))
let no1 = document.getElementById("auth");
no1.innerText = mob;
let bt1 = document.getElementById("firstb")
bt1.addEventListener("click", function () {
     window.location.href = "login.html";
})
let bt2 = document.getElementById("secondb");
bt2.addEventListener("click", function () {
     let otp = document.getElementById("otp").value;
     if (otp == 1234) {
          localStorage.setItem("userStatus", "online")
          alert("login successfull")
          window.location.href = "Frontpage.html";
     } else {
          alert("invalid otp")
     }
})
let id;
window.onload = setting();
function setting() {
     if(id){
          clearInterval(id);
     }
     let i = 20;
     id = setInterval(function () {
          let para = document.getElementById("time");
          para.innerText = `00:${i}`
          i--;
          if(i<0){
          clearInterval(id);
          }
     }, 1000);
}