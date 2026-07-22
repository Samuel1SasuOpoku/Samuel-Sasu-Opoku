function changeMessage() {
    document.getElementById("message").textContent =
        "Hello Samuel! Welcome to JavaScript.";
}

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

function darkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeToggle");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let words = [
    "Beginner Web Developer",
    "Future Software Developer",
    "Computer Science Student"
];

let wordIndex = 0;

function changeTypingText() {
    document.getElementById("typingText").textContent = words[wordIndex];

    wordIndex++;

    if (wordIndex === words.length) {
        wordIndex = 0;
    }
}

setInterval(changeTypingText, 2000);

function toggleMenu() {
    let menu = document.getElementById("menuLinks");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function animateCounter(id, target, speed) {
    let count = 0;
    let element = document.getElementById(id);

    let timer = setInterval(function () {
        count++;

        if (id === "passionCount") {
            element.textContent = count + "%";
        } else if (id === "projectsCount" || id === "certificateCount") {
            element.textContent = count + "+";
        } else {
            element.textContent = count;
        }

        if (count >= target) {
            clearInterval(timer);
        }
    }, speed);
}

animateCounter("projectsCount", 2, 300);
animateCounter("certificateCount", 1, 500);
animateCounter("yearCount", 2026, 1);
animateCounter("passionCount", 100, 20);
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
function openPopup() {
    document.getElementById("hirePopup").style.display = "block";
}

function closePopup() {
    document.getElementById("hirePopup").style.display = "none";
}
window.onload = function () {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "☀️";
    }
};