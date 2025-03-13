export const colorsBrand = ['primary', 'secondary', 'accent', 'neutral'] as const
export type ColorsBrand = (typeof colorsBrand)[number]

export const colorsState = ['success', 'warning', 'error', 'info'] as const
export type ColorsState = (typeof colorsState)[number]
