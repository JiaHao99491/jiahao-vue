export const sizes = ['xs', 'sm', 'md', 'lg'] as const
export type Sizes = (typeof sizes)[number]
