let show = document.querySelectorAll('.question i');
let answer = document.querySelectorAll('.question p');

show.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('fa-plus');
        item.classList.toggle('fa-minus');
        item.classList.toggle('align-self-start');
        answer[index].classList.toggle('d-none');
    })
})

let monthly = document.querySelector('.choose-plan-duration .monthly');
let yearly = document.querySelector('.choose-plan-duration .yearly');
let price = document.querySelectorAll(".price");

monthly.addEventListener('click', () => {
    yearly.classList.remove('active');
    monthly.classList.add('active');
    price[0].innerHTML = `$9.99<span class = "duration">/month</span>`;
    price[1].innerHTML = `$12.99<span class = "duration">/month</span>`;
    price[2].innerHTML = `$14.99<span class = "duration">/month</span>`;
});

yearly.addEventListener('click', () => {
    monthly.classList.remove('active');
    yearly.classList.add('active');
    price[0].innerHTML = `$119.99<span class = "duration">/year</span>`;
    price[1].innerHTML = `$155.99<span class = "duration">/year</span>`;
    price[2].innerHTML = `$179.99<span class = "duration">/year</span>`;
});
