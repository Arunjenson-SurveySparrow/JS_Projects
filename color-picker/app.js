const colors = ["green", "red", "rgba(133,122,200)","Yellow",
"#f15025"];

const btn =document.getElementById('btn');
const color =document.querySelector(".color");


btn.addEventListener('click',()=>{
     const randomnum = getRandomnumber();
     document.body.style.backgroundColor=colors[randomnum];
     color.textContent=colors[randomnum];
})


const getRandomnumber =()=>{
    return Math.floor(Math.random()*colors.length-1);
}