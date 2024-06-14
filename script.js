const simButton = document.getElementById('simButton');
const naoButton = document.getElementById('naoButton');
const imagem = document.getElementById('imagem');
const imagemPopup = document.getElementById('imagemPop-up');
const fecharPopup = document.getElementById('fecharPop-up');

let posicaoNao = 0;

naoButton.addEventListener('click', () => {
    posicaoNao++;

    if (posicaoNao >= 5) {
        imagemPopup.style.display = 'block';
        naoButton.disabled = true; // Desativa o botão "Não"
    } else {
        naoButton.style.left = `${posicaoNao * 50}px`; // Move o botão "Não"
    }
});

fecharPopup.addEventListener('click', () => {
    imagemPopup.style.display = 'none';
    posicaoNao = 0; // Reinicia a contagem de cliques
    naoButton.disabled = false; // Reabilita o botão "Não"
});

simButton.addEventListener('click', () => {
    // Insira o código para abrir a conversa no WhatsApp
    window.location.href = "https://api.whatsapp.com/send?phone=5561991785665";
});