
const botao = document.querySelector('#btn');

document.addEventListener('mousemove', verificarPosicao)

function verificarPosicao(event) {

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const posicaoBotao = botao.getBoundingClientRect();

    const botaoX = posicaoBotao.left + posicaoBotao.width / 2;
    const botaoY = posicaoBotao.top + posicaoBotao.height / 2;

    const diferencaX = mouseX - botaoX
    const diferencaY = mouseY - botaoY

    if (Math.abs(diferencaX) < posicaoBotao.width / 2 
    && Math.abs(diferencaY) < posicaoBotao.height / 2) {

        const novaPosicaoX = posicaoBotao.left - diferencaX;
        const novaPosicaoY = posicaoBotao.top - diferencaY;

        const limiteX = window.innerWidth;
        const limiteY = window.innerHeight;

// tenho a altura(h) e a largura(w) da viewport(nos limites), a altura(h) e a largura(w) do botao, a novaPosicao e as --coordenadas(x,y) = posicaoBotao-- do botão. 

        if (novaPosicaoX < 0) {
            novaPosicaoX = 0; 

// se a soma da nova posição com a largura entre as coordenadas do botao  for maior que o limite da largura: a nova posicao de x vai ser igual ao total da tela menos a largura entre as coordenadas do botao.

          } else if (novaPosicaoX + posicaoBotao.width > limiteX) {
            novaPosicaoX = limiteX - posicaoBotao.width; 
          }
          
          if (novaPosicaoY < 0) {
            novaPosicaoY = 0; 

// se a soma da novaPosicao com as medidas do botao (em y) for maior que o total do eixo y, a nova posição volta a ser o total do eixo menos as medidas do botao (eixo y)

          } else if (novaPosicaoY + posicaoBotao.height > limiteY) {
            novaPosicaoY = limiteY - posicaoBotao.height; 
          }

        botao.style.top = `${novaPosicaoY}px`;
        botao.style.left = `${novaPosicaoX}px`;
      } 
}

