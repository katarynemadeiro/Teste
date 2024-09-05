const OptionImages = document.querySelectorAll('.option-img img');
const container = document.querySelector('.container');
const resulText = document.querySelector('.result-text');
const userResult = document.querySelector('.user-result img');
const pcResult = document.querySelector('.pc-result img');

// Corrigindo a ordem no array
const pcimages = ['pedra.png', 'papel.png', 'tesoura.png']; // Ordem correta: Pedra, Papel, Tesoura

OptionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick);
});

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const clickedIndex = Array.from(OptionImages).indexOf(clickedImage);

    // Animação de início
    container.classList.add('start');
    resulText.innerHTML = '. . .';

    setTimeout(() => {
        // Animação finalizada
        container.classList.remove('start');

        // Mostrar escolha do usuário
        userResult.src = pcimages[clickedIndex];

        // Gerar escolha aleatória do computador
        const randomNumber = Math.floor(Math.random() * pcimages.length);
        pcResult.src = pcimages[randomNumber];

        // Determinar o resultado
        if (clickedIndex === randomNumber) {
            resulText.innerHTML = 'Empate!';
        } else if (
            (clickedIndex === 0 && randomNumber === 2) || // Pedra ganha de Tesoura
            (clickedIndex === 1 && randomNumber === 0) || // Papel ganha de Pedra
            (clickedIndex === 2 && randomNumber === 1)    // Tesoura ganha de Papel
        ) {
            resulText.innerHTML = 'Você ganhou!';
        } else {
            resulText.innerHTML = 'Você perdeu!';
        }

    }, 2000); // 2000 milissegundos = 2s
}

