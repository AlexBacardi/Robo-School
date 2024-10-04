"Use strict"

const tooltipBtn = document.querySelector('#tooltipBtn');

const tooltipText = document.querySelector('#tooltipText');

console.log(tooltipText);

tooltipBtn.addEventListener('mouseover', function () {
    tooltipText.classList.add('tooltip__text--visible');
});

tooltipBtn.addEventListener('mouseout',  function () {
    tooltipText.classList.remove('tooltip__text--visible');
});