let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let answer="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            try {
                answer = eval(answer);
                input.value = answer;
            } catch (error) {
                input.value = "Error";
            }
        }
        else if(e.target.innerHTML == 'Clear'){
            answer="";
            input.value=answer;
        }
        else if(e.target.innerHTML == 'Del'){
            answer =answer.substring(0,answer.length-1);
            input.value=answer;
        }
        else{
            answer += e.target.innerHTML;
            input.value = answer; 
        }
    })
})