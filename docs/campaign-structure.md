# María 365 — Estrutura de Campanha Meta Ads

## Visão Geral

| Item | Valor |
|------|-------|
| Objetivo | Tráfego (link para Typebot) |
| Orçamento total | $25/dia |
| Estratégia de lance | Lance máximo (Bid Cap) |
| Bid Cap por conjunto | $12.50/dia |
| Plataformas | Facebook + Instagram |
| Posições | Feed, Stories, Reels |

---

## CAMPAIGN: María 365 — Lançamento

### Configurações da Campanha

| Campo | Valor |
|-------|-------|
| Nome | María 365 — Lançamento |
| Objetivo | Tráfego |
| Tipo de campanha | Campanha com orçamento da conta (Advantage+) |
| Orçamento diário | $25.00 |
| Fim da campanha | Sem data de término |

---

## CONJUNTO 1: DOR — "Você começa e para"

### Configurações do Conjunto

| Campo | Valor |
|-------|-------|
| Nome | Conjunto 1 — Dor |
| Orçamento diário | $12.50 |
| Lance máximo (Bid Cap) | $12.50 |
| Calendário | Entrega contínua |
| Início | Imediato |

### Público-Alvo

| Filtro | Configuração |
|--------|--------------|
| **Localização** | Brasil, México, Colômbia, Argentina, Chile, Peru, Espanha |
| **Idade** | 25-65 anos |
| **Gênero** | Todos |
| **Idioma** | Espanhol, Português (Brasil) |
| **Interesses** | Religião e espiritualidade, Fé católica, Oração, Maria (Mãe de Jesus), Rosário, Devocionário |
| **Comportamento** | Compradores de dispositivos móveis, Usuários de aplicativos |
| **Exclusões** | Pessoas que já compraram (se tiver pixel de conversão) |

### Criativos

| Criativo | Arquivo | Ângulo |
|----------|---------|--------|
| 1A | `criativo-1a-texto-direto.html` | Texto direto + features |
| 1B | `criativo-1b-depoimento.html` | Depoimento social proof |
| 1C | `criativo-1c-escassez.html` | Urgência + preço |

### Copy do Anúncio (1A — Texto Direto)

**Primary Text:**
Não é falta de fé. É falta de estrutura.

María 365 te dá:
→ Uma oração mariana por dia
→ Áudio pra escutar em qualquer lugar
→ Reflexão + versículo bíblico
→ Acompanhamento do progresso

365 dias. Um caminho completo. No seu celular.

7 dias grátis. Depois $7.90/mês.

**Headline:**
Por que você abandona a oração no dia 10?

**Description:**
Comece sua prova grátis agora

**CTA button:**
Saiba mais

**URL:**
https://typebot.co/maria365

---

## CONJUNTO 2: DESEJO — "Comece hoje"

### Configurações do Conjunto

| Campo | Valor |
|-------|-------|
| Nome | Conjunto 2 — Desejo |
| Orçamento diário | $12.50 |
| Lance máximo (Bid Cap) | $12.50 |
| Calendário | Entrega contínua |
| Início | Imediato |

### Público-Alvo

| Filtro | Configuração |
|--------|--------------|
| **Localização** | Brasil, México, Colômbia, Argentina, Chile, Peru, Espanha |
| **Idade** | 21-55 anos |
| **Gênero** | Todos |
| **Idioma** | Espanhol, Português (Brasil) |
| **Interesses** | Religião e espiritualidade, Fé católica, Oração, Bíblia, Igreja, Jesus Cristo, Maria |
| **Comportamento** | Usuários de smartphones, Engajamento com conteúdo religioso |
| **Exclusões** | Pessoas que já compraram |

### Criativos

| Criativo | Arquivo | Ângulo |
|----------|---------|--------|
| 2A | `criativo-2a-beneficio.html` | Benefício emocional |
| 2B | `criativo-2b-audio.html` | Diferencial áudio |
| 2C | `criativo-2c-carrossel/` (5 slides) | Carrossel completo |

### Copy do Anúncio (2A — Benefício)

**Primary Text:**
Imagine: ao invés de pegar o celular no piloto automático, você abre María 365, escuta uma oração em voz alta e começa o dia com paz.

365 orações marianas — uma por dia
Áudio incluído — escute em qualquer lugar
Reflexão + versículo — pra nutrir sua fé

Não é sobre ser perfeito. É sobre começar.

7 dias grátis. Teste sem compromisso.

**Headline:**
E se sua manhã começasse com María?

**Description:**
Comece sua prova grátis de 7 dias

**CTA button:**
Saiba mais

**URL:**
https://typebot.co/maria365

---

## ESTRUTURA DE RASTREAMENTO

### Pixel Meta

| Evento | Tipo | Uso |
|--------|------|-----|
| PageView | Padrão | Rastrear visitas |
| ViewContent | Padrão | Quando alguém clica no anúncio |
| CompleteRegistration | Conversão | Quando completa o cadastro no Typebot |
| Purchase | Conversão | Quando compra no Hotmart |

### UTM Parameters

```
utm_source=facebook
utm_medium=paid
utm_campaign=maria365_lancamento
utm_content={ad_name}
utm_term={adset_name}
```

### Parâmetros de URL do Typebot

```
https://typebot.co/maria365?utm_source=facebook&utm_medium=paid&utm_campaign=maria365_lancamento&utm_content={{ad.name}}&utm_term={{adset.name}}
```

---

## MÉTRICAS DE SUCESSO

### Métricas por Conjunto

| Métrica | Meta | Ação se não atingir |
|---------|------|---------------------|
| CTR (Link) | > 1.5% | Testar novos criativos |
| CPC (Link) | < $0.50 | Ajustar lance ou público |
| CPM | < $15 | Revisar segmentação |
| Conversão (Typebot) | > 2% | Otimizar landing page |
| ROAS | > 2.0 | Escalar ou pausar |

### Frequência máxima

- **Máximo:** 3.0 (se ultrapassar, rotacionar criativos)

---

## CRONOGRAMA DE OTIMIZAÇÃO

| Dia | Ação |
|-----|------|
| 1-3 | Deixar rodar, não mexer |
| 4 | Verificar CTR — se < 1%, pausar criativo |
| 7 | Analisar CPC e conversão |
| 14 | Escalar conjunto que performa melhor |
| 21 | Testar novos criativos se necessário |
| 30 | Reavaliar estratégia |

---

## DICAS IMPORTANTES

1. **Não mexa nos primeiros 3 dias** — o algoritmo precisa de tempo para aprender
2. **Aguarde pelo menos 50 conversões** antes de escalar
3. **Teste A/B com pelo menos $100** por variante
4. **Rotacione criativos** se a frequência passar de 3.0
5. **Monitore o ROAS** diariamente mas não faça mudanças impulsivas

---

## CHECKLIST DE LANÇAMENTO

- [ ] Pixel Meta instalado no Typebot
- [ ] UTM Parameters configurados
- [ ] Eventos de conversão configurados
- [ ] Criativos criados (6 imagens + 1 vídeo)
- [ ] Copies escritas e revisadas
- [ ] URLs de destino testadas
- [ ] Formas de pagamento configuradas
- [ ] Orçamento aprovado
- [ ] Campanha criada e pausada para revisão
- [ ] Lançar!
