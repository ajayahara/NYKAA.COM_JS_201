function my(id1, id2) {
   console.log(id1, id2)
   let div = document.getElementById(id2)
   div.removeAttribute("class", "hidden")
   let parent = document.getElementById(id1);
   parent.removeEventListener("click", my)
   parent.addEventListener("click", function () {
      remove(id1, id2)
   })
}
function remove(id1, id2) {
   let div = document.getElementById(id2)
   div.setAttribute("class", "hidden");
   let parent = document.getElementById(id1);
   parent.removeEventListener("click", remove)
   parent.addEventListener("click", function () {
      my(id1, id2)
   })
}
async function getData(query){
   const url=`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${query}`
   let res=await fetch(url);
   let data=await res.json();
   console.log(data);
   let number=document.getElementById("number")
   let type=document.getElementById("type")
   type.innerText=query;
   number.innerText=data.length;

   Append(data)
}
function Append(data){
   let container=document.getElementById("item");
   container.innerHTML=null
   data.forEach((el) => {
      let div=document.createElement("div")
      let div1=document.createElement("div");
      let image=document.createElement("img");
      image.src=el.image_link;
      image.addEventListener("error", function(event) {
         event.target.src = "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw09b47e3c/ProductImages/Lips/Macaron_Lippie/macaronlippies_main.jpg?sw=390&sh=390&sm=fit"
         event.onerror = null
       })
      div1.append(image);
      let head1=document.createElement("h3");
      head1.innerText=el.name;
      let head2=document.createElement("h3");
      if(el.price==0){
         head2.innerText=`MRP:730`
      }else{
         head2.innerText=`MRP: ${el.price*70}`
      }
      let head3=document.createElement("h3");
      head3.innerHTML=`&#9733 &#9733 &#9733 &#9733`
      let div2=document.createElement("div")
      let button1=document.createElement("button")
      button1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 20">
      <title>Heart icon</title>
      <path class="heart-icon-path" fill="#fff" stroke="currentColor"
         d="M11.4967297,19.0021565 C12.1501607,18.4744665 15.7313591,16.1461023 16.6556949,15.4660553 C20.4639993,12.6642314 22.5,9.83806845 22.500204,6.31427989 C22.4080534,3.08900922 19.7336922,0.5 16.5,0.5 C14.6798666,0.5 13.0132876,1.30878098 11.8904344,2.71234752 L11.5,3.20039053 L11.1095656,2.71234752 C9.98671236,1.30878098 8.32013337,0.5 6.5,0.5 C3.16873226,0.5 0.5,3.08355995 0.5,6.3 C0.5,9.87466924 2.55294628,12.7216506 6.38828771,15.5301224 C7.34346545,16.229562 10.7334347,18.4195137 11.4967297,19.0021565 Z">
      </path>
      </svg>`
      let button2=document.createElement("button")
      button2.innerText="Add To Bag"
      button2.addEventListener("click",function(){
         localStorage.setItem("nykaa",JSON.stringify(el))
      })
      div2.append(button1,button2);
      div.append(div1,head1,head2,head3,div2)
      container.append(div);
   });
}
getData("lipstick")
let select=document.getElementById("searchProduct");
select.addEventListener("change",function(){
   let q=select.value;
   console.log(q);
   getData(q);
})
