"Use strict"

$(document).ready(function () {
    // tooltop
    const tooltipBtn = document.querySelector('#tooltipBtn');

    const tooltipText = document.querySelector('#tooltipText');

    tooltipBtn.addEventListener('mouseover', function () {
        tooltipText.classList.add('tooltip__text--visible');
    });

    tooltipBtn.addEventListener('mouseout', function () {
        tooltipText.classList.remove('tooltip__text--visible');
    });

    //slider
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3.9,
        loop: true,
        spaceBetween: 40,
        speed: 400,
        scrollbar: {
            el: ".coaches__scrollbar",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        }
    });

    //animated-number
    let show = true;
    let countbox = ".about-item__title";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.num').css('opacity', '1');
            $('.num').spincrement({
                thousandSeparator: " ",
                duration: 2000
            });

            show = false;
        }
    });
});

