# Briefing da LP — registro da entrevista

> Preenchido pelo agente durante a leitura do briefing, a composição e a entrevista (PROMPT-PADRAO-LP, seções 0 a 0.3). Uma linha por entrada, atualizada assim que a resposta é confirmada. Se a sessão cair, o agente lê este arquivo e retoma da primeira entrada com status `pendente`.
>
> Status: `pendente` · `confirmado` · `default` (assumiu o valor padrão) · `pendência` (falta asset ou decisão do cliente) · `extraído` / `inferido` / `conflito` (vindos do documento de briefing, seção 0 do prompt)

## Origem: documento do cliente

| Campo                          | Valor                                                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arquivo recebido               | `docs/briefing-cliente/briefing_spinplus_compressores_parafuso.md` (saída do organizador; fora do git)                                                              |
| Tipo                           | A (estruturado)                                                                                                                                                     |
| Lido integralmente em          | `15/10/2026`                                                                                                                                                        |
| Referências visuais do cliente | nenhuma                                                                                                                                                             |
| Dados não aplicados por padrão | telefone (21) 2445-0001 · e-mail contato@spinplus.com.br · CTAs "Fale com nossa equipe", "Chame no WhatsApp" · formulário antigo (Nome, E-mail, Telefone, Empresa…) |

### Mapa de aproveitamento

| Bloco do briefing                     | Veredito   | Destino (seção da biblioteca ou campo) | Motivo                                                                           |
| ------------------------------------- | ---------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| VITRINE (12 equipamentos A01–A12)     | equivale   | `vitrine`                              | 12 itens com nome e foto, sem 3 características por item                         |
| FRASE DE AUTORIDADE                   | cabe em    | `diferenciais` (titleLines)            | "Ar comprimido para sua produtividade"                                           |
| DIFERENCIAIS (5)                      | equivale   | `diferenciais`                         | 5 itens completos                                                                |
| Setores do site (7)                   | cabe em    | `segmentos`                            | petróleo, petroquímica, energia, metalurgia, siderurgia, farmacêutica, alimentos |
| "Solicite um orçamento ou visita"     | cabe em    | `identificar` (intenção de cotação)    | vira os 6 dados de dimensionamento                                               |
| "8% mais eficiência e 13% mais fluxo" | descartado | —                                      | percentual sem modelo nem base de comparação; não publicar até comprovação       |
| "VSD opcional diminui o consumo"      | descartado | —                                      | falta saber quais modelos e em que condição                                      |
| Peças, assistência, locação, offshore | descartado | —                                      | fora da oferta dos dois grupos de anúncio desta LP                               |
| Formulário antigo e CTAs próprios     | descartado | —                                      | padrão: formulário via shortcode, vocabulário fixo de CTA                        |
| Telefone e e-mail                     | descartado | —                                      | padrão: só endereço no rodapé                                                    |

## Campanha

| Campo                      | Valor                                                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foco desta LP              | grupos ativos `compressor parafuso` e `Compressores Parafuso 20 a 50 HP`                                                                                    |
| Fora desta execução        | 4 palavras-chave pausadas: compressor de ar parafuso; compressor de ar grande; ingersoll compressores; compressor de ar comprimido industrial               |
| Palavra-chave principal    | `extraído` — **compressor parafuso** (H1 e title: "Compressores de parafuso para indústrias no RJ")                                                         |
| Origem                     | lista informada pelo usuário (37 palavras-chave ativas)                                                                                                     |
| Área atendida              | estado do Rio de Janeiro — no H1/title ("no RJ"), no texto do hero, no ponto "Ingersoll Rand no estado do RJ" e no selo "Distribuidor Ingersoll Rand no RJ" |
| Negativas de oferta        | ausente — lista não fornecida (`campaign.negatives` vazio)                                                                                                  |
| Negativas de intenção      | ausente                                                                                                                                                     |
| Claims proibidos           | nenhum informado (`campaign.forbidden` vazio). Percentuais de desempenho ficaram fora por falta de comprovação                                              |
| Divergência de vocabulário | `inferido` — cliente diz "compressores de ar de parafuso rotativo"; a campanha compra "compressor parafuso". H1 usa "Compressores de parafuso"              |

### Lacunas de palavra-chave (sem bloco que responda)

| Família                        | Situação                                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 20/30/40/50 HP; 15/22/30/37 kW | só "Série R 15-22 kW (20-30 HP)" tem equivalência confirmada. Falta ficha por modelo (HP, kW, vazão) |
| compressores elétricos         | não confirmado quais modelos são elétricos                                                           |
| unidade compressora            | não confirmado se é vendida separadamente                                                            |
| compressor industrial grande   | sem critério de porte; a vitrine mostra até 315-355 kW                                               |

## Composição

Aplicada em: `15/10/2026` · comando: `node scripts/compose.mjs --library "../Projetos B2/LP-STARTER-B2/sections" vitrine identificar segmentos diferenciais`

Aprovada pelo usuário em 15/10/2026 com a opção "inferir e publicar": Apoio e Prova entram com conteúdo inferido e marcado abaixo como pendente de validação, como na LP COAIR Compressores.

### Seções escolhidas

| Fase       | Seção          | Fundo     | Respiro     | Por que entrou (trecho do briefing)                                                                |
| ---------- | -------------- | --------- | ----------- | -------------------------------------------------------------------------------------------------- |
| oferta     | `vitrine`      | branco    | pt-20 pb-10 | "VITRINE de 12 itens em 1 grupo" — veredito `quase`, melhor estado da fase                         |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | intenção "Solicite um orçamento ou uma visita técnica"; 6 dados de dimensionamento `inferido`      |
| prova      | `segmentos`    | cinza-100 | pt-6 pb-16  | "petróleo, petroquímica, energia, metalurgia, siderurgia, farmacêutica e alimentos" — 7 + "Outras" |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | FRASE DE AUTORIDADE e DIFERENCIAIS `completo`                                                      |

### Seções descartadas

| Seção            | Motivo do descarte                                                        | O que faria ela entrar                          |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------- |
| `linhas`         | sem 3–4 famílias com 3 features e foto recortada; compete com a vitrine   | definição das famílias pelo cliente             |
| `especificacoes` | nenhuma ficha técnica por modelo                                          | tabela de 4–10 modelos (HP, kW, vazão, pressão) |
| `situacoes`      | sem gatilhos de contato do comercial                                      | 4–6 situações reais                             |
| `processo`       | sem etapas nem prazos; `identificar` já é o navy do apoio                 | processo de 4–6 etapas                          |
| `aplicacoes`     | sem fotos de operação                                                     | 4 contextos com foto 1200×900                   |
| `clientes`       | sem logos autorizados nem 3 números com fonte                             | 4–8 logos + 3 números                           |
| `perguntas`      | sem lista real de dúvidas do comercial                                    | 4–8 perguntas com resposta                      |
| `escopo`         | o argumento do briefing é lista de qualidades, não consolidação de compra | —                                               |

## Entradas do núcleo

| #   | Entrada                 | Status     | Valor                                                                                                                                                    | Referência no briefing / observação                                      |
| --- | ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | MARCA                   | extraído   | Spinplus                                                                                                                                                 | site institucional                                                       |
| 2   | MARCA_CURTA             | extraído   | Spinplus                                                                                                                                                 | "com a Spinplus"                                                         |
| 3   | PRODUTO_PRINCIPAL       | inferido   | Compressores de parafuso                                                                                                                                 | termo da campanha; cliente diz "de parafuso rotativo lubrificados"       |
| 4   | CONTEXTO_DE_USO         | inferido   | indústrias no RJ                                                                                                                                         | "Ajudamos as indústrias"; área atendida = estado do RJ                   |
| 5   | PUBLICO                 | pendência  | —                                                                                                                                                        | cargos compradores não informados                                        |
| 6   | HERO                    | confirmado | layout do cliente: "Compressores de / Ar de Parafuso Rotativo", texto, destaque e botão "Fale com nossa equipe e solicite um orçamento"; sem os 3 pontos | modelo enviado pelo usuário em 15/10/2026                                |
| 7   | MARCAS_ATENDIDAS        | confirmado | Ingersoll Rand por extenso e logo no header (decisão do cliente no modelo de 15/10/2026); carrossel removido                                             | logo do Wikimedia Commons (vetor), sem o texto "Distribuidor Autorizado" |
| 8   | SELOS_DE_CONFIANCA      | inferido   | Mais de 20 anos de mercado · Distribuidor Ingersoll Rand no RJ · Técnicos certificados                                                                   | site Quem Somos                                                          |
| 9   | ENDERECO                | extraído   | Estrada do Outeiro Santo, 631, Boxes 15/16 - Taquara, Rio de Janeiro - RJ                                                                                | rodapé da página Quem Somos; CEP não informado                           |
| 10  | URL_FINAL + PRIVACIDADE | pendência  | https://lp-spinplus-compressores.vercel.app · privacidade: https://spinplus.com.br/politica-de-privacidade/                                              | URL final da LP não informada; usada a do Vercel até haver domínio       |
| 11  | SHORTCODES              | default    | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                                                               | shortcodes não fornecidos                                                |
| 12  | WHATSAPP                | default    | sem botão flutuante                                                                                                                                      | (21) 2445-0001 não confirmado como WhatsApp                              |
| 13  | STACK + PUBLICACAO      | default    | Astro + Tailwind 4 · main → wp-build (workflow) · Vercel conectado ao GitHub                                                                             | —                                                                        |
| 14  | TOKENS_DE_COR + FONTE   | default    | padrão B2 (navy, laranja, Manrope)                                                                                                                       | sem manual de marca                                                      |
| 15  | CAMPANHA                | extraído   | compressor parafuso                                                                                                                                      | seção "Campanha e palavras-chave"                                        |

## Entradas por seção

### `vitrine` — Vitrine de produtos

| Item / campo | Status   | Valor                                                                                      | Observação                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Cabeçalho    | inferido | Portfólio Ingersoll Rand · "Compressores de parafuso para cada demanda"                    |                                                                               |
| Grupo        | default  | Ingersoll Rand, sem logo                                                                   | prateleira única                                                              |
| 12 itens     | extraído | nomes A01–A12 encurtados (≤ 40 caracteres), grafia corrigida em "Lublificados" e "Séria R" | descrição vazia em todos: nenhum item tem ficha                               |
| Fotos        | extraído | links A01–A12 do briefing, 300×300, levadas a 800×600                                      | **A02 = A05 e A09 = A12 são a mesma foto** — confirmar se são itens distintos |

### `identificar` — Painel de apoio

| Item / campo | Status   | Valor                                                          | Observação                |
| ------------ | -------- | -------------------------------------------------------------- | ------------------------- |
| Título       | inferido | Qual compressor a sua operação pede?                           |                           |
| 6 dados      | inferido | Pressão · Vazão · Potência · Regime · Tensão · Qualidade do ar | confirmar com o comercial |

### `segmentos` — Segmentos atendidos

| Item / campo         | Status   | Valor                                                                                  | Observação             |
| -------------------- | -------- | -------------------------------------------------------------------------------------- | ---------------------- |
| 7 setores            | extraído | Petróleo · Petroquímica · Energia · Metalurgia · Siderurgia · Farmacêutica · Alimentos | site institucional     |
| Descrições e bullets | inferido | usos típicos de ar comprimido em cada setor                                            | validar com a Spinplus |
| Fotos                | default  | sem foto: painel navy com ícone                                                        | opcional no manifesto  |

### `diferenciais` — Diferenciais

| Item / campo | Status   | Valor                                      | Observação                                      |
| ------------ | -------- | ------------------------------------------ | ----------------------------------------------- |
| Frase        | inferido | Ar comprimido para / sua produtividade     | briefing: "completo"                            |
| 5 motivos    | inferido | os 5 do briefing, sem alteração de sentido | distribuição e certificação: declaração do site |

## Assets

| Asset           | Arquivo                 | Status     | Observação                                                                                          |
| --------------- | ----------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| Logo            | `src/assets/LOGO.png`   | confirmado | logo horizontal do site (493×164, transparente), no header claro                                    |
| Foto do hero    | `src/assets/heroBg.png` | confirmado | sala de compressores RS 160 / RS 75 do site do cliente (1920×900), recorte 16:9 na moldura vermelha |
| Logos de marcas | —                       | removido   | entrada 7: só o nome                                                                                |

| Asset            | Arquivo                                | Status     | Observação                                                                    |
| ---------------- | -------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| Fotos da vitrine | `src/assets/vitrine/produto-01…12.jpg` | confirmado | links do briefing; originais 300×300                                          |
| Cenário          | `src/assets/diferenciais/cenario.jpg`  | provisório | sala de compressores do site do cliente                                       |
| Pessoa recortada | `src/assets/diferenciais/pessoa.png`   | provisório | **sem foto da equipe**: compressor R45 recortado do site no lugar. Pedir foto |

## Desvios do padrão

Aprovados pelo usuário em 15/10/2026, a partir do modelo de layout que enviou para o topo da página.

| Peça        | O que muda em relação ao padrão B2                                                                                                                                                                | Consequência                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Header      | fundo branco com filete vermelho, logo sem placa pendurada, selo "Mais de 20 anos de tradição / Suporte especializado" e logo Ingersoll Rand; **sem botão de cotação**                            | some o CTA `header-cta`; o CTA do hero fica logo abaixo                                            |
| Hero        | claro, duas colunas (texto + foto emoldurada), H1 "Compressores de Ar de Parafuso Rotativo", botão verde, faixa vermelha "Temos o COMPRESSOR IDEAL para a sua aplicação!"; **sem coluna de chat** | o shortcode do chat não aparece no hero; atendimento pelo botão `btn-slave-whats` (`hero-primary`) |
| Copy        | CTA e textos do material antigo do cliente ("Fale com nossa equipe…", "a melhor tecnologia…")                                                                                                     | o briefing recomendava não reaproveitá-los; prevalece o pedido do cliente                          |
| Cores       | vermelho da marca (`brand-red` #e52620) e verde do botão (`cta-green`) no header e no hero                                                                                                        | o restante da página segue com o laranja do padrão                                                 |
| Verificação | `scripts/check-lp.mjs` (A8 e especificação de LOGO/heroBg) passa a conferir as assinaturas desta versão                                                                                           | o CI continua bloqueando alteração acidental de Header e Hero                                      |

## Pendências para o cliente

1. Foto de alguém da equipe, de corpo inteiro, para recorte (Diferenciais).
2. Versão do logo Ingersoll Rand fornecida pelo cliente, se preferirem a oficial à do Wikimedia.
3. Validar os 6 dados de dimensionamento e os textos dos 7 setores.
4. Confirmar se A02/A05 e A09/A12 são equipamentos distintos (mesma foto) e enviar ficha por modelo (HP, kW, vazão, pressão), que abriria a tabela técnica para as buscas de 20/30/40/50 HP.
5. Hero sem coluna de chat: confirmar se o plugin abre o chat pelo botão (`btn-slave-whats`) ou se querem o chat embutido em outro ponto.
6. Número de WhatsApp, shortcodes do plugin e URL final da página.
7. Base técnica dos percentuais "8% mais eficiência / 13% mais fluxo", se quiserem usá-los.

## Aprovação

- [x] Composição apresentada e aprovada pelo usuário em: `15/10/2026` (opção "inferir e publicar")
- [ ] Conteúdo inferido validado pelo cliente em: —
- [x] Padrão B2 versão: `2.7.1`
