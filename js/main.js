// Отримуємо посилання на кнопку меню та список навігації
const menuBtn = document.querySelector('.menu__btn');
const navList = document.querySelector('.nav__list');

// Додаємо обробник події кліку на кнопку меню
menuBtn.addEventListener('click', function() {
  // Змінюємо клас списку навігації для відображення/приховування
    navList.classList.toggle('nav__list--active');
});
