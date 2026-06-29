const shark = document.querySelector('.shark');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');


let isGameOver = false;

const jump = (event) => {
    
    if (event.type === 'keydown') {
        if (event.code !== 'Space') return;
        event.preventDefault();
    }

    
    if (isGameOver) {
        restart();
        return;
    }

    
    if (!shark.classList.contains('jump')) {
        shark.classList.add('jump');
        setTimeout(() => { 
            shark.classList.remove('jump');
        }, 500);
    }
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const sharkPosition = +window.getComputedStyle(shark).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    
    if (pipePosition <= 100 && pipePosition > 0 && sharkPosition < 60) {
        isGameOver = true;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        shark.style.animation = 'none';
        shark.style.bottom = `${sharkPosition}px`;

        shark.src = imgs/shurark.png';
        shark.style.width = '200px';
        shark.style.marginLeft = '35px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);


const restart = () => {
    window.location.reload();
}


document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


restartButton.addEventListener('click', restart);
