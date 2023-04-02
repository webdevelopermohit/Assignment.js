/* A javascript program that take take useranme in which you can input your name in any formate any letter in lower or uppercase but it will greet you your proper name
*/ 
let firstpassword=document.getElementById("first")
let Conformationpassword=document.getElementById("second")
let loginbtn=document.getElementById("button")
let displayoutput=document.getElementById("input")
let emailbox=document.getElementById("email")
let passwordOutput=document.getElementById("password")
let UserName=document.getElementById("user-name")
loginbtn.addEventListener("click", check)
function check(){
   let first=firstpassword.value;
   let Conform=Conformationpassword.value;
   let email=emailbox.value
   let user_name=UserName.value;
   let firstLetter=user_name.slice(0,1);
   let restwords=user_name.slice(1,user_name.length)
   let touppercase=((firstLetter==firstLetter.toUpperCase()) ? firstLetter:firstLetter.toUpperCase())
   let tolowercase=((restwords==restwords.toLowerCase()) ? restwords:restwords.toLowerCase())

   if(first.length>8){
      passwordOutput.innerText="**password must be less than 8 chatacter";
      passwordOutput.style.color="red";
      setTimeout( function (){
           window.location.reload()
       },1800)
   }
   if(email.length==0){
       displayoutput.innerText="**Enter the information";
       setTimeout( function (){
           window.location.reload()
       },1800)
   } else if(first!=Conform){
       displayoutput.innerText="invalid password.Re-enter the password"
       setTimeout( function (){
           window.location.reload()
       },2200)
   } else if(first==Conform){
       loginbtn.innerText="Sign In succefully";
       loginbtn.style.textTransform="uppercase";
       loginbtn.style.backgroundColor="#62CDFF"
       loginbtn.style.fontWeight="bold"
       setTimeout(function dispaly(){
        alert(`***${touppercase}${tolowercase} succesfully login`)
       },100)
       setTimeout( function (){
           window.location.reload()
       },5000)
   }
}