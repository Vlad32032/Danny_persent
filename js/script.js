// сохраняем данные в переменные
const iHTML = +prompt("Оцените ваш уровень владения HTML, Введите число от 1 до 100", "1");
const iCSS = +prompt("Оцените ваш уровень владения CSS, Введите число от 1 до 100", "1");
const iJS = +prompt("Оцените ваш уровень владения JS, Введите число от 1 до 100", "1");

// вызываем функцию-обработчик
getPercent();

// создаем функцию-обработчик
function getPercent () {
    document.querySelector(".percent_line_html").style.width = `${iHTML}%`;
    document.querySelector(".percent_line_css").style.width = `${iCSS}%`;
    document.querySelector(".percent_line_js").style.width = `${iJS}%`;

    document.querySelector(".percent_num_html").innerHTML = `${iHTML}%`;
    document.querySelector(".percent_num_css").innerHTML = `${iCSS}%`;
    document.querySelector(".percent_num_js").innerHTML = `${iJS}%`;
};