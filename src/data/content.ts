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

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

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

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Compressores Ingersoll Rand',
  title: `${site.product} para ${site.context}`,
  text: 'Compressores de ar de parafuso rotativo lubrificados, com velocidade fixa ou VSD, para indústrias no estado do Rio de Janeiro.',
  banner: {
    src: heroBg,
    alt: 'Compressor de parafuso Ingersoll Rand da Série R',
  },
  points: [
    { icon: 'clock', line1: 'Mais de 20 anos', line2: 'em ar comprimido' },
    { icon: 'map-pin', line1: 'Ingersoll Rand', line2: 'no estado do RJ' },
    { icon: 'badge-check', line1: 'Técnicos', line2: 'certificados' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
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
