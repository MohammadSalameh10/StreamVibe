const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    loop: true,
  
   slidesPerView: 7,
    
   breakpoints: {
    0: {
        slidesPerView: 2.9,
      },

      380: {
        slidesPerView: 3,
      },
      390: {
        slidesPerView: 3.5,
      },
      420: {
        slidesPerView: 4,
      },
      460: {
        slidesPerView: 4.5,
      },
      500: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 2.7,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 7,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  autoplay:true,

  });