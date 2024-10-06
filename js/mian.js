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
        if (!show) return false; 
        let w_top = $(window).scrollTop();
        let e_top = $(countbox).offset().top;
        let w_height = $(window).height();
        let d_height = $(document).height();
        let e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.num').css('opacity', '1');
            $('.num').spincrement({
                thousandSeparator: " ",
                duration: 2000
            });

            show = false;
        }
    });

    //tabs
    const tabBtns = document.querySelectorAll('.tabs .tabs__btn');

    const tabsContent = document.querySelectorAll('.tabs__content .tabs__block');

    tabBtns.forEach(function (elem) {
        elem.addEventListener('click', function () {
            tabBtns.forEach(function (elem) {
                elem.classList.remove('tabs__btn--active');
            });
            tabsContent.forEach(function (item) {
                item.classList.remove('tabs__block--active');
            });
            elem.classList.add('tabs__btn--active');
            const tabIdSelector = this.getAttribute('data-tab');
            const currentTabBlock = document.querySelector(tabIdSelector);
            currentTabBlock.classList.add('tabs__block--active');
        })
    });
});

