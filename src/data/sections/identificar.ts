/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Spinplus: os 6 itens são os dados de dimensionamento de um compressor de parafuso,
 * inferidos (o briefing não traz a lista do comercial). Confirmar com a Spinplus.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dimensionamento',
  title: 'Qual compressor a sua operação pede?',
  text: 'Não precisa ter todos os dados em mãos. Envie o que souber da sua operação e a equipe da Spinplus indica o compressor Ingersoll Rand adequado.',
  microcopy: 'Retorno com apoio técnico',
  items: [
    { icon: 'target', label: 'Pressão', hint: 'de trabalho, em bar' },
    { icon: 'move', label: 'Vazão', hint: 'consumo de ar' },
    { icon: 'bolt', label: 'Potência', hint: 'atual, em HP ou kW' },
    { icon: 'clock', label: 'Regime', hint: 'horas por dia' },
    { icon: 'zap', label: 'Tensão', hint: 'da rede elétrica' },
    { icon: 'droplet', label: 'Qualidade do ar', hint: 'secagem e filtragem' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
