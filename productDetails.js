
// let url="https://api.postalpincode.in/pincode/423101"
// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res[0].PostOffice[0].Block)
// })
// .catch((err)=>{
// })

// let url="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick"
// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res[2])
//     localStorage.setItem("nykaa",JSON.stringify(res[2]))
// })
// .catch((err)=>{
// })

let data = JSON.parse(localStorage.getItem("nykaa"))||[];
console.log(data)


let append=(data)=>{
    let div=document.getElementById("inn1img1");
    let div2=document.getElementById("inner2");
    let img=document.createElement("img");
    let img2=document.createElement("img");
    img.src=data.image_link;
    img2.src=data.image_link;
    div.append(img2);
    div2.append(img)


}
append(data)
