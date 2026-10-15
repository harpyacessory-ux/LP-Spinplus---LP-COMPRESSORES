/**
 * Dados da seção "Segmentos atendidos" (biblioteca B2, fase: prova).
 *
 * 8 abas exatas: 7 segmentos reais + o 8º obrigatoriamente "outras", que é a rota
 * de fuga de quem não se vê na lista. Cada aba tem 3 bullets.
 *
 * Spinplus: os 7 setores vêm do site do cliente (petróleo, petroquímica, energia,
 * metalurgia, siderurgia, farmacêutica e alimentos). Descrições e bullets são
 * inferidos — usos típicos de ar comprimido em cada setor — e aguardam validação.
 * Sem fotos: cada aba entra com o painel navy e o ícone.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

export interface Segment {
  id: string
  icon: IconName
  label: string
  description: string
  bullets: readonly [string, string, string]
  photo?: Photo
}

type Segments = readonly [Segment, Segment, Segment, Segment, Segment, Segment, Segment, Segment]

/** Tipados como `Segment` para `photo` continuar opcional mesmo sem nenhuma foto. */
const items: Segments = [
  {
    id: 'petroleo',
    icon: 'droplet',
    label: 'Petróleo',
    description:
      'Instrumentação, acionamento de válvulas e utilidades em bases e plantas de petróleo, onde o ar comprimido não pode faltar.',
    bullets: ['Instrumentação pneumática', 'Acionamento de válvulas', 'Utilidades de processo'],
  },
  {
    id: 'petroquimica',
    icon: 'cylinder',
    label: 'Petroquímica',
    description:
      'Ar de instrumentação e de processo para controle, purga e acionamentos em plantas de operação contínua.',
    bullets: ['Ar de instrumentação', 'Controle de processo', 'Purga e secagem'],
  },
  {
    id: 'energia',
    icon: 'zap',
    label: 'Energia',
    description:
      'Usinas e subestações com ar comprimido para comandos, limpeza de filtros e sistemas auxiliares.',
    bullets: ['Sistemas auxiliares', 'Limpeza de filtros', 'Acionamento de comandos'],
  },
  {
    id: 'metalurgia',
    icon: 'settings-2',
    label: 'Metalurgia',
    description:
      'Ferramentas pneumáticas, jateamento e automação em linhas de usinagem, conformação e acabamento de metais.',
    bullets: ['Ferramentas pneumáticas', 'Jateamento e pintura', 'Automação de linhas'],
  },
  {
    id: 'siderurgia',
    icon: 'flame',
    label: 'Siderurgia',
    description:
      'Demanda alta e contínua de ar para sopro, transporte pneumático e acionamentos em ambiente severo.',
    bullets: ['Sopro e resfriamento', 'Transporte pneumático', 'Cilindros e acionamentos'],
  },
  {
    id: 'farmaceutica',
    icon: 'clipboard-check',
    label: 'Farmacêutica',
    description:
      'Ar comprimido tratado para envase, embalagem e acionamentos em processos com exigência de qualidade do ar.',
    bullets: ['Envase e embalagem', 'Ar tratado e filtrado', 'Acionamentos pneumáticos'],
  },
  {
    id: 'alimentos',
    icon: 'utensils',
    label: 'Alimentos',
    description:
      'Linhas de processamento, envase e embalagem que dependem de ar limpo e seco em funcionamento contínuo.',
    bullets: ['Envase e embalagem', 'Sopro e limpeza', 'Transporte pneumático'],
  },
  {
    id: 'outras',
    icon: 'more-horizontal',
    label: 'Outras aplicações industriais',
    description:
      'Não encontrou o seu setor? A Spinplus indica o compressor de parafuso para diferentes aplicações que usam ar comprimido.',
    bullets: ['Dimensionamento técnico', 'Linhas Ingersoll Rand', 'Técnicos certificados'],
  },
]

export const segments = {
  eyebrow: 'Segmentos atendidos',
  title: 'Ar comprimido para cada setor',
  text: 'Compressores de parafuso para processos que dependem de ar comprimido contínuo, da instrumentação ao acionamento das linhas de produção.',
  items,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: Segments
}
