let show = document.querySelectorAll('.question i');
let answer = document.querySelectorAll('.question p');
let check = document.querySelector('.form-check-input');
let send_button = document.querySelector('.send-massage button'); 

show.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('fa-plus');
        item.classList.toggle('fa-minus');
        item.classList.toggle('align-self-start');
        answer[index].classList.toggle('d-none');
    })
});

show.forEach((item, index) => {
    item.addEventListener('touchend', () => {
        item.classList.toggle('fa-plus');
        item.classList.toggle('fa-minus');
        item.classList.toggle('align-self-start');
        answer[index].classList.toggle('d-none');
    })
});

check.addEventListener('click', () => {
    send_button.classList.toggle('disabled');
});