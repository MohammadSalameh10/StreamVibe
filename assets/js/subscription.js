let monthly = document.querySelector('.choose-plan-duration .monthly');
let yearly = document.querySelector('.choose-plan-duration .yearly');
let price = document.querySelectorAll(".price");
let table_price = document.querySelector(".compare-plans-table .table-price");
let feature = document.querySelector('.features-plan .feature');
let basic = document.querySelector('.plan-type-btn .basic');
let standard = document.querySelector('.plan-type-btn .standard');
let premium = document.querySelector('.plan-type-btn .premium');

monthly.addEventListener('click', () => {
     yearly.classList.remove('active');
     monthly.classList.add('active');
     price[0].innerHTML = `$9.99<span class = "duration">/month</span>`;
     price[1].innerHTML = `$12.99<span class = "duration">/month</span>`;
     price[2].innerHTML = `$14.99<span class = "duration">/month</span>`;
     table_price.innerHTML = `<td>Prizce</td>
    <td>$9.99/Month</td>
    <td>$12.99/Month</td>
    <td>$14.99/Month</td>`;
    if (basic.classList.contains('active')) {
     feature.innerHTML = `
   <h4>price</h4>
   <span>$9.99/Month</span>
  `;
}
else if (standard.classList.contains('active')) {
     feature.innerHTML = `
   <h4>price</h4>
   <span>$12.99/Month</span>
  `;
}
else if (premium.classList.contains('active')) {
     feature.innerHTML = `
   <h4>price</h4>
   <span>$14.99/Month</span>
  `;
}
});

yearly.addEventListener('click', () => {
     monthly.classList.remove('active');
     yearly.classList.add('active');
     price[0].innerHTML = `$119.99<span class = "duration">/year</span>`;
     price[1].innerHTML = `$155.99<span class = "duration">/year</span>`;
     price[2].innerHTML = `$179.99<span class = "duration">/year</span>`;
     table_price.innerHTML = `<td>Price</td>
    <td>$119.99/Year</td>
    <td>$155.99/Year</td>
    <td>$179.99/Year</td>`;
     if (basic.classList.contains('active')) {
          feature.innerHTML = `
        <h4>price</h4>
        <span>$119.99/Year</span>
       `;
     }
     else if (standard.classList.contains('active')) {
          feature.innerHTML = `
        <h4>price</h4>
        <span>$155.99/Year</span>
       `;
     }
     else if (premium.classList.contains('active')) {
          feature.innerHTML = `
        <h4>price</h4>
        <span>$179.99/Year</span>
       `;
     }
});

basic.addEventListener('click', () => {
     basic.classList.add('active');
     standard.classList.remove('active');
     premium.classList.remove('active');
     if (monthly.classList.contains('active')) {
          feature.innerHTML = `
       <h4>price</h4>
       <span>$9.99/Month</span>
      `;
     }
     else if (yearly.classList.contains('active')) {
          feature.innerHTML = `
          <h4>price</h4>
          <span>$119.99/Year</span>
          `;
     }
});
standard.addEventListener('click', () => {
     standard.classList.add('active');
     basic.classList.remove('active');
     premium.classList.remove('active');
     if (monthly.classList.contains('active')) {
          feature.innerHTML = `
     <h4>price</h4>
    <span>$12.99/Month</span>
   `;
     }
     else if (yearly.classList.contains('active')) {
          feature.innerHTML = `
      <h4>price</h4>
      <span>$155.99/Year</span>
      `;
     }
});
premium.addEventListener('click', () => {
     premium.classList.add('active');
     standard.classList.remove('active');
     basic.classList.remove('active');
     if (monthly.classList.contains('active')) {
          feature.innerHTML = `
          <h4>price</h4>
          <span>$14.99/Month</span>
        `;
     }
     else if (yearly.classList.contains('active')) {
          feature.innerHTML = `
          <h4>price</h4>
          <span>$179.99/Year</span>
          `;
     }
});