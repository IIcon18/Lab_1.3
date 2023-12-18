const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

// Скрипт для раскрытия блока portfolio
const portfolioBtn = document.querySelector(".portfolio__btn"); // создаем кнопку 
const portfolioItem = document.querySelector(".portfolio__item"); //создаем элемент для показа/скрытия элемента

function toggleMenuVisibility() {   //объявляем функцию 
menuList.classList.toggle("hide");  // указываем какой элемент должна скрывать или открывать функция
}

menuBtn.addEventListener("click", toggleMenuVisibility); //добавляем активатор функции после клика по ней

function toggleItemVisibility(){   
portfolioItem.classList.toggle("hide"); 
}

portfolioBtn.addEventListener("click", toggleItemVisibility) 