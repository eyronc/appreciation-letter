const envelope = document.querySelector('.envelope');
const ribbon = document.querySelector('.ribbon');
const openBtn = document.querySelector('.open-btn');

if (openBtn) {
    openBtn.addEventListener('click', openLetter);

    function openLetter() {
        envelope.classList.add('open');
        ribbon.classList.add('hidden');
        openBtn.style.visibility = 'hidden';
        
        const letter = document.querySelector('.letter');
        letter.style.overflow = 'auto';
        letter.style.maxHeight = '100%';
    }
    

    function closeLetter() {
        envelope.classList.remove('open');
        ribbon.classList.remove('hidden');
        openBtn.style.visibility = 'visible';
    }
}
    
function goToLetter() {
    document.body.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.9)";
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 500);
}

function goToFlowers() {
    document.body.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.9)";
    setTimeout(() => {
        window.location.href = "flowers.html";
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.transform = "scale(1.1)";
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        document.body.style.transform = "scale(1)";
        document.body.style.opacity = "1";
    }, 0);
});