const btnRegras = document.getElementById("btn-regras");

btnRegras.addEventListener("click", () => {
    alert("Regras do Jogo:\n1. O jogo é jogado por duas ou mais pessoas.\n2. Cada jogador deve escolher um personagem famoso, como um ator, músico, político ou personagem de filme.\n3. O objetivo do jogo é adivinhar o personagem escolhido pelos outros jogadores.\n4. Para começar o jogo, um jogador é escolhido para fazer a primeira pergunta.\n5. As perguntas devem ser feitas de forma a que a resposta seja 'sim' ou 'não'.\n6. Se a resposta for 'sim', o jogador pode continuar fazendo perguntas até receber uma resposta 'não'.\n7. Se a resposta for 'não', o próximo jogador deve fazer uma pergunta.\n8. Os jogadores devem continuar fazendo perguntas até que um jogador adivinhe corretamente o personagem escolhido pelo jogador inicial.\n9. O jogador que adivinhar corretamente o personagem escolhido se torna o jogador inicial na próxima rodada.\n10. O jogo continua até que todos os jogadores tenham tido a chance de escolher um personagem e o vencedor seja declarado.");
});

window.onload = function () {
    const playButton = document.querySelector('.play-button a');
    playButton.classList.add('animate');
}