/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Spinplus: frase de autoridade e 5 diferenciais do briefing. Imagens provisórias, do
 * site do cliente: o cenário é uma sala de compressores e, sem foto de pessoa da
 * equipe, o recorte é um compressor Ingersoll Rand. Trocar quando chegar a foto.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Ar comprimido para', 'sua produtividade'],
  text: `Mais de 20 anos dedicados a ar comprimido, com foco em geração e tratamento de ar. A ${site.brandShort} distribui compressores Ingersoll Rand no estado do Rio de Janeiro, com técnicos certificados pela fabricante.`,
  scene: {
    src: cenario,
    alt: 'Sala de compressores de parafuso com tubulação de ar comprimido',
  },
  person: {
    src: pessoa,
    alt: 'Compressor de parafuso Ingersoll Rand da Série R',
  },
  reasons: [
    {
      icon: 'clock',
      title: 'Experiência consolidada',
      description: 'Mais de 20 anos dedicados a ar comprimido.',
    },
    {
      icon: 'layers',
      title: 'Atuação especializada',
      description: 'Empresa focada em geração e tratamento de ar.',
    },
    {
      icon: 'map-pin',
      title: 'Distribuição no RJ',
      description: 'Distribuidor Ingersoll Rand no estado.',
    },
    {
      icon: 'badge-check',
      title: 'Técnicos certificados',
      description: 'Equipe certificada pela Ingersoll Rand.',
    },
    {
      icon: 'sliders',
      title: 'Portfólio industrial',
      description: 'Séries com velocidade fixa, VSD e tratamento integrado.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
