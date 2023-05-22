import type { ShortcutsType } from '../types'

export const card: ShortcutsType = {
  name: 'card',
  value:
    'rounded-[var(--box)] relative flex flex-col [&.card-side]:flex-row '
    + '[&.bordered]:border [&.bordered]:border-light-base-200 dark:[&.bordered]:border-dark-base-200 '
    + '[&.card-body]:[&.compact]:p-4 [&.card-body]:[&.compact]:text-sm '
    + 'before:[&.image-full]:z-10 before:[&.image-full]:opacity-75 before:[&.image-full]:rounded-[var(--box)] '
    + 'before:[&.image-full]:bg-light-neutral dark:before:[&.image-full]:bg-dark-neutral '
    + '[&:where(figure)]:[&.image-full]:overflow-hidden [&:where(figure)]:[&.image-full]:rounded-inherit '
    + 'focus:outline-none',
}

export const cardBordered: ShortcutsType = {
  name: 'card-bordered',
  value:
    'border border-light-base-200 dark:border-dark-base-200 ',
}

export const cardBody: ShortcutsType = {
  name: 'card-body',
  value:
    'flex flex-col gap-2 p-[var(--padding-card)] flex-auto '
    + '[&:where(p)]:flex-grow',
}

export const cardTitle: ShortcutsType = {
  name: 'card-title',
  value:
    'flex items-center gap-2 text-xl font-semibold',
}

export const cardActions: ShortcutsType = {
  name: 'card-actions',
  value:
    'flex flex-wrap items-start gap-2',
}
