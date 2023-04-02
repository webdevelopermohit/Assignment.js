let accountbalance=document.getElementById("amount")
let depositeButton=document.getElementById("depostie")
let widrowButton=document.getElementById("widrow")
let depositeBox=document.getElementById("depositebox")
let widrowBox=document.getElementById("widrowbox")
let alertTheOutput=document.getElementById("alert")
depositeButton.addEventListener("click",input)
function input(){
    depositeBox.style.visibility="visible"
 }
function addamount(){
    let addedAmount=Number(depositeBox.value);
    console.log(addedAmount)
    let balnce=Number(accountbalance.textContent);
    console.log(balnce)
   let currentbalnce=addedAmount+balnce;
    accountbalance.textContent=currentbalnce;
    depositeBox.value="";
    alertTheOutput.innerText=`**Rs-${addedAmount} is deposited succesfully`;
    alertTheOutput.style.color="lightgreen";
    alertTheOutput.style.fontSize="1.5rem";
    setTimeout(function (){
        alertTheOutput.innerText='';
    },1000)
}
function hidden() {
    depositeBox.style.visibility="hidden"
}
depositeBox.addEventListener("keyup",enter)
function enter(e){
    if(e.key=="Enter"){
        addamount();
        hidden();
    }
}
widrowButton.addEventListener("click",input1)
function input1(){
    widrowBox.style.visibility="visible"
}
function removeamount(){
    let remvedamount=Number(widrowBox.value);
    let balnce2=Number(accountbalance.textContent);
   let currentbalnce2=balnce2-remvedamount;
    accountbalance.textContent=currentbalnce2;
    widrowBox.value="";
    alertTheOutput.innerText=`**Rs-${remvedamount} is withdrawal succesfully`;
    alertTheOutput.style.color="red";
    alertTheOutput.style.fontSize="1.5rem";
    setTimeout(function (){
        alertTheOutput.innerText='';
    },1000)
}
function hiddenagain() {
    widrowBox.style.visibility="hidden"
}
widrowBox.addEventListener("keyup",enter1)
function enter1(e){
    if(e.key=="Enter"){
        removeamount();
        hiddenagain();
    }
}
