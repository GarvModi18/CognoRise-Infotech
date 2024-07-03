let input=document.getElementById("TaskInput");
let button=document.querySelector("button");
let list=document.getElementById("list");
let checkboxDiv=document.getElementsByClassName('checkboxDiv')[0];//class returns a collection

button.addEventListener("click",(e) =>{
    if(input.value != ""){
        let listItem=document.createElement("li");
        let checkIteam=document.createElement("input");
        
        checkIteam.type="checkbox";
        checkIteam.style.width="20px";
        checkIteam.style.height="20px";
        checkIteam.style.marginUp="30px";

        listItem.textContent=input.value;
        
        list.appendChild(listItem);
        checkboxDiv.appendChild(checkIteam);
        input.value="";//clear the inputBox

        checkIteam.addEventListener("change",(e)=>{
            if(checkIteam.checked){
                listItem.style.textDecorationLine="line-through";
            }
            else{
            listItem.style.textDecorationLine="none";
            }
        })
    }
})

