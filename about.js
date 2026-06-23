let hamburger_icon = document.querySelector(".hamburger-icon");
let close_icon = document.querySelector(".close-icon");
let hamburger_text = document.querySelector(".hamburger-text");
let card = document.querySelector("card");

hamburger_icon.addEventListener('click', ()=>{
    hamburger_text.classList.add('open');
    hamburger_icon.classList.add('fade_out');
    card.classList.add('fade_out');
})
close_icon.addEventListener('click', () => {
    hamburger_text.classList.remove('open');
    hamburger_icon.classList.remove('fade_out');
    card.classList.remove('fade_out');
});