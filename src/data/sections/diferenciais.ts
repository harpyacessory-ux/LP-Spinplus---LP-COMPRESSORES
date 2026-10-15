/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Spinplus: layout aprovado pelo cliente em 15/10/2026 — título de tecnologia com as
 * duas marcas, visual do compressor aberto com o airend, 4 cards de tecnologia
 * (clicáveis, abrem o atendimento) e os 5 diferenciais do briefing na base. São 5
 * exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

// Recortado do modelo de layout enviado pelo usuário: compressor Nirvana aberto e airend em corte.
import visual from '@assets/diferenciais/tecnologia-ingersoll.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export interface Feature extends Reason {
  /** Vira o `data-cta` do card: `diferenciais-{id}`. */
  id: string
}

export const why = {
  eyebrow: 'Tecnologia e eficiência',
  /** Cada item é uma linha do H2 (quebra forçada no desktop). */
  titleLines: ['Tecnologia em ar comprimido', 'para elevar sua operação'],
  text: 'Soluções Ingersoll Rand para mais eficiência, confiabilidade e produtividade.',
  visual: {
    src: visual,
    alt: 'Compressor de parafuso Ingersoll Rand aberto ao lado de um airend em corte, com os rotores à mostra',
  },
  features: [
    {
      id: 'parafuso',
      icon: 'compressor',
      title: 'Compressores de parafuso',
      description: 'Soluções robustas e confiáveis para aplicações industriais.',
    },
    {
      id: 'velocidade',
      icon: 'trend-up',
      title: 'Velocidade fixa ou variável',
      description: 'Flexibilidade para atender às demandas da sua operação.',
    },
    {
      id: 'vsd',
      icon: 'gears',
      title: 'VSD: menor consumo de energia',
      description: 'Tecnologia que reduz o consumo e aumenta a eficiência.',
    },
    {
      id: 'airend',
      icon: 'hard-hat',
      title: 'Airend de última geração',
      description: '8% mais eficiência e 13% mais fluxo de ar.',
    },
  ],
  reasons: [
    {
      icon: 'trophy',
      title: 'Experiência consolidada',
      description: 'Mais de 20 anos dedicados ao ar comprimido.',
    },
    {
      icon: 'target',
      title: 'Atuação especializada',
      description: 'Geração e tratamento de ar.',
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
      icon: 'factory',
      title: 'Portfólio industrial',
      description: 'Soluções de velocidade fixa, VSD e tratamento integrado.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  visual: Photo
  features: readonly [Feature, Feature, Feature, Feature]
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
