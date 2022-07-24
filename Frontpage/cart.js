let cartlist=JSON.parse(localStorage.getItem("Cartlist"))||[];
console.log(cartlist)
let appendData=(cartlist)=>{
    let div=document.getElementById("dataitem");
    div.innerHTML=null;
    console.log(cartlist)
    let count=0
    let totalprice=0;
    cartlist.forEach(el => {
        count++;
        totalprice+=+(el.price);
        let div0=document.createElement('div');
        div0.setAttribute('class','items')
        let div1=document.createElement('div')
        let img=document.createElement('img');
        img.src=el.image_link;
        img.setAttribute("class","imgData")
        div1.append(img);
        let div2=document.createElement('div')
        let brand=document.createElement("h4")
        brand.innerText=`brand: ${el.brand}`
        let name=document.createElement('p');
        name.innerText=`product: ${el.name}`;
        let price=document.createElement('h3');
        price.innerText=`MRP: ₹${el.price}`;
        div2.append(brand,name,price);
        let div3=document.createElement('div')
        let del=document.createElement('img');
        del.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfUeATu8SvL5DBFrDIJmbUJtZqCqaB_TYFg&usqp=CAU";
        div3.append(del);
        del.setAttribute("class","imgDelete")

        // deleting item;
        del.addEventListener("click",function(){
            Delete(el.id)
        })
        div0.append(div1,div2,div3);
        div.append(div0)

    });
    console.log(totalprice)
    if(totalprice>500){
        let div2=document.getElementById('numitem');
        div2.innerHTML=null;
        div2.innerText=`${count} items`;
        let pricetag=document.getElementById('price');
       
        pricetag.innerText=` ₹${totalprice-totalprice*(20/100)}`
        var finalprice=totalprice-totalprice*(20/100)
    }else{
        let div2=document.getElementById('numitem');
        div2.innerHTML=null;
        div2.innerText=`${count} items`;
        let pricetag=document.getElementById('price');
       
        pricetag.innerText=` ₹${totalprice+70}`
        finalprice=totalprice+70
    }
    

    // delete function
    
    //delete item
    function Delete(id1){
        
        let deleted=cartlist.filter(function(el){
            return el.id != id1;
        })
        cartlist=deleted;
         localStorage.setItem("Cartlist",JSON.stringify(cartlist));
         appendData(cartlist);
         window.location.reload()
         
     }

    //  price details

    let divdetail=document.createElement('div')
    divdetail.setAttribute('class','divdetail')
    let h3=document.createElement('h3');
    h3.innerText='Price Details'
    let div0=document.createElement('div');
    let p0=document.createElement('p');
    p0.innerText=`Bag MRP (${count}items)`
    let p1=document.createElement('p');
    p1.innerText=`₹${totalprice}`
    div0.append(p0,p1)
    
    let div1=document.createElement('div');
    let discount =0
    if(totalprice>500){
        discount=totalprice*(20/100);
    }
    let p2=document.createElement('p');
    p2.innerText='Bag Discount (discount available above ₹500)'
    let p3=document.createElement('p');
    p3.innerText=`₹${discount}`
    div1.append(p2,p3)

    let div3=document.createElement('div');
    let p4=document.createElement('p');
    p4.innerText='Shipping'
    if(discount>0){
        var p5=document.createElement('p');
        p5.innerText=` Free` 
    }else{
        var p5=document.createElement('p');
        p5.innerText=`₹70`;
    }
    
  
    div3.append(p4,p5)
    let div4=document.createElement('div');
    let p6=document.createElement('h3');
    p6.innerText=`You Pay`
    let p7=document.createElement('h3');
    p7.innerText=`₹${finalprice}`
    div4.append(p6,p7);

    divdetail.append(div0,div1,div3,div4);
    div.append(divdetail)


    
}
appendData(cartlist)


function myFunc(){
    window.location.href="logincheck.html"
}