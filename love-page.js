const container = document.querySelector('.container');

// Função que cria um LOVE que cai
function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');

    // Define se vai ser branco ou rosa aleatório
    const cor = Math.random() > 0.5 ? 'rosa' : 'branco';
    love.classList.add(cor);

    love.innerText = 'LOVE';

    // Posição horizontal aleatória
    love.style.left = Math.random() * window.innerWidth + 'px';

    // Velocidade aleatória (duração da queda)
    const duration = Math.random() * 3 + 2; // entre 2 e 5 segundos
    love.style.animationDuration = duration + 's';

    container.appendChild(love);

    // Remove depois que cair
    setTimeout(() => {
        love.remove();
    }, duration * 1000);
}

// Cria o efeito de chuva infinita
setInterval(createLove, 100);

// Faz coração aparecer e "explodir" quando clica
window.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = e.clientX - 10 + 'px';
    heart.style.top = e.clientY - 10 + 'px';

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 600);
});
