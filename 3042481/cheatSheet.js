/* Configuração inicial e contexto */
// Obtém o elemento HTML e o pincel de desenho (contexto 2d)
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Dimensões do Canvas (Evite alterar via CSS para não distorcer)
canvas.width = 600;
canvas.height = 400;

/* O sistema de coordenadas */
// Origem (0,0): Canto superior esquerdo da tela.
// Eixo X: Cresce para a direita.
// Eixo Y: Cresce para baixo.

/* Formas primitivas - retângulos */
ctx.fillRect(x, y, largura, altura);     // Desenha retângulo preenchido
ctx.strokeRect(x, y, largura, altura);   // Desenha apenas o contorno
ctx.clearRect(x, y, largura, altura);    // Apaga/Limpa a área especificada

/* Gerenciamento de cores e estilos */
// Cores (como em css)
ctx.fillStyle = '#ff0000';       // Cor de preenchimento (Hex, RGB, etc)
ctx.strokeStyle = 'blue';        // Cor do contorno / linhas
// Propriedades de Linha
ctx.lineWidth = 5;               // Espessura da linha em pixels
ctx.lineCap = 'round';           // Formato do fim da linha ('butt', 'round', 'square')
ctx.lineJoin = 'round';          // Formato das quinas ('miter', 'round', 'bevel')

/* Caminhos personalizados */
ctx.beginPath();                 // Inicia um novo caminho (levanta a caneta)
ctx.moveTo(x, y);                // Move a caneta para o ponto inicial (sem desenhar)
ctx.lineTo(x, y);                // Traça uma linha imaginária até o ponto (x,y)
ctx.closePath();                 // Fecha a forma ligando o último ponto de volta ao inicial
ctx.stroke();                    // Torna as linhas visíveis na tela
ctx.fill();                      // Preenche o polígono desenhado

/* Efeitos visuais (estética extra) */
// Adiciona efeito de aura/brilho ou sombra projetada nos desenhos subsequentes
ctx.shadowBlur = 15;             // Intensidade do desfoque do brilho
ctx.shadowColor = '#00ffff';     // Cor do brilho mágico ou sombra

