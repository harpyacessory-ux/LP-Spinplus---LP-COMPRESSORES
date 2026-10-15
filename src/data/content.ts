/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Spinplus — compressores de parafuso Ingersoll Rand (grupos de anúncio "compressor parafuso"
 * e "Compressores Parafuso 20 a 50 HP"). Copy do briefing_spinplus_compressores_parafuso.md.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'
import heroFundo from '@assets/hero-fundo.jpg'
import ingersollRand from '@assets/ingersoll-rand.png'

/* ------------------------------------------------------------------ tipos */

/** Trecho de texto com destaque: `strong` em negrito, `accent` em negrito vermelho. */
export type RichText = readonly (string | { strong: string } | { accent: string })[]

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

/**
 * Spinplus: header claro do layout aprovado pelo cliente em 15/10/2026 — logo, produto,
 * selo de tradição e a marca Ingersoll Rand à direita (uso da logo decidido pelo cliente).
 */
export const header = {
  tagline: site.product,
  badge: 'Mais de 20 anos de tradição',
  badgeSub: 'Suporte especializado',
  partner: {
    src: ingersollRand,
    alt: 'Ingersoll Rand',
  },
} as const satisfies {
  tagline: string
  badge: string
  badgeSub: string
  partner: Photo
}

/* -------------------------------------------------------------------- hero */

/** Hero claro do layout aprovado pelo cliente: texto à esquerda, foto emoldurada à direita. */
export const hero = {
  /** H1 completo: é nele que o `check:lp` procura a palavra-chave da campanha. */
  title: 'Compressores de Ar de Parafuso Rotativo',
  /** Trecho final do título, em vermelho na segunda linha (precisa existir dentro de `title`). */
  highlight: 'Ar de Parafuso Rotativo',
  text: [
    'Com mais de 20 anos de tradição, oferecemos ',
    { strong: 'a melhor tecnologia de compressores de ar lubrificados de parafuso' },
    ' rotativo da Ingersoll Rand.',
  ],
  callout: [
    'Ajudamos as indústrias oferecendo ar comprimido de excelência, eficiência, confiabilidade, ',
    { accent: 'redução de custos de manutenção e de energia!' },
  ],
  cta: 'Fale com nossa equipe e solicite um orçamento',
  /** Faixa vermelha que fecha o hero. */
  band: ['Temos o ', { strong: 'COMPRESSOR IDEAL' }, ' para a sua aplicação!'],
  banner: {
    src: heroBg,
    alt: 'Sala de compressores Ingersoll Rand RS 160 e RS 75 com secador, filtros e reservatório de ar',
  },
  /** Fundo do hero: galpão claro com janelas (decorativo, alt vazio), enviado pelo cliente. */
  background: { src: heroFundo, alt: '' },
} as const satisfies {
  title: string
  highlight: string
  text: RichText
  callout: RichText
  cta: string
  band: RichText
  banner: Photo
  background: Photo
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Informe pressão, vazão e regime da operação e a equipe da Spinplus indica o compressor Ingersoll Rand para a sua aplicação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'clock', label: 'Mais de 20 anos de mercado' },
    { icon: 'map-pin', label: 'Distribuidor Ingersoll Rand no RJ' },
    { icon: 'badge-check', label: 'Técnicos certificados' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
