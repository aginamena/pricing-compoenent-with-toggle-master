var checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", ()=>{
  if(checkbox.checked){
    // Monthly price
    document.querySelector("#first-item .amount").innerHTML = "&dollar;19.99";
    document.querySelector("#second-item .amount").innerHTML = "&dollar;24.99";
    document.querySelector("#third-item .amount").innerHTML = "&dollar;39.99";
  }else{
    // Annually price
    document.querySelector("#first-item .amount").innerHTML = "&dollar;199.99";
    document.querySelector("#second-item .amount").innerHTML = "&dollar;249.99";
    document.querySelector("#third-item .amount").innerHTML = "&dollar;399.99";

  }

})
