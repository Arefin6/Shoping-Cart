//Plus Event
function incrementQty(id,qtyId){
const plusBtn = document.getElementById(id).addEventListener("click",function(){

    let qty = document.getElementById(qtyId).value;
    let qtyNumber = parseFloat(qty);
      let plus = qtyNumber +1;
      document.getElementById(qtyId).value=(plus);

    // const  Price = document.getElementById("price").innerText;
    // const priceNumber = parseInt(Price);
    const totalPrice= (qtyNumber+1)*1219;
    console.log(totalPrice);
      document.getElementById("price").innerText = totalPrice;
     //console.log(test);    
});
}
//minus Event 
function decrementQty (id,qty) {
    let minusBtn = document.getElementById(id).addEventListener('click',function(){
        qtyPlus = document.getElementById(qty).value--;
  });
}
//calling function 
incrementQty("plus-btn","qty");
incrementQty("plus-btn-2","qty-2");
decrementQty("minus-btn","qty");
decrementQty("minus-btn-2","qty-2");


