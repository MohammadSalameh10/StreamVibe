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
     document.querySelector('.features-plan .content-description').textContent = 'Access to a wide selection of movies and shows, including some new releases.';
     document.querySelector('.features-plan .device-description').textContent = 'Watch on one device simultaneously';
     document.querySelector('.features-plan .hdr').textContent = 'No';
     document.querySelector('.features-plan .dolby').textContent = 'No';
     document.querySelector('.features-plan .ad').textContent = 'No';
     document.querySelector('.features-plan .viewing').textContent = 'No';
     document.querySelector('.features-plan .family').textContent = 'No';
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
     document.querySelector('.features-plan .content-description').textContent = 'Access to a wider selection of movies and shows, including most new releases.';
     document.querySelector('.features-plan .device-description').textContent = 'Watch on Two device simultaneously';
     document.querySelector('.features-plan .hdr').textContent = 'Yes';
     document.querySelector('.features-plan .dolby').textContent = 'Yes';
     document.querySelector('.features-plan .ad').textContent = 'Yes';
     document.querySelector('.features-plan .viewing').textContent = 'Yes, for select titles.';
     document.querySelector('.features-plan .family').textContent = '5 family members.';
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
     document.querySelector('.features-plan .content-description').textContent = 'Access to a widest selection of movies and shows, including all new releases.';
     document.querySelector('.features-plan .device-description').textContent = 'Watch on Four device simultaneously';
     document.querySelector('.features-plan .hdr').textContent = 'Yes';
     document.querySelector('.features-plan .dolby').textContent = 'Yes';
     document.querySelector('.features-plan .ad').textContent = 'Yes';
     document.querySelector('.features-plan .viewing').textContent = 'Yes, for all titles.';
     document.querySelector('.features-plan .family').textContent = '6 family members.';
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