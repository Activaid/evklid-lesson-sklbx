const swiper = new Swiper('.hero__swiper', {
  speed: 500,
  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду{{index}}',
  },
})
