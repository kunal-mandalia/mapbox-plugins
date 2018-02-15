import React, {Component} from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { sidebarClick } from './actions'

const SidebarWrapper = styled('div')`
  position: absolute;
  height: 100%;
  width: 250px;
  background-color: grey;
  z-index: 1;
`

const SidebarItem = styled('div')`
  display: block;
  color: white;
  padding: 8px;
`

const SidebarTitle = styled('p')`
  margin: 0;
  padding: 12px;
`

export class Sidebar extends Component {
  constructor (props) {
    super(props)
    this._onClick = this._onClick.bind(this)
  }

  _onClick (e) {
    this.props.emitMapAction(sidebarClick(e))
  }

  render () {
    const { mapActions } = this.props
    const sortedMapActions = mapActions.sort((a,b) => b.ts - a.ts)
    return (
      <SidebarWrapper onClick={this._onClick}>
        <SidebarTitle>Sidebar</SidebarTitle>
        {sortedMapActions.map((a, i) => <SidebarItem key={i}>{a.type} {a.ts}</SidebarItem>)}
      </SidebarWrapper>
    )
  }
}

export default Sidebar