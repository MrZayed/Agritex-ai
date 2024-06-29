let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".nums");
let started = false;

window.onscroll = function () {
    if (window.scrollY <= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 6000 / goal);
}
