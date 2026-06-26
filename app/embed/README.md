# Crédito NorthSail — como adicionar a um site

Cola **uma linha** no rodapé do site (antes de `</body>`):

```html
<script
  src="https://www.north-sail.com/embed/credit.js"
  data-client="nome-do-cliente"
  async
></script>
```

Para escolher onde aparece, usa um contentor e o `data-target`:

```html
<div id="northsail-credit"></div>
<script
  src="https://www.north-sail.com/embed/credit.js"
  data-client="nome-do-cliente"
  data-target="northsail-credit"
  async
></script>
```

## React / Next.js

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
        strategy="afterInteractive"
      />
    </>
  );
}
```

## Atributos

| Atributo       | Default               | Para quê                                         |
| -------------- | --------------------- | ------------------------------------------------ |
| `data-client`  | `client-site`         | Nome do cliente (entra no `utm_source` do link). |
| `data-variant` | `light`               | `light` ou `dark`, conforme o fundo.             |
| `data-label`   | `Feito por NorthSail` | Texto (ex.: `Made by NorthSail`).                |
| `data-target`  | —                     | `id` do elemento onde renderizar.                |
| `async`        | —                     | Carrega sem bloquear a página.                   |
