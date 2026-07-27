# María 365 — Criativos de Anúncio

## Estrutura de Pastas

```
anuncios/
├── conjunto-1-dor/              # Ângulo: "Você começa e para"
│   ├── criativo-1a-texto-direto.html    # Texto direto + features
│   ├── criativo-1b-depoimento.html      # Depoimento social proof
│   └── criativo-1c-escassez.html        # Urgência + preço
│
└── conjunto-2-desejo/           # Ângulo: "Comece hoje"
    ├── criativo-2a-beneficio.html        # Benefício emocional
    ├── criativo-2b-audio.html           # Diferencial áudio
    └── criativo-2c-carrossel/           # Carrossel 5 slides
        ├── slide-1.html
        ├── slide-2.html
        ├── slide-3.html
        ├── slide-4.html
        └── slide-5.html
```

## Como Exportar como PNG

### Opção 1: Chrome DevTools (Recomendado)
1. Abra o arquivo `.html` no Chrome
2. Pressione `F12` para abrir DevTools
3. Pressione `Ctrl+Shift+P` e digite "screenshot"
4. Selecione "Capture full size screenshot"
5. Salve o PNG

### Opção 2: Extensão GoFullPage
1. Instale a extensão GoFullPage no Chrome
2. Abra o arquivo `.html`
3. Clique no ícone da extensão
4. Baixe o PNG

### Opção 3: Puppeteer (Automático)
```bash
node export-criativos.js
```

## Especificações

| Propriedade | Valor |
|-------------|-------|
| Resolução | 1080x1080px |
| Formato | PNG |
| Escala | 2x (alta qualidade) |
| Fontes | Playfair Display + Inter |
| Cores | Azul #1a365d, Dourado #c9a84c |

## Conjuntos de Anúncio

### Conjunto 1: DOR
- **Público:** Pessoas que oram mas não mantêm consistência
- **Ângulo:** Identificar a dor e apresentar a solução
- **Bid cap:** $12.50/dia

### Conjunto 2: DESEJO
- **Público:** Pessoas que buscam conteúdo religioso
- **Ângulo:** Mostrar o benefício e o diferencial
- **Bid cap:** $12.50/dia
