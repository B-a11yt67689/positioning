/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function openModal() {
    document.querySelector('#overlay').classList.add('active');
    document.querySelector('#modal').classList.add('active');
    startProgress();
}

function closeModal() {
    document.querySelector('#overlay').classList.remove('active');
    document.querySelector('#modal').classList.remove('active');
}

function startProgress() {
    const fill = document.querySelector('#progress-fill');
    const whiteText = document.querySelector('.progress-bar-text-white');
    const duration = 3000;
    const frames = 60;
    const interval = duration / frames;
    let current = 0;

    fill.style.width = '0%';
    whiteText.style.clipPath = 'inset(0 100% 0 0)';

    const timer = setInterval(function () {
        current++;
        const percent = (current / frames) * 100;
        fill.style.width = percent + '%';
        whiteText.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';

        if (current >= frames) {
            clearInterval(timer);
        }
    }, interval);
}
