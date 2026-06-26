# NorthSail — Embed do crédito "Feito por NorthSail"

Widget de uma linha que adiciona o crédito da NorthSail (logótipo + nome com animação subtil) ao rodapé de **qualquer site de cliente**. O script é servido por esta app, por isso é **controlado centralmente**: muda-se aqui uma vez e propaga para todos os clientes.

- **Endpoint:** `GET /embed/credit.js`
- **Código:** `app/embed/credit.js/route.ts` (route handler que devolve JS)
- **URL público:** `https://www.north-sail.com/embed/credit.js`

---

## O que é (em 30 segundos)

O cliente cola **uma linha** no site dele. Essa linha carrega o nosso `credit.js`, que cria o badge e os estilos no DOM do cliente. Como o ficheiro vive na nossa app, qualquer alteração ao badge (texto, link, cores, ligar/desligar) é feita **só aqui** e aparece em todos os sites — sem tocar em cada cliente.

```
Site do cliente  ──(1 linha <script>)──►  /embed/credit.js (a nossa app)
                                              │
                          edição + deploy ────┘  propaga a TODOS (~5 min, cache)
```

---

## Como o dev do cliente implementa

### Opção A — simples (badge aparece logo a seguir ao script)

Colar antes de fechar o `</body>`, no rodapé:

```html
<script
  src="https://www.north-sail.com/embed/credit.js"
  data-client="nome-do-cliente"
  async
></script>
```

### Opção B — recomendada (posição controlada)

Pôr um contentor onde quiser o badge e apontar o script para ele:

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

Funciona em **qualquer stack** (HTML estático, WordPress, Wix/Squarespace com bloco de código, React, Vue, etc.) — é só um `<script>`.

> Em React/Next.js também podes usar `next/script`:
>
> ```tsx
> import Script from "next/script";
> <Script
>   src="https://www.north-sail.com/embed/credit.js"
>   data-client="acme"
>   strategy="afterInteractive"
> />;
> ```

---

## Atributos do `<script>`

| Atributo       | Obrigatório | Default               | Descrição                                                                                                          |
| -------------- | ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `data-client`  | recomendado | `client-site`         | Identificador do cliente. Vai para o `utm_source` do link, para medir o tráfego de referência no Google Analytics. |
| `data-variant` | não         | `light`               | `light` (fundos claros) ou `dark` (fundos escuros) — ajusta o gradiente para contraste.                            |
| `data-label`   | não         | `Feito por NorthSail` | Texto do crédito.                                                                                                  |
| `data-target`  | não         | —                     | `id` do elemento onde renderizar. Sem ele, o badge é inserido logo a seguir ao `<script>`.                         |
| `async`        | recomendado | —                     | Carrega sem bloquear a página.                                                                                     |

---

## O que o badge faz

- Injeta `<style>` (uma vez) + um `<a>` com logótipo SVG inline e o nome com gradiente da marca (navy → azul → teal) e um shimmer subtil no hover.
- Link para `https://north-sail.com/?utm_source=<client>&utm_medium=footer&utm_campaign=made-by-northsail`, em `target="_blank"` + `rel="noopener"`.
- Respeita `prefers-reduced-motion` (desliga a animação).
- Sem dependências, sem imagens externas, sem cookies.

---

## Como atualizar (lado NorthSail)

1. Editar `app/embed/credit.js/route.ts`.
2. Deploy.
3. Em ~5 minutos (TTL da cache `Cache-Control: public, max-age=300, s-maxage=300`) todos os sites de cliente mostram a versão nova.

Para forçar atualização imediata num cliente: limpar a cache do browser / CDN.

### Evolução futura (opcional)

Hoje o conteúdo do badge está no próprio `route.ts` (muda com deploy). Para controlo **em tempo real e por cliente** (ligar/desligar, texto diferente por cliente, A/B), fazer o handler ir buscar a configuração a uma base de dados/JSON usando `?client=` ou o `data-client`. A estrutura já está pronta para isso.

---

## Notas / limitações

- **Domínio canónico:** usar sempre o mesmo host no `src` (decidir entre `www.north-sail.com` e `north-sail.com`).
- **SEO:** o badge é injetado por JavaScript, por isso **não conta como backlink clássico** (o Google pode não o seguir). O valor é **marca + tráfego de referência** (medível via UTM). Para valor de backlink real, combinar com uma página `/clientes` (portefólio) no nosso site com links contextuais.
- **Privacidade:** o widget não usa cookies nem recolhe dados; o `utm_*` só identifica a origem da visita quando alguém clica.
- **CORS:** o endpoint devolve `Access-Control-Allow-Origin: *` (um `<script src>` não precisa, mas fica pronto caso se passe a fazer `fetch`).
