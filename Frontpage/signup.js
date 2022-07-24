let bt1 = document.getElementById("firstb")
bt1.addEventListener("click", function () {
     window.location.href = "login.html";//need to update
})
let bt2 = document.getElementById("secondb");

bt2.addEventListener("click", function () {
     let phone = document.getElementById("input").value;
     console.log(phone)
     if (phone.length == 10) {
          localStorage.setItem("userAuth", JSON.stringify(phone));
          window.location.href = "auth.html"
     } else {
          alert("invalid request")
     }
})