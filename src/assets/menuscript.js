// let timVine = document.getElementById("fSection");
// let navbar = document.getElementById("mainmenu");
// let navPos = navbar.getBoundingClientRect().top;

// window.addEventListener("scroll", e => {

//     let scrollPos = window.scrollY;
//     if (scrollPos > navPos) {
//         navbar.classList.add('sticky');
//         header.classList.add('navbarOffsetMargin');
//     } else {
//         navbar.classList.remove('sticky');
//         header.classList.remove('navbarOffsetMargin');
//     }

// });

const festivalDate = new Date("2024-01-19T00:00:00Z").getTime();
const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = festivalDate - now;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "The Festival Has Started !";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} Days & ${hours} Hours & ${minutes} Minute ${seconds} the Festival is left !`;
    }
}, 1000);