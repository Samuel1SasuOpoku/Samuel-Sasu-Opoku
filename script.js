function changeMessage() {
    document.getElementById("message").textContent =
        "Hello Samuel! Welcome to JavaScript.";
}

function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

function darkMode() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("darkButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
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