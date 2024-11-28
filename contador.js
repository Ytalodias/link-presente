const startDate = new Date('2023-11-08T00:00:00');

function updateCounter() {
    const now = new Date();
    const timeDiff = now - startDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCounter();
setInterval(updateCounter, 1000);

const secretButton = document.getElementById('secretButton');
const tempoDiv = document.querySelector('.tempo');
const iconImage = document.querySelector('.icon img');

secretButton.addEventListener('click', () => {
    document.body.classList.toggle('other-world');
    tempoDiv.classList.toggle('other-world');

    if (document.body.classList.contains('other-world')) {
        iconImage.src = 'https://i.ibb.co/x1vjRhK/coralinebotao.png';
        secretButton.textContent = '🌕';
    } else {
        iconImage.src = 'https://i.ibb.co/rmBgbg9/D85-B753-A-1-FC3-43-CC-9-ACD-7-EED1-DC9-B316.png';
        secretButton.textContent = '🧵';
    }
});
