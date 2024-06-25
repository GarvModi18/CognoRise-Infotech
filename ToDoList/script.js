let input=document.getElementById("TaskInput");
let button=document.querySelector("button");
let list=document.getElementById("list");
let div=document.getElementsByClassName("listContainer");

button.addEventListener("click",(e) =>{
    if(input.value != ""){
        let listItem=document.createElement("li");
        let completeBtn=document.createElement("button");
        completeBtn.textContent="Done";
        completeBtn.style.margin="0px 10px";
        listItem.textContent=input.value;
        list.appendChild(listItem);
        listItem.appendChild(completeBtn);
        input.value="";//clear the inputBox

        completeBtn.addEventListener("click" , (e)=>{
            listItem.style.textDecorationLine="line-through";
        })
    }
})

