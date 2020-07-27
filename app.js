//Plus Event
function incrementQty(id,qtyId,priceId,priceDeafault){
const plusBtn = document.getElementById(id).addEventListener("click",function(){

    let qty = document.getElementById(qtyId).value;
    let qtyNumber = parseInt(qty);
      let plus = qtyNumber +1;
      document.getElementById(qtyId).value=(plus);

    // const  Price = document.getElementById("price").innerText;
    // const priceNumber = parseInt(Price);
    const totalPrice= (qtyNumber+1)*priceDeafault;
    console.log(totalPrice);
     const setPrice = document.getElementById(priceId).innerText = totalPrice;
      return totalPrice;
     //document.getElementById("sub-total").innerText=totalPrice;
     
     //console.log(test);         
    // subTotal(item1,item2);
     
});
}
//minus Event 
function decrementQty (id,qtyId,priceId,priceDeafault) {
    let minusBtn = document.getElementById(id).addEventListener('click',function(){
        let qty = document.getElementById(qtyId).value;
        let qtyNumber = parseInt(qty);
          let minus = qtyNumber - 1;
          document.getElementById(qtyId).value=(minus);
    
         const  Price = document.getElementById(priceId).innerText;
         const priceNumber = parseInt(Price);
        const totalPrice= priceNumber - priceDeafault;
        //console.log(totalPrice);
          document.getElementById(priceId).innerText = totalPrice;
         //console.log(test);    
  });
}


//calling function 
  incrementQty("plus-btn","qty","price",1219);
  incrementQty("plus-btn-2","qty-2","price-2",59);

 const item1 = document.getElementById("price").value;
 let parseNumber1 = parseInt(item1);  
 const item2 = document.getElementById("price-2").value;
 let parseNumber2=parseInt(item2);
 const subTotal = parseNumber1 + parseNumber2;
 console.log(subTotal);
 document.getElementById('sub-total').innerText = subTotal;
 

 //subTotal(arr);
//  function subTotal(arr){
    
//    
// }
//Decrements
decrementQty("minus-btn","qty","price",1219);
 decrementQty("minus-btn-2","qty-2","price-2",59);

// function totalCalculation(item1,item2){
//   const subTotal = document.getElementById("sub-total").innerText;
//   const  Price = document.getElementById("price").innerText;
//   const priceNumber = parseInt(Price);
//   console.log(priceNumber);

//   const  Price2 = document.getElementById("price-2").innerText;
//   const priceNumber2 = parseInt(Price);

//   console.log();
//   //const subTotalNumber = parseInt(subTotal); 
  
//   //console.log(subTotal); 
// }

