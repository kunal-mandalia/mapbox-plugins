import { VIEWPORT_CHANGE, MAP_CLICK } from './constants'

export const viewportChange = viewport => ({ type: VIEWPORT_CHANGE, payload: viewport })
export const mapClick = event => ({ type: MAP_CLICK, payload: event })
