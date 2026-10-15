/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * De 6 a 24 itens com foto e nome. `description` é tudo ou nada: ou todos os
 * itens têm a frase, ou nenhum tem — o componente recusa a mistura no build.
 *
 * `groups` vazio deixa a vitrine em grade. Com grupos, cada um vira uma
 * prateleira própria, com a logo (ou o nome) no cabeçalho.
 *
 * Spinplus: os 12 equipamentos da lista do cliente (A01–A12 do briefing), num grupo
 * só, sem logo de terceiro (decisão pendente) e sem descrição — nenhum item tem ficha
 * técnica, então nenhum ganha frase. Nomes encurtados para caber em 40 caracteres,
 * mantendo série, faixa de potência e versão.
 */
import type { Photo } from '@data/types'

import produto01 from '@assets/vitrine/produto-01.jpg'
import produto02 from '@assets/vitrine/produto-02.jpg'
import produto03 from '@assets/vitrine/produto-03.jpg'
import produto04 from '@assets/vitrine/produto-04.jpg'
import produto05 from '@assets/vitrine/produto-05.jpg'
import produto06 from '@assets/vitrine/produto-06.jpg'
import produto07 from '@assets/vitrine/produto-07.jpg'
import produto08 from '@assets/vitrine/produto-08.jpg'
import produto09 from '@assets/vitrine/produto-09.jpg'
import produto10 from '@assets/vitrine/produto-10.jpg'
import produto11 from '@assets/vitrine/produto-11.jpg'
import produto12 from '@assets/vitrine/produto-12.jpg'
import destaque from '@assets/vitrine/destaque-ingersoll.jpg'

/** Marca, linha ou família. `logo` é opcional: sem ela, vale o nome. */
export interface ShowcaseGroup {
  id: string
  label: string
  logo: Photo | null
}

export interface ShowcaseItem {
  id: string
  /** id de um grupo de `groups`, ou '' quando a vitrine não é agrupada. */
  group: string
  title: string
  /** 1 frase, 50–90 caracteres. '' quando a vitrine é só foto e nome. */
  description: string
  photo: Photo
}

const alt = (model: string) => `Compressor de parafuso Ingersoll Rand ${model}`

export const showcase = {
  eyebrow: 'Portfólio Ingersoll Rand',
  /** O `\n` marca a quebra de linha do título no layout aprovado pelo cliente. */
  title: 'Compressores de parafuso\npara cada demanda',
  text: 'Série R e Next Generation R Series, com velocidade fixa ou VSD e versões com tratamento de ar integrado. Consulte o modelo para a sua aplicação.',
  /** Foto decorativa no canto superior direito (desktop), do layout aprovado pelo cliente. */
  feature: { src: destaque, alt: '' },
  groups: [{ id: 'ingersoll-rand', label: 'Ingersoll Rand', logo: null }],
  items: [
    {
      id: 'rs15-22',
      group: 'ingersoll-rand',
      title: 'RS15-22',
      description: '',
      photo: { src: produto01, alt: alt('RS15-22') },
    },
    {
      id: 'vsd-r-series-30-37',
      group: 'ingersoll-rand',
      title: 'VSD R Series 30-37 kW lubrificado',
      description: '',
      photo: { src: produto02, alt: alt('VSD Next Generation R Series de 30-37 kW') },
    },
    {
      id: 'serie-r-4-11-tratamento',
      group: 'ingersoll-rand',
      title: 'Série R 4-11 kW com tratamento de ar',
      description: '',
      photo: { src: produto03, alt: alt('Série R de 4-11 kW com tratamento de ar integrado') },
    },
    {
      id: 'serie-r-15-22',
      group: 'ingersoll-rand',
      title: 'Série R 15-22 kW (20-30 HP)',
      description: '',
      photo: { src: produto04, alt: alt('Série R de 15-22 kW, 20 a 30 HP, lubrificado') },
    },
    {
      id: 'vsd-r-series-30-37-ar-integrado',
      group: 'ingersoll-rand',
      title: 'VSD R Series 30-37 kW com ar integrado',
      description: '',
      photo: {
        src: produto05,
        alt: alt('VSD Next Generation R Series de 30-37 kW com sistema de ar integrado'),
      },
    },
    {
      id: 'vsd-4-11',
      group: 'ingersoll-rand',
      title: 'VSD 4-11 kW lubrificado',
      description: '',
      photo: { src: produto06, alt: alt('VSD de 4-11 kW lubrificado') },
    },
    {
      id: 'vsd-r-series-15-22',
      group: 'ingersoll-rand',
      title: 'VSD R-Series 15-22 kW com óleo',
      description: '',
      photo: { src: produto07, alt: alt('VSD com óleo de 15-22 kW Next Generation R-Series') },
    },
    {
      id: 'r-series-30-37-vsd-hrm',
      group: 'ingersoll-rand',
      title: 'R Series 30-37 kW VSD HRM',
      description: '',
      photo: { src: produto08, alt: alt('Next Generation R Series 30-37 kW Oil-Flooded VSD HRM') },
    },
    {
      id: 'serie-r-47-75',
      group: 'ingersoll-rand',
      title: 'Série R 47-75 kW',
      description: '',
      photo: { src: produto09, alt: alt('Série R de 47-75 kW') },
    },
    {
      id: 'r-series-200-250',
      group: 'ingersoll-rand',
      title: 'R Series 200-250 kW lubrificado',
      description: '',
      photo: { src: produto10, alt: alt('Next Generation R Series de 200-250 kW lubrificado') },
    },
    {
      id: 'r-series-315-355',
      group: 'ingersoll-rand',
      title: 'R-Series 315-355 kW lubrificado',
      description: '',
      photo: { src: produto11, alt: alt('Next Generation R-Series lubrificado de 315 a 355 kW') },
    },
    {
      id: 'serie-r-47-75-tratamento',
      group: 'ingersoll-rand',
      title: 'Série R 47-75 kW com tratamento de ar',
      description: '',
      photo: { src: produto12, alt: alt('Série R de 47-75 kW com tratamento de ar integrado') },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  feature: Photo
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
