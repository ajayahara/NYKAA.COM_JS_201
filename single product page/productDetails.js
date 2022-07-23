

// let url1="http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=eyeliner"
// fetch(url1)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res.length)
//     
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
    let name=document.createElement("h1");
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
        MRP.innerText=`MRP:₹${data.price}`;

    let p3=document.createElement("p");
    p3.innerText=`inclusive of all taxes`;
    
    // offers

    let div3=document.createElement('div');
    div3.innerText="* Buy 5 Sheetmasks Get 5 Free | Add 10 to Cart & Pay for 5"
    div3.setAttribute("class","offersdiv")

    // colorShades of product
    let shade=document.createElement("p");
    shade.innerText=`All Shades(${data.product_colors.length}) - Choose Shades from here`
    let div4=document.createElement("div");
   
    div4.setAttribute("class","shades")
    div4.innerHTML=null;
    console.log(data.product_colors)
    let div40=document.createElement("div");
    div40.style.backgroundColor="#FE93BC";
    let div41=document.createElement("div");
    div4.append(div40)
    if(data.product_colors.length===0 || data.product_colors.length>=15){
        shade.innerText=`No Shade Available`;
        div4.style.display="none"
    }else{
        data.product_colors.forEach(el => {
            let div=document.createElement("div");
            div.setAttribute("class","colordiv");
            div.style.backgroundColor=el.hex_value;
            
            
            
            div.addEventListener("click",function(){
                addcolor(el,div40);
            })
            div41.append(div);
            div4.append(div41)
         });
          
       
         
    }
    function addcolor(el,div40){
        div40.style.backgroundColor=el.hex_value;
    }

    // add to bag and delivery option section

    let div5=document.createElement("div");
    div5.setAttribute("class","addBagdiv")

    // add to bag
    let div50=document.createElement("div")
    let but=document.createElement("button")
    but.innerText="Add to Bag"

    but.addEventListener("click",function(){
        addtoCart(data);
    })
    div50.append(but);


    // Add to cart button functionality

    let Cartlist=JSON.parse(localStorage.getItem("Cartlist"))||[];
    let addtoCart=(data)=>{
       Cartlist.push(data);
       console.log("Cartlist:",Cartlist) 
       localStorage.setItem("Cartlist",JSON.stringify(Cartlist))
       alert("product added to cart")

    }
    
    
    
    // delivery option section
    let div51=document.createElement("div")
    div51.setAttribute("id","addressdiv")
    let h3=document.createElement("h3");
    h3.innerText="#@ Delivery Options"
    input=document.createElement("input");
    input.setAttribute("placeholder","Enter Pincode")
    input.setAttribute("id","Pincode")
    let butinput=document.createElement("button")
    butinput.innerText="Check";
   
    // checkfor address
    butinput.addEventListener("click",function(){
        let query=document.getElementById("Pincode").value;
        addaddress(query)
    })
    
  
    div51.append(h3,input,butinput)

    div5.append(div50,div51);
    
    
     // fetch data from pincode
     let addaddress=(query)=>{
        let url=`https://api.postalpincode.in/pincode/${query}`;
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
         console.log(res[0])
         append2(res[0]);
        })
        .catch((err)=>{
         console.log(err)
        })
 
     }
   
    

    div20.append(ratingimg,rating,p1,ratings,p2,p)
    div2.append(name,div20,MRP,p3,div3,shade,div4,div5)

    let append2=(data)=>{
        console.log(data)

        if(data.Status==="Error" || data.Status==="404"){
            let div=document.getElementById("addressdiv");
            div.innerHTML=null;
            let h3=document.createElement("h3");
            h3.innerText="#@ Delivery Options"
            input=document.createElement("input");
            input.setAttribute("placeholder","Enter Pincode")
            input.setAttribute("id","Pincode")
            let butinput=document.createElement("button")
            butinput.innerText="Check";
            butinput.addEventListener("click",function(){
                let query=document.getElementById("Pincode").value;
                addaddress(query)
            })
           
            let p=document.createElement("p");
    
            p.innerText="Please enter valid pincode";
            p.style.color="red"
            div.append(h3,input,butinput,p)
    
        }else{
            let div=document.getElementById("addressdiv");
            div.innerHTML=null;
            let p=document.createElement("p");
    
            p.innerText=`Pincode:${data.PostOffice[0].Pincode}`;
            p.style.color="red"
            let h3=document.createElement("h4");
            h3.innerText=`Shipping to: ${data.PostOffice[0].Block},${data.PostOffice[0].Country}`
            let p1=document.createElement("p");
            p1.innerText="* Delivered within 5 day of order "
            let p2=document.createElement("p");
            p2.innerText="* Cash on Delivery available on orders above ₹499 "
            
            div.append(p,h3,p1,p2)

        }
    
    }

}
append(data);

let append2=(data)=>{
    let div=document.getElementById("middel");
    console.log(data)
    let div0=document.createElement("div");
    let name=document.createElement("h3");
     name.innerText=`BRANDNAME: ${data.brand}`
    let img=document.createElement("img");
    img.src=data.image_link;
   
    
    
    let h4=document.createElement("h4");
    h4.innerText=`DESCRIPTION: ${data.description}`;
    div0.append(name,h4)

    div.append(img,div0)
}
append2(data)

// recomended products
let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${data.brand}`
fetch(url)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
    append3(res);
    
})
.catch((err)=>{
    console.log(err)
})

let append3=(data)=>{
    let div=document.getElementById("recomended");
    // div.innerHTML=null;
    console.log(div)
   
    
   
    data.forEach(el=>{
        
        
        let div0=document.createElement("div");
        let img=document.createElement('img');
        img.src=el.image_link
        
        let name=document.createElement("p");
         name.innerText=el.name

         let button=document.createElement("button");
         button.setAttribute("class","recdivbut")
         button.innerText="View Details"

         let mrp=document.createElement("h4");
         mrp.innerText=`MRP:₹${el.price}`

         button.addEventListener("click",function(){
            addtobag(el);

         
         })
         
        div0.append(img,name,mrp,button);
        div.append(div0)
         
          
    })

    
    let addtobag=(data)=>{
    
       localStorage.setItem("nykaa",JSON.stringify(data))
      
       window.location.reload();
   

    }
    
}





// 


