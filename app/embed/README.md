# NorthSail — Embed do crédito "Feito por NorthSail"

Widget de **uma linha** que adiciona o crédito da NorthSail (logótipo + nome com animação subtil) ao rodapé de **qualquer site de cliente**. O script é servido por esta app, por isso é **controlado centralmente**: muda-se aqui uma vez e propaga para todos os clientes, sem tocar em cada site.

- **Endpoint:** `GET /embed/credit.js`
- **Código:** `app/embed/credit.js/route.ts` (route handler que devolve JavaScript)
- **URL público:** `https://www.north-sail.com/embed/credit.js`

> **Regra de ouro:** o site do cliente **não** deve ter o badge hardcoded (componente + CSS copiados). Deve carregar **só** este script. É isso que permite atualizar tudo de um sítio só. Se já existir uma versão hardcoded, ver a secção **Migrar de componente hardcoded** no fim.

---

## O que é (em 30 segundos)

O cliente cola uma linha no site dele. Essa linha carrega o nosso `credit.js`, que cria o badge e os estilos no DOM da página. Como o ficheiro vive nesta app, qualquer alteração (texto, link, cores, ligar/desligar) é feita **só aqui** e aparece em todos os sites.

```
Site do cliente  ──(1 linha <script>)──►  /embed/credit.js (esta app)
                                              │
                          editar + deploy ────┘  propaga a TODOS (~5 min, cache)
```

---

## Como o dev do cliente implementa

### Opção A — simples (badge aparece logo a seguir ao `<script>`)

Colar no rodapé, antes de fechar o `</body>`:

```html
<script
  src="https://www.north-sail.com/embed/credit.js"
  data-client="nome-do-cliente"
  async
></script>
```

### Opção B — recomendada (posição controlada)

Pôr um contentor vazio onde quiser o badge e apontar o script para ele com `data-target`:

```html
<div id="northsail-credit"></div>
<script
  src="https://www.north-sail.com/embed/credit.js"
  data-client="nome-do-cliente"
  data-target="northsail-credit"
  data-variant="light"
  async
></script>
```

Funciona em **qualquer stack** (HTML estático, WordPress, Wix/Squarespace com bloco de código HTML, React, Vue, etc.) — é só um `<script>`.

### React / Next.js (com `next/script`)

Em apps React, `document.currentScript` não fica disponível, por isso usa **sempre** `data-target` com um contentor:

```tsx
"use client";

import Script from "next/script";

export function NorthSailCredit() {
  return (
    <>
      <div id="northsail-credit" />
      <Script
        src="https://www.north-sail.com/embed/credit.js"
        data-client="nome-do-cliente"
        data-target="northsail-credit"
        data-variant="light"
        strategy="afterInteractive"
      />
    </>
  );
}
```

---

## Atributos do `<script>`

| Atributo       | Obrigatório | Default               | Descrição                                                                                                                 |
| -------------- | ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `data-client`  | recomendado | `client-site`         | Identificador do cliente. Vai para o `utm_source` do link, para medir o tráfego de referência (ex.: em Google Analytics). |
| `data-variant` | não         | `light`               | `light` (fundos claros) ou `dark` (fundos escuros) — ajusta o gradiente para contraste.                                   |
| `data-label`   | não         | `Feito por NorthSail` | Texto do crédito. Em sites em inglês, usar `data-label="Made by NorthSail"`.                                              |
| `data-target`  | não         | —                     | `id` de um elemento onde renderizar. Sem ele, o badge é inserido logo a seguir ao `<script>`. Obrigatório em React.       |
| `async`        | recomendado | —                     | Carrega sem bloquear a renderização da página.                                                                            |

---

## O que o badge faz

- Injeta um `<style>` (uma única vez por página) e um `<a>` com logótipo SVG inline e o nome com gradiente da marca (navy → azul → teal) e um shimmer subtil ao passar o rato.
- Liga para `https://north-sail.com/?utm_source=<client>&utm_medium=footer&utm_campaign=made-by-northsail`, com `target="_blank"` e `rel="noopener"`.
- Respeita `prefers-reduced-motion` (desliga a animação).
- Sem dependências, sem imagens externas, sem cookies.

---

## Verificar que está a funcionar

1. Abrir `https://www.north-sail.com/embed/credit.js` no browser — deve devolver código JavaScript (não uma página 404/HTML).
2. No site do cliente, abrir as DevTools → separador **Network** e confirmar que `credit.js` carrega com `200`.
3. Confirmar que aparece um elemento `<a class="ns-credit">` no DOM (rodapé ou dentro do `data-target`).
4. Ao clicar, abrir o GA do site da NorthSail → **Aquisição** e ver a visita com `utm_medium = footer`.

---

## Como atualizar (lado NorthSail)

1. Editar `app/embed/credit.js/route.ts`.
2. Fazer deploy.
3. Em ~5 minutos (TTL da cache `Cache-Control: public, max-age=300, s-maxage=300`) todos os sites de cliente mostram a versão nova.

Para forçar atualização imediata num cliente: hard refresh (`Ctrl+F5`) e/ou purgar a cache do CDN.

### Evolução futura (opcional)

Hoje o conteúdo do badge está no próprio `route.ts` (muda com deploy). Para controlo **em tempo real e por cliente** (ligar/desligar, texto diferente por cliente, A/B), fazer o handler ler a configuração de uma base de dados/JSON usando o `data-client` (passado, por ex., como `?client=` num `fetch`). A estrutura já está pronta para isso.

---

## Migrar de componente hardcoded (ex.: Athlifyr)

Alguns sites têm uma versão antiga **copiada para dentro** (um componente `NorthSailCredit.tsx` + regras `.northsail-credit` no `globals.css`). Essa versão **não** se atualiza a partir da NorthSail e tende a divergir (logo/cores diferentes). Migrar assim:

1. Substituir o conteúdo do componente pelo exemplo da secção **React / Next.js** acima (passa a carregar o embed, com `data-client` do site).
2. Onde se usava `<NorthSailCredit label="..." />`, passa a ser `<NorthSailCredit />` (o texto vem do `data-label`; default `Feito por NorthSail`).
3. **Apagar** o bloco `.northsail-credit` do `globals.css` do cliente — o embed injeta os seus próprios estilos.
4. Remover o SVG/markup antigo do logótipo — o embed traz o logótipo oficial.

Resultado: o site passa a usar o badge central e fica sempre consistente e atualizável.

---

## Notas / limitações

- **Domínio canónico:** usar sempre o mesmo host no `src` e no link de destino — decidir entre `www.north-sail.com` e `north-sail.com` e manter em todo o lado (o site deve redirecionar um para o outro).
- **SEO:** o badge é injetado por JavaScript, por isso **não conta como backlink clássico** (o Google pode não o seguir). O valor é **marca + tráfego de referência** (medível via UTM). Para valor de backlink real, combinar com uma página `/clientes` (portefólio) no nosso site, com links contextuais.
- **Privacidade:** o widget não usa cookies nem recolhe dados; os parâmetros `utm_*` só identificam a origem da visita quando alguém clica no badge.
- **CORS:** o endpoint devolve `Access-Control-Allow-Origin: *`. Um `<script src>` não precisa de CORS, mas fica pronto caso o widget passe a fazer `fetch` de configuração.
