const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLink = nav.querySelectorAll('.nav__link');
const body = document.body;
const headerSearch = document.querySelector('.header__search');
const formHeader = document.querySelector('.form-header');
const headerSearchClose = document.querySelector('.header__search-close');
const howStep = document.querySelectorAll('.how__step');
const stepText = document.querySelectorAll('.step__text');

//Burger menu 
burger.addEventListener('click', function () {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
})

navLink.forEach(el => {
  el.addEventListener('click', function () {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  });
});

//Popup searching form
headerSearch.addEventListener("click", function () {
  formHeader.classList.add("form-header--active");
  this.classList.add("active");
})

headerSearchClose.addEventListener("click", function () {
  let form = document.querySelector(".form-header");
  form.classList.remove("form-header--active");
  headerSearch.classList.remove("active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form-header");
  if (!target.closest(".header__form")) {
    form.classList.remove("form-header--active");
    headerSearch.classList.remove("active");
  }
})

//Tabs
howStep.forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    howStep.forEach(function (btn) {
      btn.classList.remove('how__step--active')
    });
    e.currentTarget.classList.add('how__step--active');
    stepText.forEach(function (tabsBtn) {
      tabsBtn.classList.remove('step__text--active');
      document.querySelector(`[data-target="${path}"]`).classList.add('step__text--active');
    })
  })
})

//Accordion
new Accordion('.accordion', {
  elementClass: 'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'ac__bottom',
  activeClass: 'ac--active',
  duration: 300,
});