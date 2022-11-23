// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay



const modalBtn = document.querySelector('.modal-btn');
const modaloverlay = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');

modalBtn.addEventListener('click',()=>{
    modaloverlay.classList.add('open-modal');
})
close.addEventListener('click',()=>{
    modaloverlay.classList.remove('open-modal');

})

