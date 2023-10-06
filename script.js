let bill=document.getElementById("bill");
let people=document.getElementById("people");
let service=document.getElementById("service");
let form1=document.getElementById("form-container");

let calculate=document.getElementById("calculate");
calculate.addEventListener('click',(e)=>{
    let tip=bill.value*service.value/100;
    tip/=people.value;
    console.log(tip)
    let newele=document.getElementById("tip");
    e.preventDefault();
    newele.innerHTML=`<p>Tip Amount</p><span>${tip} Rs.</span>`;
})