

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
let grid = document.querySelector('.grid');

let msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded(grid).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
});

// bootstrap navbar hamburger menu

document.querySelector('.first-button').addEventListener('click', function () {

    document.querySelector('.animated-icon1').classList.toggle('open');
});
document.querySelector('.second-button').addEventListener('click', function () {

    document.querySelector('.animated-icon2').classList.toggle('open');
});
document.querySelector('.third-button').addEventListener('click', function () {

    document.querySelector('.animated-icon3').classList.toggle('open');
});

