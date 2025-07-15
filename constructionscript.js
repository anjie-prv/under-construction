
let progress = 0;
const bar = document.getElementById('progressBar');
const text = document.getElementById('progressText');

function swingHammer() {
    if (progress < 30) {
        progress += 5;
    } else {
        progress = 0;
    }

    bar.style.width = progress + '%';
    text.textContent = progress + '%';

}