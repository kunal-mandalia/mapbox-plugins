import React, {Component} from 'react'
import { SVGOverlay } from 'react-map-gl';
import styled from 'react-emotion'

const SVGWrapper = styled('g')`
  pointer-events: all;
`

export class VesselLayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        height: 400,
        width: 400,
      }
    }
  }

  onClick = e => {
    alert('SVG Overlay clicked', e)
  }

  redraw = (opt) => {
    return <g style={{ pointerEvents: 'all' }} onClick={this.onClick}>
        <path
          d='M 100 100 L 500 0 Z'
          style={{ fill: 'rgba(0,0,0,0)', stroke: '#1FBAD6', fill: 'solid', strokeWidth: '10px' }}
        />
      </g>
  }
  
  render () {
    return <SVGOverlay
        {...this.state.viewport}
        redraw={this.redraw}
        captureClick
      />
  }
}

export default VesselLayer
