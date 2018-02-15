import { MINIMAP_CLICK } from './constants'

export const minimapClick = coordinate => ({
  type: MINIMAP_CLICK,
  payload: coordinate
})
