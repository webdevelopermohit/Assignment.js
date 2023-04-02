let input=document.getElementById("inputbox");
let output=document.getElementById("print")
input.addEventListener("keyup",getvalue)
function getvalue(e){
    if(e.key=="Enter"){
        let personname;
        let vowelCount=0;
        personname=this.value;
        console.log(personname)
        this.value='';
        for(let i=0;i<personname.length;i++){
        let letter=personname[i].toLowerCase();
        if(letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u"){
            vowelCount++;   
        }
        console.log(`Vowel in ${personname} is ${vowelCount}`)
        output.innerText=`**Vowel in ${personname} is ${vowelCount}`;
      } 
    }
}