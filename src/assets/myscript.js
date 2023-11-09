
let thumbnail1 = document.getElementsByClassName('thumbnail1');
let slider1 = document.getElementById('slider1');
let leftButton1 = document.getElementById('left-slide1');
let rightButton1 = document.getElementById('right-slide1');

leftButton1.addEventListener('click', function () {
    slider1.scrollLeft -= 125;
})
rightButton1.addEventListener('click', function () {
    slider1.scrollLeft += 125;
})

const maxScrollLeft1 = slider1.scrollWidth - slider1.clientWidth;

function autoPlay1() {
    if (slider1.scrollLeft > (maxScrollLeft1 - 1)) {
        slider1.scrollLeft -= maxScrollLeft1;
    } else {
        slider1.scrollLeft += 1
    }
}

let play1 = setInterval(autoPlay1, 50)

for (let i = 0; i < thumbnail1.length; i++) {
    thumbnail1[i].addEventListener('mouseover', () => {
        clearInterval(play1)
    })
    thumbnail1[i].addEventListener('mouseout', () => {
        return play1 = setInterval(autoPlay1, 50);
    })
}
// First Slider End
let thumbnail2 = document.getElementsByClassName('thumbnail2');
let slider2 = document.getElementById('slider2');
let leftButton2 = document.getElementById('left-slide2');
let rightButton2 = document.getElementById('right-slide2');

leftButton2.addEventListener('click', function () {
    slider2.scrollLeft -= 125;
})
rightButton2.addEventListener('click', function () {
    slider2.scrollLeft += 125;
})

const maxScrollLeft2 = slider2.scrollWidth - slider2.clientWidth;

function autoPlay2() {
    if (slider2.scrollLeft < 1) {
        slider2.scrollLeft = maxScrollLeft2;
    } else {
        slider2.scrollLeft -= 1;
    }
}

let play2 = setInterval(autoPlay2, 50)

for (let i = 0; i < thumbnail2.length; i++) {
    thumbnail2[i].addEventListener('mouseover', () => {
        clearInterval(play2)
    })
    thumbnail2[i].addEventListener('mouseout', () => {
        return play2 = setInterval(autoPlay2, 50);
    })
}

// Second Slider End

let isDragging = false;
let startX; // Initial Position
let scrollLeft;


slider1.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider1.offsetLeft;
    scrollLeft = slider1.scrollLeft;
});
slider2.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
});
// MouseDown

slider1.addEventListener('mouseup', () => {
    isDragging = false;
});
slider2.addEventListener('mouseup', () => {
    isDragging = false;
});
// MouseUp

slider1.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - slider1.offsetLeft;
    const walk = (x - startX) * 1;
    slider1.scrollLeft = scrollLeft - walk;
});
slider2.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX) * 1;
    slider2.scrollLeft = scrollLeft - walk;
});
// MouseMove

// Swiper Js End -- Section 5