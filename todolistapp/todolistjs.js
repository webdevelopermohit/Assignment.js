let input=document.getElementById("input")
let ul=document.getElementById("newItem")
let button=document.getElementById("addnew")
button.addEventListener("click",addli)
function addli(){
    if(input.value !==""){
        let inputValue=input.value;
        let li=document.createElement("li")
        let removeButton=document.createElement("button")
        removeButton.innerText="remove";
        removeButton.addEventListener("click",remove)
        function remove(){
            li.remove()
        }
        li.className="liItem"
        li.innerText=inputValue;
        input.value="";
        li.appendChild(removeButton)
        ul.appendChild(li)
    }
     else if(input.value==""){
        alert("Enter the Added Item")
    }
}
