(function () {
    'use strict';

    let arrowDownBtn = document.querySelector('.arrow-down__btn'),
        aboutSection = document.querySelector('.about-section');

    arrowDownBtn.addEventListener('click', function (e) {
        e.preventDefault();

        aboutSection.scrollIntoView({
            behavior: "smooth"
        });
    });

}());