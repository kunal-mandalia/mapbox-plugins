import React, {Component} from 'react'
import styled, {css} from 'react-emotion'
import { minimapClick } from './actions'
import { VIEWPORT_CHANGE } from '../Map/constants'

const MinimapWrapper = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  ${props => props.viewportChange ? css`
    background-color: rgba(#8080801f,0.25);
  ` : css`
    background-color: white;  
  `}
  color: grey;
  border: solid 2px grey;
  padding: 120px;
  z-index: 10;
  transition: background-color 1s linear;
`

export class Minimap extends Component {
  static defaultProps = {
    captureScroll: true
  }

  constructor(props) {
    super(props)
  }

  onClick = e => {
    this.props.emitMapAction(minimapClick({x:0,y:0}))
  }

  render () {
    const sortedActions = this.props.mapActions.sort((a,b) => a.ts - b.ts)
    const viewportChange = sortedActions.length > 0 && sortedActions[sortedActions.length-1].type === VIEWPORT_CHANGE
    return (
      <MinimapWrapper
        onClick={this.onClick}
        viewportChange={viewportChange}
      >Minimap</MinimapWrapper>
    )
  }
}

export default Minimap