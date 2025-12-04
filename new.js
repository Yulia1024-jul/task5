let burger = document.querySelector('.burger-nav');
let nav = document.querySelector('.burger-content');

burger.addEventListener("click", function(){
    nav.classList.toggle("active");
})

