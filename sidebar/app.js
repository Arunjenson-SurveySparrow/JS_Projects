const btntoggle  = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

btntoggle.addEventListener('click',()=>{
    sidebar.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('show-sidebar'); 
})