"use strict"
let doc = document;
function getProductSlider() {
    if (document.querySelectorAll('.product-slider')) {
        let productSliders = document.querySelectorAll('.product-slider');
        for (let slider of productSliders) {
            let slideCount = 0;
            let place = slider.querySelector('.items');
            let itemSliderItems = place.querySelectorAll('.item');
            let arrowL = slider.querySelector('.arrow-l');
            let arrowR = slider.querySelector('.arrow-r');
            if(arrowL && arrowR) {
                arrowL.addEventListener('click', productSlideLeft);
                arrowR.addEventListener('click', productSlideRight);
            }
            slider.addEventListener('touchmove', function(e) {
                handleTouchMove(e, productSlideRight, productSlideLeft);
            });
            function productSlideLeft() {
                if (!place.dataset.p) {
                    place.dataset.p = 56;
                }
                if (doc.documentElement.clientWidth <= '578') {
                    if (!place.dataset.pm) {
                        place.dataset.p = '24';
                    } else {
                        place.dataset.p = place.dataset.pm ;
                    }
                }
                let itemsWidth = 0;
                let nowLeft = 0;
                if (place.style.left) {
                    nowLeft = Math.abs(place.style.left.replace(/\D/g, ''));
                }
                let nextSlide = 0;
                for (let item of itemSliderItems) {
                    itemsWidth += Math.round(item.offsetWidth + Number(place.dataset.p));
                    if (itemsWidth < nowLeft) {
                        nextSlide = itemsWidth;
                    };
                }
                let left = nextSlide;
                if (left < 0) {
                    left = 0;
                } else {
                    slideCount--;
                }
                place.style.left = '-' + left + 'px';
            };
            function productSlideRight() {
                   let placeWidth = place.offsetWidth;
                if (!place.dataset.p) {
                    place.dataset.p = 56;
                }
                if (doc.documentElement.clientWidth <= '578') {
                    if (!place.dataset.pm) {
                        place.dataset.p = '24';
                    } else {
                        place.dataset.p = place.dataset.pm ;
                    }
                }
                let itemsWidth = 0;
                let nowLeft = 0;
                if (place.style.left) {
                    nowLeft = Math.abs(place.style.left.replace(/\D/g, ''));
                }
                let nextSlide = 0;
                for (let item of itemSliderItems) {
                    itemsWidth += Math.round(item.offsetWidth + Number(place.dataset.p));
                    if (nextSlide === 0 && itemsWidth > nowLeft) {
                        nextSlide = itemsWidth;
                    };
                }
                let left = nextSlide;
                if (left > itemsWidth - placeWidth) {
                    left = itemsWidth - placeWidth;
                }
                place.style.left = '-' + left + 'px';
            };
        }

    }
}
getProductSlider();