# Selo "Criado por NorthSail"

Snippet HTML autónomo para colocar em sites externos. Não depende do CSS do
site anfitrião — todos os estilos são inline.

## Como usar

1. Abra o ficheiro [`badge.html`](./badge.html) e copie o bloco `<a>...</a>`.
2. Cole no HTML do seu site, no sítio onde quer que o selo apareça
   (geralmente no rodapé, antes do fecho da `</body>`).
3. Guarde e publique. O selo abre `https://north-sail.com` num separador
   novo quando o visitante clica.

## Personalização

- **Alinhamento**: envolva o snippet num contentor com `text-align: center;`
  (ou `right`/`left`) para mudar o alinhamento.
- **Tema escuro**: troque a cor `#7A8699` por `#C2CCDA` e o hover `#0A2540`
  por `#FFFFFF` no `style` e nos handlers `onmouseover`/`onmouseout`.
- **Tamanho do logótipo**: ajuste `height:18px` e `width="18"` para a altura
  desejada (recomenda-se entre 16 e 24 px).

## Notas

- O logótipo é servido por `https://north-sail.com/logo.png`; o site externo
  só precisa de acesso à internet.
- O `<a>` usa `target="_blank"` com `rel="noopener"` para não dar acesso ao
  objeto `window` da página anfitriã.
