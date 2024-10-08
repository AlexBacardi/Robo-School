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
        loop: true,
        speed: 400,
        scrollbar: {
            el: ".coaches__scrollbar",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            539: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            767: {
                slidesPerView:2.2,
                spaceBetween: 30,
            },
            970: {
                slidesPerView: 2.7,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1281: {
                slidesPerView:3.9,
                spaceBetween: 30,
            }
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

    const tabs = document.querySelectorAll('[data-control="tab"]');

    tabs.forEach(function (tab) {

        const tabBtns = tab.querySelectorAll('[data-control="tab-btn"]');

        const tabSelects = tab.querySelectorAll('[data-control="tab-select"]');

        const tabBlocks = tab.querySelectorAll('[data-control="tab-block"]');

        tabBtns.forEach(function (btn, index) {

            btn.addEventListener('click', function () {

                const currentBtn = btn;

                const contentBlocks = tab.querySelectorAll('[data-control="tab-block"]');

                const currentBlock = contentBlocks[index];

                if (!currentBtn.classList.contains('tabs__btn--active')) {

                    tabBtns.forEach(function (btn) {
                        btn.classList.remove('tabs__btn--active');
                    });
    
                    tabBlocks.forEach(function (block) {
                        block.classList.remove('tabs__block--active');
                    });
    
                    currentBtn.classList.add('tabs__btn--active');
    
                    currentBlock.classList.add('tabs__block--active');
                }

            });
        });

        tabSelects.forEach(function(select) {
            
            select.addEventListener('change', function () {

                const contentBlocks = tab.querySelectorAll('[data-control="tab-block"]');

                const currentBlock = contentBlocks[this.value];

                tabBlocks.forEach(function (block) {
                    block.classList.remove('tabs__block--active');
                });

                currentBlock.classList.add('tabs__block--active');
            });
        });
    });

    // modal
    const openModalBtns = document.querySelectorAll('.coaches-card .btn-coaches');

    const closeModalBtns = document.querySelectorAll('[ data-control="closeModal"]');
    
    function openModal() {

        document.querySelector(this.getAttribute('data-id')).classList.add('modal--open');

        document.body.classList.add('no-scroll');
    };

    openModalBtns.forEach(function (btn) {
        
        btn.addEventListener('click', openModal);
    });

    closeModalBtns.forEach(function (btn) {

        btn.addEventListener('click',  function (event) {

            event.target.closest('.modal--open').classList.remove('modal--open');

            document.body.classList.remove('no-scroll');
        });
    }); 

    //mobile menu
    const mobileBtnOpen = document.querySelector('#openMobileNav');

    const mobileBtnClose = document.querySelector('#closeMobileNav');

    const mobileNav = document.querySelector('.mobile-nav');

    const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-list a, .mobile-nav-list button');

    function openMenu() {

        mobileNav.classList.add('mobile-nav--open');

        document.body.classList.add('no-scroll');
    }

    function closeMenu() {

        mobileNav.classList.remove('mobile-nav--open');

        document.body.classList.remove('no-scroll');
    }

    mobileNavLinks.forEach(function (elem) {

        elem.addEventListener('click', closeMenu);

    });

    mobileBtnOpen.addEventListener('click', openMenu);

    mobileBtnClose.addEventListener('click', closeMenu);

    // masked phone

    $("#phone").mask("+7(999) 999-9999");
});

