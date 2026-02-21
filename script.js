<<<<<<< HEAD
// ===== TYPEWRITER PROFISSIONAL =====

const texts = [
    "Thaynara Anacleto",
    "Desenvolvedora Front-End",
    "Estudante de Ciência da Computação",
    "Futura Dev Java"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 100;
const deleteSpeed = 50;
const delayBetweenTexts = 1200;

function typeEffect() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    const currentText = texts[textIndex];

    if (!isDeleting) {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayBetweenTexts);
        }
    } else {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);



// ===== BOTÃO CONTATO =====
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnContato");

    if (botao) {
        botao.addEventListener("click", () => {
            window.open("https://www.linkedin.com/in/thaynaraanacleto/", "_blank");
        });
    }
});



// ===== ANIMAÇÃO AO ROLAR =====
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 120;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
=======
// ===== TYPEWRITER PROFISSIONAL =====

const texts = [
    "Thaynara Anacleto",
    "Desenvolvedora Front-End",
    "Estudante de Ciência da Computação",
    "Futura Dev Java"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 100;
const deleteSpeed = 50;
const delayBetweenTexts = 1200;

function typeEffect() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    const currentText = texts[textIndex];

    if (!isDeleting) {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, delayBetweenTexts);
        }
    } else {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);



// ===== BOTÃO CONTATO =====
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnContato");

    if (botao) {
        botao.addEventListener("click", () => {
            window.open("https://www.linkedin.com/in/thaynaraanacleto/", "_blank");
        });
    }
});



// ===== ANIMAÇÃO AO ROLAR =====
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 120;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
>>>>>>> 604bf92 (feat: adiciona sessão projetos)
document.addEventListener("DOMContentLoaded", reveal);