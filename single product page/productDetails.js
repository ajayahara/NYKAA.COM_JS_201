

// let url="https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=eyeliner"
// fetch(url)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res[0])
//     localStorage.setItem("nykaa",JSON.stringify(res[2]))
// })
// .catch((err)=>{
// })

let data = JSON.parse(localStorage.getItem("nykaa"))||[];
console.log(data)


let append=(data)=>{

    // product image data 
    let div=document.getElementById("inn1img1");
    let div10=document.getElementById("inner2");
    let img=document.createElement("img");
    let img2=document.createElement("img");
    img.src=data.image_link;
    img2.src=data.image_link;
    div.append(img2);
    div10.append(img);


   // product all data ratings,price,all tags   
    let div20=document.createElement("div")
    div20.setAttribute("class","div20")
    let div2=document.getElementById("fullDetail");
    let name=document.createElement("h3");
    let rating=document.createElement("p");
    let rate=Math.floor(Math.random() * 5);
    rating.innerText=`${rate}/5`
    let ratingimg=document.createElement("img");
   

    // ratting imges
    if(rate===0){
        ratingimg.src="https://t3.ftcdn.net/jpg/04/92/15/26/360_F_492152662_oPTAUlWXYi3FqvAygficFgdg7KEFGLqj.jpg"
    }else if(rate===1){
        ratingimg.src="https://thumbs.dreamstime.com/b/out-stars-rating-product-customer-review-gold-162079725.jpg"
    }else if(rate===2){
        ratingimg.src="https://t3.ftcdn.net/jpg/04/92/15/26/360_F_492152672_zyhUKujIhh09mcQhTBwXsXfPlQbTRvh5.jpg"
    }else if(rate===3){
        ratingimg.src="https://thumbs.dreamstime.com/b/out-stars-rating-product-customer-review-gold-162079710.jpg"
    }else if(rate===4){
        ratingimg.src="https://t4.ftcdn.net/jpg/02/98/16/63/360_F_298166355_BvfU0450lPRi51CNc2DKaPiEuujvn5Op.jpg"
    }else{
        ratingimg.src="https://image.shutterstock.com/image-illustration/five-golden-stars-best-rating-260nw-657712999.jpg"
    }
    let ratings=document.createElement("p");
    ratings.innerText=`${Math.floor(Math.random() * 15000)} ratings & ${Math.floor(Math.random() * 2000)} reviews`;

    name.innerText=data.name;
    let p=document.createElement("p");
    p.innerText="Q&As"
    let p2=document.createElement("p");
    p2.innerText="|"
    p2.style.fontSize="30px";
    let p1=document.createElement("p");
    p1.innerText="|"
    p1.style.fontSize="30px";

    // all about product price;
    let MRP=document.createElement("h2");
        MRP.innerText=`MRP:$${data.price}`;

    let p3=document.createElement("p");
    p3.innerText=`inclusive of all taxes`;
    
    // offers

    let div3=document.createElement('div');
    div3.innerText="* Buy 5 Sheetmasks Get 5 Free | Add 10 to Cart & Pay for 5"
    div3.setAttribute("class","offersdiv")

    // colorShades of product
    let shade=document.createElement("p");
    shade.innerText=`All Shades(${data.product_colors.length})`
    let div4=document.createElement("div");
    div4.setAttribute("class","shades")
    div4.innerHTML=null;
    console.log(data.product_colors)

    if(data.product_colors.length===0){
        shade.innerText=`No Shade Available`;
    }else{
        data.product_colors.forEach(el => {
            let div=document.createElement("div");
            div.setAttribute("class","colordiv");
            div.style.backgroundColor=el.hex_value;
            
            div4.append(div);
         });
    }
   

    

    div20.append(ratingimg,rating,p1,ratings,p2,p)
    div2.append(name,div20,MRP,p3,div3,shade,div4)



}
append(data)
