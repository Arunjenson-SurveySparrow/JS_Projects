let value = document.querySelector('#value');
let increase = document.querySelector('.decrease');
const decrease = document.querySelector('.increase');
// let reset = document.querySelector('.reset');
const btns = document.querySelectorAll('.btn');

let answer = 0;

btns.forEach((btn)=>{
    btn.addEventListener("click" ,(e)=>{
        const state = e.currentTarget.classList;
        if(state.contains('decrease')){
            answer--;
            value.textContent = answer;  
        }
        else if(state.contains('increase')){
            console.log("increase")
            answer++;  
        }
        else{
            answer = 0; 
           
        }
        if(answer>0){
            value.style.color = "green";
        }
        if(answer<0){
            value.style.color="red";
        }
        if(answer === 0){
            value.style.color="#222"
        }
        value.textContent = answer;
    });
});
if(answer >0){
 
}